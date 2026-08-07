"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

const STATS: Stat[] = [
  { value: 250,  suffix: "+",   label: "Projects Sold"  },
  { value: 18,   suffix: "+",   label: "Micro Markets"  },
  { value: 500,  suffix: "Cr+", prefix: "₹", label: "Deals Closed" },
  { value: 4.9,  suffix: "★",   label: "Client Rating", decimals: 1 },
];

function Counter({ value, suffix, prefix = "", decimals = 0, started }: Stat & { started: boolean }) {
  const [display, setDisplay] = useState(0);
  const frame = useRef<number>(0);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(parseFloat((ease * value).toFixed(decimals)));
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [started, value, decimals]);

  return (
    <span>
      {prefix}{decimals > 0 ? display.toFixed(decimals) : Math.round(display)}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section
      ref={ref}
      aria-label="Company statistics"
      className="py-20 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 relative overflow-hidden"
    >
      {/* Gold glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gold-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-[11px] font-bold tracking-[0.18em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            Our Track Record
          </span>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-300 px-8 py-10 text-center"
            >
              <p className="font-serif text-4xl sm:text-5xl font-bold text-gold-400 mb-2 leading-none tabular-nums">
                <Counter {...stat} started={inView} />
              </p>
              <p className="text-sm font-medium text-neutral-400 tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
