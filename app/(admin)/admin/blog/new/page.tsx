import PostForm from "@/components/admin/PostForm";
import { createPostAction } from "../../actions";

export default function NewPostPage() {
  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-8">
        <p className="text-[0.65rem] tracking-[0.22em] uppercase text-amber mb-1">
          Blog Posts
        </p>
        <h1 className="font-serif font-[300] text-[2rem] tracking-[-0.02em] text-linen leading-none">
          New Post
        </h1>
      </div>
      <PostForm action={createPostAction} submitLabel="Publish Post" />
    </div>
  );
}
