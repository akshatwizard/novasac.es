import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "admin.novasac.es",
      },
      {
        protocol: "https",
        hostname: "novasac.es",
      },
    ],
  },
};


export default nextConfig;
