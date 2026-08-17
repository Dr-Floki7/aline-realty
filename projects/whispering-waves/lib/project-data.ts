/**
 * lib/project-data.ts
 * ─────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH for Suraksha Whispering Waves.
 *
 * Sources used (in priority order):
 *   1. Karnataka RERA certificate  → regulatory/legal info
 *   2. Official developer website  → project marketing info
 *   3. All Unit Floor Plans PDF    → unit/area data
 *   4. WW Brochure 1               → amenity groupings & descriptions
 *
 * DO NOT invent prices, areas, possession dates, or facilities.
 * If a value is unknown/unverified, mark it null.
 * ─────────────────────────────────────────────────────────
 */

// ── RERA (source: RERA certificate — authoritative for legal info) ──────────
export const RERA = {
  projectName:          "SURAKSHA WHISPERING WAVES",
  promoter:             "R K SURAKSHA PROPERTIES",
  registrationNumber:   "PRM/KA/RERA/1251/310/PR/270326/008555",
  acknowledgementNumber:"ACK/KA/RERA/1251/310/PR/020326/010068",
  approvalDate:         "27-03-2026",
  registrationValidity: "31-12-2030",
  projectAddress: {
    syNos:     "Sy Nos. 149/4, 149/14, 134/2",
    road:      "Subhash Nagar Main Road",
    village:   "Begur Village",
    hobli:     "Begur Hobli",
    ward:      "Ward No. 192",
    taluk:     "Bengaluru South",
    district:  "Bengaluru Urban",
    state:     "Karnataka",
    pincode:   "560068",
  },
  // Official RERA project URL — for reference link
  reraPortalUrl: "https://rera.karnataka.gov.in/",
} as const;

// ── Project identity ─────────────────────────────────────────────────────────
export const PROJECT = {
  name:            "Suraksha Whispering Waves",
  nameShort:       "Whispering Waves",
  developer:       "R K Suraksha Properties",
  location:        "Begur, Bengaluru",
  locationFull:    "Begur, South Bengaluru, Karnataka – 560068",
  tagline:         "2, 3 & 4 BHK Homes near Begur Lake",
  description:
    "Suraksha Whispering Waves is a thoughtfully crafted residential community " +
    "adjacent to the 137-acre Begur Lake ecosystem in South Bengaluru. " +
    "Offering 2, 3 and 4 BHK homes designed for natural light, ventilation and " +
    "a balanced lifestyle — with six towers, curated amenities and Club Élan, " +
    "a six-level lifestyle clubhouse.",
  developerWebsite: "https://surakshawhisperingwaves.com/",
  mapEmbedQuery:   "Begur+Lake+Bengaluru+Karnataka",

  // Configurations available (source: floor plan PDF + developer website)
  configurations: ["2 BHK", "3 BHK", "4 BHK"] as const,

  // Number of towers (source: floor plan PDF — Towers A through F)
  towers: ["A", "B", "C", "D", "E", "F"] as const,

  // Price: NOT available from any verified source — do NOT invent
  priceAvailable: false as const,
  priceNote:      "Contact us for the latest pricing and availability.",
} as const;

// ── Floor Plans ───────────────────────────────────────────────────────────────
// Source: All Unit Floor Plans PDF (7 pages, Towers A–F)
// Values reproduced exactly from the document.
// NOTE: SBA = Super Built-up Area, CA = Carpet Area
// All areas in sq.ft unless stated otherwise.

export type FloorPlanConfig = "2 BHK" | "3 BHK" | "4 BHK";

export interface FloorPlan {
  id:           string;
  tower:        string;
  type:         string;   // e.g. "A1", "B3", "F5"
  config:       FloorPlanConfig;
  sbaSqft:      number;
  carpetSqft:   number;
  // imagePath: relative to /public/floor-plans/
  imagePath:    string | null;
  imageAlt:     string;
}

