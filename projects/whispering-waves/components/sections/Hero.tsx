"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { PROJECT } from "@/lib/project-data";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden">
      {/* ── Full-bleed background render ── */}
      <Image
        src={PROJECT.renders.hero}
        alt="Suraksha Whispering Waves exterior view — 2, 3 & 4 BHK apartments near Begur Lake, Bengaluru"
        fill
        priority
        quality={85}
        className="object-cover"
        sizes="100vw"
      />

      {/* ── Gradient: darkens left/bottom for text, keeps right/top bright ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/20 lg:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[100svh] flex items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          className="max-w-xl py-28 sm:py-32"
        >
          {/* Location */}
          <motion.div
            variants={{ hidden:{opacity:0,y:10}, show:{opacity:1,y:0} }}
            className="flex items-center gap-2 mb-4"
          >
            <MapPin size={14} className="text-wave-300" />
            <span className="text-wave-200 text-sm font-medium tracking-wide">
              Begur, Bengaluru
            </span>
          </motion.div>

          {/* Project name — H1 */}
          <motion.h1
            variants={{ hidden:{opacity:0,y:16}, show:{opacity:1,y:0, transition:{duration:0.5}} }}
            className="font-display text-white text-[clamp(2.6rem,7vw,4rem)] leading-[1.05] mb-4"
          >
            Suraksha<br />Whispering Waves
          </motion.h1>

          {/* Location detail line */}
          <motion.p
            variants={{ hidden:{opacity:0,y:10}, show:{opacity:1,y:0} }}
            className="text-wave-200/80 text-sm font-medium mb-6"
          >
            Adjacent to Begur Lake | Off Hosur Main Road
          </motion.p>

          {/* ── COMMERCIAL INFO — large, prominent ── */}
          <motion.div
            variants={{ hidden:{opacity:0,y:12}, show:{opacity:1,y:0} }}
            className="mb-4"
          >
            <p className="text-white text-xl sm:text-2xl font-semibold mb-1">
              2, 3 &amp; 4 BHK
            </p>
            <p className="font-display text-terra-300 text-3xl sm:text-4xl">
              {PROJECT.priceStarting}<sup className="text-base align-super">{PROJECT.priceAsterisk}</sup>
            </p>
          </motion.div>

          {/* ── Offer — visually distinct ── */}
          <motion.div
            variants={{ hidden:{opacity:0,y:12}, show:{opacity:1,y:0} }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-5 py-4 mb-8 max-w-sm"
          >
            <p className="text-white/90 text-[13px] font-semibold uppercase tracking-wide mb-1">
              Book before September 1
            </p>
            <p className="text-terra-300 text-lg sm:text-xl font-bold">
              Save up to ₹5 Lakhs<sup className="text-xs">{PROJECT.offerAsterisk}</sup>
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={{ hidden:{opacity:0,y:14}, show:{opacity:1,y:0} }}
            className="flex flex-wrap gap-3 mb-6"
          >
            <button
              onClick={() => {
                trackEvent(GA_EVENTS.PRICE_CLICK, { source:"hero" });
                document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" });
              }}
              className="btn-primary text-base px-8 py-3.5"
            >
              Get Latest Price <ArrowRight size={16} />
            </button>
            <button
              onClick={() => {
                trackEvent(GA_EVENTS.SITE_VISIT_CLICK, { source:"hero" });
                document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" });
              }}
              className="btn-ghost"
            >
              Book a Site Visit
            </button>
          </motion.div>

          {/* RERA micro-line */}
          <motion.p
            variants={{ hidden:{opacity:0}, show:{opacity:1, transition:{delay:0.4}} }}
            className="text-white/30 text-[11px] leading-relaxed"
          >
            RERA: PRM/KA/RERA/1251/310/PR/270326/008555<br />
            Developer: R K Suraksha Properties
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
