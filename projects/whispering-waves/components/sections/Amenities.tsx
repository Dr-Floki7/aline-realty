"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PROJECT, AMENITY_GROUPS } from "@/lib/project-data";

const ZONE_IMAGES: Record<string, string> = {
  Social:  PROJECT.renders.amphitheatre,
  Revive:  PROJECT.renders.pool,
  Engage:  PROJECT.renders.multipurpose,
  Breathe: PROJECT.renders.garden,
};

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="text-wave-600 text-sm font-semibold tracking-[0.12em] uppercase mb-4">Amenities</p>
          <h2 className="font-display text-navy-900 text-3xl sm:text-4xl mb-4">
            Amenities at Suraksha Whispering Waves
          </h2>
          <p className="text-navy-500 text-[15.5px] leading-relaxed">
            Thoughtfully organised into four lifestyle zones — Social, Revive, Engage and Breathe —
            ensuring spaces for connection, wellness, sport and nature.
          </p>
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {AMENITY_GROUPS.map((group, i) => {
            const imgSrc = ZONE_IMAGES[group.zone] || PROJECT.renders.seating;
            const reverse = i % 2 !== 0;
            return (
              <motion.div
                key={group.zone}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, amount:0.2 }}
                transition={{ duration:0.5 }}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div className={`relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg ${reverse ? "lg:order-2" : ""}`}>
                  <Image src={imgSrc} alt={`Suraksha Whispering Waves ${group.zone.toLowerCase()} amenities`} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" loading="lazy" />
                </div>
                <div className={reverse ? "lg:order-1" : ""}>
                  <span className="text-3xl block mb-3">{group.icon}</span>
                  <h3 className="font-display text-2xl text-navy-900 mb-4">{group.zone}</h3>
                  <ul className="space-y-2.5">
                    {group.items.map(item => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 size={15} className="text-wave-500 shrink-0" />
                        <span className="text-[15px] text-navy-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
