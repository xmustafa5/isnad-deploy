import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "s3-alpha-sig.figma.com",
      "isnad-website.mem-iq.com",
      "ops.isnad-iq.com",
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "100mb", // Increase to 10MB or any appropriate value
    },
    turbo: {
      resolveAlias: {
        canvas: "./empty-module.ts",
      },
    },
  },
};

export default nextConfig;
