'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Edit2, Save, X, Upload, User, Image as ImageIcon, Twitter as TwitterIcon, Globe, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import type { UserProfile } from '@/lib/supabase';

type ProfileEditorProps = {
  privyUserId: string;
  profile: UserProfile | null;
  onProfileUpdated: (updatedProfile: UserProfile) => void;
};

export default function ProfileEditor({ privyUserId, profile, onProfileUpdated }: ProfileEditorProps) {
  const { t } = useLanguage();
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadingProfile, setUploadingProfile] = useState(false);
  const [uploadingBanner, setUploadingBanner] = useState(false);

  // Form state
  const [displayName, setDisplayName] = useState(profile?.display_name || '');
  const [bio, setBio] = useState(profile?.bio || '');
  const [profilePicture, setProfilePicture] = useState(profile?.profile_picture || '');
  const [bannerImage, setBannerImage] = useState(profile?.banner_image || '');
  const [twitterHandle, setTwitterHandle] = useState(profile?.twitter_handle || '');
  const [discordUsername, setDiscordUsername] = useState(profile?.discord_username || '');
  const [telegramUsername, setTelegramUsername] = useState(profile?.telegram_username || '');
  const [websiteUrl, setWebsiteUrl] = useState(profile?.website_url || '');

  // File input refs
  const profilePictureInputRef = useRef<HTMLInputElement>(null);
  const bannerImageInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (file: File, imageType: 'profile' | 'banner') => {
    try {
      if (imageType === 'profile') {
        setUploadingProfile(true);
      } else {
        setUploadingBanner(true);
      }
      setError(null);

      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        throw new Error('File size must be less than 5MB');
      }

      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        throw new Error('File type must be JPG, PNG, WEBP, or GIF');
      }

      // Upload file
      const formData = new FormData();
      formData.append('file', file);
      formData.append('privyUserId', privyUserId);
      formData.append('imageType', imageType);

      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to upload image');
      }

      // Update state with new image URL
      if (imageType === 'profile') {
        setProfilePicture(data.url);
      } else {
        setBannerImage(data.url);
      }
    } catch (err) {
      console.error('Error uploading image:', err);
      setError(err instanceof Error ? err.message : 'Failed to upload image');
    } finally {
      if (imageType === 'profile') {
        setUploadingProfile(false);
      } else {
        setUploadingBanner(false);
      }
    }
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file, 'profile');
    }
  };

  const handleBannerImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file, 'banner');
    }
  };

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
          telegram_username: telegramUsername.trim() || null,
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
    setTelegramUsername(profile?.telegram_username || '');
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
        {t.profileEditor.editButton}
      </button>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Edit2 size={24} className="text-accent" />
          {t.profileEditor.heading}
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

        {/* Profile Picture Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            <ImageIcon size={16} className="inline mr-2" />
            Profile Picture
          </label>
          <div className="flex gap-3 items-start">
            <button
              onClick={() => profilePictureInputRef.current?.click()}
              disabled={uploadingProfile}
              className="bg-accent/20 hover:bg-accent/30 text-accent px-4 py-2 text-sm font-semibold transition border border-accent/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {uploadingProfile ? (
                <>
                  <div className="w-4 h-4 border-2 border-accent/30 border-t-accent rounded-full animate-spin"></div>
                  Uploading...
                </>
              ) : (
                <>
                  <Upload size={16} />
                  Upload Image
                </>
              )}
            </button>
            <input
              ref={profilePictureInputRef}
              type="file"
              accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
              onChange={handleProfilePictureChange}
              className="hidden"
            />
            {profilePicture && (
              <div className="flex items-center gap-2">
                <Image
                  src={profilePicture}
                  alt="Profile preview"
                  width={48}
                  height={48}
                  className="rounded-full object-cover border border-white/10"
                  onError={() => setProfilePicture('')}
                />
                <button
                  onClick={() => setProfilePicture('')}
                  className="text-xs text-red-400 hover:text-red-300"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Upload a square image (500x500px recommended, max 5MB)
          </p>
        </div>

        {/* Banner Image Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            <Upload size={16} className="inline mr-2" />
            Banner Image
          </label>
          <div className="flex gap-3 items-start">
            <button
              onClick={() => bannerImageInputRef.current?.click()}
              disabled={uploadingBanner}
              className="bg-accent/20 hover:bg-accent/30 text-accent px-4 py-2 text-sm font-semibold transition border border-accent/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {uploadingBanner ? (
                <>
                  <div className="w-4 h-4 border-2 border-accent/30 border-t-accent rounded-full animate-spin"></div>
                  Uploading...
                </>
              ) : (
                <>
                  <Upload size={16} />
                  Upload Banner
                </>
              )}
            </button>
            <input
              ref={bannerImageInputRef}
              type="file"
              accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
              onChange={handleBannerImageChange}
              className="hidden"
            />
          </div>
          {bannerImage && (
            <div className="mt-2">
              <div className="relative w-full h-24 border border-white/10 overflow-hidden mb-2">
                <Image
                  src={bannerImage}
                  alt="Banner preview"
                  fill
                  className="object-cover"
                  onError={() => setBannerImage('')}
                />
              </div>
              <button
                onClick={() => setBannerImage('')}
                className="text-xs text-red-400 hover:text-red-300"
              >
                Remove Banner
              </button>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-1">
            Upload a wide banner image (1500x500px recommended, max 5MB)
          </p>
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

          {/* Telegram Username */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              <Send size={14} className="inline mr-2" />
              Telegram Username
            </label>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">@</span>
              <input
                type="text"
                value={telegramUsername}
                onChange={(e) => setTelegramUsername(e.target.value.replace('@', ''))}
                placeholder="username"
                className="flex-1 bg-black/30 border border-white/10 text-white px-4 py-2 focus:outline-none focus:border-accent/50 transition"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              5-32 characters, must start with a letter
            </p>
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
            disabled={saving || uploadingProfile || uploadingBanner}
            className="flex-1 bg-accent hover:bg-accent/90 text-[#F2ECC8] px-6 py-3 font-semibold transition shadow-[0_3px_0_0_#aca686] hover:shadow-[0_1px_0_0_#aca686] hover:translate-y-[2px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
            disabled={saving || uploadingProfile || uploadingBanner}
            className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
