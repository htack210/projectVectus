import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import CircleLogo from "@/assets/CircleGyroscopeLogoColor-Clear.png";

export const metadata: Metadata = {
  title: "The Circle — Research Foundation",
  robots: { index: false, follow: false },
};

export default function CirclePage() {
  return (
    <div className="relative min-h-screen bg-[#e8e0d0] pt-16 text-[#1a1a2e]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,190,170,0.4),transparent_60%)]" />

      <main className="relative mx-auto w-full max-w-2xl px-6 pb-24 pt-16">
        {/* Logo */}
        <div className="mb-14 flex justify-center">
          <Image
            src={CircleLogo}
            alt="The Circle"
            width={380}
            height={380}
            className="opacity-95"
            priority
          />
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-(--font-display) text-4xl text-[#1a1a2e] sm:text-5xl">
            The Circle
          </h1>
          <p className="mt-5 italic text-[#5c4a1e]">Festina lente.</p>
          <p className="mt-1 text-sm text-[#1a1a2e]/55">Make haste slowly.</p>
          <div className="mx-auto mt-6 h-px w-16 bg-[#1a1a2e]/30" />
        </div>

        {/* Document body */}
        <div className="space-y-12 text-[15px] leading-7 text-[#1a1a2e]/80">

          {/* The questions we exist to ask */}
          <section>
            <h2 className="font-(--font-display) mb-4 text-2xl text-[#1a1a2e]">
              The questions we exist to ask
            </h2>
            <p className="mb-4">
              Scientific capability advances faster than the wisdom to wield it. This has always been true. What is new is the speed — and the stakes.
            </p>
            <p className="mb-4">
              The Circle is a multidisciplinary research foundation dedicated to the careful examination of emerging scientific and technological capability. Founded by Dr. Houston Brada, our standing council brings together physicians, scientists, theologians, economists, legal scholars, philosophers, and engineers in deliberate, unhurried conversation about the questions our era has not yet learned to ask carefully enough.
            </p>
            <p>
              We do not chase headlines. We do not pursue contracts. We respond to inquiries that warrant the time required to answer them well.
            </p>
          </section>

          <div className="h-px bg-[#1a1a2e]/15" />

          {/* A deliberately broad table */}
          <section>
            <h2 className="font-(--font-display) mb-4 text-2xl text-[#1a1a2e]">
              A deliberately broad table
            </h2>
            <p className="mb-4">
              Our council is composed of practitioners from disciplines that do not ordinarily share a table. This is by design.
            </p>
            <p className="mb-4">
              When a physicist, an economist, and a theologian arrive at the same conclusion, that conclusion is not merely a consensus of like minds. It is something closer to a convergence of independent perspectives — and we have found, across the decades of our work, that such convergence is rare, demanding, and worth the effort it requires.
            </p>
            <p>
              Our members serve without compensation tied to the outcomes they examine. Our findings are published under the foundation&apos;s name, never any individual&apos;s. We hold no patents. We endorse no products. We accept no funding from organizations whose work we have been asked to consider.
            </p>
          </section>

          <div className="h-px bg-[#1a1a2e]/15" />

          {/* What we examine */}
          <section>
            <h2 className="font-(--font-display) mb-4 text-2xl text-[#1a1a2e]">
              What we examine
            </h2>
            <p className="mb-4">
              Capability is not the same as progress. A breakthrough may serve humanity, or it may serve only the breakthrough — and the difference is not always visible from inside the work that produced it.
            </p>
            <p className="mb-4">
              The Circle convenes when the <em>how</em> of a scientific or technological pursuit risks being lost in the <em>why</em>. We examine that gap. We document our findings. We offer counsel — to researchers, to institutions, to regulators, and, where appropriate, to the public.
            </p>
            <p>
              We do not police. We do not prosecute. We do not own outcomes. What we do is hold the table open.
            </p>
          </section>

          <div className="h-px bg-[#1a1a2e]/15" />

          {/* A word from our founder */}
          <section>
            <h2 className="font-(--font-display) mb-6 text-2xl text-[#1a1a2e]">
              A word from our founder
            </h2>
            <blockquote className="border-l-2 border-[#5c4a1e]/40 pl-6">
              <p className="mb-4 italic text-[#1a1a2e]/75">
                &ldquo;We are not the first to ask these questions. We will not be the last. Our task is only to ask them carefully — and to refuse the speed at which carelessness becomes inevitable.&rdquo;
              </p>
              <p className="text-sm font-semibold text-[#5c4a1e]">— Dr. Houston Brada, Founder</p>
            </blockquote>
          </section>

          <div className="h-px bg-[#1a1a2e]/15" />

          {/* Visit */}
          <section>
            <h2 className="font-(--font-display) mb-4 text-2xl text-[#1a1a2e]">
              Visit
            </h2>
            <p>
              The Circle&apos;s headquarters is built into a working cavern system, portions of which are open to the public as part of our heritage and education program. Visitors are welcome year-round. Tour proceeds support our independent research fund.
            </p>
          </section>

          <div className="h-px bg-[#1a1a2e]/15" />

          {/* Correspondence */}
          <section>
            <h2 className="font-(--font-display) mb-4 text-2xl text-[#1a1a2e]">
              Correspondence
            </h2>
            <p>
              Researchers, institutions, and members of the public are welcome to write to us. We respond as time and careful consideration allow.
            </p>
          </section>

          <div className="h-px bg-[#1a1a2e]/15" />

          {/* Action links */}
          <div className="flex flex-wrap gap-4 pt-2">
            {["Inquire", "Published Findings"].map((label) => (
              <button
                key={label}
                className="rounded border border-[#1a1a2e]/30 px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#1a1a2e]/60 transition-colors hover:border-[#5c4a1e]/60 hover:text-[#5c4a1e]"
              >
                {label}
              </button>
            ))}
            <Link
              href="/circle/tours"
              className="rounded border border-[#1a1a2e]/30 px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#1a1a2e]/60 transition-colors hover:border-[#5c4a1e]/60 hover:text-[#5c4a1e]"
            >
              Visit the Cavern System
            </Link>
            <Link
              href="/circle/onboarding"
              className="rounded border border-[#1a1a2e]/30 px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#1a1a2e]/60 transition-colors hover:border-[#5c4a1e]/60 hover:text-[#5c4a1e]"
            >
              Member Onboarding
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
