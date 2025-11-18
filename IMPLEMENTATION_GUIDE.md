# Implementation Guide - Profile Image Uploads & Social Links

## Overview
This document outlines the changes made to implement image uploads for profile pictures and banners, as well as adding Telegram username support alongside existing Discord and Twitter integrations.

## Changes Summary

### 1. Database Migration
**File**: `supabase_profile_images_migration.sql`

- Added `telegram_username` column to `user_profiles` table
- Created storage bucket configuration for `profile-images`
- Implemented Row Level Security (RLS) policies for image uploads
- Added indexes for improved query performance

**Action Required**:
1. Run the SQL migration in your Supabase SQL editor (this adds the `telegram_username` column and index)
2. Go to Supabase Dashboard → Storage
3. Click "Create a new bucket"
4. Bucket name: `profile-images`
5. Toggle **"Public bucket"** option to ON
6. Click "Create bucket"

**Note**: Since you're using Privy authentication (not Supabase Auth), we use a public bucket and handle all security validation in the API. The API validates:
- File size (max 5MB)
- File types (only images)
- User authentication
- File ownership for deletions

### 2. Image Upload API
**File**: `src/app/api/upload-image/route.ts`

Created a secure image upload endpoint with:
- **Security Features**:
  - File size validation (max 5MB)
  - MIME type validation (only images)
  - File extension validation
  - User authentication required
  - Unique filename generation to prevent overwrites

- **Endpoints**:
  - `POST /api/upload-image` - Upload profile/banner image
  - `DELETE /api/upload-image` - Delete user's image (with ownership verification)

### 3. Profile Editor Updates
**File**: `src/components/ProfileEditor.tsx`

- Replaced URL input fields with file upload buttons
- Added image preview functionality
- Added upload progress indicators
- Added Telegram username field with validation
- Improved UX with remove image buttons
- All uploads are client-side validated before sending to server

### 4. Profile Display Updates

**Files Updated**:
- `src/app/profile/page.tsx` - User's own profile page
- `src/app/user/[id]/page.tsx` - Public user profile page
- `src/components/UserProfileClient.tsx` - Client component for user profiles

**Changes**:
- Display Telegram link with icon (if set)
- Telegram links open in new tab to `https://t.me/username`
- Updated social links section with proper styling
- Fixed redirect behavior (use `router.replace` instead of `router.push`)

### 5. Leaderboard Updates
**Files**:
- `src/app/leaderboard/page.tsx`
- `src/app/api/leaderboard/route.ts`

**Changes**:
- Added Discord and Telegram social icons
- Social links are clickable and open in new tabs
- Updated TypeScript types to include new fields
- API now returns `discord_username` and `telegram_username`

### 6. Security Validation
**File**: `src/lib/security.ts`

Added new validation function:
- `isValidTelegramUsername()` - Validates Telegram username format
  - 5-32 characters
  - Must start with a letter
  - Alphanumeric and underscores only

### 7. Type Updates
**File**: `src/lib/supabase.ts`

Updated `UserProfile` type to include:
- `telegram_username: string | null`

### 8. API Route Updates
**File**: `src/app/api/profile/route.ts`

- Added `telegram_username` to allowed fields
- Added validation for Telegram username format
- Updated profile creation to include `telegram_username` field

## How to Use

### For Users

#### Uploading Images
1. Go to your profile page
2. Click "Edit Profile"
3. Click "Upload Image" for profile picture or "Upload Banner"
4. Select an image file (JPG, PNG, WEBP, or GIF, max 5MB)
5. Image will be automatically uploaded and previewed
6. Click "Save Changes" to save

#### Adding Social Links
1. Go to your profile page
2. Click "Edit Profile"
3. Fill in your social usernames:
   - **Twitter**: Enter without @ symbol (e.g., `username`)
   - **Discord**: Enter full username (e.g., `username#1234`)
   - **Telegram**: Enter without @ symbol (e.g., `username`)
4. Click "Save Changes"

### For Developers

#### Image Upload Flow
```typescript
// 1. User selects file
const file = e.target.files?.[0];

// 2. Client-side validation
if (file.size > 5 * 1024 * 1024) {
  throw new Error('File too large');
}

// 3. Upload to API
const formData = new FormData();
formData.append('file', file);
formData.append('privyUserId', userId);
formData.append('imageType', 'profile'); // or 'banner'

const response = await fetch('/api/upload-image', {
  method: 'POST',
  body: formData,
});

// 4. Get public URL
const { url } = await response.json();
```

## Security Considerations

### Image Uploads
- ✅ File size limited to 5MB
- ✅ Only image MIME types allowed
- ✅ File extension validation
- ✅ Unique filenames prevent overwrites
- ✅ User authentication required
- ✅ RLS policies prevent unauthorized access
- ✅ Users can only delete their own images

### Social Links
- ✅ Input sanitization on all fields
- ✅ Format validation (Twitter: 1-15 chars, Telegram: 5-32 chars)
- ✅ XSS prevention through sanitization
- ✅ External links open in new tab with `rel="noopener noreferrer"`

## Testing Checklist

- [ ] Run database migration in Supabase
- [ ] Create `profile-images` storage bucket with correct settings
- [ ] Test profile picture upload
- [ ] Test banner image upload
- [ ] Test image removal
- [ ] Test file size validation (try uploading >5MB file)
- [ ] Test file type validation (try uploading .txt file)
- [ ] Test Telegram username validation
- [ ] Verify social links display on profile page
- [ ] Verify social links display on user profile page
- [ ] Verify social links display on leaderboard with proper redirects
- [ ] Test redirect behavior on profile page when not authenticated

## Known Limitations

1. **Discord Links**: Discord doesn't provide direct user profile links, so we link to `discord.com/users/username`. This may not work for all Discord usernames. Users might need to provide their Discord User ID instead in the future.

2. **Image Storage**: Images are stored in Supabase Storage. If you need CDN caching or image optimization, consider integrating with services like Cloudinary or imgix in the future.

3. **Image Dimensions**: No automatic resizing is implemented. Users should upload appropriately sized images (500x500 for profile, 1500x500 for banner).

## Future Enhancements

- [ ] Automatic image resizing and optimization
- [ ] Image cropping tool
- [ ] Support for animated profile pictures (GIF)
- [ ] Image compression before upload
- [ ] Progress bar for large uploads
- [ ] Drag and drop file upload
- [ ] Discord User ID support for better profile linking
- [ ] Link verification (verify user owns the social accounts)

## Environment Variables

No new environment variables needed! The implementation uses existing Supabase credentials:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

**Last Updated**: 2025-11-18
**Version**: 1.0.0
