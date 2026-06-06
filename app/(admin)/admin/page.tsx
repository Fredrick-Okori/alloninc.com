import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const posts = await getPosts();
  const categories = [...new Set(posts.map((p) => p.category))];
  const totalReadTime = posts.reduce((s, p) => s + p.readTime, 0);

  return (
    <div className="p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-10">
        <p className="text-[0.65rem] tracking-[0.22em] uppercase text-amber mb-1">
          Alloninc Admin
        </p>
        <h1 className="font-serif font-[300] text-[2rem] tracking-[-0.02em] text-linen leading-none">
          Dashboard
        </h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {[
          { label: "Total Posts", value: posts.length },
          { label: "Categories", value: categories.length },
          { label: "Total Read Time", value: `${totalReadTime} min` },
          { label: "Latest Post", value: posts[0]?.date ?? "—" },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-navy2 border border-linen/[0.07] px-5 py-5"
          >
            <p className="text-[0.62rem] tracking-[0.18em] uppercase text-linen/35 mb-2">
              {label}
            </p>
            <p className="font-serif text-[1.5rem] font-[300] text-linen leading-none">
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Recent posts */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[0.68rem] tracking-[0.18em] uppercase text-linen/40">
            Recent Posts
          </h2>
          <Link
            href="/admin/blog"
            className="text-[0.65rem] tracking-[0.14em] uppercase text-amber hover:text-amber/70 transition-colors no-underline"
          >
            Manage all →
          </Link>
        </div>

        <div className="border border-linen/[0.07] divide-y divide-linen/[0.05]">
          {posts.slice(0, 5).map((post) => (
            <div
              key={post.slug}
              className="flex items-center justify-between px-5 py-4 hover:bg-linen/[0.02] transition-colors"
            >
              <div>
                <p className="text-[0.88rem] text-linen/80 leading-snug mb-0.5">
                  {post.title}
                </p>
                <p className="text-[0.68rem] tracking-[0.1em] text-linen/30">
                  {post.category} · {post.date} · {post.readTime} min
                </p>
              </div>
              <Link
                href={`/admin/blog/${post.slug}`}
                className="text-[0.65rem] tracking-[0.14em] uppercase text-amber/60 hover:text-amber transition-colors no-underline shrink-0 ml-6"
              >
                Edit
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Quick actions */}
      <div className="flex gap-3">
        <Link
          href="/admin/blog/new"
          className="text-[0.72rem] tracking-[0.16em] uppercase bg-amber text-navy px-6 py-3 hover:bg-amber/90 transition-colors no-underline font-[400]"
        >
          + New Post
        </Link>
        <Link
          href="/blog"
          target="_blank"
          className="text-[0.72rem] tracking-[0.16em] uppercase border border-linen/[0.15] text-linen/50 px-6 py-3 hover:border-linen/30 hover:text-linen/70 transition-all no-underline"
        >
          View Blog ↗
        </Link>
      </div>
    </div>
  );
}
