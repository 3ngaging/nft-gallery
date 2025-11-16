/**
 * Página de perfil del usuario
 * Muestra NFTs del usuario conectado con Privy (Twitter, Discord, Gmail, Solana wallets)
 */

'use client';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Wallet, Trophy, Activity, Plus, ExternalLink } from 'lucide-react';
import { usePrivy } from '@privy-io/react-auth';
import type { NFTWithOwner } from '@/lib/matrica-nft-client';
import NFTCard from '@/components/NFTCard';
import DisplayNameEditor from '@/components/DisplayNameEditor';

export default function ProfilePage() {
  const { ready, authenticated, user, linkWallet } = usePrivy();
  const [userNFTs, setUserNFTs] = useState<NFTWithOwner[]>([]);
  const [loading, setLoading] = useState(false);
  const [customDisplayName, setCustomDisplayName] = useState<string | null>(null);
  const [loadingDisplayName, setLoadingDisplayName] = useState(false);
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
      router.push('/?error=not_authenticated');
    }
  }, [ready, authenticated, router]);

  // Fetch custom display name from Supabase
  useEffect(() => {
    if (!authenticated || !user) return;

    async function fetchDisplayName() {
      try {
        setLoadingDisplayName(true);
        const response = await fetch(
          `/api/profile/display-name?privyUserId=${encodeURIComponent(user.id)}`
        );
        const data = await response.json();

        if (data.success && data.displayName) {
          setCustomDisplayName(data.displayName);
        }
      } catch (error) {
        console.error('Error fetching display name:', error);
      } finally {
        setLoadingDisplayName(false);
      }
    }

    fetchDisplayName();
  }, [authenticated, user]);

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
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!authenticated || !user) {
    return null; // Redirecting
  }

  // Get user display name - prioritize custom name, then social accounts, then fallback
  const displayName =
    customDisplayName ||
    user.twitter?.username ||
    user.discord?.username ||
    user.google?.email ||
    user.email?.address ||
    `User ${user.id.slice(0, 6)}`;

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center border-4 border-accent/30">
              <Wallet size={40} className="text-accent" />
            </div>

            {/* User Info */}
            <div className="flex-grow">
              <div className="flex items-center gap-4 mb-2">
                <h1 className="text-3xl font-bold text-white">{displayName}</h1>
                {!loadingDisplayName && (
                  <DisplayNameEditor
                    privyUserId={user.id}
                    initialDisplayName={customDisplayName || ''}
                    onNameUpdated={(newName) => setCustomDisplayName(newName)}
                  />
                )}
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Connected via {user.twitter ? 'Twitter' : user.discord ? 'Discord' : user.google ? 'Google' : user.email ? 'Email' : 'Wallet'}
              </p>

              <div className="flex flex-wrap gap-4">
                {user.twitter && (
                  <div className="bg-black/30 border border-white/10 px-4 py-2 flex items-center gap-2">
                    <ExternalLink size={16} className="text-accent" />
                    <span className="text-xs text-gray-300">
                      Twitter: <span className="text-accent">@{user.twitter.username}</span>
                    </span>
                  </div>
                )}
                {user.discord && (
                  <div className="bg-black/30 border border-white/10 px-4 py-2 flex items-center gap-2">
                    <ExternalLink size={16} className="text-accent" />
                    <span className="text-xs text-gray-300">
                      Discord: <span className="text-accent">{user.discord.username}</span>
                    </span>
                  </div>
                )}
                {user.google && (
                  <div className="bg-black/30 border border-white/10 px-4 py-2 flex items-center gap-2">
                    <ExternalLink size={16} className="text-accent" />
                    <span className="text-xs text-gray-300">
                      Gmail: <span className="text-accent">{user.google.email}</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Solana Wallets Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Wallet className="text-accent" size={28} />
              My Solana Wallets
            </h2>
            <button
              onClick={linkWallet}
              className="bg-accent hover:bg-accent/90 text-black px-4 py-2 font-semibold transition shadow-[0_3px_0_0_#aca686] hover:shadow-[0_1px_0_0_#aca686] hover:translate-y-[2px] flex items-center gap-2"
            >
              <Plus size={16} />
              Add Wallet
            </button>
          </div>

          {solanaWallets.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                <Wallet size={32} className="text-gray-600" />
              </div>
              <p className="text-gray-400 mb-2">No Solana wallets connected</p>
              <p className="text-sm text-gray-600 mb-4">
                Add a Solana wallet to see your NFTs from the collection
              </p>
              <button
                onClick={linkWallet}
                className="bg-accent hover:bg-accent/90 text-black px-6 py-3 font-semibold transition shadow-[0_3px_0_0_#aca686] hover:shadow-[0_1px_0_0_#aca686] hover:translate-y-[2px]"
              >
                Connect Wallet
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
                        <p className="text-gray-500 text-xs">Wallet {index + 1}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => navigator.clipboard.writeText(wallet.address)}
                      className="text-accent hover:text-accent/80 text-xs px-3 py-1 border border-accent/30 hover:bg-accent/10 transition"
                    >
                      Copy
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
                <div className="text-xs text-gray-400 uppercase tracking-wider">NFTs Owned</div>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              {userNFTs.length === 0
                ? "You don&apos;t own any NFTs from this collection yet"
                : `You own ${userNFTs.length} NFT${userNFTs.length === 1 ? '' : 's'} from this collection`}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-accent/5 hover:border-accent/30 transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Activity size={24} className="text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">0</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Total Points</div>
              </div>
            </div>
            <p className="text-xs text-gray-500">Start earning points by being active in the community</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-accent/5 hover:border-accent/30 transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Wallet size={24} className="text-purple-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">{solanaWallets.length}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Wallets Connected</div>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              {solanaWallets.length === 0 ? 'No wallets connected' : `${solanaWallets.length} Solana wallet${solanaWallets.length === 1 ? '' : 's'} linked`}
            </p>
          </div>
        </div>

        {/* My NFTs Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Trophy className="text-accent" size={28} />
            My NFTs from Collection
          </h2>

          {loading ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400">Loading your NFTs...</p>
            </div>
          ) : userNFTs.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                <Trophy size={40} className="text-gray-600" />
              </div>
              <p className="text-gray-400 mb-2">No NFTs found</p>
              <p className="text-sm text-gray-600">
                You don&apos;t own any NFTs from the Power Grinders collection
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
            Activity Feed
          </h2>
          <p className="text-gray-500 text-center py-8">Coming soon...</p>
        </div>
      </div>
    </div>
  );
}
