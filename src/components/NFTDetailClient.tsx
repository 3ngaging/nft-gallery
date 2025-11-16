'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Wallet, ExternalLink, User, Twitter } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import StickerSystem from './StickerSystem';
import { getTotalSupply } from '@/lib/nftHashList';
import { usePrivy, type WalletWithMetadata } from '@privy-io/react-auth';
import { useMemo, useEffect, useState } from 'react';
import type { UserProfile } from '@/lib/supabase';

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
  const [ownerProfile, setOwnerProfile] = useState<UserProfile | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  // Check if user owns this NFT
  const isOwned = useMemo(() => {
    if (!user?.linkedAccounts) return false;

    const userWallets = user.linkedAccounts
      .filter((account): account is WalletWithMetadata => account.type === 'wallet' && account.chainType === 'solana')
      .map((account) => account.address?.toLowerCase());

    return userWallets.some((wallet) => wallet === nft.owner.toLowerCase());
  }, [user, nft.owner]);

  // Fetch owner profile by wallet address
  useEffect(() => {
    async function fetchOwnerProfile() {
      try {
        setLoadingProfile(true);
        const response = await fetch(
          `/api/profile/by-wallet?address=${encodeURIComponent(nft.owner)}`
        );
        const data = await response.json();

        if (data.success && data.profile) {
          setOwnerProfile(data.profile);
        } else {
          setOwnerProfile(null);
        }
      } catch (error) {
        console.error('Error fetching owner profile:', error);
        setOwnerProfile(null);
      } finally {
        setLoadingProfile(false);
      }
    }

    fetchOwnerProfile();
  }, [nft.owner]);

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
                {/* Owner Profile Link (if registered) */}
                {!loadingProfile && ownerProfile && (
                  <div className="bg-gradient-to-r from-[#F2ECC8]/10 to-[#F2ECC8]/5 border border-[#F2ECC8]/20 p-4">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        {ownerProfile.profile_picture ? (
                          <Image
                            src={ownerProfile.profile_picture}
                            alt={ownerProfile.display_name || 'Owner'}
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F2ECC8]/30 to-[#F2ECC8]/10 flex items-center justify-center">
                            <User size={20} className="text-[#F2ECC8]" />
                          </div>
                        )}
                        <div>
                          <Link
                            href={`/user/${ownerProfile.privy_user_id}`}
                            className="text-lg font-bold text-[#F2ECC8] hover:text-[#aca686] transition"
                          >
                            {ownerProfile.display_name || `User ${ownerProfile.privy_user_id.slice(0, 8)}`}
                          </Link>
                          <p className="text-xs text-gray-400">Registered Member</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link
                          href={`/user/${ownerProfile.privy_user_id}`}
                          className="inline-flex items-center gap-1 bg-[#F2ECC8]/20 hover:bg-[#F2ECC8]/30 text-[#F2ECC8] px-3 py-2 text-sm font-semibold transition border border-[#F2ECC8]/30"
                        >
                          View Profile
                          <User size={14} />
                        </Link>
                        <Link
                          href="/leaderboard"
                          className="inline-flex items-center gap-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 px-3 py-2 text-sm font-semibold transition border border-purple-500/30"
                        >
                          Leaderboard
                          <ExternalLink size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Wallet Address */}
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
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  `Check out ${nft.name} #${nft.number} from the @Power_Grinders NFT Collection! 🔥`
                )}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&hashtags=PowerGrinders,SolanaNFT,NFT`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white px-6 py-4 font-semibold transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Twitter size={20} />
                <span>Share on Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
