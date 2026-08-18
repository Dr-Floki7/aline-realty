import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ||
  "https://whisperingwaves.aline-realty.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "Googlebot",       allow: ["/"], disallow: ["/api/"] },
      { userAgent: "Bingbot",         allow: ["/"], disallow: ["/api/"] },
      { userAgent: "GPTBot",          allow: ["/"] },
      { userAgent: "ChatGPT-User",    allow: ["/"] },
      { userAgent: "ClaudeBot",       allow: ["/"] },
      { userAgent: "PerplexityBot",   allow: ["/"] },
      { userAgent: "Google-Extended", allow: ["/"] },
      { userAgent: "Applebot",        allow: ["/"] },
      { userAgent: "*",               allow: ["/"], disallow: ["/api/", "/_next/"] },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
