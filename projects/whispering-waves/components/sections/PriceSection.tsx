"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROJECT } from "@/lib/project-data";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";

export default function PriceSection() {
  return (
    <section id="price" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={PROJECT.renders.balcony}
          alt="Suraksha Whispering Waves balcony view"
          fill className="object-cover" sizes="100vw" loading="lazy"
        />
        <div className="absolute inset-0 bg-wave-950/88 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
        >
          <p className="text-wave-300 text-sm font-semibold tracking-[0.12em] uppercase mb-5">
            Suraksha Whispering Waves Price — Begur, South Bengaluru
          </p>

          <h2 className="font-display text-white text-3xl sm:text-4xl mb-3">
            Suraksha Whispering Waves Price
          </h2>
          <p className="text-wave-200 text-lg mb-2">
            2, 3 &amp; 4 BHK starting from
          </p>
          <p className="font-display text-terra-300 text-5xl sm:text-6xl lg:text-7xl mb-4">
            {PROJECT.priceStarting}<sup className="text-xl">{PROJECT.priceAsterisk}</sup>
          </p>

          {/* Offer */}
          <div className="inline-block bg-terra-500/15 border border-terra-400/30 text-terra-200 text-sm sm:text-base font-semibold px-5 py-3 rounded-lg mb-3">
            {PROJECT.offer}<sup>{PROJECT.offerAsterisk}</sup>
          </div>
          <p className="text-wave-400 text-xs max-w-sm mx-auto mb-10">
            {PROJECT.offerDisclaimer}
          </p>

          {/* Config summary */}
          <div className="grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-10">
            {[
              { config:"2 BHK", towers:"C & F", area:"1,348 – 1,393 sq.ft" },
              { config:"3 BHK", towers:"A, B, C, D, E & F", area:"1,605 – 1,850 sq.ft" },
              { config:"4 BHK", towers:"D & E", area:"2,016 sq.ft" },
            ].map(c => (
              <div key={c.config} className="bg-white/5 border border-white/10 rounded-lg px-4 py-5 backdrop-blur-sm">
                <p className="font-display text-white text-xl mb-1">{c.config}</p>
                <p className="text-wave-300 text-xs font-semibold">Towers {c.towers}</p>
                <p className="text-white/50 text-xs mt-1">{c.area}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              trackEvent(GA_EVENTS.PRICE_CLICK, { source:"price_section" });
              document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" });
            }}
            className="btn-primary text-base px-10 py-4"
          >
            Get Latest Price <ArrowRight size={16} />
          </button>

          {/* Crawlable pricing text for SEO */}
          <p className="text-white/50 text-sm max-w-xl mx-auto mt-10 leading-relaxed">
            Suraksha Whispering Waves price starts from ₹1.37 Cr+ for a 2 BHK apartment
            (1,348–1,393 sq.ft) in Blocks C and F. The 3 BHK configurations are priced
            from ₹1.62 Cr to ₹1.86 Cr+ (1,605–1,850 sq.ft) and are available across all
            six blocks. The 4 BHK at 2,016 sq.ft is priced from ₹2.03 Cr+ in Blocks D and E.
            Prices are indicative and subject to change — contact us for the latest
            configuration-wise cost sheet and availability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
