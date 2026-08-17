"use client";

import { motion } from "framer-motion";
import { Lock, ArrowRight } from "lucide-react";
import Image from "next/image";
import { FLOOR_PLANS, type FloorPlan } from "@/lib/project-data";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// Show exactly 3 preview cards — one per configuration
const PREVIEW_PLANS: FloorPlan[] = [
  FLOOR_PLANS.find(p => p.config === "2 BHK")!,
  FLOOR_PLANS.find(p => p.config === "3 BHK")!,
  FLOOR_PLANS.find(p => p.config === "4 BHK")!,
];

function FloorPlanCard({ plan }: { plan: FloorPlan }) {
  return (
    <div className="relative bg-white rounded-2xl border border-slate-200 overflow-hidden">
      {/* Image area — blurred */}
      <div className="relative h-56 sm:h-64 bg-slate-100 overflow-hidden">
        {plan.imagePath ? (
          <Image
            src={plan.imagePath}
            alt={plan.imageAlt}
            fill
            className="object-contain p-4 blur-[6px] scale-105 select-none pointer-events-none"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
            loading="lazy"
            draggable={false}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 blur-[6px] scale-105 flex items-center justify-center">
            <p className="font-serif text-3xl font-bold text-slate-300">{plan.config}</p>
          </div>
        )}

        {/* Lock overlay */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 z-10">
          <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center shadow-lg">
            <Lock size={20} className="text-gold-400" />
          </div>
          <p className="text-sm font-semibold text-slate-800">Floor Plan Locked</p>
          <p className="text-xs text-slate-500 px-4 text-center max-w-[200px]">
            Submit your details to view full floor plans
          </p>
        </div>

        {/* Config badge */}
        <span className="absolute top-3 left-3 text-[11px] font-bold px-3 py-1 rounded-full bg-gold-500 text-white z-20 shadow">
          {plan.config}
        </span>
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="font-semibold text-base text-slate-900">Type {plan.type}</p>
            <p className="text-xs text-gold-600 font-semibold mt-0.5">Tower {plan.tower}</p>
          </div>
        </div>
        <div className="flex gap-4 text-sm text-slate-500 mt-2">
          <span>{plan.sbaSqft.toLocaleString()} sq.ft <span className="text-slate-400">SBA</span></span>
          <span>{plan.carpetSqft.toLocaleString()} sq.ft <span className="text-slate-400">Carpet</span></span>
        </div>
      </div>
    </div>
  );
}

export default function FloorPlans() {
  const handleUnlock = () => {
    trackEvent(GA_EVENTS.FLOORPLAN_CLICK, { source: "unlock_button" });
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="floor-plans" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <motion.span variants={fadeUp} className="eyebrow mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Floor Plans
          </motion.span>
          <motion.h2 variants={fadeUp} className="heading-lg text-3xl sm:text-4xl text-slate-900 mb-4">
            Explore{" "}
            <span className="text-gold-500">Floor Plans</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="gold-bar mx-auto mb-5" />
          <motion.p variants={fadeUp} className="text-slate-500 text-[15.5px] leading-relaxed">
            Suraksha Whispering Waves offers 26 unit types across Towers A–F.
            View the available 2 BHK, 3 BHK and 4 BHK configurations below.
          </motion.p>
        </motion.div>

        {/* Preview cards — 3 cards, blurred */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {PREVIEW_PLANS.map(plan => (
            <motion.div key={plan.id} variants={fadeUp}>
              <FloorPlanCard plan={plan} />
            </motion.div>
          ))}
        </motion.div>

        {/* Unlock CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-10 text-center"
        >
          <div className="w-14 h-14 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-5">
            <Lock size={24} className="text-gold-400" />
          </div>
          <h3 className="heading-md text-xl sm:text-2xl text-white mb-3">
            Unlock All 26 Floor Plans
          </h3>
          <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed max-w-md mx-auto mb-7">
            Get detailed floor plans for all unit types across Towers A–F including
            full dimensions, carpet area breakdowns and layout details.
          </p>
          <button
            onClick={handleUnlock}
            className="btn-primary text-base px-8 py-3.5 cursor-pointer"
          >
            <Lock size={16} />
            Unlock Floor Plans
            <ArrowRight size={15} />
          </button>
          <p className="text-xs text-slate-500 mt-4">
            Fill in the enquiry form and we&apos;ll share all floor plans within minutes.
          </p>
        </motion.div>

        {/* Configuration summary below */}
        <div className="grid sm:grid-cols-3 gap-4 mt-10">
          {[
            { config: "2 BHK", towers: "C & D", range: "1,215 – 1,267 sq.ft SBA" },
            { config: "3 BHK", towers: "A, B & E", range: "1,551 – 1,844 sq.ft SBA" },
            { config: "4 BHK", towers: "F", range: "2,467 – 2,560 sq.ft SBA" },
          ].map(c => (
            <div
              key={c.config}
              className="bg-slate-50 rounded-xl border border-slate-200 p-5 text-center"
            >
              <p className="heading-md text-lg text-slate-900 mb-1">{c.config}</p>
              <p className="text-sm text-gold-600 font-semibold mb-2">Towers {c.towers}</p>
              <p className="text-xs text-slate-500">{c.range}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
