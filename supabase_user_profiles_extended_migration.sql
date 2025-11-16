-- Migration: Extend user_profiles table with profile picture, banner, bio, and social links
-- Run this SQL in your Supabase SQL editor AFTER running the initial migration

-- Add new columns to user_profiles table
ALTER TABLE user_profiles
ADD COLUMN IF NOT EXISTS profile_picture TEXT,
ADD COLUMN IF NOT EXISTS banner_image TEXT,
ADD COLUMN IF NOT EXISTS bio TEXT,
ADD COLUMN IF NOT EXISTS twitter_handle TEXT,
ADD COLUMN IF NOT EXISTS discord_username TEXT,
ADD COLUMN IF NOT EXISTS website_url TEXT,
ADD COLUMN IF NOT EXISTS total_points INTEGER DEFAULT 0;

-- Add comments to new columns
COMMENT ON COLUMN user_profiles.profile_picture IS 'URL to user profile picture image';
COMMENT ON COLUMN user_profiles.banner_image IS 'URL to user banner/header image';
COMMENT ON COLUMN user_profiles.bio IS 'User bio/description (max 500 characters)';
COMMENT ON COLUMN user_profiles.twitter_handle IS 'Twitter handle without @ symbol';
COMMENT ON COLUMN user_profiles.discord_username IS 'Discord username';
COMMENT ON COLUMN user_profiles.website_url IS 'Personal website URL';
COMMENT ON COLUMN user_profiles.total_points IS 'Total community points earned';

-- Optional: Set default images for existing users
-- UPDATE user_profiles
-- SET
--   profile_picture = '/default-avatar.png',
--   banner_image = '/default-banner.png'
-- WHERE profile_picture IS NULL;
