import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nft.matrica.io',
      },
      {
        protocol: 'https',
        hostname: '**.matrica.io',
      },
      {
        protocol: 'https',
        hostname: '**.ipfs.dweb.link',
      },
      {
        protocol: 'https',
        hostname: 'ipfs.io',
      },
      {
        protocol: 'https',
        hostname: '**.arweave.net',
      },
      {
        protocol: 'https',
        hostname: 'arweave.net',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 176, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for images
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Reduce default quality from 90 to 75 for better compression
    // This is a good balance between quality and file size
    unoptimized: false,
  },
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', '@privy-io/react-auth'],
    // Enable server actions for better performance
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Evitar transpilación innecesaria de JavaScript moderno
  // Soportar navegadores modernos que ya incluyen ES2020+
  transpilePackages: [],
  // Optimize bundling - lucide-react already tree-shakes by default in Next.js 15
  // modularizeImports not needed as it's handled automatically
};

export default nextConfig;