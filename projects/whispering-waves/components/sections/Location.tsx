"use client";

import { motion } from "framer-motion";
import { MapPin, Train, Briefcase, ShoppingBag, GraduationCap, Heart, ExternalLink } from "lucide-react";
import { CONNECTIVITY, RERA, type ConnectivityItem } from "@/lib/project-data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CAT_CONFIG: Record<ConnectivityItem["category"], { label: string; icon: typeof Train; color: string }> = {
  transit:    { label: "Transit",     icon: Train,        color: "text-blue-600"   },
  employment: { label: "Employment",  icon: Briefcase,    color: "text-purple-600" },
  retail:     { label: "Retail",      icon: ShoppingBag,  color: "text-orange-600" },
  education:  { label: "Education",   icon: GraduationCap,color: "text-green-600"  },
  healthcare: { label: "Healthcare",  icon: Heart,        color: "text-red-600"    },
};

const CATEGORIES = (Object.keys(CAT_CONFIG) as ConnectivityItem["category"][]);

const GOOGLE_MAPS_URL = `https://maps.google.com/?q=${RERA.projectAddress.road},${RERA.projectAddress.village},Bengaluru,Karnataka`;

export default function Location() {
  const grouped = CATEGORIES.reduce((acc, cat) => {
    acc[cat] = CONNECTIVITY.filter(c => c.category === cat);
    return acc;
  }, {} as Record<ConnectivityItem["category"], ConnectivityItem[]>);

  return (
    <section id="location" className="py-20 lg:py-28 bg-slate-50">
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
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Location &amp; Connectivity
          </motion.span>
          <motion.h2 variants={fadeUp} className="heading-lg text-3xl sm:text-4xl text-slate-900 mb-4">
            An Address That Reflects{" "}
            <span className="text-gold-500">a Place of Prestige</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="gold-bar mx-auto mb-5" />
          <motion.p variants={fadeUp} className="text-slate-500 text-[15.5px] leading-relaxed">
            Suraksha Whispering Waves is located adjacent to Begur Lake in South Bengaluru,
            just off Hosur Road — with excellent connectivity to Electronic City, Silk Board,
            HSR Layout and Koramangala.
          </motion.p>
        </motion.div>

        {/* Address card + map CTA */}
        <motion.div
          initial={{ opacity:0, y:16 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-start gap-3">
            <MapPin size={20} className="text-gold-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900 text-sm mb-0.5">Project Address</p>
              <address className="text-sm text-slate-600 not-italic leading-relaxed">
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
            Open in Google Maps <ExternalLink size={13} />
          </a>
        </motion.div>

        {/* Connectivity grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, ci) => {
            const { label, icon: Icon, color } = CAT_CONFIG[cat];
            const items = grouped[cat];
            if (!items || items.length === 0) return null;
            return (
              <motion.div
                key={cat}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once: true }}
                transition={{ duration:0.45, delay: ci * 0.08 }}
                className="bg-white rounded-2xl border border-slate-200 p-5"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon size={17} className={color} />
                  <h3 className="font-semibold text-slate-900 text-sm">{label}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item.place} className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{item.place}</span>
                      <span className="text-gold-600 font-semibold tabular-nums shrink-0 ml-2">{item.distance}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Source note */}
        <p className="text-center text-xs text-slate-400 mt-8">
          Distances sourced from the developer&apos;s official project material.
          Actual travel times may vary depending on traffic conditions.
        </p>
      </div>
    </section>
  );
}
