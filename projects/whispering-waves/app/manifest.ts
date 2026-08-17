import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Suraksha Whispering Waves — A-Line Realty",
    short_name: "Whispering Waves",
    description: "2, 3 & 4 BHK apartments near Begur Lake, South Bengaluru. Get price, floor plans and site visit.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#c99830",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
