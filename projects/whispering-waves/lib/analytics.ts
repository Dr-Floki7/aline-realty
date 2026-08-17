/**
 * lib/analytics.ts
 * GA4 event helpers — only fires when measurement ID is set and window exists.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params ?? {});
}

export const GA_EVENTS = {
  PAGE_VIEW:        "page_view",
  FORM_START:       "form_start",
  FORM_SUBMIT:      "form_submit",
  BROCHURE_CLICK:   "brochure_click",
  FLOORPLAN_CLICK:  "floorplan_click",
  SITE_VISIT_CLICK: "site_visit_click",
  WHATSAPP_CLICK:   "whatsapp_click",
  PHONE_CLICK:      "phone_click",
  PRICE_CLICK:      "price_click",
} as const;
