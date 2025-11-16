# Implementation Status - Power Grinders NFT Gallery

## ✅ Completed Features

### 1. Custom Display Names in Navbar
- **Status**: ✓ Complete
- **Description**: Navbar now shows custom display name instead of "User did:pr..."
- **Files Modified**:
  - Created [src/hooks/useUserProfile.ts](src/hooks/useUserProfile.ts) - Centralized hook for user profile data
  - Updated [src/components/auth/PrivyLoginButton.tsx](src/components/auth/PrivyLoginButton.tsx) - Uses `useUserProfile` hook
- **How it works**: Automatically fetches custom display name from Supabase and shows it in the nav

### 2. OWNED Badge for User's NFTs
- **Status**: ✓ Complete
- **Description**: "👑 OWNED BY YOU" badge appears on NFTs the user owns
- **Files Modified**:
  - [src/components/NFTDetailClient.tsx](src/components/NFTDetailClient.tsx) - Added ownership check and badge
  - [src/lib/i18n.ts](src/lib/i18n.ts) - Added translations for all languages
- **How it works**: Compares connected wallet addresses with NFT owner address

### 3. Extended User Profile Schema
- **Status**: ✓ Backend Ready
- **Description**: Database schema extended with profile picture, banner, bio, and social links
- **Files Created**:
  - [supabase_user_profiles_extended_migration.sql](supabase_user_profiles_extended_migration.sql) - SQL migration
  - [src/app/api/profile/route.ts](src/app/api/profile/route.ts) - API for full profile updates
- **Database Fields Added**:
  - `profile_picture` (TEXT) - URL to profile image
  - `banner_image` (TEXT) - URL to banner image
  - `bio` (TEXT) - User bio (max 500 chars)
  - `twitter_handle` (TEXT) - Twitter handle
  - `discord_username` (TEXT) - Discord username
  - `website_url` (TEXT) - Personal website

---

## 🚧 Pending Implementation

### 4. Enhanced Profile Editor UI
- **Status**: ⏳ TODO
- **What's Needed**:
  - Update profile page to show all fields (PFP, banner, bio, social links)
  - Add image upload functionality for PFP and banner
  - Create default template images
  - Add form fields for bio and social links

- **Suggested Approach**:
  ```tsx
  // In src/app/profile/page.tsx
  - Add state for: pfp, banner, bio, twitter, discord, website
  - Create edit mode toggle
  - Add image upload using Supabase Storage or external service (Cloudinary, etc.)
  - Use PATCH /api/profile endpoint to save changes
  ```

- **Default Images to Create**:
  - `/public/default-avatar.png` (500x500px)
  - `/public/default-banner.png` (1500x500px)

### 5. User Profile Public Page
- **Status**: ⏳ TODO
- **What's Needed**:
  - Create `/profile/[username]` or `/user/[privyUserId]` route
  - Display public profile with:
    - Banner image
    - Profile picture
    - Display name
    - Bio
    - Social links (Twitter, Discord, Website)
    - Owned NFTs from collection
    - Total points (when points system is ready)

- **File to Create**:
  ```
  src/app/user/[id]/page.tsx
  ```

- **API Endpoint**: Use `GET /api/profile?privyUserId=...`

### 6. Owner Profile Links on NFT Page
- **Status**: ⏳ TODO
- **What's Needed**:
  - On NFT detail page, check if owner has a profile in database
  - If yes, show owner's display name with link to their profile page
  - Keep Solscan link as secondary action

- **Update File**: [src/components/NFTDetailClient.tsx](src/components/NFTDetailClient.tsx)
- **Logic**:
  ```tsx
  // Fetch owner profile
  const [ownerProfile, setOwnerProfile] = useState(null);

  useEffect(() => {
    // Try to find user profile by wallet address
    // If found, show: "{displayName}" link to /user/{privyUserId}
    // Else show: wallet address
  }, [nft.owner]);
  ```

### 7. Leaderboard Page
- **Status**: ⏳ TODO
- **What's Needed**:
  - Create `/leaderboard` page
  - Display all users sorted by points
  - Show:
    - Rank (#1, #2, etc.)
    - Profile picture
    - Display name
    - Total points
    - NFTs owned count

- **File to Create**:
  ```
  src/app/leaderboard/page.tsx
  ```

- **API Endpoint to Create**:
  ```
  src/app/api/leaderboard/route.ts
  // Query user_profiles joined with points
  // ORDER BY total_points DESC
  ```

### 8. Twitter Share Button on NFT Detail
- **Status**: ⏳ TODO
- **What's Needed**:
  - Replace generic "Share" button with "Share on Twitter" button
  - Pre-fill tweet with:
    - NFT name and number
    - Collection mention (@Power_Grinders)
    - Link to NFT page
    - Hashtags

- **Update File**: [src/components/NFTDetailClient.tsx](src/components/NFTDetailClient.tsx)
- **Twitter Intent URL**:
  ```tsx
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `Check out ${nft.name} #${nft.number} from @Power_Grinders NFT Collection!`
  )}&url=${encodeURIComponent(window.location.href)}&hashtags=PowerGrinders,SolanaNFT`;

  <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
    Share on Twitter
  </a>
  ```

