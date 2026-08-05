import {
  ShieldCheck,
  MapPin,
  Handshake,
  BadgePercent,
  Clock3,
  HeartHandshake,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Verified Listings Only",
    description:
      "Every property in our portfolio is personally vetted and RERA compliant — no surprises, no risks.",
  },
  {
    icon: MapPin,
    title: "Deep Local Expertise",
    description:
      "12+ years navigating Bangalore's micro-markets means we know which neighbourhoods offer the best ROI.",
  },
  {
    icon: Handshake,
    title: "End-to-End Support",
    description:
      "From site visits to documentation, loan assistance, and registration — we're with you every step.",
  },
  {
    icon: BadgePercent,
    title: "Best Price Guarantee",
    description:
      "As authorised channel partners, we negotiate directly with developers for the best deals and offers.",
  },
  {
    icon: Clock3,
    title: "Post-Purchase Assistance",
    description:
      "Our relationship doesn't end at sale. We assist with possession, interiors, and rental management.",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Approach",
    description:
      "A dedicated advisor understands your needs and curates options that truly match your lifestyle.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-charcoal-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why A-Line Realty"
          title="The A-Line Advantage"
          subtitle="What sets us apart isn't just our portfolio — it's how we treat every client like a long-term partner."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-700">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-charcoal-900 p-8 hover:bg-charcoal-800 transition-all duration-300 relative overflow-hidden hover-gold-border"
            >
              {/* Top gold accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="w-12 h-12 flex items-center justify-center border border-charcoal-700 group-hover:border-gold-500 mb-5 transition-colors duration-300">
                <Icon
                  size={22}
                  className="text-charcoal-400 group-hover:text-gold-400 transition-colors duration-300"
                />
              </div>

              <h3 className="font-serif text-xl font-semibold text-white mb-3 group-hover:text-gold-100 transition-colors duration-200">
                {title}
              </h3>

              <p className="text-charcoal-400 text-sm leading-relaxed group-hover:text-charcoal-300 transition-colors duration-200">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
