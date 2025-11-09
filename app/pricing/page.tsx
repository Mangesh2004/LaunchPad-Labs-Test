'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Package = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  priceOriginal: string;
  priceCurrent: string;
  cadence: string;
  cta: string;
  features: string[];
  isHighlighted?: boolean;
  icon: string;
  showCadenceBadge: boolean;
};

const packages: Package[] = [
  {
    id: "mvp",
    tag: "MVP Development",
    title: "MVP Development Package",
    subtitle: "Complete MVP Delivered in just 2 weeks",
    priceOriginal: "$6500",
    priceCurrent: "$4997",
    cadence: "One Time",
    cta: "Book a Free MVP Call",
    features: [
      "Full web or mobile MVP - built to scale",
      "Modern, reliable tech stack (AI-ready)",
      "Seamless integrations (payments, auth, email, etc)",
      "30 days of free post-launch support",
      "Direct founder-led development & weekly updates",
      "Transparent progress tracking - no surprises",
    ],
    icon: "/pricing/pricing-mvp-icon.svg",
    showCadenceBadge: true,
  },
  {
    id: "retainer",
    tag: "Growth Retainer Package",
    title: "Continuous Growth Package",
    subtitle: "No long-term commitment — cancel anytime",
    priceOriginal: "$5000/m",
    priceCurrent: "$3997/m",
    cadence: "Monthly Services",
    cta: "Book My MVP Build",
    features: [
      "60 hours of flexible dev time monthly",
      "Priority feature updates & bug fixes",
      "Weekly strategy + product calls",
      "Continuous performance optimization",
      "Same-day emergency support",
      "Cancel anytime - zero hassle",
    ],
    isHighlighted: true,
    icon: "/pricing/pricing-retainer-icon.svg",
    showCadenceBadge: false,
  },
];

const textStyle = { fontFamily: '"Plus Jakarta Sans", var(--font-sans)' };

