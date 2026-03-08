import Image from "next/image";
import authorImage from "../../assets/AuthotNormal.png";
import authorSciFiDarkImage from "../../assets/AuthorSciFiDark.png";

export default function AuthorPage() {
  const authorStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://projectvectus.com/author#person",
        name: "Glenn Haertlein",
        alternateName: "Hedron Archer",
        url: "https://projectvectus.com/author",
        description:
          "Science fiction author exploring the intersection of technology, ethics, and faith.",
        sameAs: ["https://www.facebook.com/ntspeak/"],
      },
      {
        "@type": "ProfilePage",
        "@id": "https://projectvectus.com/author#profile",
        url: "https://projectvectus.com/author",
        name: "Author - Glenn Haertlein",
        mainEntity: {
          "@id": "https://projectvectus.com/author#person",
        },
      },
    ],
  };

  const scaledWidth = Math.round(authorImage.width * 0.48);
  const imageAspectRatio = `${authorImage.width} / ${authorImage.height}`;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0a0d] pt-16 text-[#efe9dc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(authorStructuredData),
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(177,120,65,0.25),transparent_55%)]" />
      <div className="absolute -left-40 top-24 h-80 w-80 rounded-full bg-[#3a1f0a] opacity-60 blur-[120px]" />
      <div className="absolute -right-30 top-10 h-96 w-96 rounded-full bg-[#0f2a33] opacity-70 blur-[140px]" />

      <main className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
        <section className="grid gap-8 lg:grid-cols-[minmax(260px,0.85fr)_1.15fr] lg:items-start lg:gap-12">
          <div className="flex justify-center lg:justify-start">
            <div
              className="group relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.7)]"
              style={{ maxWidth: scaledWidth, aspectRatio: imageAspectRatio }}
            >
              <Image
                src={authorImage}
                alt="Glenn Haertlein portrait"
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 85vw"
                className="h-full w-full object-cover transition-opacity duration-200 group-hover:opacity-0"
                priority
              />
              <Image
                src={authorSciFiDarkImage}
                alt="Glenn Haertlein sci-fi portrait"
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 85vw"
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f2c37b]" />
              Hedron Archer
            </div>

            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.25em] text-white/60">
                Author
              </p>
              <h1 className="font-(--font-display) text-4xl leading-tight text-[#f7e9cf] sm:text-5xl lg:text-6xl">
                Glenn Haertlein
              </h1>
              <div className="space-y-5 text-lg font-normal leading-8 text-white/85 sm:text-xl">
                <p>
                  Glenn Haertlein writes under the pen name Hedron Archer,
                  crafting thought-provoking science fiction that explores the
                  intersection of technology, ethics, and faith.
                </p>
                <p>
                  Over the course of his career, Glenn has worked across
                  software development, enterprise application support, and
                  technical systems engineering. His work has involved building
                  and maintaining complex systems using technologies such as
                  Java, Spring Boot, and modern web frameworks, giving him
                  firsthand insight into the power—and danger—of rapidly
                  advancing technology.
                </p>
                <p>
                  That technical background heavily influences his fiction. His
                  stories examine what happens when innovation outruns wisdom
                  and when humanity must wrestle with the consequences of the
                  tools it creates.
                </p>
                <p>
                  Outside of technology, Glenn has also spent time mentoring
                  developers, supporting nonprofit organizations through custom
                  software solutions, and serving in Christian education with
                  students who have special needs—experiences that deeply shaped
                  his perspective on people, compassion, and the value of every
                  human life.
                </p>
                <p>
                  He lives near Atlanta, Georgia and writes stories that combine
                  suspense, emerging technology, and thoughtful Christian themes
                  — exploring what happens when powerful technology collides
                  with the human soul.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
