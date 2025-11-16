import { NextRequest, NextResponse } from 'next/server';
import { getUserProfile, supabase } from '@/lib/supabase';
import {
  sanitizeString,
  sanitizeUrl,
  isValidDisplayName,
  isValidTwitterHandle,
  isValidDiscordUsername,
  sanitizeBio,
  addSecurityHeaders,
} from '@/lib/security';

/**
 * GET /api/profile?privyUserId=...
 * Fetch complete user profile
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
        profile: profile || null,
      })
    );
  } catch (error) {
    console.error('Error fetching profile:', error);
    return addSecurityHeaders(
      NextResponse.json(
        { success: false, error: 'Failed to fetch profile' },
        { status: 500 }
      )
    );
  }
}

/**
 * PATCH /api/profile
 * Update user profile (partial update)
 */
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { privyUserId, ...updates } = body;

    const sanitizedPrivyUserId = sanitizeString(privyUserId);

    if (!sanitizedPrivyUserId) {
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Missing privyUserId' },
          { status: 400 }
        )
      );
    }

    // Validate updates
    const allowedFields = [
      'display_name',
      'profile_picture',
      'banner_image',
      'bio',
      'twitter_handle',
      'discord_username',
      'website_url',
    ];

    const validUpdates: Record<string, string | number | null> = {};
    for (const [key, value] of Object.entries(updates)) {
      if (allowedFields.includes(key) && value !== undefined) {
        validUpdates[key] = value as string | number | null;
      }
    }

    // Validate and sanitize specific fields
    if (validUpdates.display_name !== undefined) {
      const trimmed = sanitizeString(String(validUpdates.display_name));
      if (trimmed && !isValidDisplayName(trimmed)) {
        return addSecurityHeaders(
          NextResponse.json(
            { success: false, error: 'Display name must be 2-30 characters with only letters, numbers, spaces, underscores, and hyphens' },
            { status: 400 }
          )
        );
      }
      validUpdates.display_name = trimmed || null;
    }

    if (validUpdates.bio !== undefined) {
      const bioStr = sanitizeBio(String(validUpdates.bio || ''));
      if (bioStr && bioStr.length > 500) {
        return addSecurityHeaders(
          NextResponse.json(
            { success: false, error: 'Bio must be less than 500 characters' },
            { status: 400 }
          )
        );
      }
      validUpdates.bio = bioStr;
    }

    if (validUpdates.twitter_handle !== undefined) {
      const handle = sanitizeString(String(validUpdates.twitter_handle || ''));
      if (handle) {
        const cleanHandle = handle.startsWith('@') ? handle.slice(1) : handle;
        if (!isValidTwitterHandle(cleanHandle)) {
          return addSecurityHeaders(
            NextResponse.json(
              { success: false, error: 'Invalid Twitter handle format' },
              { status: 400 }
            )
          );
        }
        validUpdates.twitter_handle = cleanHandle;
      } else {
        validUpdates.twitter_handle = null;
      }
    }

    if (validUpdates.discord_username !== undefined) {
      const username = sanitizeString(String(validUpdates.discord_username || ''));
      if (username && !isValidDiscordUsername(username)) {
        return addSecurityHeaders(
          NextResponse.json(
            { success: false, error: 'Invalid Discord username format' },
            { status: 400 }
          )
        );
      }
      validUpdates.discord_username = username || null;
    }

    if (validUpdates.website_url !== undefined) {
      const urlStr = sanitizeUrl(String(validUpdates.website_url || ''));
      validUpdates.website_url = urlStr;
    }

    // Sanitize profile and banner images
    if (validUpdates.profile_picture !== undefined) {
      const picUrl = sanitizeUrl(String(validUpdates.profile_picture || ''));
      validUpdates.profile_picture = picUrl;
    }

    if (validUpdates.banner_image !== undefined) {
      const bannerUrl = sanitizeUrl(String(validUpdates.banner_image || ''));
      validUpdates.banner_image = bannerUrl;
    }

    // Upsert profile
    const { data, error } = await supabase
      .from('user_profiles')
      .upsert(
        {
          privy_user_id: sanitizedPrivyUserId,
          ...validUpdates,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: 'privy_user_id',
        }
      )
      .select()
      .single();

    if (error) {
      console.error('Error updating profile:', error);
      return addSecurityHeaders(
        NextResponse.json(
          { success: false, error: 'Failed to update profile' },
          { status: 500 }
        )
      );
    }

    return addSecurityHeaders(
      NextResponse.json({
        success: true,
        profile: data,
      })
    );
  } catch (error) {
    console.error('Error updating profile:', error);
    return addSecurityHeaders(
      NextResponse.json(
        { success: false, error: 'Failed to update profile' },
        { status: 500 }
      )
    );
  }
}
