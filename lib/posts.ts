import { getSupabase } from "./supabase";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: number;
  excerpt: string;
  content: ContentBlock[];
};

// Column names in the `posts` table match the Post type fields directly:
//   slug, title, date, category, "readTime", excerpt, content, created_at

export async function getPosts(): Promise<Post[]> {
  const { data, error } = await getSupabase()
    .from("posts")
    .select("slug, title, date, category, readTime, excerpt, content")
    .order("created_at", { ascending: false });

  if (error) {
    const cause = (error as unknown as { cause?: unknown }).cause;
    throw new Error(`getPosts: ${error.message}${cause ? ` — cause: ${cause}` : ""}`);
  }
  return (data ?? []) as Post[];
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const { data, error } = await getSupabase()
    .from("posts")
    .select("slug, title, date, category, readTime, excerpt, content")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw new Error(`getPost: ${error.message}`);
  return (data as Post) ?? undefined;
}

export async function getAllSlugs(): Promise<string[]> {
  const { data, error } = await getSupabase()
    .from("posts")
    .select("slug");

  if (error) throw new Error(`getAllSlugs: ${error.message}`);
  return (data ?? []).map((r: { slug: string }) => r.slug);
}

export async function createPost(post: Post): Promise<void> {
  const { error } = await getSupabase().from("posts").insert({
    slug: post.slug,
    title: post.title,
    date: post.date,
    category: post.category,
    readTime: post.readTime,
    excerpt: post.excerpt,
    content: post.content,
  });

  if (error) throw new Error(`createPost: ${error.message}`);
}

export async function updatePost(
  slug: string,
  data: Partial<Omit<Post, "slug">>
): Promise<boolean> {
  const { error } = await getSupabase()
    .from("posts")
    .update(data)
    .eq("slug", slug);

  if (error) throw new Error(`updatePost: ${error.message}`);
  return true;
}

export async function deletePost(slug: string): Promise<boolean> {
  const { error } = await getSupabase()
    .from("posts")
    .delete()
    .eq("slug", slug);

  if (error) throw new Error(`deletePost: ${error.message}`);
  return true;
}

export async function slugExists(slug: string): Promise<boolean> {
  const { count, error } = await getSupabase()
    .from("posts")
    .select("slug", { count: "exact", head: true })
    .eq("slug", slug);

  if (error) return false;
  return (count ?? 0) > 0;
}
