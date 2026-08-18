"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECT } from "@/lib/project-data";

export default function ProjectStory() {
  return (
    <section id="overview" className="py-24 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity:0, x:-16 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.6 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src={PROJECT.renders.pondView}
              alt="Suraksha Whispering Waves landscaped pond and gardens"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity:0, x:16 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.6 }}
          >
            <p className="text-terra-500 text-sm font-semibold tracking-[0.1em] uppercase mb-4">
              Life. Effortless Wellbeing.
            </p>
            <h2 className="font-display text-navy-900 text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight mb-6">
              Where Every Detail Is Thoughtfully Refined
            </h2>
            <div className="space-y-4 text-navy-600 text-[15.5px] leading-relaxed">
              <p>
                Whispering Waves is more than a residential address — it&apos;s a thoughtfully
                crafted community inspired by the serene surroundings of Begur Lake.
              </p>
              <p>
                Some places feel different the moment you arrive — the air feels lighter,
                the surroundings calmer. Homes here are shaped by everyday moments, with
                open spaces, natural light, and fresh air flowing seamlessly.
              </p>
              <p>
                From well-planned 2, 3, and 4 BHK homes to curated landscapes and lifestyle
                amenities, every detail is designed to offer balance, comfort, and a truly
                connected way of living.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              {[
                `${PROJECT.projectSize} project`,
                "Breeze corridors & Lake Echo Gardens",
                "Vaastu-aligned, naturally ventilated",
                "6-level Club Élan clubhouse",
              ].map(item => (
                <span key={item} className="flex items-center gap-2 text-navy-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-terra-400" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
