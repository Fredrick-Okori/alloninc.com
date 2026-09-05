import Link from "next/link";

const links = [
  ["Pricing", "/"],
  ["Blog", "/blog"],
  ["Contact", "mailto:elias@alloninc.com?subject=Request%20a%20Diagnosis%20-%20Allon%20Inc"],
] as const;

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-linen/[0.07] px-6 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-center md:text-left">
      <div className="font-serif font-[200] text-[1.2rem] text-linen/40">
        Allon Inc - Financial Management Services
      </div>
      <div className="text-[0.72rem] tracking-[0.15em] uppercase text-linen/25">
        © MMXXVI · All rights reserved
      </div>
      <div className="flex gap-7">
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="text-[0.72rem] tracking-[0.15em] uppercase text-linen/30 no-underline hover:text-amber transition-colors duration-200"
          >
            {label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
