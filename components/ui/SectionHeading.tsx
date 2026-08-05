"use client";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <span className="inline-block mb-3 text-xs font-semibold tracking-[0.25em] uppercase text-gold-400">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? "text-charcoal-900" : "text-white"
        }`}
      >
        {title}
      </h2>
      <div
        className={`gold-line w-16 mb-5 ${centered ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`max-w-2xl text-base sm:text-lg leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-charcoal-600" : "text-charcoal-300"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
