import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { RERA, PROJECT, ALINE } from "@/lib/project-data";

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

// ── Production URL — always from env, never hardcoded ────────────────────────
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://suraksha-whisperingwaves.aline-realty.in";

// ── Structured data / JSON-LD ────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization: A-Line Realty (property advisor, NOT the developer)
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: ALINE.name,
      url: ALINE.website,
      telephone: ALINE.phone,
      email: ALINE.email,
      description: ALINE.tagline,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
    // WebSite
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${PROJECT.name} | ${ALINE.name}`,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    // WebPage (Project Page)
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/`,
      url: `${SITE_URL}/`,
      name: `${PROJECT.name} — 2, 3 & 4 BHK Apartments in Begur, Bengaluru | ${ALINE.name}`,
      description: PROJECT.description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#project` },
      inLanguage: "en-IN",
    },
    // BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "A-Line Realty", item: ALINE.website },
        { "@type": "ListItem", position: 2, name: "Suraksha Whispering Waves", item: `${SITE_URL}/` },
      ],
    },
    // Apartment Complex / Real Estate Listing
    {
      "@type": "ApartmentComplex",
      "@id": `${SITE_URL}/#project`,
      name: PROJECT.name,
      description: PROJECT.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${RERA.projectAddress.syNos}, ${RERA.projectAddress.road}`,
        addressLocality: "Begur",
        addressRegion: "Karnataka",
        postalCode: RERA.projectAddress.pincode,
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 12.8534,
        longitude: 77.6229,
      },
      numberOfRooms: "2, 3, 4",
      // Promoter / developer (NOT A-Line Realty)
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "RERA Registration Number",
          value: RERA.registrationNumber,
        },
        {
          "@type": "PropertyValue",
          name: "Developer / Promoter",
          value: RERA.promoter,
        },
        {
          "@type": "PropertyValue",
          name: "RERA Registration Validity",
          value: RERA.registrationValidity,
        },
      ],
    },
    // FAQPage (top-level only — detailed in FAQ component)
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Suraksha Whispering Waves?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Suraksha Whispering Waves is a residential apartment project by R K Suraksha Properties, located adjacent to the Begur Lake in South Bengaluru. It offers 2, 3 and 4 BHK homes across six towers with curated lifestyle amenities and Club Élan, a six-level clubhouse.",
          },
        },
        {
          "@type": "Question",
          name: "What is the RERA registration number?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `The Karnataka RERA project registration number is ${RERA.registrationNumber}. Registration is valid until ${RERA.registrationValidity}.`,
          },
        },
        {
          "@type": "Question",
          name: "What configurations are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "2 BHK apartments in Towers C & F, 3 BHK apartments in Towers A, B, C, D, E & F, and 4 BHK apartments in Towers D & E.",
          },
        },
      ],
    },
  ],
};

// ── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:  `${PROJECT.name} — 2, 3 & 4 BHK Apartments in Begur, Bengaluru | ${ALINE.name}`,
    template: `%s | ${PROJECT.name}`,
  },
  description:
    "Suraksha Whispering Waves — 2, 3 & 4 BHK apartments adjacent to Begur Lake, South Bengaluru. " +
    "RERA registered project by R K Suraksha Properties. Get the latest price, floor plans and availability. " +
    "Book a site visit through A-Line Realty.",

  keywords: [
    "Suraksha Whispering Waves",
    "Suraksha Whispering Waves Begur",
    "Suraksha Whispering Waves price",
    "Suraksha Whispering Waves floor plan",
    "Suraksha Whispering Waves 2 BHK",
    "Suraksha Whispering Waves 3 BHK",
    "Suraksha Whispering Waves 4 BHK",
    "Suraksha Whispering Waves RERA",
    "Suraksha Whispering Waves amenities",
    "Whispering Waves Begur Bangalore",
    "apartments in Begur",
    "2 BHK apartments Begur Bengaluru",
    "3 BHK apartments Begur Bengaluru",
    "apartments near Begur Lake",
    "RK Suraksha Properties",
  ],

  authors:   [{ name: ALINE.name, url: ALINE.website }],
  creator:   ALINE.name,
  publisher: ALINE.name,

  alternates: { canonical: SITE_URL },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type:      "website",
    locale:    "en_IN",
    url:       SITE_URL,
    siteName:  `${PROJECT.name} | ${ALINE.name}`,
    title:     `${PROJECT.name} — 2, 3 & 4 BHK Apartments near Begur Lake`,
    description:
      "Residential apartments adjacent to Begur Lake, South Bengaluru. " +
      "RERA registered. 2, 3 & 4 BHK homes across 6 towers. Get latest price and floor plans.",
    images: [
      {
        url:    "/og-image.jpg",
        width:  1200,
        height: 630,
        alt:    `${PROJECT.name} — 2, 3 & 4 BHK Apartments in Begur, Bengaluru`,
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       `${PROJECT.name} | 2, 3 & 4 BHK in Begur, Bengaluru`,
    description: "RERA registered residential project near Begur Lake, South Bengaluru. Get latest price, floor plans and site visit.",
    images:      ["/og-image.jpg"],
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "REPLACE_WITH_GSC_TOKEN",
  },

  other: {
    "geo.region":    "IN-KA",
    "geo.placename": "Begur, Bengaluru, Karnataka, India",
    "geo.position":  "12.8534;77.6229",
    ICBM:            "12.8534, 77.6229",
  },
};

// ── Root layout ───────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon"             href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color"     content="#c99830" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 0) }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
