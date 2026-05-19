import { notFound } from "next/navigation";
import Link from "next/link";
import Grain from "@/components/Grain";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getPost, getAllSlugs, type ContentBlock } from "@/lib/posts";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Alloninc`,
    description: post.excerpt,
  };
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "p":
      return (
        <p
          key={i}
          className="text-[1.05rem] md:text-[1.08rem] leading-[1.95] text-linen/65 mb-6"
        >
          {block.text}
        </p>
      );

    case "h2":
      return (
        <h2
          key={i}
          className="font-serif font-[300] tracking-[-0.02em] leading-[1.2] text-linen mt-14 mb-5"
          style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)" }}
        >
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3
          key={i}
          className="font-serif font-[400] text-[1.15rem] md:text-[1.25rem] text-linen/85 mt-10 mb-3 leading-[1.3]"
        >
          {block.text}
        </h3>
      );

    case "quote":
      return (
        <blockquote
          key={i}
          className="my-12 px-8 md:px-12 py-8 border-l-2 border-amber bg-amber/[0.04]"
        >
          <p
            className="font-serif font-[300] italic text-linen/75 leading-[1.6] tracking-[-0.01em]"
            style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.35rem)" }}
          >
            &ldquo;{block.text}&rdquo;
          </p>
          {block.attribution && (
            <p className="text-[0.72rem] tracking-[0.18em] uppercase text-amber mt-4">
              {block.attribution}
            </p>
          )}
        </blockquote>
      );

    case "list":
      return (
        <ul key={i} className="my-6 flex flex-col gap-3">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-3 items-start">
              <span className="w-[5px] h-[5px] rounded-full bg-amber opacity-50 mt-[0.55rem] shrink-0" />
              <span className="text-[1rem] leading-[1.8] text-linen/60">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Grain />
      <Nav />

      <main className="min-h-screen bg-navy">
        {/* Article header */}
        <div className="bg-navy2 pt-[88px]">
          <div className="px-6 md:px-16 pt-16 pb-16 max-w-[860px]">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.18em] uppercase text-linen/40 no-underline hover:text-amber transition-colors mb-12 group"
            >
              <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
              All Notes
            </Link>

            {/* Category + meta */}
            <div className="flex items-center gap-5 mb-7">
              <span className="text-[0.72rem] tracking-[0.22em] uppercase text-amber">
                {post.category}
              </span>
              <span className="w-5 h-px bg-linen/[0.15]" />
              <span className="text-[0.72rem] tracking-[0.15em] uppercase text-linen/38">
                {post.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-linen/20" />
              <span className="text-[0.72rem] tracking-[0.15em] uppercase text-linen/38">
                {post.readTime} min read
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-serif font-[300] leading-[1.08] tracking-[-0.025em] text-linen mb-8"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}
            >
              {post.title}
            </h1>

            {/* Excerpt */}
            <p
              className="font-serif font-[300] italic text-linen/55 leading-[1.6] max-w-[52ch]"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
            >
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Amber rule */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

        {/* Article body */}
        <div className="px-6 md:px-16 py-16">
          <div className="max-w-[680px]">
            {post.content.map((block, i) => renderBlock(block, i))}
          </div>

          {/* Footer nav */}
          <div className="max-w-[680px] mt-20 pt-10 border-t border-linen/[0.07] flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.18em] uppercase text-linen/40 no-underline hover:text-amber transition-colors group"
            >
              <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
              All Notes
            </Link>
            <Link
              href="/#engage"
              className="text-[0.72rem] tracking-[0.18em] uppercase text-amber no-underline border border-amber/30 px-5 py-[10px] hover:bg-amber hover:text-navy transition-all duration-200"
            >
              Request a Diagnosis
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
