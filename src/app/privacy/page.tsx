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
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-white">
            {t.home.privacyPolicy}
          </h1>
          <p className="text-gray-400">Last Updated: November 15, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Power Grinders collects information to provide better services to our users. We collect information in the following ways:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Information you provide to us (name, email, social media handles)</li>
              <li>Information from your use of our services</li>
              <li>Wallet addresses you connect to our platform</li>
              <li>Activity data from community engagement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">2. How We Use Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>To provide, maintain, and improve our services</li>
              <li>To verify membership and grant access to exclusive content</li>
              <li>To track community points and engagement</li>
              <li>To communicate with you about updates and opportunities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">3. Information Sharing</h2>
            <p className="text-gray-300 leading-relaxed">
              We do not share your personal information with companies, organizations, or individuals outside of Power Grinders except in the following cases:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
              <li>With your consent</li>
              <li>For legal reasons</li>
              <li>To protect rights, property, or safety</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">4. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">5. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Request correction of your data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#F2ECC8] mb-4">6. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through our community channels.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
