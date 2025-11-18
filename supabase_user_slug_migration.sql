-- Migration: Add username_slug to user_profiles for SEO-friendly URLs
-- Run this SQL in your Supabase SQL editor

-- Add username_slug column
ALTER TABLE user_profiles
ADD COLUMN IF NOT EXISTS username_slug TEXT;

-- Create unique index on username_slug (allows NULL for users without display names)
CREATE UNIQUE INDEX IF NOT EXISTS idx_user_profiles_username_slug
ON user_profiles(username_slug)
WHERE username_slug IS NOT NULL;

-- Create function to generate slug from display name
CREATE OR REPLACE FUNCTION generate_username_slug(display_name TEXT)
RETURNS TEXT AS $$
BEGIN
  IF display_name IS NULL OR display_name = '' THEN
    RETURN NULL;
  END IF;

  RETURN lower(
    regexp_replace(
      regexp_replace(
        regexp_replace(
          trim(display_name),
          '[^a-zA-Z0-9\s-]', '', 'g'  -- Remove special chars
        ),
        '\s+', '-', 'g'  -- Replace spaces with hyphens
      ),
      '-+', '-', 'g'  -- Remove multiple consecutive hyphens
    )
  );
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Create trigger function to auto-generate slug on insert/update
CREATE OR REPLACE FUNCTION auto_generate_username_slug()
RETURNS TRIGGER AS $$
BEGIN
  -- Only generate slug if display_name is set
  IF NEW.display_name IS NOT NULL AND NEW.display_name != '' THEN
    NEW.username_slug := generate_username_slug(NEW.display_name);

    -- Handle slug conflicts by appending a number
    DECLARE
      base_slug TEXT := NEW.username_slug;
      counter INT := 1;
    BEGIN
      WHILE EXISTS (
        SELECT 1 FROM user_profiles
        WHERE username_slug = NEW.username_slug
        AND id != COALESCE(NEW.id, -1)
      ) LOOP
        NEW.username_slug := base_slug || '-' || counter;
        counter := counter + 1;
      END LOOP;
    END;
  ELSE
    NEW.username_slug := NULL;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
DROP TRIGGER IF EXISTS trigger_auto_generate_username_slug ON user_profiles;
CREATE TRIGGER trigger_auto_generate_username_slug
  BEFORE INSERT OR UPDATE OF display_name
  ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION auto_generate_username_slug();

-- Backfill existing records
UPDATE user_profiles
SET username_slug = generate_username_slug(display_name)
WHERE display_name IS NOT NULL AND display_name != '';

-- Add comments
COMMENT ON COLUMN user_profiles.username_slug IS 'SEO-friendly URL slug generated from display_name (e.g., "john-doe")';

-- Example usage:
-- SELECT * FROM user_profiles WHERE username_slug = 'crypto-king';
