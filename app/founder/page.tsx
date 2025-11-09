import Image from "next/image";
import BackgroundGrid from "./_components/BackgroundGrid";

const textStyle = { fontFamily: '"Plus Jakarta Sans", var(--font-sans)' };

const FounderPage = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#F3F7F8]">
            <BackgroundGrid coverage={0.9} />
            <div className="inline-flex items-center justify-start rounded-[31px] bg-[linear-gradient(90deg,#CEE3FF_0%,#C5F4FF_100%)] p-px">
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

            <div className="relative z-20 mx-auto flex justify-end w-full flex-col gap-12 px-6 pb-24 pt-20 lg:flex-row lg:items-start lg:gap-16 lg:px-10">
                <div className="flex flex-col lg:w-[60%] gap-10">
                    <div className="flex pl-40 flex-col gap-2">
                        <h1
                            className="w-[473px] h-[38px] text-[24px] font-semibold leading-[38px] text-[#202020]"
                            style={textStyle}
                        >
                    <span>Meet{" "}</span>
                    <span 
                    className="text-[39px] text-[#0051FF] italic font-normal leading-[38px]"
                    style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
                    >
                    Harsh
                    </span>{" "}
                    <span>founder of LaunchPad Labs</span>
                        </h1>
                        <p
                            className="text-[16px] font-medium leading-[38px] text-[#525252]"
                            style={textStyle}
                        >
                            Your Strategic Tech Partner for Building MVPs That Scale
                        </p>
                    </div>

                  <div className="flex lg:justify-end">
                    <div className="relative">
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
            
                      <div className="absolute -bottom-14 left-4 flex w-[500px] flex-col gap-3 rounded-[28px] bg-white px-6 py-5 shadow-[0px_22px_45px_rgba(18,44,88,0.12)] lg:-left-70">
                        <div className="absolute bg-[#CAE3FF] -top-[18px] left-6 inline-flex w-fit items-center gap-2 rounded-sm shadow-sm C5F4FF_100%)] px-[2px]">
                          <span
                            className="bg-[CAE3FF] px-4 py-1 text-[13px] font-semibold text-black"
                            style={textStyle}
                          >
                            A Note from our Founder
                          </span>
                        </div>
                        <p
                          className="w-[393px] h-[90px] pl-[24px] text-[15px] font-medium italic leading-[30px] text-[#202020]"
                          style={textStyle}
                        >
                          Most startups don't fail from bad ideas – they fail because they
                          launch too slow.
                          <br />
                          With LaunchPad Labs, you can go live in just 2
                          weeks.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="relative flex flex-1 flex-col lg:w-[40%]">
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
                      className="absolute -top-5 right-1 w-[160px] h-auto"
                      priority
                    />
                    <div className="pb-[133%] lg:pb-[120%]" />
                </div>
            </div>
        </div>
    );
};

export default FounderPage;