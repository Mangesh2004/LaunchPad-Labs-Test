"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ProcessStep = {
  number: string;
  title: string;
  description: string[];
  imageSrc: string;
  variant: "small" | "large";
};

const STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Launch Call",
    description: [
      "Kick off with a direct call with our founder.",
      "We clarify your idea, goals, and success metrics so we build exactly what investors and users will love.",
    ],
    imageSrc: "/ourprocess/step-01-base.png",
    variant: "small",
  },
  {
    number: "02",
    title: "Launch Plan",
    description: [
      "We map your MVP blueprint and deliver a clear PRD defining features, flows, and timelines with zero fluff, zero surprises.",
    ],
    imageSrc: "/ourprocess/step-02-base.png",
    variant: "small",
  },
  {
    number: "03",
    title: "Launch Sprint",
    description: [
      "Our dev team moves fast—daily updates, transparent progress, and agile feedback loops.",
      "You’ll see your product take shape in real time.",
    ],
    imageSrc: "/ourprocess/step-03-base.png",
    variant: "small",
  },
  {
    number: "04",
    title: "Launch Delivery",
    description: [
      "Your MVP goes live—fully functional, tested, and ready for demos, users, or fundraising.",
      "We handle deployment and hosting so you focus on traction.",
    ],
    imageSrc: "/ourprocess/step-04-base.png",
    variant: "large",
  },
  {
    number: "05",
    title: "Launch Support",
    description: [
      "You get 4 weeks of free maintenance and optimization.",
      "We fix, tune, and upgrade ensuring your MVP runs smooth post-launch.",
    ],
    imageSrc: "/ourprocess/step-05-base.png",
    variant: "large",
  },
];

const OurProcess = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const firstRow = STEPS.filter((step) => step.variant === "small");
  const secondRow = STEPS.filter((step) => step.variant === "large");

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const introItems = gsap.utils.toArray<HTMLElement>(".process-intro");

      if (introItems.length) {
        gsap.from(introItems, {
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
      }

      gsap.from(".process-card", {
        opacity: 0,
        y: 36,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: ".process-card-grid",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".process-cta", {
        opacity: 0,
        y: 18,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".process-cta",
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex w-full flex-col items-center bg-white px-6 py-24"
    >
      <div className="flex w-full max-w-5xl flex-col items-center text-center">
        <div className="process-intro rounded-[31px] bg-[linear-gradient(90deg,#CEE3FF_0%,#C5F4FF_100%)] p-px">
          <div className="relative flex items-center gap-3 rounded-[83px] bg-white px-6 py-2">
            <div className="relative h-[18px] w-[18px]">
              <span className="absolute inset-0 rounded-full bg-[rgba(7,100,218,0.2)]" />
              <span className="absolute inset-[3px] rounded-full bg-[rgba(7,100,218,0.32)]" />
              <span className="absolute inset-[5px] rounded-full bg-[rgba(7,100,218,0.66)]" />
            </div>
            <span
              className="text-[14px] font-medium text-black"
              style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
            >
              Our Process
            </span>
          </div>
        </div>

        <h2
          className="process-intro mt-8 text-[28px] font-semibold leading-[31px] text-[#202020]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          The LaunchPad Process
        </h2>

        <p
          className="process-intro mt-4 max-w-[580px] text-center text-[16px] font-medium leading-[31px] text-[#525252]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          A transparent, founder-friendly journey from idea to live MVP in just 2 weeks.
        </p>
      </div>

      <div className="process-card-grid mt-16 flex w-full max-w-[1228px] flex-col items-center gap-[45px]">
        <div className="flex flex-wrap justify-center gap-[45px]">
          {firstRow.map((step) => (
            <ProcessCard key={step.number} step={step} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-[45px]">
          {secondRow.map((step) => (
            <ProcessCard key={step.number} step={step} />
          ))}
        </div>
      </div>

      <div className="process-cta mt-16 rounded-[31px] bg-[linear-gradient(90deg,#9CC6FF_0%,#00D0FF_100%)] p-px">
        <button
          className="inline-flex h-12 cursor-pointer items-center justify-center rounded-[31px] bg-[linear-gradient(0deg,#0F93FF_0%,#003BB9_100%)] px-10 text-[16px] font-semibold text-white shadow-[0_2px_4px_rgba(30,113,229,0.15),0_7px_7px_rgba(30,113,229,0.13),0_17px_10px_rgba(30,113,229,0.08),0_30px_12px_rgba(30,113,229,0.02)]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
          type="button"
        >
          Book My Free MVP Call
        </button>
      </div>
    </section>
  );
};

const ProcessCard = ({ step }: { step: ProcessStep }) => {
  const width = step.variant === "small" ? 360 : 558;
  const aspectRatio = step.variant === "small" ? "360 / 418" : "558 / 418";

  return (
    <article
      className="process-card relative flex flex-col rounded-[16px] bg-white px-6 pb-6 pt-4 shadow-[0_2px_21px_rgba(0,0,0,0.1)]"
      style={{ width, minHeight: 418 }}
    >
      <div
        className="relative w-full overflow-hidden rounded-[12px]"
        style={{ aspectRatio }}
      >
        <Image
          src={step.imageSrc}
          alt={step.title}
          fill
          sizes={`${width}px`}
          className="object-cover"
        />

        <div className="absolute left-3 top-[80px] max-w-[calc(100%-10px)]">
          <span
            className="text-[14px] font-semibold leading-[22px] text-[#404040]"
            style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
          >
            {step.description.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </span>
        </div>
      </div>

    </article>
  );
};

export default OurProcess;

