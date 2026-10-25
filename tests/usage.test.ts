import { describe, expect, it, vi } from 'vitest';
import { createUsageCounter, validCollector } from '../lib/usage';

const endpoint = 'https://script.google.com/macros/s/test-deployment/exec';
function fixture(overrides: Record<string, unknown> = {}) {
  const send = vi.fn().mockResolvedValue({ type: 'opaque' });
  const env = { production: true, endpoint, location: { hostname: 'sumbuck.lumbermen.org', search: '' }, navigator: {}, send, ...overrides };
  return { usage: createUsageCounter(env), send };
}

describe('visit activity counter', () => {
  it('counts each activity once, across repeated actions and rerenders', () => {
    const {usage, send} = fixture();
    for (let i = 0; i < 4; i++) {
      usage.track('app_opened'); usage.track('bucking_used'); usage.track('grading_used');
    }
    expect(send).toHaveBeenCalledTimes(3);
    expect(JSON.parse(send.mock.calls[1][1].body)).toEqual({event:'bucking_used',campaign:'other',mode:'production'});
    expect(send.mock.calls[0][1]).toMatchObject({mode:'no-cors',credentials:'omit',referrerPolicy:'no-referrer'});
  });
  it('a new document counts again, without persistent identity/storage', () => {
    const a = fixture(); const b = fixture();
    a.usage.track('app_opened'); b.usage.track('app_opened');
    expect(a.send).toHaveBeenCalledOnce(); expect(b.send).toHaveBeenCalledOnce();
  });
  it.each([undefined, '', 'https://evil.com/exec', endpoint+'?id=private', endpoint+'#x', 'http://script.google.com/macros/s/x/exec'])('rejects endpoint %s', value => {
    expect(validCollector(value)).toBe(false);
    const {usage,send}=fixture({endpoint:value}); usage.track('app_opened'); expect(send).not.toHaveBeenCalled();
  });
  it.each([
    {production:false}, {location:{hostname:'localhost',search:''}},
    {location:{hostname:'preview.example.com',search:''}},
    {navigator:{doNotTrack:'1'}}, {navigator:{doNotTrack:'yes'}}, {navigator:{globalPrivacyControl:true}},
    {location:{hostname:'sumbuck.lumbermen.org',search:'?sumbuck_optout=1'}}
  ])('excludes private/development traffic %j', overrides => {
    const {usage,send}=fixture(overrides); usage.track('app_opened'); expect(send).not.toHaveBeenCalled();
  });
  it('opt-out takes effect immediately and keeps earlier counters unchanged', () => {
    const {usage,send}=fixture(); usage.track('app_opened'); usage.optOut(); usage.track('bucking_used');
    expect(usage.isOptedOut()).toBe(true); expect(send).toHaveBeenCalledOnce();
  });
  it.each([
    ['?utm_source=educator_outreach&utm_medium=email&utm_campaign=sumbuck_intro&email=private@example.com', 'educator_outreach'],
    ['?utm_source=educator_outreach&utm_medium=other&utm_campaign=sumbuck_intro', 'other'],
    ['?utm_source=educator_outreach&utm_source=evil&utm_medium=email&utm_campaign=sumbuck_intro', 'other'],
    ['?email=private@example.com&score=99', 'other']
  ])('maps campaign without sending supplied strings', (search,campaign) => {
    const {usage,send}=fixture({location:{hostname:'sumbuck.lumbermen.org',search}}); usage.track('app_opened');
    expect(JSON.parse(send.mock.calls[0][1].body)).toEqual({event:'app_opened',campaign,mode:'production'});
  });
  it('routes QA to a separate destination via a fixed enum', () => {
    const {usage,send}=fixture({location:{hostname:'sumbuck.lumbermen.org',search:'?sumbuck_qa=1'}}); usage.track('app_opened');
    expect(JSON.parse(send.mock.calls[0][1].body).mode).toBe('qa');
  });
  it.each([() => Promise.reject(new Error('offline')), () => {throw new Error('blocked');}])('fails open without retry', async send => {
    const wrapped=vi.fn(send); const {usage}=fixture({send:wrapped});
    expect(()=>usage.track('bucking_used')).not.toThrow(); await Promise.resolve();
    usage.track('bucking_used'); expect(wrapped).toHaveBeenCalledOnce();
  });
  it('does not send unknown event values', () => {
    const {usage,send}=fixture(); usage.track('email@example.com' as never); expect(send).not.toHaveBeenCalled();
  });
});
