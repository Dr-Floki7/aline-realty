"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Waves, ArrowRight } from "lucide-react";
import { PROJECT, ALINE } from "@/lib/project-data";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const PILLARS = [
  {
    icon: MapPin,
    title: "Prime Lake-Adjacent Location",
    body: "Situated adjacent to the 137-acre Begur Lake ecosystem in South Bengaluru, Whispering Waves offers open views, better airflow, and a serene environment — while remaining well-connected to key city hubs.",
  },
  {
    icon: Building2,
    title: "Thoughtfully Designed Homes",
    body: "2, 3 and 4 BHK homes planned to maximise natural light, cross-ventilation, and functional living. Open balconies, Vaastu-aligned layouts, and practical master plans across six towers.",
  },
  {
    icon: Waves,
    title: "Nature-Inspired Community",
    body: "Breeze corridors and Lake Echo Gardens landscape bring the calm of Begur Lake into everyday living — creating a community shaped by open spaces, greenery, and thoughtful design.",
  },
];

export default function Overview() {
  return (
    <section id="overview" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Project Overview
          </motion.span>
          <motion.h2 variants={fadeUp} className="heading-lg text-3xl sm:text-4xl text-slate-900 mb-4">
            Life Where Every Detail Is{" "}
            <span className="text-gold-500">Thoughtfully Refined</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="gold-bar mx-auto mb-5" />
          <motion.p variants={fadeUp} className="text-slate-500 text-[15.5px] leading-relaxed">
            {PROJECT.description}
          </motion.p>
        </motion.div>

        {/* Three pillars */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-3 gap-6 mb-14"
        >
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="card-lift bg-slate-50 rounded-2xl p-7 border border-slate-100"
            >
              <div className="w-12 h-12 rounded-2xl bg-gold-50 flex items-center justify-center mb-5">
                <Icon size={22} className="text-gold-600" strokeWidth={1.8} />
              </div>
              <h3 className="heading-md text-[17px] text-slate-900 mb-3">{title}</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div>
            <p className="heading-md text-white text-lg mb-1">
              Interested in {PROJECT.nameShort}?
            </p>
            <p className="text-slate-400 text-sm">
              Get the latest price, floor plans, and availability from {ALINE.name}.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => {
                trackEvent(GA_EVENTS.PRICE_CLICK, { source: "overview_cta" });
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary cursor-pointer"
            >
              Get Latest Price <ArrowRight size={14} />
            </button>
            <button
              onClick={() => {
                trackEvent(GA_EVENTS.SITE_VISIT_CLICK, { source:"overview_cta" });
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-ghost-white cursor-pointer"
            >
              Book a Site Visit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
