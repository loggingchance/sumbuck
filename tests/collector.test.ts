import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { describe, expect, it, vi } from 'vitest';

function collector() {
  const rows: unknown[][] = [['Date','Event','Campaign','Count']];
  let held = false;
  const sheet = {
    getLastRow: () => rows.length,
    getMaxRows: () => 1000,
    insertRowsAfter: vi.fn(),
    getRange: (r: number,c: number,h=1,w=1) => ({
      getValues: () => rows.slice(r-1,r-1+h).map(row=>row.slice(c-1,c-1+w)),
      setValue: (value: unknown) => { expect(held).toBe(true); rows[r-1][c-1]=value; },
      setValues: (values: unknown[][]) => { expect(held).toBe(true); values.forEach((row,i)=>{ rows[r-1+i] ??= []; row.forEach((v,j)=>{rows[r-1+i][c-1+j]=v;}); }); },
      setNumberFormat: vi.fn()
    })
  };
  const openById = vi.fn(() => ({getSheetByName:()=>sheet}));
  const flush = vi.fn(() => {expect(held).toBe(true);});
  const releaseLock = vi.fn(() => {held=false;});
  const tryLock = vi.fn(() => {if(held) return false; held=true; return true;});
  const properties: Record<string,string> = {ENABLED:'true',QA_SHEET_ID:'test-only',PRODUCTION_SHEET_ID:'production-only'};
  const context = vm.createContext({
    ContentService:{createTextOutput:()=> 'OK'},
    PropertiesService:{getScriptProperties:()=>({getProperty:(key:string)=>properties[key]})},
    LockService:{getScriptLock:()=>({tryLock,releaseLock})},
    SpreadsheetApp:{openById,flush}, Utilities:{formatDate:()=> '2026-10-25'}
  });
  vm.runInContext(readFileSync(new URL('../collector/Code.gs',import.meta.url),'utf8')+'\nthis.post=doPost;',context);
  const post = (body: unknown, extra = {}) => {
    const contents=typeof body==='string'? body : JSON.stringify(body);
    return context.post({contentLength:contents.length,postData:{contents,type:'text/plain;charset=UTF-8'},...extra});
  };
  return {post,rows,openById,flush,releaseLock,tryLock,properties};
}
const valid = {event:'app_opened',campaign:'other',mode:'qa'};

describe('write-only aggregate collector', () => {
  it.each(['bad json',null,[],{...valid,event:'email@example.com'},{...valid,campaign:'=IMPORTDATA("x")'},
    {...valid,mode:'unexpected'},{...valid,count:100},{...valid,sheetId:'other'},'x'.repeat(257)])('rejects %j before opening storage', body => {
    const c=collector(); expect(c.post(body)).toBe('OK'); expect(c.openById).not.toHaveBeenCalled();
  });
  it('rejects unsupported content types and oversize reported lengths', () => {
    const c=collector();
    c.post(valid,{postData:{contents:JSON.stringify(valid),type:'application/json'}});
    c.post(valid,{contentLength:999}); expect(c.openById).not.toHaveBeenCalled();
  });
  it('aggregates repeated and classroom-sized accepted writes into one row under lock', () => {
    const c=collector(); for(let i=0;i<30;i++) c.post(valid);
    expect(c.rows).toEqual([['Date','Event','Campaign','Count'],['2026-10-25','app_opened','other',30]]);
    expect(c.openById).toHaveBeenCalledWith('test-only');
    expect(c.flush).toHaveBeenCalledTimes(30); expect(c.releaseLock).toHaveBeenCalledTimes(30);
  });
  it('routes production separately and accepts only fixed event/campaign values', () => {
    const c=collector(); c.post({...valid,mode:'production',event:'grading_used',campaign:'educator_outreach'});
    expect(c.openById).toHaveBeenCalledWith('production-only');
  });
  it('drops lock contention rather than writing outside the lock', () => {
    const c=collector(); c.tryLock.mockReturnValueOnce(false); c.post(valid);
    expect(c.openById).not.toHaveBeenCalled(); expect(c.releaseLock).not.toHaveBeenCalled();
  });
  it('releases lock on storage failure, returning no private error details', () => {
    const c=collector(); c.openById.mockImplementationOnce(()=>{throw Error('private id');});
    expect(c.post(valid)).toBe('OK'); expect(c.releaseLock).toHaveBeenCalledOnce();
  });
  it('supports an immediate server-side disable and a bounded counter', () => {
    const c=collector(); c.properties.ENABLED='false'; c.post(valid); expect(c.openById).not.toHaveBeenCalled();
    c.properties.ENABLED='true'; c.post(valid); c.rows[1][3]=10000; c.post(valid); expect(c.rows[1][3]).toBe(10000);
  });
});
