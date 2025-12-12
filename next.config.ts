import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "volleyfest.blob.core.windows.net",
      },
    ],
  },
};

export default nextConfig;
