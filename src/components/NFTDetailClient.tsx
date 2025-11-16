'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Wallet, ExternalLink, User } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import StickerSystem from './StickerSystem';
import { getTotalSupply } from '@/lib/nftHashList';
import { usePrivy } from '@privy-io/react-auth';
import { useMemo } from 'react';

type NFTDetailClientProps = {
  nft: {
    mintAddress: string;
    number: number;
    name: string;
    image: string;
    cdnImage: string;
    owner: string;
    status: string;
    collection: {
      id: string;
      name: string;
      communityId: string;
      communityName: string;
    };
    isMutable: boolean;
  };
};

export default function NFTDetailClient({ nft }: NFTDetailClientProps) {
  const { t } = useLanguage();
  const totalSupply = getTotalSupply();
  const { user } = usePrivy();

  // Check if user owns this NFT
  const isOwned = useMemo(() => {
    if (!user?.linkedAccounts) return false;

    const userWallets = user.linkedAccounts
      .filter((account) => account.type === 'wallet' && account.chainType === 'solana')
      .map((account) => (account as any).address?.toLowerCase());

    return userWallets.some((wallet) => wallet === nft.owner.toLowerCase());
  }, [user, nft.owner]);

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
              src={nft.cdnImage}
              alt={nft.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Details */}
          <div>
            {/* NFT Number Badge */}
            <div className="bg-[#F2ECC8]/20 backdrop-blur-sm px-4 py-2 inline-block mb-4 border border-[#F2ECC8]/30">
              <span className="text-sm font-semibold">
                {t.nft.nftNumber.replace('{number}', nft.number.toString()).replace('{total}', totalSupply.toString())}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{nft.name}</h1>

            {/* Status Badges */}
            <div className="mb-6 flex flex-wrap gap-2">
              {/* Main Status Badge */}
              <span className={`inline-block px-3 py-1 text-xs font-semibold border ${
                nft.status === 'HODLED'
                  ? 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                  : nft.status === 'LISTED'
                  ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                  : nft.status === 'STAKED'
                  ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                  : 'bg-gray-500/20 text-gray-400 border-gray-500/30'
              }`}>
                {nft.status === 'HODLED' ? t.nft.statusDiamondHanded :
                 nft.status === 'LISTED' ? t.nft.statusListed :
                 nft.status === 'STAKED' ? t.nft.statusStaked :
                 nft.status}
              </span>

              {/* Rarity Badge - All NFTs are 1/1 */}
              <span className="inline-block px-3 py-1 text-xs font-semibold border bg-amber-500/20 text-amber-300 border-amber-500/30">
                {t.nft.badgeUnique}
              </span>

              {/* Collection Badge */}
              <span className="inline-block px-3 py-1 text-xs font-semibold border bg-green-500/20 text-green-300 border-green-500/30">
                {t.nft.badgeVerified}
              </span>

              {/* Owned Badge - Show if user owns this NFT */}
              {isOwned && (
                <span className="inline-block px-3 py-1 text-xs font-semibold border bg-yellow-500/20 text-yellow-300 border-yellow-500/30 animate-pulse">
                  {t.nft.badgeOwned}
                </span>
              )}
            </div>

            {/* Owner Info Section */}
            <div className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <User size={24} className="text-[#F2ECC8]" />
                {t.nft.owner}
              </h3>

              <div className="space-y-3">
                <div className="bg-black/30 p-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <code className="text-sm break-all">
                      {nft.owner}
                    </code>
                    <a
                      href={`https://solscan.io/account/${nft.owner}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#F2ECC8] hover:text-[#aca686] transition text-sm font-semibold"
                    >
                      {t.nft.viewOnSolscan}
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mint Address Section */}
            <div className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 mb-6">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Wallet size={20} className="text-[#F2ECC8]" />
                {t.nft.mintAddress}
              </h3>
              <div className="bg-black/30 p-4">
                <code className="text-xs break-all">
                  {nft.mintAddress}
                </code>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://solscan.io/token/${nft.mintAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#F2ECC8] hover:bg-[#aca686] text-black px-6 py-4 font-semibold transition shadow-[#a59f7e] hover:shadow-[#dfd7ac] text-center flex items-center justify-center gap-2"
              >
                {t.nft.viewOnSolscan}
                <ExternalLink size={16} />
              </a>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: `${nft.name} #${nft.number}`,
                      text: `Check out ${nft.name} from Power Grinders NFT Collection!`,
                      url: window.location.href,
                    });
                  }
                }}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-4 font-semibold transition border border-white/20 shadow-lg hover:shadow-xl"
              >
                {t.nft.share}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
