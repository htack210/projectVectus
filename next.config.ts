import type { NextConfig } from "next";

const reviewUrl =
  "https://www.amazon.com/review/create-review?asin=B0HPZ5M491";

const nextConfig: NextConfig = {
  async redirects() {
    // Path matching is case-insensitive, so this also covers /Review.
    return [{ source: "/review", destination: reviewUrl, permanent: false }];
  },
};

export default nextConfig;
