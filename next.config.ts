import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Set the base path to your repository name, including a leading slash
  basePath: process.env.NODE_ENV === "production" ? "/ztalab0" : undefined,
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/ztalab0" : undefined, // Ensures assets like images/CSS load correctly
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
