"use client";

import { motion } from "framer-motion";
import { Shield, ExternalLink, Copy, CheckCheck } from "lucide-react";
import { useState } from "react";
import { RERA } from "@/lib/project-data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ReraSection() {
  const [copied, setCopied] = useState(false);

  const copyRera = async () => {
    try {
      await navigator.clipboard.writeText(RERA.registrationNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section id="rera" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <span className="eyebrow mb-4 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> RERA Registration
            </span>
            <h2 className="heading-lg text-3xl sm:text-4xl text-slate-900 mb-4">
              Project Registration Details
            </h2>
            <div className="gold-bar mx-auto mb-5" />
            <p className="text-slate-500 text-[15.5px] leading-relaxed">
              Suraksha Whispering Waves is registered with the Karnataka Real Estate
              Regulatory Authority (K-RERA) as required under the Real Estate (Regulation
              and Development) Act, 2016.
            </p>
          </motion.div>

          {/* RERA card */}
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
          >
            {/* Top bar */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-5 flex items-center gap-3">
              <Shield size={22} className="text-gold-400" />
              <div>
                <p className="text-white font-semibold text-lg">{RERA.projectName}</p>
                <p className="text-slate-400 text-sm">Karnataka RERA — Project Registration</p>
              </div>
            </div>

            {/* Details grid */}
            <div className="divide-y divide-slate-100">
              {[
                { label: "Project Name",           value: RERA.projectName          },
                { label: "Developer / Promoter",   value: RERA.promoter             },
                { label: "RERA Registration No.",  value: RERA.registrationNumber, copyable: true },
                { label: "Approval Date",          value: RERA.approvalDate         },
                { label: "Registration Valid Till",value: RERA.registrationValidity },
                {
                  label: "Project Address",
                  value: `${RERA.projectAddress.syNos}, ${RERA.projectAddress.road}, ${RERA.projectAddress.village}, ${RERA.projectAddress.hobli}, ${RERA.projectAddress.ward}, ${RERA.projectAddress.taluk}, ${RERA.projectAddress.district}, ${RERA.projectAddress.state} — ${RERA.projectAddress.pincode}`,
                },
              ].map(row => (
                <div key={row.label} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 px-6 py-4">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-slate-400 sm:w-48 shrink-0 mt-0.5">
                    {row.label}
                  </p>
                  <div className="flex items-center gap-2 flex-1">
                    <p className="text-sm font-medium text-slate-800 break-all">{row.value}</p>
                    {row.copyable && (
                      <button
                        onClick={copyRera}
                        aria-label="Copy RERA number"
                        className="p-1 rounded hover:bg-slate-100 transition-colors text-slate-400 hover:text-gold-600 cursor-pointer shrink-0"
                      >
                        {copied ? <CheckCheck size={14} className="text-green-500" /> : <Copy size={14} />}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-gold-50 border-t border-gold-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-xs text-gold-800 leading-relaxed max-w-md">
                <strong>Note:</strong> The acknowledgement number (ACK/KA/RERA/…/010068) is
                different from the project registration number above. The registration number
                above is the authoritative project identifier for RERA purposes.
              </p>
              <a
                href={RERA.reraPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-2 shrink-0 flex items-center gap-1.5"
              >
                Verify on RERA Portal <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
