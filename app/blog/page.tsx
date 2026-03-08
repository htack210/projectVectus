import type { Metadata } from "next";
import Link from "next/link";
import { getSortedBlogPosts } from "./posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Project Vectus blog updates from Glenn Haertlein (Hedron Archer).",
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export default function BlogPage() {
  const sortedPosts = getSortedBlogPosts();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0a0d] pt-16 text-[#efe9dc]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(177,120,65,0.22),transparent_55%)]" />
      <div className="absolute -left-40 top-24 h-80 w-80 rounded-full bg-[#3a1f0a] opacity-60 blur-[120px]" />
      <div className="absolute -right-30 top-10 h-96 w-96 rounded-full bg-[#0f2a33] opacity-70 blur-[140px]" />

      <main className="relative mx-auto w-full max-w-4xl px-4 pb-24 pt-14 sm:px-6 sm:pt-20">
        <section className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f2c37b]" />
            Hedron Archer
          </div>
          <h1 className="font-(--font-display) text-4xl leading-tight text-[#f7e9cf] sm:text-5xl">
            Blog
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-white/85 sm:text-xl">
            Updates, notes, and behind-the-scenes posts.
          </p>
          {/* BLOGGING INSTRUCTIONS */}
          {/* <p className="rounded-xl border border-[#f2c37b]/35 bg-[#f2c37b]/10 px-4 py-3 text-sm leading-6 text-[#f7e9cf]/90">
            To add or edit posts, update{" "}
            <code className="rounded bg-black/25 px-1.5 py-0.5">
              app/blog/posts.tsx
            </code>
            . Visitors can read blog posts but cannot edit them through the
            website.
          </p> */}
        </section>

        <section className="mt-10 space-y-8">
          {sortedPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-7"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                {dateFormatter.format(new Date(post.publishedAt))}
              </p>
              <h2 className="mt-2 font-(--font-display) text-3xl leading-tight text-[#f7e9cf]">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors hover:text-[#f2c37b]"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 whitespace-pre-line text-base leading-7 text-white/80">
                {post.summary}
              </p>
              <div className="mt-6">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 transition hover:border-white/45 hover:text-[#f2c37b]"
                >
                  Open Post Link
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
