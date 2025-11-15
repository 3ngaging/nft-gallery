'use client';

import { motion } from 'framer-motion';
import { Rocket, Trophy, Users, Zap, CheckCircle2, Clock, Lock } from 'lucide-react';
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
      statusIcon: CheckCircle2,
      state: 'completed', // completed, in-progress, locked
      colors: {
        bg: 'bg-emerald-600',
        border: 'border-emerald-600',
        text: 'text-emerald-400',
        glow: 'shadow-[0_0_30px_rgba(5,150,105,0.25)]',
        glowHover: 'group-hover:shadow-[0_0_40px_rgba(5,150,105,0.4)]',
        badge: 'bg-emerald-600',
        progress: 'from-emerald-600 to-emerald-500'
      }
    },
    {
      phase: t.roadmap.phase2Number,
      title: t.roadmap.phase2Title,
      description: t.roadmap.phase2Desc,
      icon: Users,
      status: t.roadmap.phase1Status,
      statusIcon: CheckCircle2,
      state: 'completed',
      colors: {
        bg: 'bg-emerald-600',
        border: 'border-emerald-600',
        text: 'text-emerald-400',
        glow: 'shadow-[0_0_30px_rgba(5,150,105,0.25)]',
        glowHover: 'group-hover:shadow-[0_0_40px_rgba(5,150,105,0.4)]',
        badge: 'bg-emerald-600',
        progress: 'from-emerald-600 to-emerald-500'
      }
    },
    {
      phase: t.roadmap.phase3Number,
      title: t.roadmap.phase3Title,
      description: t.roadmap.phase3Desc,
      icon: Trophy,
      status: t.roadmap.phase2Status,
      statusIcon: Clock,
      state: 'in-progress',
      colors: {
        bg: 'bg-amber-600',
        border: 'border-amber-600',
        text: 'text-amber-400',
        glow: 'shadow-[0_0_30px_rgba(217,119,6,0.25)]',
        glowHover: 'group-hover:shadow-[0_0_40px_rgba(217,119,6,0.4)]',
        badge: 'bg-amber-600',
        progress: 'from-amber-600 to-amber-500'
      }
    },
    {
      phase: t.roadmap.phase4Number,
      title: t.roadmap.phase4Title,
      description: t.roadmap.phase4Desc,
      icon: Zap,
      status: t.roadmap.phase4Status,
      statusIcon: Lock,
      state: 'locked',
      colors: {
        bg: 'bg-slate-700',
        border: 'border-slate-700',
        text: 'text-slate-500',
        glow: 'shadow-[0_0_20px_rgba(51,65,85,0.2)]',
        glowHover: 'group-hover:shadow-[0_0_30px_rgba(51,65,85,0.3)]',
        badge: 'bg-slate-700',
        progress: 'from-slate-700 to-slate-600'
      }
    }
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-accent/5 to-black -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="bg-[#F2ECC8]/20 backdrop-blur-sm px-4 py-2 inline-block mb-4 border border-[#F2ECC8]/30">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">{t.roadmap.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t.roadmap.title1} <span className="text-accent">{t.roadmap.title2}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.roadmap.subtitle}
          </p>
        </motion.div>

        {/* Roadmap Grid - Responsive */}
        <div className="relative">
          {/* Desktop: Horizontal connecting line through all circles */}
          <div className="hidden lg:block absolute top-[88px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20"></div>

          {/* Mobile: Vertical line */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-accent/20"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Mobile timeline dot & connector */}
                <div className={`lg:hidden absolute left-0 top-8 w-20 h-1 ${phase.colors.bg} opacity-30`}></div>
                <div
                  className={`lg:hidden absolute left-6 top-6 w-5 h-5 rounded-full border-2 ${phase.colors.bg} ${phase.colors.border} ${phase.colors.glow}`}
                ></div>

                {/* Card Container */}
                <div className="ml-20 lg:ml-0 group">
                  {/* Icon Circle */}
                  <div className="mb-6 relative">
                    <div
                      className={`w-16 h-16 lg:w-20 lg:h-20 mx-auto rounded-full flex items-center justify-center border-4 transition-all duration-300 relative z-10 ${phase.colors.bg} ${phase.colors.border} ${phase.colors.glow} ${phase.colors.glowHover} group-hover:scale-110`}
                    >
                      <phase.icon
                        className={phase.state === 'locked' ? 'text-white/50' : 'text-white'}
                        size={28}
                      />
                    </div>

                    {/* Status Icon Badge */}
                    <div
                      className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center z-20 ${phase.colors.badge}`}
                    >
                      <phase.statusIcon
                        className="text-white"
                        size={14}
                      />
                    </div>
                  </div>

                  {/* Phase Number */}
                  <div className="text-center mb-3">
                    <span className={`text-xs font-bold ${phase.colors.text} uppercase tracking-widest`}>
                      {phase.phase}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-5 transition-all duration-300 group-hover:bg-white/10 group-hover:${phase.colors.border} group-hover:border-opacity-30 min-h-[240px] flex flex-col`}>
                    {/* Status Badge */}
                    <div className="mb-4">
                      <span
                        className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${phase.colors.badge} text-white`}
                      >
                        {phase.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg font-bold text-white mb-3 group-hover:${phase.colors.text} transition-colors leading-tight`}>
                      {phase.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                      {phase.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: phase.state === 'completed' ? '100%' : phase.state === 'in-progress' ? '50%' : '0%'
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                          className={`h-full bg-gradient-to-r ${phase.colors.progress}`}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
