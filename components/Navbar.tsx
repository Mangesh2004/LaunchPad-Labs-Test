"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "How It Works", link: "/#how-it-works" },
  { name: "Our Work", link: "/ourWork" },
  { name: "Our Process", link: "/#our-process" },
  { name: "Founder", link: "/founder" },
  { name: "Pricing", link: "/pricing" },
];

const Logo = () => (
  <Link href="/" className="flex items-center gap-3">
    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-[0px_10px_30px_rgba(31,117,255,0.15)]">
      
    </span>
  </Link>
);

const GradientButton = ({ className = "" }: { className?: string }) => (
  <button
    className={`rounded-full bg-linear-to-r from-[#1F80FF] to-[#0D5CFF] px-6 py-2 text-sm font-semibold text-white shadow-[0px_15px_40px_rgba(15,94,255,0.35)] transition hover:shadow-[0px_20px_45px_rgba(15,94,255,0.45)] ${className}`}
    type="button"
  >
    Book A Call
  </button>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-transparent backdrop-blur">
      <div className="mx-auto w-full px-4">
        <div className="relative flex items-center gap-6 px-6 py-3">
        <Image
        alt="LaunchPad Labs logo"
        height={32}
        src="/navbar/Logo.png"
        width={200}
      />
          <nav className="mx-auto hidden ml-120 gap-12 text-sm font-medium text-neutral-800 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                className="transition hover:text-neutral-950"
                href={item.link}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden md:block">
            <GradientButton />
          </div>

          <button
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="ml-auto inline-flex items-center justify-center rounded-full border border-neutral-200 p-2 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            type="button"
          >
            {isOpen ? (
              <X className="h-5 w-5 text-neutral-900" />
            ) : (
              <Menu className="h-5 w-5 text-neutral-900" />
            )}
          </button>

          {isOpen && (
            <div className="absolute left-0 top-full mt-4 w-full rounded-3xl bg-white p-6 shadow-lg md:hidden">
              <nav className="flex flex-col gap-4 text-base font-medium text-neutral-800">
                {NAV_ITEMS.map((item) => (
                  <Link
                    className="transition hover:text-neutral-950"
                    href={item.link}
                    key={item.name}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <GradientButton className="mt-6 w-full py-3 text-base" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

