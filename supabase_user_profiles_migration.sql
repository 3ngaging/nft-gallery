-- Migration: Create user_profiles table for custom display names
-- Run this SQL in your Supabase SQL editor

-- Create the user_profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id BIGSERIAL PRIMARY KEY,
  privy_user_id TEXT UNIQUE NOT NULL,
  display_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster lookups by privy_user_id
CREATE INDEX IF NOT EXISTS idx_user_profiles_privy_id ON user_profiles(privy_user_id);

-- Add a comment to the table
COMMENT ON TABLE user_profiles IS 'Stores custom display names for users authenticated via Privy';

-- Add comments to columns
COMMENT ON COLUMN user_profiles.privy_user_id IS 'Privy user ID (e.g., did:privy:...)';
COMMENT ON COLUMN user_profiles.display_name IS 'Custom display name chosen by the user (2-30 characters)';

-- Enable Row Level Security (RLS)
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Create policy: Users can read all profiles (for displaying names)
CREATE POLICY "Allow public read access to user profiles"
  ON user_profiles
  FOR SELECT
  USING (true);

-- Create policy: Users can insert/update their own profile
-- Note: Since we're using Privy, we don't have built-in auth.uid()
-- So we'll allow all inserts/updates and rely on the API to validate ownership
CREATE POLICY "Allow insert for all users"
  ON user_profiles
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow update for all users"
  ON user_profiles
  FOR UPDATE
  USING (true);

-- Optional: Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_user_profiles_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to call the function before updates
CREATE TRIGGER trigger_update_user_profiles_updated_at
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_user_profiles_updated_at();
