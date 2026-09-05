import Link from "next/link";
import Grain from "@/components/Grain";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Notes — Alloninc",
  description:
    "Writing on organisational structure, decision-making, culture, and the architecture of business.",
};

export default async function BlogPage() {
  const posts = await getPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <Grain />
      <Nav />

      <main className="min-h-screen bg-navy pt-[88px]">
        <div className="px-6 md:px-16 pt-16 pb-0">
          <div className="flex items-baseline gap-[18px] mb-16 border-b border-linen/[0.07] pb-10">
            <span className="font-serif text-[0.95rem] text-amber opacity-50">04</span>
            <h1
              className="font-serif font-[300] tracking-[-0.02em] leading-none"
              style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)" }}
            >
              Notes &amp; <em className="italic text-amber">Thinking</em>
            </h1>
            <div className="flex-1 h-px bg-linen/[0.07] ml-2" />
          </div>
        </div>

        <div className="px-6 md:px-16 pb-24">
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group block mb-0.5 no-underline"
            >
              <article className="grid md:grid-cols-[1fr_auto] gap-10 bg-linen/[0.03] border border-linen/[0.07] border-l-2 border-l-transparent hover:border-l-amber hover:bg-linen/[0.05] transition-all duration-300 p-10 md:p-14">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[0.7rem] tracking-[0.22em] uppercase text-amber">
                      {featured.category}
                    </span>
                    <span className="w-5 h-px bg-linen/20" />
                    <span className="text-[0.7rem] tracking-[0.14em] text-linen/35">
                      Featured
                    </span>
                  </div>
                  <h2
                    className="font-serif font-[300] leading-[1.15] tracking-[-0.02em] text-linen mb-5 group-hover:text-amber transition-colors duration-300"
                    style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-[0.95rem] leading-[1.85] text-linen/55 max-w-[60ch] mb-8">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-6">
                    <span className="text-[0.72rem] tracking-[0.15em] uppercase text-linen/35">
                      {featured.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-linen/20" />
                    <span className="text-[0.72rem] tracking-[0.15em] uppercase text-linen/35">
                      {featured.readTime} min read
                    </span>
                  </div>
                </div>
                <div className="hidden md:flex items-end">
                  <span className="text-[0.74rem] tracking-[0.18em] uppercase text-amber border-b border-amber/40 pb-0.5 group-hover:border-amber transition-colors">
                    Read →
                  </span>
                </div>
              </article>
            </Link>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 mt-0.5">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block no-underline"
              >
                <article className="h-full bg-linen/[0.025] border border-linen/[0.07] border-l-2 border-l-transparent hover:border-l-amber hover:bg-linen/[0.05] transition-all duration-300 p-8 flex flex-col">
                  <div className="text-[0.7rem] tracking-[0.22em] uppercase text-amber mb-5">
                    {post.category}
                  </div>
                  <h2
                    className="font-serif font-[300] leading-[1.2] tracking-[-0.015em] text-linen mb-4 group-hover:text-amber/90 transition-colors duration-300 flex-1"
                    style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-[0.9rem] leading-[1.78] text-linen/50 mb-7 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-5 border-t border-linen/[0.07]">
                    <div className="flex items-center gap-4">
                      <span className="text-[0.68rem] tracking-[0.14em] uppercase text-linen/35">
                        {post.date}
                      </span>
                      <span className="text-[0.68rem] tracking-[0.14em] uppercase text-linen/35">
                        {post.readTime} min
                      </span>
                    </div>
                    <span className="text-[0.7rem] tracking-[0.18em] uppercase text-amber/60 group-hover:text-amber transition-colors">
                      Read →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Blog Bottom Selling Callout */}
        <div className="px-6 md:px-16 pb-24">
          <div className="p-8 md:p-12 bg-linen/[0.03] border border-linen/[0.08] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-2xl">
              <div className="text-[0.7rem] tracking-[0.2em] uppercase text-amber mb-3">
                Financial &amp; Structural Management
              </div>
              <h3 className="font-serif text-[1.4rem] md:text-[1.8rem] font-[200] text-linen mb-3 leading-tight">
                The conversation is free. <span className="text-amber italic">The cost of waiting isn&apos;t.</span>
              </h3>
              <p className="text-[0.92rem] leading-[1.8] text-linen/55">
                Most businesses are losing money they don&apos;t know they&apos;re losing. We install the system that catches it - protecting and recovering over UGX 4.5 billion for our clients. Plans start from UGX 3.5M/mo with a 30-day money-back guarantee.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/pricing"
                className="text-[0.74rem] tracking-[0.18em] uppercase text-amber border border-amber/35 px-7 py-3.5 hover:bg-amber hover:text-navy transition-all text-center no-underline"
              >
                View Plans &amp; Pricing
              </Link>
              <a
                href="mailto:elias@alloninc.com?subject=Request%20a%20Diagnosis%20-%20Allon%20Inc"
                className="text-[0.74rem] tracking-[0.18em] uppercase text-navy bg-amber px-7 py-3.5 hover:opacity-85 transition-opacity text-center no-underline"
              >
                Request a Diagnosis
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
