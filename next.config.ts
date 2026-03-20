import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/jobs",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
