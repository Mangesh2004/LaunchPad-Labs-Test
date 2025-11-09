
const textStyle = { fontFamily: '"Plus Jakarta Sans", var(--font-sans)' };
import Image from "next/image";
const Topbar = () => {
  return (
    <section className="relative max-h-[240px] overflow-hidden bg-[#F3F7F8]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-10">
        <div className="flex flex-1 flex-col gap-4">
          <h1
            className="w-[590px] text-[48px] font-semibold leading-[31px] text-[#202020]"
            style={textStyle}
          >
            From vision to{" "}
            <span className="bg-[linear-gradient(90deg,#231BAF_0%,#0FA6EC_100%)] bg-clip-text text-transparent">
              Launchpad
            </span>
          </h1>
          <p
            className="max-w-[480px] text-[17px] font-medium leading-[31px] text-[#686868]"
            style={textStyle}
          >
            Explore some of the MVPs and products we’ve brought to life
          </p>
        </div>

        <div className="relative pt-5 w-full max-w-[360px]">
          <Image
            src="/ourwork/calendar-card.png"
            alt="Calendar Card"
            width={360}
            height={240}
            className="w-full rounded-[24px] shadow-[0_12px_30px_rgba(13,24,46,0.08)]"
          />
          <button
            className="absolute -left-[125px] top-1/2 inline-flex h-12 w-full max-w-[250px] -translate-y-1/2 items-center justify-center rounded-[31px] border-2 border-transparent bg-[linear-gradient(0deg,#0F93FF_0%,#003BB9_100%)] px-8 text-[16px] font-semibold text-white shadow-[0px_2px_4px_rgba(30,113,229,0.15),0px_7px_7px_rgba(30,113,229,0.13),0px_17px_10px_rgba(30,113,229,0.08),0px_30px_12px_rgba(30,113,229,0.02),0px_46px_13px_rgba(30,113,229,0)] cursor-pointer"
            style={textStyle}
          >
            Book My Free MVP Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Topbar;

