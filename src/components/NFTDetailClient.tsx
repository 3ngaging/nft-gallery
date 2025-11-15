'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Wallet } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import StickerSystem from './StickerSystem';
import type { NFT, NFTWallet } from '@/lib/supabase';

type NFTDetailClientProps = {
  nft: NFT;
  wallets: NFTWallet[];
};

export default function NFTDetailClient({ nft, wallets }: NFTDetailClientProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20 px-4">
      <StickerSystem />
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8"
        >
          <ArrowLeft size={20} />
          {t.nft.backToGallery}
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden border border-white/10 bg-gray-900">
            <Image
              src={nft.image_url}
              alt={nft.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Details */}
          <div>
            <div className="bg-[#86C520]/20 backdrop-blur-sm px-4 py-2 inline-block mb-4 border border-[#86C520]/30">
              <span className="text-sm font-semibold">#{nft.token_id}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{nft.name}</h1>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {nft.description || t.nft.noDescription}
            </p>

            {/* Wallets Section */}
            <div className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Wallet size={24} className="text-[#86C520]" />
                {t.nft.connectedWallets} ({wallets.length})
              </h3>

              {wallets.length === 0 ? (
                <p className="text-gray-500">{t.nft.noWallets || 'No wallets connected'}</p>
              ) : (
                <div className="space-y-2">
                  {wallets.map((wallet) => (
                    <div
                      key={wallet.id}
                      className="bg-black/30 p-3 font-mono text-sm break-all"
                    >
                      {wallet.wallet_address}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-[#86C520] hover:bg-[#75ad1c] text-white px-6 py-4 font-semibold transition shadow-[0_0_20px_rgba(134,197,32,0.3)] hover:shadow-[0_0_30px_rgba(134,197,32,0.5)]">
                {t.nft.viewOnBlockchain || 'View on Blockchain'}
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-4 font-semibold transition border border-white/20 shadow-lg hover:shadow-xl">
                {t.nft.share || 'Share'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