export const FLOOR_PLANS: FloorPlan[] = [
  // ── Tower A ──────────────────────────────────────────
  { id:"A1", tower:"A", type:"A1", config:"3 BHK", sbaSqft:1551, carpetSqft:1060, imagePath:"/floor-plans/A1.svg", imageAlt:"Suraksha Whispering Waves Tower A Type A1 3 BHK floor plan" },
  { id:"A2", tower:"A", type:"A2", config:"3 BHK", sbaSqft:1551, carpetSqft:1060, imagePath:"/floor-plans/A2.svg", imageAlt:"Suraksha Whispering Waves Tower A Type A2 3 BHK floor plan" },
  { id:"A3", tower:"A", type:"A3", config:"3 BHK", sbaSqft:1606, carpetSqft:1097, imagePath:"/floor-plans/A3.svg", imageAlt:"Suraksha Whispering Waves Tower A Type A3 3 BHK floor plan" },
  { id:"A4", tower:"A", type:"A4", config:"3 BHK", sbaSqft:1606, carpetSqft:1097, imagePath:"/floor-plans/A4.svg", imageAlt:"Suraksha Whispering Waves Tower A Type A4 3 BHK floor plan" },
  // ── Tower B ──────────────────────────────────────────
  { id:"B1", tower:"B", type:"B1", config:"3 BHK", sbaSqft:1551, carpetSqft:1060, imagePath:"/floor-plans/B1.svg", imageAlt:"Suraksha Whispering Waves Tower B Type B1 3 BHK floor plan" },
  { id:"B2", tower:"B", type:"B2", config:"3 BHK", sbaSqft:1551, carpetSqft:1060, imagePath:"/floor-plans/B2.svg", imageAlt:"Suraksha Whispering Waves Tower B Type B2 3 BHK floor plan" },
  { id:"B3", tower:"B", type:"B3", config:"3 BHK", sbaSqft:1606, carpetSqft:1097, imagePath:"/floor-plans/B3.svg", imageAlt:"Suraksha Whispering Waves Tower B Type B3 3 BHK floor plan" },
  { id:"B4", tower:"B", type:"B4", config:"3 BHK", sbaSqft:1606, carpetSqft:1097, imagePath:"/floor-plans/B4.svg", imageAlt:"Suraksha Whispering Waves Tower B Type B4 3 BHK floor plan" },
  // ── Tower C ──────────────────────────────────────────
  { id:"C1", tower:"C", type:"C1", config:"2 BHK", sbaSqft:1215, carpetSqft:831,  imagePath:"/floor-plans/C1.svg", imageAlt:"Suraksha Whispering Waves Tower C Type C1 2 BHK floor plan" },
  { id:"C2", tower:"C", type:"C2", config:"2 BHK", sbaSqft:1215, carpetSqft:831,  imagePath:"/floor-plans/C2.svg", imageAlt:"Suraksha Whispering Waves Tower C Type C2 2 BHK floor plan" },
  { id:"C3", tower:"C", type:"C3", config:"2 BHK", sbaSqft:1267, carpetSqft:866,  imagePath:"/floor-plans/C3.svg", imageAlt:"Suraksha Whispering Waves Tower C Type C3 2 BHK floor plan" },
  { id:"C4", tower:"C", type:"C4", config:"2 BHK", sbaSqft:1267, carpetSqft:866,  imagePath:"/floor-plans/C4.svg", imageAlt:"Suraksha Whispering Waves Tower C Type C4 2 BHK floor plan" },
  // ── Tower D ──────────────────────────────────────────
  { id:"D1", tower:"D", type:"D1", config:"2 BHK", sbaSqft:1215, carpetSqft:831,  imagePath:"/floor-plans/D1.svg", imageAlt:"Suraksha Whispering Waves Tower D Type D1 2 BHK floor plan" },
  { id:"D2", tower:"D", type:"D2", config:"2 BHK", sbaSqft:1215, carpetSqft:831,  imagePath:"/floor-plans/D2.svg", imageAlt:"Suraksha Whispering Waves Tower D Type D2 2 BHK floor plan" },
  { id:"D3", tower:"D", type:"D3", config:"2 BHK", sbaSqft:1267, carpetSqft:866,  imagePath:"/floor-plans/D3.svg", imageAlt:"Suraksha Whispering Waves Tower D Type D3 2 BHK floor plan" },
  { id:"D4", tower:"D", type:"D4", config:"2 BHK", sbaSqft:1267, carpetSqft:866,  imagePath:"/floor-plans/D4.svg", imageAlt:"Suraksha Whispering Waves Tower D Type D4 2 BHK floor plan" },
  // ── Tower E ──────────────────────────────────────────
  { id:"E1", tower:"E", type:"E1", config:"3 BHK", sbaSqft:1782, carpetSqft:1218, imagePath:"/floor-plans/E1.svg", imageAlt:"Suraksha Whispering Waves Tower E Type E1 3 BHK floor plan" },
  { id:"E2", tower:"E", type:"E2", config:"3 BHK", sbaSqft:1782, carpetSqft:1218, imagePath:"/floor-plans/E2.svg", imageAlt:"Suraksha Whispering Waves Tower E Type E2 3 BHK floor plan" },
  { id:"E3", tower:"E", type:"E3", config:"3 BHK", sbaSqft:1844, carpetSqft:1260, imagePath:"/floor-plans/E3.svg", imageAlt:"Suraksha Whispering Waves Tower E Type E3 3 BHK floor plan" },
  { id:"E4", tower:"E", type:"E4", config:"3 BHK", sbaSqft:1844, carpetSqft:1260, imagePath:"/floor-plans/E4.svg", imageAlt:"Suraksha Whispering Waves Tower E Type E4 3 BHK floor plan" },
  // ── Tower F ──────────────────────────────────────────
  { id:"F1", tower:"F", type:"F1", config:"4 BHK", sbaSqft:2467, carpetSqft:1686, imagePath:"/floor-plans/F1.svg", imageAlt:"Suraksha Whispering Waves Tower F Type F1 4 BHK floor plan" },
  { id:"F2", tower:"F", type:"F2", config:"4 BHK", sbaSqft:2467, carpetSqft:1686, imagePath:"/floor-plans/F2.svg", imageAlt:"Suraksha Whispering Waves Tower F Type F2 4 BHK floor plan" },
  { id:"F3", tower:"F", type:"F3", config:"4 BHK", sbaSqft:2512, carpetSqft:1717, imagePath:"/floor-plans/F3.svg", imageAlt:"Suraksha Whispering Waves Tower F Type F3 4 BHK floor plan" },
  { id:"F4", tower:"F", type:"F4", config:"4 BHK", sbaSqft:2512, carpetSqft:1717, imagePath:"/floor-plans/F4.svg", imageAlt:"Suraksha Whispering Waves Tower F Type F4 4 BHK floor plan" },
  { id:"F5", tower:"F", type:"F5", config:"4 BHK", sbaSqft:2560, carpetSqft:1749, imagePath:"/floor-plans/F5.svg", imageAlt:"Suraksha Whispering Waves Tower F Type F5 4 BHK floor plan" },
  { id:"F6", tower:"F", type:"F6", config:"4 BHK", sbaSqft:2560, carpetSqft:1749, imagePath:"/floor-plans/F6.svg", imageAlt:"Suraksha Whispering Waves Tower F Type F6 4 BHK floor plan" },
];

