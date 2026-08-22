"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/project-data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-12"
        >
          <motion.span variants={fadeUp} className="eyebrow mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Frequently Asked Questions
          </motion.span>
          <motion.h2 variants={fadeUp} className="heading-lg text-3xl sm:text-4xl text-slate-900 mb-4">
            Suraksha Whispering Waves —{" "}
            <span className="text-gold-500">FAQ</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="gold-bar mx-auto mb-5" />
          <motion.p variants={fadeUp} className="text-slate-500 text-[15.5px] leading-relaxed">
            Everything home buyers commonly ask about Suraksha Whispering Waves —
            answered using verified information from the developer&apos;s official material
            and the Karnataka RERA certificate.
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-2">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity:0, y:12 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once: true }}
                transition={{ duration:0.35, delay: i * 0.04 }}
                className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                  isOpen
                    ? "border-gold-300 bg-gold-50"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-q-${i}`}
                >
                  <span className={`heading-md text-[15px] leading-snug transition-colors ${
                    isOpen ? "text-gold-700" : "text-slate-900"
                  }`}>
                    {faq.q}
                  </span>
                  <span className="shrink-0 mt-0.5">
                    {isOpen
                      ? <Minus size={16} className="text-gold-500" />
                      : <Plus size={16} className="text-slate-400" />
                    }
                  </span>
                </button>
                {/* Answer — always in DOM for crawlability, visually toggled */}
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className={`grid transition-[grid-template-rows] duration-250 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5">
                      <p className="text-[14.5px] text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* More questions CTA */}
        <motion.p
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once: true }}
          transition={{ duration:0.5 }}
          className="mt-8 text-center text-sm text-slate-500"
        >
          Have a question not answered here?{" "}
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" })}
            className="text-gold-600 hover:text-gold-700 font-semibold underline underline-offset-2 cursor-pointer"
          >
            Ask us directly
          </button>
        </motion.p>
      </div>
    </section>
  );
}
