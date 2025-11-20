'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function UserProfileNotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20 px-4 flex items-center justify-center">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold mb-4">{t.userProfile.notFoundTitle}</h1>
        <p className="text-gray-400 mb-6">
          {t.userProfile.notFoundDescription}
        </p>
        <a
          href="/gallery"
          className="inline-block bg-accent hover:bg-accent/90 text-black px-6 py-3 font-semibold transition"
        >
          {t.userProfile.backButton}
        </a>
      </div>
    </div>
  );
}
