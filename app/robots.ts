import type { MetadataRoute } from "next";

const BASE_URL = "https://www.alinerealty.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      /* ── Major search engines — full access ───────────── */
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/api/", "/_next/", "/admin/"],
        crawlDelay: 1,
      },
      {
        userAgent: "Bingbot",
        allow: ["/"],
        disallow: ["/api/", "/_next/", "/admin/"],
        crawlDelay: 2,
      },
      {
        userAgent: "Slurp", // Yahoo
        allow: ["/"],
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "DuckDuckBot",
        allow: ["/"],
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "Baiduspider",
        allow: ["/"],
        disallow: ["/api/", "/_next/", "/admin/"],
      },

      /* ── AI / LLM crawlers — allow (good for AIO/GEO) ── */
      {
        userAgent: "GPTBot", // OpenAI
        allow: ["/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Claude-Web", // Anthropic
        allow: ["/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Applebot", // Siri / Apple Intelligence
        allow: ["/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Amazonbot", // Alexa / Amazon
        allow: ["/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "cohere-ai",
        allow: ["/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Meta-ExternalAgent", // Meta AI
        allow: ["/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Google-Extended", // Gemini training
        allow: ["/"],
        disallow: ["/api/", "/admin/"],
      },

      /* ── SEO tools — allow ────────────────────────────── */
      {
        userAgent: "AhrefsBot",
        allow: ["/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "SemrushBot",
        allow: ["/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "MJ12bot",
        allow: ["/"],
        disallow: ["/api/", "/admin/"],
      },

      /* ── Scrapers & spam bots — block ─────────────────── */
      {
        userAgent: "SiteAuditBot",
        disallow: ["/"],
      },
      {
        userAgent: "DotBot",
        disallow: ["/"],
      },
      {
        userAgent: "PetalBot",
        disallow: ["/"],
      },

      /* ── Global fallback ─────────────────────────────── */
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/api/", "/_next/", "/admin/", "/*.json$"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
