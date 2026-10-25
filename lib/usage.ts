export const USAGE_EVENTS = ["app_opened", "bucking_used", "grading_used"] as const;
export type UsageEvent = (typeof USAGE_EVENTS)[number];

interface UsageEnvironment {
  production: boolean;
  endpoint?: string;
  location: Pick<Location, "hostname" | "search">;
  navigator: { doNotTrack?: string | null; globalPrivacyControl?: boolean };
  send: (url: string, options: RequestInit) => Promise<unknown>;
}

export function validCollector(value: string | undefined): value is string {
  return !!value && /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(value);
}

export function createUsageCounter(env: UsageEnvironment) {
  const sent = new Set<UsageEvent>();
  const query = new URLSearchParams(env.location.search);
  const campaign = query.getAll("utm_source").length === 1 &&
    query.getAll("utm_medium").length === 1 && query.getAll("utm_campaign").length === 1 &&
    query.get("utm_source") === "educator_outreach" && query.get("utm_medium") === "email" &&
    query.get("utm_campaign") === "sumbuck_intro" ? "educator_outreach" : "other";
  const mode = query.get("sumbuck_qa") === "1" ? "qa" : "production";
  let optedOut = query.get("sumbuck_optout") === "1";
  return {
    isOptedOut: () => optedOut,
    optOut: () => { optedOut = true; },
    track(event: UsageEvent) {
      try {
        if (!env.production || env.location.hostname !== "sumbuck.lumbermen.org" ||
          !validCollector(env.endpoint) || optedOut || env.navigator.doNotTrack === "1" ||
          env.navigator.doNotTrack === "yes" || env.navigator.globalPrivacyControl === true ||
          !USAGE_EVENTS.includes(event) || sent.has(event)) return;
        // Mark before sending. Never retry an opaque or failed request: it may already have counted.
        sent.add(event);
        void env.send(env.endpoint, {
          method: "POST", mode: "no-cors", credentials: "omit", referrerPolicy: "no-referrer",
          headers: { "Content-Type": "text/plain;charset=UTF-8" },
          body: JSON.stringify({ event, campaign, mode }),
          signal: AbortSignal.timeout(4000)
        }).catch(() => {});
      } catch { /* Collection must never affect practice, including synchronous browser failures. */ }
    }
  };
}

let counter: ReturnType<typeof createUsageCounter> | undefined;
export function browserUsage() {
  if (typeof window === "undefined") return undefined;
  counter ??= createUsageCounter({
    production: process.env.NODE_ENV === "production",
    endpoint: process.env.NEXT_PUBLIC_USAGE_COLLECTOR_URL,
    location: window.location, navigator: window.navigator,
    send: (url, options) => window.fetch(url, options)
  });
  return counter;
}
