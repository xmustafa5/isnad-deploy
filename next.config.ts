import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': './src'  // This maps @ to your src directory
    };
    return config;
  }
};

export default nextConfig;
