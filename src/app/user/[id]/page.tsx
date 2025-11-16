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
    const profile = await getUserProfile(privyUserId);

    if (!profile) {
      return {
        title: 'User Not Found - Power Grinders',
        description: 'This user profile could not be found.'
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
  } catch (error) {
    console.error('Error fetching user profile:', error);
    notFound();
  }

  if (!profile) {
    // User exists but hasn't created a profile yet
    return (
      <div className="min-h-screen py-20 px-4 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4">Profile Not Found</h1>
          <p className="text-gray-400 mb-6">
            This user hasn&apos;t created a profile yet. Profiles are created automatically when users log in and visit their profile page.
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
