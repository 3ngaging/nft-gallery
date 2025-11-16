import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Global middleware for security headers and request validation
 */
export function middleware(_request: NextRequest) {
  // Create response
  const response = NextResponse.next();

  // Add security headers to all responses
  const headers = {
    // Prevent MIME type sniffing
    'X-Content-Type-Options': 'nosniff',

    // Prevent clickjacking
    'X-Frame-Options': 'DENY',

    // Enable XSS filter
    'X-XSS-Protection': '1; mode=block',

    // Referrer policy
    'Referrer-Policy': 'strict-origin-when-cross-origin',

    // Permissions policy
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',

    // Content Security Policy
    // Note: Privy requires 'unsafe-eval' and 'unsafe-inline' for authentication
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://auth.privy.io https://api.privy.io https://api.matrica.io https://*.walletconnect.com https://*.walletconnect.org",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: blob:",
      "font-src 'self' data:",
      "connect-src 'self' https://auth.privy.io https://api.privy.io https://api.matrica.io https://*.supabase.co wss://*.supabase.co https://*.walletconnect.com https://*.walletconnect.org wss://*.walletconnect.com wss://*.walletconnect.org https://rpc.ankr.com https://*.helius-rpc.com",
      "frame-src 'self' https://auth.privy.io https://verify.walletconnect.com https://verify.walletconnect.org",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join('; '),

    // Strict Transport Security (HSTS)
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  };

  // Apply headers
  Object.entries(headers).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

/**
 * Configure which routes the middleware applies to
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
