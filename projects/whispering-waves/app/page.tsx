/**
 * app/page.tsx — Suraksha Whispering Waves
 * Main project page. All sections assembled in SEO-optimal order.
 */
import Header             from "@/components/Header";
import Hero               from "@/components/sections/Hero";
import ProjectHighlights  from "@/components/sections/ProjectHighlights";
import Overview           from "@/components/sections/Overview";
import PriceSection       from "@/components/sections/PriceSection";
import FloorPlans         from "@/components/sections/FloorPlans";
import Amenities          from "@/components/sections/Amenities";
import ClubElan           from "@/components/sections/ClubElan";
import Location           from "@/components/sections/Location";
import ReraSection        from "@/components/sections/ReraSection";
import ALineSection       from "@/components/sections/ALineSection";
import FAQ                from "@/components/sections/FAQ";
import CTASection         from "@/components/sections/CTASection";
import ContactSection     from "@/components/sections/ContactSection";
import Footer             from "@/components/Footer";
import MobileStickyBar    from "@/components/MobileStickyBar";
import WhatsAppFAB        from "@/components/WhatsAppFAB";
import Analytics          from "@/components/Analytics";

export default function Page() {
  return (
    <>
      <Analytics />
      <Header />

      <main id="main-content">
        {/* 1. Hero — above the fold, primary CTA */}
        <Hero />

        {/* 2. Quick project fact strip */}
        <ProjectHighlights />

        {/* 3. Project overview — who, what, why */}
        <Overview />

        {/* 4. Price & Configurations */}
        <PriceSection />

        {/* 5. Floor plans — filterable, lightbox */}
        <FloorPlans />

        {/* 6. Amenities — 4 zones */}
        <Amenities />

        {/* 7. Club Élan — dedicated clubhouse section */}
        <ClubElan />

        {/* 8. Location & Connectivity */}
        <Location />

        {/* 9. RERA Registration */}
        <ReraSection />

        {/* 10. A-Line Realty introduction */}
        <ALineSection />

        {/* 11. FAQs — AEO optimised */}
        <FAQ />

        {/* 12. Mid-page CTA banner */}
        <CTASection />

        {/* 13. Contact / enquiry form */}
        <ContactSection />
      </main>

      <Footer />

      {/* Mobile sticky CTA bar — Call / WhatsApp / Price */}
      <MobileStickyBar />

      {/* Desktop WhatsApp FAB */}
      <WhatsAppFAB />
    </>
  );
}
