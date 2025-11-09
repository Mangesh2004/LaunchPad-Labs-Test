'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const textStyle = { fontFamily: '"Plus Jakarta Sans", var(--font-sans)' };

type WorkCard = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  cta?: string;
  slug: string;
};

const workHighlights: WorkCard[] = [
  {
    title: "FitAI",
    description:
      "FitAI brings personalized, AI-powered home workouts to your fingertips — tailored plans, real-time guidance, and progress tracking to help you stay fit anytime, anywhere.",
    tags: ["UI/UX", "Web Development", "Mobile App"],
    image: "/ourwork/fitai-card-281062.png",
    cta: "View Case Study",
    slug: "fitai",
  },
  {
    title: "BillFlow",
    description:
      "A frictionless billing experience for SaaS founders. We shipped subscriptions, reporting, and customer portals on a production-ready stack in just 14 days.",
    tags: ["Product Strategy", "API Integrations", "FinTech"],
    image: "/ourwork/billflow-card-7fa0bb.png",
    cta: "View Case Study",
    slug: "billflow",
  },
  {
    title: "FinSub",
    description:
      "Investor dashboards built for clarity. We combined real-time analytics with a responsive interface so founders can showcase traction confidently.",
    tags: ["UI/UX", "Dashboard", "Data Visualisation"],
    image: "/ourwork/billflow-card-7fa0bb.png",
    cta: "View Case Study",
    slug: "finsub",
  },
];

const MainComponent = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".work-card", {
        opacity: 0,
        y: 24,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.15,
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
      className="bg-[#F3F7F8] pb-20 px-6 pt-3 lg:px-10"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10">
        {workHighlights.map((item) => (
          <article
            key={item.title}
            className="work-card flex flex-col gap-8 rounded-[16px] bg-white p-4 pl-10 shadow-[0_2px_21px_rgba(0,0,0,0.1)] lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex max-w-[660px] flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2
                  className="text-[26px] font-semibold leading-[31px] text-[#404040]"
                  style={textStyle}
                >
                  {item.title}
                </h2>
                <p
                  className="text-[15px] font-medium leading-[31px] text-[#686868]"
                  style={textStyle}
                >
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#E1EFF9] px-4 py-2 text-[14px] font-medium text-[#000000]"
                    style={textStyle}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {item.cta && (
                <Link
                  href={`/ourWork/${item.slug}`}
                  className="inline-flex focus:outline-none"
                >
                  <span className="inline-flex h-12 w-[220px] items-center justify-center rounded-[31px] bg-[linear-gradient(90deg,#9CC6FF_0%,#00D0FF_100%)] p-[2px]">
                    <span
                      className="flex h-full w-full items-center justify-between rounded-[29px] bg-white px-6 text-[16px] font-semibold text-black transition-colors duration-200 hover:bg-transparent hover:text-white"
                      style={textStyle}
                    >
                      {item.cta}
                      <Image
                        src="/ourwork/arrow-line.svg"
                        alt=""
                        width={32}
                        height={32}
                        className="h-8 w-8"
                        priority
                      />
                    </span>
                  </span>
                </Link>
              )}
            </div>

            <div className="flex w-full justify-center lg:max-w-[420px]">
              <div className="relative w-full max-w-[420px] overflow-hidden rounded-[16px] border-[6px] border-[#B9DDFB] bg-white">
                <Image
                  src={item.image}
                  alt={`${item.title} preview`}
                  width={420}
                  height={320}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MainComponent;

