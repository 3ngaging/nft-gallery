'use client';

import { motion } from 'framer-motion';
import { Shield, Target, Lightbulb, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function TeamSection() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t.team.value1Title,
      description: t.team.value1Desc
    },
    {
      icon: Target,
      title: t.team.value2Title,
      description: t.team.value2Desc
    },
    {
      icon: Lightbulb,
      title: t.team.value3Title,
      description: t.team.value3Desc
    },
    {
      icon: Heart,
      title: t.team.value4Title,
      description: t.team.value4Desc
    }
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-black">
      {/* Background effects */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-accent/5 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDuration: '6s' }}></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="bg-[#F2ECC8]/20 backdrop-blur-sm px-4 py-2 inline-block mb-4 border border-[#F2ECC8]/30">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">{t.team.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.team.title1} <span className="gradient-text-primary">{t.team.title2}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t.team.subtitle}
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group mb-5 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-8 transition-all duration-300"
        >
          {/* Animated border glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              {t.team.missionTitle}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              {t.team.missionDesc}
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-[#F2ECC8]/50 p-8 transition-all duration-300 hover:bg-[#F2ECC8]/5 hover:shadow-[#a5a082]"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F2ECC8]/20 border border-[#F2ECC8]/40 flex items-center justify-center group-hover:bg-[#F2ECC8]/30 transition-colors">
                  <value.icon className="w-6 h-6 text-[#F2ECC8]" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-6 mt-16"
        >
          <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-[#F2ECC8]/50 p-8 transition-all duration-300 hover:bg-[#F2ECC8]/5 hover:shadow-[#a5a082]">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{t.team.stat1Value}</div>
            <div className="text-sm text-[#F2ECC8] uppercase tracking-wider">{t.team.stat1Label}</div>
          </div>
          <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-[#F2ECC8]/50 p-8 transition-all duration-300 hover:bg-[#F2ECC8]/5 hover:shadow-[#a5a082]">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{t.team.stat2Value}</div>
            <div className="text-sm text-[#F2ECC8] uppercase tracking-wider">{t.team.stat2Label}</div>
          </div>
          <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-[#F2ECC8]/50 p-8 transition-all duration-300 hover:bg-[#F2ECC8]/5 hover:shadow-[#a5a082]">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{t.team.stat3Value}</div>
            <div className="text-sm text-[#F2ECC8] uppercase tracking-wider">{t.team.stat3Label}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
