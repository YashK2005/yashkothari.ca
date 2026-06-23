import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, formatDate } from "@/lib/writing";
import SiteHeader from "@/components/site-header";

const SERIF = "'Charter','Bitstream Charter','Sitka Text',Cambria,Georgia,serif";

export const metadata: Metadata = {
  title: "Writing — Yash Kothari",
};

export default async function WritingIndex() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-[#faf9f7] px-6 pb-16 pt-24 text-[#2b2b2b] selection:bg-[#bcd0ff] md:pb-20 md:pt-28">
      <div className="mx-auto max-w-2xl">
        <SiteHeader />

        <header>
          <h1
            style={{ fontFamily: SERIF }}
            className="text-3xl font-semibold tracking-tight text-[#111]"
          >
            Writing
          </h1>
        </header>

        <ul className="mt-10 space-y-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/writing/${post.slug}`} className="group block">
                <p className="font-mono text-xs text-[#8a8a85]">
                  {formatDate(post.date)}
                </p>
                <h2
                  style={{ fontFamily: SERIF }}
                  className="mt-1 text-xl font-semibold text-[#111] transition-colors group-hover:text-[#2563eb]"
                >
                  {post.title}
                </h2>
                {post.description && (
                  <p
                    style={{ fontFamily: SERIF }}
                    className="mt-2 leading-relaxed text-[#555]"
                  >
                    {post.description}
                  </p>
                )}
                <span className="mt-2 inline-block font-mono text-xs text-[#8a8a85] transition-colors group-hover:text-[#2563eb]">
                  read →
                </span>
              </Link>
            </li>
          ))}
          {posts.length === 0 && (
            <li className="text-sm text-[#8a8a85]">Nothing here yet.</li>
          )}
        </ul>
      </div>
    </main>
  );
}
