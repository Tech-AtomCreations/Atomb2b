import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
   // turbopack: {
   //   root: "C:\\Users\\HP\\Desktop\\iamegs of resumes\\sunil-main",
   // },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
};

export default nextConfig;
