'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, getTranslation, type TranslationKeys } from './i18n';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  // Load saved language on mount (client-side only)
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['en', 'es', 'zh', 'hi', 'ko'].includes(savedLang)) {
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  // Save language when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (mounted && typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = getTranslation(language);

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
