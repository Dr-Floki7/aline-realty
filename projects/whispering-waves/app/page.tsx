/**
 * app/page.tsx — Suraksha Whispering Waves
 * Main project page. All sections assembled in SEO-optimal order.
 */
import Header              from "@/components/Header";
import Hero                from "@/components/sections/Hero";
import ProjectHighlights   from "@/components/sections/ProjectHighlights";
import Overview            from "@/components/sections/Overview";
import PriceSection        from "@/components/sections/PriceSection";
import FloorPlans          from "@/components/sections/FloorPlans";
import Amenities           from "@/components/sections/Amenities";
import ClubElan            from "@/components/sections/ClubElan";
import Gallery             from "@/components/sections/Gallery";
import Location            from "@/components/sections/Location";
import DeveloperSection    from "@/components/sections/DeveloperSection";
import ReraSection         from "@/components/sections/ReraSection";
import ALineSection        from "@/components/sections/ALineSection";
import FAQ                 from "@/components/sections/FAQ";
import CTASection          from "@/components/sections/CTASection";
import ContactSection      from "@/components/sections/ContactSection";
import Footer              from "@/components/Footer";
import MobileStickyBar     from "@/components/MobileStickyBar";
import WhatsAppFAB         from "@/components/WhatsAppFAB";
import Analytics           from "@/components/Analytics";

export default function Page() {
  return (
    <>
      <Analytics />
      <Header />

      <main id="main-content">
        {/* 1. Hero — above the fold, primary CTA + inline lead form */}
        <Hero />

        {/* 2. Quick project fact strip */}
        <ProjectHighlights />

        {/* 3. Project overview */}
        <Overview />

        {/* 4. Price & Configurations */}
        <PriceSection />

        {/* 5. Floor plans — 3 blurred previews + unlock CTA */}
        <FloorPlans />

        {/* 6. Amenities — 4 zones */}
        <Amenities />

        {/* 7. Club Élan */}
        <ClubElan />

        {/* 8. Gallery */}
        <Gallery />

        {/* 9. Location & Connectivity */}
        <Location />

        {/* 10. Developer Information */}
        <DeveloperSection />

        {/* 11. RERA Registration */}
        <ReraSection />

        {/* 12. A-Line Realty introduction */}
        <ALineSection />

        {/* 13. FAQs — AEO optimised */}
        <FAQ />

        {/* 14. CTA banner */}
        <CTASection />

        {/* 15. Contact / enquiry form */}
        <ContactSection />
      </main>

      <Footer />

      {/* Bottom padding spacer for mobile sticky bar */}
      <div className="h-20 lg:hidden" aria-hidden="true" />

      {/* Mobile sticky CTA bar */}
      <MobileStickyBar />

      {/* Desktop WhatsApp FAB */}
      <WhatsAppFAB />
    </>
  );
}
