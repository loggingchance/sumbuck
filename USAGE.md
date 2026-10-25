# SumBuck activity counter

## Meaning of the numbers

- `app_opened`: once per actual app document load. Refresh counts again.
- `bucking_used`: first cut added in that document, including quick cuts.
- `grading_used`: first grade selected in that document, before submission.

Each metric counts at most once per document, using memory only. Tab changes, Reset,
Next, species/stem/market changes, scoring, comparison, edits, and repeated clicks
do not reset these counters. These are visits using a trainer, not exercise totals,
unique people, scores, verified humans, or email delivery/conversion statistics.
No attempt boundaries or scoring behavior are changed. No historical reconstruction.

Only the exact `utm_source=educator_outreach`, `utm_medium=email`, and
`utm_campaign=sumbuck_intro` combination (without duplicate campaign fields) maps to
`educator_outreach`; everything else maps to `other`. The category stays in memory.
No arbitrary URLs, referrers, parameters, or supplied strings are sent.

Outreach URL: https://sumbuck.lumbermen.org/?utm_source=educator_outreach&utm_medium=email&utm_campaign=sumbuck_intro

## Collector setup (owner only)

Use a **new dedicated** Apps Script project under `workbenchnf@gmail.com`. Paste
`collector/Code.gs`; expose the manifest in Project Settings and replace it with
`collector/appsscript.json`. No advanced services or billing are needed.

1. Run `setup` in the editor. Google consent is required. The explicit scope is
   `https://www.googleapis.com/auth/spreadsheets`, which grants broad spreadsheet
   access, not just the two destinations. Review the permission Google actually
   presents; do not bypass security or unverified-app warnings.
2. Setup creates private `SumBuck Usage — PRODUCTION` and `SumBuck Usage — QA`
   spreadsheets, each with Daily and Summary tabs. It records their IDs in Script
   Properties and leaves `ENABLED=false`. Re-running reuses recorded destinations.
3. Open both Sheets as owner and verify Share says **Restricted**. Do not publish
   either Sheet. Review the Summary labels/formulas and empty Daily header.
4. Deploy a versioned **Web app**, executing as the owner, accessible to **Anyone**
   without sign-in, only after owner approval. If the account cannot offer this,
   stop. Do not change account security, providers, or billing to work around it.
5. Set Script Property `ENABLED=true`. Keep Sheet IDs server-side only.
6. Set GitHub repository Actions variable `SUMBUCK_USAGE_COLLECTOR_URL` to the
   deployed `https://script.google.com/macros/s/.../exec` URL. It is public config,
   not a secret. The workflow bakes it into the static build. Missing or malformed
   configuration disables all collection. Merge/publish only the reviewed revision.
7. On the published host, visit `?sumbuck_qa=1`, add a cut, and select a grade.
   Verify three actual increments in **QA**, none in PRODUCTION. Repeated actions
   must not increment again; refresh should add a new app-open count.
8. Verify QA Summary updates. Test opt-out and DNT/GPC separately. Test a modest
   classroom burst against QA, checking actual increments and lock behavior.
   Unit tests simulate accepted writes and lock contention; they cannot prove
   Google's runtime concurrency, redirect transport, permissions, or persistence.
9. Confirm published revision, run normal practice checks, and report the private
   dashboard links. Do not claim counting is live until browser persistence is proven.

The private IDs are fixed Script Properties. The only public action is `doPost`,
accepting an allowlisted event, campaign, and `production`/`qa` mode. There is no
public reader or caller-selected Sheet/range/formula/timestamp/increment amount.
The owner setup function is an editor action, not a public HTTP dispatcher.

## Privacy and browser safety

Payload is exactly `{event,campaign,mode}`. No names, email addresses, IP storage,
learner identifiers, scores, prices, log details, fingerprints, cookies, or persistent
visitor IDs. Google still processes network requests and may see network metadata.
The app does not log request bodies. Only daily aggregate rows are stored.

Only production builds on `sumbuck.lumbermen.org` send. Local/development/preview
hosts send nothing, even with QA enabled. `?sumbuck_qa=1` isolates test traffic in
QA; it is not an anti-abuse mechanism. `?sumbuck_optout=1` excludes a document from
the start. About contains a button to stop future counts without reloading or
changing exercise state. Opt-out is visit-scoped; refresh resets it unless the
URL flag remains. DNT (`1`/`yes`) and Global Privacy Control suppress requests.

Simple text POST uses no-cors, omitted credentials, no referrer, and a four-second
abort signal. No awaits in action handlers and no automatic retries. A resolved
opaque response (including Apps Script's Content Service redirect) proves nothing
about storage. Offline use, blocking, consent signals, quotas, and failures undercount.
The tiny synchronous counter guard also catches unsupported transport APIs.

## Limits and operations

Reporting timezone: **America/Denver**, date assigned by the server. One row per
day/event/campaign in each destination (at most six new rows/day). Script-level
lock waits at most one second; all writes flush before releasing it. Storage is
capped at 25,000 rows including the header, and each daily event/campaign count
saturates at 10,000. Reaching a cap stops affected increments, never the trainer.
The Daily count approaching 10,000 or row count approaching 25,000 signals saturation.
Review Google's execution/error dashboard for infrastructure quota failures.

An anonymous endpoint can receive forged/replayed traffic and exhaust owner quotas.
Client memory deduplication does not deduplicate public replay. URL obscurity,
CORS, Origin/Referer, and embedded keys are not authentication. These are directional
activity totals, suitable for modest outreach, not an audited analytics service.
Input validation and storage caps bound writes, not incoming execution volume.

No paid resources, card, subscription, billing-enabled project, or fallback is
required. Default Apps Script infrastructure still uses a Google-managed default
Cloud project; do not attach a billing-enabled project. Quotas are account-specific
and may change. The current Google quota page lists 30 simultaneous executions
per user and 1,000 per script; owner execution can hit the per-user limit first.
Do not load-test Google or exhaust quotas. Collection drops failures without retry.

Disable immediately: set Script Property `ENABLED=false`. To remove browser traffic,
clear `SUMBUCK_USAGE_COLLECTOR_URL` and rebuild/redeploy. Existing loaded documents
may still POST, but the disabled server does not write. Archive the deployment to
close its public endpoint. Do not delete stored Sheets without owner approval.
Rollback app changes using the repository's normal reviewed revert/deploy process.

References: [web apps](https://developers.google.com/apps-script/guides/web),
[quotas](https://developers.google.com/apps-script/guides/services/quotas),
[Content Service](https://developers.google.com/apps-script/guides/content),
[LockService](https://developers.google.com/apps-script/reference/lock/lock-service).
