"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, MessageCircle } from "lucide-react";
import { PROJECT, ALINE } from "@/lib/project-data";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";

const WA_URL = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917337861296"}?text=${process.env.NEXT_PUBLIC_WHATSAPP_MSG || "Hi%2C%20I%20would%20like%20to%20know%20the%20latest%20price%20and%20availability%20for%20Suraksha%20Whispering%20Waves."}`;

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-gold-600 to-gold-500 py-14 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white/70 text-sm font-semibold tracking-widest uppercase mb-3">
            Interested in {PROJECT.nameShort}?
          </p>
          <h2 className="heading-lg text-3xl sm:text-4xl text-white mb-4">
            Get the Latest Price, Floor Plans &amp; Availability
          </h2>
          <p className="text-white/80 text-[15.5px] max-w-xl mx-auto mb-8">
            Speak with a property advisor from {ALINE.name}. No commitment, no hidden charges.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                trackEvent(GA_EVENTS.PRICE_CLICK, { source:"cta_banner" });
                document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" });
              }}
              className="btn-white cursor-pointer"
            >
              Get Latest Price <ArrowRight size={15} />
            </button>
            <a
              href={`tel:${ALINE.phoneRaw}`}
              onClick={() => trackEvent(GA_EVENTS.PHONE_CLICK, { source:"cta_banner" })}
              className="btn-ghost-white"
            >
              <Phone size={15} /> {ALINE.phone}
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent(GA_EVENTS.WHATSAPP_CLICK, { source:"cta_banner" })}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1ebe5d] transition-all"
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
