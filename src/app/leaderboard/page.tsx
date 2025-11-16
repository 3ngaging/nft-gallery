'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Trophy, Crown, Medal, User, Twitter } from 'lucide-react';

type LeaderboardEntry = {
  id: number;
  privy_user_id: string;
  display_name: string | null;
  profile_picture: string | null;
  twitter_handle: string | null;
  bio: string | null;
  rank: number;
  points: number;
  nfts_count: number;
};

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        setLoading(true);
        const response = await fetch('/api/leaderboard');
        const data = await response.json();

        if (data.success) {
          setLeaderboard(data.leaderboard || []);
        } else {
          console.error('Failed to fetch leaderboard:', data.error);
          setLeaderboard([]);
        }
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
        setLeaderboard([]);
      } finally {
        setLoading(false);
      }
    }

    fetchLeaderboard();
  }, []);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return (
          <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center border-2 border-yellow-400">
            <Crown className="text-yellow-400" size={20} />
          </div>
        );
      case 2:
        return (
          <div className="w-10 h-10 rounded-full bg-gray-300/20 flex items-center justify-center border-2 border-gray-300">
            <Medal className="text-gray-300" size={20} />
          </div>
        );
      case 3:
        return (
          <div className="w-10 h-10 rounded-full bg-amber-600/20 flex items-center justify-center border-2 border-amber-600">
            <Medal className="text-amber-600" size={20} />
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
            <span className="text-gray-400 font-bold text-sm">#{rank}</span>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Trophy className="text-accent" size={48} />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
            Leaderboard
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Top Power Grinders members ranked by community points and activity
          </p>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
          {loading ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400">Loading leaderboard...</p>
            </div>
          ) : leaderboard.length === 0 ? (
            <div className="text-center py-20">
              <Trophy size={64} className="text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-400 mb-2">
                Leaderboard Coming Soon
              </h3>
              <p className="text-gray-600">
                Points system will be activated soon. Start building your collection!
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5 border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      NFTs
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {leaderboard.map((entry) => (
                    <tr
                      key={entry.id}
                      className="hover:bg-white/5 transition"
                    >
                      {/* Rank */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {getRankIcon(entry.rank)}
                        </div>
                      </td>

                      {/* User */}
                      <td className="px-6 py-4">
                        <Link
                          href={`/user/${entry.privy_user_id}`}
                          className="flex items-center gap-3 hover:text-accent transition group"
                        >
                          {/* Profile Picture */}
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800 flex-shrink-0 ring-2 ring-white/10 group-hover:ring-accent/50 transition">
                            {entry.profile_picture ? (
                              <Image
                                src={entry.profile_picture}
                                alt={entry.display_name || 'User'}
                                width={48}
                                height={48}
                                className="object-cover w-full h-full"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/30 to-accent/10">
                                <User size={24} className="text-accent" />
                              </div>
                            )}
                          </div>

                          {/* Name & Info */}
                          <div className="min-w-0 flex-1">
                            <div className="font-bold text-base group-hover:text-accent transition">
                              {entry.display_name || `User ${entry.privy_user_id.slice(0, 8)}`}
                            </div>
                            {entry.twitter_handle && (
                              <div className="text-xs text-gray-400 group-hover:text-gray-300">
                                @{entry.twitter_handle}
                              </div>
                            )}
                            {entry.bio && (
                              <div className="text-xs text-gray-500 mt-0.5 truncate max-w-md">
                                {entry.bio}
                              </div>
                            )}
                          </div>
                        </Link>

                        {/* Social Links - Stop propagation so they don't trigger profile link */}
                        <div className="flex gap-2 ml-3" onClick={(e) => e.stopPropagation()}>
                          {entry.twitter_handle && (
                            <a
                              href={`https://twitter.com/${entry.twitter_handle}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 flex items-center justify-center transition border border-[#1DA1F2]/30"
                              title={`@${entry.twitter_handle}`}
                            >
                              <Twitter size={14} className="text-[#1DA1F2]" />
                            </a>
                          )}
                        </div>
                      </td>

                      {/* NFTs Count */}
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="text-accent font-semibold">
                          {entry.nfts_count}
                        </span>
                      </td>

                      {/* Points */}
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span className="text-2xl font-bold text-accent">
                          {entry.points.toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-500 ml-1">pts</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
