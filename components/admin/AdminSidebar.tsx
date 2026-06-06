"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  {
    section: "Overview",
    items: [{ label: "Dashboard", href: "/admin", exact: true }],
  },
  {
    section: "Content",
    items: [{ label: "Blog Posts", href: "/admin/blog", exact: false }],
  },
];

function NavItem({
  label,
  href,
  exact,
}: {
  label: string;
  href: string;
  exact: boolean;
}) {
  const pathname = usePathname();
  const active = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={[
        "flex items-center gap-3 px-4 py-2.5 text-[0.78rem] tracking-[0.12em] uppercase transition-all duration-150 border-l-2 no-underline",
        active
          ? "border-l-amber text-amber bg-amber/[0.06]"
          : "border-l-transparent text-linen/50 hover:text-linen/80 hover:bg-linen/[0.04]",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export default function AdminSidebar() {
  return (
    <aside className="w-56 shrink-0 bg-navy2 border-r border-linen/[0.06] flex flex-col h-full">
      {/* Brand */}
      <div className="px-5 py-6 border-b border-linen/[0.06]">
        <Link href="/" className="no-underline block">
          <span className="font-serif text-[1.1rem] font-[300] text-linen tracking-[-0.01em]">
            Alloninc
          </span>
          <span className="block text-[0.62rem] tracking-[0.22em] uppercase text-amber mt-0.5">
            Admin
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        {nav.map(({ section, items }) => (
          <div key={section} className="mb-5">
            <p className="px-5 pb-2 text-[0.6rem] tracking-[0.22em] uppercase text-linen/25 font-[400]">
              {section}
            </p>
            {items.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-5 py-5 border-t border-linen/[0.06]">
        <Link
          href="/"
          className="text-[0.68rem] tracking-[0.16em] uppercase text-linen/35 hover:text-amber transition-colors no-underline"
        >
          ← View Site
        </Link>
      </div>
    </aside>
  );
}
