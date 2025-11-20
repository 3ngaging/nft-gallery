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
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  transpilePackages: [],

  // Advanced webpack optimization for vendor splitting
  // Based on: https://muhammedcuma.medium.com/improving-react-application-performance-with-code-splitting-vendors-in-webpack-fd4a99f5ac3e
  webpack: (config, { isServer, dev }) => {
    if (!isServer && !dev) {
      config.optimization = {
        ...config.optimization,
        runtimeChunk: 'single', // Separate webpack runtime
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          maxAsyncRequests: 30,
          minSize: 10000, // 10kb minimum
          maxSize: 244000, // 244kb maximum (HTTP/2 optimal)
          cacheGroups: {
            // React core (highest priority)
            reactCore: {
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              name: 'react-core',
              priority: 50,
              reuseExistingChunk: true,
              enforce: true,
            },
            // Next.js framework
            nextCore: {
              test: /[\\/]node_modules[\\/]next[\\/]/,
              name: 'next-core',
              priority: 45,
              reuseExistingChunk: true,
              enforce: true,
            },
            // Privy authentication
            privy: {
              test: /[\\/]node_modules[\\/]@privy-io[\\/]/,
              name: 'privy',
              priority: 40,
              reuseExistingChunk: true,
              enforce: true,
            },
            // Solana web3
            solana: {
              test: /[\\/]node_modules[\\/](@solana|@noble)[\\/]/,
              name: 'solana',
              priority: 39,
              reuseExistingChunk: true,
              enforce: true,
            },
            // Supabase
            supabase: {
              test: /[\\/]node_modules[\\/]@supabase[\\/]/,
              name: 'supabase',
              priority: 38,
              reuseExistingChunk: true,
              enforce: true,
            },
            // Framer Motion
            framerMotion: {
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              name: 'framer-motion',
              priority: 35,
              reuseExistingChunk: true,
              enforce: true,
            },
            // Lucide icons
            lucide: {
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              name: 'lucide-icons',
              priority: 30,
              reuseExistingChunk: true,
              enforce: true,
            },
            // Common vendors (shared by 2+ chunks)
            commonVendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module: { context: string }) {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )?.[1];
                return `vendor.${packageName?.replace('@', '')}`;
              },
              priority: 20,
              minChunks: 2,
              reuseExistingChunk: true,
              minSize: 10000,
            },
            // Default vendors
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: 10,
              reuseExistingChunk: true,
              minSize: 15000,
            },
            // Common app code
            common: {
              minChunks: 2,
              priority: 5,
              reuseExistingChunk: true,
              minSize: 10000,
              name: 'common',
            },
          },
        },
        moduleIds: 'deterministic', // Better caching
        concatenateModules: true, // Scope hoisting
        usedExports: true, // Tree shaking
        sideEffects: true,
      };
    }

    return config;
  },
};

export default nextConfig;