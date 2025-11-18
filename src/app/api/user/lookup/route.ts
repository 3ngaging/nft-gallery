import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sanitizeString, addSecurityHeaders } from '@/lib/security';

/**
 * GET /api/user/lookup?identifier=...
 * Flexible user lookup - accepts either:
 * 1. Privy User ID (did:privy:...)
 * 2. Display name (case-insensitive)
 * 3. Username slug (lowercase, hyphenated)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const identifier = sanitizeString(searchParams.get('identifier'));

    if (!identifier) {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Missing identifier parameter' },
          { status: 400 }
        )
      );
    }

    console.log('[User Lookup] Searching for:', identifier);

    let profile = null;

    // Strategy 1: Check if it's a Privy ID (starts with "did:privy:")
    if (identifier.startsWith('did:privy:')) {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('privy_user_id', identifier)
        .single();

      if (!error && data) {
        profile = data;
        console.log('[User Lookup] Found by Privy ID:', identifier);
      }
    }

    // Strategy 2: Search by username_slug (if column exists - fastest)
    if (!profile) {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('username_slug', identifier.toLowerCase())
        .maybeSingle();

      if (!error && data) {
        profile = data;
        console.log('[User Lookup] Found by username_slug:', identifier);
      }
    }

    // Strategy 3: Search by display name (case-insensitive exact match)
    if (!profile) {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .ilike('display_name', identifier)
        .maybeSingle();

      if (!error && data) {
        profile = data;
        console.log('[User Lookup] Found by display name (exact):', identifier);
      }
    }

    // Strategy 4: Search by username slug fallback (convert hyphens to spaces)
    if (!profile) {
      // Convert identifier to potential display name
      // e.g., "john-doe" -> "John Doe" or "john doe"
      const potentialName = identifier.replace(/-/g, ' ');

      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .ilike('display_name', potentialName)
        .maybeSingle();

      if (!error && data) {
        profile = data;
        console.log('[User Lookup] Found by slug conversion:', identifier);
      }
    }

    // Strategy 5: Partial match on display name (fuzzy search)
    if (!profile) {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .ilike('display_name', `%${identifier}%`)
        .limit(1)
        .maybeSingle();

      if (!error && data) {
        profile = data;
        console.log('[User Lookup] Found by partial match:', identifier);
      }
    }

    if (!profile) {
      console.log('[User Lookup] No profile found for:', identifier);
      return addSecurityHeaders(
        NextResponse.json(
          {
            success: false,
            error: 'User not found',
            identifier
          },
          { status: 404 }
        )
      );
    }

    return addSecurityHeaders(
      NextResponse.json({
        success: true,
        profile,
      })
    );
  } catch (error) {
    console.error('[User Lookup] Error:', error);
    return addSecurityHeaders(
      NextResponse.json(
        { success: false, error: 'Internal server error' },
        { status: 500 }
      )
    );
  }
}
