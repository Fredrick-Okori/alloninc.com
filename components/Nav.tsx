"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links: [string, string][] = [
  ["The Problem", "/#diagnosis"],
  ["The Method", "/#method"],
  ["The Territory", "/#structure"],
  ["Blog", "/blog"],
  ["Engage", "/#engage"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 py-[26px] transition-all duration-500 ${
        scrolled
          ? "bg-navy/[0.96] backdrop-blur-xl border-b border-linen/[0.07]"
          : ""
      }`}
    >
      <Link
        href="/"
        className="font-serif font-[200] text-[1.5rem] text-linen no-underline tracking-tight opacity-75"
      >
        Allon
      </Link>

      <ul className="hidden md:flex gap-10 list-none m-0 p-0">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link
              href={href}
              className="text-[0.74rem] tracking-[0.18em] uppercase text-linen/40 no-underline hover:text-linen transition-colors duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/#engage"
        className="text-[0.74rem] tracking-[0.18em] uppercase text-amber no-underline border border-amber/30 px-6 py-[11px] hover:bg-amber hover:text-navy transition-all duration-200"
      >
        Request a Diagnosis
      </Link>
    </nav>
  );
}
