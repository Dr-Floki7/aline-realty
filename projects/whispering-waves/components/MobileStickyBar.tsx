"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ALINE } from "@/lib/project-data";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";

const WA_URL = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917337861296"}?text=${process.env.NEXT_PUBLIC_WHATSAPP_MSG || "Hi%2C%20I%20would%20like%20to%20know%20the%20latest%20price%20and%20availability%20for%20Suraksha%20Whispering%20Waves."}`;

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white border-t border-navy-100 shadow-2xl px-3 py-2.5 safe-bottom"
        >
          <div className="flex items-center gap-2 max-w-md mx-auto">
            <a
              href={`tel:${ALINE.phoneRaw}`}
              onClick={() => trackEvent(GA_EVENTS.PHONE_CLICK, { source:"mobile_sticky" })}
              className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-lg bg-wave-900 text-white text-sm font-semibold"
              aria-label="Call"
            >
              <Phone size={14} /> Call
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent(GA_EVENTS.WHATSAPP_CLICK, { source:"mobile_sticky" })}
              className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-lg bg-[#25D366] text-white text-sm font-semibold"
              aria-label="WhatsApp"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
            <button
              onClick={() => {
                trackEvent(GA_EVENTS.PRICE_CLICK, { source:"mobile_sticky" });
                document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" });
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-lg bg-terra-500 text-white text-sm font-semibold cursor-pointer"
            >
              Price <ArrowRight size={13} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
