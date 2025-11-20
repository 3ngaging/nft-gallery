/**
 * Página de perfil del usuario
 * Muestra NFTs del usuario conectado con Privy (Twitter, Discord, Gmail, Solana wallets)
 */

'use client';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Wallet, Trophy, Activity, Plus, User as UserIcon, Twitter as TwitterIcon, MessageCircle, Globe, Send } from 'lucide-react';
import { usePrivy } from '@privy-io/react-auth';
import type { NFTWithOwner } from '@/lib/matrica-nft-client';
import type { UserProfile } from '@/lib/supabase';
import NFTCard from '@/components/NFTCard';
import ProfileEditor from '@/components/ProfileEditor';
import { useLanguage } from '@/lib/LanguageContext';

export default function ProfilePage() {
  const { ready, authenticated, user, linkWallet } = usePrivy();
  const { t } = useLanguage();
  const [userNFTs, setUserNFTs] = useState<NFTWithOwner[]>([]);
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const router = useRouter();

  // Get Solana wallets from Privy user - memoized to prevent unnecessary re-renders
  const solanaWallets = useMemo(() => {
    return (user?.linkedAccounts?.filter(
      (account) => account.type === 'wallet' && account.chainType === 'solana'
    ) || []) as Array<{ type: 'wallet'; address: string; chainType: 'solana' }>;
  }, [user?.linkedAccounts]);

  // Redirect if not authenticated
  useEffect(() => {
    if (ready && !authenticated) {
      router.replace('/?error=not_authenticated');
    }
  }, [ready, authenticated, router]);

  // Fetch user profile from Supabase and sync wallets
  useEffect(() => {
    if (!authenticated || !user) return;

    const currentUser = user; // Capture user in a const for TypeScript flow analysis

    async function fetchProfile() {
      try {
        setLoadingProfile(true);
        const response = await fetch(
          `/api/profile?privyUserId=${encodeURIComponent(currentUser.id)}`
        );
        const data = await response.json();

        if (data.success && data.profile) {
          setUserProfile(data.profile);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoadingProfile(false);
      }
    }

    // Sync wallets to database
    async function syncWallets() {
      if (solanaWallets.length === 0) return;

      try {
        await fetch('/api/wallet/sync', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            privyUserId: currentUser.id,
            wallets: solanaWallets.map(w => ({
              address: w.address,
              chainType: 'solana',
            })),
          }),
        });
      } catch (error) {
        console.error('Error syncing wallets:', error);
      }
    }

    fetchProfile();
    syncWallets();
  }, [authenticated, user, solanaWallets]);

  // Fetch user's NFTs from the collection using all their Solana wallets
  useEffect(() => {
    if (!authenticated || solanaWallets.length === 0) return;

    async function fetchUserNFTs() {
      try {
        setLoading(true);
        const allNFTs: NFTWithOwner[] = [];

        // Fetch NFTs for each wallet and combine results
        for (const wallet of solanaWallets) {
          const walletAddress = wallet.address;
          const response = await fetch(`/api/nfts?wallet=${walletAddress}`);
          const data = await response.json();

          if (data.success && data.nfts) {
            allNFTs.push(...data.nfts);
          }
        }

        // Remove duplicates (in case user has same NFT in different wallets - unlikely but possible)
        const uniqueNFTs = Array.from(
          new Map(allNFTs.map(nft => [nft.mintAddress, nft])).values()
        );

        setUserNFTs(uniqueNFTs);
      } catch (error) {
        console.error('Error fetching user NFTs:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUserNFTs();
  }, [authenticated, solanaWallets]);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">{t.profile.loading}</p>
        </div>
      </div>
    );
  }

  if (!authenticated || !user) {
    return null; // Redirecting
  }

  // Get user display name - prioritize custom name, then social accounts, then fallback
  const displayName =
    userProfile?.display_name ||
    user.twitter?.username ||
    user.discord?.username ||
    user.google?.email ||
    user.email?.address ||
    `User ${user.id.slice(0, 6)}`;

  return (
    <div className="min-h-screen bg-black pt-16 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header with Banner */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden mb-8">
          {/* Banner Image */}
          <div className="relative w-full h-48 md:h-64 bg-gradient-to-r from-accent/20 to-purple-500/20">
            {userProfile?.banner_image ? (
              <Image
                src={userProfile.banner_image}
                alt="Profile banner"
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gray-600 text-sm">{t.profile.noBanner}</div>
              </div>
            )}
          </div>

          {/* Profile Info */}
          <div className="p-6 md:p-8 relative">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Profile Picture */}
              <div className="relative -mt-16 md:-mt-20">
                <div className="w-32 h-32 rounded-full border-4 border-black bg-gradient-to-br from-accent/30 to-accent/10 overflow-hidden">
                  {userProfile?.profile_picture ? (
                    <Image
                      src={userProfile.profile_picture}
                      alt={displayName}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/30 to-accent/10">
                      <UserIcon size={48} className="text-accent" />
                    </div>
                  )}
                </div>
              </div>

              {/* User Info */}
              <div className="flex-grow">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{displayName}</h1>

                {/* Bio */}
                {userProfile?.bio && (
                  <p className="text-gray-300 text-sm mb-4 max-w-2xl">
                    {userProfile.bio}
                  </p>
                )}

                {/* Social Links */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {userProfile?.twitter_handle && (
                    <a
                      href={`https://twitter.com/${userProfile.twitter_handle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 text-[#1DA1F2] px-3 py-1.5 text-xs font-semibold transition border border-[#1DA1F2]/30"
                    >
                      <TwitterIcon size={14} />
                      @{userProfile.twitter_handle}
                    </a>
                  )}
                  {userProfile?.discord_username && (
                    <div className="inline-flex items-center gap-2 bg-[#5865F2]/20 text-[#5865F2] px-3 py-1.5 text-xs font-semibold border border-[#5865F2]/30">
                      <MessageCircle size={14} />
                      {userProfile.discord_username}
                    </div>
                  )}
                  {userProfile?.telegram_username && (
                    <a
                      href={`https://t.me/${userProfile.telegram_username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0088cc]/20 hover:bg-[#0088cc]/30 text-[#0088cc] px-3 py-1.5 text-xs font-semibold transition border border-[#0088cc]/30"
                    >
                      <Send size={14} />
                      @{userProfile.telegram_username}
                    </a>
                  )}
                  {userProfile?.website_url && (
                    <a
                      href={userProfile.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-accent/20 hover:bg-accent/30 text-accent px-3 py-1.5 text-xs font-semibold transition border border-accent/30"
                    >
                      <Globe size={14} />
                      {t.profile.website}
                    </a>
                  )}
                </div>

                {/* Privy Connected Accounts */}
                <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                  <span>{t.profile.connectedVia}</span>
                  {user.twitter && <span className="text-accent">Twitter</span>}
                  {user.discord && <span className="text-accent">Discord</span>}
                  {user.google && <span className="text-accent">Google</span>}
                  {user.email && <span className="text-accent">Email</span>}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Editor */}
        {!loadingProfile && (
          <div className="mb-8">
            <ProfileEditor
              privyUserId={user.id}
              profile={userProfile}
              onProfileUpdated={(updatedProfile) => setUserProfile(updatedProfile)}
            />
          </div>
        )}

        {/* Solana Wallets Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Wallet className="text-accent" size={28} />
              {t.profile.mySolanaWallets}
            </h2>
            <button
              onClick={linkWallet}
              className="cursor-pointer bg-accent hover:bg-accent/90 text-[#F2ECC8] px-4 py-2 font-semibold transition shadow-[0_3px_0_0_#aca686] hover:shadow-[0_1px_0_0_#aca686] hover:translate-y-[2px] flex items-center gap-2"
            >
              <Plus size={16} />
              {t.profile.addWallet}
            </button>
          </div>

          {solanaWallets.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                <Wallet size={32} className="text-gray-600" />
              </div>
              <p className="text-gray-400 mb-2">{t.profile.noWallets}</p>
              <p className="text-sm text-gray-600 mb-4">
                {t.profile.noWalletsDesc}
              </p>
              <button
                onClick={linkWallet}
                className="bg-accent hover:bg-accent/90 text-black px-6 py-3 font-semibold transition shadow-[0_3px_0_0_#aca686] hover:shadow-[0_1px_0_0_#aca686] hover:translate-y-[2px]"
              >
                {t.profile.connectWallet}
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {solanaWallets.map((wallet, index) => {
                const truncated = `${wallet.address.slice(0, 8)}...${wallet.address.slice(-8)}`;
                return (
                  <div
                    key={wallet.address}
                    className="bg-black/30 border border-white/10 p-4 flex items-center justify-between hover:bg-black/50 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <Wallet size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-white font-mono text-sm">{truncated}</p>
                        <p className="text-gray-500 text-xs">{t.profile.wallet} {index + 1}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => navigator.clipboard.writeText(wallet.address)}
                      className="cursor-pointer text-accent hover:text-accent/80 text-xs px-3 py-1 border border-accent/30 hover:bg-accent/10 transition"
                    >
                      {t.profile.copy}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-accent/5 hover:border-accent/30 transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Trophy size={24} className="text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">{userNFTs.length}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{t.profile.nftsOwned}</div>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              {userNFTs.length === 0
                ? t.profile.noNftsYet
                : `${t.profile.youOwn} ${userNFTs.length} ${userNFTs.length === 1 ? t.profile.nft : t.profile.nfts} ${t.profile.fromCollection}`}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-accent/5 hover:border-accent/30 transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Activity size={24} className="text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">0</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{t.profile.totalPoints}</div>
              </div>
            </div>
            <p className="text-xs text-gray-500">{t.profile.startEarning}</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-accent/5 hover:border-accent/30 transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Wallet size={24} className="text-purple-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">{solanaWallets.length}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{t.profile.walletsConnected}</div>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              {solanaWallets.length === 0 ? t.profile.noWalletsConnected : `${solanaWallets.length} Solana ${solanaWallets.length === 1 ? t.profile.walletLinked : t.profile.walletsLinked}`}
            </p>
          </div>
        </div>

        {/* My NFTs Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Trophy className="text-accent" size={28} />
            {t.profile.myNftsCollection}
          </h2>

          {loading ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400">{t.profile.loadingNfts}</p>
            </div>
          ) : userNFTs.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                <Trophy size={40} className="text-[#F2ECC8]" />
              </div>
              <p className="text-gray-400 mb-2">{t.profile.noNftsFound}</p>
              <p className="text-sm text-gray-600">
                {t.profile.noNftsDesc}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {userNFTs.map((nft) => (
                <NFTCard key={nft.mintAddress} nft={nft} />
              ))}
            </div>
          )}
        </div>

        {/* Coming Soon - Activity Feed */}
        <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <Activity className="text-blue-400" size={28} />
            {t.profile.activityFeed}
          </h2>
          <p className="text-gray-500 text-center py-8">{t.profile.comingSoon}</p>
        </div>
      </div>
    </div>
  );
}
