/**
 * Security utilities for input validation and sanitization
 */

/**
 * Sanitize string input to prevent XSS attacks
 * Removes potentially dangerous characters and patterns
 */
export function sanitizeString(input: string | null | undefined): string {
  if (!input) return '';

  return String(input)
    .trim()
    // Remove null bytes
    .replace(/\0/g, '')
    // Remove control characters except newlines and tabs
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    // Remove potential script tags
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove potential event handlers
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    // Remove javascript: protocol
    .replace(/javascript:/gi, '');
}

/**
 * Validate and sanitize URL
 */
export function sanitizeUrl(url: string | null | undefined): string | null {
  if (!url) return null;

  const cleaned = sanitizeString(url);
  if (!cleaned) return null;

  try {
    const parsed = new URL(cleaned);

    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return null;
    }

    return parsed.toString();
  } catch {
    return null;
  }
}

/**
 * Validate Solana wallet address format
 */
export function isValidSolanaAddress(address: string): boolean {
  if (!address) return false;

  // Solana addresses are base58 encoded and typically 32-44 characters
  const base58Regex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
  return base58Regex.test(address);
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Validate username/display name
 */
export function isValidDisplayName(name: string): boolean {
  if (!name) return false;

  const trimmed = name.trim();

  // 2-30 characters, alphanumeric, spaces, underscores, hyphens
  const nameRegex = /^[a-zA-Z0-9 _-]{2,30}$/;
  return nameRegex.test(trimmed);
}

/**
 * Validate Twitter handle
 */
export function isValidTwitterHandle(handle: string): boolean {
  if (!handle) return false;

  const cleaned = handle.replace('@', '').trim();

  // 1-15 characters, alphanumeric and underscores
  const twitterRegex = /^[a-zA-Z0-9_]{1,15}$/;
  return twitterRegex.test(cleaned);
}

/**
 * Validate Discord username
 */
export function isValidDiscordUsername(username: string): boolean {
  if (!username) return false;

  const trimmed = username.trim();

  // 2-32 characters, most characters allowed except @ # : ``` and some others
  return trimmed.length >= 2 && trimmed.length <= 32 && !trimmed.match(/[@#:`]/);
}

/**
 * Validate Telegram username
 */
export function isValidTelegramUsername(username: string): boolean {
  if (!username) return false;

  const cleaned = username.replace('@', '').trim();

  // 5-32 characters, alphanumeric and underscores only, must not start with number
  const telegramRegex = /^[a-zA-Z][a-zA-Z0-9_]{4,31}$/;
  return telegramRegex.test(cleaned);
}

/**
 * Sanitize and validate bio text
 */
export function sanitizeBio(bio: string | null | undefined): string | null {
  if (!bio) return null;

  const cleaned = sanitizeString(bio);
  if (!cleaned) return null;

  // Max 500 characters
  if (cleaned.length > 500) {
    return cleaned.substring(0, 500);
  }

  return cleaned;
}

/**
 * Check if a string contains potential SQL injection patterns
 * This is a basic check - proper parameterized queries should always be used
 */
export function containsSQLInjection(input: string): boolean {
  const sqlPatterns = [
    /(\bUNION\b.*\bSELECT\b)/i,
    /(\bSELECT\b.*\bFROM\b)/i,
    /(\bINSERT\b.*\bINTO\b)/i,
    /(\bUPDATE\b.*\bSET\b)/i,
    /(\bDELETE\b.*\bFROM\b)/i,
    /(\bDROP\b.*\bTABLE\b)/i,
    /(\bEXEC\b|\bEXECUTE\b)/i,
    /(--|\/\*|\*\/|;)/,
  ];

  return sqlPatterns.some(pattern => pattern.test(input));
}

/**
 * Security headers for API responses
 */
export function getSecurityHeaders(): Record<string, string> {
  return {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  };
}

/**
 * Add security headers to a Response
 */
export function addSecurityHeaders(response: Response): Response {
  const headers = getSecurityHeaders();

  for (const [key, value] of Object.entries(headers)) {
    response.headers.set(key, value);
  }

  return response;
}
