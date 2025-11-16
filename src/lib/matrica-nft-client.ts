/**
 * Cliente para Matrica.io NFT API
 * Obtiene datos de NFTs individuales usando el mint address
 * API: https://api.matrica.io/v1/nft/{mintAddress}?apiKey={key}
 */

import { getNFTNumber } from './nftHashList';

const MATRICA_API_BASE = 'https://api.matrica.io/v1';
const API_KEY = process.env.NEXT_PUBLIC_MATRICA_API_KEY;

if (!API_KEY) {
  console.warn('NEXT_PUBLIC_MATRICA_API_KEY is not set');
}

// Interfaces basadas en la respuesta real de Matrica
export interface MatricaNFTResponse {
  id: string; // mint address
  name: string;
  image: string; // IPFS URL
  url: string; // Matrica CDN URL
  collection: {
    id: string;
    name: string;
    community: {
      id: string;
      name: string;
    };
  };
  updateAuthority: string;
  status: 'HODLED' | 'LISTED' | 'STAKED' | string;
  sellerFeeBasisPoints: number;
  isMutable: boolean;
  owner: {
    id: string; // wallet address del owner
  };
  data: Record<string, unknown> | null;
}

export interface NFTWithOwner {
  mintAddress: string;
  number: number; // NFT # in collection (e.g., #1, #2, etc.)
  name: string;
  image: string;
  cdnImage: string;
  collection: {
    id: string;
    name: string;
    communityId: string;
    communityName: string;
  };
  owner: string;
  status: string;
  isMutable: boolean;
}

class MatricaNFTClient {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Obtiene información de un NFT específico por su mint address
   * GET /v1/nft/{mintAddress}?apiKey={key}
   */
  async getNFT(mintAddress: string): Promise<MatricaNFTResponse> {
    const url = `${MATRICA_API_BASE}/nft/${mintAddress}?apiKey=${this.apiKey}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Siempre obtener datos frescos
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Matrica API error (${response.status}): ${error}`);
    }

    return response.json();
  }

  /**
   * Obtiene información de múltiples NFTs usando sus mint addresses
   * Hace requests en paralelo con un límite de concurrencia
   */
  async getNFTsBatch(
    mintAddresses: string[],
    concurrencyLimit = 10
  ): Promise<NFTWithOwner[]> {
    const results: NFTWithOwner[] = [];

    // Procesar en lotes para no sobrecargar la API
    for (let i = 0; i < mintAddresses.length; i += concurrencyLimit) {
      const batch = mintAddresses.slice(i, i + concurrencyLimit);
      const batchPromises = batch.map(async (mintAddress) => {
        try {
          const nft = await this.getNFT(mintAddress);
          return this.parseNFT(nft);
        } catch (error) {
          console.error(`Error fetching NFT ${mintAddress}:`, error);
          return null;
        }
      });

      const batchResults = await Promise.all(batchPromises);
      results.push(...batchResults.filter((nft): nft is NFTWithOwner => nft !== null));
    }

    return results;
  }

  /**
   * Parsea la respuesta de Matrica a nuestro formato
   */
  private parseNFT(nft: MatricaNFTResponse): NFTWithOwner {
    const nftNumber = getNFTNumber(nft.id) || 0; // Get # position from hash list

    return {
      mintAddress: nft.id,
      number: nftNumber,
      name: nft.name,
      image: nft.image, // IPFS URL original
      cdnImage: nft.url, // Matrica CDN optimizado
      collection: {
        id: nft.collection.id,
        name: nft.collection.name,
        communityId: nft.collection.community.id,
        communityName: nft.collection.community.name,
      },
      owner: nft.owner.id, // Wallet address del dueño
      status: nft.status,
      isMutable: nft.isMutable,
    };
  }

  /**
   * Verifica si una wallet específica es dueña de algún NFT de la lista
   */
  async checkOwnership(
    walletAddress: string,
    mintAddresses: string[]
  ): Promise<NFTWithOwner[]> {
    const nfts = await this.getNFTsBatch(mintAddresses);

    // Filtrar solo los NFTs que pertenecen a la wallet
    return nfts.filter(
      (nft) => nft.owner.toLowerCase() === walletAddress.toLowerCase()
    );
  }

  /**
   * Obtiene todos los NFTs de la colección con sus owners
   */
  async getCollectionWithOwners(mintAddresses: string[]): Promise<NFTWithOwner[]> {
    return this.getNFTsBatch(mintAddresses);
  }
}

// Export singleton instance
export const matricaNFTClient = new MatricaNFTClient(API_KEY || '');

// Export class for testing
export { MatricaNFTClient };
