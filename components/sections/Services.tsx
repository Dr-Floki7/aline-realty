import {
  Home,
  Building2,
  TrendingUp,
  FileCheck2,
  Hammer,
  Key,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Home,
    title: "Residential Sales",
    description:
      "Premium apartments, villas, and plotted developments in Bangalore's top residential corridors — North, South, East & West.",
    tag: "Most Popular",
  },
  {
    icon: Building2,
    title: "Commercial Properties",
    description:
      "Office spaces, retail units, and mixed-use developments across Whitefield, ORR, and Sarjapur Road business hubs.",
    tag: null,
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description:
      "Data-driven guidance on high-yield investment properties — pre-launch, under-construction, and ready-to-move options.",
    tag: "High ROI",
  },
  {
    icon: FileCheck2,
    title: "Legal & Documentation",
    description:
      "Complete assistance with sale agreements, registration, RERA compliance, title verification, and property loans.",
    tag: null,
  },
  {
    icon: Hammer,
    title: "Interior Solutions",
    description:
      "Turnkey interior design packages through our curated network — transforming your new property into a dream home.",
    tag: null,
  },
  {
    icon: Key,
    title: "Rental Management",
    description:
      "End-to-end rental management including tenant sourcing, lease agreements, and property maintenance for investors.",
    tag: null,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Services"
          subtitle="A comprehensive suite of real estate services, from property discovery to post-purchase support."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, tag }) => (
            <div
              key={title}
              className="group relative flex flex-col bg-charcoal-800/50 border border-charcoal-700 hover:border-gold-500/60 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/5 hover:bg-charcoal-800"
            >
              {/* Tag */}
              {tag && (
                <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase px-2 py-1 bg-gold-500/15 text-gold-400 border border-gold-500/30">
                  {tag}
                </span>
              )}

              {/* Icon */}
              <div className="mb-5 w-14 h-14 flex items-center justify-center bg-charcoal-900 border border-charcoal-700 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-all duration-300">
                <Icon
                  size={24}
                  className="text-charcoal-400 group-hover:text-gold-400 transition-colors duration-300"
                />
              </div>

              <h3 className="font-serif text-xl font-semibold text-white mb-3">
                {title}
              </h3>

              <p className="text-charcoal-400 text-sm leading-relaxed flex-1">
                {description}
              </p>

              {/* Bottom gold line on hover */}
              <div className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-gold-500 to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
