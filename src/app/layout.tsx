import type { Metadata } from 'next';
import { Inter, Rajdhani } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import GridBackground from '@/components/GridBackground';
import { LanguageProvider } from '@/lib/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-rajdhani',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Power Grinders - Exclusive Community',
  description: 'Apply to join our exclusive community of 45 members',
  keywords: ['NFT', 'Community', 'Power Grinders', 'Exclusive', 'Web3'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${rajdhani.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://fkpqwnsdqduuqxvajale.supabase.co" />
        {/* Preload LCP image para mejorar descubrimiento */}
        <link
          rel="preload"
          as="image"
          href="/_next/image?url=%2Fimages%2Fwallpaper.png&w=750&q=85"
          fetchPriority="high"
          type="image/webp"
        />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <GridBackground />
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}