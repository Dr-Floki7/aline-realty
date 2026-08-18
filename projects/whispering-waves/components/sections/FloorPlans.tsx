"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Lock } from "lucide-react";
import Image from "next/image";
import { FLOOR_PLANS, type FloorPlan, type FloorPlanConfig } from "@/lib/project-data";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";

const CONFIGS: ("All" | FloorPlanConfig)[] = ["All", "2 BHK", "3 BHK", "4 BHK"];
const TOWERS = ["All", "A", "B", "C", "D", "E", "F"];

// Show 3 preview (one per config) — rest gated
const PREVIEW_IDS = ["C1", "A1", "F1"];

export default function FloorPlans() {
  const [config, setConfig] = useState<"All" | FloorPlanConfig>("All");
  const [tower, setTower] = useState("All");
  const [lightbox, setLightbox] = useState<FloorPlan | null>(null);

  const filtered = FLOOR_PLANS.filter(p => {
    const cm = config === "All" || p.config === config;
    const tm = tower === "All" || p.tower === tower;
    return cm && tm;
  });

  const previews = FLOOR_PLANS.filter(p => PREVIEW_IDS.includes(p.id));
  const isGated = true; // all floor plans require enquiry to view full-size

  const handleUnlock = () => {
    trackEvent(GA_EVENTS.FLOORPLAN_CLICK, { source: "unlock" });
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="floor-plans" className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.5 }}
            className="max-w-2xl mx-auto text-center mb-14"
          >
            <p className="text-gold-500 text-sm font-semibold tracking-[0.12em] uppercase mb-4">Floor Plans</p>
            <h2 className="font-display text-slate-900 text-3xl sm:text-4xl mb-4">
              Explore Floor Plans
            </h2>
            <p className="text-slate-500 text-[15.5px] leading-relaxed">
              26 unit types across Towers A–F. 2, 3 and 4 BHK configurations
              designed for natural light, ventilation and functional living.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {CONFIGS.map(c => (
              <button
                key={c}
                onClick={() => setConfig(c)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all cursor-pointer ${
                  config === c
                    ? "bg-slate-900 text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-gold-400"
                }`}
              >
                {c}
              </button>
            ))}
            <span className="text-slate-300 mx-1 hidden sm:flex items-center">|</span>
            {TOWERS.map(t => (
              <button
                key={t}
                onClick={() => setTower(t)}
                className={`px-3 py-2 rounded-md text-sm font-semibold transition-all cursor-pointer ${
                  tower === t
                    ? "bg-gold-500 text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-gold-400"
                }`}
              >
                {t === "All" ? "All" : t}
              </button>
            ))}
          </div>

          {/* Preview cards — 3 cards with blur gate */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {previews.map(plan => (
              <div key={plan.id} className="relative bg-white rounded-xl border border-slate-200 overflow-hidden group">
                {/* Floor plan image — blurred */}
                <div className="relative h-56 bg-slate-100">
                  <Image
                    src={plan.imagePath || "/floor-plans/C1.svg"}
                    alt={plan.imageAlt}
                    fill
                    className="object-contain p-4 blur-sm scale-[1.02] select-none"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    loading="lazy"
                    draggable={false}
                  />
                  {/* Lock overlay */}
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] flex flex-col items-center justify-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center">
                      <Lock size={16} className="text-gold-400" />
                    </div>
                    <p className="text-xs font-semibold text-slate-700">Submit details to view</p>
                  </div>
                  {/* Config badge */}
                  <span className="absolute top-3 left-3 z-10 text-[11px] font-bold px-3 py-1 rounded bg-gold-500 text-white">
                    {plan.config}
                  </span>
                </div>
                {/* Body */}
                <div className="p-4">
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-semibold text-slate-900">Type {plan.type}</p>
                    <p className="text-xs font-semibold text-gold-600">Tower {plan.tower}</p>
                  </div>
                  <p className="text-sm text-slate-500">{plan.sbaSqft.toLocaleString()} sq.ft SBA &middot; {plan.carpetSqft.toLocaleString()} sq.ft Carpet</p>
                </div>
              </div>
            ))}
          </div>

          {/* Unlock CTA */}
          <div className="bg-slate-900 rounded-xl p-8 sm:p-12 text-center">
            <Lock size={28} className="text-gold-400 mx-auto mb-4" />
            <h3 className="font-display text-white text-2xl mb-3">
              Get All 26 Floor Plans
            </h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
              Submit your details and receive detailed floor plans for all unit types —
              including dimensions, carpet area and layout information.
            </p>
            <button onClick={handleUnlock} className="btn-primary px-8 py-3.5">
              Get Floor Plan Details <ArrowRight size={15} />
            </button>
          </div>

          {/* Summary strip */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {[
              { config:"2 BHK", towers:"C & D", range:"1,215 – 1,267 sq.ft" },
              { config:"3 BHK", towers:"A, B & E", range:"1,551 – 1,844 sq.ft" },
              { config:"4 BHK", towers:"F", range:"2,467 – 2,560 sq.ft" },
            ].map(c => (
              <div key={c.config} className="bg-white rounded-lg border border-slate-200 p-5 text-center">
                <p className="font-display text-lg text-slate-900 mb-0.5">{c.config}</p>
                <p className="text-xs text-gold-600 font-semibold">Towers {c.towers}</p>
                <p className="text-xs text-slate-500 mt-1">{c.range} SBA</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
