"use client";

import { motion } from "framer-motion";
import {
  Home, TrendingUp, MessageSquare,
  MapPin, Landmark, FileCheck2,
} from "lucide-react";

const SERVICES = [
  {
    icon: Home,
    title: "Buying Assistance",
    desc: "End-to-end support in identifying, evaluating, and purchasing residential or commercial properties suited to your needs and budget.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    desc: "Data-driven guidance on high-return investment opportunities — pre-launch, under-construction, and ready-to-move across Bengaluru.",
  },
  {
    icon: MessageSquare,
    title: "Property Consultation",
    desc: "Free one-on-one consultations to understand your goals and provide tailored property recommendations across Bengaluru's top micro-markets.",
  },
  {
    icon: MapPin,
    title: "Site Visits",
    desc: "We arrange and accompany you on personalised site visits — coordinating with builders so you can evaluate properties stress-free.",
  },
  {
    icon: Landmark,
    title: "Home Loan Guidance",
    desc: "We connect you with leading lenders for competitive rates, assist with documentation, and help you secure fast loan approvals.",
  },
  {
    icon: FileCheck2,
    title: "Documentation Support",
    desc: "From agreement of sale to stamp duty and registration — our team ensures all documentation is accurate, complete, and legally sound.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.span variants={fadeUp} className="section-pill mb-5 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            What We Do
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight mb-3"
          >
            Our <span className="text-gold-500">Services</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="gold-divider mx-auto mb-5" />
          <motion.p variants={fadeUp} className="text-[15.5px] text-neutral-500 leading-relaxed">
            A complete range of real estate services designed to make your
            property journey smooth, informed, and completely transparent.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ show: { transition: { staggerChildren: 0.09 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="card-hover group relative bg-white rounded-2xl p-7 border border-neutral-100 shadow-sm hover:border-gold-200 overflow-hidden"
            >
              {/* Subtle number watermark */}
              <span className="absolute top-4 right-5 font-serif text-6xl font-bold text-neutral-50 select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gold-50 group-hover:bg-gold-100 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon size={22} className="text-gold-500" strokeWidth={1.8} />
                </div>
                <h3 className="font-serif text-[17px] font-semibold text-neutral-900 mb-2">
                  {title}
                </h3>
                <p className="text-[14px] text-neutral-500 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
