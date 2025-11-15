'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();

  return (
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
          <div className="inline-block mb-5 px-5 py-2 bg-[#F2ECC8]/20 backdrop-blur-sm border border-[#F2ECC8]/30">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">{t.home.limitedMembers}</p>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-5 text-white">
            {t.home.readyToGrind.split(' ').slice(0, -1).join(' ')} <span className="gradient-text-primary">{t.home.readyToGrind.split(' ').slice(-1)}</span>?
          </h2>

          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            {t.home.readyToGrindDesc}
          </p>

          <Link
            href="/apply"
            className="inline-flex items-center gap-3 px-10 py-4 border border-white/10 bg-[#F2ECC8] hover:bg-[#aca686] text-white font-semibold transition shadow-[#a59f7e] hover:shadow-[#dfd7ac]"
          >
            {t.home.applyNow}
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
