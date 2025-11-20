'use client';

import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#F2ECC8]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6aa019]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="text-center relative z-10 max-w-2xl">
        {/* Large 404 with glowing effect */}
        <div className="relative mb-8">
          <h1 className="text-[12rem] sm:text-[16rem] font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#F2ECC8] via-[#aca686] to-[#6aa019] mb-4 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 blur-2xl opacity-30">
            <h1 className="text-[12rem] sm:text-[16rem] font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#F2ECC8] via-[#aca686] to-[#6aa019] leading-none">
              404
            </h1>
          </div>
        </div>

        {/* Icon with animation */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Search className="w-16 h-16 text-[#F2ECC8] animate-bounce" />
            <div className="absolute inset-0 blur-xl opacity-50">
              <Search className="w-16 h-16 text-[#F2ECC8]" />
            </div>
          </div>
        </div>

        {/* Title and description */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          {t.notFound.title}
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-md mx-auto leading-relaxed">
          {t.notFound.description}
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/gallery"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#F2ECC8] to-[#aca686] hover:from-[#aca686] hover:to-[#6aa019] text-black px-8 py-4 font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-[#F2ECC8]/50 hover:scale-105"
          >
            <Home size={24} className="group-hover:rotate-12 transition-transform" />
            {t.notFound.backToGallery}
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-[#F2ECC8]/50 px-8 py-4 font-semibold text-lg transition-all duration-300"
          >
            <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            {t.notFound.goBack}
          </button>
        </div>

        {/* Decorative line */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#F2ECC8]/50"></div>
          <div className="w-2 h-2 rounded-full bg-[#F2ECC8]"></div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#F2ECC8]/50"></div>
        </div>
      </div>
    </div>
  );
}