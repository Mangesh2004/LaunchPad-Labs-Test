'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackgroundGrid from "./_components/BackgroundGrid";

const textStyle = { fontFamily: '"Plus Jakarta Sans", var(--font-sans)' };

const FounderPage = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from([".founder-pill"], {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from([".founder-heading", ".founder-subheading"], {
        opacity: 0,
        y: 25,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from([".founder-portrait"], {
        opacity: 0,
        y: 30,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".founder-portrait",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from([".founder-note"], {
        opacity: 0,
        y: 30,
        duration: 0.75,
        ease: "power3.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: ".founder-note",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from([".founder-side"], {
        opacity: 0,
        x: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".founder-side",
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#F3F7F8]">
      <BackgroundGrid coverage={0.9} />
      <div className="founder-pill inline-flex items-center justify-start rounded-[31px] bg-[linear-gradient(90deg,#CEE3FF_0%,#C5F4FF_100%)] p-px">
        <div className="flex items-center gap-3 rounded-[83px] bg-white px-6 py-2">
          <div className="relative h-[18px] w-[18px]">
            <span className="absolute inset-0 rounded-full bg-[rgba(7,100,218,0.2)]" />
            <span className="absolute inset-[3px] rounded-full bg-[rgba(7,100,218,0.32)]" />
            <span className="absolute inset-[5px] rounded-full bg-[rgba(7,100,218,0.66)]" />
          </div>
          <span
            className="text-[14px] font-medium text-black"
            style={textStyle}
          >
            Our Founder
          </span>
        </div>
      </div>

      <div className="relative z-20 mx-auto flex w-full flex-col gap-12 px-6 pb-24 pt-20 lg:flex-row lg:items-start lg:gap-16 lg:px-10">
        <div className="flex flex-col gap-10 lg:w-[60%]">
          <div className="founder-heading flex flex-col gap-2 lg:pl-40">
            <h1
              className="text-[24px] font-semibold leading-[38px] text-[#202020] lg:h-[38px] lg:w-[473px]"
              style={textStyle}
            >
              <span>Meet </span>
              <span
                className="text-[39px] font-normal italic leading-[38px] text-[#0051FF]"
                style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
              >
                Harsh
              </span>{" "}
              <span>founder of LaunchPad Labs</span>
            </h1>
            <p
              className="founder-subheading text-[16px] font-medium leading-[38px] text-[#525252]"
              style={textStyle}
            >
              Your Strategic Tech Partner for Building MVPs That Scale
            </p>
          </div>

          <div className="flex lg:justify-end">
            <div className="founder-portrait relative">
              <div className="overflow-hidden rounded-[18px]">
                <Image
                  src="/founder/harsh.png"
                  alt="Harshdeep portrait"
                  width={360}
                  height={360}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>

              <div className="founder-note mt-6 flex w-full flex-col gap-3 rounded-[28px] bg-white px-6 py-5 shadow-[0px_22px_45px_rgba(18,44,88,0.12)] lg:absolute lg:-bottom-14 lg:mt-0 lg:w-[500px] lg:-left-70">
                <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-sm bg-[#CAE3FF] px-[2px] shadow-sm lg:absolute lg:-top-[18px] lg:left-6 lg:mb-0">
                  <span
                    className="bg-[CAE3FF] px-4 py-1 text-[13px] font-semibold text-black"
                    style={textStyle}
                  >
                    A Note from our Founder
                  </span>
                </div>
                <p
                  className="pl-0 text-[15px] font-medium italic leading-[30px] text-[#202020] lg:w-[393px] lg:pl-[24px]"
                  style={textStyle}
                >
                  Most startups don't fail from bad ideas – they fail because they launch too slow.
                  <br />
                  With LaunchPad Labs, you can go live in just 2 weeks.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="founder-side relative flex flex-1 flex-col lg:w-[40%]">
          <Image
            src={"/founder/note.png"}
            alt="Note"
            fill
            className="absolute inset-0 h-full w-full rounded-2xl object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <Image
            src="/founder/rectangle.png"
            alt="Decorative corner"
            width={180}
            height={140}
            className="absolute -top-5 right-1 h-auto w-[160px]"
            priority
          />
          <div className="pb-[133%] lg:pb-[120%]" />
        </div>
      </div>
    </div>
  );
};

export default FounderPage;