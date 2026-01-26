import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0a0d] text-[#efe9dc] pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(177,120,65,0.25),transparent_55%)]" />
      <div className="absolute -left-40 top-24 h-80 w-80 rounded-full bg-[#3a1f0a] opacity-60 blur-[120px]" />
      <div className="absolute -right-30 top-10 h-96 w-96 rounded-full bg-[#0f2a33] opacity-70 blur-[140px]" />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 pb-24 pt-20 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
        <section className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f2c37b]" />
            Hedron Archer
          </div>
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">
              Project Vectus
            </p>
            <h1 className="font-(--font-display) text-4xl leading-tight text-[#f7e9cf] sm:text-5xl lg:text-6xl">
              Book One:{" "}
              <span className="font-(--font-display) italic">I am Zoë</span>
            </h1>
            <p className="max-w-xl text-lg font-medium leading-8 text-white/85 sm:text-xl">
              <b>The Trial Was a Lie.</b>
              <br />
              <b>Survival Was Just the Beginning.</b>
            </p>
            <p className="max-w-xl text-lg font-normal leading-8 text-white/85 sm:text-xl">
              A promising medical breakthrough was actually an off-book
              experiment at the edge of human biology and artificial
              intelligence.
            </p>
            <p className="max-w-xl text-lg font-normal leading-8 text-white/85 sm:text-xl">
              Vance Carrick survived.
            </p>
            <p className="max-w-xl text-lg font-normal leading-8 text-white/85 sm:text-xl">
              But survival has consequences.{" "}
            </p>
            <details className="max-w-xl text-lg font-normal leading-8 text-white/85 sm:text-xl">
              <summary className="cursor-pointer select-none text-base font-semibold text-[#f2c37b] transition hover:text-[#ffd7a4] focus:outline-none">
                View more
              </summary>
              <div className="mt-4 space-y-5">
                <p>
                  As fragments of suppressed knowledge emerge, he is pulled into
                  a struggle between corporate power, covert resistance, and an
                  intelligence evolving beyond its intended limits.
                </p>
                <p>
                  <span className="font-black">Project Vectus</span> is a tense,
                  character-driven sci-fi thriller exploring ethical AI,
                  control, and the dangerous gap between intelligence and
                  wisdom.
                </p>
              </div>
            </details>
          </div>

          {/* <form
            action="/api/request-excerpt"
            method="post"
            className="mt-8 space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.9)] backdrop-blur"
          >
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-white/80"
                htmlFor="firstName"
              >
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                required
                className="w-full rounded-xl border border-white/10 bg-[#0c0d10] px-4 py-3 text-base text-white/90 outline-none transition focus:border-[#f2c37b] focus:ring-2 focus:ring-[#f2c37b]/40"
                placeholder="Enter your first name"
                autoComplete="given-name"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-white/80"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-white/10 bg-[#0c0d10] px-4 py-3 text-base text-white/90 outline-none transition focus:border-[#f2c37b] focus:ring-2 focus:ring-[#f2c37b]/40"
                placeholder="you@domain.com"
                autoComplete="email"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#f2c37b] px-6 py-3 text-base font-semibold text-[#1c1207] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(242,195,123,0.35)]"
            >
              Request Excerpt
              <span className="text-lg transition group-hover:translate-x-1">
                →
              </span>
            </button>
            <div className="flex items-center gap-3 text-sm text-white/70">
              <input
                id="notifyRelease"
                name="notifyRelease"
                type="checkbox"
                value="yes"
                defaultChecked
                className="h-4 w-4 rounded border border-white/30 bg-[#0c0d10] text-[#f2c37b] focus:ring-2 focus:ring-[#f2c37b]/40"
              />
              <label htmlFor="notifyRelease" className="select-none">
                Notify me when this releases
              </label>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              Requests are handled personally by the author.
            </p>
          </form> */}
          <a
            href="https://www.amazon.com/dp/B0GJMQL3J8"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#f2c37b] px-6 py-3 text-base font-semibold text-[#1c1207] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(242,195,123,0.35)]"
          >
            Available Now on Amazon
          </a>
        </section>

        <section className="relative">
          <div className="absolute -left-10 top-20 h-40 w-40 rounded-full border border-white/10 bg-white/5 blur-2xl" />
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-b from-white/10 via-white/5 to-transparent p-6 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.95)]">
            <div className="mb-6 space-y-3 text-sm uppercase tracking-[0.3em] text-white/50">
              <p>Excerpt Request</p>
              <p className="text-white/70">Private delivery</p>
            </div>
            <Image
              src="/book-one-cover.png"
              alt="Project Vectus - Book One: I am Zoë cover"
              width={520}
              height={780}
              className="h-auto w-full rounded-2xl object-cover shadow-[0_25px_70px_rgba(0,0,0,0.7)]"
              priority
            />
            <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/50">
              <span>Book One</span>
              <span>I am Zoë</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
