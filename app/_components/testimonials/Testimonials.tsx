"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TESTIMONIAL_COLUMNS = [
  [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      quote:
        "LaunchPad Labs turned our idea into a working MVP in record time. Couldn’t have asked for a smoother process.",
      avatar: "/testimonials/avatar-sarah-1.png",
    },
    {
      name: "Alex Carter",
      role: "Product Founder",
      quote:
        "Every stand-up showed progress we could share with stakeholders. The predictability was a lifesaver for fundraising.",
      avatar: "/testimonials/avatar-sarah-2.png",
    },
    {
      name: "Priya Sharma",
      role: "Startup CEO",
      quote:
        "They operate like co-founders. Weekly goals, clear burn, and a launch we were proud to demo.",
      avatar: "/testimonials/avatar-sarah-3.png",
    },
  ],
  [
    {
      name: "Jordan Blake",
      role: "Growth Lead",
      quote:
        "Ship velocity went 5×. Designers, engineers, and PMs all in sync without us micromanaging.",
      avatar: "/testimonials/avatar-sarah-4.png",
    },
    {
      name: "Maya Chen",
      role: "Design Director",
      quote:
        "Pixel-perfect handoff, automated QA, and a launch checklist that kept our team calm the entire time.",
      avatar: "/testimonials/avatar-sarah-5.png",
    },
    {
      name: "Leo Martins",
      role: "Operations Lead",
      quote:
        "Scope locked, communication flawless, and a production deploy in 14 days. We’re already planning phase two.",
      avatar: "/testimonials/avatar-sarah-6.png",
    },
  ],
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const introItems = gsap.utils.toArray<HTMLElement>(".testimonials-intro");

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

      gsap.from(".testimonial-columns", {
        opacity: 0,
        y: 32,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-columns",
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
      className="relative flex h-screen w-full flex-col items-center overflow-hidden bg-white px-6"
    >
      <Image
        src="/testimonials/Ellipse.png"
        alt="Background blur"
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-10 object-cover"
        priority
      />

      <div className="testimonials-intro">
        <LabelPill label="Testimonials" />
      </div>
      <div className="py-5" />

      <div className="flex w-full max-w-[1228px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex w-full max-w-[470px] flex-col gap-8">
          <h2
            className="testimonials-intro z-10 text-[28px] font-semibold leading-[38px] text-[#202020]"
            style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
          >
            What Founders Are Saying About LaunchPad Labs
          </h2>
          <div className="relative">
            <Image
              src="/testimonials/left_group.png"
              alt="LaunchPad Labs testimonial collage"
              width={470}
              height={429}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="testimonial-columns relative flex w-full max-w-[640px] flex-col lg:flex-row">
          
          {TESTIMONIAL_COLUMNS.map((column, columnIndex) => {
            const isFirstColumn = columnIndex === 0;
            const initialY = isFirstColumn ? "0%" : "-50%";
            const animateY = isFirstColumn ? "-50%" : "0%";

            return (
              <div
                key={columnIndex}
                className="relative h-[700px] flex-1 overflow-hidden"
              >
                <motion.div
                  className="flex flex-col gap-6"
                  initial={{ y: initialY }}
                  animate={{ y: animateY }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                >
                  {[...column, ...column].map((testimonial, idx) => (
                    <FeaturedCard key={`${testimonial.name}-${idx}`} testimonial={testimonial} />
                  ))}
                </motion.div>
              </div>
            );
          })}
        <Image
        src="/testimonials/Ellipse.png"
        alt="Background blur"
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-10 opacity-30 object-cover rotate-180 h-1/4"
        priority
      />
        </div>
      </div>
    </section>
  );
};

const LabelPill = ({ label }: { label: string }) => (
  <div className="z-10 inline-flex rounded-[31px] bg-[linear-gradient(90deg,#CEE3FF_0%,#C5F4FF_100%)] p-px">
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
        {label}
      </span>
    </div>
  </div>
);

const FeaturedCard = ({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIAL_COLUMNS)[number][number];
}) => (
  <article className="flex h-[250px] w-[302px] flex-none flex-col rounded-[14px] border-2 border-dashed border-[#2599FF] p-6 ">
    <div className="flex items-center gap-1">
      <Avatar src={testimonial.avatar} />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span
            className="text-[15px] font-semibold text-[#000000]"
            style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
          >
            {testimonial.name}
          </span>
          <VerifiedIcon />
        </div>
        <span
          className="text-[13px] font-normal text-[#777777]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          {testimonial.role}
        </span>
      </div>
    </div>

    <p
      className="mt-5 flex-1 text-[14px] font-medium leading-[26px] text-[#1B1B1B]"
      style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
    >
      “{testimonial.quote}”
    </p>

    <div className="mt-4 flex gap-1">
      {Array.from({ length: 5 }).map((_, idx) => (
        <StarIcon key={idx} />
      ))}
    </div>
  </article>
);

const Avatar = ({ src, size = 48 }: { src: string; size?: number }) => (
  <div
    className="flex items-center justify-center rounded-full"
    style={{ width: size, height: size }}
  >
    <div className="relative h-[85%] w-[85%] overflow-hidden rounded-full border border-white">
      <Image src={src} alt="avatar" fill sizes={`${size}px`} className="object-cover" />
    </div>
  </div>
);

const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 4.66667L11 8L6 11.3333V4.66667Z"
      fill="white"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const VerifiedIcon = () => (
  <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#00B0FB]">
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.33333 2.5L3.75 7.08333L1.66667 5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const StarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3.75L14.295 8.4045L19.5 9.141L15.75 12.735L16.59 17.91L12 15.45L7.41 17.91L8.25 12.735L4.5 9.141L9.705 8.4045L12 3.75Z"
      fill="#FFC53D"
      stroke="#FFB200"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
  </svg>
);

    const BackgroundGlows = () => null;

export default Testimonials;
