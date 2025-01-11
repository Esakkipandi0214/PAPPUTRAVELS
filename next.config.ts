import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com'], // Add any external domains you need here
  },
};

export default nextConfig;
