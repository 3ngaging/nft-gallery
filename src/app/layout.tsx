import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import GridBackground from '@/components/GridBackground';
import { DynamicProvider } from '@/lib/dynamic';
import { LanguageProvider } from '@/lib/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Power Grinders - Exclusive Community',
  description: 'Apply to join our exclusive community of 45 members',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <GridBackground />
        <LanguageProvider>
          <DynamicProvider>
            <Navbar />
            <main className="min-h-screen pt-16">
              {children}
            </main>
          </DynamicProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}