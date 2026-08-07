"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, TrendingUp, Award } from "lucide-react";

const PILLARS = [
  { icon: ShieldCheck, title: "Verified Projects",   desc: "Every project we recommend is RERA registered and thoroughly verified." },
  { icon: Users,       title: "Customer First",      desc: "We prioritise your needs and provide personalised guidance at every step." },
  { icon: TrendingUp,  title: "Transparent Process", desc: "No hidden charges, no surprises — complete clarity from search to registration." },
  { icon: Award,       title: "Expert Guidance",     desc: "12+ years of Bengaluru market expertise working for your benefit." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.span variants={fadeUp} className="section-pill mb-5 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              Who We Are
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight mb-4"
            >
              Bengaluru&apos;s Trusted{" "}
              <span className="text-gold-500">Real Estate</span>{" "}
              Consultancy
            </motion.h2>

            <motion.div variants={fadeUp} className="gold-divider mb-6" />

            <motion.p
              variants={fadeUp}
              className="text-[15.5px] text-neutral-500 leading-relaxed mb-4"
            >
              A-Line Realty is a trusted real estate consultancy based in Bengaluru,
              dedicated to helping individuals and families buy their ideal residential
              or commercial property with confidence.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-[15.5px] text-neutral-500 leading-relaxed mb-8"
            >
              Founded by{" "}
              <span className="font-semibold text-neutral-700">Zakir Ali Mishrikoti</span>,
              we combine deep local market knowledge with a personalised approach —
              offering professional guidance at every stage of your property journey,
              from shortlisting to final registration.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold-50 border border-gold-100 rounded-full text-sm font-medium text-gold-700">
                ✓ RERA Compliant Projects
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold-50 border border-gold-100 rounded-full text-sm font-medium text-gold-700">
                ✓ Zero Brokerage for Buyers
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold-50 border border-gold-100 rounded-full text-sm font-medium text-gold-700">
                ✓ End-to-End Support
              </span>
            </motion.div>
          </motion.div>

          {/* Right — pillar cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 gap-4"
          >
            {PILLARS.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="card-hover bg-neutral-50 rounded-2xl p-5 border border-neutral-100"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-gold-600" strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-[14px] text-neutral-800 mb-1.5">{title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
