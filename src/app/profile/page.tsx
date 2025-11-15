'use client';

import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { User, Mail, Award, Calendar } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function ProfilePage() {
  const { user, isAuthenticated } = useDynamicContext();
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
      return;
    }

    if (user) {
      loadUserData();
    }
  }, [isAuthenticated, user, router]);

  async function loadUserData() {
    if (!user) return;

    // Buscar o crear usuario en Supabase
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('matrix_id', user.userId)
      .single();

    if (error && error.code === 'PGRST116') {
      // Usuario no existe, crearlo
      const { data: newUser } = await supabase
        .from('users')
        .insert({
          matrix_id: user.userId,
          username: user.username || user.email,
          discord_id: user.verifiedCredentials?.find((c: any) => c.oauthProvider === 'discord')?.oauthAccountId,
          twitter_id: user.verifiedCredentials?.find((c: any) => c.oauthProvider === 'twitter')?.oauthAccountId,
          telegram_id: user.verifiedCredentials?.find((c: any) => c.oauthProvider === 'telegram')?.oauthAccountId,
        })
        .select()
        .single();

      setUserData(newUser);
    } else {
      setUserData(data);
    }

    setLoading(false);
  }

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
          Mi Perfil
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Información del usuario */}
          <div className="md:col-span-2 bg-white/5 backdrop-blur-sm p-6 border border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Información Personal</h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="text-[#86C520]" size={20} />
                <div>
                  <p className="text-sm text-gray-400">Nombre de usuario</p>
                  <p className="font-semibold">{user?.username || 'Sin nombre'}</p>
                </div>
              </div>

              {user?.email && (
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold">{user.email}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <Calendar className="text-[#86C520]" size={20} />
                <div>
                  <p className="text-sm text-gray-400">Miembro desde</p>
                  <p className="font-semibold">
                    {userData?.created_at
                      ? new Date(userData.created_at).toLocaleDateString('es-ES')
                      : 'Reciente'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Cuentas conectadas */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Cuentas Conectadas</h3>
              <div className="space-y-2">
                {userData?.discord_id && (
                  <div className="bg-[#5865F2]/10 border border-[#5865F2]/30 p-3">
                    <p className="text-sm">Discord conectado ✓</p>
                  </div>
                )}
                {userData?.twitter_id && (
                  <div className="bg-[#1DA1F2]/10 border border-[#1DA1F2]/30 p-3">
                    <p className="text-sm">Twitter conectado ✓</p>
                  </div>
                )}
                {userData?.telegram_id && (
                  <div className="bg-[#0088cc]/10 border border-[#0088cc]/30 p-3">
                    <p className="text-sm">Telegram conectado ✓</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Puntos (placeholder para el futuro) */}
          <div className="bg-gradient-to-br from-[#86C520]/20 to-[#6aa019]/20 backdrop-blur-sm p-6 border border-[#86C520]/30 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-yellow-400" size={24} />
              <h2 className="text-xl font-bold">Puntos</h2>
            </div>

            <div className="text-center">
              <p className="text-5xl font-bold text-yellow-400 mb-2">
                {userData?.total_points || 0}
              </p>
              <p className="text-sm text-gray-400">Puntos totales</p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-gray-500 text-center">
                Sistema de puntos próximamente disponible
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
