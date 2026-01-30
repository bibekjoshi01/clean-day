import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import ImpactSection from "@/components/impact-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ImpactSection />
      <AboutSection />
    </div>
  );
}
