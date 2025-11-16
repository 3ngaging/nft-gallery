/**
 * API Route para obtener NFTs de la colección desde Matrica.io
 * GET /api/nfts - Obtiene todos los NFTs usando el hash list
 * GET /api/nfts?wallet=ADDRESS - Obtiene NFTs de una wallet específica
 */

import { NextRequest, NextResponse } from 'next/server';
import { matricaNFTClient } from '@/lib/matrica-nft-client';
import hashList from '@/../public/_hash.json';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const walletAddress = searchParams.get('wallet');

    // Caso 1: Obtener NFTs de una wallet específica de la colección
    if (walletAddress) {
      const nfts = await matricaNFTClient.checkOwnership(
        walletAddress,
        hashList
      );

      return NextResponse.json({
        success: true,
        count: nfts.length,
        wallet: walletAddress,
        nfts,
      });
    }

    // Caso 2: Obtener todos los NFTs de la colección con sus owners
    const nfts = await matricaNFTClient.getCollectionWithOwners(hashList);

    return NextResponse.json({
      success: true,
      count: nfts.length,
      totalInHashList: hashList.length,
      nfts,
    });
  } catch (error) {
    console.error('Error fetching NFTs:', error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
