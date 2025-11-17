import { NextRequest, NextResponse } from 'next/server';
import { createOrUpdateUserProfile, getUserProfile } from '@/lib/supabase';
import { sanitizeString, addSecurityHeaders } from '@/lib/security';

/**
 * GET /api/profile/display-name?privyUserId=...
 * Fetch user's display name
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

    const profile = await getUserProfile(privyUserId);

    return addSecurityHeaders(
      NextResponse.json({
        success: true,
        displayName: profile?.display_name || null,
      })
    );
  } catch (error) {
    console.error('Error fetching display name:', error);
    return addSecurityHeaders(
      NextResponse.json(
        { success: false, error: 'Failed to fetch display name' },
        { status: 500 }
      )
    );
  }
}

/**
 * POST /api/profile/display-name
 * Update user's display name
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { privyUserId, displayName } = body;

    const sanitizedPrivyUserId = sanitizeString(privyUserId);

    if (!sanitizedPrivyUserId || typeof displayName !== 'string') {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Missing or invalid parameters' },
          { status: 400 }
        )
      );
    }

    // Validate display name
    const trimmed = sanitizeString(displayName);
    if (trimmed.length < 2 || trimmed.length > 30) {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Display name must be between 2 and 30 characters' },
          { status: 400 }
        )
      );
    }

    // Only allow alphanumeric characters, spaces, underscores, and hyphens
    const validNamePattern = /^[a-zA-Z0-9 _-]+$/;
    if (!validNamePattern.test(trimmed)) {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Display name can only contain letters, numbers, spaces, underscores, and hyphens' },
          { status: 400 }
        )
      );
    }

    const profile = await createOrUpdateUserProfile(sanitizedPrivyUserId, trimmed);

    if (!profile) {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Failed to update display name' },
          { status: 500 }
        )
      );
    }

    return addSecurityHeaders(
      NextResponse.json({
        success: true,
        displayName: profile.display_name,
      })
    );
  } catch (error) {
    console.error('Error updating display name:', error);
    return addSecurityHeaders(
      NextResponse.json(
        { success: false, error: 'Failed to update display name' },
        { status: 500 }
      )
    );
  }
}
