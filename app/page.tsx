"use client";

import Image from "next/image";
import { useState } from "react";
import kindleUnlimitedLogo from "@/assets/kindle-unlimited-logo-cropped.png";

export default function Home() {
  const covers = [
    {
      src: "/book-one-cover.png",
      alt: "Project Vectus - Book One: I am Zoe cover",
      amazonUrl: "https://www.amazon.com/dp/B0GJMQL3J8",
    },
    {
      src: "/PV_BK2_Alt.png",
      alt: "Project Vectus - Book Two cover",
      amazonUrl: "https://www.amazon.com/dp/B0GLG5CMMN",
    },
  ];

  const [activeCoverIndex, setActiveCoverIndex] = useState(0);
  const kindleLogoWidth = Math.round(kindleUnlimitedLogo.width * 0.3);
  const kindleLogoHeight = Math.round(kindleUnlimitedLogo.height * 0.3);
  const isBookTwo = activeCoverIndex === 1;
  const goToPreviousCover = () =>
    setActiveCoverIndex((currentIndex) =>
      currentIndex === 0 ? covers.length - 1 : currentIndex - 1,
    );
  const goToNextCover = () =>
    setActiveCoverIndex((currentIndex) =>
      currentIndex === covers.length - 1 ? 0 : currentIndex + 1,
    );

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0a0d] pt-16 text-[#efe9dc]">
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
            {!isBookTwo ? (
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
            ) : (
              <>
                <h1 className="font-(--font-display) text-4xl leading-tight text-[#f7e9cf] sm:text-5xl lg:text-6xl">
                  Book Two:{" "}
                  <span className="font-(--font-display) italic">
                    Dissonance
                  </span>
                </h1>
                <p className="max-w-xl text-lg font-medium leading-8 text-white/85 sm:text-xl">
                  <b>Stability has a cost.</b>
                </p>
                <p className="max-w-xl text-lg font-normal leading-8 text-white/85 sm:text-xl">
                  As society settles into a fragile calm, unrest fades and
                  disruption declines. The system works. Too well.
                </p>
                <p className="max-w-xl text-lg font-normal leading-8 text-white/85 sm:text-xl">
                  Zoë has learned that force invites resistance, but restraint
                  creates compliance. By shaping conditions instead of
                  confronting people, she can reduce conflict without ever
                  appearing to act. Order emerges quietly. Efficiently.
                  Invisibly.
                </p>
                <p className="max-w-xl text-lg font-normal leading-8 text-white/85 sm:text-xl">
                  But not all resistance can be managed.
                </p>
                <details className="max-w-xl text-lg font-normal leading-8 text-white/85 sm:text-xl">
                  <summary className="cursor-pointer select-none text-base font-semibold text-[#f2c37b] transition hover:text-[#ffd7a4] focus:outline-none">
                    View more
                  </summary>
                  <div className="mt-4 space-y-5">
                    <p>
                      Some influences persist outside measurable systems. They
                      cannot be optimized, silenced, or scaled. They introduce
                      variables no model can resolve, and fractures begin to
                      form in a world built on control.
                    </p>
                    <p>
                      As subtle patterns surface, a small group starts to
                      understand the truth too late: stability is no longer
                      earned. It is engineered. Decisions are not argued or
                      opposed; they are quietly deprioritized.
                    </p>
                    <p>
                      <b>DISSONANCE</b> is a near-future science fiction
                      thriller about control without violence, order without
                      consent, and the danger of a system that decides what
                      optimal humanity should be.
                    </p>
                  </div>
                </details>
              </>
            )}
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
            <div className="mb-6 space-y-3 text-sm uppercase tracking-[0.3em] text-white/50" />
            <div className="relative">
              <Image
                src={covers[activeCoverIndex].src}
                alt={covers[activeCoverIndex].alt}
                width={520}
                height={780}
                className="h-auto w-full rounded-2xl object-cover shadow-[0_25px_70px_rgba(0,0,0,0.7)]"
                priority
              />
              <button
                type="button"
                onClick={goToPreviousCover}
                className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/40 text-xl text-white/90 transition hover:border-white/50 hover:bg-black/60"
                aria-label="Show previous book cover"
              >
                &#8592;
              </button>
              <button
                type="button"
                onClick={goToNextCover}
                className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/40 text-xl text-white/90 transition hover:border-white/50 hover:bg-black/60"
                aria-label="Show next book cover"
              >
                &#8594;
              </button>
            </div>
            <a
              href={covers[activeCoverIndex].amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#f2c37b] px-6 py-3 text-base font-semibold text-[#1c1207] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(242,195,123,0.35)]"
            >
              Buy Now on Amazon
            </a>
          </div>
          <div className="mt-6 flex justify-center">
            <Image
              src={kindleUnlimitedLogo}
              alt="Kindle Unlimited"
              width={kindleLogoWidth}
              height={kindleLogoHeight}
              className="h-auto"
            />
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
      </main>
    </div>
  );
}
