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

    // Get wallet counts in a single query (more efficient than N API calls)
    const { data: walletCounts } = await supabase
      .from('user_wallets')
      .select('privy_user_id')
      .in('privy_user_id', privyUserIds);

    // Count wallets per user
    const walletCountMap = new Map<string, number>();
    (walletCounts || []).forEach(wallet => {
      const count = walletCountMap.get(wallet.privy_user_id) || 0;
      walletCountMap.set(wallet.privy_user_id, count + 1);
    });

    const leaderboard = (profiles || []).map((profile, index) => {
      return {
        id: profile.id,
        privy_user_id: profile.privy_user_id,
        display_name: profile.display_name,
        profile_picture: profile.profile_picture,
        twitter_handle: profile.twitter_handle,
        bio: profile.bio,
        rank: index + 1,
        points: profile.total_points || 0,
        nfts_count: walletCountMap.get(profile.privy_user_id) || 0,
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
