import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const WRITING_DIR = path.join(process.cwd(), "content/writing");

export interface PostMeta {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  author?: string;
  description?: string;
}

export interface Post extends PostMeta {
  content: string;
}

function toISODate(value: unknown): string {
  if (!value) return "";
  const d = value instanceof Date ? value : new Date(String(value));
  return Number.isNaN(d.getTime()) ? String(value) : d.toISOString().slice(0, 10);
}

async function readPost(slug: string): Promise<Post> {
  const raw = await fs.readFile(path.join(WRITING_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: String(data.title ?? slug),
    date: toISODate(data.date),
    author: data.author ? String(data.author) : undefined,
    description: data.description ? String(data.description) : undefined,
    content,
  };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  let files: string[];
  try {
    files = await fs.readdir(WRITING_DIR);
  } catch {
    return [];
  }
  const slugs = files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
  const posts = await Promise.all(slugs.map(readPost));
  return posts
    .map(({ content: _content, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getAllSlugs(): Promise<string[]> {
  return (await getAllPosts()).map((p) => p.slug);
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    return await readPost(slug);
  } catch {
    return null;
  }
}

export function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
