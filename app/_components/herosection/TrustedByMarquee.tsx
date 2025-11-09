'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const trustedLogos = [
  { alt: "Amazon", src: "/hero/logo-amazon.png" },
  { alt: "Adobe", src: "/hero/logo-adobe.png" },
  { alt: "Walmart", src: "/hero/logo-walmart.png" },
  { alt: "Qualcomm", src: "/hero/logo-qualcomm.png" },
  { alt: "Deloitte", src: "/hero/logo-deloitte.png" },
];

export default function TrustedByMarquee() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const marqueeLogos = [...trustedLogos, ...trustedLogos];

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      gsap.from(".trusted-heading", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".trusted-track", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full">
      <p
        className="trusted-heading text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#555555]"
        style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
      >
        Trusted by Founders from
      </p>

      <div className="trusted-track relative mt-8 overflow-hidden rounded-[32px] bg-transparent py-8 backdrop-blur">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[30%] bg-linear-to-r from-[#F6FAFF] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[30%] bg-linear-to-l from-[#F6FAFF] to-transparent" />

        <div className="hero-marquee flex w-max items-center gap-16">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex h-14 w-48 items-center justify-center opacity-90 transition-opacity hover:opacity-100"
            >
              <Image
                alt={logo.alt}
                height={56}
                priority={index < trustedLogos.length}
                sizes="120px"
                src={logo.src}
                width={180}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
