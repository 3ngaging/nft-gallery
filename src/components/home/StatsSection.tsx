'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Crown, MessageCircle, LucideIcon } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { useNFTCount } from '@/hooks/useNFTCount';
import { memo, useMemo } from 'react';

type StatCardProps = {
  value: string;
  label: string;
  icon: LucideIcon;
  index: number;
};

// Memoized stat card component to prevent unnecessary re-renders
const StatCard = memo(({ value, label, icon: Icon, index }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-center hover:bg-accent/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(134,197,32,0.4)] hover:scale-105"
  >
    <Icon className="w-8 h-8 mx-auto mb-3 text-[#86C520]" />
    <div className="text-3xl font-bold text-white mb-1">{value}</div>
    <p className="text-sm text-gray-400 uppercase tracking-wide">{label}</p>
  </motion.div>
));

StatCard.displayName = 'StatCard';

export default function StatsSection() {
  const { t } = useLanguage();
  const { count: nftCount } = useNFTCount();

  // Memoize stats array to prevent recreation on every render
  const stats = useMemo(() => [
    { value: nftCount.toString(), label: t.home.totalSupply, icon: Shield },
    { value: '1/1', label: t.home.unique, icon: Crown },
    { value: 'OG', label: t.home.ogExclusive, icon: Users },
    { value: '24/7', label: t.home.community247, icon: MessageCircle }
  ], [nftCount, t.home.totalSupply, t.home.unique, t.home.ogExclusive, t.home.community247]);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-black via-primary-dark/5 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
