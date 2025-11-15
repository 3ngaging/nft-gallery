'use client';

import { motion } from 'framer-motion';
import { Zap, Users, Shield } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: t.home.exclusiveAlpha,
      desc: t.home.exclusiveAlphaDesc
    },
    {
      icon: Users,
      title: t.home.eliteNetwork,
      desc: t.home.eliteNetworkDesc
    },
    {
      icon: Shield,
      title: t.home.protectedAccess,
      desc: t.home.protectedAccessDesc
    }
  ];

  return (
    <section className="relative py-20 px-4">
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
          <div className="inline-block bg-[#86C520]/20 backdrop-blur-sm px-4 py-2 mb-4 border border-[#86C520]/30">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">{t.home.benefits}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
            {t.home.whyPowerGrinders.split(' ').slice(0, -2).join(' ')} <span className="gradient-text-primary">Power Grinders</span>
          </h2>
          <p className="text-lg text-gray-400">
            {t.home.moreThanNFTs}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
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
  );
}
