"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { AMENITY_GROUPS } from "@/lib/project-data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ZONE_COLORS: Record<string, string> = {
  Social:  "border-amber-200 bg-amber-50",
  Revive:  "border-sky-200 bg-sky-50",
  Engage:  "border-green-200 bg-green-50",
  Breathe: "border-emerald-200 bg-emerald-50",
};

const HEADING_COLORS: Record<string, string> = {
  Social:  "text-amber-700",
  Revive:  "text-sky-700",
  Engage:  "text-green-700",
  Breathe: "text-emerald-700",
};

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <motion.span variants={fadeUp} className="eyebrow mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Amenities
          </motion.span>
          <motion.h2 variants={fadeUp} className="heading-lg text-3xl sm:text-4xl text-slate-900 mb-4">
            A Community Designed{" "}
            <span className="text-gold-500">for Balance</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="gold-bar mx-auto mb-5" />
          <motion.p variants={fadeUp} className="text-slate-500 text-[15.5px] leading-relaxed">
            Amenities at Suraksha Whispering Waves are thoughtfully organised into four
            lifestyle zones — ensuring every resident finds spaces for connection,
            wellness, sport and nature.
          </motion.p>
        </motion.div>

        {/* Zone cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {AMENITY_GROUPS.map(group => (
            <motion.div
              key={group.zone}
              variants={fadeUp}
              className={`card-lift rounded-2xl border p-6 ${ZONE_COLORS[group.zone] || "border-slate-200 bg-white"}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{group.icon}</span>
                <h3 className={`heading-md text-xl ${HEADING_COLORS[group.zone] || "text-slate-900"}`}>
                  {group.zone}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {group.items.map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className={`shrink-0 mt-0.5 ${HEADING_COLORS[group.zone] || "text-gold-600"}`} />
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
