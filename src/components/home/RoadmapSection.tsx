'use client';

import { motion } from 'framer-motion';
import { Rocket, Trophy, Users, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function RoadmapSection() {
  const { t } = useLanguage();

  const phases = [
    {
      phase: t.roadmap.phase1Number,
      title: t.roadmap.phase1Title,
      description: t.roadmap.phase1Desc,
      icon: Rocket,
      status: t.roadmap.phase1Status,
      color: 'bg-accent'
    },
    {
      phase: t.roadmap.phase2Number,
      title: t.roadmap.phase2Title,
      description: t.roadmap.phase2Desc,
      icon: Users,
      status: t.roadmap.phase1Status,
      color: 'bg-accent/70'
    },
    {
      phase: t.roadmap.phase3Number,
      title: t.roadmap.phase3Title,
      description: t.roadmap.phase3Desc,
      icon: Trophy,
      status: t.roadmap.phase2Status,
      color: 'bg-accent/50'
    },
    {
      phase: t.roadmap.phase4Number,
      title: t.roadmap.phase4Title,
      description: t.roadmap.phase4Desc,
      icon: Zap,
      status: t.roadmap.phase4Status,
      color: 'bg-black'
    }
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-black via-[#86C520]/5 to-black">

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="bg-[#86C520]/20 backdrop-blur-sm px-4 py-2 inline-block mb-4 border border-[#86C520]/30">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">{t.roadmap.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.roadmap.title1} <span className="gradient-text-primary">{t.roadmap.title2}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.roadmap.subtitle}
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Enhanced Vertical line - More visible */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:w-1.5 bg-gradient-to-b from-accent via-accent/60 to-accent/30 shadow-[0_0_20px_rgba(134,197,32,0.5)]"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                  <div className="bg-gradient-to-r from-[#86C520]/20 via-[#86C520]/10 to-[#86C520]/20 border border-[#86C520]/30 backdrop-blur-sm p-4 sm:p-6 transition-all duration-300 hover:border-[#86C520]/50 hover:bg-[#86C520]/25 shadow-[0_0_50px_rgba(134,197,32,0.2)] hover:shadow-[0_0_70px_rgba(134,197,32,0.4)] group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`${phase.color} px-3 py-1 text-xs font-bold text-[#86C520]`}>
                        {phase.status}
                      </div>
                      <span className="text-sm text-accent font-semibold">{phase.phase}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#86C520] transition-colors duration-300">
                      {phase.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon - Enhanced with better visibility */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-10 h-10 md:w-14 md:h-14 bg-accent rounded-full flex items-center justify-center border-4 md:border-[6px] border-[#86C520] shadow-[0_0_30px_rgba(134,197,32,0.6)] z-10 hover:scale-110 transition-transform duration-300">
                  <phase.icon className="text-[#86C520]" size={24} />
                </div>

                {/* Connecting line from icon to card - More visible */}
                <div className={`absolute ${index % 2 === 0 ? 'md:right-1/2 md:mr-7' : 'md:left-1/2 md:ml-7'} left-14 w-6 md:w-[calc(50%-3.5rem)] h-0.5 md:h-1 bg-accent/40 top-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_10px_rgba(134,197,32,0.3)]`}></div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background effects */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-[#86C520]/5 to-black"></div> */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#86C520]/20 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#86C520]/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#86C520]/10 rounded-full blur-[100px]"></div>
    </section>
  );
}
