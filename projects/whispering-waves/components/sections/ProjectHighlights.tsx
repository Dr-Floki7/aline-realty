"use client";

import { motion } from "framer-motion";
import { Building2, Layers, TreePine, Star, Shield } from "lucide-react";
import { RERA } from "@/lib/project-data";

const FACTS = [
  { icon: Building2, label: "Configurations",  value: "2, 3 & 4 BHK",       sub: "Homes" },
  { icon: Layers,    label: "Towers",           value: "6 Towers",             sub: "A through F" },
  { icon: TreePine,  label: "Begur Lake",       value: "137-acre",             sub: "Ecosystem" },
  { icon: Star,      label: "Club Élan",        value: "6-Level",              sub: "Lifestyle Clubhouse" },
  { icon: Shield,    label: "RERA Registered",  value: "Valid till",           sub: RERA.registrationValidity },
];

export default function ProjectHighlights() {
  return (
    <section id="highlights" aria-label="Project highlights" className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-y lg:divide-y-0 divide-slate-100">
          {FACTS.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col items-center text-center px-4 py-6 gap-2"
              >
                <div className="w-9 h-9 rounded-xl bg-gold-50 flex items-center justify-center mb-1">
                  <Icon size={18} className="text-gold-600" strokeWidth={1.8} />
                </div>
                <p className="font-serif text-xl font-bold text-slate-900 leading-tight">{f.value}</p>
                <p className="text-xs text-slate-500 font-medium leading-tight">{f.label}</p>
                <p className="text-[11px] text-slate-400 leading-tight">{f.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
