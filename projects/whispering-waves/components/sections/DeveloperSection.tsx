"use client";

import { motion } from "framer-motion";
import { Building2, ExternalLink, CheckCircle2 } from "lucide-react";
import { RERA, PROJECT } from "@/lib/project-data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function DeveloperSection() {
  return (
    <section id="developer" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — visual card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 p-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gold-50 flex items-center justify-center mx-auto mb-6">
                <Building2 size={32} className="text-gold-600" strokeWidth={1.4} />
              </div>
              <p className="font-serif text-3xl font-bold text-slate-900 mb-2">
                R K Suraksha
              </p>
              <p className="font-serif text-3xl font-bold text-gold-500 mb-4">
                Properties
              </p>
              <p className="text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
                Developer / Promoter of Suraksha Whispering Waves and other residential
                projects across Bengaluru.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-center gap-6 text-sm text-slate-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-gold-500" /> RERA Registered
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-gold-500" /> Bengaluru
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.span variants={fadeUp} className="eyebrow mb-4 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Developer
            </motion.span>
            <motion.h2 variants={fadeUp} className="heading-lg text-3xl sm:text-4xl text-slate-900 mb-4">
              About the{" "}
              <span className="text-gold-500">Developer</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="gold-bar mb-6" />
            <motion.p variants={fadeUp} className="text-slate-500 text-[15.5px] leading-relaxed mb-5">
              Suraksha Whispering Waves is developed and promoted by{" "}
              <strong className="text-slate-700">{RERA.promoter}</strong>.
              Suraksha has delivered homes across Bengaluru with a commitment to
              quality and transparency.
            </motion.p>

            <motion.div variants={fadeUp} className="bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Developer Name</span>
                <span className="font-semibold text-slate-900">{RERA.promoter}</span>
              </div>
              <div className="border-t border-slate-100" />
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">RERA No.</span>
                <span className="font-mono text-xs text-slate-700">{RERA.registrationNumber}</span>
              </div>
              <div className="border-t border-slate-100" />
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Approval Date</span>
                <span className="text-slate-700">{RERA.approvalDate}</span>
              </div>
              <div className="border-t border-slate-100" />
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Registration Valid Till</span>
                <span className="text-slate-700">{RERA.registrationValidity}</span>
              </div>
            </motion.div>

            <motion.a
              variants={fadeUp}
              href={PROJECT.developerWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex text-sm"
            >
              Visit Official Developer Website <ExternalLink size={13} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
