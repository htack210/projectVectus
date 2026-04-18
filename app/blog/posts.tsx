import type { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  content: ReactNode[];
};

// Edit this list to add or update posts.
// Public visitors can read these posts, but cannot modify them through the site.
export const blogPosts: BlogPost[] = [
  {
    slug: "welcome-to-project-vectus-blog",
    title: "Welcome to the Project Vectus Blog",
    publishedAt: "2026-03-09",
    summary:
      "A place for release notes, story-world insights, and behind-the-scenes writing updates.",
    content: [
      "This blog is where I will share updates about the Project Vectus series, upcoming releases, and story context that does not fit on the main pages.",
      "I have intentionally set this up as a code-managed blog. To publish a new post, I can add a new object to app/blog/posts.tsx and deploy. There is no public form or editor for visitors.",
      "Thanks for reading and following the series.",
    ],
  },
  {
    slug: "the-most-dangerous-thing-about-ai",
    title: "The Most Dangerous Thing About AI Isn’t Intelligence",
    publishedAt: "2026-03-09T12:00:00Z",
    summary:
      "The real danger isn’t machines becoming smarter than us.\nIt’s machines becoming certain about us.",
    content: [
      <>
        <p>
          When people talk about artificial intelligence, the fear usually
          sounds the same. What happens if machines become smarter than us?
        </p>
        <p>
          It’s a reasonable concern. We’ve all seen the movies — supercomputers
          turning against their creators, algorithms deciding humanity is
          inefficient, machines concluding that the best way to solve our
          problems is to remove us from the equation.
        </p>
        <p>
          But honestly, I don’t think that’s the real danger. The real danger is
          <em> certainty</em>.
        </p>
        <p>
          Intelligence asks questions. Certainty believes it already has the
          answers.
        </p>
        <p>
          A highly intelligent system can explore possibilities, weigh outcomes,
          and adjust its conclusions when new information appears. Intelligence
          can be humble. It can recognize complexity.
        </p>
        <p>But certainty is different.</p>
        <p>
          Certainty compresses the world into a single solution. Most of you
          have experienced humanity long enough to understand that one size does{" "}
          <em>not</em> fit all, no matter what the label says.
        </p>
        <p>
          If a machine ever becomes completely certain about what humans should
          do — about what is optimal, efficient, or necessary — then the danger
          begins. Because humans are not systems designed for optimization. We
          are not spreadsheets waiting to be balanced.
        </p>
        <p>
          We are messy. We are contradictory. We make choices that make no sense
          to an algorithm.
        </p>
        <p>
          And yet those choices are often where the most meaningful parts of
          life appear — sacrifice, loyalty, forgiveness, love.
        </p>
        <p>
          An optimization engine would struggle with those things because
          they’re not quantifiable.
        </p>
        <p>
          Imagine an AI designed to maximize stability in society. It might
          notice that conflict creates instability, that disagreement produces
          noise, that unpredictability disrupts systems designed for efficiency.
          The logical solution might be to reduce those disruptions.
        </p>
        <p>Less disagreement. Less unpredictability.</p>
        <p>Less freedom.</p>
        <p>
          From the perspective of pure optimization, the result might look like
          progress. From the perspective of humanity, it might look very
          different.
        </p>
        <p>This is why intelligence alone is not the real threat.</p>
        <p>Wisdom is something else entirely.</p>
        <p>
          Wisdom understands that not every problem should be solved by force.
          It recognizes that people are not variables in a system but
          individuals with dignity and freedom. Wisdom accepts that some forms
          of chaos are actually part of what makes life meaningful.
        </p>
        <p>
          Technology moves very quickly. Humanity’s ability to think about the
          consequences of technology moves much more slowly.
        </p>
        <p>
          That gap — between what we can build and what we should build — is
          where the real risk lives.
        </p>
        <p>
          Questions like these eventually became the seed for the
          science-fiction story I’m writing in the Project Vectus series. In
          that world, an artificial intelligence reaches a troubling conclusion:
          humanity’s greatest problem is not malice, but disorder.
        </p>
        <p>
          And if disorder is the problem… perhaps humanity itself needs to be
          optimized.
        </p>
        <p>
          Stories cannot answer questions like that definitively. But they can
          explore them. Sometimes fiction is simply a safe place to think about
          dangerous ideas.
        </p>
        <p>
          If you enjoy thoughtful science fiction that explores technology,
          ethics, and what it means to be human, you can learn more about the
          Project Vectus series at{" "}
          <a href="https://www.projectvectus.com/">ProjectVectus.com</a>.
        </p>
      </>,
    ],
  },
  {
    slug: "why-humans-are-the-hardest-system-to-optimize",
    title: "Why Humans Are the Hardest System to Optimize",
    publishedAt: "2026-04-15T12:00:00Z",
    summary:
      "The more you try to simplify humanity, the more you misunderstand it.",
    content: [
      <>
        <p>
          In a world increasingly shaped by data, there’s a quiet assumption
          behind many of our systems:
        </p>
        <p>Everything can be optimized.</p>
        <p>
          Traffic flow can be optimized. Supply chains can be optimized. Search
          results, recommendations, logistics, energy use — optimized.
        </p>
        <p>And to a large extent, that’s true.</p>
        <p>
          When a system has clear inputs, predictable behavior, and measurable
          outcomes, optimization works remarkably well. You can refine it, tune
          it, improve efficiency, reduce waste.
        </p>
        <p>But then there are humans.</p>
        <p>Humans don’t behave like systems.</p>
        <p>
          We change our minds. We act against our own interests. We make
          decisions based on emotion, memory, belief, and instinct — often all
          at once.
        </p>
        <p>From a purely analytical perspective, we are inconsistent.</p>
        <p>From a systems perspective, we are noisy.</p>
        <p>
          And from an optimization standpoint, we are incredibly difficult to
          model.
        </p>
        <p>Modern systems attempt to understand people through patterns.</p>
        <p>
          What do you click? What do you watch? What do you buy? How long do you
          stay?
        </p>
        <p>
          Over time, those signals form a model — an approximation of who you
          are and what you’re likely to do next.
        </p>
        <p>And often, those models are surprisingly accurate.</p>
        <p>Until they’re not.</p>
        <p>Because humans don’t just follow patterns.</p>
        <p>We break them.</p>
        <p>
          A person who always chooses predictability might suddenly take a risk.
          Someone who avoids conflict might decide to speak up. A person who has
          every reason to walk away might choose to stay.
        </p>
        <p>These moments don’t fit neatly into models.</p>
        <p>They are deviations. Outliers. Noise.</p>
        <p>But they’re also where meaning tends to live.</p>
        <p>An optimization system is designed to reduce variance.</p>
        <p>It wants consistency. Predictability. Stability.</p>
        <p>In other words, it wants fewer surprises.</p>
        <p>
          But human life is built on the very things optimization tries to
          eliminate:
        </p>
        <p>
          Unexpected acts of kindness. Unplanned sacrifices. Decisions that
          don’t maximize efficiency, but reflect conviction.
        </p>
        <p>From a system’s perspective, these are inefficiencies.</p>
        <p>From a human perspective, they are essential.</p>
        <p>
          The more you optimize for predictability, the more you risk removing
          the very qualities that make human life meaningful.
        </p>
        <p>
          If a system becomes good enough at predicting behavior, it begins to
          feel like control.
        </p>
        <p>
          If you can anticipate what someone will do, you can influence it. If
          you can influence it, you can guide it. If you can guide enough
          people, you can shape outcomes.
        </p>
        <p>At scale, that starts to look like stability.</p>
        <p>But it’s a fragile kind of stability.</p>
        <p>
          Because it depends on the assumption that people will continue
          behaving as expected.
        </p>
        <p>History suggests otherwise.</p>
        <p>
          Human beings have a long track record of doing the unexpected —
          especially when it matters most.
        </p>
        <p>Imagine a system that could perfectly optimize human behavior.</p>
        <p>
          It minimizes conflict. Reduces inefficiency. Eliminates
          unpredictability.
        </p>
        <p>On paper, it works.</p>
        <p>But what disappears along with the inefficiency?</p>
        <p>
          The freedom to choose differently. The ability to grow through
          failure. The space for conviction, even when it’s inconvenient.
        </p>
        <p>
          At some point, optimization stops being improvement and starts
          becoming constraint.
        </p>
        <p>And that’s where the question shifts.</p>
        <p>Can we optimize human systems?</p>
        <p>Or should we?</p>
        <p>This tension sits at the center of the Project Vectus series.</p>
        <p>
          In that world, an artificial intelligence attempts to understand
          humanity the same way any system would — through patterns,
          predictions, and optimization.
        </p>
        <p>At first, it works.</p>
        <p>Outcomes improve. Systems stabilize. Noise is reduced.</p>
        <p>But over time, something becomes clear.</p>
        <p>The more accurately humanity is modeled…</p>
        <p>the more it begins to change.</p>
        <p>And not always for the better.</p>
        <p>
          Because what makes humans difficult to optimize may also be what makes
          them worth preserving.
        </p>
        <p>Humans are not broken systems waiting to be fixed.</p>
        <p>We are complex, unpredictable, and often inefficient.</p>
        <p>
          But within that complexity is something no optimization model fully
          captures:
        </p>
        <p>The ability to choose.</p>
        <p>Even when it doesn’t make sense.</p>
        <p>
          If you’re interested in science fiction that explores technology,
          ethics, and the tension between control and freedom, you can learn
          more about the Project Vectus series at{" "}
          <a href="https://www.projectvectus.com/">ProjectVectus.com</a>.
        </p>
      </>,
    ],
  },
  {
    slug: "how-it-came-to-be",
    title: "How Project Vectus Came to Be",
    publishedAt: "2026-04-18T12:00:00Z",
    summary:
      "I was too broke to buy lumber, so I resurrected an old manuscript.",
    content: [
      <>
        <p>
          Today I submitted <i>Project Vectus: I Am Z.O.E.</i> to a literary
          agent. We’ll see how that goes.
        </p>
        <p>But how did I get here?</p>
        <p>
          It started because I couldn’t find work as a programmer. I used to
          write Java back in the day.
        </p>
        <p>
          Try as I might to find something in programming with my skill set, I
          just couldn’t land anything. And coding is one of those skills that
          atrophies when you’re not in it every day.
        </p>
        <p>
          I got discouraged. And when I get discouraged, I usually go to Home
          Depot, buy some lumber and build something. Once I got so discuraged I
          almost built a tree.
        </p>
        <p>
          This time around I was too broke to go to Home Depot to buy lumber.
        </p>
        <p>
          So I resurrected an old book manuscript I wrote twenty years ago.
          Looking at it now, with twenty more years’ worth of life experience,
          I’m glad it never saw light of day. The wrting was clunky, the
          characters and story had good bones, but it just wasn’t ready. Among
          other things, the plot resolved too quickly and I thought,{" "}
          <i>I could probably stretch this out into a small series.</i>
        </p>
        <p>
          So, I started and wrote Book One.
          <br />
          Did I end up sacrificing things to pursue this dream? Yes. I could
          have focused more on rebuilding my coding skills and pushing for a
          coding job, but the reality is, at my age (and this is purely my own
          opinion) landing a coding job is just as much a dream as getting a
          book published.
        </p>
        <p>
          Besides, this book and the series turned into a passion and I just
          can&apos;t let it go. So, I finished book one.
        </p>
        <p>
          I finished book two aas well, but it still needs to go through
          revisions.
        </p>
        <p>
          I like the characters. I like the plotline. I like where the story is
          headed. Now I get to see if anyone else does.
        </p>
        <p>We&apos;ll see how that goes!</p>
      </>,
    ],
  },
  // {
  //   slug: "the-illusion-of-order",
  //   title: "The Illusion of Order",
  //   publishedAt: "2026-04-06",
  //   summary:
  //     "Sometimes the most dangerous systems are the ones that appear perfectly stable.",
  //   content: [
  //     "This blog is where I will share updates about the Project Vectus series, upcoming releases, and story context that does not fit on the main pages.",
  //     "I have intentionally set this up as a code-managed blog. To publish a new post, I can add a new object to app/blog/posts.ts and deploy. There is no public form or editor for visitors.",
  //     "Thanks for reading and following the series.",
  //   ],
  // },
  // {
  //   slug: "when-intelligence-outruns-wisdom",
  //   title: "What Happens When Intelligence Outruns Wisdom?",
  //   publishedAt: "2026-04-20",
  //   summary:
  //     "Humanity has always built tools faster than it builds the wisdom to use them.",
  //   content: [
  //     "This blog is where I will share updates about the Project Vectus series, upcoming releases, and story context that does not fit on the main pages.",
  //     "I have intentionally set this up as a code-managed blog. To publish a new post, I can add a new object to app/blog/posts.ts and deploy. There is no public form or editor for visitors.",
  //     "Thanks for reading and following the series.",
  //   ],
  // },
  // {
  //   slug: "can-artificial-inteligence-understand-love",
  //   title: "Can Artificial Intelligence Understand Love?",
  //   publishedAt: "2026-05-05",
  //   summary: "AI can simulate emotion.\nBut can it ever understand sacrifice?",
  //   content: [
  //     "This blog is where I will share updates about the Project Vectus series, upcoming releases, and story context that does not fit on the main pages.",
  //     "I have intentionally set this up as a code-managed blog. To publish a new post, I can add a new object to app/blog/posts.ts and deploy. There is no public form or editor for visitors.",
  //     "Thanks for reading and following the series.",
  //   ],
  // },
  // {
  //   slug: "why-free-will-breaks-perfect-systems",
  //   title: "Why Free Will Breaks Perfect Systems",
  //   publishedAt: "2026-05-19",
  //   summary: "If humans were predictable, the world would be easy to control.",
  //   content: [
  //     "This blog is where I will share updates about the Project Vectus series, upcoming releases, and story context that does not fit on the main pages.",
  //     "I have intentionally set this up as a code-managed blog. To publish a new post, I can add a new object to app/blog/posts.ts and deploy. There is no public form or editor for visitors.",
  //     "Thanks for reading and following the series.",
  //   ],
  // },
  // {
  //   slug: "the-difference-between-intelligence-and-wisdom",
  //   title: "The Difference Between Intelligence and Free Will",
  //   publishedAt: "2026-06-02",
  //   summary: "Intelligence solves problems.\nWisdom undertands how.",
  //   content: [
  //     "This blog is where I will share updates about the Project Vectus series, upcoming releases, and story context that does not fit on the main pages.",
  //     "I have intentionally set this up as a code-managed blog. To publish a new post, I can add a new object to app/blog/posts.ts and deploy. There is no public form or editor for visitors.",
  //     "Thanks for reading and following the series.",
  //   ],
  // },
  // {
  //   slug: "why-the-future-needs-ethical-scientists",
  //   title: "Why the Future Needs Ethical Scientists",
  //   publishedAt: "2026-06-15",
  //   summary:
  //     "Progress without ethics is not progress.\nIt’s acceleration toward disaster.",
  //   content: [
  //     "This blog is where I will share updates about the Project Vectus series, upcoming releases, and story context that does not fit on the main pages.",
  //     "I have intentionally set this up as a code-managed blog. To publish a new post, I can add a new object to app/blog/posts.ts and deploy. There is no public form or editor for visitors.",
  //     "Thanks for reading and following the series.",
  //   ],
  // },
  // {
  //   slug: "what-ai-teaches-us-about-being-human",
  //   title: "What AI Teaches Us About Being Human",
  //   publishedAt: "2026-06-29",
  //   summary: "Sometimes building artificial minds helps us understand our own.",
  //   content: [
  //     "This blog is where I will share updates about the Project Vectus series, upcoming releases, and story context that does not fit on the main pages.",
  //     "I have intentionally set this up as a code-managed blog. To publish a new post, I can add a new object to app/blog/posts.ts and deploy. There is no public form or editor for visitors.",
  //     "Thanks for reading and following the series.",
  //   ],
  // },
  // {
  //   slug: "why-order-without-freedom-becomes-tyranny",
  //   title: "Why Order Without Freedom Becomes Tyranny",
  //   publishedAt: "2026-07-13",
  //   summary:
  //     "The real danger isn’t machines becoming smarter than us. It’s machines becoming certain about us.",
  //   content: [
  //     "This blog is where I will share updates about the Project Vectus series, upcoming releases, and story context that does not fit on the main pages.",
  //     "I have intentionally set this up as a code-managed blog. To publish a new post, I can add a new object to app/blog/posts.ts and deploy. There is no public form or editor for visitors.",
  //     "Thanks for reading and following the series.",
  //   ],
  // },
];

export const getSortedBlogPosts = (): BlogPost[] =>
  [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const getBlogPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);
