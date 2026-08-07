import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "A-Line Realty — Trusted Real Estate Consultancy Bengaluru",
    short_name: "A-Line Realty",
    description: "Trusted real estate consultancy in Bengaluru. Buy residential and commercial properties with expert guidance.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#c7a246",
    orientation: "portrait-primary",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
