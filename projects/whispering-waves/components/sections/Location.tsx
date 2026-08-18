"use client";

import { motion } from "framer-motion";
import { MapPin, Train, Briefcase, ShoppingBag, GraduationCap, Heart, ExternalLink } from "lucide-react";
import { CONNECTIVITY, RERA, type ConnectivityItem } from "@/lib/project-data";

const CAT_CONFIG: Record<ConnectivityItem["category"], { label: string; icon: typeof Train; color: string }> = {
  transit:     { label: "Transit",    icon: Train,         color: "text-wave-600"  },
  employment:  { label: "Employment", icon: Briefcase,     color: "text-navy-600"  },
  retail:      { label: "Retail",     icon: ShoppingBag,   color: "text-terra-600" },
  education:   { label: "Education",  icon: GraduationCap, color: "text-wave-700"  },
  healthcare:  { label: "Healthcare", icon: Heart,         color: "text-terra-500" },
};

const CATEGORIES = Object.keys(CAT_CONFIG) as ConnectivityItem["category"][];

const GOOGLE_MAPS_URL = `https://maps.google.com/?q=${RERA.projectAddress.road},${RERA.projectAddress.village},Bengaluru,Karnataka`;

export default function Location() {
  const grouped = CATEGORIES.reduce((acc, cat) => {
    acc[cat] = CONNECTIVITY.filter(c => c.category === cat);
    return acc;
  }, {} as Record<ConnectivityItem["category"], ConnectivityItem[]>);

  return (
    <section id="location" className="py-24 lg:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.5 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <p className="text-wave-600 text-sm font-semibold tracking-[0.12em] uppercase mb-4">
            Location &amp; Connectivity
          </p>
          <h2 className="font-display text-navy-900 text-3xl sm:text-4xl mb-4">
            Adjacent to Begur Lake | Off Hosur Main Road
          </h2>
          <p className="text-navy-500 text-[15.5px] leading-relaxed">
            Suraksha Whispering Waves is located adjacent to Begur Lake in South Bengaluru,
            off Hosur Main Road — with excellent connectivity to Electronic City,
            Silk Board, HSR Layout and Koramangala.
          </p>
        </motion.div>

        {/* Address card */}
        <motion.div
          initial={{ opacity:0, y:16 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.5 }}
          className="bg-white rounded-xl border border-navy-100 p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-terra-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-navy-900 text-sm mb-0.5">Project Address</p>
              <address className="text-sm text-navy-600 not-italic leading-relaxed">
                {RERA.projectAddress.syNos}, {RERA.projectAddress.road},<br />
                {RERA.projectAddress.village}, {RERA.projectAddress.hobli},<br />
                {RERA.projectAddress.ward}, {RERA.projectAddress.taluk},<br />
                {RERA.projectAddress.district}, {RERA.projectAddress.state} — {RERA.projectAddress.pincode}
              </address>
            </div>
          </div>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm py-2 shrink-0 flex items-center gap-2"
          >
            Open in Maps <ExternalLink size={13} />
          </a>
        </motion.div>

        {/* Connectivity grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat, ci) => {
            const { label, icon: Icon, color } = CAT_CONFIG[cat];
            const items = grouped[cat];
            if (!items?.length) return null;
            return (
              <motion.div
                key={cat}
                initial={{ opacity:0, y:16 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ duration:0.4, delay: ci * 0.06 }}
                className="bg-white rounded-xl border border-navy-100 p-5"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon size={16} className={color} />
                  <h3 className="font-semibold text-navy-900 text-sm">{label}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item.place} className="flex items-center justify-between text-sm">
                      <span className="text-navy-600">{item.place}</span>
                      <span className="text-wave-700 font-semibold tabular-nums shrink-0 ml-2">{item.distance}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-xs text-navy-400 mt-8">
          Distances sourced from official developer material. Actual travel times may vary.
        </p>
      </div>
    </section>
  );
}
