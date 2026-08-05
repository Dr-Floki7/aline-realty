import { CheckCircle2, Award, Users, Building2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const milestones = [
  { year: "2012", event: "Founded in Bangalore with a vision for transparent real estate" },
  { year: "2016", event: "Became preferred channel partner for 20+ premium developers" },
  { year: "2019", event: "Crossed ₹500 Cr in successful property transactions" },
  { year: "2024", event: "Expanded to North, South, East & West Bangalore corridors" },
];

const values = [
  { icon: CheckCircle2, text: "Transparent dealings — no hidden charges" },
  { icon: Award, text: "RERA registered & fully compliant" },
  { icon: Users, text: "Dedicated relationship managers" },
  { icon: Building2, text: "500+ premium projects in portfolio" },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — visual */}
          <div className="relative order-2 lg:order-1">
            {/* Main image placeholder — gradient card */}
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal-700 to-charcoal-800 rounded-none overflow-hidden">
                {/* Decorative architecture silhouette */}
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-charcoal-900/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 size={120} className="text-gold-500/20" />
                </div>
                {/* Gold corner accent */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-400" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold-400" />
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-6 -right-6 bg-gold-500 text-white px-5 py-4 shadow-2xl z-10">
                <div className="font-serif text-3xl font-bold leading-none">12+</div>
                <div className="text-xs font-semibold tracking-widest uppercase mt-1">
                  Years of Trust
                </div>
              </div>

              {/* Floating card — bottom left */}
              <div className="absolute -bottom-6 -left-6 bg-charcoal-800 border border-charcoal-700 px-5 py-4 shadow-2xl z-10 max-w-[180px]">
                <div className="font-serif text-2xl font-bold text-gold-400 leading-none">
                  500+
                </div>
                <div className="text-xs text-charcoal-300 mt-1 leading-tight">
                  Happy Families Housed
                </div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Who We Are"
              title="Bangalore's Premier Real Estate Partner"
              subtitle="We don't just sell properties — we help you find a place to call home. Founded in 2012, A-Line Realty has built its reputation on integrity, deep local knowledge, and a client-first philosophy."
              centered={false}
            />

            {/* Values list */}
            <ul className="space-y-4 mb-10">
              {values.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={18} className="text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal-200 text-base">{text}</span>
                </li>
              ))}
            </ul>

            {/* Timeline */}
            <div className="border-l-2 border-charcoal-700 pl-6 space-y-5">
              {milestones.map((m) => (
                <div key={m.year} className="relative">
                  <div className="absolute -left-[29px] w-3 h-3 rounded-full bg-gold-500 border-2 border-charcoal-900 top-1" />
                  <span className="text-xs font-bold tracking-widest text-gold-400 uppercase">
                    {m.year}
                  </span>
                  <p className="text-sm text-charcoal-300 mt-0.5">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
