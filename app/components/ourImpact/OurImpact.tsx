import Image from "next/image";

import ImpactCard from "./ImpactCard";

const CARDS = [
  {
    value: "$25M+",
    description: "Raised by founders who launched with us",
    fillGradient: "linear-gradient(0deg, #FFFFFF 0%, #E6F3FF 100%)",
    borderGradient:
      "linear-gradient(180deg, #B9E8FF 0%, rgba(140, 180, 255, 0.93) 46%, rgba(222, 248, 255, 0.66) 100%)",
  },
  {
    value: "50+",
    description: "MVPs built – live in market within 2 weeks",
    fillGradient:
      " linear-gradient(0deg, #FFFFFF 0%, #E6F3FF 100%)",
    borderGradient:
      "linear-gradient(180deg, #B9E8FF 0%, rgba(140, 180, 255, 0.93) 46%, rgba(222, 248, 255, 0.66) 100%)",
  },
  {
    value: "5",
    description: "Startups acquired after launching through LaunchPad Labs",
    fillGradient: "linear-gradient(0deg, #FFFFFF 0%, #E6F3FF 100%)",
    borderGradient:
      "linear-gradient(180deg, #B9E8FF 0%, rgba(140, 180, 255, 0.93) 46%, rgba(222, 248, 255, 0.66) 100%)",
  },
];

export const OurImpact = () => {
  return (
    <section className="relative flex flex-col items-center bg-white px-6 py-24">
      <div className="flex flex-col items-center text-center">
        
        <div>
        <Image
         src="/hero/our_impact.png" alt="Our Impact" width={151} height={44} />
        </div>

        <h2
          className="mt-6 text-[24px] font-semibold leading-[31px] text-[#202020]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          Fast launches Real results
        </h2>
      </div>

      <div className="mt-10 flex w-full max-w-5xl flex-col gap-9 md:flex-row">
        {CARDS.map((card) => (
          <ImpactCard key={card.value} {...card} className="flex-1" />
        ))}
      </div>
    </section>
  );
};

export default OurImpact;
