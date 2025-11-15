'use client';

import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import { User, Mail, Award, Calendar } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/lib/LanguageContext';

type UserData = {
  id: number;
  matrix_id: string;
  username?: string;
  discord_id?: string;
  twitter_id?: string;
  telegram_id?: string;
  total_points?: number;
  created_at?: string;
};

type VerifiedCredential = {
  oauthProvider: string;
  oauthAccountId: string;
};

export default function ProfilePage() {
  const { user, isAuthenticated } = useDynamicContext();
  const { t } = useLanguage();
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  const loadUserData = useCallback(async () => {
    if (!user) return;

    // Find or create user in Supabase
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('matrix_id', user.userId)
      .single();

    if (error && error.code === 'PGRST116') {
      // User doesn't exist, create it
      const verifiedCreds = user.verifiedCredentials as VerifiedCredential[] | undefined;
      const { data: newUser } = await supabase
        .from('users')
        .insert({
          matrix_id: user.userId,
          username: user.username || user.email,
          discord_id: verifiedCreds?.find((c) => c.oauthProvider === 'discord')?.oauthAccountId,
          twitter_id: verifiedCreds?.find((c) => c.oauthProvider === 'twitter')?.oauthAccountId,
          telegram_id: verifiedCreds?.find((c) => c.oauthProvider === 'telegram')?.oauthAccountId,
        })
        .select()
        .single();

      setUserData(newUser);
    } else {
      setUserData(data);
    }

    setLoading(false);
  }, [user]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
      return;
    }

    if (user) {
      loadUserData();
    }
  }, [isAuthenticated, user, router, loadUserData]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-t-2 border-b-2 border-[#86C520]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#86C520] to-[#6aa019]">
          {t.profile.title}
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* User Information */}
          <div className="md:col-span-2 bg-white/5 backdrop-blur-sm p-6 border border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">{t.profile.personalInfo}</h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="text-[#86C520]" size={20} />
                <div>
                  <p className="text-sm text-gray-400">{t.profile.username}</p>
                  <p className="font-semibold">{user?.username || t.profile.noUsername}</p>
                </div>
              </div>

              {user?.email && (
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">{t.profile.email}</p>
                    <p className="font-semibold">{user.email}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <Calendar className="text-[#86C520]" size={20} />
                <div>
                  <p className="text-sm text-gray-400">{t.profile.memberSince}</p>
                  <p className="font-semibold">
                    {userData?.created_at
                      ? new Date(userData.created_at).toLocaleDateString()
                      : t.profile.recent
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Connected Accounts */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">{t.profile.connectedAccounts}</h3>
              <div className="space-y-2">
                {userData?.discord_id && (
                  <div className="bg-[#5865F2]/10 border border-[#5865F2]/30 p-3">
                    <p className="text-sm">{t.profile.discordConnected}</p>
                  </div>
                )}
                {userData?.twitter_id && (
                  <div className="bg-[#1DA1F2]/10 border border-[#1DA1F2]/30 p-3">
                    <p className="text-sm">{t.profile.twitterConnected}</p>
                  </div>
                )}
                {userData?.telegram_id && (
                  <div className="bg-[#0088cc]/10 border border-[#0088cc]/30 p-3">
                    <p className="text-sm">{t.profile.telegramConnected}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Points (placeholder for future) */}
          <div className="bg-gradient-to-br from-[#86C520]/20 to-[#6aa019]/20 backdrop-blur-sm p-6 border border-[#86C520]/30 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-yellow-400" size={24} />
              <h2 className="text-xl font-bold">{t.profile.points}</h2>
            </div>

            <div className="text-center">
              <p className="text-5xl font-bold text-yellow-400 mb-2">
                {userData?.total_points || 0}
              </p>
              <p className="text-sm text-gray-400">{t.profile.totalPoints}</p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-gray-500 text-center">
                {t.profile.pointsComingSoon}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
