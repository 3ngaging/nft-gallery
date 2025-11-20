'use client';

import Link from 'next/link';
import { Home } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F2ECC8] to-[#6aa019] mb-4">
          404
        </h1>
        <h2 className="text-3xl font-bold mb-4">{t.notFound.title}</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          {t.notFound.description}
        </p>
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 bg-[#F2ECC8] hover:bg-[#aca686] text-white px-6 py-3 font-semibold transition shadow-[#a59f7e] hover:shadow-[#dfd7ac]"
        >
          <Home size={20} />
          {t.notFound.backToGallery}
        </Link>
      </div>
    </div>
  );
}