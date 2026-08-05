# A-Line Realty

Premium real estate channel partner landing page built with **Next.js 16** and **Tailwind CSS v4**.

## Stack

- **Framework**: Next.js 16.3 (App Router, static export)
- **Styling**: Tailwind CSS v4 with custom gold/charcoal design system
- **Fonts**: Playfair Display (headings) + Inter (body) via `next/font/google`
- **Icons**: lucide-react
- **Language**: TypeScript

## Pages & Sections

| Section | Description |
|---|---|
| Navbar | Sticky, transparent → dark on scroll, mobile drawer |
| Hero | Full-screen with gold shimmer headline + stats bar |
| About | Company story, milestone timeline, floating stat badges |
| Why Choose Us | 6-card hover grid with gold reveal animations |
| Services | 6 service cards with icon boxes |
| Featured Projects | Filterable property grid (All / Residential / Commercial / Luxury) |
| Testimonials | Carousel with pagination dots |
| FAQ | AEO accordion with 8 buyer questions |
| Contact | Enquiry form with property type, budget, success state |
| Footer | CTA strip, 5-column link grid, social icons |
| WhatsApp Button | Floating button with pre-filled message + pulse ring |

## SEO / AIO / GEO / AEO

| File | Purpose |
|---|---|
| `app/layout.tsx` | Full metadata: OG, Twitter Card, GEO tags, Dublin Core, LLM discovery |
| `app/sitemap.ts` | Dynamic XML sitemap (16 URLs) |
| `app/robots.ts` | Crawler rules — search engines + 8 AI bots allowed |
| `app/manifest.ts` | PWA manifest with gold theme colour |
| `public/llms.txt` | Structured LLM/AI grounding file (llmstxt.org format) |
| `components/JsonLd.tsx` | Schema.org @graph: Organization, RealEstateAgent, WebSite, BreadcrumbList, FAQPage |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build   # production build
npm run start   # serve production build
```

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `gold-400` | `#d4a017` | Accents, icons |
| `gold-500` | `#b8860b` | Primary gold, CTA buttons |
| `charcoal-900` | `#0a0a0a` | Page background |
| `charcoal-800` | `#111111` | Card backgrounds |
| `charcoal-50` | `#f5f5f5` | Body text |
