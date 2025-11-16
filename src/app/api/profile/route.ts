import { NextRequest, NextResponse } from 'next/server';
import { getUserProfile, supabase } from '@/lib/supabase';

/**
 * GET /api/profile?privyUserId=...
 * Fetch complete user profile
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const privyUserId = searchParams.get('privyUserId');

    if (!privyUserId) {
      return NextResponse.json(
        { success: false, error: 'Missing privyUserId parameter' },
        { status: 400 }
      );
    }

    const profile = await getUserProfile(privyUserId);

    return NextResponse.json({
      success: true,
      profile: profile || null,
    });
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch profile' },
      { status: 500 }
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

    if (!privyUserId) {
      return NextResponse.json(
        { success: false, error: 'Missing privyUserId' },
        { status: 400 }
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

    const validUpdates: Record<string, string | number> = {};
    for (const [key, value] of Object.entries(updates)) {
      if (allowedFields.includes(key) && value !== undefined) {
        validUpdates[key] = value as string | number;
      }
    }

    // Validate specific fields
    if (validUpdates.display_name !== undefined) {
      const trimmed = String(validUpdates.display_name).trim();
      if (trimmed.length > 0 && (trimmed.length < 2 || trimmed.length > 30)) {
        return NextResponse.json(
          { success: false, error: 'Display name must be 2-30 characters' },
          { status: 400 }
        );
      }
      validUpdates.display_name = trimmed || null;
    }

    if (validUpdates.bio !== undefined && String(validUpdates.bio).length > 500) {
      return NextResponse.json(
        { success: false, error: 'Bio must be less than 500 characters' },
        { status: 400 }
      );
    }

    if (validUpdates.twitter_handle !== undefined) {
      const handle = String(validUpdates.twitter_handle).trim();
      validUpdates.twitter_handle = handle.startsWith('@') ? handle.slice(1) : handle;
    }

    // Upsert profile
    const { data, error } = await supabase
      .from('user_profiles')
      .upsert(
        {
          privy_user_id: privyUserId,
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
      return NextResponse.json(
        { success: false, error: 'Failed to update profile' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      profile: data,
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update profile' },
      { status: 500 }
    );
  }
}
