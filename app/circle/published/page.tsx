import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Circle — Published Findings",
  robots: { index: false, follow: false },
};

export default function PublishedFindingsPage() {
  return (
    <div className="relative min-h-screen bg-[#e8e0d0] pt-16 text-[#1a1a2e]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,190,170,0.4),transparent_60%)]" />

      <main className="relative mx-auto w-full max-w-2xl px-6 pb-24 pt-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#1a1a2e]/40">
            The Circle
          </p>
          <h1 className="font-(--font-display) text-4xl text-[#1a1a2e] sm:text-5xl">
            Published Findings
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-[#1a1a2e]/30" />
        </div>

        {/* Body */}
        <div className="space-y-12 text-[15px] leading-7 text-[#1a1a2e]/80">

          <section>
            <h2 className="font-(--font-display) mb-4 text-2xl text-[#1a1a2e]">
              On the question of publication
            </h2>
            <p className="mb-4">
              The Circle does not publish in the conventional academic sense. We do not maintain a journal. We do not seek citation. We do not measure our work by the volume of its dissemination.
            </p>
            <p>
              The majority of our findings take the form of private counsel — reports prepared at the request of specific institutions, governments, and research bodies, and provided to those parties directly. We consider this work to belong to the inquiry that prompted it, not to a public audience.
            </p>
          </section>

          <div className="h-px bg-[#1a1a2e]/15" />

          <section>
            <h2 className="font-(--font-display) mb-4 text-2xl text-[#1a1a2e]">
              What we make available
            </h2>
            <p className="mb-4">
              A limited body of our work is released publicly, on a selective basis. Public release is reserved for findings whose relevance extends beyond the originating inquiry — typically work on questions of broad methodological, governance, or societal consequence.
            </p>
            <p className="mb-4">
              We do not publish work that would compromise the participants in an inquiry, the institutions that commissioned it, or the integrity of investigations still underway.
            </p>
            <p>
              Findings released publicly are issued under the foundation&apos;s name, without individual attribution, and made available without charge to readers with a demonstrated interest in the subject matter.
            </p>
          </section>

          <div className="h-px bg-[#1a1a2e]/15" />

          <section>
            <h2 className="font-(--font-display) mb-4 text-2xl text-[#1a1a2e]">
              Why we publish this way
            </h2>
            <p className="mb-4">
              We have found, across the decades of our work, that the most consequential questions are rarely settled by their announcement. They are settled — when they are settled at all — by careful consideration among those positioned to act on the answers.
            </p>
            <p className="mb-4">
              Conventional publication often pulls in the opposite direction. It rewards speed, visibility, and the appearance of certainty. It creates pressure to conclude where conclusion is premature. It can, in our experience, mistake the discussion for the work itself.
            </p>
            <p>
              We are not opposed to publication. We are committed to the kind of publication that serves the inquiry rather than competing with it.
            </p>
          </section>

          <div className="h-px bg-[#1a1a2e]/15" />

          <section>
            <h2 className="font-(--font-display) mb-4 text-2xl text-[#1a1a2e]">
              Inquiries
            </h2>
            <p className="mb-6">
              Researchers, journalists, institutional ethics officers, and members of the public are welcome to request information regarding our work. We respond as carefully and as promptly as our schedule allows.
            </p>
            <p className="mb-8">
              We do not maintain a mailing list. We do not employ a press office. Communications received in good faith are answered in good faith.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded border border-[#1a1a2e]/30 px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#1a1a2e]/60 transition-colors hover:border-[#5c4a1e]/60 hover:text-[#5c4a1e]">
                Submit an Inquiry
              </button>
            </div>
          </section>

          <div className="h-px bg-[#1a1a2e]/15" />

          <div className="pt-2">
            <Link
              href="/circle"
              className="rounded border border-[#1a1a2e]/30 px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#1a1a2e]/60 transition-colors hover:border-[#5c4a1e]/60 hover:text-[#5c4a1e]"
            >
              Return
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
