'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Twitter, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-black/90 backdrop-blur-md border-t border-white/10">
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/logo_no_background.svg"
                alt="Power Grinders"
                width={32}
                height={32}
              />
              <span className="text-base font-bold text-primary-light">Power Grinders</span>
            </div>
            <p className="text-primary-light/60 text-xs">
              {t.home.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-primary-light font-semibold mb-3 text-xs uppercase tracking-wider">{t.home.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-primary-light/70 hover:text-accent transition text-xs">{t.nav.home}</Link></li>
              <li><Link href="/gallery" className="text-primary-light/70 hover:text-accent transition text-xs">{t.nav.gallery}</Link></li>
              <li><Link href="/apply" className="text-primary-light/70 hover:text-accent transition text-xs">{t.nav.apply}</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-primary-light font-semibold mb-3 text-xs uppercase tracking-wider">{t.home.community}</h3>
            <div className="flex gap-3">
              <a href="#" className="text-primary-light/70 hover:text-accent transition p-2.5 bg-primary-medium/20 hover:bg-accent/20 text-[#86C520]">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-primary-light/70 hover:text-accent transition p-2.5 bg-primary-medium/20 hover:bg-accent/20 text-[#86C520]">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 text-center">
          <hr className="border-t border-primary-medium/5 w-full border-[0.5px] opacity-5" />
          <p className="text-primary-light/50 text-xs pt-6">
            © 2025 Power Grinders. {t.home.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
