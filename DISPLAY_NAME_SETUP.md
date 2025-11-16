# Display Name Feature Setup Guide

## Overview
This feature allows users to set a custom display name instead of showing "did:pr..." or wallet addresses.

## Database Setup (Required)

### Step 1: Create the Supabase Table

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the contents of [`supabase_user_profiles_migration.sql`](./supabase_user_profiles_migration.sql)
4. Click **Run** to execute the SQL

This will create:
- `user_profiles` table with columns:
  - `id` (BIGSERIAL PRIMARY KEY)
  - `privy_user_id` (TEXT UNIQUE - stores Privy's user.id like "did:privy:...")
  - `display_name` (TEXT - custom name, 2-30 characters)
  - `created_at` (TIMESTAMPTZ)
  - `updated_at` (TIMESTAMPTZ)
- Indexes for fast lookups
- Row Level Security (RLS) policies
- Auto-update trigger for `updated_at` field

### Step 2: Verify Table Creation

In Supabase, go to **Table Editor** and confirm the `user_profiles` table exists.

## How It Works

### For Users:

1. **Login** to the app using Privy (Twitter, Discord, Google, or Wallet)
2. **Navigate** to the Profile page
3. **Click "Edit Name"** button next to your current display name
4. **Enter** a custom name (2-30 characters, letters, numbers, spaces, _ and - allowed)
5. **Press Enter** or click the checkmark to save

### Display Name Priority:

The app shows names in this order:
1. **Custom display name** (if set)
2. Twitter username (e.g., @username)
3. Discord username
4. Google email
5. Email address
6. Fallback: "User abc123"

## Files Created/Modified

### New Files:
- [`src/app/api/profile/display-name/route.ts`](./src/app/api/profile/display-name/route.ts) - API routes for GET/POST display name
- [`src/components/DisplayNameEditor.tsx`](./src/components/DisplayNameEditor.tsx) - Inline editor component
- [`supabase_user_profiles_migration.sql`](./supabase_user_profiles_migration.sql) - Database migration SQL

### Modified Files:
- [`src/lib/supabase.ts`](./src/lib/supabase.ts) - Added UserProfile type and helper functions
- [`src/app/profile/page.tsx`](./src/app/profile/page.tsx) - Integrated display name editor

## API Endpoints

### GET `/api/profile/display-name?privyUserId={userId}`
Fetch user's custom display name.

**Response:**
```json
{
  "success": true,
  "displayName": "CryptoKing" // or null if not set
}
```

### POST `/api/profile/display-name`
Update user's custom display name.

**Request Body:**
```json
{
  "privyUserId": "did:privy:...",
  "displayName": "CryptoKing"
}
```

**Response:**
```json
{
  "success": true,
  "displayName": "CryptoKing"
}
```

**Validation Rules:**
- Length: 2-30 characters
- Allowed characters: Letters (a-z, A-Z), numbers (0-9), spaces, underscores (_), hyphens (-)
- Trimmed of leading/trailing whitespace

## Troubleshooting

### Error: "Failed to update display name"
- **Check**: Supabase table exists and RLS policies are set up correctly
- **Verify**: Environment variables `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set

### Error: "Display name must be between 2 and 30 characters"
- The name is too short or too long
- Enter a name between 2-30 characters

### Error: "Display name can only contain letters, numbers, spaces, underscores, and hyphens"
- Remove special characters like @, #, $, %, etc.
- Only use: a-z, A-Z, 0-9, spaces, _, -

### Display name not saving
1. Open browser console (F12)
2. Check for errors
3. Verify the API route `/api/profile/display-name` returns 200 OK
4. Check Supabase logs for any database errors

## Security Notes

- ✅ Input validation (length, character whitelist)
- ✅ SQL injection protection (using Supabase client with parameterized queries)
- ✅ XSS protection (React escapes output automatically)
- ✅ Row Level Security (RLS) enabled on Supabase table
- ⚠️ Currently allows any user to update any profile (relies on frontend sending correct `privyUserId`)
  - For production, consider adding server-side Privy verification to ensure users can only update their own profiles

## Future Enhancements

- Add username uniqueness check
- Add profanity filter
- Add username history/audit log
- Add ability to reset to default name
- Add profile pictures/avatars
