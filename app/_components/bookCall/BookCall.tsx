"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BookCall = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const introItems = gsap.utils.toArray<HTMLElement>(".bookcall-intro");

      if (introItems.length) {
        gsap.from(introItems, {
          opacity: 0,
          y: 18,
          duration: 0.65,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }

      gsap.from(".bookcall-cta", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".bookcall-cta",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".bookcall-visual", {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".bookcall-visual",
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex w-full flex-col items-center overflow-hidden bg-white px-6"
    >
      <div className="flex w-full flex-col items-center gap-6 py-16 text-center">
        <h2
          className="bookcall-intro text-[28px] font-semibold leading-[40px] text-[#0D1B3E]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          Ready to launch your next big idea?
        </h2>
        <p
          className="bookcall-intro w-full max-w-[448px] text-[16px] font-medium leading-[31px] text-[#0D1B3E]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          Book a consultation call and let's turn your vision into reality
        </p>
        <div className="bookcall-cta inline-flex rounded-[31px] bg-[linear-gradient(90deg,#9CC6FF_0%,#00D0FF_100%)] p-[2px] shadow-[0_2px_4px_rgba(30,113,229,0.15),0_7px_7px_rgba(30,113,229,0.13),0_17px_10px_rgba(30,113,229,0.08),0_30px_12px_rgba(30,113,229,0.02)]">
          <button
            className="flex items-center justify-center rounded-[29px] bg-[linear-gradient(0deg,#0F93FF_0%,#003BB9_100%)] px-10 py-3 text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(25,92,255,0.2)]"
            style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
          >
            Book My Free MVP Call
          </button>
        </div>
      </div>

      <div className="bookcall-visual relative flex w-full justify-center overflow-visible pb-16">
        <div className="relative w-[80%] max-w-[951px]">
          <Image
            src="/bookcall/bg.png"
            alt="Calendar background"
            width={951}
            height={766}
            className="h-auto w-full"
            priority
          />
          <Image
            src="/bookcall/over_bg.png"
            alt="Calendar overlay"
            width={332}
            height={252}
            className="absolute left-full top-1/2 h-[252px] w-[332px] -translate-x-1/2 -translate-y-1/2"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default BookCall;
