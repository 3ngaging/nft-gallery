'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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
          {t.terms.backToHome}
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-white">
            {t.terms.title}
          </h1>
          <p className="text-gray-400">{t.terms.lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">{t.terms.section1Title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t.terms.section1Content}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">{t.terms.section2Title}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t.terms.section2Content}
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>{t.terms.section2List1}</li>
              <li>{t.terms.section2List2}</li>
              <li>{t.terms.section2List3}</li>
              <li>{t.terms.section2List4}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">{t.terms.section3Title}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t.terms.section3Content}
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>{t.terms.section3List1}</li>
              <li>{t.terms.section3List2}</li>
              <li>{t.terms.section3List3}</li>
              <li>{t.terms.section3List4}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">{t.terms.section4Title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t.terms.section4Content}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">{t.terms.section5Title}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t.terms.section5Content}
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>{t.terms.section5List1}</li>
              <li>{t.terms.section5List2}</li>
              <li>{t.terms.section5List3}</li>
              <li>{t.terms.section5List4}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">{t.terms.section6Title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t.terms.section6Content}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">{t.terms.section7Title}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t.terms.section7Content}
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>{t.terms.section7List1}</li>
              <li>{t.terms.section7List2}</li>
              <li>{t.terms.section7List3}</li>
              <li>{t.terms.section7List4}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">{t.terms.section8Title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t.terms.section8Content}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">{t.terms.section9Title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t.terms.section9Content}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">{t.terms.section10Title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t.terms.section10Content}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
