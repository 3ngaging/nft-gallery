import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

/**
 * POST /api/wallet/sync
 * Sync user's Privy wallets to database
 * This should be called when user connects or when viewing their profile
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { privyUserId, wallets } = body;

    if (!privyUserId || !Array.isArray(wallets)) {
      return NextResponse.json(
        { success: false, error: 'Missing privyUserId or wallets array' },
        { status: 400 }
      );
    }

    // Upsert each wallet
    for (const wallet of wallets) {
      const { address, chainType } = wallet;

      if (!address) continue;

      await supabase
        .from('user_wallets')
        .upsert(
          {
            privy_user_id: privyUserId,
            wallet_address: address,
            chain_type: chainType || 'solana',
            last_synced_at: new Date().toISOString(),
          },
          {
            onConflict: 'privy_user_id,wallet_address',
          }
        );
    }

    return NextResponse.json({
      success: true,
      message: `Synced ${wallets.length} wallets`,
    });
  } catch (error) {
    console.error('Error syncing wallets:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
