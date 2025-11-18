-- Migration: Add image upload support and Telegram username
-- Run this SQL in your Supabase SQL editor

-- 1. Add telegram_username if it doesn't exist
ALTER TABLE user_profiles
ADD COLUMN IF NOT EXISTS telegram_username TEXT;

-- 2. Add comments
COMMENT ON COLUMN user_profiles.telegram_username IS 'Telegram username (without @)';

-- 3. Create index for telegram_username for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_profiles_telegram_username
ON user_profiles(telegram_username)
WHERE telegram_username IS NOT NULL;

-- ============================================================
-- STORAGE BUCKET SETUP (Manual Steps - See Below)
-- ============================================================

-- NOTE: The RLS policies for storage.objects require special permissions.
-- Instead of running SQL for storage policies, please follow these manual steps:

-- STEP 1: Create Storage Bucket
-- 1. Go to Supabase Dashboard -> Storage
-- 2. Click "Create a new bucket"
-- 3. Bucket name: profile-images
-- 4. Make it PUBLIC (toggle the "Public bucket" option)
-- 5. Click "Create bucket"

-- STEP 2: Configure Bucket Policies
-- 1. Click on the "profile-images" bucket
-- 2. Go to "Policies" tab
-- 3. Click "New Policy"
-- 4. Select "For full customization" or use the policy editor

-- Policy 1: Allow public read access
-- Name: "Public Access"
-- Allowed operations: SELECT
-- Policy definition:
-- bucket_id = 'profile-images'

-- Policy 2: Allow anyone to upload (since we validate on API level)
-- Name: "Allow All Uploads"
-- Allowed operations: INSERT
-- Policy definition:
-- bucket_id = 'profile-images'

-- Policy 3: Allow anyone to update (API validates ownership)
-- Name: "Allow All Updates"
-- Allowed operations: UPDATE
-- Policy definition:
-- bucket_id = 'profile-images'

-- Policy 4: Allow anyone to delete (API validates ownership)
-- Name: "Allow All Deletes"
-- Allowed operations: DELETE
-- Policy definition:
-- bucket_id = 'profile-images'

-- STEP 3: Set File Size Limit (Optional)
-- In the bucket settings, you can set a max file size
-- Recommended: 5 MB (5242880 bytes)

-- STEP 4: Allowed MIME Types (Optional)
-- Supabase allows all file types by default
-- Our API validates on upload: image/jpeg, image/png, image/webp, image/gif

-- ============================================================
-- ALTERNATIVE: Simple Public Bucket Approach
-- ============================================================
-- If you want the simplest setup, just:
-- 1. Create a PUBLIC bucket named "profile-images"
-- 2. Don't add any custom policies (public buckets allow all operations by default)
-- 3. Let the API handle all security validation (which it does)

-- This is the RECOMMENDED approach since:
-- - You're using Privy auth (not Supabase Auth)
-- - The API already validates file types, sizes, and user ownership
-- - Simpler is better for maintainability

-- ============================================================
-- VERIFICATION
-- ============================================================
-- After setup, verify by:
-- 1. Checking the telegram_username column exists: \d user_profiles
-- 2. Checking the index exists: \di idx_user_profiles_telegram_username
-- 3. Testing image upload in your app
