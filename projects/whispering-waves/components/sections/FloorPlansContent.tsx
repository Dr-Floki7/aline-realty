/**
 * FloorPlansContent — Server component (no "use client")
 * Lightweight crawlable content block for floor plan SEO.
 */

export default function FloorPlansContent() {
  return (
    <section id="floor-plans" className="py-16 lg:py-20 bg-cream-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-display text-navy-900 text-2xl sm:text-3xl mb-4">
          Suraksha Whispering Waves Floor Plans
        </h3>
        <div className="space-y-3 text-navy-600 text-[15px] leading-relaxed">
          <p>
            Suraksha Whispering Waves offers multiple floor plan layouts across 3 towers
            and 6 blocks (A through F). All apartments feature Vaastu-aligned designs,
            natural ventilation, open balconies and efficient space planning.
          </p>
          <p>
            The 2 BHK floor plans range from 1,348 to 1,393 sq.ft and are available in
            Blocks C and F. The 3 BHK layouts span 1,605 to 1,850 sq.ft across all six
            blocks. The 4 BHK floor plan is designed at 2,016 sq.ft in Blocks D and E.
          </p>
          <p className="text-navy-500 text-sm">
            For detailed floor plans with room dimensions, carpet area breakdown and
            availability, contact us or fill in the enquiry form below.
          </p>
        </div>
      </div>
    </section>
  );
}
