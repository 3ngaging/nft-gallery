# 🔗 Plan de Integración - Matrica.io + Solana NFTs

## 📋 Resumen Ejecutivo

**Objetivo:** Conectar la app con la colección NFT real en Solana usando Matrica.io

**API Key:** `4Z0ANqs4SEIW0tyQnI-UK`
**Base URL:** `https://api.matrica.io/v1/`

---

## 🎯 FASE 1: Setup Inicial (1-2 horas)

### ✅ Task 1.1: Variables de entorno
```env
# .env.local
NEXT_PUBLIC_MATRICA_API_KEY=4Z0ANqs4SEIW0tyQnI-UK
NEXT_PUBLIC_MATRICA_CLIENT_ID=<tu_client_id>
MATRICA_CLIENT_SECRET=<tu_client_secret>

# Configuración de tu colección
NEXT_PUBLIC_COLLECTION_ADDRESS=<solana_collection_address>
NEXT_PUBLIC_COLLECTION_SYMBOL=<tu_symbol>
```

### ✅ Task 1.2: Cliente de Matrica
**Archivo:** `src/lib/matrica.ts`

```typescript
const MATRICA_BASE_URL = 'https://api.matrica.io/v1';
const API_KEY = process.env.NEXT_PUBLIC_MATRICA_API_KEY;

export const matricaClient = {
  // GET con API Key
  async get(endpoint: string) {
    const response = await fetch(
      `${MATRICA_BASE_URL}${endpoint}?apiKey=${API_KEY}`
    );
    return response.json();
  },

  // Obtener NFTs de usuario
  async getUserNFTs(userId: string) {
    return this.get(`/nft?userId=${userId}`);
  },

  // Obtener colección completa
  async getCollection(collectionAddress: string) {
    return this.get(`/collection?address=${collectionAddress}`);
  },

  // Obtener wallet info
  async getWallet(walletAddress: string) {
    return this.get(`/wallet?address=${walletAddress}`);
  }
};
```

### ✅ Task 1.3: Test de conexión
```bash
# Crear archivo de test
touch src/app/api/test-matrica/route.ts
```

---

## 🎯 FASE 2: Autenticación OAuth2 con SDK (1-2 horas)

### ✅ Task 2.0: Instalar Matrica OAuth SDK

**RECOMENDADO: Usar el SDK oficial**

```bash
npm install @matrica/oauth-sdk
```

**Ventajas del SDK:**
- ✅ Maneja automáticamente PKCE (requerido en OAuth 2.1)
- ✅ TypeScript types incluidos
- ✅ API simplificada vs implementación manual
- ✅ Gestión automática de tokens y refresh
- ✅ Menos código que mantener

### ✅ Task 2.1: Configurar Matrica Connect

**Pasos en Dashboard de Matrica.io:**
1. Ir a https://business.matrica.io (o contactar vía web)
2. Crear OAuth App
3. Configurar Redirect URI: `http://localhost:3000/api/auth/callback/matrica`
4. Copiar Client ID y Client Secret

### ✅ Task 2.2: Implementar OAuth Flow con SDK

**Archivo:** `src/lib/auth/matrica-client.ts`

```typescript
import { MatricaOAuthClient } from '@matrica/oauth-sdk';

// Inicializar cliente (singleton)
export const matricaOAuthClient = new MatricaOAuthClient({
  clientId: process.env.NEXT_PUBLIC_MATRICA_CLIENT_ID!,
  clientSecret: process.env.MATRICA_CLIENT_SECRET!, // Solo en servidor
  redirectUri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback/matrica`
});

// Scopes necesarios
export const MATRICA_SCOPES = 'profile wallets nfts';
```

**Archivo:** `src/lib/auth/matrica-auth.ts`

```typescript
import { matricaOAuthClient, MATRICA_SCOPES } from './matrica-client';

export const matricaAuth = {
  // 1. Generar URL de autorización con PKCE automático
  async getAuthorizationUrl() {
    const { url, codeVerifier } = await matricaOAuthClient.getAuthorizationUrl(MATRICA_SCOPES);
    return { url, codeVerifier };
  },

  // 2. Intercambiar code por tokens (maneja PKCE automáticamente)
  async exchangeCodeForToken(code: string, codeVerifier: string) {
    const userSession = await matricaOAuthClient.getUserSession(code, codeVerifier);
    return userSession;
  },

  // 3. Refresh token cuando expire
  async refreshAccessToken(refreshToken: string) {
    return await matricaOAuthClient.refreshToken(refreshToken);
  }
};
```

### ✅ Task 2.3: API Routes para Auth

**Archivo:** `src/app/api/auth/login/route.ts`
```typescript
export async function GET() {
  const authUrl = matricaAuth.getAuthorizationUrl();
  return Response.redirect(authUrl);
}
```

**Archivo:** `src/app/api/auth/callback/matrica/route.ts`
```typescript
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return Response.redirect('/error');
  }

  const tokens = await matricaAuth.exchangeCodeForToken(code);

  // Guardar en cookie/session
  // Redirect a dashboard

  return Response.redirect('/profile');
}
```

---

## 🎯 FASE 3: Cargar NFTs Reales (3-4 horas)

### ✅ Task 3.1: Servicio de NFTs

**Archivo:** `src/lib/services/nft-service.ts`

```typescript
import { matricaClient } from '@/lib/matrica';

