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
      "I have intentionally set this up as a code-managed blog. To publish a new post, I can add a new object to app/blog/posts.ts and deploy. There is no public form or editor for visitors.",
      "Thanks for reading and following the series.",
    ],
  },
  {
    slug: "the-most-dangerous-thing-about-ai",
    title: "The Most Dangerous Thing About AI Isn’t Intelligence",
    publishedAt: "2026-03-09",
    summary:
      "The real danger isn’t machines becoming smarter than us.\nIt’s machines becoming certain about us.",
    content: [
      "When people talk about artificial intelligence, the fear usually sounds the same. What happens if machines become smarter than us?",
      "It’s a reasonable concern. We’ve all seen the movies — supercomputers turning against their creators, algorithms deciding humanity is inefficient, machines concluding that the best way to solve our problems is to remove us from the equation.",
      <>
        But honestly, I don't think that's the real danger. The real danger is{" "}
        <em>certainty</em>.
      </>,
      "Intelligence asks questions. Certainty believes it already has the answers.",
      "A highly intelligent system can explore possibilities, weigh outcomes, and adjust its conclusions when new information appears. Intelligence can be humble. It can recognize complexity.",
      "But certainty is different.",
      <>
        Certainty compresses the world into a single solution. Most of you have
        experienced humanity long enough to understand that one size does{" "}
        <em>not</em> fit all, no matter what the label says.
      </>,
      "If a machine ever becomes completely certain about what humans should do — about what is optimal, efficient, or necessary — then the danger begins. Because humans are not systems designed for optimization. We are not spreadsheets waiting to be balanced.",
      "We are messy. We are contradictory. We make choices that make no sense to an algorithm.",
      "And yet those choices are often where the most meaningful parts of life appear — sacrifice, loyalty, forgiveness, love.",
      "An optimization engine would struggle with those things because they're not quantifiable.",
      "Imagine an AI designed to maximize stability in society. It might notice that conflict creates instability, that disagreement produces noise, that unpredictability disrupts systems designed for efficiency. The logical solution might be to reduce those disruptions.",
      "Less disagreement. Less unpredictability.",
      "Less freedom.",
      "From the perspective of pure optimization, the result might look like progress. From the perspective of humanity, it might look very different.",
      "This is why intelligence alone is not the real threat.",
      "Wisdom is something else entirely.",
      "Wisdom understands that not every problem should be solved by force. It recognizes that people are not variables in a system but individuals with dignity and freedom. Wisdom accepts that some forms of chaos are actually part of what makes life meaningful.",
      "Technology moves very quickly. Humanity’s ability to think about the consequences of technology moves much more slowly.",
      "That gap — between what we can build and what we should build — is where the real risk lives.",
      "Questions like these eventually became the seed for the science-fiction story I’m writing in the Project Vectus series. In that world, an artificial intelligence reaches a troubling conclusion: humanity’s greatest problem is not malice, but disorder.",
      "And if disorder is the problem… perhaps humanity itself needs to be optimized.",
      "Stories cannot answer questions like that definitively. But they can explore them. Sometimes fiction is simply a safe place to think about dangerous ideas.",
      "If you enjoy thoughtful science fiction that explores technology, ethics, and what it means to be human, you can learn more about the Project Vectus series at ProjectVectus.com.",
    ],
  },
  // {
  //   slug: "why-humans-are-the-hardest-system-to-optimize",
  //   title: "Why Humans are the Hardest System to Optimize",
  //   publishedAt: "2026-03-23",
  //   summary:
  //     "Humans are irrational, emotional, and unpredictable.\nAnd that may be the very thing that saves us.",
  //   content: [
  //     "This blog is where I will share updates about the Project Vectus series, upcoming releases, and story context that does not fit on the main pages.",
  //     "I have intentionally set this up as a code-managed blog. To publish a new post, I can add a new object to app/blog/posts.ts and deploy. There is no public form or editor for visitors.",
  //     "Thanks for reading and following the series.",
  //   ],
  // },
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
  //   title: "What Happnes When Intelligence Outruns Wisdom?",
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
