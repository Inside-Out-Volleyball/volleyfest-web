import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "volleyfest.blob.core.windows.net",
      },
    ],
  },
};

export default nextConfig;