const PricingPage = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".pricing-intro", {
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

      gsap.from(".pricing-card", {
        opacity: 0,
        y: 28,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.16,
        scrollTrigger: {
          trigger: ".pricing-grid",
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#F3F7F8]">
      <section className="pricing-intro mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 py-20 text-center lg:py-28">
        <div className="pricing-intro rounded-[31px] bg-[linear-gradient(90deg,#CEE3FF_0%,#C5F4FF_100%)] p-px">
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
              Pricing
            </span>
          </div>
        </div>
        <h1
          className="pricing-intro mt-8 max-w-[740px] text-[28px] font-semibold leading-[31px] text-[#202020]"
          style={textStyle}
        >
          Two ways to launch fast – and keep growing even faster
        </h1>
        <p
          className="pricing-intro mt-4 max-w-[463px] text-[16px] font-medium leading-[31px] text-[#525252]"
          style={textStyle}
        >
          Choose the perfect package to launch and grow your startup
        </p>
      </section>

      <section className="pricing-grid mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 pb-24 lg:flex-row lg:items-start lg:justify-center lg:gap-12 lg:pb-32">
        {packages.map((pkg) => (
          <article
            key={pkg.id}
            className={`pricing-card relative flex w-full max-w-[440px] flex-col rounded-[20px] ${
              pkg.isHighlighted
                ? "bg-[#B5DEFF] p-1 shadow-[0px_7px_21px_rgba(194,228,255,1)]"
                : "bg-[#F5F5F5] p-1"
            }`}
          >
            {pkg.isHighlighted && (
              <div className="absolute -top-10 left-3/4 w-[225px] -translate-x-1/2 rounded-[61px_19px_35px_35px] bg-[linear-gradient(178deg,#0660D7_0%,#0D88F6_6%)] px-6 py-2 text-center text-[15px] font-semibold uppercase tracking-[0.07em] text-white shadow-[0px_2px_13px_rgba(75,81,99,0.16)]">
                Most Popular
              </div>
            )}
            <div
              className={`relative flex h-full flex-col rounded-[18px] border ${
                pkg.isHighlighted
                  ? "border-[#CDE4FF] bg-white"
                  : "border-[#E4E6EB] bg-[#F5F5F5]"
              } min-h-[640px]`}
            >
              {pkg.showCadenceBadge && (
                <span
                  className="absolute right-6 top-6 inline-flex items-center rounded-full bg-white px-4 py-1 text-[13px] font-medium text-[#7C7C7C] shadow-[0_2px_11px_rgba(0,0,0,0.09)]"
                  style={textStyle}
                >
                  {pkg.cadence}
                </span>
              )}

              <div className="flex items-start gap-4">
                <div
                  className={`flex items-center justify-center  ${
                    pkg.isHighlighted ? "" : ""
                  }`}
                >
                  <Image
                    src={pkg.icon}
                    alt={`${pkg.tag} icon`}
                    width={80}
                    height={80}
                    priority
                  />
                </div>
                
              </div>
              <div className="flex flex-col gap-2 text-left px-4">
                  <span
                    className="text-[20px] font-semibold text-[#202020]"
                    style={textStyle}
                  >
                    {pkg.tag}
                  </span>
                  <span
                    className="text-[15px] font-medium text-[#525252]"
                    style={textStyle}
                  >
                    {pkg.title}
                  </span>
                </div>
              <div className="flex flex-col gap-4 p-4">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-[21px] font-semibold uppercase tracking-[0.04em] text-[#72747C] line-through"
                      style={textStyle}
                    >
                      {pkg.priceOriginal}
                    </span>
                    <span
                      className="text-[37px] font-bold tracking-[0.04em] text-[#363A47]"
                      style={textStyle}
                    >
                      {pkg.priceCurrent}
                    </span>
                  </div>
                </div>
                <p
                  className="text-[15px] font-medium text-[#525252]"
                  style={textStyle}
                >
                  {pkg.subtitle}
                </p>
              </div>
              <div className="flex max-w-[300px] mx-auto flex-col pb-4">
                {pkg.isHighlighted ? (
                  <Link
                    href="#book"
                    className="inline-flex items-center justify-center rounded-[31px] bg-[linear-gradient(90deg,#9CC6FF_0%,#00D0FF_100%)] p-px"
                    style={textStyle}
                  >
                    <span className="inline-flex w-full items-center justify-center rounded-[29px] bg-[linear-gradient(0deg,#0F93FF_0%,#003BB9_100%)] px-10 py-3 text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(25,92,255,0.2)] transition hover:opacity-95">
                      {pkg.cta}
                    </span>
                  </Link>
                ) : (
                  <Link
                    href="#book"
                    className="inline-flex items-center justify-center rounded-[31px] border border-dashed border-[#9C9C9C] px-10 py-3 text-[16px] font-semibold text-[#003BB9] transition hover:border-[#003BB9]"
                    style={textStyle}
                  >
                    {pkg.cta}
                  </Link>
                )}
              </div>
              <div
                className={`rounded-t-3xl rounded-b-2xl border ${
                  pkg.isHighlighted
                    ? "border-[#CDE4FF] bg-white"
                    : "border-[#E4E6EB] bg-[#F5F5F5]"
                }`}
              >
                <div
                  className={`border-b p-4 text-left ${
                    pkg.isHighlighted ? "border-[#CDE4FF]" : "border-[#E4E6EB]"
                  }`}
                >
                  <span
                    className="text-[15px] font-semibold uppercase tracking-[0.04em] text-[#000000]"
                    style={textStyle}
                  >
                    {pkg.cadence === "One Time"
                      ? "What’s Included"
                      : "Monthly Services:"}
                  </span>
                </div>
                <ul className="flex flex-col gap-4 py-6 px-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Image
                        src="/pricing/pricing-tick.svg"
                        alt="Check mark"
                        width={22}
                        height={22}
                      />
                      <span
                        className="text-[14px] font-medium leading-[31px] text-[#525252]"
                        style={textStyle}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default PricingPage;

