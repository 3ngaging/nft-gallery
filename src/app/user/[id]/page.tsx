import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getUserProfile } from '@/lib/supabase';
import UserProfileClient from '@/components/UserProfileClient';
import UserProfileNotFound from '@/components/UserProfileNotFound';
import { isPrivyId } from '@/lib/user-utils';

type Props = {
  params: Promise<{ id: string }>;
};

/**
 * Lookup user profile by either Privy ID or display name slug
 * Uses direct Supabase queries instead of HTTP fetch for better performance
 */
async function lookupUserProfile(identifier: string) {
  const { supabase } = await import('@/lib/supabase');

  // If it's a Privy ID, use direct lookup
  if (isPrivyId(identifier)) {
    return await getUserProfile(identifier);
  }

  // Otherwise, search by display name using multiple strategies
  const sanitized = identifier.trim().toLowerCase();

  try {
    // Strategy 1: Search by username_slug (if exists)
    const { data: slugData } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('username_slug', sanitized)
      .maybeSingle();

    if (slugData) {
      console.log('[User Lookup] Found by username_slug:', sanitized);
      return slugData;
    }

    // Strategy 2: Search by display name (case-insensitive exact match)
    const { data: exactData } = await supabase
      .from('user_profiles')
      .select('*')
      .ilike('display_name', sanitized)
      .maybeSingle();

    if (exactData) {
      console.log('[User Lookup] Found by display name (exact):', sanitized);
      return exactData;
    }

    // Strategy 3: Convert slug to display name (e.g., "john-doe" -> "john doe")
    const potentialName = identifier.replace(/-/g, ' ');
    const { data: convertedData } = await supabase
      .from('user_profiles')
      .select('*')
      .ilike('display_name', potentialName)
      .maybeSingle();

    if (convertedData) {
      console.log('[User Lookup] Found by slug conversion:', identifier);
      return convertedData;
    }

    // Strategy 4: Partial match (last resort)
    const { data: partialData } = await supabase
      .from('user_profiles')
      .select('*')
      .ilike('display_name', `%${sanitized}%`)
      .limit(1)
      .maybeSingle();

    if (partialData) {
      console.log('[User Lookup] Found by partial match:', sanitized);
      return partialData;
    }

    console.log('[User Lookup] No profile found for:', identifier);
    return null;
  } catch (error) {
    console.error('[User Lookup] Error:', error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id: identifier } = await params;

  try {
    let profile = await lookupUserProfile(identifier);

    // Auto-create profile only if identifier is a Privy ID
    if (!profile && isPrivyId(identifier)) {
      const { supabase } = await import('@/lib/supabase');
      const { data } = await supabase
        .from('user_profiles')
        .upsert({
          privy_user_id: identifier,
          display_name: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'privy_user_id'
        })
        .select()
        .single();

      profile = data;
    }

    if (!profile) {
      return {
        title: 'User Profile - Power Grinders',
        description: 'View user profile on Power Grinders'
      };
    }

    const displayName = profile.display_name || `User ${profile.privy_user_id.slice(0, 8)}`;

    return {
      title: `${displayName} - Power Grinders`,
      description: profile.bio || `View ${displayName}'s profile on Power Grinders`,
      openGraph: {
        title: `${displayName} - Power Grinders`,
        description: profile.bio || `Power Grinders community member`,
        images: profile.profile_picture ? [profile.profile_picture] : [],
        type: 'profile',
      },
    };
  } catch (error) {
    console.error('Error fetching user metadata:', error);
    return {
      title: 'User Profile - Power Grinders',
      description: 'View user profile on Power Grinders'
    };
  }
}

export default async function UserProfilePage({ params }: Props) {
  const { id: identifier } = await params;

  let profile;
  try {
    profile = await lookupUserProfile(identifier);

    // Auto-create profile only if identifier is a Privy ID
    if (!profile && isPrivyId(identifier)) {
      console.log('[User Page] Creating new profile for user:', identifier);

      const { supabase } = await import('@/lib/supabase');
      const { data, error } = await supabase
        .from('user_profiles')
        .upsert({
          privy_user_id: identifier,
          display_name: null,
          bio: null,
          profile_picture: null,
          banner_image: null,
          twitter_handle: null,
          discord_username: null,
          telegram_username: null,
          website_url: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'privy_user_id'
        })
        .select()
        .single();

      if (error) {
        console.error('[User Page] Error creating profile:', error);
        // Continue with null profile - show "not found" message
        profile = null;
      } else {
        console.log('[User Page] Profile created successfully');
        profile = data;
      }
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    notFound();
  }

  if (!profile) {
    return <UserProfileNotFound />;
  }

  return <UserProfileClient profile={profile} />;
}