// ── Amenities ─────────────────────────────────────────────────────────────────
// Source: Developer website + WW Brochure 1
// Grouped exactly per source terminology

export interface AmenityGroup {
  zone:      string;
  icon:      string;   // emoji placeholder — replace with SVG in component
  color:     string;   // Tailwind bg class
  items:     string[];
}

export const AMENITY_GROUPS: AmenityGroup[] = [
  {
    zone:  "Social",
    icon:  "🤝",
    color: "bg-amber-50",
    items: [
      "Clubhouse",
      "Pavilion",
      "Amphitheater",
      "Flea Market",
      "Barbeque Court",
    ],
  },
  {
    zone:  "Revive",
    icon:  "🏊",
    color: "bg-sky-50",
    items: [
      "Toddlers Pool",
      "Seniors Pool",
      "Gym / Yoga Pavilion",
      "Reflexology Park",
    ],
  },
  {
    zone:  "Engage",
    icon:  "🏏",
    color: "bg-green-50",
    items: [
      "Multi Court",
      "Cricket Pitch",
      "Kids Play Area",
      "Toddlers Zone",
      "Sand Pit",
    ],
  },
  {
    zone:  "Breathe",
    icon:  "🌿",
    color: "bg-emerald-50",
    items: [
      "Herb Garden",
      "Dense Planting",
      "Terraced Garden",
      "Community Seating",
      "Pixelated Seating",
    ],
  },
];

// ── Club Élan ─────────────────────────────────────────────────────────────────
// Source: Developer website + WW Brochure 1
// "a six-level lifestyle clubhouse designed for wellness, leisure and celebrations"

