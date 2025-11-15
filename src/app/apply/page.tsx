'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
import { User, Mail, MessageSquare, Twitter, Send } from 'lucide-react';
import Image from 'next/image';
import LoadingScreen from '@/components/LoadingScreen';

export default function ApplyPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    twitter: '',
    discord: '',
    experience: '',
    why: '',
    contribution: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    // Redirect after 3 seconds
    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (loading) {
    return <LoadingScreen />;
  }

  if (submitted) {
    return (
      <div className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/20 rounded-full blur-[150px] -z-10"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="w-20 h-20 mx-auto mb-6 bg-[#86C520]/20 backdrop-blur-sm border-2 border-[#86C520] flex items-center justify-center"
          >
            <Send size={40} className="text-accent" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4 gradient-text-primary">{t.apply.submitted}</h2>
          <p className="text-gray-400 mb-4">
            {t.apply.submittedDesc}
          </p>
          <p className="text-sm text-gray-500">{t.apply.redirecting}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen py-20 px-4">
      {/* Background glow effects */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="mb-6 flex justify-center"
          >
            <Image
              src="/logo_no_background.svg"
              alt="Power Grinders"
              width={80}
              height={80}
              className="drop-shadow-[0_0_20px_rgba(134,197,32,0.4)]"
            />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text-primary drop-shadow-[0_0_30px_rgba(134,197,32,0.3)]">
            {t.apply.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.apply.subtitle}
          </p>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm p-8 md:p-12 border border-white/10 shadow-lg hover:border-accent/30 transition-all duration-200"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                <User size={18} className="text-accent" />
                {t.apply.fullName} *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/30 border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:bg-black/50 transition"
                placeholder={t.apply.namePlaceholder}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                <Mail size={18} className="text-accent" />
                {t.apply.email} *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black/30 border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:bg-black/50 transition"
                placeholder={t.apply.emailPlaceholder}
              />
            </div>

            {/* Social Media */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <Twitter size={18} className="text-accent" />
                  {t.apply.twitterHandle} *
                </label>
                <input
                  type="text"
                  name="twitter"
                  required
                  value={formData.twitter}
                  onChange={handleChange}
                  className="w-full bg-black/30 border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:bg-black/50 transition"
                  placeholder={t.apply.twitterPlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <MessageSquare size={18} className="text-accent" />
                  {t.apply.discordUsername} *
                </label>
                <input
                  type="text"
                  name="discord"
                  required
                  value={formData.discord}
                  onChange={handleChange}
                  className="w-full bg-black/30 border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:bg-black/50 transition"
                  placeholder={t.apply.discordPlaceholder}
                />
              </div>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                {t.apply.experience} *
              </label>
              <textarea
                name="experience"
                required
                value={formData.experience}
                onChange={handleChange}
                rows={4}
                className="w-full bg-black/30 border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:bg-black/50 transition resize-none"
                placeholder={t.apply.experiencePlaceholder}
              />
            </div>

            {/* Why Join */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                {t.apply.whyJoin} *
              </label>
              <textarea
                name="why"
                required
                value={formData.why}
                onChange={handleChange}
                rows={4}
                className="w-full bg-black/30 border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:bg-black/50 transition resize-none"
                placeholder={t.apply.whyPlaceholder}
              />
            </div>

            {/* Contribution */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                {t.apply.contribution} *
              </label>
              <textarea
                name="contribution"
                required
                value={formData.contribution}
                onChange={handleChange}
                rows={4}
                className="w-full bg-black/30 border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:bg-black/50 transition resize-none"
                placeholder={t.apply.contributionPlaceholder}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full border border-white/10 bg-[#86C520] hover:bg-[#75ad1c] text-white px-8 py-4 text-lg font-semibold transition shadow-[0_0_20px_rgba(134,197,32,0.3)] hover:shadow-[0_0_30px_rgba(134,197,32,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black animate-spin" />
                  {t.apply.submitting}
                </>
              ) : (
                <>
                  <Send size={20} />
                  {t.apply.submit}
                </>
              )}
            </motion.button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            {t.apply.required}
          </p>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-center hover:bg-accent/10 hover:border-accent/30 transition-all duration-200 shadow-lg">
            <div className="text-4xl font-bold text-accent mb-2">45</div>
            <p className="text-gray-400 text-sm uppercase tracking-wider">{t.apply.totalSpots}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-center hover:bg-accent/10 hover:border-accent/30 transition-all duration-200 shadow-lg">
            <div className="text-4xl font-bold text-accent mb-2">24-48h</div>
            <p className="text-gray-400 text-sm uppercase tracking-wider">{t.apply.reviewTime}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-center hover:bg-accent/10 hover:border-accent/30 transition-all duration-200 shadow-lg">
            <div className="text-4xl font-bold text-accent mb-2">Elite</div>
            <p className="text-gray-400 text-sm uppercase tracking-wider">{t.apply.eliteCommunity}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
