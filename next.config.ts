import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/mydigiiclinic",
  assetPrefix: "/mydigiiclinic/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;