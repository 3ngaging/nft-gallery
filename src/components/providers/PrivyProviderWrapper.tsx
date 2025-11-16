'use client';

/**
 * Privy.io Provider Wrapper
 * Maneja autenticación con Twitter, Discord, Google y Solana Wallets
 * - Solana: Soporta wallets externas (Phantom, Solflare, etc.)
 * - Social: Twitter, Discord, Google OAuth
 * - Configuración Solana-only sin EVM
 */

import { PrivyProvider } from '@privy-io/react-auth';
import { toSolanaWalletConnectors } from '@privy-io/react-auth/solana';
import { ReactNode } from 'react';

interface PrivyProviderWrapperProps {
  children: ReactNode;
}

export default function PrivyProviderWrapper({ children }: PrivyProviderWrapperProps) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
  const clientId = process.env.NEXT_PUBLIC_PRIVY_CLIENT_ID;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  if (!appId) {
    console.error('NEXT_PUBLIC_PRIVY_APP_ID is not set');
    return <>{children}</>;
  }

  return (
    <PrivyProvider
      appId={appId}
      clientId={clientId}
      config={{
        // Métodos de login: Solana wallet, Twitter, Discord, Google
        loginMethods: ['wallet', 'twitter', 'discord', 'google'],

        // Embeded wallets: Solo Solana
        embeddedWallets: {
          solana: {
            createOnLogin: 'users-without-wallets',
          },
        },

        // Configuración de apariencia
        appearance: {
          theme: 'dark',
          accentColor: '#F2ECC8',
          logo: '/logo_no_background.svg',
          showWalletLoginFirst: true,
          walletChainType: 'solana-only',
        },

        // External Solana wallets (Phantom, Solflare, etc.)
        externalWallets: {
          solana: {
            connectors: toSolanaWalletConnectors(),
          },
        },

        // Configuración adicional
        legal: {
          termsAndConditionsUrl: `${appUrl}/terms`,
          privacyPolicyUrl: `${appUrl}/privacy`,
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
