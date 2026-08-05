import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "A-Line Realty — Premium Real Estate Bangalore",
    short_name: "A-Line Realty",
    description:
      "Bangalore's trusted real estate channel partner. Explore premium residential and commercial properties with A-Line Realty.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#b8860b",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en-IN",
    categories: ["real estate", "property", "business"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/screenshot-desktop.jpg",
        sizes: "1280x720",
        type: "image/jpeg",
      },
      {
        src: "/screenshot-mobile.jpg",
        sizes: "390x844",
        type: "image/jpeg",
      },
    ],
  };
}
