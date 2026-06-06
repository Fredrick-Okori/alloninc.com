import { notFound } from "next/navigation";
import PostForm from "@/components/admin/PostForm";
import { getPost } from "@/lib/posts";
import { updatePostAction } from "../../actions";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export default async function EditPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const updateWithSlug = updatePostAction.bind(null, slug);

  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-8">
        <p className="text-[0.65rem] tracking-[0.22em] uppercase text-amber mb-1">
          Blog Posts
        </p>
        <h1 className="font-serif font-[300] text-[2rem] tracking-[-0.02em] text-linen leading-none">
          Edit Post
        </h1>
        <p className="text-[0.72rem] text-linen/30 mt-1 font-mono">/{slug}</p>
      </div>
      <PostForm post={post} action={updateWithSlug} submitLabel="Save Changes" />
    </div>
  );
}
