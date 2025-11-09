'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const introItems = gsap.utils.toArray<HTMLElement>(".hero-intro");

      if (introItems.length) {
        gsap.from(introItems, {
          opacity: 0,
          y: 30,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
        });
      }

      gsap.from(".hero-cta", {
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.4,
      });

      gsap.from(".hero-card", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".hero-card-wrapper",
          start: "top 80%",
          toggleActions: "play none none reverse",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
        className="relative flex min-h-[680px] flex-col items-center justify-start overflow-hidden pt-24 md:min-h-screen md:pt-15"
    >
      <Image
        alt="Launch background"
        className="object-cover"
        fill
        priority
        sizes="80vw"
        src="/hero/bg.png"
      />
        
      <div className="relative z-10 mx-auto flex w-full max-w-[400px] flex-col items-center gap-6 px-4 text-center hero-content md:max-w-[845px] md:gap-8 md:px-6">
        <div className="mb-6 hero-intro">
          <Image
            alt="Hero tagline top text"
            className="mx-auto w-[200px] md:w-[300px]"
            height={350}
            src="/hero/top_text.png"
            width={300}
          />
        </div>

        <h1
          className="hero-intro px-2 font-semibold text-3xl leading-tight text-black md:px-0 md:text-[52px] md:leading-[75px]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          <span className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <span>We Build and</span>
            <Image
              alt="Rocket accent"
              className="h-10 w-10 rounded-[9px] md:h-[69px] md:w-[73px]"
              height={69}
              priority
              src="/hero/text-rocket.png"
              width={73}
            />
            <span>Launch Your</span>
          </span>
          <br />
          Startup MVP in Just{" "}
          <span className="bg-[linear-gradient(90deg,#231BAF_0%,#0FA6EC_100%)] bg-clip-text text-transparent">
            2 Weeks
          </span>
        </h1>

        <h3 className="hero-intro mt-3 text-base font-medium text-[#5B5B5B] md:mt-4 md:text-[19px]">
          LaunchPad Labs builds and ships investor-ready MVPs for founders
        </h3>

        <div className="hero-intro mt-8 flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-4">
          <div className="flex items-center justify-center md:justify-start">
            {["/hero/trusted-avatar-3-42e7fa.png", "/hero/trusted-avatar-2-263873.png", "/hero/trusted-avatar-1-756363.png"].map(
              (src, index) => (
                <div
                  key={src}
                  className={`relative h-10 w-10 overflow-hidden rounded-full border-[3px] border-white md:h-12 md:w-12 ${
                    index > 0 ? "-ml-4" : ""
                  }`}
                >
                  <Image alt="Founder avatar" fill sizes="48px" src={src} />
              </div>
              )
            )}
          </div>
          <p
            className="max-w-[220px] text-center text-sm font-semibold leading-[22px] text-[#4C4C4C] md:max-w-none md:text-left md:text-[15px] md:leading-[26px]"
            style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
          >
            Trusted by 50+ VC-backed founders
          </p>
        </div>

        <div className="relative mt-10 flex w-full flex-col items-center md:mt-12">
          <button
            className="hero-cta relative z-40 mt-6 inline-flex w-full max-w-[320px] cursor-pointer items-center justify-center rounded-[31px] border-2 border-[#9CC6FF] bg-[linear-gradient(0deg,#0F93FF_0%,#003BB9_100%)] px-8 py-3 text-base font-semibold text-white shadow-[0px_2px_4px_rgba(30,113,229,0.15),0px_7px_7px_rgba(30,113,229,0.13),0px_17px_10px_rgba(30,113,229,0.08),0px_30px_12px_rgba(30,113,229,0.02)] md:absolute md:-top-6 md:mt-0 md:w-auto md:max-w-none md:px-10 md:text-[16px]"
            style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
          >
            Book My Free MVP Call
          </button>

          <div className="hero-card-wrapper flex w-full flex-col items-center justify-center gap-4 md:w-[550px] md:gap-6">
            <div className="flex w-full flex-col gap-4 md:flex-row md:gap-6">
              <div className="hero-card relative h-full w-full max-w-[320px] overflow-hidden rounded-[20px] bg-white shadow-[0px_18px_45px_rgba(21,49,85,0.15)] md:max-w-none">
                <Image
                  alt="Monthly availability calendar"
                  height={374}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="/hero/booking-calendar.png"
                  width={556}
                />
              </div>
              <div className="hero-card relative h-full w-full max-w-[320px] overflow-hidden rounded-[20px] bg-white shadow-[0px_18px_45px_rgba(21,49,85,0.15)] md:max-w-none">
                <Image
                  alt="Available time slots"
                  height={420}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="/hero/booking-time.png"
                  width={554}
                />
              </div>
            </div>
          </div>
        </div>

        {/* <TrustedByMarquee /> */}
      </div>
    </section>
  );
};

export default HeroSection;