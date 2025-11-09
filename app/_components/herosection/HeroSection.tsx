import Image from "next/image";


export const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden pt-15">
      <Image
        alt="Launch background"
        className="object-cover"
        fill
        priority
        sizes="80vw"
        src="/hero/bg.png"
      />
        
      <div className="relative z-10 mx-auto flex max-w-[845px] flex-col items-center px-6 text-center">
        <div className="mb-6">
          <Image
            alt="Hero tagline top text"
            height={350}
            src="/hero/top_text.png"
            width={300}
          />
        </div>

        <h1
          className="font-semibold text-[52px] leading-[75px] text-black"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          <span className="inline-flex items-center justify-center gap-3">
            <span>We Build and</span>
            <Image
              alt="Rocket accent"
              className="h-[69px] w-[73px] rounded-[9px]"
              height={69}
              priority
              src="/hero/text-rocket.png"
              width={73}
            />
            <span>Launch Your</span>
          </span>
          <br />
          Startup MVP in Just{" "}
          <span className="bg-[linear-gradient(90deg,#231BAF_0%,#0FA6EC_100%)] bg-clip-text text-transparent">
            2 Weeks
          </span>
        </h1>

        <h3 className="mt-4 text-[19px] font-medium text-[#5B5B5B]">
          LaunchPad Labs builds and ships investor-ready MVPs for founders
        </h3>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex items-center">
            {["/hero/trusted-avatar-3-42e7fa.png", "/hero/trusted-avatar-2-263873.png", "/hero/trusted-avatar-1-756363.png"].map(
              (src, index) => (
                <div
                  key={src}
                  className={`relative h-12 w-12 overflow-hidden rounded-full border-[3px] border-white ${
                    index > 0 ? "-ml-4" : ""
                  }`}
                >
                  <Image alt="Founder avatar" fill sizes="48px" src={src} />
              </div>
              )
            )}
          </div>
          <p
            className="text-left text-[15px] font-semibold leading-[26px] text-[#4C4C4C]"
            style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
          >
            Trusted by 50+ VC-backed founders
          </p>
        </div>

        <div className="relative mt-12 flex w-full flex-col items-center">
          <button
            className="absolute z-40 cursor-pointer -top-6 inline-flex items-center justify-center rounded-[31px] border-2 border-[#9CC6FF] bg-[linear-gradient(0deg,#0F93FF_0%,#003BB9_100%)] px-10 py-3 text-[16px] font-semibold text-white shadow-[0px_2px_4px_rgba(30,113,229,0.15),0px_7px_7px_rgba(30,113,229,0.13),0px_17px_10px_rgba(30,113,229,0.08),0px_30px_12px_rgba(30,113,229,0.02)]"
            style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
          >
            Book My Free MVP Call
          </button>

          <div className="flex w-[550px] flex-col items-center justify-center gap-6">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-white shadow-[0px_18px_45px_rgba(21,49,85,0.15)]">
                <Image
                  alt="Monthly availability calendar"
                  height={374}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="/hero/booking-calendar.png"
                  width={556}
                />
              </div>
              <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-white shadow-[0px_18px_45px_rgba(21,49,85,0.15)]">
                <Image
                  alt="Available time slots"
                  height={420}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="/hero/booking-time.png"
                  width={554}
                />
              </div>
            </div>
          </div>
        </div>

        {/* <TrustedByMarquee /> */}
      </div>
    </section>
  );
};

export default HeroSection;