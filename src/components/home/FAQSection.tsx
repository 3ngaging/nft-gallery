'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-black via-primary-dark/30 to-black">
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/15 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '5s' }}></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '7s' }}></div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="bg-[#F2ECC8]/20 backdrop-blur-sm px-4 py-2 inline-block mb-4 border border-[#F2ECC8]/30">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">{t.faq.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.faq.title1} <span className="gradient-text-primary">{t.faq.title2}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.faq.subtitle}
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {[
            { question: t.faq.question1, answer: t.faq.answer1 },
            { question: t.faq.question2, answer: t.faq.answer2 },
            { question: t.faq.question3, answer: t.faq.answer3 },
            { question: t.faq.question4, answer: t.faq.answer4 },
            { question: t.faq.question5, answer: t.faq.answer5 },
            { question: t.faq.question6, answer: t.faq.answer6 }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-[#F2ECC8]/50 overflow-hidden transition-all duration-300 hover:bg-[#F2ECC8]/5 shadow-[#858068] hover:shadow-[#a5a082]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-semibold text-white group-hover:text-accent transition-colors duration-300">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 ml-4 ${openIndex === index ? 'text-accent' : 'text-gray-400'}`}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">{t.faq.stillHaveQuestions}</p>
          <a
            href="https://discord.gg/powergrinders"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent/90 text-primary-dark px-8 py-3 font-semibold transition shadow-[0_3px_0_0_#aca686] hover:shadow-[0_1px_0_0_#aca686] hover:translate-y-[2px] active:translate-y-[3px] active:shadow-none"
          >
            {t.faq.joinDiscord}
          </a>
        </motion.div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F2ECC8]/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F2ECC8]/10 rounded-full blur-[100px]"></div>
    </section>
  );
}