export const CLUB_ELAN = {
  name:        "Club Élan",
  description: "A six-level lifestyle clubhouse designed for wellness, leisure and celebrations.",
  levels:      6,
  facilities: [
    "Banquet Hall",
    "Kitty Party Space",
    "Gymnasium",
    "Yoga Room",
    "Steam Room",
    "Massage Rooms",
    "Guest Suites",
    "Squash Court",
    "Badminton Court",
    "Indoor Games",
    "Golf Putting",
    "Mini Theatre",
    "Café",
    "Co-Working Space",
    "Library",
  ],
} as const;

// ── Connectivity ──────────────────────────────────────────────────────────────
// Source: Developer website — exact distances as stated
// DO NOT alter these numbers

export interface ConnectivityItem {
  place:    string;
  distance: string;  // e.g. "03 km"
  category: "transit" | "employment" | "retail" | "education" | "healthcare";
}

export const CONNECTIVITY: ConnectivityItem[] = [
  // Transit
  { place: "Basapura Metro Station",        distance: "03 km", category: "transit"     },
  { place: "Singasandra Metro Station",      distance: "04 km", category: "transit"     },
  // Employment
  { place: "Electronic City",               distance: "06 km", category: "employment"  },
  { place: "Koramangala",                   distance: "07 km", category: "employment"  },
  { place: "J P Nagar",                     distance: "08 km", category: "employment"  },
  { place: "Jayanagar",                     distance: "09 km", category: "employment"  },
  { place: "Sarjapur",                      distance: "10 km", category: "employment"  },
  { place: "MG Road",                       distance: "15 km", category: "employment"  },
  { place: "Indiranagar",                   distance: "15 km", category: "employment"  },
  { place: "Airport",                       distance: "48 km", category: "transit"     },
  { place: "Infosys",                       distance: "07 km", category: "employment"  },
  { place: "Wipro",                         distance: "12 km", category: "employment"  },
  { place: "RMZ Ecospace",                  distance: "13 km", category: "employment"  },
  { place: "RGA Tech Park",                 distance: "14 km", category: "employment"  },
  { place: "Vrindavan TechVillage",         distance: "14 km", category: "employment"  },
  // Retail
  { place: "Total Mall",                    distance: "07 km", category: "retail"      },
  { place: "Vega City Mall",                distance: "09 km", category: "retail"      },
  { place: "Central Mall",                  distance: "10 km", category: "retail"      },
  { place: "Decathlon",                     distance: "11 km", category: "retail"      },
  // Education
  { place: "Eurokids Preschool",            distance: "01 km", category: "education"   },
  { place: "Little Elly Preschool",         distance: "02 km", category: "education"   },
  { place: "Kidzee Preschool",              distance: "03 km", category: "education"   },
  { place: "Bangalore Culinary Institute",  distance: "04 km", category: "education"   },
  { place: "Oxford College",                distance: "04 km", category: "education"   },
  { place: "Vibgyor High School",           distance: "06 km", category: "education"   },
  // Healthcare
  { place: "Jayashree Multispeciality Hospital", distance: "03 km", category: "healthcare" },
  { place: "Narayana Multispeciality Hospital",  distance: "06 km", category: "healthcare" },
  { place: "Apollo Hospital",               distance: "07 km", category: "healthcare"  },
  { place: "Columbia Asia Hospital",        distance: "09 km", category: "healthcare"  },
];

// ── Project highlights (for Hero / QuickFacts strip) ─────────────────────────
export const HIGHLIGHTS = [
  { label: "Location",       value: "Begur, South Bengaluru"          },
  { label: "Configurations", value: "2, 3 & 4 BHK Homes"             },
  { label: "Towers",         value: "6 Towers (A – F)"                },
  { label: "Lake Proximity", value: "Adjacent to 137-acre Begur Lake" },
  { label: "Club",           value: "Club Élan — 6-Level Clubhouse"   },
  { label: "RERA",           value: "PRM/KA/RERA/…/008555"            },
] as const;

// ── FAQs ──────────────────────────────────────────────────────────────────────
// AEO-ready: concise answer first, supporting detail second

