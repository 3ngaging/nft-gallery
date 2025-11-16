import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sanitizeString, isValidSolanaAddress, addSecurityHeaders } from '@/lib/security';

/**
 * GET /api/profile/by-wallet?address=...
 * Lookup user profile by their connected wallet address
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const walletAddress = sanitizeString(searchParams.get('address'));

    if (!walletAddress) {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Missing wallet address parameter' },
          { status: 400 }
        )
      );
    }

    // Validate wallet address format
    if (!isValidSolanaAddress(walletAddress)) {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Invalid wallet address format' },
          { status: 400 }
        )
      );
    }

    // Query the user_wallets table to find the privy_user_id associated with this wallet
    // Use limit(1) instead of maybeSingle() to handle multiple rows gracefully
    const { data: walletData, error: walletError } = await supabase
      .from('user_wallets')
      .select('privy_user_id')
      .eq('wallet_address', walletAddress)
      .limit(1);

    if (walletError) {
      console.error('Error fetching wallet:', walletError);
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Failed to lookup wallet' },
          { status: 500 }
        )
      );
    }

    // If no wallet found, return null profile (not an error - user just hasn't registered)
    if (!walletData || walletData.length === 0) {
      return addSecurityHeaders(
        NextResponse.json({
          success: true,
          profile: null,
        })
      );
    }

    // Get the first wallet's privy_user_id
    const privyUserId = walletData[0].privy_user_id;

    // Fetch the user profile
    const { data: profileData, error: profileError } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('privy_user_id', privyUserId)
      .maybeSingle();

    if (profileError) {
      console.error('Error fetching profile:', profileError);
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Failed to fetch profile' },
          { status: 500 }
        )
      );
    }

    return addSecurityHeaders(
      NextResponse.json({
        success: true,
        profile: profileData || null,
      })
    );
  } catch (error) {
    console.error('Error in by-wallet lookup:', error);
    return addSecurityHeaders(
      NextResponse.json(
        { success: false, error: 'Internal server error' },
        { status: 500 }
      )
    );
  }
}
