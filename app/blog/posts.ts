export type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  content: string[];
};

// Edit this list to add or update posts.
// Public visitors can read these posts, but cannot modify them through the site.
export const blogPosts: BlogPost[] = [
  {
    slug: "welcome-to-project-vectus-blog",
    title: "Welcome to the Project Vectus Blog",
    publishedAt: "2026-03-08",
    summary:
      "A place for release notes, story-world insights, and behind-the-scenes writing updates.",
    content: [
      "This blog is where I will share updates about the Project Vectus series, upcoming releases, and story context that does not fit on the main pages.",
      "I have intentionally set this up as a code-managed blog. To publish a new post, I can add a new object to app/blog/posts.ts and deploy. There is no public form or editor for visitors.",
      "Thanks for reading and following the series.",
    ],
  },
];
