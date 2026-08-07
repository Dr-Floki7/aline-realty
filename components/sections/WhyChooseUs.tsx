"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck, UserCheck, MapPin,
  Landmark, FileText, HeartHandshake,
} from "lucide-react";

const CARDS = [
  {
    icon: ShieldCheck,
    title: "Verified Projects",
    desc: "Every property we present is RERA registered, legally clear, and personally vetted by our team.",
  },
  {
    icon: UserCheck,
    title: "Expert Guidance",
    desc: "Our consultants understand Bengaluru's micro-markets deeply and match you with the right options.",
  },
  {
    icon: MapPin,
    title: "Site Visit Assistance",
    desc: "We arrange and accompany you on site visits — no chasing builders, no wasted trips.",
  },
  {
    icon: Landmark,
    title: "Home Loan Support",
    desc: "We connect you with leading banks and NBFCs for competitive home loan rates and fast approvals.",
  },
  {
    icon: FileText,
    title: "Documentation Support",
    desc: "From sale agreement to registration — our team ensures every document is in perfect order.",
  },
  {
    icon: HeartHandshake,
    title: "After Sales Support",
    desc: "Our relationship doesn't end at sale. We assist with possession, interiors, and beyond.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-neutral-50">
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
            Why A-Line Realty
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight mb-3"
          >
            The A-Line{" "}
            <span className="text-gold-500">Advantage</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="gold-divider mx-auto mb-5" />
          <motion.p variants={fadeUp} className="text-[15.5px] text-neutral-500 leading-relaxed">
            We don&apos;t just show properties — we guide you through every step
            of your real estate journey with honesty, expertise, and care.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.09 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {CARDS.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="card-hover group bg-white rounded-2xl p-7 border border-neutral-100 shadow-sm hover:border-gold-200"
            >
              <div className="w-12 h-12 rounded-2xl bg-gold-50 group-hover:bg-gold-100 flex items-center justify-center mb-5 transition-colors duration-300">
                <Icon size={22} className="text-gold-500" strokeWidth={1.8} />
              </div>
              <h3 className="font-serif text-[17px] font-semibold text-neutral-900 mb-2">
                {title}
              </h3>
              <p className="text-[14px] text-neutral-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
