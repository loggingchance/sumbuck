// Dedicated SumBuck collector. No GET reader and no raw request logging.
const EVENTS = ['app_opened', 'bucking_used', 'grading_used'];
const CAMPAIGNS = ['educator_outreach', 'other'];
const TIMEZONE = 'America/Denver';
const MAX_ROWS = 25000;
const MAX_COUNT = 10000; // Per day/event/campaign. Saturate rather than grow without bound.

function parsePayload(e) {
  if (!e || !e.postData || typeof e.postData.contents !== 'string' ||
      e.postData.contents.length > 256 || e.contentLength > 256 ||
      !/^text\/plain(?:;|$)/i.test(e.postData.type || '')) return null;
  let value;
  try { value = JSON.parse(e.postData.contents); } catch (_) { return null; }
  if (!value || Array.isArray(value) || typeof value !== 'object' ||
      Object.keys(value).sort().join(',') !== 'campaign,event,mode' ||
      !EVENTS.includes(value.event) || !CAMPAIGNS.includes(value.campaign) ||
      !['production', 'qa'].includes(value.mode)) return null;
  return value;
}

function doPost(e) {
  const ack = () => ContentService.createTextOutput('OK');
  const payload = parsePayload(e);
  if (!payload) return ack();
  const props = PropertiesService.getScriptProperties();
  if (props.getProperty('ENABLED') !== 'true') return ack();
  const id = props.getProperty(payload.mode === 'qa' ? 'QA_SHEET_ID' : 'PRODUCTION_SHEET_ID');
  if (!id) return ack();
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) return ack();
  try {
    const sheet = SpreadsheetApp.openById(id).getSheetByName('Daily');
    const day = Utilities.formatDate(new Date(), TIMEZONE, 'yyyy-MM-dd');
    increment(sheet, day, payload.event, payload.campaign);
  } catch (_) {
    // No request/body/error logs. Quota/network/lock failures undercount; app stays usable.
  } finally {
    lock.releaseLock();
  }
  return ack();
}

function increment(sheet, day, event, campaign) {
  if (!sheet || sheet.getRange(1, 1, 1, 4).getValues()[0].join('|') !== 'Date|Event|Campaign|Count') return;
  const last = sheet.getLastRow();
  const rows = last > 1 ? sheet.getRange(2, 1, last - 1, 4).getValues() : [];
  const match = rows.findIndex(row => row[0] === day && row[1] === event && row[2] === campaign);
  if (match >= 0) {
    const count = rows[match][3];
    if (Number.isInteger(count) && count >= 0 && count < MAX_COUNT) sheet.getRange(match + 2, 4).setValue(count + 1);
  } else if (last < MAX_ROWS) {
    const capacity = sheet.getMaxRows();
    if (last >= capacity) sheet.insertRowsAfter(capacity, Math.min(1000, MAX_ROWS - capacity));
    sheet.getRange(last + 1, 1).setNumberFormat('@');
    sheet.getRange(last + 1, 1, 1, 4).setValues([[day, event, campaign, 1]]);
  }
  // Flush pending writes while the lock is held, including concurrent first-row creation.
  SpreadsheetApp.flush();
}

// Run once in the editor as workbenchnf@gmail.com. Existing destinations are reused.
function setup() {
  const props = PropertiesService.getScriptProperties();
  ['PRODUCTION', 'QA'].forEach(mode => {
    const key = mode + '_SHEET_ID';
    if (props.getProperty(key)) return;
    const book = SpreadsheetApp.create('SumBuck Usage — ' + mode);
    book.setSpreadsheetTimeZone(TIMEZONE);
    const daily = book.getSheets()[0];
    daily.setName('Daily');
    daily.getRange(1, 1, 1, 4).setValues([['Date', 'Event', 'Campaign', 'Count']]);
    daily.setFrozenRows(1);
    daily.getRange('A:A').setNumberFormat('@');
    const summary = book.insertSheet('Summary');
    summary.getRange(1, 1, 1, 2).setValues([['Activity totals — ' + mode, 'Count']]);
    const labels = ['App opens (page loads)', 'Visits using bucking', 'Visits using grading'];
    EVENTS.forEach((event, i) => {
      summary.getRange(i + 2, 1).setValue(labels[i]);
      summary.getRange(i + 2, 2).setFormula('=SUMIF(Daily!B2:B25000,"' + event + '",Daily!D2:D25000)');
    });
    summary.getRange(6, 1).setValue('Campaign');
    summary.getRange(6, 2).setValue('App opens');
    CAMPAIGNS.forEach((campaign, i) => {
      summary.getRange(i + 7, 1).setValue(campaign);
      summary.getRange(i + 7, 2).setFormula('=SUMIFS(Daily!D2:D25000,Daily!B2:B25000,"app_opened",Daily!C2:C25000,"' + campaign + '")');
    });
    summary.getRange(10, 1).setValue('Timezone: America/Denver. Activity totals, not unique people. Refresh counts again.');
    summary.setFrozenRows(1);
    summary.autoResizeColumns(1, 2);
    props.setProperty(key, book.getId());
  });
  // Deliberately leave disabled until owner deployment and privacy checks are complete.
  if (!props.getProperty('ENABLED')) props.setProperty('ENABLED', 'false');
}
