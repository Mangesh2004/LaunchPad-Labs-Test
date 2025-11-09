import Image from "next/image";

const trustedLogos = [
  { alt: "Amazon", src: "/hero/logo-amazon.png" },
  { alt: "Adobe", src: "/hero/logo-adobe.png" },
  { alt: "Walmart", src: "/hero/logo-walmart.png" },
  { alt: "Qualcomm", src: "/hero/logo-qualcomm.png" },
  { alt: "Deloitte", src: "/hero/logo-deloitte.png" },
];

export default function TrustedByMarquee() {
  const marqueeLogos = [...trustedLogos, ...trustedLogos];

  return (
    <div className="relative w-full">
      <p
        className="text-sm text-center font-semibold uppercase tracking-[0.18em] text-[#555555]"
        style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
      >
        Trusted by Founders from
      </p>

      <div className="relative mt-8 overflow-hidden rounded-[32px] bg-transparent  py-8 backdrop-blur">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[30%] bg-linear-to-r from-[#F6FAFF] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[30%] bg-linear-to-l from-[#F6FAFF] to-transparent z-10" />

        <div className="hero-marquee flex w-max items-center gap-16">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex h-14 w-48 items-center justify-center opacity-90 transition-opacity hover:opacity-100"
            >
              <Image
                alt={logo.alt}
                height={56}
                priority={index < trustedLogos.length}
                sizes="120px"
                src={logo.src}
                width={180}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
