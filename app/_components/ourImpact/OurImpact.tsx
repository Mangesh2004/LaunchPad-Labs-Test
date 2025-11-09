'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ImpactCard from "./ImpactCard";

const CARDS = [
  {
    value: "$25M+",
    description: "Raised by founders who launched with us",
    fillGradient: "linear-gradient(0deg, #FFFFFF 0%, #E6F3FF 100%)",
    borderGradient:
      "linear-gradient(180deg, #B9E8FF 0%, rgba(140, 180, 255, 0.93) 46%, rgba(222, 248, 255, 0.66) 100%)",
  },
  {
    value: "50+",
    description: "MVPs built – live in market within 2 weeks",
    fillGradient: " linear-gradient(0deg, #FFFFFF 0%, #E6F3FF 100%)",
    borderGradient:
      "linear-gradient(180deg, #B9E8FF 0%, rgba(140, 180, 255, 0.93) 46%, rgba(222, 248, 255, 0.66) 100%)",
  },
  {
    value: "5",
    description: "Startups acquired after launching through LaunchPad Labs",
    fillGradient: "linear-gradient(0deg, #FFFFFF 0%, #E6F3FF 100%)",
    borderGradient:
      "linear-gradient(180deg, #B9E8FF 0%, rgba(140, 180, 255, 0.93) 46%, rgba(222, 248, 255, 0.66) 100%)",
  },
];

export const OurImpact = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const introItems = gsap.utils.toArray<HTMLElement>(".impact-intro");

      if (introItems.length) {
        gsap.from(introItems, {
          opacity: 0,
          y: 18,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }

      gsap.from(".impact-card", {
        opacity: 0,
        y: 32,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".impact-card-grid",
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative flex flex-col items-center bg-white px-6 py-24">
      <div className="flex flex-col items-center text-center">
        <div className="impact-intro">
          <Image src="/hero/our_impact.png" alt="Our Impact" width={151} height={44} />
        </div>

        <h2
          className="impact-intro mt-6 text-[24px] font-semibold leading-[31px] text-[#202020]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          Fast launches Real results
        </h2>
      </div>

      <div className="impact-card-grid mt-10 flex w-full max-w-5xl flex-col gap-9 md:flex-row">
        {CARDS.map((card) => (
          <ImpactCard key={card.value} {...card} className="impact-card flex-1" />
        ))}
      </div>
    </section>
  );
};

export default OurImpact;
