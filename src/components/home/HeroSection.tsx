'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-14 pt-14">
      {/* Subtle Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/wallpaper.png"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
          quality={90}
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
          className="mb-8"
        >
          <div className="relative">
            <Image
              src="/POWER_GRINDERS_TEXT.svg"
              alt="Power Grinders"
              width={700}
              height={120}
              className="mx-auto drop-shadow-[0_0_50px_rgba(134,197,32,0.6)] relative z-10"
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
          Elite Community of Post-Apocalyptic Survivors
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/apply"
            className="inline-flex border border-white/10 bg-[#86C520] hover:bg-[#75ad1c] text-white px-6 py-4 font-semibold transition shadow-[0_0_20px_rgba(134,197,32,0.3)] hover:shadow-[0_0_30px_rgba(134,197,32,0.5)]"
          >
            Apply Now
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        {/* Stats - Crypto style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:bg-accent/10 hover:border-accent/30 transition shadow-lg hover:shadow-[0_0_20px_rgba(134,197,32,0.2)]">
            <div className="text-3xl font-bold text-accent">45</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Total Supply</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:bg-accent/10 hover:border-accent/30 transition shadow-lg hover:shadow-[0_0_20px_rgba(134,197,32,0.2)]">
            <div className="text-3xl font-bold text-accent">1/1</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Unique</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:bg-accent/10 hover:border-accent/30 transition shadow-lg hover:shadow-[0_0_20px_rgba(134,197,32,0.2)]">
            <div className="text-3xl font-bold text-accent">OG</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Exclusive</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
