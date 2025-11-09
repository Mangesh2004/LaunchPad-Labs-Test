"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ApproachItem = {
  label: string;
};

const TRADITIONAL_ITEMS: ApproachItem[] = [
  { label: "Months of Planning" },
  { label: "Too Many Cooks" },
  { label: "Design-Then-Build Bottlenecks" },
  { label: "Huge Upfront Fees" },
  { label: "Complex Tech Steup" },
];

const LAUNCHPAD_ITEMS: ApproachItem[] = [
  { label: "2-Week Launch System" },
  { label: "Focused Founder-Led Pods" },
  { label: "Real-Time Prototyping" },
  { label: "Flat $4,997 Transparent Pricing" },
  { label: "Modern, Scalable Stack" },
];

const OurApproach = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const introItems = gsap.utils.toArray<HTMLElement>(".approach-intro");

      if (introItems.length) {
        gsap.from(introItems, {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }

      gsap.from(".approach-panel", {
        opacity: 0,
        y: 28,
        duration: 0.75,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".approach-panels",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".approach-cta", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".approach-cta",
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
      className="flex w-full flex-col items-center bg-[#F3F7F8] px-6 py-24"
    >
      <div className="flex w-full max-w-5xl flex-col items-center text-center">
        <div className="approach-intro rounded-[31px] bg-[linear-gradient(90deg,#CEE3FF_0%,#C5F4FF_100%)] p-px">
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
              Our Approach
            </span>
          </div>
        </div>

        <h2
          className="approach-intro mt-8 max-w-3xl text-[24px] font-semibold leading-[38px] text-[#202020]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          Why founders launch faster with LaunchPad labs
        </h2>
      </div>

      <div className="approach-panels mt-16 flex w-full max-w-[1100px] flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:justify-between">
        <ApproachPanel title="Traditional Development" items={TRADITIONAL_ITEMS} accent="red" />
        <ApproachPanel title="LaunchPad Labs Approach" items={LAUNCHPAD_ITEMS} accent="green" />
      </div>

      <div className="approach-cta mt-16 rounded-[31px] bg-[linear-gradient(90deg,#9CC6FF_0%,#00D0FF_100%)] p-px">
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

const ApproachPanel = ({
  title,
  items,
  accent,
}: {
  title: string;
  items: ApproachItem[];
  accent: "red" | "green";
}) => {
  const isPositive = accent === "green";

  return (
    <div
      className={`approach-panel flex h-[411px] w-full max-w-[458px] bg-transparent flex-col rounded-[20px] border-2 border-dashed ${
        isPositive ? "border-[#55E294]" : "border-[#FFACAC]"
      } px-10 pb-12 pt-6`}
    >
      <div className="flex justify-center">
        <div className="rounded-[68px] bg-white px-8 py-2 shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
          <span
            className="text-[16px] font-semibold leading-[31px] text-[#242424]"
            style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
          >
            {title}
          </span>
        </div>
      </div>

      <ul className="mt-8 flex flex-1 flex-col gap-6" role="list">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-4"
            style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
          >
            {isPositive ? <CheckIcon /> : <CrossIcon />}
            <span className="text-[16px] font-semibold leading-[31px] text-black">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CrossIcon = () => (
  <span className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#FFD4D4] shadow-[0_4px_11px_rgba(0,0,0,0.07)]">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 6L14 14"
        stroke="#E05252"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 6L6 14"
        stroke="#E05252"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

const CheckIcon = () => (
  <span className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[linear-gradient(0deg,#5BF36D_2%,#C2FFCB_95%)] shadow-[0_4px_11px_rgba(0,0,0,0.07)]">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 10.5L8.5 14L15 7"
        stroke="#0B8F2B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

export default OurApproach;

