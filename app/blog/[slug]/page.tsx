import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, blogPosts } from "../posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.summary.replaceAll("\n", " "),
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0a0d] pt-16 text-[#efe9dc]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(177,120,65,0.22),transparent_55%)]" />
      <div className="absolute -left-40 top-24 h-80 w-80 rounded-full bg-[#3a1f0a] opacity-60 blur-[120px]" />
      <div className="absolute -right-30 top-10 h-96 w-96 rounded-full bg-[#0f2a33] opacity-70 blur-[140px]" />

      <main className="relative mx-auto w-full max-w-4xl px-4 pb-24 pt-14 sm:px-6 sm:pt-20">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 transition hover:border-white/45 hover:text-[#f2c37b]"
          >
            Back To Blog
          </Link>
        </div>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-7">
          <p className="text-xs uppercase tracking-[0.2em] text-white/55">
            {dateFormatter.format(new Date(post.publishedAt))}
          </p>
          <h1 className="mt-2 font-(--font-display) text-4xl leading-tight text-[#f7e9cf] sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 whitespace-pre-line text-base leading-7 text-white/80">
            {post.summary}
          </p>
          <div className="mt-6 space-y-4 text-base leading-7 text-white/85">
            {post.content.map((paragraph, idx) => (
              <p key={`${post.slug}-p-${idx}`}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
