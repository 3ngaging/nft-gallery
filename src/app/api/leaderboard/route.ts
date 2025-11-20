import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { addSecurityHeaders } from '@/lib/security';

/**
 * GET /api/leaderboard
 * Fetch top users ranked by points
 * Returns public profile data only (no wallet info)
 */
export async function GET() {
  try {
    // Query user profiles with points, ordered by points DESC, then by join date
    const { data: profiles, error } = await supabase
      .from('user_profiles')
      .select(`
        id,
        privy_user_id,
        display_name,
        profile_picture,
        twitter_handle,
        discord_username,
        telegram_username,
        bio,
        total_points,
        created_at
      `)
      .order('total_points', { ascending: false })
      .order('created_at', { ascending: true })
      .limit(100);

    if (error) {
      console.error('Error fetching leaderboard:', error);
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Failed to fetch leaderboard' },
          { status: 500 }
        )
      );
    }

    // Fetch NFT counts for each user directly from database
    const privyUserIds = (profiles || []).map(p => p.privy_user_id);

    // Get wallet counts and addresses in a single query
    const { data: walletCounts } = await supabase
      .from('user_wallets')
      .select('privy_user_id, wallet_address')
      .in('privy_user_id', privyUserIds);

    // Count wallets per user and store first wallet address
    const walletCountMap = new Map<string, number>();
    const walletAddressMap = new Map<string, string>();
    (walletCounts || []).forEach(wallet => {
      const count = walletCountMap.get(wallet.privy_user_id) || 0;
      walletCountMap.set(wallet.privy_user_id, count + 1);

      // Store first wallet address (will be used if count = 1)
      if (count === 0) {
        walletAddressMap.set(wallet.privy_user_id, wallet.wallet_address);
      }
    });

    // For users with exactly 1 NFT, fetch the mint address
    const nftMintAddressMap = new Map<string, string>();
    for (const [privyUserId, count] of walletCountMap.entries()) {
      if (count === 1) {
        const walletAddress = walletAddressMap.get(privyUserId);
        if (walletAddress) {
          try {
            // Fetch NFT for this wallet
            const nftResponse = await fetch(
              `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/nfts?wallet=${walletAddress}`,
              { cache: 'no-store' }
            );
            const nftData = await nftResponse.json();

            if (nftData.success && nftData.nfts && nftData.nfts.length > 0) {
              nftMintAddressMap.set(privyUserId, nftData.nfts[0].mintAddress);
            }
          } catch (error) {
            console.error(`Error fetching NFT for user ${privyUserId}:`, error);
          }
        }
      }
    }

    const leaderboard = (profiles || []).map((profile, index) => {
      const nftsCount = walletCountMap.get(profile.privy_user_id) || 0;
      return {
        id: profile.id,
        privy_user_id: profile.privy_user_id,
        display_name: profile.display_name,
        profile_picture: profile.profile_picture,
        twitter_handle: profile.twitter_handle,
        discord_username: profile.discord_username,
        telegram_username: profile.telegram_username,
        bio: profile.bio,
        rank: index + 1,
        points: profile.total_points || 0,
        nfts_count: nftsCount,
        nft_mint_address: nftsCount === 1 ? nftMintAddressMap.get(profile.privy_user_id) : undefined,
      };
    });

    return addSecurityHeaders(
      NextResponse.json({
        success: true,
        leaderboard,
        total: leaderboard.length,
      })
    );
  } catch (error) {
    console.error('Error in leaderboard endpoint:', error);
    return addSecurityHeaders(
      NextResponse.json(
        { success: false, error: 'Internal server error' },
        { status: 500 }
      )
    );
  }
}
