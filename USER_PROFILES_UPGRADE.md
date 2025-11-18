# User Profile URLs Upgrade

## Overview

The user profile system has been upgraded to support **SEO-friendly URLs** using display names instead of Privy IDs.

---

## Features

### ✅ Flexible Profile URLs

Users can now be accessed via **multiple URL formats**:

1. **Display Name Slug** (Preferred)
   ```
   /user/crypto-king
   /user/john-doe
   /user/power-grinder
   ```

2. **Privy ID** (Fallback)
   ```
   /user/did:privy:abc123...
   ```

3. **Case-Insensitive Search**
   ```
   /user/CryptoKing → Finds "crypto-king"
   /user/John%20Doe → Finds "john-doe"
   ```

---

## How It Works

### URL Generation

When generating profile links (e.g., on leaderboard), the system:

1. **First:** Uses `username_slug` from database (if available)
2. **Second:** Generates slug from `display_name` on-the-fly
3. **Third:** Falls back to Privy ID

```typescript
import { getUserProfileUrl } from '@/lib/user-utils';

// Usage
const url = getUserProfileUrl(
  user.privy_user_id,      // Required
  user.display_name,        // Optional
  user.username_slug        // Optional (from DB)
);
// Returns: "/user/crypto-king" or "/user/did:privy:..."
```

### Lookup Strategy

When visiting `/user/[id]`, the system tries **5 lookup strategies**:

1. **Privy ID Match** (if starts with `did:privy:`)
2. **Username Slug Match** (exact, from `username_slug` column)
3. **Display Name Match** (case-insensitive)
4. **Slug Conversion** (e.g., "john-doe" → "John Doe")
5. **Partial Match** (fuzzy search)

This ensures maximum flexibility and backwards compatibility.

---

## Database Schema

### Optional Migration (Recommended)

Run [`supabase_user_slug_migration.sql`](supabase_user_slug_migration.sql) to add:

- `username_slug` column to `user_profiles` table
- Auto-generation trigger (updates slug when display name changes)
- Unique index for fast lookups
- Automatic conflict resolution (appends numbers if duplicate)

**Example:**
```sql
-- User 1 sets display_name = "John Doe"
-- username_slug automatically becomes "john-doe"

-- User 2 tries display_name = "John Doe"
-- username_slug automatically becomes "john-doe-1"
```

### Benefits of Migration

✅ **Faster lookups** (indexed column vs case-insensitive search)
✅ **Unique slugs** (prevents conflicts)
✅ **SEO-friendly** (clean URLs)
✅ **Auto-updates** (trigger keeps slugs in sync)

---

## API Endpoints

### `/api/user/lookup?identifier=...`

Flexible user lookup endpoint.

**Parameters:**
- `identifier`: Privy ID, display name, or username slug

**Examples:**
```bash
# By Privy ID
GET /api/user/lookup?identifier=did:privy:abc123

# By display name
GET /api/user/lookup?identifier=CryptoKing

# By slug
GET /api/user/lookup?identifier=crypto-king

# Case-insensitive
GET /api/user/lookup?identifier=CRYPTO-KING
```

**Response:**
```json
{
  "success": true,
  "profile": {
    "id": 1,
    "privy_user_id": "did:privy:abc123",
    "display_name": "CryptoKing",
    "username_slug": "crypto-king",
    "bio": "NFT collector",
    ...
  }
}
```

---

## Frontend Usage

### Generating Profile Links

```tsx
import { getUserProfileUrl } from '@/lib/user-utils';

// In components
<Link href={getUserProfileUrl(user.privy_user_id, user.display_name)}>
  View Profile
</Link>
```

### Slug Generation

```typescript
import { generateUserSlug } from '@/lib/user-utils';

// Examples
generateUserSlug("John Doe")        // "john-doe"
generateUserSlug("CryptoKing123")   // "cryptoking123"
generateUserSlug("María González")  // "maria-gonzalez"
generateUserSlug("User@#$%Name")    // "username"
```

---

## Backwards Compatibility

✅ **Existing Privy ID URLs still work**
✅ **No breaking changes** (old links remain valid)
✅ **Graceful fallbacks** (if display name not set, uses Privy ID)
✅ **Works without migration** (generates slugs on-the-fly)

---

## Testing

### Test URLs

1. **With display name:**
   ```
   http://localhost:3000/user/crypto-king
   ```

2. **Without display name (fallback):**
   ```
   http://localhost:3000/user/did:privy:abc123
   ```

3. **Case variations:**
   ```
   /user/CryptoKing
   /user/crypto-king
   /user/CRYPTO-KING
   ```

All should work and redirect to the same profile!

### Debug Logs

Check server logs for lookup process:
```
[User Lookup] Searching for: crypto-king
[User Lookup] Found by username_slug: crypto-king
```

---

## Migration Guide

### Step 1: Run SQL Migration (Optional but Recommended)

Run [`supabase_user_slug_migration.sql`](supabase_user_slug_migration.sql) in Supabase SQL Editor.

This adds:
- `username_slug` column
- Auto-generation trigger
- Unique index
- Backfills existing users

### Step 2: Update Links

Update existing profile links to use the helper function:

```tsx
// Before
<Link href={`/user/${user.privy_user_id}`}>Profile</Link>

// After
import { getUserProfileUrl } from '@/lib/user-utils';

<Link href={getUserProfileUrl(user.privy_user_id, user.display_name)}>
  Profile
</Link>
```

### Step 3: Test

1. Visit leaderboard
2. Click on user profiles
3. Verify URLs use display names (e.g., `/user/john-doe`)
4. Test with both old Privy ID URLs and new slug URLs

---

## Implementation Files

- **API Endpoint:** [`src/app/api/user/lookup/route.ts`](src/app/api/user/lookup/route.ts)
- **Page Route:** [`src/app/user/[id]/page.tsx`](src/app/user/[id]/page.tsx)
- **Utilities:** [`src/lib/user-utils.ts`](src/lib/user-utils.ts)
- **Migration:** [`supabase_user_slug_migration.sql`](supabase_user_slug_migration.sql)
- **Updated Components:**
  - [`src/app/leaderboard/page.tsx`](src/app/leaderboard/page.tsx)

---

## Examples

### Profile URL Evolution

| User State | URL Generated | Notes |
|------------|---------------|-------|
| No display name | `/user/did:privy:abc...` | Fallback to Privy ID |
| Display name set to "John Doe" | `/user/john-doe` | Auto-generated slug |
| With `username_slug` in DB | `/user/john-doe` | Fastest (indexed) |
| Display name "María González" | `/user/maria-gonzalez` | Accents removed |
| Display name "Crypto@King!123" | `/user/cryptoking123` | Special chars removed |

---

## Troubleshooting

### Issue: Profile not found

**Cause:** User might not have a profile in database yet.

**Solution:** Profile is auto-created when user logs in via Privy.

### Issue: Slug conflicts

**Cause:** Two users with same display name.

**Solution:** Database trigger automatically appends `-1`, `-2`, etc.

### Issue: Old Privy ID links broken

**Cause:** This shouldn't happen - all old links still work.

**Solution:** Check logs for lookup errors.

---

## Future Enhancements

- [ ] Custom username selection (let users choose their slug)
- [ ] Username validation (prevent profanity, reserved words)
- [ ] Redirect old URLs to new slug URLs (SEO)
- [ ] Username change history
- [ ] Vanity URLs for premium users

---

**Last Updated:** 2025-01-18
**Version:** 1.0.0
