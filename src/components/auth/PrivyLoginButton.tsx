'use client';

/**
 * Botón de Login/Logout con Privy.io
 * Soporta Twitter, Discord, Gmail y Solana Wallets
 */

import { usePrivy, useWallets } from '@privy-io/react-auth';
import { LogIn, LogOut, User, Wallet } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function PrivyLoginButton() {
  const { ready, authenticated, user, login, logout } = usePrivy();
  const { wallets } = useWallets();
  const { t } = useLanguage();

  // Get Solana wallets (embedded wallets created by Privy)
  const solanaWallets = user?.linkedAccounts?.filter(
    (account) => account.type === 'wallet' && (account as any).chainType === 'solana'
  ) || [];

  // Mostrar loading mientras Privy se inicializa
  if (!ready) {
    return (
      <button
        disabled
        className="border border-white/10 bg-white/5 text-gray-500 px-4 py-2 font-semibold text-sm cursor-not-allowed"
      >
        {t.common.loading}
      </button>
    );
  }

  // Usuario autenticado - mostrar info y botón de logout
  if (authenticated && user) {
    // Obtener el nombre del usuario (email, twitter, discord, etc.)
    const displayName =
      user.twitter?.username ||
      user.discord?.username ||
      user.google?.email ||
      user.email?.address ||
      `User ${user.id.slice(0, 6)}`;

    // Obtener la wallet principal de Solana si existe
    const primaryWallet = solanaWallets[0];
    const walletAddress = primaryWallet ? (primaryWallet as any).address : null;

    return (
      <div className="flex items-center gap-3">
        {/* User info - Solo desktop */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2">
          <User size={16} className="text-accent" />
          <span className="text-sm text-white font-medium truncate max-w-[120px]">
            {displayName}
          </span>
          {walletAddress && (
            <div className="flex items-center gap-1 ml-2 text-xs text-gray-400">
              <Wallet size={12} />
              <span className="font-mono">
                {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
              </span>
            </div>
          )}
        </div>

        {/* Logout button */}
        <button
          onClick={logout}
          className="border border-white/10 bg-red-600/20 hover:bg-red-600/30 text-red-400 px-4 py-2 font-semibold transition text-sm flex items-center gap-2"
        >
          <LogOut size={16} />
          <span className="hidden md:inline">{t.nav.logout}</span>
        </button>
      </div>
    );
  }

  // No autenticado - mostrar botón de login
  return (
    <button
      onClick={login}
      className="border border-white/10 bg-[#F2ECC8] hover:bg-[#aca686] text-black px-4 py-2 font-semibold transition shadow-[#a59f7e] hover:shadow-[#dfd7ac] text-sm flex items-center gap-2"
    >
      <LogIn size={16} />
      <span>{t.nav.connect}</span>
    </button>
  );
}

/**
 * Hook personalizado para acceder al estado de Privy y Solana wallets
 */
export function usePrivyAuth() {
  const { ready, authenticated, user } = usePrivy();

  // Get Solana wallets from linked accounts
  const solanaWallets = user?.linkedAccounts?.filter(
    (account) => account.type === 'wallet' && (account as any).chainType === 'solana'
  ) || [];

  return {
    ready,
    authenticated,
    user,
    solanaWallets,
    hasSolanaWallet: solanaWallets.length > 0,
    primaryWallet: solanaWallets[0] || null,
  };
}
