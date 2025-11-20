'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Globe, MessageCircle, Send, ArrowLeft, Trophy } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import type { UserProfile } from '@/lib/supabase';
import type { NFTWithOwner } from '@/lib/matrica-nft-client';
import NFTCard from './NFTCard';

type UserProfileClientProps = {
  profile: UserProfile;
};

export default function UserProfileClient({ profile }: UserProfileClientProps) {
  const { t } = useLanguage();
  const [userNFTs, setUserNFTs] = useState<NFTWithOwner[]>([]);
  const [loading, setLoading] = useState(true);

  const displayName = profile.display_name || `User ${profile.privy_user_id.slice(0, 8)}`;

  // Fetch user's NFTs by their privy_user_id
  useEffect(() => {
    async function fetchNFTs() {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/nfts/by-user?privyUserId=${encodeURIComponent(profile.privy_user_id)}`
        );
        const data = await response.json();

        if (data.success && data.nfts) {
          setUserNFTs(data.nfts);
        } else {
          setUserNFTs([]);
        }
      } catch (error) {
        console.error('Error fetching user NFTs:', error);
        setUserNFTs([]);
      } finally {
        setLoading(false);
      }
    }

    fetchNFTs();
  }, [profile.privy_user_id]);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8"
        >
          <ArrowLeft size={20} />
          {t.userProfile.backToGallery}
        </Link>

        {/* Banner */}
        <div className="relative h-64 w-full overflow-hidden border border-white/10 bg-gray-900 mb-6">
          {profile.banner_image ? (
            <Image
              src={profile.banner_image}
              alt={`${displayName}'s banner`}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30" />
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="md:col-span-1">
            {/* Profile Picture */}
            <div className="relative w-32 h-32 mx-auto md:mx-0 -mt-20 mb-4">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-black bg-gray-800">
                {profile.profile_picture ? (
                  <Image
                    src={profile.profile_picture}
                    alt={displayName}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/30 to-accent/10">
                    <span className="text-4xl font-bold text-accent">
                      {displayName[0].toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Name and Bio */}
            <div className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 mb-4">
              <h1 className="text-2xl font-bold mb-2">{displayName}</h1>
              {profile.bio && (
                <p className="text-gray-400 text-sm mb-4">{profile.bio}</p>
              )}

              {/* Social Links */}
              <div className="space-y-2">
                {profile.twitter_handle && (
                  <a
                    href={`https://twitter.com/${profile.twitter_handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition"
                  >
                    <Twitter size={16} />
                    @{profile.twitter_handle}
                  </a>
                )}
                {profile.discord_username && (
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MessageCircle size={16} />
                    {profile.discord_username}
                  </div>
                )}
                {profile.telegram_username && (
                  <a
                    href={`https://t.me/${profile.telegram_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition"
                  >
                    <Send size={16} />
                    @{profile.telegram_username}
                  </a>
                )}
                {profile.website_url && (
                  <a
                    href={profile.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition"
                  >
                    <Globe size={16} />
                    {t.userProfile.website}
                  </a>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 space-y-4">
              {/* Points */}
              <div className="pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Trophy className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400">
                      {(profile.total_points || 0).toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{t.userProfile.communityPoints}</div>
                  </div>
                </div>
              </div>

              {/* NFTs */}
              <div className="pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Trophy className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">
                      {loading ? '...' : userNFTs.length}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{t.userProfile.nftsOwned}</div>
                  </div>
                </div>
              </div>

              {/* Member Since */}
              <div className="text-sm text-gray-500">
                {t.userProfile.memberSince} {new Date(profile.created_at).toLocaleDateString()}
              </div>
            </div>
          </div>

          {/* NFTs Grid */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Trophy className="text-accent" size={28} />
              {t.userProfile.nftCollection}
            </h2>

            {loading ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-400">{t.userProfile.loadingNfts}</p>
              </div>
            ) : userNFTs.length === 0 ? (
              <div className="text-center py-12 bg-white/5 border border-white/10 rounded-lg">
                <Trophy size={48} className="text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 mb-2">{t.userProfile.noNftsTitle}</p>
                <p className="text-sm text-gray-600">
                  {t.userProfile.noNftsDescription}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {userNFTs.map((nft, index) => (
                  <NFTCard key={nft.mintAddress} nft={nft} index={index + 1} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
