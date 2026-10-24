import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://m.media-amazon.com/**")],
  },
  staticPageGenerationTimeout: 180,
};

export default nextConfig;
