import Navbar from "@/components/Navbar";
import HeroSection from "@/app/components/herosection/HeroSection";
import TrustedByMarquee from "@/app/components/herosection/TrustedByMarquee";
import OurImpact from "./components/ourImpact/OurImpact";
import OurWork from "./components/ourWork/OurWork";
import WhyLaunchPad from "./components/whyLaunchPad/WhyLaunchPad";
import OurApproach from "./components/ourApproach/OurApproach";
import OurProcess from "./components/ourProcess/OurProcess";
import Testimonials from "./components/testimonials/Testimonials";
import BookCall from "./components/bookCall/BookCall";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6FAFF]">
      <Navbar />
      <HeroSection />
      <TrustedByMarquee />
      <OurImpact />
      <OurWork />
      <WhyLaunchPad />
      <OurApproach />
      <OurProcess />
      <Testimonials />
      <BookCall />
      <Footer />
    </main>
  );
}