export const FAQS = [
  {
    q: "What is Suraksha Whispering Waves?",
    a: "Suraksha Whispering Waves is a residential apartment project by R K Suraksha Properties, located adjacent to the 137-acre Begur Lake in South Bengaluru. It offers 2, 3 and 4 BHK homes across six towers with curated lifestyle amenities and Club Élan, a six-level clubhouse.",
  },
  {
    q: "Where is Suraksha Whispering Waves located?",
    a: "The project is located at Subhash Nagar Main Road, Begur Village, Begur Hobli, Ward No. 192, Bengaluru South, Bengaluru Urban, Karnataka – 560068. It is adjacent to Begur Lake in South Bengaluru.",
  },
  {
    q: "Who is the developer of Suraksha Whispering Waves?",
    a: "The developer and promoter of Suraksha Whispering Waves is R K Suraksha Properties. The official developer website is surakshawhisperingwaves.com.",
  },
  {
    q: "What is the RERA registration number for Suraksha Whispering Waves?",
    a: "The Karnataka RERA project registration number is PRM/KA/RERA/1251/310/PR/270326/008555. The project was approved on 27 March 2026 and the registration is valid until 31 December 2030.",
  },
  {
    q: "What configurations are available at Suraksha Whispering Waves?",
    a: "Suraksha Whispering Waves offers 2 BHK, 3 BHK and 4 BHK apartment configurations across six towers (A through F). 2 BHK units are in Towers C and D, 3 BHK units are in Towers A, B and E, and 4 BHK units are in Tower F.",
  },
  {
    q: "What are the apartment sizes at Suraksha Whispering Waves?",
    a: "2 BHK apartments range from approximately 1,215 to 1,267 sq.ft SBA. 3 BHK apartments range from approximately 1,551 to 1,844 sq.ft SBA. 4 BHK apartments range from approximately 2,467 to 2,560 sq.ft SBA. Contact us for the exact carpet area details and latest availability.",
  },
  {
    q: "What amenities does Suraksha Whispering Waves offer?",
    a: "Amenities are organised into four zones — Social (clubhouse, amphitheater, barbeque court), Revive (pools, gym, yoga), Engage (sports courts, cricket pitch, kids play areas) and Breathe (herb garden, terraced garden, community seating). The project also features Club Élan, a six-level lifestyle clubhouse.",
  },
  {
    q: "What is Club Élan at Suraksha Whispering Waves?",
    a: "Club Élan is a six-level lifestyle clubhouse designed for wellness, leisure and celebrations. Facilities include a gymnasium, yoga room, steam room, massage rooms, banquet hall, squash court, badminton court, mini theatre, café, co-working space, library, indoor games and golf putting.",
  },
  {
    q: "What is the price of Suraksha Whispering Waves apartments?",
    a: "Pricing is available on request. Please contact A-Line Realty for the latest price list, available configurations and current offers. Fill in the enquiry form or call us directly.",
  },
  {
    q: "How can I get the floor plans for Suraksha Whispering Waves?",
    a: "You can view and download floor plans directly on this page. Each floor plan card shows the tower, type, configuration, super built-up area and carpet area. For full-size floor plan PDFs, submit an enquiry.",
  },
  {
    q: "How can I book a site visit to Suraksha Whispering Waves?",
    a: "To book a site visit, fill in the enquiry form on this page, call us directly at +91 73378 61296, or message us on WhatsApp. A-Line Realty will coordinate the visit and accompany you if needed.",
  },
  {
    q: "What is the connectivity from Suraksha Whispering Waves?",
    a: "The project offers excellent connectivity: Basapura Metro Station is 3 km away, Electronic City is 6 km, Koramangala is 7 km, JP Nagar is 8 km, and MG Road is 15 km. Schools, hospitals, malls and IT parks are all within easy reach.",
  },
] as const;

// ── A-Line Realty brand info ──────────────────────────────────────────────────
export const ALINE = {
  name:        "A-Line Realty",
  tagline:     "Property information and home-buying assistance in Bengaluru.",
  description:
    "A-Line Realty provides property information and home-buying assistance for " +
    "residential projects in Bengaluru. We help home buyers get the right information, " +
    "arrange site visits, and navigate the purchase process — at no cost to buyers.",
  phone:        "+91 73378 61296",
  phoneRaw:     "+917337861296",
  email:        "alinerealty26@gmail.com",
  website:      "https://www.alinerealty.in",
  founder:      "Zakir Ali Mishrikoti",
  location:     "Bengaluru, Karnataka, India",
  disclaimer:
    "A-Line Realty provides property information and home-buying assistance. " +
    "Developer / Promoter: R K Suraksha Properties. " +
    "This website is not the official developer website. " +
    "All project details are sourced from the developer's official material and the Karnataka RERA certificate. " +
    "Prices and availability are subject to change. Please verify all details independently before making any purchase decision.",
} as const;
