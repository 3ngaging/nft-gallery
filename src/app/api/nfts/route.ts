/**
 * API Route para obtener NFTs de la colección desde Matrica.io
 * GET /api/nfts - Obtiene todos los NFTs usando el hash list
 * GET /api/nfts?wallet=ADDRESS - Obtiene NFTs de una wallet específica
 */

import { NextRequest, NextResponse } from 'next/server';
import { matricaNFTClient } from '@/lib/matrica-nft-client';
import { sanitizeString, isValidSolanaAddress, addSecurityHeaders } from '@/lib/security';
import hashList from '@/../public/_hash.json';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const walletAddress = sanitizeString(searchParams.get('wallet'));

    // Caso 1: Obtener NFTs de una wallet específica de la colección
    if (walletAddress) {
      // Validate wallet address format
      if (!isValidSolanaAddress(walletAddress)) {
        return addSecurityHeaders(
          NextResponse.json(
            {
              success: false,
              error: 'Invalid wallet address format',
            },
            { status: 400 }
          )
        );
      }

      const nfts = await matricaNFTClient.checkOwnership(
        walletAddress,
        hashList
      );

      return addSecurityHeaders(
        NextResponse.json({
          success: true,
          count: nfts.length,
          wallet: walletAddress,
          nfts,
        })
      );
    }

    // Caso 2: Obtener todos los NFTs de la colección con sus owners
    const nfts = await matricaNFTClient.getCollectionWithOwners(hashList);

    return addSecurityHeaders(
      NextResponse.json({
        success: true,
        count: nfts.length,
        totalInHashList: hashList.length,
        nfts,
      })
    );
  } catch (error) {
    console.error('Error fetching NFTs:', error);

    return addSecurityHeaders(
      NextResponse.json(
        {
          success: false,
          error: 'Failed to fetch NFTs',
        },
        { status: 500 }
      )
    );
  }
}
