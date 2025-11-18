/**
 * User utility functions for profile URL generation and lookup
 */

/**
 * Generate a URL-friendly slug from a display name
 * Examples:
 * - "John Doe" -> "john-doe"
 * - "CryptoKing123" -> "cryptoking123"
 * - "María González" -> "maria-gonzalez"
 */
export function generateUserSlug(displayName: string | null | undefined): string {
  if (!displayName) return '';

  return displayName
    .toLowerCase()
    .trim()
    // Replace spaces with hyphens
    .replace(/\s+/g, '-')
    // Remove accents/diacritics
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    // Remove special characters (keep letters, numbers, hyphens)
    .replace(/[^a-z0-9-]/g, '')
    // Remove multiple consecutive hyphens
    .replace(/-+/g, '-')
    // Remove leading/trailing hyphens
    .replace(/^-|-$/g, '');
}

/**
 * Generate the best user profile URL
 * Prefers username_slug from DB, falls back to generated slug, then Privy ID
 */
export function getUserProfileUrl(
  privyUserId: string,
  displayName: string | null | undefined,
  usernameSlug?: string | null
): string {
  // First preference: Use database-stored username_slug (most reliable)
  if (usernameSlug && usernameSlug.length >= 2) {
    return `/user/${usernameSlug}`;
  }

  // Second preference: Generate slug from display name
  const slug = generateUserSlug(displayName);
  if (slug && slug.length >= 2) {
    return `/user/${slug}`;
  }

  // Fallback: Use Privy ID
  return `/user/${privyUserId}`;
}

/**
 * Get a user-friendly identifier from profile data
 * For display purposes
 */
export function getUserDisplayIdentifier(
  privyUserId: string,
  displayName: string | null | undefined
): string {
  return displayName || `User ${privyUserId.slice(0, 8)}`;
}

/**
 * Check if an identifier looks like a Privy ID
 */
export function isPrivyId(identifier: string): boolean {
  return identifier.startsWith('did:privy:');
}
