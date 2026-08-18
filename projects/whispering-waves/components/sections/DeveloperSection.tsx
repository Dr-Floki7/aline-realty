"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { RERA, PROJECT } from "@/lib/project-data";

export default function DeveloperSection() {
  return (
    <section id="developer" className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.5 }}
          className="text-center"
        >
          <p className="text-gold-500 text-sm font-semibold tracking-[0.12em] uppercase mb-4">Developer</p>
          <h2 className="font-display text-slate-900 text-3xl sm:text-4xl mb-4">
            {RERA.promoter}
          </h2>
          <p className="text-slate-500 text-[15.5px] leading-relaxed max-w-xl mx-auto mb-8">
            Suraksha has delivered homes across Bengaluru with a commitment to quality
            and transparency. {PROJECT.name} is their latest residential project in
            South Bengaluru.
          </p>

          <div className="bg-slate-50 rounded-lg border border-slate-200 divide-y divide-slate-100 text-left max-w-lg mx-auto mb-6">
            {[
              ["Developer", RERA.promoter],
              ["Project", RERA.projectName],
              ["RERA No.", RERA.registrationNumber],
              ["Approved", RERA.approvalDate],
              ["Valid Till", RERA.registrationValidity],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between items-center px-5 py-3.5 text-sm">
                <span className="text-slate-500">{label}</span>
                <span className="font-semibold text-slate-800 text-right break-all text-xs sm:text-sm">{value}</span>
              </div>
            ))}
          </div>

          <a
            href={PROJECT.developerWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm inline-flex"
          >
            Official Developer Website <ExternalLink size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
