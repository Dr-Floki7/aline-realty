/**
 * app/api/lead/route.ts
 * Server-side lead capture API.
 *
 * Architecture:
 *   Website Form → POST /api/lead → Google Apps Script Web App → Google Sheet
 *
 * Environment variables required:
 *   GOOGLE_SHEETS_WEBHOOK_URL  — Google Apps Script web app URL
 *
 * The Apps Script must accept a POST with a JSON body and append a row.
 */

import { NextRequest, NextResponse } from "next/server";

// ── Input validation helpers ─────────────────────────────────────────────────
function sanitize(str: unknown): string {
  if (typeof str !== "string") return "";
  return str.trim().slice(0, 500).replace(/[<>]/g, "");
}

function isValidIndianMobile(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-().+]/g, "");
  return /^[6-9]\d{9}$/.test(cleaned) ||
         /^(?:91)?[6-9]\d{9}$/.test(cleaned);
}

function buildRow(data: Record<string, string>) {
  return {
    timestamp:    new Date().toISOString(),
    name:         sanitize(data.name),
    phone:        sanitize(data.phone),
    config:       sanitize(data.config),
    enquiryType:  sanitize(data.enquiryType) || "general",
    pageUrl:      sanitize(data.pageUrl),
    utmSource:    sanitize(data.utmSource),
    utmMedium:    sanitize(data.utmMedium),
    utmCampaign:  sanitize(data.utmCampaign),
    utmTerm:      sanitize(data.utmTerm),
    utmContent:   sanitize(data.utmContent),
    referrer:     sanitize(data.referrer),
    userAgent:    sanitize(data.userAgent),
    leadStatus:   "New",
  };
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body" }, { status: 400 });
  }

  // ── Validate required fields ──────────────────────────────────────────────
  const name  = sanitize(body.name  as string);
  const phone = sanitize(body.phone as string);

  if (!name || name.length < 2) {
    return NextResponse.json({ success: false, error: "A valid name is required." }, { status: 422 });
  }
  if (!phone || !isValidIndianMobile(phone)) {
    return NextResponse.json({ success: false, error: "A valid 10-digit Indian mobile number is required." }, { status: 422 });
  }

  // ── Basic spam guard: honeypot field ──────────────────────────────────────
  if (sanitize(body.website as string) !== "") {
    // Honeypot triggered — silently accept but don't record
    return NextResponse.json({ success: true });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl || webhookUrl.includes("YOUR_SCRIPT_ID")) {
    // Webhook not configured — log locally and return success so form UX works
    console.warn("[lead/route] GOOGLE_SHEETS_WEBHOOK_URL not set. Lead not forwarded.", buildRow(body as Record<string, string>));
    return NextResponse.json({ success: true, note: "webhook_not_configured" });
  }

  // ── Forward to Google Sheets via Apps Script ──────────────────────────────
  try {
    const row = buildRow(body as Record<string, string>);
    const response = await fetch(webhookUrl, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(row),
      redirect: "follow",
    });

    // Google Apps Script returns 302 → 200 with HTML or JSON.
    // Any 2xx after following redirects means the script executed.
    if (response.status >= 200 && response.status < 400) {
      return NextResponse.json({ success: true });
    }

    console.error("[lead/route] Apps Script returned:", response.status, await response.text().catch(() => ""));
    return NextResponse.json({ success: false, error: "Could not record your enquiry. Please call us directly." }, { status: 502 });
  } catch (err) {
    console.error("[lead/route] Fetch to Apps Script failed:", err);
    return NextResponse.json({ success: false, error: "Could not record your enquiry. Please try again or call us directly." }, { status: 500 });
  }
}
