"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { ALINE, PROJECT } from "@/lib/project-data";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";

const WA_URL = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917337861296"}?text=${process.env.NEXT_PUBLIC_WHATSAPP_MSG || "Hi%2C%20I%20would%20like%20to%20know%20the%20latest%20price%20and%20availability%20for%20Suraksha%20Whispering%20Waves."}`;

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-wave-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity:0, x:-16 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.5 }}
          >
            <p className="text-wave-300 text-sm font-semibold tracking-[0.12em] uppercase mb-4">Get in Touch</p>
            <h2 className="font-display text-white text-3xl sm:text-4xl mb-4">
              Get Latest Price &amp; Details
            </h2>
            <p className="text-wave-400 text-[15.5px] leading-relaxed mb-8">
              Get the latest price, floor plans and availability
              for {PROJECT.name} in Begur, South Bengaluru. No commitment, no pressure.
            </p>

            <div className="space-y-4 mb-8">
              <a href={`tel:${ALINE.phoneRaw}`} onClick={() => trackEvent(GA_EVENTS.PHONE_CLICK, {source:"contact"})} className="flex items-center gap-3 text-white hover:text-wave-200 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center"><Phone size={16} className="text-wave-300" /></div>
                <span className="font-semibold">{ALINE.phone}</span>
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent(GA_EVENTS.WHATSAPP_CLICK, {source:"contact"})} className="flex items-center gap-3 text-white hover:text-wave-200 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/20 flex items-center justify-center"><MessageCircle size={16} className="text-[#25D366]" /></div>
                <span className="font-semibold">Chat on WhatsApp</span>
              </a>
            </div>

            <p className="text-wave-700 text-xs leading-relaxed max-w-sm">
              {ALINE.disclaimer}
            </p>
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity:0, x:16 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}>
            <LeadForm enquiryType="contact_form" heading="Send an Enquiry" subheading="We'll share the latest details within a few hours." ctaLabel="Get Price & Details" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
