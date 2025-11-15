import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import GridBackground from '@/components/GridBackground';
import { LanguageProvider } from '@/lib/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
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
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fkpqwnsdqduuqxvajale.supabase.co" />
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