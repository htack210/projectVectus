import Link from "next/link";

export default function RequestErrorPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0a0d] text-[#efe9dc]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(177,120,65,0.25),transparent_60%)]" />
      <div className="absolute -bottom-30 -left-20 h-72 w-72 rounded-full bg-[#2b0f1a] opacity-70 blur-[120px]" />
      <div className="absolute -right-30 top-10 h-80 w-80 rounded-full bg-[#0f2a33] opacity-70 blur-[140px]" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-3xl flex-col items-start justify-center gap-6 px-6 py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">
          Delivery paused
        </p>
        <h1 className="font-(--font-display) text-4xl text-[#f7e9cf] sm:text-5xl">
          We could not send your request.
        </h1>
        <p className="text-lg leading-8 text-white/75">
          Please try again in a moment, or email admin@projectvectus.com
          directly and we will handle it personally.
        </p>
        <Link
          className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-[#f2c37b] hover:text-[#f2c37b]"
          href="/"
        >
          Return to request
        </Link>
      </main>
    </div>
  );
}
