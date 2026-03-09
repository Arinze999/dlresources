import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    qualities: [70, 75, 85, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
