import Navbar from "@/components/Navbar";
import HeroSection from "@/app/components/herosection/HeroSection";
import TrustedByMarquee from "@/app/components/herosection/TrustedByMarquee";
import OurImpact from "./components/ourImpact/OurImpact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6FAFF]">
      <Navbar />
      <HeroSection />
      <TrustedByMarquee />
      <OurImpact/>
    </main>
  );
}
