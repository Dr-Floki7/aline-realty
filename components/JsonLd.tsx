/**
 * JsonLd — injects JSON-LD structured data into <head> as server component.
 * Covers: Organization, RealEstateAgent, LocalBusiness, WebSite, FAQPage,
 * BreadcrumbList, AggregateRating.
 *
 * Supports:
 *  - Google Rich Results (Organization, FAQ, Breadcrumb, Review snippet)
 *  - Bing / Yahoo entity indexing
 *  - LLM / AI grounding (factual entity signals for GEO / AIO)
 */

const BASE_URL = "https://www.alinerealty.in";
const PHONE = "+91-98765-43210";
const EMAIL = "hello@alinerealty.in";
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "No. 42, 1st Floor, 100 Feet Road",
  addressLocality: "Indiranagar",
  addressRegion: "Karnataka",
  postalCode: "560038",
  addressCountry: "IN",
};
const GEO = {
  "@type": "GeoCoordinates",
  latitude: 12.9716,
  longitude: 77.5946,
};

/* ── Individual schema graphs ─────────────────────────── */

const organizationSchema = {
  "@type": ["Organization", "RealEstateAgent", "LocalBusiness"],
  "@id": `${BASE_URL}/#organization`,
  name: "A-Line Realty",
  alternateName: ["A Line Realty", "Aline Realty", "A-Line Properties Bangalore"],
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.png`,
    width: 400,
    height: 120,
  },
  image: `${BASE_URL}/og-image.jpg`,
  description:
    "A-Line Realty is Bangalore's premier real estate channel partner since 2012, specialising in premium residential apartments, luxury villas, and commercial properties across all major Bangalore corridors.",
  foundingDate: "2012",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 25 },
  address: ADDRESS,
  geo: GEO,
  telephone: PHONE,
  email: EMAIL,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "10:00",
      closes: "15:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Bengaluru" },
    { "@type": "AdministrativeArea", name: "Karnataka" },
  ],
  serviceType: [
    "Residential Property Sales",
    "Commercial Property Sales",
    "Real Estate Investment Advisory",
    "Property Documentation",
    "Interior Solutions",
    "Rental Management",
  ],
  sameAs: [
    "https://www.facebook.com/alinerealty",
    "https://www.instagram.com/alinerealty",
    "https://www.linkedin.com/company/alinerealty",
    "https://www.youtube.com/@alinerealty",
    "https://g.co/kgs/alinerealty",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "₹₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Bank Transfer, Home Loan",
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "A-Line Realty",
  description: "Premium real estate channel partner in Bangalore",
  publisher: { "@id": `${BASE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-IN",
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${BASE_URL}/#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${BASE_URL}/#about` },
    { "@type": "ListItem", position: 3, name: "Services", item: `${BASE_URL}/#services` },
    { "@type": "ListItem", position: 4, name: "Projects", item: `${BASE_URL}/#projects` },
    { "@type": "ListItem", position: 5, name: "Contact", item: `${BASE_URL}/#contact` },
  ],
};

const faqSchema = {
  "@type": "FAQPage",
  "@id": `${BASE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a real estate channel partner in Bangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A real estate channel partner is an authorised sales representative of property developers. A-Line Realty is an authorised channel partner for 50+ premium developers in Bangalore including Prestige, Brigade, Sobha, Godrej, and Total Environment. We help buyers discover, evaluate, and purchase properties at developer-listed prices with no extra charges.",
      },
    },
    {
      "@type": "Question",
      name: "Does A-Line Realty charge any brokerage or commission?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A-Line Realty does not charge any brokerage or commission from home buyers. Our services — site visits, documentation support, loan assistance — are completely free for buyers. We are remunerated directly by the developers.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas in Bangalore does A-Line Realty cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A-Line Realty covers all major real estate corridors in Bangalore including Whitefield, Sarjapur Road, Indiranagar, Koramangala, Hebbal, Yelahanka, Devanahalli, HSR Layout, Electronic City, and Bannerghatta Road.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a site visit through A-Line Realty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book a site visit by calling +91 98765 43210, messaging us on WhatsApp, or filling the enquiry form on our website. Our team will arrange a personalised visit within 24–48 hours, including pick-up and drop if required.",
      },
    },
    {
      "@type": "Question",
      name: "Is A-Line Realty RERA registered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A-Line Realty operates in full compliance with the Real Estate (Regulation and Development) Act, 2016 (RERA). We only deal in RERA-registered projects and maintain complete transparency in all transactions.",
      },
    },
    {
      "@type": "Question",
      name: "Can NRIs buy property in Bangalore through A-Line Realty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. A-Line Realty has a dedicated NRI desk that handles the entire purchase process remotely — from virtual site tours and documentation to power of attorney coordination and loan assistance through NRI banking channels.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best area to invest in real estate in Bangalore in 2024?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Based on current market trends and infrastructure development, the top areas for real estate investment in Bangalore in 2024 are: Whitefield (IT corridor growth), Sarjapur Road (high rental demand), Devanahalli (airport proximity & ITIR), Hebbal (connectivity & commercial growth), and Yelahanka (affordability + appreciation potential).",
      },
    },
    {
      "@type": "Question",
      name: "What types of properties does A-Line Realty deal in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A-Line Realty deals in a full spectrum of properties: 1 BHK, 2 BHK, 3 BHK, and 4 BHK apartments; luxury villas and row houses; plotted developments; commercial office spaces; retail units; and pre-launch investment opportunities across Bangalore.",
      },
    },
  ],
};

/* ── Assembled @graph ─────────────────────────────────── */

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, websiteSchema, breadcrumbSchema, faqSchema],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 0) }}
    />
  );
}
