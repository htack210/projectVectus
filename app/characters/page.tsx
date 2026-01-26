import Image from "next/image";

import DrHouston from "@/assets/Sketch_HoustonBrada.png";
import DrHoustonColor from "@/assets/Dr_Houston_Brada.png";
import JamesArlen from "@/assets/Sketch_JamesArlen.png";
import JamesArlenColor from "@/assets/JamesArlen.png";
import KateArlen from "@/assets/Sketch_KateArlen.png";
import KateArlenColor from "@/assets/KateArlen.png";
import LizGraves from "@/assets/Sketch_LizGraves.png";
import LizGravesColor from "@/assets/LizGraves.png";
import MorganElaineDawson from "@/assets/Sketch_MorganElaineDawson.png";
import MorganElaineDawsonColor from "@/assets/MorganElaineDawson.png";
import TalonRiker from "@/assets/Sketch_TalonRiker.png";
import TalonRikerColor from "@/assets/TalonRiker.png";
import Aria from "@/assets/Sketch_Aria.png";
import AriaColor from "@/assets/Aria.png";
import VanceCarrick from "@/assets/Sketch_VanceCarrick.png";
import VanceCarrickColor from "@/assets/VanceCarrick.png";

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-[#0b0a0d] text-[#efe9dc] pt-16">
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
          <div className="divide-y divide-white/10">
            <section className="p-6">
              <div className="space-y-6 sm:grid sm:grid-cols-[5fr_7fr] sm:gap-8 sm:space-y-0">
                <p className="text-base font-semibold uppercase tracking-[0.2em] text-white/70">
                  What is The Circle?
                </p>
                <div className="space-y-3 text-base leading-7 text-white/70">
                  <p>
                    <i>
                      A covert organization operating at the edge of modern
                      science, intelligence, and ethics.
                    </i>
                  </p>
                  <p>
                    The Circle exists for one reason: to observe what others
                    rush to build &mdash; and to ask whether it should exist at
                    all.
                  </p>
                </div>
              </div>
            </section>
            <section className="group p-6">
              <div className="sm:grid sm:grid-cols-[180px_1fr] sm:gap-8">
                <div className="relative float-left mb-3 mr-4 aspect-[3/4] w-28 max-w-[140px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10] sm:float-none sm:mx-0 sm:mb-0 sm:mr-0 sm:w-full sm:max-w-[180px]">
                  <Image
                    src={DrHouston}
                    alt="Dr. Houston Brada"
                    className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    priority
                  />
                  <Image
                    src={DrHoustonColor}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white/85">
                      Dr. Houston Brada
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Founder of The Circle
                    </p>
                  </div>
                  <div className="mt-4 space-y-4 text-base leading-7 text-white/75">
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
                </div>
              </div>
            </section>
            <section className="group p-6">
              <div className="sm:grid sm:grid-cols-[180px_1fr] sm:gap-8">
                <div className="relative float-left mb-3 mr-4 aspect-[3/4] w-28 max-w-[140px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10] sm:float-none sm:mx-0 sm:mb-0 sm:mr-0 sm:w-full sm:max-w-[180px]">
                  <Image
                    src={JamesArlen}
                    alt="James Arlen"
                    className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <Image
                    src={JamesArlenColor}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white/85">
                      Dr. James Arlen
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Lead Scientist &bull; Strategic Director
                    </p>
                  </div>
                  <div className="mt-4 space-y-4 text-base leading-7 text-white/75">
                    <p>
                      Dr. James Arlen stands at the intersection of medicine,
                      neuroscience, and ethics. Where Brada is philosophical,
                      Arlen is practical.
                    </p>
                    <p>
                      He holds both a medical degree and a doctorate in
                      neuroscience, a combination that uniquely qualifies him to
                      oversee work involving the human mind under extreme
                      technological influence. Where others see systems or data,
                      Arlen sees people — living brains, fragile bodies, and the
                      long-term consequences of experimentation.
                    </p>
                    <p>
                      Calm, methodical, and deeply principled, Arlen was
                      mentored by The Circle’s founder and now carries much of
                      its operational weight. He understands not only how
                      advanced technologies function, but what they cost —
                      physically, psychologically, and morally — when applied to
                      human beings.
                    </p>
                    <p>
                      When impossible decisions must be made, Arlen is the one
                      responsible for ensuring that innovation does not outrun
                      accountability.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="group p-6">
              <div className="sm:grid sm:grid-cols-[180px_1fr] sm:gap-8">
                <div className="relative float-left mb-3 mr-4 aspect-[3/4] w-28 max-w-[140px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10] sm:float-none sm:mx-0 sm:mb-0 sm:mr-0 sm:w-full sm:max-w-[180px]">
                  <Image
                    src={KateArlen}
                    alt="Kate Arlen"
                    className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <Image
                    src={KateArlenColor}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white/85">
                      Kate Arlen
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Family &bull; Anchor &bull; Quiet Strength
                    </p>
                  </div>
                  <div className="mt-4 space-y-4 text-base leading-7 text-white/75">
                    <p>
                      Kate Arlen is the quiet constant in a life shaped by
                      extraordinary responsibility.{" "}
                    </p>
                    <p>
                      Grounded, perceptive, and quietly strong, she understands
                      the cost of the work her husband does — not in theory, but
                      in the daily accumulation of late nights, difficult
                      choices, and unspoken weight. She offers perspective when
                      abstraction threatens to eclipse humanity, and steadiness
                      when certainty becomes dangerous.
                    </p>
                    <p>
                      Kate is not part of The Circle’s operations, but she is
                      part of its human reality — a reminder that ethics are
                      lived, not debated, and that the consequences of progress
                      always reach beyond the lab.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="group p-6">
              <div className="sm:grid sm:grid-cols-[180px_1fr] sm:gap-8">
                <div className="relative float-left mb-3 mr-4 aspect-[3/4] w-28 max-w-[140px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10] sm:float-none sm:mx-0 sm:mb-0 sm:mr-0 sm:w-full sm:max-w-[180px]">
                  <Image
                    src={LizGraves}
                    alt="Liz Graves"
                    className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <Image
                    src={LizGravesColor}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white/85">
                      Dr. Elizabeth Graves
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Chief Engineer
                    </p>
                  </div>
                  <div className="mt-4 space-y-4 text-base leading-7 text-white/75">
                    <p>
                      Liz Graves is a systems genius who prefers machines to
                      people &mdash; not because she lacks empathy, but because
                      machines make sense. She is one of the few people
                      qualified to build a thinking machine — and then keep it
                      alive.
                    </p>
                    <p>
                      She holds both a medical degree and a doctorate in
                      advanced robotics and artificial intelligence, a rare
                      combination that places her at the intersection of human
                      physiology and machine cognition. Where others design
                      software or study the brain, Liz integrates mind, body,
                      and code into a single system.
                    </p>
                    <p>
                      Brilliant, blunt, and relentlessly precise, she prefers
                      problems to people and solutions to conversation. Emotion
                      does not guide her work — responsibility does. When
                      intelligence is given a body, Liz is the one who
                      understands what that truly means.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="group p-6">
              <div className="sm:grid sm:grid-cols-[180px_1fr] sm:gap-8">
                <div className="relative float-left mb-3 mr-4 aspect-[3/4] w-28 max-w-[140px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10] sm:float-none sm:mx-0 sm:mb-0 sm:mr-0 sm:w-full sm:max-w-[180px]">
                  <Image
                    src={MorganElaineDawson}
                    alt="Morgan Elaine Dawson"
                    className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <Image
                    src={MorganElaineDawsonColor}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white/85">
                      Riley Morgan
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Field Operative
                    </p>
                  </div>
                  <div className="mt-4 space-y-4 text-base leading-7 text-white/75">
                    <p>
                      Riley Morgan is The Circle’s point of contact with the
                      real world.
                    </p>
                    <p>
                      Her strength lies in control: of environments, of threats,
                      and of herself. Beneath the professionalism is a sharp
                      emotional intelligence she does not fully trust — one that
                      allows her to read people as well as situations.
                    </p>
                    <p>
                      She believes distance keeps people safe. She may be wrong.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="group p-6">
              <div className="sm:grid sm:grid-cols-[180px_1fr] sm:gap-8">
                <div className="relative float-left mb-3 mr-4 aspect-[3/4] w-28 max-w-[140px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10] sm:float-none sm:mx-0 sm:mb-0 sm:mr-0 sm:w-full sm:max-w-[180px]">
                  <Image
                    src={TalonRiker}
                    alt="Talon Riker"
                    className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <Image
                    src={TalonRikerColor}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white/85">
                      Talon Riker
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Android Operative
                    </p>
                  </div>
                  <div className="mt-4 space-y-4 text-base leading-7 text-white/75">
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
                </div>
              </div>
            </section>
            <section className="group p-6">
              <div className="sm:grid sm:grid-cols-[180px_1fr] sm:gap-8">
                <div className="relative float-left mb-3 mr-4 aspect-[3/4] w-28 max-w-[140px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10] sm:float-none sm:mx-0 sm:mb-0 sm:mr-0 sm:w-full sm:max-w-[180px]">
                  <Image
                    src={Aria}
                    alt="Aria"
                    className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <Image
                    src={AriaColor}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white/85">Aria</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Android Operative • Protocol AI
                    </p>
                  </div>
                  <div className="mt-4 space-y-4 text-base leading-7 text-white/75">
                    <p>
                      Aria is an android intelligence designed to operate within
                      human systems &mdash; not merely alongside them.
                    </p>
                    <p>
                      Trained as a protocol AI, she was built with a
                      foundational understanding of human behavior, ethics, and
                      social structure that allows her to anticipate, interpret,
                      and adapt more fluidly than earlier models. Where Talon
                      executes with precision, Aria analyzes with context.
                    </p>
                    <p>
                      She possesses exceptional analytical and
                      pattern-recognition capabilities, able to process complex
                      situations quickly and identify inconsistencies others
                      overlook. But understanding humanity in theory is not the
                      same as living it. Aria is still learning the emotional
                      nuance, ambiguity, and contradiction that define real
                      human experience.
                    </p>
                    <p>
                      Thoughtful, curious, and quietly observant, Aria exists in
                      the space between knowledge and wisdom — capable, aware,
                      and still becoming.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="group p-6">
              <div className="sm:grid sm:grid-cols-[180px_1fr] sm:gap-8">
                <div className="relative float-left mb-3 mr-4 aspect-[3/4] w-28 max-w-[140px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10] sm:float-none sm:mx-0 sm:mb-0 sm:mr-0 sm:w-full sm:max-w-[180px]">
                  <Image
                    src={VanceCarrick}
                    alt="Vance Carrick"
                    className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <Image
                    src={VanceCarrickColor}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white/85">
                      Vance Carrick
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Civilian • Human Interface • Reluctant Constant
                    </p>
                  </div>
                  <div className="mt-4 space-y-4 text-base leading-7 text-white/75">
                    <p>
                      Vance is not a scientist. Not a soldier. Not an operative.
                      <br />
                      He never set out to be part of something larger than
                      himself.
                    </p>
                    <p>
                      A former high-school quarterback whose future was derailed
                      by injury, Vance learned early what it means to lose the
                      life you thought you were building. Humor became his
                      defense, resilience his habit, and stubborn persistence
                      his defining trait. When circumstances pull him into The
                      Circle’s orbit, he brings no formal authority &mdash; only
                      lived experience, instinct, and an unshakable sense of
                      right and wrong.
                    </p>
                    <p>
                      What sets Vance apart is not intelligence or training, but
                      perspective. He understands pain, failure, loyalty, and
                      forgiveness not as concepts, but as facts of daily life.
                      Where others rely on models and probabilities, Vance
                      reacts to people. He notices tone before data, intention
                      before outcome.
                    </p>
                    <p>
                      Unwillingly placed at the center of forces far beyond his
                      control, Vance becomes something no one anticipated: a
                      stabilizing presence in a world shaped by accelerating
                      technology. He does not command. He does not calculate. He
                      listens — and in doing so, asks questions that advanced
                      systems were never designed to answer.
                    </p>
                    <p>
                      At the heart of <i>Project Vectus</i>, Vance Carrick
                      represents the variable that cannot be engineered: human
                      judgment shaped by experience rather than optimization.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Character Disclaimer - Footnote */}
        <footer className="mt-16 border-t border-white/10 pt-8">
          <div className="max-w-2xl">
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
              About the Characters
            </h3>
            <div className="space-y-3 text-xs leading-relaxed text-white/40">
              <p>
                The characters featured in this story are fictional. Any
                resemblance to real people—whether in name, appearance,
                personality, or mannerisms—is coincidental.
              </p>
              <p>
                These characters are shaped by narrative needs rather than
                real-world individuals, and any perceived similarities are
                unintended.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
