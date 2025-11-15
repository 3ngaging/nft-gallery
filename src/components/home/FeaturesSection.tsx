'use client';

import { motion } from 'framer-motion';
import { Zap, Users, Shield, LucideIcon } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { memo, useMemo } from 'react';

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  desc: string;
  index: number;
};

// Memoized feature card component with enhanced effects
const FeatureCard = memo(({ icon: Icon, title, desc, index }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-accent/10 hover:border-accent/30 hover:scale-105 p-8 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(134,197,32,0.3)] group"
  >
    <div className="w-14 h-14 mb-5 bg-accent/20 border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
      <Icon className="w-7 h-7 text-accent group-hover:text-black transition-colors duration-300" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </motion.div>
));

FeatureCard.displayName = 'FeatureCard';

export default function FeaturesSection() {
  const { t } = useLanguage();

  // Memoize features array to prevent recreation on every render
  const features = useMemo(() => [
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
  ], [t.home.exclusiveAlpha, t.home.exclusiveAlphaDesc, t.home.eliteNetwork, t.home.eliteNetworkDesc, t.home.protectedAccess, t.home.protectedAccessDesc]);

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-black">
      {/* Enhanced Background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '5s' }}></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '7s' }}></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="bg-[#86C520]/20 backdrop-blur-sm px-4 py-2 inline-block mb-4 border border-[#86C520]/30">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">{t.home.benefits}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t.home.whyPowerGrinders.split(' ').slice(0, -2).join(' ')} <span className="gradient-text-primary">Power Grinders</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.home.moreThanNFTs}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
