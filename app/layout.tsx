import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL = "https://www.alinerealty.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  /* ── Core ─────────────────────────────────────────────── */
  title: {
    default: "A-Line Realty | Premium Real Estate Channel Partner in Bangalore",
    template: "%s | A-Line Realty Bangalore",
  },
  description:
    "A-Line Realty is Bangalore's trusted real estate channel partner since 2012. Explore premium residential apartments, luxury villas, commercial spaces, and investment-grade properties across Whitefield, Sarjapur, Indiranagar, Koramangala, Hebbal & Devanahalli.",
  keywords: [
    "real estate Bangalore",
    "luxury properties Bangalore",
    "channel partner Bangalore",
    "buy flat Bangalore",
    "A-Line Realty",
    "residential properties Bangalore",
    "commercial real estate Bangalore",
    "new projects Bangalore 2024",
    "Prestige Sobha Brigade projects",
    "Whitefield property for sale",
    "Sarjapur Road apartments",
    "real estate investment Bangalore",
    "RERA registered properties",
    "2 BHK 3 BHK flat Bangalore",
    "real estate agent Bangalore",
  ],
  authors: [{ name: "A-Line Realty", url: BASE_URL }],
  creator: "A-Line Realty",
  publisher: "A-Line Realty",
  category: "Real Estate",

  /* ── Canonical & Robots ───────────────────────────────── */
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-IN": BASE_URL,
      "en-US": BASE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ── Open Graph ───────────────────────────────────────── */
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "A-Line Realty",
    title: "A-Line Realty | Premium Real Estate Channel Partner in Bangalore",
    description:
      "Discover premium residential and commercial properties in Bangalore with A-Line Realty — 12+ years of trust, 500+ properties sold, ₹2000 Cr+ in transactions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A-Line Realty — Premium Real Estate in Bangalore",
        type: "image/jpeg",
      },
    ],
  },

  /* ── Twitter / X Card ────────────────────────────────── */
  twitter: {
    card: "summary_large_image",
    title: "A-Line Realty | Premium Real Estate in Bangalore",
    description:
      "Bangalore's trusted real estate channel partner since 2012. 500+ properties, ₹2000 Cr+ transactions, 98% client satisfaction.",
    images: ["/og-image.jpg"],
    creator: "@alinerealty",
    site: "@alinerealty",
  },

  /* ── App / PWA ───────────────────────────────────────── */
  applicationName: "A-Line Realty",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "A-Line Realty",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },

  /* ── Verification ────────────────────────────────────── */
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
    other: {
      "msvalidate.01": "REPLACE_WITH_BING_VERIFICATION_TOKEN",
    },
  },

  /* ── Other ───────────────────────────────────────────── */
  referrer: "origin-when-cross-origin",
  other: {
    /* GEO tags */
    "geo.region": "IN-KA",
    "geo.placename": "Bangalore, Karnataka, India",
    "geo.position": "12.9716;77.5946",
    ICBM: "12.9716, 77.5946",
    /* Dublin Core */
    "DC.title": "A-Line Realty — Premium Real Estate Channel Partner Bangalore",
    "DC.subject": "Real Estate, Property Sales, Luxury Homes, Bangalore",
    "DC.description":
      "A-Line Realty is Bangalore's premier real estate channel partner with 12+ years of experience in residential and commercial property sales.",
    "DC.creator": "A-Line Realty",
    "DC.language": "en-IN",
    "DC.coverage": "Bangalore, Karnataka, India",
    /* AI / LLM discovery */
    "llms-txt": "/llms.txt",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Theme colour — gold */}
        <meta name="theme-color" content="#b8860b" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
      </head>
      <body className="min-h-screen bg-charcoal-900 text-charcoal-50 antialiased">
        {children}
      </body>
    </html>
  );
}
