"use client";

import { motion } from "framer-motion";

const FACTS = [
  { value: "1.37 Acres",        label: "Project Size" },
  { value: "2, 3 & 4 BHK",     label: "Configurations" },
  { value: "40+",               label: "Amenities" },
  { value: "Club Élan",         label: "6-Level Clubhouse" },
  { value: "Begur Lake",        label: "Adjacent To" },
];

export default function ProjectHighlights() {
  return (
    <section id="highlights" className="relative z-10 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-wave-900 rounded-xl shadow-lg px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-wave-700"
        >
          {FACTS.map(f => (
            <div key={f.label} className="flex-1 text-center px-3 py-2 sm:py-0">
              <p className="font-display text-white text-lg leading-tight">{f.value}</p>
              <p className="text-wave-300 text-[11px] font-semibold uppercase tracking-wider mt-1">{f.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
