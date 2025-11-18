'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { useNFTCount } from '@/hooks/useNFTCount';

export default function HeroSection() {
  const { t } = useLanguage();
  const { count: nftCount } = useNFTCount();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-14 pt-14">
      {/* Subtle Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/wallpaper.png"
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
          fetchPriority="high"
          quality={75}
          sizes="100vw"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black"></div> */}

        {/* Green glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 mt-12 md:mt-16"
        >
          <div className="relative">
            <Image
              src="/POWER_GRINDERS_TEXT.svg"
              alt="Power Grinders"
              width={700}
              height={120}
              className="mx-auto drop-shadow-[#F2ECC8] relative z-10"
            />
            {/* Extra glow behind logo */}
            <div className="absolute inset-0 blur-[60px] opacity-40 bg-accent/30 -z-10"></div>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-primary-light/90 mb-12 font-light tracking-wide"
        >
          {t.home.tagline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/apply"
            className="inline-flex border border-white/10 bg-[#F2ECC8] hover:bg-[#aca686] text-black px-6 py-4 font-semibold transition shadow-[#a59f7e] hover:shadow-[#8d886c]"
          >
            {t.home.applyNow}
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        {/* Stats - Crypto style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:bg-accent/10 hover:border-accent/30 transition shadow-lg">
            <div className="text-3xl font-bold text-accent">{nftCount}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">{t.home.totalSupply}</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:bg-accent/10 hover:border-accent/30 transition shadow-lg">
            <div className="text-3xl font-bold text-accent">1/1</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">{t.home.unique}</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:bg-accent/10 hover:border-accent/30 transition shadow-lg">
            <div className="text-3xl font-bold text-accent">OG</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">{t.home.ogExclusive}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
