"use client";

import { motion } from "framer-motion";
import { MapPin, ChevronDown, Phone, MessageCircle, ArrowRight } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { PROJECT, ALINE, RERA } from "@/lib/project-data";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";

const WA_URL = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917337861296"}?text=${process.env.NEXT_PUBLIC_WHATSAPP_MSG || "Hi%2C%20I%20would%20like%20to%20know%20the%20latest%20price%20and%20availability%20for%20Suraksha%20Whispering%20Waves."}`;

const HERO_HIGHLIGHTS = [
  "2, 3 & 4 BHK Homes",
  "6 Towers — A to F",
  "Adjacent to 137-acre Begur Lake",
  "Club Élan — 6-Level Clubhouse",
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden" aria-label="Hero">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden>
        {/* Deep gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
        {/* Gold radial glow */}
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-gold-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-500/6 rounded-full blur-3xl" />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #c99830 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-28">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left — 3 cols */}
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Location badge */}
            <motion.div
              variants={{ hidden: { opacity:0, y:16 }, show: { opacity:1, y:0 } }}
              className="flex items-center gap-2 mb-5"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-300 bg-gold-500/10 border border-gold-500/20 px-3 py-1.5 rounded-full">
                <MapPin size={12} /> {PROJECT.location}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                RERA Registered
              </span>
            </motion.div>

            {/* Main heading — H1 for SEO */}
            <motion.h1
              variants={{ hidden: { opacity:0, y:20 }, show: { opacity:1, y:0, transition:{ duration:0.65 } } }}
              className="heading-xl text-white text-4xl sm:text-5xl lg:text-[52px] mb-3"
            >
              Suraksha<br />
              <span className="text-gold-400">Whispering Waves</span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity:0, y:16 }, show: { opacity:1, y:0 } }}
              className="text-lg sm:text-xl text-slate-300 font-light mb-6"
            >
              2, 3 &amp; 4 BHK Homes near Begur Lake, South Bengaluru
            </motion.p>

            {/* Highlights */}
            <motion.ul
              variants={{ hidden: { opacity:0 }, show: { opacity:1, transition:{ staggerChildren:0.07 } } }}
              className="flex flex-col gap-2 mb-8"
            >
              {HERO_HIGHLIGHTS.map((h) => (
                <motion.li
                  key={h}
                  variants={{ hidden: { opacity:0, x:-12 }, show: { opacity:1, x:0 } }}
                  className="flex items-center gap-2.5 text-sm text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                  {h}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA row */}
            <motion.div
              variants={{ hidden: { opacity:0, y:16 }, show: { opacity:1, y:0 } }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <button
                onClick={() => {
                  trackEvent(GA_EVENTS.PRICE_CLICK, { source: "hero" });
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary cursor-pointer"
              >
                Get Latest Price <ArrowRight size={15} />
              </button>
              <button
                onClick={() => {
                  trackEvent(GA_EVENTS.FLOORPLAN_CLICK, { source: "hero" });
                  document.getElementById("floor-plans")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-ghost-white cursor-pointer"
              >
                View Floor Plans
              </button>
            </motion.div>

            {/* Contact strip */}
            <motion.div
              variants={{ hidden: { opacity:0 }, show: { opacity:1 } }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href={`tel:${ALINE.phoneRaw}`}
                onClick={() => trackEvent(GA_EVENTS.PHONE_CLICK, { source:"hero" })}
                className="flex items-center gap-2 text-sm font-semibold text-white hover:text-gold-300 transition-colors"
              >
                <Phone size={14} /> {ALINE.phone}
              </a>
              <span className="text-slate-600 hidden sm:block">|</span>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent(GA_EVENTS.WHATSAPP_CLICK, { source:"hero" })}
                className="flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:text-[#1ebe5d] transition-colors"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
              <span className="text-slate-600 hidden sm:block">|</span>
              <span className="text-xs text-slate-500">by {ALINE.name}</span>
            </motion.div>

            {/* Developer / RERA note */}
            <motion.p
              variants={{ hidden: { opacity:0 }, show: { opacity:1, transition:{ delay:0.3 } } }}
              className="mt-6 text-xs text-slate-600 leading-relaxed max-w-lg"
            >
              Developer / Promoter: {RERA.promoter} &middot;{" "}
              RERA: {RERA.registrationNumber}
            </motion.p>
          </motion.div>

          {/* Right — lead form (2 cols) */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity:0, x:30 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.6, delay:0.25 }}
          >
            <LeadForm
              enquiryType="price"
              heading="Get Latest Price"
              subheading="Fill in your details and we'll contact you shortly."
              ctaLabel="Get Price & Availability"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1.4 }}
        onClick={() => document.getElementById("highlights")?.scrollIntoView({ behavior:"smooth" })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-gold-400 transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-[9px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <motion.div animate={{ y:[0,5,0] }} transition={{ repeat:Infinity, duration:1.6 }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
