'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Crown, MessageCircle } from 'lucide-react';

const stats = [
  { value: '45', label: 'Total Supply', icon: Shield },
  { value: '1/1', label: 'Unique Pieces', icon: Crown },
  { value: 'OG', label: 'Exclusive', icon: Users },
  { value: '24/7', label: 'Community', icon: MessageCircle }
];

export default function StatsSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-black via-primary-dark/5 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-center hover:bg-accent/10 hover:border-accent/30 transition-all duration-200 shadow-lg hover:shadow-[0_0_20px_rgba(134,197,32,0.2)]"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#86C520]" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <p className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
