"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { ALINE } from "@/lib/project-data";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SERVICES = [
  "Property information and details",
  "Site visit coordination and support",
  "Home loan guidance and referrals",
  "Documentation assistance",
  "End-to-end home-buying support",
];

export default function ALineSection() {
  return (
    <section id="about-aline" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.span variants={fadeUp} className="eyebrow mb-4 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> About A-Line Realty
            </motion.span>
            <motion.h2 variants={fadeUp} className="heading-lg text-3xl sm:text-4xl text-slate-900 mb-4">
              Property Information &amp;{" "}
              <span className="text-gold-500">Home-Buying Assistance</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="gold-bar mb-6" />
            <motion.p variants={fadeUp} className="text-slate-500 text-[15.5px] leading-relaxed mb-5">
              {ALINE.description}
            </motion.p>
            <motion.p variants={fadeUp} className="text-slate-500 text-[15px] leading-relaxed mb-7">
              Founded by <strong className="text-slate-700">{ALINE.founder}</strong>, we help home buyers
              get accurate project information, arrange site visits, and navigate the purchase process —
              at no cost to buyers.
            </motion.p>

            {/* What we do */}
            <motion.ul variants={fadeUp} className="space-y-2 mb-8">
              {SERVICES.map(s => (
                <li key={s} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{s}</span>
                </li>
              ))}
            </motion.ul>

            {/* Contact details */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <a
                href={`tel:${ALINE.phoneRaw}`}
                onClick={() => trackEvent(GA_EVENTS.PHONE_CLICK, { source: "about_aline" })}
                className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-gold-600 transition-colors"
              >
                <Phone size={15} className="text-gold-500 shrink-0" />
                {ALINE.phone}
              </a>
              <a
                href={`mailto:${ALINE.email}`}
                className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-gold-600 transition-colors break-all"
              >
                <Mail size={15} className="text-gold-500 shrink-0" />
                {ALINE.email}
              </a>
              <p className="flex items-start gap-3 text-sm text-slate-700">
                <MapPin size={15} className="text-gold-500 shrink-0 mt-0.5" />
                {ALINE.location}
              </p>
            </motion.div>
          </motion.div>

          {/* Right — disclaimer / trust card */}
          <motion.div
            initial={{ opacity:0, x:24 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once: true }}
            transition={{ duration:0.6 }}
            className="space-y-5"
          >
            {/* Trust card */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-7">
              <p className="heading-md text-lg text-slate-900 mb-4">
                Our Commitment to You
              </p>
              <ul className="space-y-3">
                {[
                  "Accurate project information from official developer material",
                  "No misleading pricing or fabricated availability claims",
                  "Transparent home-buying process from enquiry to possession",
                  "We are not the developer — R K Suraksha Properties is the promoter",
                  "No hidden charges for buyers",
                ].map(c => (
                  <li key={c} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="text-gold-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="bg-gold-50 rounded-2xl border border-gold-200 p-5">
              <p className="text-xs text-gold-800 leading-relaxed">
                <strong>Disclaimer:</strong> {ALINE.disclaimer}
              </p>
            </div>

            {/* Official site link */}
            <div className="flex items-center justify-between bg-white rounded-xl border border-slate-200 px-5 py-4">
              <div>
                <p className="text-sm font-semibold text-slate-900 mb-0.5">A-Line Realty Main Website</p>
                <p className="text-xs text-slate-500">{ALINE.website}</p>
              </div>
              <a
                href={ALINE.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-2 px-4"
              >
                Visit
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
