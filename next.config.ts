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
  async redirects() {
    return [
      // The footer / homepage cards used to link to this slug, but the page lives at
      // /industries/alimentos-y-agricultura. Keep any link that was already crawled or shared working.
      {
        source: "/industries/sector-de-alimentos-y-agricultura",
        destination: "/industries/alimentos-y-agricultura",
        permanent: true,
      },
    ];
  },
};


export default nextConfig;
