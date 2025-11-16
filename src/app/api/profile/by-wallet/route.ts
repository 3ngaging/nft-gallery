import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

/**
 * GET /api/profile/by-wallet?address=...
 * Lookup user profile by their connected wallet address
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const walletAddress = searchParams.get('address');

    if (!walletAddress) {
      return NextResponse.json(
        { success: false, error: 'Missing wallet address parameter' },
        { status: 400 }
      );
    }

    // Query the user_wallets table to find the privy_user_id associated with this wallet
    const { data: walletData, error: walletError } = await supabase
      .from('user_wallets')
      .select('privy_user_id')
      .eq('wallet_address', walletAddress)
      .maybeSingle();

    if (walletError) {
      console.error('Error fetching wallet:', walletError);
      return NextResponse.json(
        { success: false, error: 'Failed to lookup wallet' },
        { status: 500 }
      );
    }

    // If no wallet found, return null profile (not an error - user just hasn't registered)
    if (!walletData) {
      return NextResponse.json({
        success: true,
        profile: null,
      });
    }

    // Fetch the user profile
    const { data: profileData, error: profileError } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('privy_user_id', walletData.privy_user_id)
      .maybeSingle();

    if (profileError) {
      console.error('Error fetching profile:', profileError);
      return NextResponse.json(
        { success: false, error: 'Failed to fetch profile' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      profile: profileData || null,
    });
  } catch (error) {
    console.error('Error in by-wallet lookup:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
