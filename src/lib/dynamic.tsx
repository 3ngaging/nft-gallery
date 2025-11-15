'use client';

import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';

export function DynamicProvider({ children }: { children: React.ReactNode }) {
  const environmentId = process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID || '';

  // Si no hay environmentId, renderizar children sin el provider
  // Esto permite que el build funcione sin la variable de entorno
  if (!environmentId) {
    console.warn('Missing NEXT_PUBLIC_DYNAMIC_ENV_ID. Authentication will not work.');
    return <>{children}</>;
  }

  return (
    <DynamicContextProvider
      settings={{
        environmentId,

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
