import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sanitizeString, isValidSolanaAddress, addSecurityHeaders } from '@/lib/security';

/**
 * POST /api/wallet/sync
 * Sync user's Privy wallets to database
 * This should be called when user connects or when viewing their profile
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { privyUserId, wallets } = body;

    const sanitizedPrivyUserId = sanitizeString(privyUserId);

    if (!sanitizedPrivyUserId || !Array.isArray(wallets)) {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Missing privyUserId or wallets array' },
          { status: 400 }
        )
      );
    }

    // Limit number of wallets to prevent abuse
    if (wallets.length > 50) {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Too many wallets. Maximum 50 allowed.' },
          { status: 400 }
        )
      );
    }

    let syncedCount = 0;

    // Upsert each wallet with validation
    for (const wallet of wallets) {
      const { address, chainType } = wallet;

      if (!address) continue;

      const sanitizedAddress = sanitizeString(address);
      const sanitizedChainType = sanitizeString(chainType);

      // Validate wallet address format for Solana
      if (sanitizedChainType === 'solana' && !isValidSolanaAddress(sanitizedAddress)) {
        console.warn(`Invalid Solana address format: ${sanitizedAddress}`);
        continue;
      }

      // Validate chain type
      const allowedChainTypes = ['solana', 'ethereum', 'polygon', 'base'];
      const finalChainType = allowedChainTypes.includes(sanitizedChainType)
        ? sanitizedChainType
        : 'solana';

      const { error } = await supabase
        .from('user_wallets')
        .upsert(
          {
            privy_user_id: sanitizedPrivyUserId,
            wallet_address: sanitizedAddress,
            chain_type: finalChainType,
            last_synced_at: new Date().toISOString(),
          },
          {
            onConflict: 'privy_user_id,wallet_address',
          }
        );

      if (!error) {
        syncedCount++;
      } else {
        console.error('Error syncing wallet:', error);
      }
    }

    return addSecurityHeaders(
      NextResponse.json({
        success: true,
        message: `Synced ${syncedCount} wallets`,
        total: syncedCount,
      })
    );
  } catch (error) {
    console.error('Error syncing wallets:', error);
    return addSecurityHeaders(
      NextResponse.json(
        { success: false, error: 'Internal server error' },
        { status: 500 }
      )
    );
  }
}
