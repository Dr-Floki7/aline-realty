"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ArrowRight } from "lucide-react";
import Image from "next/image";
import { FLOOR_PLANS, type FloorPlan, type FloorPlanConfig } from "@/lib/project-data";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";

const ALL_CONFIGS: ("All" | FloorPlanConfig)[] = ["All", "2 BHK", "3 BHK", "4 BHK"];
const ALL_TOWERS = ["All", "A", "B", "C", "D", "E", "F"];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function PlaceholderPlan({ plan }: { plan: FloorPlan }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center gap-2">
      <div className="text-center">
        <p className="font-serif text-2xl font-bold text-slate-400">{plan.config}</p>
        <p className="text-sm text-slate-400 mt-1">Type {plan.type}</p>
        <p className="text-xs text-slate-300 mt-1">Tower {plan.tower}</p>
      </div>
      <p className="text-[10px] text-slate-300 mt-3 px-4 text-center">
        Floor plan image coming soon
      </p>
    </div>
  );
}

export default function FloorPlans() {
  const [filterConfig, setFilterConfig] = useState<"All" | FloorPlanConfig>("All");
  const [filterTower,  setFilterTower]  = useState("All");
  const [lightbox,     setLightbox]     = useState<FloorPlan | null>(null);

  const filtered = FLOOR_PLANS.filter(p => {
    const configMatch = filterConfig === "All" || p.config === filterConfig;
    const towerMatch  = filterTower  === "All" || p.tower  === filterTower;
    return configMatch && towerMatch;
  });

  const openLightbox = (plan: FloorPlan) => {
    setLightbox(plan);
    trackEvent(GA_EVENTS.FLOORPLAN_CLICK, { type: plan.type, config: plan.config, tower: plan.tower });
  };

  return (
    <>
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
              Browse all 26 unit types across Towers A–F. Filter by configuration or tower
              to find the right home for you.
            </motion.p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {/* Config filter */}
            <div className="flex flex-wrap gap-2">
              {ALL_CONFIGS.map(c => (
                <button
                  key={c}
                  onClick={() => setFilterConfig(c)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                    filterConfig === c
                      ? "bg-gold-500 border-gold-500 text-white"
                      : "bg-white border-slate-200 text-slate-600 hover:border-gold-400 hover:text-gold-600"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <span className="text-slate-300 hidden sm:flex items-center">|</span>
            {/* Tower filter */}
            <div className="flex flex-wrap gap-2">
              {ALL_TOWERS.map(t => (
                <button
                  key={t}
                  onClick={() => setFilterTower(t)}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                    filterTower === t
                      ? "bg-slate-900 border-slate-900 text-white"
                      : "bg-white border-slate-200 text-slate-600 hover:border-slate-400"
                  }`}
                >
                  {t === "All" ? "All Towers" : `Tower ${t}`}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <p className="text-center text-sm text-slate-400 mb-8">
            Showing <strong className="text-slate-700">{filtered.length}</strong> of{" "}
            {FLOOR_PLANS.length} unit types
          </p>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map(plan => (
                <motion.article
                  key={plan.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="card-lift group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:border-gold-300"
                  onClick={() => openLightbox(plan)}
                >
                  {/* Image area */}
                  <div className="relative h-44 bg-slate-100">
                    {plan.imagePath ? (
                      <Image
                        src={plan.imagePath}
                        alt={plan.imageAlt}
                        fill
                        className="object-contain p-3"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        loading="lazy"
                      />
                    ) : (
                      <PlaceholderPlan plan={plan} />
                    )}
                    {/* Zoom overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
                      <ZoomIn
                        size={24}
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow"
                      />
                    </div>
                    {/* Config badge */}
                    <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold-500/90 text-white">
                      {plan.config}
                    </span>
                  </div>
                  {/* Card body */}
                  <div className="p-3">
                    <div className="flex items-start justify-between mb-1">
                      <p className="font-semibold text-sm text-slate-900">Type {plan.type}</p>
                      <p className="text-[11px] text-gold-600 font-semibold">Tower {plan.tower}</p>
                    </div>
                    <p className="text-xs text-slate-500">{plan.sbaSqft.toLocaleString()} sq.ft SBA</p>
                    <p className="text-xs text-slate-400">{plan.carpetSqft.toLocaleString()} sq.ft Carpet</p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity:0, y:16 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true }}
            transition={{ duration:0.5 }}
            className="text-center mt-12"
          >
            <p className="text-slate-500 text-sm mb-4">
              Need full-size floor plan PDFs or custom configuration details?
            </p>
            <button
              onClick={() => {
                trackEvent(GA_EVENTS.FLOORPLAN_CLICK, { source:"section_cta" });
                document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" });
              }}
              className="btn-primary cursor-pointer"
            >
              Request Floor Plans <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Floor plan: ${lightbox.imageAlt}`}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="relative bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <div>
                  <p className="font-semibold text-slate-900">
                    Type {lightbox.type} &mdash; {lightbox.config} &mdash; Tower {lightbox.tower}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {lightbox.sbaSqft.toLocaleString()} sq.ft SBA &bull; {lightbox.carpetSqft.toLocaleString()} sq.ft Carpet
                  </p>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-500 hover:text-slate-900 cursor-pointer"
                  aria-label="Close floor plan"
                >
                  <X size={18} />
                </button>
              </div>
              {/* Image */}
              <div className="relative h-[420px] bg-slate-50">
                {lightbox.imagePath ? (
                  <Image
                    src={lightbox.imagePath}
                    alt={lightbox.imageAlt}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 90vw, 672px"
                    priority
                  />
                ) : (
                  <PlaceholderPlan plan={lightbox} />
                )}
              </div>
              {/* Footer */}
              <div className="px-5 py-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <p className="text-xs text-slate-400">
                  {lightbox.imageAlt}
                </p>
                <button
                  onClick={() => {
                    setLightbox(null);
                    trackEvent(GA_EVENTS.SITE_VISIT_CLICK, { source:"floorplan_lightbox" });
                    document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" });
                  }}
                  className="btn-primary text-xs py-2 px-4 cursor-pointer shrink-0"
                >
                  Enquire About This Unit
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
