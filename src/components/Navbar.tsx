'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageSelector from './LanguageSelector';
import PrivyLoginButton, { usePrivyAuth } from './auth/PrivyLoginButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const { authenticated } = usePrivyAuth();

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50 border-b border-white/10 shadow-lg">
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo_no_background.svg"
              alt="Power Grinders"
              width={28}
              height={28}
              className="transition-opacity group-hover:opacity-80"
            />
            <Image
              src="/POWER_GRINDERS_TEXT.svg"
              alt="Power Grinders"
              width={100}
              height={18}
              className="hidden sm:block transition-opacity group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            <Link
              href="/"
              className="text-primary-light/80 hover:text-accent transition font-medium text-xs uppercase tracking-wider"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/gallery"
              className="text-primary-light/80 hover:text-accent transition font-medium text-xs uppercase tracking-wider"
            >
              {t.nav.gallery}
            </Link>

            {/* Profile Link - Only show when authenticated */}
            {authenticated && (
              <Link
                href="/profile"
                className="text-primary-light/80 hover:text-accent transition font-medium text-xs uppercase tracking-wider flex items-center gap-1.5"
              >
                <User size={14} />
                <span>Profile</span>
              </Link>
            )}

            {/* Language Selector */}
            <LanguageSelector />

            {/* Privy Login Button */}
            <PrivyLoginButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-light/80 hover:text-accent transition"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary-dark/95">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/"
              className="block text-primary-light/80 hover:text-accent transition py-2 text-xs uppercase tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/gallery"
              className="block text-primary-light/80 hover:text-accent transition py-2 text-xs uppercase tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.gallery}
            </Link>

            {/* Mobile Profile Link - Only show when authenticated */}
            {authenticated && (
              <Link
                href="/profile"
                className="block text-primary-light/80 hover:text-accent transition py-2 text-xs uppercase tracking-wider flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <User size={14} />
                <span>Profile</span>
              </Link>
            )}

            {/* Mobile Privy Login Button */}
            <div className="mt-4">
              <PrivyLoginButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
