import BookCall from "@/app/components/bookCall/BookCall";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WORK_PAGES: Record<
  string,
  {
    title: string;
    summary: string;
  }
> = {
  fitai: {
    title: "FitAI Case Study",
    summary: "A deep dive into the FitAI experience.",
  },
  billflow: {
    title: "BillFlow Case Study",
    summary: "How we helped BillFlow ship fast and scale confidently.",
  },
  finsub: {
    title: "FinSub Case Study",
    summary: "FinSub’s investor dashboard transformation.",
  },
};

type CaseStudyPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return Object.keys(WORK_PAGES).map((slug) => ({ slug }));
}

const CaseStudyPage = ({ params }: CaseStudyPageProps) => {
  const content = WORK_PAGES[params.slug] ?? {
    title: "Case Study",
    summary: "Detailed breakdown coming soon.",
  };

  return (
    <main className="px-10">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8">
        <Link
          href="/ourWork"
          className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-dashed border-[#00D0FF] bg-white px-6 py-3 text-sm font-medium text-black transition-colors duration-200 hover:bg-white/80"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Our Work
        </Link>

        <div className="overflow-hidden rounded-3xl">
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
      <div className="flex items-center justify-between">
        <h1 
          className="text-[40px] font-semibold leading-[31px] text-[#404040] pl-10"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
        BillFlow
        </h1>
        
        <span className="inline-flex h-12 w-[180px] items-center justify-center rounded-[31px] bg-[linear-gradient(90deg,#9CC6FF_0%,#00D0FF_100%)] p-[2px]">
            <span
                className="flex h-full w-full items-center justify-between rounded-[29px] bg-white px-6 text-[16px] font-semibold text-black transition-colors duration-200 hover:bg-transparent hover:text-white"
            >
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

      <div className="mt-10 flex w-full justify-center">
        <div className="relative w-full max-w-[1280px] rounded-[17px] bg-[#F7FBFF]">
          <div className="pointer-events-none absolute inset-0 rounded-[17px] border border-[#BDE6FF80]" />
          <div className="relative flex items-center justify-between px-10 py-8">
            <div className="flex flex-col gap-2">
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

            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#6B6B6B]">
                Expertise
              </span>
              <div className="flex flex-wrap justify-center gap-3">
                {["UI/UX", "Web Development", "Mobile App"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#BDE6FF] px-4 py-1 text-sm font-medium text-[#1A1A1A]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
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

      <section className="mx-auto mt-16 w-full max-w-[860px] text-center">
        <h2
          className="text-[36px] font-semibold text-[#6B6B6B]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          Overview
        </h2>
        <p className="mt-6 text-base leading-7 text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </section>

      <section className="mx-auto mt-16 flex w-full max-w-[1280px] flex-col gap-20">
        <h1 className="text-[#828282] text-[24px] font-semibold leading-[31px] flex justify-center">Product</h1>
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
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
          <div className="flex flex-1 pl-30 flex-col justify-center text-left">
            <h3
              className="text-[28px] font-semibold text-[#1A1A1A]"
              style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
            >
              Hero Section
            </h3>
            <p className="mt-4 max-w-[520px] text-base leading-7 text-[#4B5E6F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:gap-16">
          <div className="flex flex-1 pl-10 flex-col justify-center text-left">
            <h3
              className="text-[28px] font-semibold text-[#1A1A1A]"
              style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
            >
              Hero Section
            </h3>
            <p className="mt-4 max-w-[520px] text-base leading-7 text-[#4B5E6F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
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
      <BookCall/>

    </main>
  );
};

export default CaseStudyPage;