export const nftService = {
  // Obtener toda la colección
  async getCollectionNFTs() {
    const collectionAddress = process.env.NEXT_PUBLIC_COLLECTION_ADDRESS;
    const data = await matricaClient.getCollection(collectionAddress);

    return data.nfts.map((nft: any) => ({
      token_id: nft.tokenId,
      name: nft.name,
      description: nft.description,
      image_url: nft.image,
      thumbnail_url: nft.thumbnail || nft.image,
      traits: nft.attributes,
      owner: nft.owner,
      mint_address: nft.mintAddress
    }));
  },

  // Verificar si usuario tiene NFT
  async userOwnsNFT(userId: string, tokenId: number) {
    const userNFTs = await matricaClient.getUserNFTs(userId);
    return userNFTs.some((nft: any) =>
      nft.tokenId === tokenId &&
      nft.collection === process.env.NEXT_PUBLIC_COLLECTION_ADDRESS
    );
  },

  // Obtener NFTs de un usuario específico de esta colección
  async getUserCollectionNFTs(userId: string) {
    const allUserNFTs = await matricaClient.getUserNFTs(userId);
    return allUserNFTs.filter((nft: any) =>
      nft.collection === process.env.NEXT_PUBLIC_COLLECTION_ADDRESS
    );
  }
};
```

### ✅ Task 3.2: API Route para NFTs

**Archivo:** `src/app/api/nfts/route.ts`

```typescript
import { nftService } from '@/lib/services/nft-service';

export async function GET() {
  try {
    const nfts = await nftService.getCollectionNFTs();
    return Response.json({ nfts });
  } catch (error) {
    return Response.json({ error: 'Failed to fetch NFTs' }, { status: 500 });
  }
}
```

**Archivo:** `src/app/api/nfts/[tokenId]/route.ts`

```typescript
export async function GET(
  request: Request,
  { params }: { params: { tokenId: string } }
) {
  try {
    const allNFTs = await nftService.getCollectionNFTs();
    const nft = allNFTs.find(n => n.token_id === parseInt(params.tokenId));

    if (!nft) {
      return Response.json({ error: 'NFT not found' }, { status: 404 });
    }

    return Response.json({ nft });
  } catch (error) {
    return Response.json({ error: 'Failed to fetch NFT' }, { status: 500 });
  }
}
```

### ✅ Task 3.3: Hook personalizado

**Archivo:** `src/hooks/useNFTs.ts`

```typescript
'use client';

import { useState, useEffect } from 'react';

export function useNFTs() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNFTs() {
      try {
        const response = await fetch('/api/nfts');
        const data = await response.json();
        setNfts(data.nfts);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchNFTs();
  }, []);

  return { nfts, loading, error };
}
```

---

## 🎯 FASE 4: Migrar de Mock a Real Data (2 horas)

### ✅ Task 4.1: Actualizar Gallery Page

**Archivo:** `src/app/gallery/page.tsx`

```typescript
'use client';

import { useNFTs } from '@/hooks/useNFTs';
import NFTCard from '@/components/NFTCard';

export default function GalleryPage() {
  const { nfts, loading, error } = useNFTs();

  if (loading) return <div>Loading NFTs from blockchain...</div>;
  if (error) return <div>Error loading NFTs</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {nfts.map(nft => (
        <NFTCard key={nft.token_id} nft={nft} />
      ))}
    </div>
  );
}
```

### ✅ Task 4.2: Mantener Supabase como Caché (Opcional)

Usar Supabase solo para:
- Cache de datos NFT (actualizar cada 24h)
- Sistema de puntos
- Actividad de usuarios

```typescript
// Sincronizar blockchain → Supabase cada 24h
async function syncNFTsToDatabase() {
  const nfts = await nftService.getCollectionNFTs();

  for (const nft of nfts) {
    await supabase.from('nfts').upsert({
      token_id: nft.token_id,
      name: nft.name,
      image_url: nft.image_url,
      owner: nft.owner,
      last_synced: new Date()
    });
  }
}
```

---

## 🎯 FASE 5: Profile & Admin (4-6 horas)

### ✅ Task 5.1: Página de Perfil de Usuario

**Archivo:** `src/app/profile/page.tsx`

```typescript
'use client';

import { useSession } from '@/lib/auth/useSession';
import { useUserNFTs } from '@/hooks/useUserNFTs';

