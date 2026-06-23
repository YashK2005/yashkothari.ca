import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllSlugs, getPost, formatDate } from "@/lib/writing";
import PostMarkdown from "@/components/post-markdown";
import SiteHeader from "@/components/site-header";

const SERIF = "'Charter','Bitstream Charter','Sitka Text',Cambria,Georgia,serif";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Yash Kothari`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function WritingPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#faf9f7] px-6 pb-16 pt-24 text-[#2b2b2b] selection:bg-[#bcd0ff] md:pb-20 md:pt-28">
      <article className="mx-auto max-w-2xl">
        <SiteHeader />

        <header className="border-b border-[#e6e4dd] pb-6">
          <h1
            style={{ fontFamily: SERIF }}
            className="text-3xl font-semibold leading-snug tracking-tight text-[#111] md:text-[2.25rem]"
          >
            {post.title}
          </h1>
          <p className="mt-3 font-mono text-sm text-[#8a8a85]">
            {post.author && <>{post.author} · </>}
            {formatDate(post.date)}
          </p>
        </header>

        <PostMarkdown content={post.content} />

        <footer className="mt-12 border-t border-[#e6e4dd] pt-6">
          <Link
            href="/writing"
            className="font-mono text-sm text-[#6b6b6b] transition-colors hover:text-[#111]"
          >
            ← all writing
          </Link>
        </footer>
      </article>
    </main>
  );
}
