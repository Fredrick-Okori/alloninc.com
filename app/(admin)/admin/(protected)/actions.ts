"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  createPost,
  updatePost,
  deletePost,
  slugExists,
  type Post,
  type ContentBlock,
} from "@/lib/posts";

function parseBlocks(raw: string): ContentBlock[] {
  try {
    return JSON.parse(raw) as ContentBlock[];
  } catch {
    return [];
  }
}

function buildPost(formData: FormData): Omit<Post, "slug"> & { slug: string } {
  return {
    slug: (formData.get("slug") as string).trim().toLowerCase().replace(/\s+/g, "-"),
    title: (formData.get("title") as string).trim(),
    date: (formData.get("date") as string).trim(),
    category: (formData.get("category") as string).trim(),
    readTime: parseInt(formData.get("readTime") as string, 10) || 5,
    excerpt: (formData.get("excerpt") as string).trim(),
    content: parseBlocks(formData.get("content") as string),
  };
}

export async function createPostAction(formData: FormData) {
  const post = buildPost(formData);

  if (!post.title || !post.slug) {
    throw new Error("Title and slug are required.");
  }

  if (await slugExists(post.slug)) {
    throw new Error(`A post with slug "${post.slug}" already exists.`);
  }

  await createPost(post);
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}

export async function updatePostAction(slug: string, formData: FormData) {
  const data = buildPost(formData);

  if (!data.title) {
    throw new Error("Title is required.");
  }

  await updatePost(slug, {
    title: data.title,
    date: data.date,
    category: data.category,
    readTime: data.readTime,
    excerpt: data.excerpt,
    content: data.content,
  });

  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}

export async function deletePostAction(formData: FormData) {
  const slug = formData.get("slug") as string;
  await deletePost(slug);
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}
