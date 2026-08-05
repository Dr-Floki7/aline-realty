"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "What is a real estate channel partner in Bangalore?",
    a: "A channel partner is an authorised sales representative of property developers. A-Line Realty is authorised by 50+ premium developers including Prestige, Brigade, Sobha, and Godrej. We help buyers discover and purchase properties at developer-listed prices with zero markup — no extra charges, ever.",
  },
  {
    q: "Does A-Line Realty charge any brokerage or commission?",
    a: "No. Our services — site visits, documentation support, home loan assistance, legal guidance — are completely free for buyers. We are remunerated directly by the developer as their authorised channel partner.",
  },
  {
    q: "Which areas in Bangalore does A-Line Realty cover?",
    a: "We cover all major real estate corridors: Whitefield, Sarjapur Road, Indiranagar, Koramangala, Hebbal, Yelahanka, Devanahalli, HSR Layout, Electronic City, Marathahalli, and Bannerghatta Road.",
  },
  {
    q: "How do I book a site visit through A-Line Realty?",
    a: "Call or WhatsApp us at +91 98765 43210, or fill our enquiry form. We arrange a personalised visit within 24–48 hours — including pick-up and drop if needed.",
  },
  {
    q: "Is A-Line Realty RERA registered?",
    a: "Yes. A-Line Realty is fully RERA compliant and deals exclusively in RERA-registered projects. This ensures complete legal transparency and buyer protection for every transaction.",
  },
  {
    q: "Can NRIs buy property in Bangalore through A-Line Realty?",
    a: "Absolutely. Our dedicated NRI desk handles the entire process remotely — virtual tours, power of attorney coordination, NRI home loan assistance, and end-to-end documentation without you needing to be physically present.",
  },
  {
    q: "What is the best area to invest in Bangalore real estate in 2024?",
    a: "Top investment corridors include: Whitefield & Sarjapur Road (IT corridor with high rental demand), Devanahalli (airport proximity + ITIR development), Hebbal (major connectivity upgrade), and Yelahanka (affordability with strong appreciation potential).",
  },
  {
    q: "What types of properties does A-Line Realty deal in?",
    a: "We cover the full spectrum: 1–4+ BHK apartments, luxury villas, row houses, plotted developments, office spaces, retail units, and pre-launch investment opportunities from Bangalore's top developers.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-charcoal-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before you start your property search in Bangalore."
        />

        <div className="space-y-2">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`border transition-colors duration-200 ${
                  isOpen
                    ? "border-gold-500/50 bg-charcoal-800"
                    : "border-charcoal-700 bg-charcoal-900 hover:border-charcoal-600"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-serif text-base font-semibold leading-snug transition-colors duration-200 ${
                      isOpen ? "text-gold-300" : "text-white"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span className="flex-shrink-0 mt-0.5">
                    {isOpen ? (
                      <Minus size={16} className="text-gold-400" />
                    ) : (
                      <Plus size={16} className="text-charcoal-400" />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-sm text-charcoal-300 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-charcoal-500">
          Still have questions?{" "}
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gold-400 hover:text-gold-300 underline underline-offset-2 cursor-pointer"
          >
            Talk to our team
          </button>
        </p>
      </div>
    </section>
  );
}
