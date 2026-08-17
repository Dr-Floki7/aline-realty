"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { ALINE, PROJECT } from "@/lib/project-data";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";

const WA_URL = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917337861296"}?text=${process.env.NEXT_PUBLIC_WHATSAPP_MSG || "Hi%2C%20I%20would%20like%20to%20know%20the%20latest%20price%20and%20availability%20for%20Suraksha%20Whispering%20Waves."}`;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-[11px] font-bold tracking-[0.15em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Get in Touch
          </motion.span>
          <motion.h2 variants={fadeUp} className="heading-lg text-3xl sm:text-4xl text-white mb-4">
            Get Details for{" "}
            <span className="text-gold-400">{PROJECT.nameShort}</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="gold-bar mx-auto mb-5" />
          <motion.p variants={fadeUp} className="text-slate-400 text-[15.5px] leading-relaxed">
            Fill in the form for the latest price, floor plans and availability.
            Or reach out directly — no commitment, no pressure.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity:0, x:-24 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once: true }}
            transition={{ duration:0.55 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Contact cards */}
            <div className="bg-white/5 border border-white/10 rounded-2xl divide-y divide-white/10">
              <a
                href={`tel:${ALINE.phoneRaw}`}
                onClick={() => trackEvent(GA_EVENTS.PHONE_CLICK, { source:"contact_section" })}
                className="flex items-center gap-4 px-5 py-4 hover:bg-white/5 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-gold-500/20 flex items-center justify-center shrink-0">
                  <Phone size={15} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-0.5">Call / WhatsApp</p>
                  <p className="text-sm font-semibold text-white group-hover:text-gold-300 transition-colors">
                    {ALINE.phone}
                  </p>
                </div>
              </a>
              <a
                href={`mailto:${ALINE.email}`}
                className="flex items-center gap-4 px-5 py-4 hover:bg-white/5 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-gold-500/20 flex items-center justify-center shrink-0">
                  <Mail size={15} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-0.5">Email</p>
                  <p className="text-sm font-semibold text-white group-hover:text-gold-300 transition-colors break-all">
                    {ALINE.email}
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4 px-5 py-4">
                <div className="w-9 h-9 rounded-xl bg-gold-500/20 flex items-center justify-center shrink-0">
                  <MapPin size={15} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-0.5">Location</p>
                  <p className="text-sm font-semibold text-white">{ALINE.location}</p>
                </div>
              </div>
            </div>

            {/* WhatsApp button */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent(GA_EVENTS.WHATSAPP_CLICK, { source:"contact_section" })}
              className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1ebe5d] transition-all hover:-translate-y-0.5 shadow-lg"
            >
              <MessageCircle size={17} />
              Chat on WhatsApp
            </a>

            {/* Enquiry types */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-sm font-semibold text-white mb-3">We can help you with:</p>
              <ul className="space-y-2">
                {[
                  "Latest price & payment plan",
                  "Available floor plans",
                  "Site visit booking",
                  "Download brochure",
                  "Home loan guidance",
                  "Project availability status",
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-gold-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity:0, x:24 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once: true }}
            transition={{ duration:0.55 }}
            className="lg:col-span-3"
          >
            <LeadForm
              enquiryType="contact_form"
              heading="Send an Enquiry"
              subheading="We'll get back to you within a few hours with the latest details."
              ctaLabel="Send Enquiry"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
