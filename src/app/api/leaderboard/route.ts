import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

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
      return NextResponse.json(
        { success: false, error: 'Failed to fetch leaderboard' },
        { status: 500 }
      );
    }

    // Fetch NFT counts for each user
    const leaderboard = await Promise.all(
      (profiles || []).map(async (profile, index) => {
        // Get NFT count by fetching from the by-user API
        let nfts_count = 0;
        try {
          const nftResponse = await fetch(
            `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/nfts/by-user?privyUserId=${encodeURIComponent(profile.privy_user_id)}`,
            { cache: 'no-store' }
          );
          const nftData = await nftResponse.json();
          if (nftData.success) {
            nfts_count = nftData.count || 0;
          }
        } catch (error) {
          console.error(`Error fetching NFT count for user ${profile.privy_user_id}:`, error);
        }

        return {
          id: profile.id,
          privy_user_id: profile.privy_user_id,
          display_name: profile.display_name,
          profile_picture: profile.profile_picture,
          twitter_handle: profile.twitter_handle,
          bio: profile.bio,
          rank: index + 1,
          points: profile.total_points || 0,
          nfts_count,
        };
      })
    );

    return NextResponse.json({
      success: true,
      leaderboard,
      total: leaderboard.length,
    });
  } catch (error) {
    console.error('Error in leaderboard endpoint:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
