import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { HighlightsSection } from "@/components/sections/highlights-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <HighlightsSection />
      <ContactSection />
    </>
  );
}
