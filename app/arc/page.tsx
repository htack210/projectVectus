import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become an ARC Reader",
  description:
    "Read I Am Z.O.E. before launch. Learn what an ARC reader is, what you'll get, and what's expected.",
};

const timeline = [
  { date: "November 29", event: "Sign-ups close" },
  { date: "December 1", event: "ARC links go out" },
  { date: "January 3", event: "Read-by date" },
  { date: "January 12", event: "Launch day: post your review" },
];

const faqs = [
  {
    question: "Do I need a Kindle?",
    answer:
      "No. The link works in any web browser, on a computer, tablet, or phone.",
  },
  {
    question: "What if I can't finish in time?",
    answer: "Life happens. Just let me know. I'd rather hear from you than wonder.",
  },
  {
    question: "What if I didn't enjoy it?",
    answer:
      "Please review it anyway, honestly. A thoughtful three-star review is more useful than silence.",
  },
  {
    question: "What happens to my email address?",
    answer:
      "It's used only to send your ARC and launch-day reminders. It's never shared or sold.",
  },
];

const headingClass =
  "font-(--font-display) text-2xl text-[#f7e9cf] sm:text-3xl";
const bodyClass = "text-lg font-normal leading-8 text-white/85";
const listClass = `${bodyClass} list-disc space-y-2 pl-6 marker:text-[#f2c37b]`;

export default function ArcPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0a0d] pt-16 text-[#efe9dc]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(177,120,65,0.25),transparent_55%)]" />
      <div className="absolute -left-40 top-24 h-80 w-80 rounded-full bg-[#3a1f0a] opacity-60 blur-[120px]" />
      <div className="absolute -right-30 top-10 h-96 w-96 rounded-full bg-[#0f2a33] opacity-70 blur-[140px]" />

      <main className="relative mx-auto w-full max-w-3xl px-4 pb-24 pt-14 sm:px-6 sm:pt-20">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f2c37b]" />
            Advance Reader Copy
          </div>
          <h1 className="font-(--font-display) text-4xl leading-tight text-[#f7e9cf] sm:text-5xl lg:text-6xl">
            Become an ARC Reader
          </h1>
          <p className="text-xl leading-8 text-white/70">
            Read <em>I Am Z.O.E.</em> before anyone else.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          <section className="space-y-4">
            <h2 className={headingClass}>What&rsquo;s an ARC?</h2>
            <p className={bodyClass}>
              ARC stands for <strong>Advance Reader Copy</strong>. It&rsquo;s a
              free copy of a book given to readers before the book is
              published. In return, ARC readers post an honest review around
              launch day. Those early reviews help new readers decide whether
              the book is for them, and for a new series they make a real
              difference.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={headingClass}>About the book</h2>
            <p className={bodyClass}>
              <em>I Am Z.O.E.</em> is a near-future sci-fi thriller:
              fast-paced and character-driven, not heavy on technical science.
              It&rsquo;s the first novel in the Project Vectus series.
            </p>
            <p className={bodyClass}>
              The book is written from a Christian worldview, and faith shows
              up in the characters&rsquo; choices, not in sermons.{" "}
              <strong>
                You don&rsquo;t need to share my beliefs to be an ARC reader.
              </strong>{" "}
              Readers of every background are welcome.
            </p>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className={bodyClass}>
                <strong className="text-[#f7e9cf]">Content:</strong> Clean. No
                profanity or sexual content. There&rsquo;s sci-fi peril and
                some violence.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className={headingClass}>What you&rsquo;ll get</h2>
            <ul className={listClass}>
              <li>
                A free advance copy through a private reader link. It works in
                your browser or on your Kindle.
              </li>
              <li>An early look at a new series before it launches.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className={headingClass}>What I ask</h2>
            <ul className={listClass}>
              <li>
                <strong>Read by Sunday, January 3, 2027.</strong>
              </li>
              <li>
                <strong>Post an honest review</strong> on Goodreads (anytime
                before launch) and on Amazon or BookBub within a week of
                launch on <strong>January 12, 2027</strong>. I&rsquo;ll email
                you the links.
              </li>
              <li>
                <strong>Keep the link to yourself.</strong> Please
                don&rsquo;t share or forward your copy.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className={headingClass}>Honest means honest</h2>
            <p className={bodyClass}>
              I&rsquo;m not asking for a five-star review. I&rsquo;m asking for{" "}
              <em>your</em> review. If something didn&rsquo;t work for you, say
              so. Honest reviews help readers find the right books, and they
              help me write better ones.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={headingClass}>Timeline</h2>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 text-sm uppercase tracking-[0.2em] text-white/60">
                    <th scope="col" className="px-6 py-4 font-medium">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-4 font-medium">
                      What happens
                    </th>
                  </tr>
                </thead>
                <tbody className="text-lg text-white/85">
                  {timeline.map((row) => (
                    <tr
                      key={row.date}
                      className="border-b border-white/10 last:border-b-0"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-semibold text-[#f2c37b]">
                        {row.date}
                      </td>
                      <td className="px-6 py-4">{row.event}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Common questions</h2>
            {faqs.map((faq) => (
              <div key={faq.question} className="space-y-2">
                <h3 className="text-lg font-semibold text-[#f7e9cf]">
                  {faq.question}
                </h3>
                <p className={bodyClass}>{faq.answer}</p>
              </div>
            ))}
          </section>

          <section className="pt-4 text-center">
            <a
              href="https://forms.gle/51bbaqaB5RytaApN7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#f2c37b]/40 bg-[#f2c37b]/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f7e9cf] transition hover:-translate-y-0.5 hover:border-[#f2c37b]/70 hover:bg-[#f2c37b]/25 sm:w-auto sm:px-10"
            >
              Sign up to be an ARC reader →
            </a>
            <p className="mt-4 text-sm text-white/60">
              Spots are limited. Sign-ups close November 29.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
