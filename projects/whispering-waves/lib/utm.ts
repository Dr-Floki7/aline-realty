/**
 * lib/utm.ts
 * UTM parameter capture + session persistence.
 * Stores UTM params in sessionStorage so attribution is preserved
 * even if the user navigates before submitting a form.
 */

export interface UtmData {
  utm_source:   string;
  utm_medium:   string;
  utm_campaign: string;
  utm_term:     string;
  utm_content:  string;
  referrer:     string;
  page_url:     string;
}

const SESSION_KEY = "ww_utm";

/** Read UTM params from the current URL and merge with any stored values. */
export function captureUtm(): UtmData {
  if (typeof window === "undefined") {
    return { utm_source:"", utm_medium:"", utm_campaign:"", utm_term:"", utm_content:"", referrer:"", page_url:"" };
  }

  const params = new URLSearchParams(window.location.search);
  const stored = getStoredUtm();

  const fresh: Partial<UtmData> = {};
  for (const key of ["utm_source","utm_medium","utm_campaign","utm_term","utm_content"] as const) {
    const v = params.get(key);
    if (v) fresh[key] = v;
  }

  const merged: UtmData = {
    utm_source:   fresh.utm_source   || stored.utm_source   || "",
    utm_medium:   fresh.utm_medium   || stored.utm_medium   || "",
    utm_campaign: fresh.utm_campaign || stored.utm_campaign || "",
    utm_term:     fresh.utm_term     || stored.utm_term     || "",
    utm_content:  fresh.utm_content  || stored.utm_content  || "",
    referrer:     document.referrer  || stored.referrer     || "",
    page_url:     window.location.href,
  };

  // Persist for the session
  try { sessionStorage.setItem(SESSION_KEY, JSON.stringify(merged)); } catch {}

  return merged;
}

export function getStoredUtm(): Partial<UtmData> {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as Partial<UtmData>) : {};
  } catch {
    return {};
  }
}
