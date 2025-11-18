import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sanitizeString, addSecurityHeaders } from '@/lib/security';

/**
 * GET /api/nfts/by-user?privyUserId=...
 * Fetch NFTs owned by a specific user (via their connected wallets)
 * Returns only public NFT data, no wallet addresses
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const privyUserId = sanitizeString(searchParams.get('privyUserId'));

    if (!privyUserId) {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Missing privyUserId parameter' },
          { status: 400 }
        )
      );
    }

    // Query the user_wallets table to get all wallets for this user
    const { data: walletData, error: walletError } = await supabase
      .from('user_wallets')
      .select('wallet_address')
      .eq('privy_user_id', privyUserId);

    console.log('[NFT by-user] Fetching NFTs for user:', privyUserId);
    console.log('[NFT by-user] Wallets found in database:', walletData?.length || 0);

    if (walletError) {
      console.error('[NFT by-user] Error fetching user wallets:', walletError);
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Failed to fetch user wallets' },
          { status: 500 }
        )
      );
    }

    // If no wallets found, return empty array
    if (!walletData || walletData.length === 0) {
      console.log('[NFT by-user] No wallets found for user, returning empty array');
      return addSecurityHeaders(
        NextResponse.json({
          success: true,
          nfts: [],
          count: 0,
          debug: {
            message: 'No wallets connected for this user',
            privyUserId,
            walletsInDatabase: 0,
          }
        })
      );
    }

    // Extract wallet addresses
    const walletAddresses = walletData.map((w) => w.wallet_address);
    console.log('[NFT by-user] Wallet addresses:', walletAddresses);

    // Fetch NFTs from the collection for these wallets
    // This is a placeholder - in production, you'll query your NFT data source
    // For now, we'll return mock data or use the Matrica API
    const allNFTs = [];

    // Loop through each wallet and fetch NFTs
    for (const walletAddress of walletAddresses) {
      try {
        console.log('[NFT by-user] Fetching NFTs for wallet:', walletAddress);
        // Call the existing NFT API endpoint
        const nftResponse = await fetch(
          `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/nfts?wallet=${walletAddress}`,
          { cache: 'no-store' }
        );
        const nftData = await nftResponse.json();

        console.log('[NFT by-user] NFTs received for wallet:', walletAddress, 'count:', nftData?.nfts?.length || 0);

        if (nftData.success && nftData.nfts) {
          allNFTs.push(...nftData.nfts);
        }
      } catch (error) {
        console.error(`[NFT by-user] Error fetching NFTs for wallet ${walletAddress}:`, error);
      }
    }

    console.log('[NFT by-user] Total NFTs collected:', allNFTs.length);

    // Remove duplicates (in case of any)
    const uniqueNFTs = Array.from(
      new Map(allNFTs.map((nft) => [nft.mintAddress, nft])).values()
    );

    return addSecurityHeaders(
      NextResponse.json({
        success: true,
        nfts: uniqueNFTs,
        count: uniqueNFTs.length,
      })
    );
  } catch (error) {
    console.error('Error in by-user NFT lookup:', error);
    return addSecurityHeaders(
      NextResponse.json(
        { success: false, error: 'Internal server error' },
        { status: 500 }
      )
    );
  }
}
