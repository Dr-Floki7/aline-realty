import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ||
  "https://suraksha-whisperingwaves.aline-realty.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return [
    { url: BASE,                        lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/#overview`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/#floor-plans`,      lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/#price`,            lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/#amenities`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/#club-elan`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/#location`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/#rera`,             lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/#faq`,              lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/#contact`,          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
