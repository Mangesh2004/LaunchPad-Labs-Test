import HeroSection from "@/app/_components/herosection/HeroSection";
import TrustedByMarquee from "@/app/_components/herosection/TrustedByMarquee";
import OurImpact from "./_components/ourImpact/OurImpact";
import OurWork from "@/app/_components/ourWork/OurWork";
import WhyLaunchPad from "./_components/whyLaunchPad/WhyLaunchPad";
import OurApproach from "./_components/ourApproach/OurApproach";
import OurProcess from "./_components/ourProcess/OurProcess";
import Testimonials from "./_components/testimonials/Testimonials";
import BookCall from "./_components/bookCall/BookCall";

export default function Home() {
  return (
    <div className="bg-[#F6FAFF]">
      <HeroSection />
      <TrustedByMarquee />
      <OurImpact />
      <OurWork />
      <WhyLaunchPad />
      <OurApproach />
      <OurProcess />
      <Testimonials />
      <BookCall />
    </div>
  );
}
