"use client";
import Image from "next/image";

const WORK_ITEMS = [
  {
    name: "BillFlow",
    image: "/ourwork/billflow-card-7fa0bb.png",
  },
  {
    name: "FitAI",
    image: "/ourwork/fitai-card-281062.png",
  },
  {
    name: "FinSub",
    image: "/ourwork/finsub-card.png",
  },
  {
    name: "BillFlow",
    image: "/ourwork/billflow-alt-card-221ee0.png",
  },
  {
    name: "FinSub",
    image: "/ourwork/finsub-card.png",
  },
];

const OurWorkCard = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="flex h-[316px] w-[381px] shrink-0 flex-col rounded-[16px] bg-white shadow-[0_0_21px_rgba(0,0,0,0.1)]">
      <div className="mx-2 mt-2 flex-1 overflow-hidden rounded-[8px] border-6 border-[#B9DDFB]">
        <Image
          src={image}
          alt={name}
          width={365}
          height={258}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between px-4 pb-4 pt-3">
        <span
          className="text-[16px] font-semibold leading-[31px] text-[#404040]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          {name}
        </span>
        <ArrowIcon />
      </div>
    </div>
  );
};

const ArrowIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12.6667 19.3334L19.3334 12.6667"
      stroke="#4F4F4F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 12.6667H19.3334V18.5"
      stroke="#4F4F4F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const OurWork = () => {
  const marqueeItems = [...WORK_ITEMS, ...WORK_ITEMS];

  return (
    <section className="flex w-full flex-col items-center bg-[#F3F7F8] px-6 py-24">
      <div className="flex w-full max-w-5xl flex-col items-center text-center">
        <div className="rounded-[31px] bg-[linear-gradient(90deg,#CEE3FF_0%,#C5F4FF_100%)] p-[1px]">
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
              Our Work
            </span>
          </div>
        </div>

        <h2
          className="mt-8 max-w-2xl text-center text-[28px] font-semibold leading-[31px] text-[#202020]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          Every product here went from idea to live in 2 weeks
        </h2>

        <p
          className="mt-4 text-center text-[16px] font-medium leading-[31px] text-[#525252]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          Built, launched, and loved by real users
        </p>
      </div>

      <div className="mt-14 w-full overflow-hidden">
        <div className="marquee-track flex gap-[43px]" aria-hidden="true">
          {marqueeItems.map((item, index) => (
            <OurWorkCard key={`${item.name}-${index}`} {...item} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          width: max-content;
          animation: marquee 28s linear infinite;
        }

        @media (max-width: 1024px) {
          .marquee-track {
            animation-duration: 34s;
          }
        }

        @media (max-width: 768px) {
          .marquee-track {
            animation-duration: 42s;
          }
        }
      `}</style>
    </section>
  );
};

export default OurWork;

