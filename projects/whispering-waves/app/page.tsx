import Header             from "@/components/Header";
import Hero               from "@/components/sections/Hero";
import ProjectHighlights  from "@/components/sections/ProjectHighlights";
import ProjectStory       from "@/components/sections/ProjectStory";
import PriceSection       from "@/components/sections/PriceSection";
import Amenities          from "@/components/sections/Amenities";
import ClubElan           from "@/components/sections/ClubElan";
import Gallery            from "@/components/sections/Gallery";
import Location           from "@/components/sections/Location";
import DeveloperSection   from "@/components/sections/DeveloperSection";
import FAQ                from "@/components/sections/FAQ";
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
        <Hero />
        <ProjectHighlights />
        <ProjectStory />
        <PriceSection />
        <Amenities />
        <ClubElan />
        <Gallery />
        <Location />
        <DeveloperSection />
        <FAQ />
        <ContactSection />
      </main>

      <Footer />
      <div className="h-20 lg:hidden" aria-hidden="true" />
      <MobileStickyBar />
      <WhatsAppFAB />
    </>
  );
}