### 9. Footer on All Pages
- **Status**: ⏳ TODO
- **What's Needed**:
  - Create reusable Footer component
  - Add to layout or each page
  - Include links:
    - Twitter: https://x.com/Power_Grinders
    - Discord: (already have)
    - Exchange Art: https://exchange.art/series/edit/QYs1k18OaatqtIHbXFBc/live

- **File to Create**:
  ```
  src/components/Footer.tsx
  ```

- **Files to Update**:
  ```
  src/app/layout.tsx - Add <Footer /> globally
  OR
  Update each page individually
  ```

### 10. Update Footer Links
- **Status**: ⏳ Included in #9
- **Links to Add**:
  - ✓ Discord (already present)
  - ✓ Twitter: https://x.com/Power_Grinders
  - ✓ Exchange Art: https://exchange.art/series/edit/QYs1k18OaatqtIHbXFBc/live

---

## 📋 Implementation Priority

### High Priority (Core Features):
1. **Enhanced Profile Editor** (#4) - Users need to set PFP, banner, bio
2. **User Profile Public Page** (#5) - Essential for profiles to be viewable
3. **Owner Profile Links** (#6) - Better UX for identifying NFT owners

### Medium Priority (UX Improvements):
4. **Twitter Share Button** (#8) - Easy social sharing
5. **Footer on All Pages** (#9) - Brand consistency

### Low Priority (Future Features):
6. **Leaderboard Page** (#7) - Depends on points system being implemented

---

## 🗄️ Database Migrations Required

### Step 1: Initial User Profiles Table
**File**: [supabase_user_profiles_migration.sql](supabase_user_profiles_migration.sql)
**Status**: ⚠️ Must run this first

### Step 2: Extended Profile Fields
**File**: [supabase_user_profiles_extended_migration.sql](supabase_user_profiles_extended_migration.sql)
**Status**: ⚠️ Run AFTER step 1

---

## 🎨 Assets Needed

### Default Images:
1. **Default Avatar** (`/public/default-avatar.png`)
   - Size: 500x500px
   - Style: Power Grinders themed placeholder
   - Use: When user hasn't uploaded profile picture

2. **Default Banner** (`/public/default-banner.png`)
   - Size: 1500x500px
   - Style: Power Grinders themed banner
   - Use: When user hasn't uploaded banner image

### Suggested Tools:
- Canva (free templates)
- Figma (custom design)
- Midjourney/DALL-E (AI generation)

---

## 📝 Code Examples

### Example: Image Upload with Supabase Storage

```tsx
// In profile editor
const handleImageUpload = async (file: File, type: 'avatar' | 'banner') => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${user.id}-${type}.${fileExt}`;
  const filePath = `${type}s/${fileName}`;

  // Upload to Supabase Storage
  const { data, error } = await supabase.storage
    .from('profile-images')
    .upload(filePath, file, { upsert: true });

  if (error) {
    console.error('Upload error:', error);
    return;
  }

  // Get public URL
  const { data: { publicUrl } } = supabase.storage
    .from('profile-images')
    .getPublicUrl(filePath);

  // Update profile
  await fetch('/api/profile', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      privyUserId: user.id,
      [type === 'avatar' ? 'profile_picture' : 'banner_image']: publicUrl,
    }),
  });
};
```

### Example: Fetching Owner Profile

```tsx
// In NFTDetailClient.tsx
const [ownerProfile, setOwnerProfile] = useState<UserProfile | null>(null);

useEffect(() => {
  async function fetchOwnerProfile() {
    // This requires a new API endpoint that looks up profile by wallet address
    const response = await fetch(`/api/profile/by-wallet?address=${nft.owner}`);
    const data = await response.json();
    if (data.success && data.profile) {
      setOwnerProfile(data.profile);
    }
  }
  fetchOwnerProfile();
}, [nft.owner]);

// Then in JSX:
{ownerProfile ? (
  <Link href={`/user/${ownerProfile.privy_user_id}`}>
    {ownerProfile.display_name || 'View Profile'}
  </Link>
) : (
  <code>{nft.owner}</code>
)}
```

---

## 🚀 Next Steps

1. **Run Database Migrations**:
   ```sql
   -- In Supabase SQL Editor:
   -- 1. Run supabase_user_profiles_migration.sql
   -- 2. Run supabase_user_profiles_extended_migration.sql
   ```

2. **Create Default Images**:
   - Design/find default avatar and banner
   - Save to `/public/` directory

3. **Implement Profile Editor** (Priority #1):
   - Add UI for all new fields
   - Implement image upload
   - Test profile updates

4. **Create Public Profile Page** (Priority #2):
   - Build `/user/[id]/page.tsx`
   - Display all profile data
   - Show owned NFTs

5. **Add Remaining Features**:
   - Owner profile links
   - Twitter share
   - Footer component

---

**Last Updated**: 2025-11-16
**Status**: Partially Complete (3/10 features done)
