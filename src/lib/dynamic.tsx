'use client';

import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';

export function DynamicProvider({ children }: { children: React.ReactNode }) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID || '',

        // Personalización
        appName: 'NFT Gallery',

        // Modo inicial: solo login social
        initialAuthenticationMode: 'connect-only',
      }}
    >
      {children}
    </DynamicContextProvider>
  );
}
