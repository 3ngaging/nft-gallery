'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, handleLogOut } = useDynamicContext();
  const { t } = useLanguage();

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

            {/* Language Selector */}
            <LanguageSelector />

            {/* Auth/Apply Button */}
            {user ? (
              <div className="flex items-center gap-3">
                <Link
                  href="/profile"
                  className="text-primary-light/80 hover:text-accent transition flex items-center gap-1.5"
                >
                  <User size={16} />
                  <span className="font-medium text-xs">
                    {user.username || user.email || t.profile.noUsername}
                  </span>
                </Link>
                <button
                  onClick={handleLogOut}
                  className="text-primary-light/60 hover:text-accent transition text-xs uppercase tracking-wider"
                >
                  {t.nav.logout}
                </button>
              </div>
            ) : (
              <Link
                href="/apply"
                className="border border-white/10 bg-[#86C520] hover:bg-[#75ad1c] text-white px-4 py-2 font-semibold transition shadow-[0_0_20px_rgba(134,197,32,0.3)] hover:shadow-[0_0_30px_rgba(134,197,32,0.5)] text-sm"
              >
                {t.home.applyNow}
              </Link>
            )}
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

            {user ? (
              <>
                <Link
                  href="/profile"
                  className="block text-primary-light/80 hover:text-accent transition py-2 text-xs uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.profile}
                </Link>
                <button
                  onClick={() => {
                    handleLogOut();
                    setIsOpen(false);
                  }}
                  className="w-full text-left text-primary-light/60 hover:text-accent transition py-2 text-xs uppercase tracking-wider"
                >
                  {t.nav.logout}
                </button>
              </>
            ) : (
              <Link
                href="/apply"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-6 py-2.5 mt-2 bg-accent hover:bg-accent/90 text-primary-dark font-bold text-xs uppercase tracking-wider transition shadow-lg"
              >
                {t.home.applyNow}
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
