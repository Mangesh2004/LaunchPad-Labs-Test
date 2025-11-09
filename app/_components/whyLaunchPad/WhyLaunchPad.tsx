"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Feature = {
  title: string;
  descriptionLines: string[];
  image: string;
  alt: string;
};

const FEATURES: Feature[] = [
  {
    title: "MVP Package",
    descriptionLines: [
      "Everything you need ",
      "SaaS, web app, or landing page",
      "build and launch-ready in 2 weeks.",
    ],
    image: "/whylaunchpad/mvp-package.png",
    alt: "MVP package dashboard and analytics preview",
  },
  {
    title: "Integrations",
    descriptionLines: [
      "Payments, logins, emails & more.",
      "We connect everything so you’re ready to",
      " onboard users from day one.",
    ],
    image: "/whylaunchpad/integrations.png",
    alt: "Connected integrations and automation flows illustration",
  },
  {
    title: "Modern Stack",
    descriptionLines: [
      "Built with the latest tech and AI",
      "delivering speed, stability, and scalability for real",
      " growth.",
    ],
    image: "/whylaunchpad/modern-stack.png",
    alt: "Modern development stack preview across web and mobile",
  },
];

const WhyLaunchPad = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const introItems = gsap.utils.toArray<HTMLElement>(".whylaunchpad-intro");

      if (introItems.length) {
        gsap.from(introItems, {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.14,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }

      gsap.from(".whylaunchpad-card", {
        opacity: 0,
        y: 32,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: ".whylaunchpad-grid",
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
      className="flex w-full flex-col items-center bg-white px-6 py-24"
    >
      <div className="flex w-full max-w-5xl flex-col items-center text-center">
        <div className="whylaunchpad-intro rounded-[31px] bg-[linear-gradient(90deg,#CEE3FF_0%,#C5F4FF_100%)] p-px">
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
              Why LaunchPad Labs
            </span>
          </div>
        </div>

        <h2
          className="whylaunchpad-intro mt-8 max-w-3xl text-[28px] font-semibold leading-[31px] text-[#202020]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          Built faster Built smarter Built by founders
        </h2>

        <p
          className="whylaunchpad-intro mt-4 max-w-3xl text-[16px] font-medium leading-[31px] text-[#525252]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          MVPs built faster, smarter, and better — by founders who&apos;ve done it before.
          <br />
          We turn your idea into a launch-ready product in just <strong>2 weeks,</strong> using modern tech and proven
          systems trusted by <strong>50+ funded startups</strong>.
        </p>
      </div>

      <div className="whylaunchpad-grid mt-16 grid w-full max-w-[1228px] justify-center gap-[43px] lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ title, descriptionLines, image, alt }: Feature) => {
  return (
    <div className="whylaunchpad-card flex h-[415px] w-[350px] flex-col rounded-[16px] bg-white shadow-[0_2px_21px_rgba(0,0,0,0.1)]">
      <div className="mx-2 mt-2 ">
        <Image
          src={image}
          alt={alt}
          width={365}
        height={260}
          className="h-auto w-[340px] object-contain"
        />
      </div>

      <div className="flex flex-col items-center px-6 pb-10 pt-4 text-center">
        <h3
          className="text-[18px] font-semibold leading-[31px] text-[#404040]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          {title}
        </h3>
        <p
          className="mt-3 w-full text-[14px] font-normal leading-[25px] text-[#474545]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          {descriptionLines.map((line, index) =>
            line === "" ? (
              <span key={index} className="block h-2" aria-hidden="true" />
            ) : (
              <span key={index} className="block">
                {line}
              </span>
            ),
          )}
        </p>
      </div>
    </div>
  );
};

export default WhyLaunchPad;

