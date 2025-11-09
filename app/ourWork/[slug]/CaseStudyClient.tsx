'use client';

import BookCall from "@/app/_components/bookCall/BookCall";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type CaseStudyClientProps = {
  content: {
    title: string;
    summary: string;
  };
};

const CaseStudyClient = ({ content }: CaseStudyClientProps) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".case-intro-item", {
        opacity: 0,
        y: 18,
        duration: 0.65,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".case-banner", {
        opacity: 0,
        y: 26,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".case-banner",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".case-meta", {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".case-meta",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".case-section", {
        opacity: 0,
        y: 30,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: ".case-section-group",
          start: "top 80%",
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-16"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8">
        <Link
          href="/ourWork"
          className="case-intro-item inline-flex w-fit items-center gap-2 rounded-full border-2 border-dashed border-[#00D0FF] bg-white px-6 py-3 text-sm font-medium text-black transition-colors duration-200 hover:bg-white/80"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Our Work
        </Link>

        <div className="case-banner overflow-hidden rounded-3xl">
          <Image
            src="/casestudy/top.png"
            alt="Case Study Top"
            width={1920}
            height={1080}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
      <div className="case-intro-item mt-10 flex flex-col items-center gap-6 text-center md:mt-14 md:flex-row md:items-center md:justify-between md:text-left">
        <h1
          className="max-w-[640px] text-[32px] font-semibold leading-[40px] text-[#404040] sm:text-[36px] sm:leading-[44px] md:pl-10 md:text-[40px] md:leading-[48px]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          {content.title}
        </h1>

        <div className="flex w-full justify-center md:justify-end md:pr-10">
          <span className="inline-flex h-12 w-full max-w-[240px] items-center justify-center rounded-[31px] bg-[linear-gradient(90deg,#9CC6FF_0%,#00D0FF_100%)] p-[2px] md:w-[200px] md:max-w-none">
            <span className="flex h-full w-full items-center justify-center gap-3 rounded-[29px] bg-white px-6 text-[16px] font-semibold text-black transition-colors duration-200 hover:bg-transparent hover:text-white md:justify-between">
              View Project
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
        </div>
      </div>

      <div className="mt-10 flex w-full justify-center">
        <div className="case-meta relative w-full max-w-[1280px] rounded-[17px] bg-[#F7FBFF]">
          <div className="pointer-events-none absolute inset-0 rounded-[17px] border border-[#BDE6FF80]" />
          <div className="relative flex flex-col gap-8 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#6B6B6B]">
                Year
              </span>
              <span
                className="text-xl font-semibold text-[#1A1A1A]"
                style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
              >
                2025
              </span>
            </div>

            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#6B6B6B]">
                Expertise
              </span>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "UI/UX",
                  "Web Development",
                  "Mobile App",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#BDE6FF] px-4 py-1 text-sm font-medium text-[#1A1A1A]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 text-center sm:items-end sm:text-right">
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#6B6B6B]">
                Platform
              </span>
              <span
                className="text-xl font-semibold text-[#1A1A1A]"
                style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
              >
                Web App
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="case-section mx-auto mt-16 w-full max-w-[860px] text-center">
        <h2
          className="text-[36px] font-semibold text-[#6B6B6B]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          Overview
        </h2>
        <p className="mt-6 text-start text-base leading-7 text-[#4B5E6F]">
          {content.summary}
        </p>
      </section>

      <section className="case-section-group mx-auto mt-16 flex w-full max-w-[1280px] flex-col gap-20">
        <h1 className="case-section flex justify-center text-[24px] font-semibold leading-[31px] text-[#828282]">
          Product
        </h1>
        <div className="case-section flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
          <div className="relative w-full max-w-[520px] rounded-[32px]">
            <div className="rounded-[30px]">
              <Image
                src="/casestudy/1.png"
                alt="Invoice management preview"
                width={640}
                height={480}
                className="h-auto w-full rounded-[24px] object-cover"
                priority
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center text-left md:pl-6">
            <h3
              className="text-[28px] font-semibold text-[#1A1A1A]"
              style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
            >
              Hero Section
            </h3>
            <p className="mt-4 max-w-[520px] text-base leading-7 text-[#4B5E6F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="case-section flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:gap-16">
          <div className="flex flex-1 flex-col justify-center text-left md:pl-10">
            <h3
              className="text-[28px] font-semibold text-[#1A1A1A]"
              style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
            >
              Product Flow
            </h3>
            <p className="mt-4 max-w-[520px] text-base leading-7 text-[#4B5E6F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
          <div className="relative w-full max-w-[520px] rounded-[32px] ">
            <div className="rounded-[30px]">
              <Image
                src="/casestudy/2.png"
                alt="Client management preview"
                width={640}
                height={480}
                className="h-auto w-full rounded-[24px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <BookCall />
    </main>
  );
};

export default CaseStudyClient;
