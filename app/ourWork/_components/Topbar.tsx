
'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const textStyle = { fontFamily: '"Plus Jakarta Sans", var(--font-sans)' };

const Topbar = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".topbar-text", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".topbar-visual", {
        opacity: 0,
        y: 24,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
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
      className="relative overflow-hidden bg-[#F3F7F8] lg:max-h-[240px]"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-6 pb-12 pt-12 lg:flex-row lg:items-center lg:gap-16 lg:px-10 lg:pb-0 lg:pt-0">
        <div className="topbar-text flex flex-1 flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <h1
            className="text-[32px] font-semibold leading-[40px] text-[#202020] sm:text-[36px] sm:leading-[42px] lg:w-[590px] lg:text-[48px] lg:leading-[58px]"
            style={textStyle}
          >
            From vision to{" "}
            <span className="bg-[linear-gradient(90deg,#231BAF_0%,#0FA6EC_100%)] bg-clip-text text-transparent">
              Launchpad
            </span>
          </h1>
          <p
            className="max-w-[360px] text-[16px] font-medium leading-[26px] text-[#686868] sm:max-w-[420px] sm:text-[17px] sm:leading-[28px] lg:max-w-[480px] lg:text-[17px] lg:leading-[31px]"
            style={textStyle}
          >
            Explore some of the MVPs and products we’ve brought to life
          </p>
        </div>

        <div className="topbar-visual relative w-full max-w-[360px] self-center pt-6 lg:self-auto lg:pt-5">
          <Image
            src="/ourwork/calendar-card.png"
            alt="Calendar Card"
            width={360}
            height={240}
            className="w-full rounded-[24px] shadow-[0_12px_30px_rgba(13,24,46,0.08)]"
          />
          <button
            className="mt-6 inline-flex h-12 w-full max-w-[250px] items-center justify-center rounded-[31px] border-2 border-transparent bg-[linear-gradient(0deg,#0F93FF_0%,#003BB9_100%)] px-8 text-[16px] font-semibold text-white shadow-[0px_2px_4px_rgba(30,113,229,0.15),0px_7px_7px_rgba(30,113,229,0.13),0px_17px_10px_rgba(30,113,229,0.08),0px_30px_12px_rgba(30,113,229,0.02),0px_46px_13px_rgba(30,113,229,0)] cursor-pointer lg:absolute lg:-left-[125px] lg:top-1/2 lg:mt-0 lg:w-full lg:max-w-[250px] lg:-translate-y-1/2"
            style={textStyle}
          >
            Book My Free MVP Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Topbar;

