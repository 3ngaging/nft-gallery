'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function GalleryPreview() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 px-4">
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
          <div className="inline-block bg-[#86C520]/20 backdrop-blur-sm px-4 py-2 mb-4 border border-[#86C520]/30">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">{t.home.nftCollection}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
            {t.home.theCollection.split(' ')[0]} <span className="gradient-text-primary">{t.home.theCollection.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-lg text-gray-400">
            {t.home.collectionDesc}
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
            {t.home.viewFullGallery}
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
