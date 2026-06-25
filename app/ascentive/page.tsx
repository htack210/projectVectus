import Image from "next/image";
import type { Metadata } from "next";
import ADLogo from "@/assets/AD_White.png";

export const metadata: Metadata = {
  title: "Ascentive Dynamics",
  description: "Humanity, optimized through precision science and adaptive intelligence.",
};

export default function AscentivePage() {
  return (
    <div className="min-h-screen bg-[#0d0d10] pt-16 text-white">

      {/* Hero */}
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-20 text-center">
        <Image
          src={ADLogo}
          alt="Ascentive Dynamics"
          width={320}
          height={120}
          className="mb-12 object-contain"
          priority
        />

        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
          Precision Science · Adaptive Intelligence
        </p>

        <h1 className="font-(--font-display) mb-6 text-5xl leading-tight text-white sm:text-6xl">
          Humanity, optimized.
        </h1>

        <p className="mb-10 max-w-xl text-lg leading-8 text-white/65">
          Ascentive Dynamics is the organization belonging to the antagonist in
          the <em>Project Vectus</em> series. Ascentive created Zoë.
        </p>

        <a
          href="https://www.ascentivedynamics.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#e0157a]/40 bg-[#e0157a]/15 px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#e0157a] transition hover:border-[#e0157a]/70 hover:bg-[#e0157a]/25"
        >
          Visit the Official Site
          <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      {/* Footer note */}
      <div className="mx-auto max-w-4xl px-6 pb-16 text-center">
        <p className="text-xs text-white/25">
          This page is fictional. Ascentive Dynamics is an organization from the{" "}
          <em>Project Vectus</em> sci-fi series.
        </p>
      </div>
    </div>
  );
}
