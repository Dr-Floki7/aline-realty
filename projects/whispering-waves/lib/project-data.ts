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
  locationDetail:  "Adjacent to Begur Lake | Off Hosur Main Road",
  locationFull:    "Begur, South Bengaluru, Karnataka – 560068",
  tagline:         "2, 3 & 4 BHK Homes near Begur Lake",
  projectSize:     "1.37 Acres",
  description:
    "Suraksha Whispering Waves is a thoughtfully crafted residential community " +
    "adjacent to the Begur Lake in South Bengaluru. " +
    "Offering 2, 3 and 4 BHK homes designed for natural light, ventilation and " +
    "a balanced lifestyle — with 3 towers and 6 blocks, curated amenities and Club Élan, " +
    "a six-level lifestyle clubhouse.",
  developerWebsite: "https://surakshawhisperingwaves.com/",
  mapEmbedQuery:   "Begur+Lake+Bengaluru+Karnataka",

  // Configurations available (source: floor plan PDF + developer website)
  configurations: ["2 BHK", "3 BHK", "4 BHK"] as const,

  // Number of towers (source: floor plan PDF — Towers A through F)
  towers: ["A", "B", "C", "D", "E", "F"] as const,

  // Price (supplied by client)
  priceAvailable: true as const,
  priceStarting:  "₹1.37 Cr+",
  priceAsterisk:  "*",
  priceNote:      "Contact us for the latest configuration-wise pricing.",

  // Offer (supplied by client — exact wording)
  offer:          "Book before September 1 & save up to ₹5 Lakhs",
  offerAsterisk:  "*",
  offerDisclaimer: "T&C apply. Offer valid for bookings before 1 September 2026. Contact for details.",

  // Renders — assigned to sections
  renders: {
    hero:          "/renders/exterior-view-1.jpg",
    heroMobile:    "/renders/street-view.jpg",
    overview:      "/renders/pond-view.jpg",
    clubhouse:     "/renders/clubhouse-waterbody.jpg",
    pool:          "/renders/swimming-pool.jpg",
    balcony:       "/renders/balcony-view.jpg",
    amphitheatre:  "/renders/amphitheatre.jpg",
    pavilion:      "/renders/pavilion.jpg",
    garden:        "/renders/dense-garden.jpg",
    herbGarden:    "/renders/herb-garden.jpg",
    terrace:       "/renders/terraced-garden.jpg",
    koi:           "/renders/koi-pond.jpg",
    play:          "/renders/children-play.jpg",
    gym:           "/renders/open-gym.jpg",
    seating:       "/renders/seating-1.jpg",
    deck:          "/renders/viewing-deck.jpg",
    street:        "/renders/street-view.jpg",
    exterior3:     "/renders/exterior-view-3.jpg",
    exterior4:     "/renders/exterior-view-4.jpg",
    multipurpose:  "/renders/multipurpose-court.jpg",
    sandpit:       "/renders/sandpit.jpg",
    toddler:       "/renders/toddler-play.jpg",
    reflexology:   "/renders/reflexology-path.jpg",
    seating2:      "/renders/seating-2.jpg",
    pondView:      "/renders/pond-view.jpg",
  },
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
  { label: "Towers",         value: "3 Towers · 6 Blocks"             },
  { label: "Lake Proximity", value: "Adjacent to Begur Lake" },
  { label: "Club",           value: "Club Élan — 6-Level Clubhouse"   },
  { label: "RERA",           value: "PRM/KA/RERA/…/008555"            },
] as const;

// ── FAQs ──────────────────────────────────────────────────────────────────────
// AEO-ready: concise answer first, supporting detail second

export const FAQS = [
  {
    q: "What is Suraksha Whispering Waves?",
    a: "Suraksha Whispering Waves is a residential apartment project by R K Suraksha Properties, located adjacent to the Begur Lake in South Bengaluru. It offers 2, 3 and 4 BHK homes across 3 towers and 6 blocks with curated lifestyle amenities and Club Élan, a six-level clubhouse.",
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
    a: "Suraksha Whispering Waves offers 2 BHK, 3 BHK and 4 BHK apartment configurations across 3 towers and 6 blocks (A through F). 2 BHK units are available in Towers C & F, 3 BHK units are available in Towers A, B, C, D, E & F, and 4 BHK units are available in Towers D & E.",
  },
  {
    q: "What are the apartment sizes at Suraksha Whispering Waves?",
    a: "2 BHK apartments range from 1,348 to 1,393 sq.ft. 3 BHK apartments range from 1,605 to 1,850 sq.ft. 4 BHK apartments are 2,016 sq.ft. Contact us for the latest availability and unit-specific details.",
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
    a: "Suraksha Whispering Waves starts from ₹1.37 Cr+*. The project is currently offering savings of up to ₹5 Lakhs for bookings before September 1. Contact us for the latest configuration-wise price list and payment plan.",
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
  {
    q: "What is the Suraksha Whispering Waves 3 BHK price?",
    a: "3 BHK apartments at Suraksha Whispering Waves are priced from ₹1.62 Cr to ₹1.86 Cr+. Sizes range from 1,605 to 1,850 sq.ft across all six blocks (A, B, C, D, E and F). Contact us for the latest unit-specific pricing and availability.",
  },
  {
    q: "What is the Suraksha Whispering Waves 2 BHK price?",
    a: "2 BHK apartments at Suraksha Whispering Waves start from ₹1.37 Cr+ with sizes ranging from 1,348 to 1,393 sq.ft in Blocks C and F. Contact us for the latest cost sheet and available inventory.",
  },
  {
    q: "How many apartments are there in Suraksha Whispering Waves?",
    a: "Suraksha Whispering Waves comprises 272 homes across 3 towers and 6 blocks on 1.37 acres with 70% open space. The project offers 2 BHK, 3 BHK and 4 BHK configurations.",
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
