import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "s3-alpha-sig.figma.com",
      "picsum.photos",
      "49.13.170.219",
      "erp.torchcorp.com",
      "188.245.112.4",
      "via.placeholder.com",
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
