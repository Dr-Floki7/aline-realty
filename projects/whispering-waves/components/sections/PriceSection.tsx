"use client";

import { motion } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";
import { FLOOR_PLANS, PROJECT } from "@/lib/project-data";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Derive configuration summary from floor plan data
const CONFIG_SUMMARY = [
  {
    config: "2 BHK",
    towers: "C & D",
    sbaRange: "1,215 – 1,267 sq.ft SBA",
    carpetRange: "831 – 866 sq.ft Carpet",
    types: FLOOR_PLANS.filter(f => f.config === "2 BHK").map(f => f.type).join(", "),
  },
  {
    config: "3 BHK",
    towers: "A, B & E",
    sbaRange: "1,551 – 1,844 sq.ft SBA",
    carpetRange: "1,060 – 1,260 sq.ft Carpet",
    types: FLOOR_PLANS.filter(f => f.config === "3 BHK").map(f => f.type).join(", "),
  },
  {
    config: "4 BHK",
    towers: "F",
    sbaRange: "2,467 – 2,560 sq.ft SBA",
    carpetRange: "1,686 – 1,749 sq.ft Carpet",
    types: FLOOR_PLANS.filter(f => f.config === "4 BHK").map(f => f.type).join(", "),
  },
];

export default function PriceSection() {
  return (
    <section id="price" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <motion.span variants={fadeUp} className="eyebrow mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Configurations &amp; Price
          </motion.span>
          <motion.h2 variants={fadeUp} className="heading-lg text-3xl sm:text-4xl text-slate-900 mb-4">
            Choose Your{" "}
            <span className="text-gold-500">Configuration</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="gold-bar mx-auto mb-5" />
          <motion.p variants={fadeUp} className="text-slate-500 text-[15.5px] leading-relaxed">
            {PROJECT.nameShort} offers 2, 3 and 4 BHK homes across six towers designed for
            natural light, cross-ventilation and comfortable living.
          </motion.p>
        </motion.div>

        {/* Configuration cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-3 gap-6 mb-10"
        >
          {CONFIG_SUMMARY.map(c => (
            <motion.div
              key={c.config}
              variants={fadeUp}
              className="card-lift bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-5">
                <p className="heading-md text-white text-2xl mb-1">{c.config}</p>
                <p className="text-gold-300 text-sm">Towers {c.towers}</p>
              </div>
              {/* Body */}
              <div className="px-6 py-5 space-y-3">
                <div>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-1">Area (SBA)</p>
                  <p className="text-sm font-semibold text-slate-800">{c.sbaRange}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-1">Carpet Area</p>
                  <p className="text-sm font-semibold text-slate-800">{c.carpetRange}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-1">Unit Types</p>
                  <p className="text-xs text-slate-600">{c.types}</p>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-2">Price</p>
                  <button
                    onClick={() => {
                      trackEvent(GA_EVENTS.PRICE_CLICK, { source: "price_card", config: c.config });
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn-outline text-xs py-2 w-full justify-center cursor-pointer"
                  >
                    Get Latest Price <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer note */}
        <motion.div
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once: true }}
          transition={{ duration:0.5 }}
          className="flex items-start gap-2 bg-gold-50 border border-gold-200 rounded-xl p-4 text-sm text-gold-800 max-w-3xl mx-auto"
        >
          <Info size={16} className="shrink-0 mt-0.5 text-gold-600" />
          <p>
            Pricing is available on request and subject to change. Areas indicated are approximate.
            Please verify all details with the developer before making any purchase decision.
            Contact A-Line Realty for the latest price list.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
