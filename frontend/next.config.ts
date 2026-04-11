import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cleanDistDir: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
