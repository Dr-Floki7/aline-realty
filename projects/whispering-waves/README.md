# Suraksha Whispering Waves — A-Line Realty Microsite

SEO-first, high-conversion lead-generation microsite for **Suraksha Whispering Waves** — a residential project by R K Suraksha Properties, Begur, South Bengaluru.

**Production domain:** `https://suraksha-whispering-waves.aline-realty.in`

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.3 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 11.15 |
| Icons | Lucide React |
| Deployment | Vercel |
| Lead capture | Next.js API Route → Google Apps Script → Google Sheet |
| Analytics | GA4 via env var |

## Quick Start

```bash
cd projects/whispering-waves
cp .env.example .env.local  # fill in your values
npm install
npm run dev     # http://localhost:3001
npm run build   # production build
```

## Environment Variables

See `.env.example` for all required variables:
- `NEXT_PUBLIC_SITE_URL` — production domain
- `GOOGLE_SHEETS_WEBHOOK_URL` — Apps Script web app URL
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — GA4 measurement ID
- `NEXT_PUBLIC_PHONE` / `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_GSC_VERIFICATION` — Google Search Console token

## Architecture

```
app/
├── page.tsx          ← Main page (15 sections)
├── api/lead/route.ts ← Server-side lead capture
├── layout.tsx        ← SEO metadata, JSON-LD
├── sitemap.ts        ← XML sitemap
├── robots.ts         ← Robots.txt
├── manifest.ts       ← PWA manifest
└── not-found.tsx     ← 404 page

lib/
├── project-data.ts   ← Single source of truth (RERA, floor plans, amenities, FAQs)
├── utm.ts            ← UTM capture + session persistence
└── analytics.ts      ← GA4 event helpers

components/
├── Header.tsx
├── Footer.tsx
├── LeadForm.tsx      ← Reusable, UTM-aware, honeypot spam guard
├── MobileStickyBar.tsx
├── WhatsAppFAB.tsx
├── Analytics.tsx
└── sections/         ← 15 page sections
```

## Data Sources

| Priority | Source | Used For |
|---|---|---|
| 1 | Karnataka RERA certificate | RERA number, approval date, validity, promoter, address |
| 2 | Developer website (surakshawhisperingwaves.com) | Amenities, connectivity distances, project description |
| 3 | All Unit Floor Plans PDF | Tower/type/config/area data |
| 4 | WW Brochure 1 | Amenity zone groupings, Club Élan facilities |

**Floor plan areas are estimated** — the PDF is image-only with no text layer. Verify manually.

## Deployment (Vercel + GoDaddy)

1. Import repo → set Root Directory to `projects/whispering-waves`
2. Add all env vars from `.env.example`
3. Deploy → get preview URL
4. Add domain `suraksha-whispering-waves.aline-realty.in`
5. In GoDaddy: CNAME `suraksha-whispering-waves` → Vercel target
6. Wait for SSL → verify production URL

## Lead Flow

```
User submits form
  → POST /api/lead (validates phone, honeypot check)
    → Google Apps Script webhook
      → Google Sheet (row appended)
```

All UTM params, referrer, page URL and user agent are captured.

## SEO / AIO

- JSON-LD: Organization, WebSite, WebPage, ApartmentComplex, BreadcrumbList, FAQPage
- Technical: canonical, sitemap, robots, OG, Twitter, GEO tags, ICBM
- AEO: FAQ section with concise answer-first format
- LLM: `public/llms.txt` for AI grounding
