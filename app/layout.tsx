import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const BASE = "https://www.alinerealty.in";

/* ── Structured data ───────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "RealEstateAgent", "LocalBusiness"],
      "@id": `${BASE}/#organization`,
      name: "A-Line Realty",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/logo.png` },
      description:
        "A-Line Realty is a trusted real estate consultancy in Bengaluru, helping customers buy residential and commercial properties with professional guidance and a transparent process.",
      foundingDate: "2012",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
        postalCode: "560001",
      },
      geo: { "@type": "GeoCoordinates", latitude: 12.9716, longitude: 77.5946 },
      telephone: "+91-73378-61296",
      email: "alinerealty26@gmail.com",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      areaServed: { "@type": "City", name: "Bengaluru" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "120",
        bestRating: "5",
      },
      sameAs: [
        "https://www.facebook.com/alinerealty",
        "https://www.instagram.com/alinerealty",
        "https://wa.me/917337861296",
      ],
      founder: {
        "@type": "Person",
        name: "Zakir Ali Mishrikoti",
        jobTitle: "Founder",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "A-Line Realty",
      publisher: { "@id": `${BASE}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

/* ── Metadata ──────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "A-Line Realty | Trusted Real Estate Consultancy in Bengaluru",
    template: "%s | A-Line Realty",
  },
  description:
    "A-Line Realty is a trusted real estate consultancy in Bengaluru. We help you buy residential and commercial properties with expert guidance, site visit support, home loan assistance, and a fully transparent process.",
  keywords: [
    "real estate Bengaluru","real estate Bangalore","property consultant Bengaluru",
    "buy flat Bangalore","residential property Bangalore","commercial property Bangalore",
    "A-Line Realty","real estate agent Bangalore","home loan guidance Bengaluru",
    "site visit Bangalore","property investment Bengaluru","Zakir Ali Mishrikoti",
  ],
  authors: [{ name: "A-Line Realty", url: BASE }],
  creator: "A-Line Realty",
  publisher: "A-Line Realty",
  alternates: { canonical: BASE },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE,
    siteName: "A-Line Realty",
    title: "A-Line Realty | Trusted Real Estate Consultancy in Bengaluru",
    description:
      "Buy residential or commercial property in Bengaluru with confidence. A-Line Realty offers expert guidance, site visits, home loan support, and transparent dealings.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "A-Line Realty Bengaluru" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "A-Line Realty | Real Estate Consultancy Bengaluru",
    description: "Trusted real estate consultancy in Bengaluru. Expert guidance, site visits, home loan support.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "REPLACE_GOOGLE_SEARCH_CONSOLE_TOKEN",
    other: { "msvalidate.01": "REPLACE_BING_TOKEN" },
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru, Karnataka, India",
    "geo.position": "12.9716;77.5946",
    ICBM: "12.9716, 77.5946",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#c7a246" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
