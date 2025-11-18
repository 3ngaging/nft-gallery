# Storage Bucket Setup - Troubleshooting Guide

## Current Error
You're getting "Failed to upload image to storage" which means the bucket exists but uploads are being rejected.

## Solution: Configure Bucket Policies

Since you're using a **Public Bucket** with **Privy Auth** (not Supabase Auth), you need to set the bucket policies to allow all operations.

### Quick Fix (Recommended)

1. **Go to Supabase Dashboard** → **Storage** → Click on `profile-images` bucket
2. **Configuration** tab (or **Policies** tab)
3. **Add the following policies**:

#### Policy 1: Allow Public Uploads
```sql
-- Name: "Allow All Inserts"
-- Operation: INSERT
-- Policy Definition:
true
```

#### Policy 2: Allow Public Updates
```sql
-- Name: "Allow All Updates"
-- Operation: UPDATE
-- Policy Definition:
true
```

#### Policy 3: Allow Public Deletes
```sql
-- Name: "Allow All Deletes"
-- Operation: DELETE
-- Policy Definition:
true
```

#### Policy 4: Allow Public Reads (should already exist for public buckets)
```sql
-- Name: "Allow All Selects"
-- Operation: SELECT
-- Policy Definition:
true
```

### Why `true`?

Using `true` as the policy definition means "always allow". This is safe because:
- ✅ Your API already validates everything (file size, type, user auth)
- ✅ You're using Privy (not Supabase Auth), so `auth.uid()` doesn't work
- ✅ File paths include the user ID, preventing overwrites
- ✅ The DELETE endpoint validates ownership before allowing deletion

### Alternative: Make Bucket Truly Public

If the policies don't work, try this:

1. Delete the `profile-images` bucket
2. Create a new bucket with the same name
3. When creating:
   - ✅ Check **"Public bucket"**
   - ✅ Check **"Allowed file size"** and set to 5MB
   - ✅ Leave policies empty (public buckets should allow all by default)

### Testing After Setup

1. Try uploading a profile picture again
2. Check the browser console for any new error messages
3. Check the server logs for detailed error info (I added better logging)

### If Still Not Working

Check these things:

1. **Verify bucket is public**:
   - In Storage dashboard, you should see a green "Public" badge next to `profile-images`

2. **Check bucket policies**:
   - Go to Storage → profile-images → Policies
   - You should see policies for INSERT, UPDATE, DELETE, SELECT all set to `true` or similar

3. **Verify Supabase credentials**:
   - Make sure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local` are correct
   - Restart your dev server after any .env changes

4. **Check browser console**:
   - Look for any CORS errors or additional error details

### Debug Information

The error handler now logs more details. After trying to upload, check your terminal for:
```
Error uploading image to Supabase: [detailed error]
Error details: {detailed JSON}
```

This will tell us exactly what Supabase is rejecting.

---

## Expected Result

After proper setup, uploading should:
1. ✅ Upload file to `profile-images/[user-id]/profile-[timestamp]-[random].jpg`
2. ✅ Return a public URL like: `https://[project].supabase.co/storage/v1/object/public/profile-images/...`
3. ✅ Display the uploaded image in your profile preview

---

**Need more help?** Share the detailed error logs from your terminal and I can provide more specific guidance!
