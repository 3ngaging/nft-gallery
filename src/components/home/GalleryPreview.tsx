'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function GalleryPreview() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-black via-primary-dark/30 to-black">
      {/* Enhanced Background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/15 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '6s' }}></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="bg-[#86C520]/20 backdrop-blur-sm px-4 py-2 inline-block mb-4 border border-[#86C520]/30">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">{t.home.nftCollection}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t.home.theCollection.split(' ')[0]} <span className="gradient-text-primary">{t.home.theCollection.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.home.collectionDesc}
          </p>
        </motion.div>

        {/* NFT Cards Grid - Enhanced with glow effects */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {[1, 2, 3, 4, 5].map((num, index) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1
              }}
              className="relative aspect-square overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/30 hover:bg-accent/5 hover:scale-105 hover:shadow-[0_0_30px_rgba(134,197,32,0.3)] transition-all duration-300 cursor-pointer group"
            >
              <Image
                src={`/images/nft_${num}.png`}
                alt={`NFT ${num}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                loading="lazy"
                quality={90}
              />
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-primary-dark font-semibold uppercase tracking-wider shadow-[0_3px_0_0_#75ad1b] hover:shadow-[0_1px_0_0_#75ad1b] hover:translate-y-[2px] active:translate-y-[3px] active:shadow-none transition-all duration-200"
          >
            {t.home.viewFullGallery}
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
