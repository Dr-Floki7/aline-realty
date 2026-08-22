"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { CLUB_ELAN, PROJECT } from "@/lib/project-data";

export default function ClubElan() {
  return (
    <section id="club-elan" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image src={PROJECT.renders.clubhouse} alt="Suraksha Whispering Waves Club Élan clubhouse" fill className="object-cover" sizes="100vw" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-wave-950/92 via-wave-950/80 to-wave-950/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="max-w-xl"
        >
          <p className="text-wave-300 text-sm font-semibold tracking-[0.12em] uppercase mb-4">Clubhouse</p>
          <h2 className="font-display text-white text-3xl sm:text-4xl lg:text-5xl mb-2">
            Club Élan at Suraksha Whispering Waves
          </h2>
          <p className="text-wave-200 text-lg mb-2">{CLUB_ELAN.levels}-Level Lifestyle Clubhouse</p>
          <p className="text-white/50 text-[15px] leading-relaxed mb-8">
            {CLUB_ELAN.description}
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
            {CLUB_ELAN.facilities.map(f => (
              <div key={f} className="flex items-center gap-2.5">
                <CheckCircle2 size={13} className="text-terra-400 shrink-0" />
                <span className="text-sm text-white/80">{f}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
