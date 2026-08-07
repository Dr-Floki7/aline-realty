import type { MetadataRoute } from "next";

const BASE = "https://www.alinerealty.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return [
    { url: BASE,                          lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/#about`,              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/#why-us`,             lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/#services`,           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/#contact`,            lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/privacy-policy`,      lastModified: now, changeFrequency: "yearly",  priority: 0.4 },
    { url: `${BASE}/terms`,               lastModified: now, changeFrequency: "yearly",  priority: 0.4 },
  ];
}
