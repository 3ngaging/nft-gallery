'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Edit2, Save, X, Upload, User, Image as ImageIcon, Twitter as TwitterIcon, Globe, MessageCircle } from 'lucide-react';
import type { UserProfile } from '@/lib/supabase';

type ProfileEditorProps = {
  privyUserId: string;
  profile: UserProfile | null;
  onProfileUpdated: (updatedProfile: UserProfile) => void;
};

export default function ProfileEditor({ privyUserId, profile, onProfileUpdated }: ProfileEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [displayName, setDisplayName] = useState(profile?.display_name || '');
  const [bio, setBio] = useState(profile?.bio || '');
  const [profilePicture, setProfilePicture] = useState(profile?.profile_picture || '');
  const [bannerImage, setBannerImage] = useState(profile?.banner_image || '');
  const [twitterHandle, setTwitterHandle] = useState(profile?.twitter_handle || '');
  const [discordUsername, setDiscordUsername] = useState(profile?.discord_username || '');
  const [websiteUrl, setWebsiteUrl] = useState(profile?.website_url || '');

  const handleSave = async () => {
    try {
      setSaving(true);
      setError(null);

      const response = await fetch('/api/profile', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          privyUserId,
          display_name: displayName.trim() || null,
          bio: bio.trim() || null,
          profile_picture: profilePicture.trim() || null,
          banner_image: bannerImage.trim() || null,
          twitter_handle: twitterHandle.trim() || null,
          discord_username: discordUsername.trim() || null,
          website_url: websiteUrl.trim() || null,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to update profile');
      }

      // Update parent component
      onProfileUpdated(data.profile);
      setIsEditing(false);
    } catch (err) {
      console.error('Error saving profile:', err);
      setError(err instanceof Error ? err.message : 'Failed to save profile');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    // Reset to original values
    setDisplayName(profile?.display_name || '');
    setBio(profile?.bio || '');
    setProfilePicture(profile?.profile_picture || '');
    setBannerImage(profile?.banner_image || '');
    setTwitterHandle(profile?.twitter_handle || '');
    setDiscordUsername(profile?.discord_username || '');
    setWebsiteUrl(profile?.website_url || '');
    setError(null);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <button
        onClick={() => setIsEditing(true)}
        className="inline-flex items-center gap-2 bg-accent/20 hover:bg-accent/30 text-accent px-4 py-2 text-sm font-semibold transition border border-accent/30"
      >
        <Edit2 size={16} />
        Edit Profile
      </button>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Edit2 size={24} className="text-accent" />
          Edit Profile
        </h3>
        <button
          onClick={handleCancel}
          className="text-gray-400 hover:text-white transition"
        >
          <X size={20} />
        </button>
      </div>

      {error && (
        <div className="bg-red-500/20 border border-red-500/30 text-red-300 p-3 mb-4 text-sm">
          {error}
        </div>
      )}

      <div className="space-y-4">
        {/* Display Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            <User size={16} className="inline mr-2" />
            Display Name
          </label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Your display name"
            maxLength={30}
            className="w-full bg-black/30 border border-white/10 text-white px-4 py-2 focus:outline-none focus:border-accent/50 transition"
          />
          <p className="text-xs text-gray-500 mt-1">
            2-30 characters. Leave empty to use default name.
          </p>
        </div>

        {/* Profile Picture URL */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            <ImageIcon size={16} className="inline mr-2" />
            Profile Picture URL
          </label>
          <input
            type="url"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
            placeholder="https://example.com/your-avatar.jpg"
            className="w-full bg-black/30 border border-white/10 text-white px-4 py-2 focus:outline-none focus:border-accent/50 transition"
          />
          <p className="text-xs text-gray-500 mt-1">
            Direct URL to your profile picture image (500x500px recommended)
          </p>
          {profilePicture && (
            <div className="mt-2 flex items-center gap-2">
              <span className="text-xs text-gray-400">Preview:</span>
              <Image
                src={profilePicture}
                alt="Profile preview"
                width={40}
                height={40}
                className="rounded-full object-cover border border-white/10"
                onError={() => setProfilePicture('')}
              />
            </div>
          )}
        </div>

        {/* Banner Image URL */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            <Upload size={16} className="inline mr-2" />
            Banner Image URL
          </label>
          <input
            type="url"
            value={bannerImage}
            onChange={(e) => setBannerImage(e.target.value)}
            placeholder="https://example.com/your-banner.jpg"
            className="w-full bg-black/30 border border-white/10 text-white px-4 py-2 focus:outline-none focus:border-accent/50 transition"
          />
          <p className="text-xs text-gray-500 mt-1">
            Direct URL to your banner image (1500x500px recommended)
          </p>
          {bannerImage && (
            <div className="mt-2">
              <span className="text-xs text-gray-400 block mb-1">Preview:</span>
              <div className="relative w-full h-24 border border-white/10 overflow-hidden">
                <Image
                  src={bannerImage}
                  alt="Banner preview"
                  fill
                  className="object-cover"
                  onError={() => setBannerImage('')}
                />
              </div>
            </div>
          )}
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Bio / Description
          </label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us about yourself..."
            maxLength={500}
            rows={4}
            className="w-full bg-black/30 border border-white/10 text-white px-4 py-2 focus:outline-none focus:border-accent/50 transition resize-none"
          />
          <p className="text-xs text-gray-500 mt-1">
            {bio.length}/500 characters
          </p>
        </div>

        {/* Social Links Section */}
        <div className="border-t border-white/10 pt-4 mt-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-4">Social Links</h4>

          {/* Twitter Handle */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              <TwitterIcon size={14} className="inline mr-2" />
              Twitter Handle
            </label>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">@</span>
              <input
                type="text"
                value={twitterHandle}
                onChange={(e) => setTwitterHandle(e.target.value.replace('@', ''))}
                placeholder="username"
                className="flex-1 bg-black/30 border border-white/10 text-white px-4 py-2 focus:outline-none focus:border-accent/50 transition"
              />
            </div>
          </div>

          {/* Discord Username */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              <MessageCircle size={14} className="inline mr-2" />
              Discord Username
            </label>
            <input
              type="text"
              value={discordUsername}
              onChange={(e) => setDiscordUsername(e.target.value)}
              placeholder="username#1234"
              className="w-full bg-black/30 border border-white/10 text-white px-4 py-2 focus:outline-none focus:border-accent/50 transition"
            />
          </div>

          {/* Website URL */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              <Globe size={14} className="inline mr-2" />
              Website
            </label>
            <input
              type="url"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              placeholder="https://yourwebsite.com"
              className="w-full bg-black/30 border border-white/10 text-white px-4 py-2 focus:outline-none focus:border-accent/50 transition"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex-1 bg-accent hover:bg-accent/90 text-black px-6 py-3 font-semibold transition shadow-[0_3px_0_0_#aca686] hover:shadow-[0_1px_0_0_#aca686] hover:translate-y-[2px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {saving ? (
              <>
                <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                Saving...
              </>
            ) : (
              <>
                <Save size={16} />
                Save Changes
              </>
            )}
          </button>
          <button
            onClick={handleCancel}
            disabled={saving}
            className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
