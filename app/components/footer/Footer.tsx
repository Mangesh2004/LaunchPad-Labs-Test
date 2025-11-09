import Image from "next/image";
import Link from "next/link";

const primaryLinks = [
    {
        title: "Services",
        items: [
            "MVP Development",
            "UI/UX Design",
            "Web Development",
            "Mobile Apps",
            "Consulting",
        ],
    },
    {
        title: "About",
        items: ["Our Process", "How We Work", "FAQs", "Contact"],
    },
    {
        title: "Portfolio",
        items: ["Case Studies", "Success Stories", "MVP Showcase", "Testimonials"],
    },
    {
        title: "Legal",
        items: ["Privacy Policy", "Terms of Services", "Cookie Policy"],
    },
];

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-white">
            <div className="mx-auto flex w-full flex-col px-6 pb-16 pt-14 lg:px-20">
                <div className="relative flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between lg:gap-[173px]">
                    <div className="flex max-w-[284px] flex-col gap-9">
                        <div className="flex items-center gap-1">
                            <div className="rounded-[9px]">
                                <Image
                                    src="/footer/footer-social-1.svg"
                                    alt="LaunchPad Labs emblem"
                                    width={60}
                                    height={60}
                                    priority
                                />
                            </div>
                            <span
                                className="bg-[linear-gradient(90deg,#2209A7_0%,#03BDF7_100%)] bg-clip-text text-[22px] font-semibold text-transparent"
                                style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
                            >
                                LaunchPad
                            </span>
                            <span className="text-[22px] font-semibold text-[#0D1B3E]"> Labs</span>
                        </div>
                        <p
                            className="text-[14px] font-medium leading-[25px] text-[#525252]"
                            style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
                        >
                            We build high-quality MVPs to transform your ideas into reality.
                        </p>
                        <div className="flex items-center gap-4">

                            <div className="rounded-[9px]">
                                <Image
                                    src="/footer/footer-social-2.svg"
                                    alt="Social link 1"
                                    width={70}
                                    height={70}
                                    priority
                                />
                            </div>
                            <div className="rounded-[9px]">
                                <Image
                                    src="/footer/footer-social-3.svg"
                                    alt="Social link 2"
                                    width={70}
                                    height={70}
                                    priority
                                />
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[150px]">
                        {primaryLinks.map((section) => (
                            <div key={section.title} className="flex flex-col gap-[7px]">
                                <h3
                                    className="text-[17px] font-semibold leading-[31px] text-[#0D1B3E]"
                                    style={{
                                        fontFamily: '"Plus Jakarta Sans", var(--font-sans)',
                                    }}
                                >
                                    {section.title}
                                </h3>
                                <ul className="flex flex-col gap-[7px]">
                                    {section.items.map((item) => (
                                        <li key={item}>
                                            <Link
                                                href="#"
                                                className="text-[14px] font-medium leading-[31px] text-[#616161] transition-colors hover:text-[#0F93FF]"
                                                style={{
                                                    fontFamily: '"Plus Jakarta Sans", var(--font-sans)',
                                                }}
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>


                </div>
                <div className="pointer-events-none flex justify-center">
                    <span className="bg-[linear-gradient(180deg,#C2DCFF_30%,#FFFFFF_85%)] bg-clip-text text-[177px] font-semibold text-transparent">
                        LaunchPad Labs
                    </span>
                </div>
                <div className="flex flex-col items-center gap-8">
                    <div className="h-[2px] w-full max-w-[1280px] bg-[linear-gradient(90deg,rgba(243,247,248,0)_14%,rgba(147,179,216,1)_50%,rgba(243,247,248,0)_82%)]" />
                    <p
                        className="text-center text-[13px] font-medium leading-[31px] text-[#818181]"
                        style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
                    >
                        © 2025 LinkVerse. All rights reserved.
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;