export default function ProfilePage() {
  const { user } = useSession();
  const { nfts, loading } = useUserNFTs(user?.id);

  return (
    <div>
      <h1>My NFTs</h1>
      <div>Total owned: {nfts.length}</div>

      <div className="grid grid-cols-3 gap-4">
        {nfts.map(nft => (
          <NFTCard key={nft.token_id} nft={nft} />
        ))}
      </div>

      {/* Puntos, actividad, etc. */}
    </div>
  );
}
```

### ✅ Task 5.2: Panel de Admin

**Archivo:** `src/app/admin/page.tsx`

```typescript
'use client';

import { useAllUsers } from '@/hooks/useAllUsers';

export default function AdminPage() {
  const { users, loading } = useAllUsers();

  return (
    <div>
      <h1>User Management</h1>

      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>NFTs Owned</th>
            <th>Points</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.nft_count}</td>
              <td>{user.total_points}</td>
              <td>
                <button>View</button>
                <button>Ban</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

---

## 📊 ESTIMACIÓN DE TIEMPO TOTAL

| Fase | Tiempo | Complejidad |
|------|--------|-------------|
| **Fase 1:** Setup | 1-2 horas | Fácil |
| **Fase 2:** OAuth | 2-3 horas | ⭐Media |
| **Fase 3:** NFTs | 3-4 horas | ⭐Media |
| **Fase 4:** Migración | 2 horas | Fácil |
| **Fase 5:** Profile/Admin | 4-6 horas | ⭐⭐Alta |
| **TOTAL** | **12-17 horas** | **Media** |

---

## ✅ CHECKLIST DE TAREAS

### Setup Básico
- [ ] Obtener Client ID y Secret de Matrica.io
- [ ] Configurar variables de entorno
- [ ] Crear cliente de Matrica API
- [ ] Test de conexión básica

### Autenticación
- [ ] Implementar OAuth flow
- [ ] Crear API routes de auth
- [ ] Guardar tokens en cookies/session
- [ ] Crear componente de Login

### NFTs
- [ ] Servicio para obtener colección
- [ ] API routes para NFTs
- [ ] Hook useNFTs
- [ ] Migrar Gallery a datos reales

### Usuario
- [ ] Verificación de ownership
- [ ] Página de perfil
- [ ] Lista de NFTs del usuario
- [ ] Sistema de puntos integrado

### Admin
- [ ] Panel de administración
- [ ] Lista de usuarios
- [ ] Gestión de permisos
- [ ] Analytics básicos

---

## 🚨 CONSIDERACIONES IMPORTANTES

### Rate Limits
- Verificar límites del plan gratuito de Matrica.io
- Implementar caching para reducir llamadas
- Usar Supabase como caché local

### Seguridad
- ✅ API Key en servidor (nunca en cliente)
- ✅ Client Secret solo en backend
- ✅ Validar ownership server-side
- ✅ Proteger rutas de admin

### Performance
- Cache de colección completa (actualizar cada 24h)
- Lazy loading de imágenes NFT
- Pagination en galería
- Image optimization con Next.js

---

## 🔧 ALTERNATIVAS SI MATRICA.IO NO FUNCIONA

### Plan B: Helius (gratis hasta 100k requests/mes)
```typescript
const HELIUS_API = 'https://api.helius.xyz/v0';
const HELIUS_KEY = '<tu-key-gratis>';

// Obtener NFTs por owner
fetch(`${HELIUS_API}/addresses/${wallet}/nfts?api-key=${HELIUS_KEY}`)

// Obtener metadata de colección
fetch(`${HELIUS_API}/nft-collection/${collectionAddress}?api-key=${HELIUS_KEY}`)
```

### Plan C: Metaplex + RPC gratuito
```typescript
import { Metaplex } from "@metaplex-foundation/js";
import { Connection } from "@solana/web3.js";

const connection = new Connection("https://api.mainnet-beta.solana.com");
const metaplex = new Metaplex(connection);

const nfts = await metaplex
  .nfts()
  .findAllByCreator({ creator: collectionAddress });
```

---

## 📝 PRÓXIMOS PASOS INMEDIATOS

1. **Verificar cuenta de Matrica.io:**
   - Ir a https://matrica.io/dashboard
   - Confirmar que tu API key funciona
   - Ver documentación de endpoints

2. **Obtener dirección de tu colección NFT:**
   - ¿Tienes el collection address en Solana?
   - ¿Cuántos NFTs tiene la colección?
   - ¿Está verificada en Magic Eden/marketplaces?

3. **Decidir arquitectura:**
   - ¿Solo Matrica.io?
   - ¿O Matrica (auth) + Helius (NFTs)?

---

**¿Listo para empezar?** 🚀

El siguiente paso sería configurar las variables de entorno y hacer un test básico de la API de Matrica.io.
