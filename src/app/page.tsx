'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, Zap, Crown, MessageCircle, Twitter } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import StickerSystem from '@/components/StickerSystem';
import TimeDisplay from '@/components/TimeDisplay';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative bg-black min-h-screen">
      <StickerSystem />

      {/* Hero Section - Clean & Professional */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black"></div>

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(#86C520 1px, transparent 1px), linear-gradient(90deg, #86C520 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />

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

      {/* Characters Gallery Section */}
      <section className="relative py-20 px-4 bg-black">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="inline-block bg-[#86C520]/20 backdrop-blur-sm px-4 py-2 inline-block mb-4 border border-[#86C520]/30">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">NFT Collection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
              The <span className="gradient-text-primary">Collection</span>
            </h2>
            <p className="text-lg text-gray-400">
              45 unique characters surviving the wasteland
            </p>
          </motion.div>

          {/* NFT Cards Grid - Clean & Visible */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {[1, 2, 3, 4, 5].map((num, index) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05
                }}
                className="relative aspect-square overflow-hidden bg-primary-dark/20 hover:bg-primary-dark/40 transition-all duration-200 cursor-pointer group"
              >
                <Image
                  src={`/images/nft_${num}.png`}
                  alt={`NFT ${num}`}
                  fill
                  className="object-cover"
                  quality={90}
                />
              </motion.div>
            ))}
          </div>

          {/* View Gallery Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-medium hover:bg-primary-medium/80 text-accent font-semibold uppercase tracking-wider shadow-[0_3px_0_0_#86C520] hover:shadow-[0_1px_0_0_#86C520] hover:translate-y-[2px] transition-all duration-200"
            >
              View Full Gallery
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-primary-dark/5 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '45', label: 'Total Supply', icon: Shield },
              { value: '1/1', label: 'Unique Pieces', icon: Crown },
              { value: 'OG', label: 'Exclusive', icon: Users },
              { value: '24/7', label: 'Community', icon: MessageCircle }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-center hover:bg-accent/10 hover:border-accent/30 transition-all duration-200 shadow-lg hover:shadow-[0_0_20px_rgba(134,197,32,0.2)]"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent text-[#86C520]" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <p className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 bg-black">
        {/* Background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="inline-block bg-[#86C520]/20 backdrop-blur-sm px-4 py-2 inline-block mb-4 border border-[#86C520]/30">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Benefits</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
              Why <span className="gradient-text-primary">Power Grinders</span>
            </h2>
            <p className="text-lg text-gray-400">
              More than NFTs - an elite community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'Exclusive Alpha',
                desc: 'Early access to market insights and trading opportunities'
              },
              {
                icon: Users,
                title: 'Elite Network',
                desc: 'Connect with successful traders in the Solana ecosystem'
              },
              {
                icon: Shield,
                title: 'Protected Access',
                desc: 'Limited to 45 members - quality discussions guaranteed'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-accent/10 hover:border-accent/30 p-8 transition-all duration-200 shadow-lg hover:shadow-[0_0_20px_rgba(134,197,32,0.2)]"
              >
                <div className="w-14 h-14 mb-5 bg-[#86C520]/20 backdrop-blur-sm px-4 py-2 border border-[#86C520]/30 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-black via-primary-dark/5 to-black">
        {/* Green glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/20 rounded-full blur-[150px] -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-5 px-5 py-2 bg-[#86C520]/20 backdrop-blur-sm border border-[#86C520]/30">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">Limited to 45 Members</p>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-5 text-white">
              Ready to <span className="gradient-text-primary">Grind</span>?
            </h2>

            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Join the most exclusive community of Solana OGs.<br />Applications are reviewed carefully.
            </p>

            <Link
              href="/apply"
              className="inline-flex items-center gap-3 px-10 py-4 border border-white/10 bg-[#86C520] hover:bg-[#75ad1c] text-white px-6 py-4 font-semibold transition shadow-[0_0_20px_rgba(134,197,32,0.3)] hover:shadow-[0_0_30px_rgba(134,197,32,0.5)]"
            >
              Apply Now
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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
                Exclusive community for Solana OGs
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-primary-light font-semibold mb-3 text-xs uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-primary-light/70 hover:text-accent transition text-xs">Home</Link></li>
                <li><Link href="/gallery" className="text-primary-light/70 hover:text-accent transition text-xs">Gallery</Link></li>
                <li><Link href="/apply" className="text-primary-light/70 hover:text-accent transition text-xs">Apply</Link></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-primary-light font-semibold mb-3 text-xs uppercase tracking-wider">Community</h3>
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
              © 2025 Power Grinders. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
