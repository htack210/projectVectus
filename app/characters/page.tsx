import Image from "next/image";

import DrHouston from "@/assets/Dr_Houston_Brada.png";

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-[#0b0a0d] text-[#efe9dc]">
      <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-16">
        <header className="mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            Project Vectus
          </p>
          <h1 className="mt-4 font-(--font-display) text-4xl text-[#f7e9cf] sm:text-5xl">
            Meet The Circle
          </h1>
        </header>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_35px_90px_-70px_rgba(0,0,0,0.9)]">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className="w-full p-6 align-top sm:w-5/12">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10]">
                    <Image
                      src={DrHouston}
                      alt="Dr. Houston Brada"
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                </td>
                <td className="w-full p-6 align-top sm:w-7/12">
                  <div className="space-y-4 text-base leading-7 text-white/75">
                    <p className="text-lg font-semibold text-white/85">
                      Founder of The Circle
                    </p>
                    <p>
                      Long before the events of Book One, Dr. Houston Brada made
                      a discovery that could have changed the human lifespan
                      forever.
                    </p>
                    <p>Instead of celebrating, he hesitated.</p>
                    <p>
                      Brada realized that extending life was not merely a medical
                      breakthrough &mdash; it was a social, ethical, and moral one.
                      Who would benefit? Who would be left behind? What happens
                      to humanity when technology moves faster than wisdom?
                    </p>
                    <p>That moment of restraint defined him.</p>
                    <p>
                      Brada founded The Circle not to stop progress &mdash; but to
                      ask the hard questions before innovation outruns
                      responsibility. He believes science should advance, but
                      never without reflection, accountability, and humility.
                    </p>
                    <p>
                      Quiet, principled, and deeply thoughtful, Brada is less
                      concerned with what can be done than with whether it should
                      be done &mdash; and what it might cost if no one pauses to
                      consider the consequences.
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
