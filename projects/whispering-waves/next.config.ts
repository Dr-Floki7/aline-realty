import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence workspace root warning when nested inside a monorepo
  turbopack: {
    root: __dirname,
  },
  // Production domain set via NEXT_PUBLIC_SITE_URL env var
  // Never hardcode here — used in metadata/sitemap only
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 768, 1024, 1280, 1536],
    imageSizes: [64, 128, 256, 384],
  },
  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
