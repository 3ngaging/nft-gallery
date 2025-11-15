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
          className="inline-flex items-center gap-2 text-[#86C520] hover:text-[#75ad1c] mb-8 transition"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-white">
            {t.home.termsOfService}
          </h1>
          <p className="text-gray-400">Last Updated: November 15, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#86C520] mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using Power Grinders services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#86C520] mb-4">2. Membership</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Power Grinders membership is limited and exclusive:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Limited to 45 members maximum</li>
              <li>Application review process required</li>
              <li>Membership may be revoked for violations of community guidelines</li>
              <li>No refunds for NFT purchases</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#86C520] mb-4">3. Community Guidelines</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              As a member, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Respect other community members</li>
              <li>Not share confidential alpha or information outside the community</li>
              <li>Participate in good faith</li>
              <li>Not engage in spam, scams, or malicious activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#86C520] mb-4">4. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              All content, including NFT artwork, logos, and branding materials, are the property of Power Grinders or its licensors. You may not use, reproduce, or distribute any content without explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#86C520] mb-4">5. NFT Ownership</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you purchase a Power Grinders NFT:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>You own the NFT and can transfer or sell it</li>
              <li>Community access is tied to NFT ownership</li>
              <li>Selling your NFT transfers community access to the new owner</li>
              <li>You receive a limited license to use the artwork for personal purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#86C520] mb-4">6. Points System</h2>
            <p className="text-gray-300 leading-relaxed">
              The points system is for gamification and community engagement. Points have no monetary value and cannot be exchanged for cash or other benefits unless explicitly stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#86C520] mb-4">7. Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Power Grinders provides information and community access but:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Does not provide financial advice</li>
              <li>Makes no guarantees about investment returns</li>
              <li>Is not responsible for individual trading decisions</li>
              <li>Cryptocurrency trading involves substantial risk</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#86C520] mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              Power Grinders shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#86C520] mb-4">9. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#86C520] mb-4">10. Contact</h2>
            <p className="text-gray-300 leading-relaxed">
              For questions about these Terms of Service, please contact us through our official community channels.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
