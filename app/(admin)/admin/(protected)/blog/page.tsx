import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { deletePostAction } from "../actions";

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  const posts = await getPosts();

  return (
    <div className="p-8 max-w-5xl">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-amber mb-1">
            Content
          </p>
          <h1 className="font-serif font-[300] text-[2rem] tracking-[-0.02em] text-linen leading-none">
            Blog Posts
          </h1>
        </div>
        <Link
          href="/admin/blog/new"
          className="text-[0.72rem] tracking-[0.16em] uppercase bg-amber text-navy px-5 py-2.5 hover:bg-amber/90 transition-colors no-underline font-[400] shrink-0"
        >
          + New Post
        </Link>
      </div>

      {/* Posts table */}
      {posts.length === 0 ? (
        <div className="border border-linen/[0.07] px-8 py-16 text-center">
          <p className="text-[0.85rem] text-linen/30 mb-4">No posts yet.</p>
          <Link
            href="/admin/blog/new"
            className="text-[0.68rem] tracking-[0.14em] uppercase text-amber hover:text-amber/70 transition-colors no-underline"
          >
            Create your first post →
          </Link>
        </div>
      ) : (
        <div className="border border-linen/[0.07]">
          {/* Table head */}
          <div className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-4 px-5 py-3 border-b border-linen/[0.07] bg-linen/[0.02]">
            {["Title", "Category", "Date", "Min", ""].map((h) => (
              <span
                key={h}
                className="text-[0.6rem] tracking-[0.18em] uppercase text-linen/30"
              >
                {h}
              </span>
            ))}
          </div>

          {/* Rows */}
          <div className="divide-y divide-linen/[0.05]">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-4 items-center px-5 py-4 hover:bg-linen/[0.02] transition-colors"
              >
                <div>
                  <p className="text-[0.88rem] text-linen/80 leading-snug mb-0.5 truncate">
                    {post.title}
                  </p>
                  <p className="text-[0.65rem] text-linen/25 font-mono truncate">
                    /{post.slug}
                  </p>
                </div>

                <span className="text-[0.68rem] tracking-[0.1em] text-linen/40 whitespace-nowrap">
                  {post.category}
                </span>

                <span className="text-[0.68rem] tracking-[0.1em] text-linen/35 whitespace-nowrap">
                  {post.date}
                </span>

                <span className="text-[0.68rem] text-linen/30 whitespace-nowrap">
                  {post.readTime}
                </span>

                <div className="flex items-center gap-3">
                  <Link
                    href={`/admin/blog/${post.slug}`}
                    className="text-[0.65rem] tracking-[0.12em] uppercase text-amber/60 hover:text-amber transition-colors no-underline whitespace-nowrap"
                  >
                    Edit
                  </Link>
                  <form action={deletePostAction}>
                    <input type="hidden" name="slug" value={post.slug} />
                    <button
                      type="submit"
                      className="text-[0.65rem] tracking-[0.12em] uppercase text-linen/25 hover:text-red-400 transition-colors whitespace-nowrap"
                    >
                      Delete
                    </button>
                  </form>
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="text-[0.65rem] text-linen/20 hover:text-linen/40 transition-colors no-underline whitespace-nowrap"
                  >
                    ↗
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
