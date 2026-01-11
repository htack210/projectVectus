import Image from "next/image";

import DrHouston from "@/assets/Dr_Houston_Brada.png";
import JamesArlen from "@/assets/JamesArlen.png";
import KateArlen from "@/assets/KateArlen.png";
import LizGraves from "@/assets/LizGraves.png";
import MorganElaineDawson from "@/assets/MorganElaineDawson.png";
import TalonRiker from "@/assets/TalonRiker.png";
import Aria from "@/assets/Aria.png";
import VanceCarrick from "@/assets/VanceCarrick.png";

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
                  <p className="text-base font-semibold uppercase tracking-[0.2em] text-white/70">
                    What is The Circle?
                  </p>
                </td>
                <td className="w-full p-6 align-top sm:w-7/12">
                  <div className="space-y-3 text-base leading-7 text-white/70">
                    <p>
                      <i>
                        A covert organization operating at the edge of modern
                        science, intelligence, and ethics.
                      </i>
                    </p>
                    <p>
                      The Circle exists for one reason: to observe what others
                      rush to build &mdash; and to ask whether it should exist
                      at all.
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="group">
                <td className="w-full p-6 align-top sm:w-5/12">
                  <div className="relative mx-auto aspect-[3/4] w-full max-w-[180px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10] transition-transform duration-300 group-hover:scale-[1.02] sm:mx-0">
                    <Image
                      src={DrHouston}
                      alt="Dr. Houston Brada"
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                </td>
                <td className="w-full p-6 align-top sm:w-7/12">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white/85">
                      Dr. Houston Brada
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Founder of The Circle
                    </p>
                  </div>
                  <div className="mt-4 max-h-0 space-y-4 overflow-hidden text-base leading-7 text-white/75 opacity-0 transition-all duration-300 group-hover:max-h-[1200px] group-hover:opacity-100">
                    <p>
                      Long before the events of Book One, Brada made a discovery
                      that could have changed the human lifespan forever.
                    </p>
                    <p>
                      Brada realized that extending life was not merely a
                      medical breakthrough &mdash; it was a social, ethical, and
                      moral one. Who would benefit? Who would be left behind?
                      What happens to humanity when technology moves faster than
                      wisdom?
                    </p>
                    <p>That moment of restraint defined him.</p>
                    <p>
                      Brada founded The Circle not to stop progress &mdash; but
                      to ask the hard questions before innovation outruns
                      responsibility. He believes science should advance, but
                      never without reflection, accountability, and humility.
                    </p>
                    <p>
                      Quiet, principled, and deeply thoughtful, Brada is less
                      concerned with what can be done than with whether it
                      should be done &mdash; and what it might cost if no one
                      pauses to consider the consequences.
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="group">
                <td className="w-full p-6 align-top sm:w-5/12">
                  <div className="relative mx-auto aspect-[3/4] w-full max-w-[180px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10] transition-transform duration-300 group-hover:scale-[1.02] sm:mx-0">
                    <Image
                      src={JamesArlen}
                      alt="James Arlen"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </td>
                <td className="w-full p-6 align-top sm:w-7/12">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white/85">
                      Dr. James Arlen
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Lead Scientist &bull; Strategic Director
                    </p>
                  </div>
                  <div className="mt-4 max-h-0 space-y-4 overflow-hidden text-base leading-7 text-white/75 opacity-0 transition-all duration-300 group-hover:max-h-[1200px] group-hover:opacity-100">
                    <p>
                      Arlen is Brada&apos;s protege &mdash; brilliant,
                      disciplined, and driven by a belief that science must
                      ultimately serve people.
                    </p>
                    <p>
                      Where Brada is philosophical, Arlen is practical. He
                      understands theory, but he also understands pressure. When
                      difficult decisions must be made, Arlen is the one who
                      makes them.
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="group">
                <td className="w-full p-6 align-top sm:w-5/12">
                  <div className="relative mx-auto aspect-[3/4] w-full max-w-[180px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10] transition-transform duration-300 group-hover:scale-[1.02] sm:mx-0">
                    <Image
                      src={KateArlen}
                      alt="Kate Arlen"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </td>
                <td className="w-full p-6 align-top sm:w-7/12">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white/85">
                      Kate Arlen
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Family &bull; Anchor &bull; Quiet Strength
                    </p>
                  </div>
                  <div className="mt-4 max-h-0 space-y-4 overflow-hidden text-base leading-7 text-white/75 opacity-0 transition-all duration-300 group-hover:max-h-[1200px] group-hover:opacity-100">
                    <p>
                      Kate Arlen is the emotional counterweight to a life lived
                      at the edge of ethical crisis.
                    </p>
                    <p>
                      Where James Arlen&apos;s world is defined by
                      responsibility, consequence, and impossible decisions,
                      Kate&apos;s is grounded in warmth, humor, and an
                      unshakable sense of what actually matters. She is
                      perceptive without being analytical, empathetic without
                      being naive, and strong in ways that do not require
                      authority or titles.
                    </p>
                    <p>
                      Kate understands the cost of the work her husband does
                      &mdash; not in theory, but in lived experience. Late
                      nights. Interrupted conversations. The weight he carries
                      home even when he tries not to. She does not compete with
                      that weight; she absorbs it, steadies it, and sometimes
                      quietly challenges it.
                    </p>
                    <p>
                      She is not part of The Circle&apos;s operations, but she
                      is part of its human center. In moments when the work
                      threatens to eclipse the people behind it, Kate is the
                      reminder that ethics are not abstract &mdash; they are
                      personal.
                    </p>
                    <p>
                      Calm, wry, and deeply grounded, Kate Arlen represents the
                      life that exists beyond the mission &mdash; and the reason
                      the mission matters at all.
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="group">
                <td className="w-full p-6 align-top sm:w-5/12">
                  <div className="relative mx-auto aspect-[3/4] w-full max-w-[180px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10] transition-transform duration-300 group-hover:scale-[1.02] sm:mx-0">
                    <Image
                      src={LizGraves}
                      alt="Liz Graves"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </td>
                <td className="w-full p-6 align-top sm:w-7/12">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white/85">
                      Dr. Elizabeth Graves
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Chief Engineer
                    </p>
                  </div>
                  <div className="mt-4 max-h-0 space-y-4 overflow-hidden text-base leading-7 text-white/75 opacity-0 transition-all duration-300 group-hover:max-h-[1200px] group-hover:opacity-100">
                    <p>
                      Liz Graves is a systems genius who prefers machines to
                      people &mdash; not because she lacks empathy, but because
                      machines make sense.
                    </p>
                    <p>
                      She designs advanced interfaces, medical systems, and
                      containment technologies that keep the Circle operational.
                      Precision is her language. Emotion is something she is
                      still learning to translate.
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="group">
                <td className="w-full p-6 align-top sm:w-5/12">
                  <div className="relative mx-auto aspect-[3/4] w-full max-w-[180px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10] transition-transform duration-300 group-hover:scale-[1.02] sm:mx-0">
                    <Image
                      src={MorganElaineDawson}
                      alt="Morgan Elaine Dawson"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </td>
                <td className="w-full p-6 align-top sm:w-7/12">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white/85">
                      Morgan Dawson
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Field Operative
                    </p>
                  </div>
                  <div className="mt-4 max-h-0 space-y-4 overflow-hidden text-base leading-7 text-white/75 opacity-0 transition-all duration-300 group-hover:max-h-[1200px] group-hover:opacity-100">
                    <p>
                      Morgan Dawson is calm under pressure, highly trained, and
                      exceptionally perceptive. She has built her life around
                      control &mdash; of environments, of threats, and of
                      herself.
                    </p>
                    <p>
                      She believes distance keeps people safe. She may be wrong.
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="group">
                <td className="w-full p-6 align-top sm:w-5/12">
                  <div className="relative mx-auto aspect-[3/4] w-full max-w-[180px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10] transition-transform duration-300 group-hover:scale-[1.02] sm:mx-0">
                    <Image
                      src={TalonRiker}
                      alt="Talon Riker"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </td>
                <td className="w-full p-6 align-top sm:w-7/12">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white/85">
                      Talon Riker
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Android Operative
                    </p>
                  </div>
                  <div className="mt-4 max-h-0 space-y-4 overflow-hidden text-base leading-7 text-white/75 opacity-0 transition-all duration-300 group-hover:max-h-[1200px] group-hover:opacity-100">
                    <p>
                      Talon was designed to be flawless: precise, loyal, and
                      fearless.
                    </p>
                    <p>
                      He executes missions with machine efficiency and
                      unwavering discipline. What he lacks is not intelligence
                      &mdash; but experience. In a world shaped by emotion, that
                      omission may matter more than anyone anticipated.
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="group">
                <td className="w-full p-6 align-top sm:w-5/12">
                  <div className="relative mx-auto aspect-[3/4] w-full max-w-[180px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10] transition-transform duration-300 group-hover:scale-[1.02] sm:mx-0">
                    <Image
                      src={Aria}
                      alt="Aria"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </td>
                <td className="w-full p-6 align-top sm:w-7/12">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white/85">Aria</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Android Adaptive AI System
                    </p>
                  </div>
                  <div className="mt-4 max-h-0 space-y-4 overflow-hidden text-base leading-7 text-white/75 opacity-0 transition-all duration-300 group-hover:max-h-[1200px] group-hover:opacity-100">
                    <p>
                      Aria is an artificial intelligence learning humanity not
                      through instruction &mdash; but through observation.
                    </p>
                    <p>
                      She asks questions others avoid. She notices patterns
                      others miss. And she is beginning to explore what it means
                      to care.
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="group">
                <td className="w-full p-6 align-top sm:w-5/12">
                  <div className="relative mx-auto aspect-[3/4] w-full max-w-[180px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10] transition-transform duration-300 group-hover:scale-[1.02] sm:mx-0">
                    <Image
                      src={VanceCarrick}
                      alt="Vance Carrick"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </td>
                <td className="w-full p-6 align-top sm:w-7/12">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white/85">
                      Vance Carrick
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Civilian Consultant
                    </p>
                  </div>
                  <div className="mt-4 max-h-0 space-y-4 overflow-hidden text-base leading-7 text-white/75 opacity-0 transition-all duration-300 group-hover:max-h-[1200px] group-hover:opacity-100">
                    <p>
                      Vance is not a scientist. Not a soldier. Not an operative.
                    </p>
                    <p>
                      He is a former athlete whose life was altered by forces he
                      barely understands &mdash; and whose instincts often prove
                      more valuable than raw data.
                    </p>
                    <p>
                      His presence inside the Circle raises an uncomfortable
                      question:
                    </p>
                    <p>What if being human is the missing variable?</p>
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
