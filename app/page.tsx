"use client";


export default function Home() {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://projectvectus.com/#website",
        url: "https://projectvectus.com/",
        name: "Project Vectus",
        description:
          "Near-future science fiction series exploring ethical artificial intelligence and human consequence.",
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": "https://projectvectus.com/#organization",
        name: "Project Vectus",
        url: "https://projectvectus.com/",
        sameAs: ["https://www.facebook.com/ntspeak/"],
      },
      {
        "@type": "BookSeries",
        "@id": "https://projectvectus.com/#series",
        name: "Project Vectus",
        author: {
          "@type": "Person",
          name: "Glenn Haertlein",
          alternateName: "Hedron Archer",
        },
        hasPart: [
          {
            "@type": "Book",
            name: "Project Vectus Book One: I am Zoe",
            url: "https://www.amazon.com/dp/B0GJMQL3J8",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://projectvectus.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Project Vectus about?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Project Vectus is a near-future science fiction series about ethical AI, control, and the human cost of technology.",
            },
          },
          {
            "@type": "Question",
            name: "Where can I start reading?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Start with Book One: I am Zoe.",
            },
          },
          {
            "@type": "Question",
            name: "How can I get updates?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Use the newsletter sign-up page at /newsletter to receive updates.",
            },
          },
          {
            "@type": "Question",
            name: "What is The Circle?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Circle is a covert network in the Project Vectus world that opposes centralized control and fights to expose hidden systems of influence.",
            },
          },
          {
            "@type": "Question",
            name: "What is Ascentive Dynamics?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ascentive Dynamics is the powerful corporate force at the center of Project Vectus, driving advanced technology initiatives with far-reaching social consequences.",
            },
          },
        ],
      },
    ],
  };


  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0a0d] pt-16 text-[#efe9dc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData),
        }}
      />
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
            <>
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
                      As fragments of suppressed knowledge emerge, he is pulled
                      into a struggle between corporate power, covert
                      resistance, and an intelligence evolving beyond its
                      intended limits.
                    </p>
                    <p>
                      <span className="font-black">Project Vectus</span> is a
                      tense, character-driven sci-fi thriller exploring ethical
                      AI, control, and the dangerous gap between intelligence
                      and wisdom.
                    </p>
                  </div>
                </details>
              </>
          </div>

          <a
            href="https://www.facebook.com/ntspeak/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1877f2] text-white">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                className="h-3.5 w-3.5 fill-current"
              >
                <path d="M13.5 9H16V6h-2.5C11.6 6 10 7.6 10 9.5V11H8v3h2v7h3v-7h2.6l.4-3H13V9.6c0-.3.2-.6.5-.6z" />
              </svg>
            </span>
            Follow me on Facebook
          </a>
          <a
            href="/newsletter"
            className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-[#f2c37b]/40 bg-[#f2c37b]/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f7e9cf] transition hover:-translate-y-0.5 hover:border-[#f2c37b]/70 hover:bg-[#f2c37b]/25"
          >
            Sign up for the newsletter
          </a>
        </section>

        <section className="relative">
          <div className="absolute -left-10 top-20 h-40 w-40 rounded-full border border-white/10 bg-white/5 blur-2xl" />
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-b from-white/10 via-white/5 to-transparent p-6 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.95)]">
            <div className="flex min-h-105 flex-col items-center justify-center gap-6 text-center">
              <h2 className="font-(--font-display) text-3xl leading-tight text-[#f7e9cf] sm:text-4xl">
                Project Vectus: I am Z.O.E.
              </h2>
              <p className="text-lg leading-8 text-white/85">
                is book one of a planned five-book series.
                <br />
                The manuscript is currently in search of a publisher.
              </p>
              <p className="text-lg leading-8 text-white/85">
                <i>Stay tuned to learn more.</i>
              </p>
            </div>
          </div>
          <div className="mt-6 text-center text-[10px] tracking-wide text-white/40">
            Contact author at{" "}
            <a
              href="mailto:h.archer@projectvectus.com"
              className="underline transition-colors hover:text-white/70"
            >
              h.archer@projectvectus.com
            </a>
          </div>
        </section>

        <section className="lg:col-span-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-(--font-display) text-2xl text-[#f7e9cf] sm:text-3xl">
              FAQ
            </h2>
            <div className="mt-4 space-y-4 text-white/85">
              <div>
                <h3 className="font-semibold text-[#f2c37b]">
                  What is Project Vectus about?
                </h3>
                <p>
                  A near-future sci-fi series exploring ethical AI, control, and
                  the human cost of innovation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#f2c37b]">
                  Where should I start?
                </h3>
                <p>
                  Begin with Book One: <i>I am Zoe</i>.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#f2c37b]">
                  How do I get updates?
                </h3>
                <p>
                  Visit{" "}
                  <a href="/newsletter" className="underline">
                    /newsletter
                  </a>{" "}
                  to sign up.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#f2c37b]">
                  What is The Circle?
                </h3>
                <p>
                  The Circle is a covert network in the Project Vectus world
                  that opposes centralized control and fights to expose hidden
                  systems of influence.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#f2c37b]">
                  What is Ascentive Dynamics?
                </h3>
                <p>
                  Ascentive Dynamics is the powerful corporate force at the
                  center of Project Vectus, driving advanced technology
                  initiatives with far-reaching social consequences.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
