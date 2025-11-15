'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { Language, getTranslation, type TranslationKeys } from './i18n';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const VALID_LANGUAGES: readonly Language[] = ['en', 'es', 'zh', 'hi', 'ko', 'it', 'tr', 'pt'];

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize language from localStorage (lazy initialization)
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    const savedLang = localStorage.getItem('language') as Language;
    return savedLang && VALID_LANGUAGES.includes(savedLang) ? savedLang : 'en';
  });
  const [mounted, setMounted] = useState(() => typeof window === 'undefined');

  // Set mounted flag on client-side only using layoutEffect to avoid cascading
  useEffect(() => {
    if (!mounted) {
      // Use setTimeout to avoid cascading effect
      const timeoutId = setTimeout(() => setMounted(true), 0);
      return () => clearTimeout(timeoutId);
    }
  }, [mounted]);

  // Save language when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = useMemo(() => getTranslation(language), [language]);

  // Prevent hydration mismatch by rendering after mount
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language, setLanguage, t }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
