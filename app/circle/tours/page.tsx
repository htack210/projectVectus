import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import heroCaveImage from "@/assets/daniel-burka-facU72FcKBI-unsplash.jpg";
import cavernImage from "@/assets/bradley-dunn-rtOD6PdRAlU-unsplash.jpg";
import limestoneImage from "@/assets/pexels-iftekharul-jebal-168783913-10959260.jpg";

export const metadata: Metadata = {
  title: "Hollow Ridge Caverns — Tours & Visits",
};

export default function ToursPage() {
  return (
    <div className="relative min-h-screen bg-[#e8e0d0] pt-16 text-[#1a1a2e]">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-95 w-full overflow-hidden">
        <Image
          src={heroCaveImage}
          alt="Explorer inside Hollow Ridge Caverns"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/10 to-[#e8e0d0]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/70">
            A Heritage Site of The Circle
          </p>
          <h1 className="font-(--font-display) text-5xl text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.55)] sm:text-6xl">
            Hollow Ridge Caverns
          </h1>
          <p className="mt-4 text-base italic text-white/85 [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]">
            Discover the world beneath the mountain.
          </p>
        </div>
      </div>

      <main className="relative mx-auto w-full max-w-3xl px-6 pb-24 pt-14">
        <div className="space-y-12 text-[15px] leading-7 text-[#1a1a2e]/80">
          {/* Intro */}
          <section>
            <p className="mb-4">
              Tucked into the wooded foothills of the Blue Ridge, just minutes
              from Taylors and Greenville, lies one of the Southeast&apos;s most
              remarkable underground wonders. For centuries, water and stone
              have shaped Hollow Ridge into a network of vast chambers,
              glittering formations, and quiet underground passages. Today, a
              portion of that network is open to visitors of all ages, ready to
              be explored.
            </p>
            <p className="italic text-[#5c4a1e]">
              Step inside, and step out of the ordinary.
            </p>
          </section>

          <div className="h-px bg-[#1a1a2e]/15" />

          {/* A Carolina treasure */}
          <section>
            <h2 className="font-(--font-display) mb-4 text-2xl text-[#1a1a2e]">
              A Carolina treasure, beautifully preserved
            </h2>
            <p className="mb-6">
              Hollow Ridge Caverns is a working heritage site — an active
              research and conservation area where modern science meets ancient
              stone. Our guided tours give you safe, accessible passage through
              illuminated chambers, breathtaking formations, and corridors that
              have stood unchanged for tens of thousands of years.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  name: "The Cathedral",
                  desc: "Our largest open chamber, with vaulted limestone ceilings rising more than a hundred feet overhead.",
                },
                {
                  name: "The Mirror Pool",
                  desc: "A still, clear underground lake whose surface reflects the formations above with startling clarity.",
                },
                {
                  name: "The Crystal Gallery",
                  desc: "Walls embedded with translucent calcite that catches the light like fine glass.",
                },
                {
                  name: "The Whispering Passage",
                  desc: "A narrow corridor with acoustics so precise you can hear a whisper from a hundred feet away.",
                },
              ].map(({ name, desc }) => (
                <div
                  key={name}
                  className="rounded border border-[#1a1a2e]/15 bg-[#1a1a2e]/3 px-5 py-4"
                >
                  <p className="mb-1 font-semibold text-[#5c4a1e]">{name}</p>
                  <p className="text-sm leading-6 text-[#1a1a2e]/75">{desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm text-[#1a1a2e]/55">
              Less than ten percent of the known cavern network is open to the
              public. The remainder is reserved for ongoing geological,
              hydrological, and environmental research conducted in partnership
              with universities and conservation organizations across the
              Southeast.
            </p>
          </section>

          {/* Inline photo */}
          <div className="relative h-64 w-full overflow-hidden rounded-xl border border-[#1a1a2e]/10 shadow-md sm:h-80">
            <Image
              src={cavernImage}
              alt="Rock formations inside Hollow Ridge Caverns"
              fill
              className="object-cover"
            />
          </div>

          <div className="h-px bg-[#1a1a2e]/15" />

          {/* Tours */}
          <section>
            <h2 className="font-(--font-display) mb-6 text-2xl text-[#1a1a2e]">
              Choose your tour
            </h2>
            <div className="space-y-5">
              <div className="rounded border border-[#1a1a2e]/15 bg-[#1a1a2e]/3 px-6 py-5">
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-(--font-display) text-xl text-[#1a1a2e]">
                    The Family Discovery Tour
                  </h3>
                  <span className="text-xs uppercase tracking-[0.15em] text-[#1a1a2e]/40">
                    45 minutes
                  </span>
                </div>
                <p className="mb-3 text-sm leading-6">
                  The perfect introduction for first-time visitors and families
                  with young children. A gentle, paved route through The
                  Cathedral, the Crystal Gallery, and the Whispering Passage.
                  Suitable for all ages and accessible to wheelchairs and
                  strollers.
                </p>
                <p className="text-sm text-[#5c4a1e]">
                  $18 adults &nbsp;·&nbsp; $10 children (5–12) &nbsp;·&nbsp;
                  Under 5 free
                </p>
              </div>

              <div className="rounded border border-[#1a1a2e]/15 bg-[#1a1a2e]/3 px-6 py-5">
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-(--font-display) text-xl text-[#1a1a2e]">
                    The Heritage Walk
                  </h3>
                  <span className="text-xs uppercase tracking-[0.15em] text-[#1a1a2e]/40">
                    90 minutes
                  </span>
                </div>
                <p className="mb-3 text-sm leading-6">
                  For visitors who want to go deeper. Our most popular tour
                  winds through the full public network, including the Mirror
                  Pool and a series of side chambers not visited on the shorter
                  route. Includes a guided presentation on the cavern&apos;s
                  geology and conservation history. Comfortable walking shoes
                  recommended.
                </p>
                <p className="text-sm text-[#5c4a1e]">
                  $26 adults &nbsp;·&nbsp; $14 children (5–12) &nbsp;·&nbsp;
                  Under 5 free
                </p>
              </div>

              <div className="rounded border border-[#5c4a1e]/30 bg-[#5c4a1e]/4 px-6 py-5">
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-(--font-display) text-xl text-[#1a1a2e]">
                    The Deep Cavern Expedition
                  </h3>
                  <span className="text-xs uppercase tracking-[0.15em] text-[#1a1a2e]/40">
                    2.5 hours
                  </span>
                </div>
                <p className="mb-3 text-sm leading-6">
                  For the genuinely curious. A small-group, lantern-led tour
                  that takes you into less-trafficked corridors, including
                  portions of the cave only opened to the public seasonally.
                  Sturdy footwear required. Minimum age 12. Booking required.
                </p>
                <p className="text-sm text-[#5c4a1e]">$42 per person</p>
              </div>
            </div>

            <p className="mt-5 text-sm text-[#1a1a2e]/55">
              Group, school, and educator rates are available for parties of ten
              or more. Please inquire by email.
            </p>
          </section>

          <div className="h-px bg-[#1a1a2e]/15" />

          {/* Hours */}
          <section>
            <h2 className="font-(--font-display) mb-4 text-2xl text-[#1a1a2e]">
              Hours and seasons
            </h2>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-[#5c4a1e]">
                  March through November
                </span>{" "}
                — Tours depart daily at 10 a.m., 12 p.m., 2 p.m., and 4 p.m.
              </div>
              <div>
                <span className="font-semibold text-[#5c4a1e]">
                  December through February
                </span>{" "}
                — Tours depart Friday through Sunday at 11 a.m. and 2 p.m.
                Weekday tours available by reservation.
              </div>
            </div>
            <p className="mt-4 text-sm text-[#1a1a2e]/55">
              The cavern maintains a steady temperature of 58°F (14°C)
              year-round. A light jacket or sweater is recommended in any
              season.
            </p>
          </section>

          <div className="h-px bg-[#1a1a2e]/15" />

          {/* What to expect */}
          <section>
            <h2 className="font-(--font-display) mb-4 text-2xl text-[#1a1a2e]">
              What to expect
            </h2>
            <p className="mb-4">
              Your visit begins at the Hollow Ridge Visitor Center, where
              you&apos;ll meet your guide, receive your wristband, and have a
              few minutes to explore our exhibits on local geology, regional
              history, and the natural science of cave formation.
            </p>
            <p>
              From there, your guide will lead you to the main entrance — a
              short walk through a wooded path that opens onto the mouth of the
              cavern itself. The interior is fully lit, and the walking paths
              are gentle, with handrails along all routes. Photography is
              welcome (no flash, please). Our guides are happy to answer
              questions, point out formations, and — for younger visitors — help
              spot the small creatures that make the cavern home, including
              several species of bat protected under federal conservation law.
            </p>
          </section>

          {/* Limestone photo */}
          <div className="relative h-64 w-full overflow-hidden rounded-xl border border-[#1a1a2e]/10 shadow-md sm:h-80">
            <Image
              src={limestoneImage}
              alt="Limestone formations inside Hollow Ridge Caverns"
              fill
              className="object-cover"
            />
          </div>

          <div className="h-px bg-[#1a1a2e]/15" />

          {/* Make a day of it */}
          <section>
            <h2 className="font-(--font-display) mb-4 text-2xl text-[#1a1a2e]">
              Make a day of it
            </h2>
            <div className="space-y-3">
              {[
                {
                  name: "The Visitor Center Café",
                  desc: "Light meals, fresh coffee, and house-baked pastries, served on a covered porch with a clear view of the surrounding foothills.",
                },
                {
                  name: "The Heritage Shop",
                  desc: "Mineral and crystal specimens, geology and natural history books, locally produced honey and jam, and a thoughtful selection of educational toys and field guides for young explorers.",
                },
                {
                  name: "The Picnic Grounds",
                  desc: "Shaded tables and a children's discovery area, free to use. Bring lunch or grab something from the café.",
                },
                {
                  name: "The Ridge Trail",
                  desc: "A short, well-marked hiking loop departing from the visitor center, with quiet overlooks of the surrounding mountains.",
                },
              ].map(({ name, desc }) => (
                <div key={name}>
                  <span className="font-semibold text-[#5c4a1e]">{name}</span>
                  {" — "}
                  {desc}
                </div>
              ))}
            </div>
          </section>

          <div className="h-px bg-[#1a1a2e]/15" />

          {/* Getting here */}
          <section>
            <h2 className="font-(--font-display) mb-4 text-2xl text-[#1a1a2e]">
              Getting here
            </h2>
            <p className="mb-4">
              Hollow Ridge Caverns is located in the foothills just north of
              Taylors, South Carolina — approximately twenty minutes from
              downtown Greenville, thirty minutes from Greenville-Spartanburg
              International Airport, and just over an hour from Asheville, North
              Carolina.{" "}
              <strong className="font-semibold text-[#1a1a2e]">
                Ample free parking is available
              </strong>{" "}
              at our visitor center.
            </p>
            <p>
              Detailed driving directions are available on our website. The
              cavern entrance road is clearly marked from Highway 29.
            </p>
          </section>

          <div className="h-px bg-[#1a1a2e]/15" />

          {/* Plan your visit */}
          <section>
            <h2 className="font-(--font-display) mb-4 text-2xl text-[#1a1a2e]">
              Plan your visit
            </h2>
            <p className="mb-6">
              Tickets are available at the visitor center or in advance online.
              Advance booking is recommended on weekends, holidays, and
              throughout the summer season. The Deep Cavern Expedition requires
              booking at least 48 hours in advance.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Book Tickets", "Group & School Inquiries", "Contact Us"].map(
                (label) => (
                  <button
                    key={label}
                    className="rounded border border-[#1a1a2e]/30 px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#1a1a2e]/60 transition-colors hover:border-[#5c4a1e]/60 hover:text-[#5c4a1e]"
                  >
                    {label}
                  </button>
                ),
              )}
            </div>
          </section>

          <div className="h-px bg-[#1a1a2e]/15" />

          {/* Footer note */}
          <p className="text-sm italic text-[#1a1a2e]/50">
            Hollow Ridge Caverns operates as a heritage and education program of
            The Circle. All visitor proceeds support our independent geological
            and environmental research.
          </p>

          {/* Return */}
          <div className="pt-2">
            <Link
              href="/circle"
              className="rounded border border-[#1a1a2e]/30 px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#1a1a2e]/60 transition-colors hover:border-[#5c4a1e]/60 hover:text-[#5c4a1e]"
            >
              Return
            </Link>
          </div>

          {/* Photo credits */}
          <div className="space-y-1 text-[11px] leading-5 text-[#1a1a2e]/35">
            <p>
              Photo by{" "}
              <a
                href="https://unsplash.com/@dburka?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                className="underline hover:text-[#5c4a1e]"
              >
                Daniel Burka
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/person-on-top-of-rock-formation-inside-cave-facU72FcKBI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                className="underline hover:text-[#5c4a1e]"
              >
                Unsplash
              </a>
            </p>
            <p>
              Photo by{" "}
              <a
                href="https://unsplash.com/@bradleycdunn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                className="underline hover:text-[#5c4a1e]"
              >
                Bradley Dunn
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/brown-rock-formation-during-daytime-rtOD6PdRAlU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                className="underline hover:text-[#5c4a1e]"
              >
                Unsplash
              </a>
            </p>
            <p>
              Photo by{" "}
              <a
                href="https://www.pexels.com/photo/limestone-inside-the-cave-10959260/"
                className="underline hover:text-[#5c4a1e]"
              >
                Iftekharul Jebal
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
