'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#F2ECC8] hover:text-[#aca686] mb-8 transition"
        >
          <ArrowLeft size={20} />
          {t.privacy.backToHome}
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-white">
            {t.privacy.title}
          </h1>
          <p className="text-gray-400">{t.privacy.lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">{t.privacy.section1Title}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t.privacy.section1Content}
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>{t.privacy.section1List1}</li>
              <li>{t.privacy.section1List2}</li>
              <li>{t.privacy.section1List3}</li>
              <li>{t.privacy.section1List4}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">{t.privacy.section2Title}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t.privacy.section2Content}
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>{t.privacy.section2List1}</li>
              <li>{t.privacy.section2List2}</li>
              <li>{t.privacy.section2List3}</li>
              <li>{t.privacy.section2List4}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">{t.privacy.section3Title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t.privacy.section3Content}
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
              <li>{t.privacy.section3List1}</li>
              <li>{t.privacy.section3List2}</li>
              <li>{t.privacy.section3List3}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">{t.privacy.section4Title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t.privacy.section4Content}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">{t.privacy.section5Title}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t.privacy.section5Content}
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>{t.privacy.section5List1}</li>
              <li>{t.privacy.section5List2}</li>
              <li>{t.privacy.section5List3}</li>
              <li>{t.privacy.section5List4}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">{t.privacy.section6Title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t.privacy.section6Content}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
