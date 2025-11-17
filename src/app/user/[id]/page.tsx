import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getUserProfile } from '@/lib/supabase';
import UserProfileClient from '@/components/UserProfileClient';

type Props = {
  params: Promise<{ id: string }>;
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id: privyUserId } = await params;

  try {
    let profile = await getUserProfile(privyUserId);

    // Auto-create profile if needed (for metadata)
    if (!profile) {
      const { supabase } = await import('@/lib/supabase');
      const { data } = await supabase
        .from('user_profiles')
        .upsert({
          privy_user_id: privyUserId,
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

    const displayName = profile.display_name || `User ${privyUserId.slice(0, 8)}`;

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
  const { id: privyUserId } = await params;

  let profile;
  try {
    profile = await getUserProfile(privyUserId);

    // Auto-create profile if it doesn't exist (same logic as API route)
    if (!profile) {
      console.log('[User Page] Creating new profile for user:', privyUserId);

      const { supabase } = await import('@/lib/supabase');
      const { data, error } = await supabase
        .from('user_profiles')
        .upsert({
          privy_user_id: privyUserId,
          display_name: null,
          bio: null,
          profile_picture: null,
          banner_image: null,
          twitter_handle: null,
          discord_username: null,
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
    // Profile creation failed - show error
    return (
      <div className="min-h-screen py-20 px-4 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4">Profile Not Found</h1>
          <p className="text-gray-400 mb-6">
            Unable to load or create profile for this user. Please try again later.
          </p>
          <a
            href="/gallery"
            className="inline-block bg-accent hover:bg-accent/90 text-black px-6 py-3 font-semibold transition"
          >
            Back to Gallery
          </a>
        </div>
      </div>
    );
  }

  return <UserProfileClient profile={profile} />;
}
