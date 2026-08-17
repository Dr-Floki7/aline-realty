"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Building2 } from "lucide-react";
import { CLUB_ELAN } from "@/lib/project-data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Split facilities into two columns visually
const COL_SIZE = Math.ceil(CLUB_ELAN.facilities.length / 2);
const col1 = CLUB_ELAN.facilities.slice(0, COL_SIZE);
const col2 = CLUB_ELAN.facilities.slice(COL_SIZE);

export default function ClubElan() {
  return (
    <section id="club-elan" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 aspect-[4/3] flex items-center justify-center shadow-2xl">
              {/* Pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(45deg,#c99830 25%,transparent 25%),linear-gradient(-45deg,#c99830 25%,transparent 25%)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative z-10 text-center px-8">
                <Building2 size={48} className="text-gold-400 mx-auto mb-4" strokeWidth={1.2} />
                <p className="font-serif text-4xl font-bold text-white mb-2">Club Élan</p>
                <p className="text-gold-300 text-lg font-medium">{CLUB_ELAN.levels}-Level Lifestyle Clubhouse</p>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-xs mx-auto">
                  {CLUB_ELAN.description}
                </p>
              </div>
              {/* Gold corner accents */}
              <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-gold-400/60" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-gold-400/60" />
            </div>

            {/* Level badge */}
            <motion.div
              initial={{ opacity:0, y:12 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay:0.3 }}
              className="absolute -bottom-5 -right-3 bg-gold-500 text-white rounded-xl px-5 py-3 shadow-xl"
            >
              <p className="font-serif text-2xl font-bold leading-none">{CLUB_ELAN.levels}</p>
              <p className="text-xs font-semibold uppercase tracking-wider mt-0.5 text-gold-100">Levels</p>
            </motion.div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ show: { transition: { staggerChildren: 0.09 } } }}
            className="order-1 lg:order-2"
          >
            <motion.span variants={fadeUp} className="eyebrow mb-4 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Clubhouse
            </motion.span>
            <motion.h2 variants={fadeUp} className="heading-lg text-3xl sm:text-4xl text-slate-900 mb-3">
              {CLUB_ELAN.name}
            </motion.h2>
            <motion.div variants={fadeUp} className="gold-bar mb-5" />
            <motion.p variants={fadeUp} className="text-slate-500 text-[15.5px] leading-relaxed mb-7">
              {CLUB_ELAN.description} Spanning{" "}
              <strong className="text-slate-700">{CLUB_ELAN.levels} levels</strong>, Club Élan brings
              together fitness, leisure, social spaces and co-working — all within the community.
            </motion.p>

            {/* Facilities grid */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-x-6 gap-y-2"
            >
              {[...col1, ...col2].map(facility => (
                <div key={facility} className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-gold-500 shrink-0" />
                  <span className="text-sm text-slate-700">{facility}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
