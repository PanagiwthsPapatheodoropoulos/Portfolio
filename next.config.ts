import type { NextConfig } from "next";

const repoName = "Portfolio"; // <-- change to your repo name if different

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/" + repoName,
  assetPrefix: "/" + repoName + "/",
  images: {
    unoptimized: true,
  },
  // other config options here
};

export default nextConfig;