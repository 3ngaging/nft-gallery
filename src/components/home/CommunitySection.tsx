'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Users, Sparkles, TrendingUp, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { useMemo } from 'react';

export default function CommunitySection() {
  const { t } = useLanguage();

  // Memoize benefits array to prevent recreation on every render
  const benefits = useMemo(() => [
    { icon: Sparkles, text: t.home.communityBenefit1 },
    { icon: TrendingUp, text: t.home.communityBenefit2 },
    { icon: MessageSquare, text: t.home.communityBenefit3 },
    { icon: Users, text: t.home.communityBenefit4 },
  ], [t.home.communityBenefit1, t.home.communityBenefit2, t.home.communityBenefit3, t.home.communityBenefit4]);

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Animated background with green glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#86C520]/5 to-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#86C520]/20 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#86C520]/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#86C520]/10 rounded-full blur-[100px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-block bg-[#86C520]/20 backdrop-blur-sm px-6 py-2 mb-6 border border-[#86C520]/40 shadow-[0_0_30px_rgba(134,197,32,0.3)]">
            <span className="text-sm font-bold text-[#86C520] uppercase tracking-wider">
              {t.home.communityBadge}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            {t.home.communityTitle.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-[#86C520] drop-shadow-[0_0_30px_rgba(134,197,32,0.5)]">
              {t.home.communityTitle.split(' ').slice(-1)}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.home.communitySubtitle}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-[#86C520]/50 p-8 transition-all duration-300 hover:bg-[#86C520]/5 hover:shadow-[0_0_40px_rgba(134,197,32,0.2)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#86C520]/20 border border-[#86C520]/40 flex items-center justify-center group-hover:bg-[#86C520]/30 transition-colors">
                  <benefit.icon className="w-6 h-6 text-[#86C520]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#86C520] flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-white">{benefit.text}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#86C520]/20 via-[#86C520]/10 to-[#86C520]/20 border border-[#86C520]/30 backdrop-blur-sm p-10 shadow-[0_0_50px_rgba(134,197,32,0.2)]">
            <h3 className="text-3xl font-bold mb-4 text-white">
              {t.home.communityCtaTitle}
            </h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              {t.home.communityCtaDesc}
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-[#86C520] hover:bg-[#75ad1c] text-white px-8 py-4 text-lg font-bold transition-all shadow-[0_0_30px_rgba(134,197,32,0.4)] hover:shadow-[0_0_50px_rgba(134,197,32,0.6)] hover:scale-105"
            >
              {t.home.applyNow}
              <Sparkles className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
