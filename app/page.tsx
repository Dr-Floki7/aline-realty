import Navbar        from "@/components/Navbar";
import Hero          from "@/components/sections/Hero";
import About         from "@/components/sections/About";
import WhyChooseUs   from "@/components/sections/WhyChooseUs";
import Stats         from "@/components/sections/Stats";
import Services      from "@/components/sections/Services";
import Contact       from "@/components/sections/Contact";
import Footer        from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Stats />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
