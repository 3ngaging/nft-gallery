/**
 * Simple in-memory rate limiter
 * For production, consider using Redis or a proper rate limiting service
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap.entries()) {
    if (entry.resetAt < now) {
      rateLimitMap.delete(key);
    }
  }
}, 5 * 60 * 1000);

export interface RateLimitOptions {
  /** Maximum number of requests allowed within the window */
  maxRequests: number;
  /** Time window in milliseconds */
  windowMs: number;
  /** Identifier for the rate limit (defaults to IP) */
  identifier?: string;
}

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetAt: number;
}

/**
 * Check if a request should be rate limited
 * @param identifier - Unique identifier (e.g., IP address, user ID)
 * @param options - Rate limit configuration
 */
export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions
): RateLimitResult {
  const { maxRequests, windowMs } = options;
  const now = Date.now();
  const key = identifier;

  const entry = rateLimitMap.get(key);

  if (!entry || entry.resetAt < now) {
    // First request or window expired
    const resetAt = now + windowMs;
    rateLimitMap.set(key, { count: 1, resetAt });
    return {
      success: true,
      remaining: maxRequests - 1,
      resetAt,
    };
  }

  if (entry.count >= maxRequests) {
    // Rate limit exceeded
    return {
      success: false,
      remaining: 0,
      resetAt: entry.resetAt,
    };
  }

  // Increment count
  entry.count++;
  return {
    success: true,
    remaining: maxRequests - entry.count,
    resetAt: entry.resetAt,
  };
}

/**
 * Get client identifier from request (IP address)
 */
export function getClientIdentifier(request: Request): string {
  // Try to get real IP from headers (for proxied requests)
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');

  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  if (realIp) {
    return realIp;
  }

  // Fallback to a generic identifier
  return 'unknown';
}

/**
 * Rate limit middleware for API routes
 */
export function withRateLimit(
  handler: (request: Request) => Promise<Response>,
  options: RateLimitOptions
) {
  return async (request: Request): Promise<Response> => {
    const identifier = options.identifier || getClientIdentifier(request);
    const result = checkRateLimit(identifier, options);

    if (!result.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Rate limit exceeded. Please try again later.',
          resetAt: new Date(result.resetAt).toISOString(),
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': String(options.maxRequests),
            'X-RateLimit-Remaining': String(result.remaining),
            'X-RateLimit-Reset': String(result.resetAt),
            'Retry-After': String(Math.ceil((result.resetAt - Date.now()) / 1000)),
          },
        }
      );
    }

    const response = await handler(request);

    // Add rate limit headers to successful responses
    response.headers.set('X-RateLimit-Limit', String(options.maxRequests));
    response.headers.set('X-RateLimit-Remaining', String(result.remaining));
    response.headers.set('X-RateLimit-Reset', String(result.resetAt));

    return response;
  };
}
