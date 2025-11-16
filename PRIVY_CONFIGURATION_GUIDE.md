# Privy.io Configuration Guide

## Overview
This application uses **Privy.io** for authentication with:
- **Solana Wallets** (Phantom, Solflare, Backpack, etc.) - **ONLY blockchain supported**
- **Social OAuth**: Twitter, Discord, Google

## Configuration Summary

### 1. PrivyProvider Settings

Location: [`src/components/providers/PrivyProviderWrapper.tsx`](src/components/providers/PrivyProviderWrapper.tsx)

```typescript
{
  loginMethods: ['wallet', 'twitter', 'discord', 'google'],
  appearance: {
    theme: 'dark',
    accentColor: '#F2ECC8',
    logo: '/logo_no_background.svg',
    showWalletLoginFirst: true,
    walletChainType: 'solana-only', // Solo Solana, sin EVM
  },
  externalWallets: {
    solana: {
      connectors: solanaConnectors, // Phantom, Solflare, Backpack
    },
  },
}
```

### 2. Key Features

✅ **Solana-Only Blockchain**
- No Ethereum/EVM chains supported
- External Solana wallets only (no embedded wallets)
- Auto-connect disabled to prevent unwanted pop-ups

✅ **Social OAuth**
- Twitter
- Discord
- Google

✅ **Redirect Configuration**
- After login: `/profile`
- Terms: `/terms`
- Privacy: `/privacy`

## Required Privy Dashboard Configuration

### Step 1: Login Methods
Go to **Privy Dashboard** → **Login Methods** and enable:

1. **Wallets**
   - ✅ Enable "External Wallets"
   - ✅ Enable "Solana" chain
   - ❌ Disable "Ethereum" and all EVM chains
   - ❌ Disable "Embedded Wallets"

2. **Twitter OAuth**
   - ✅ Enable Twitter login
   - Add callback URL: `https://auth.privy.io/oauth/twitter/callback`
   - Configure Twitter Developer App with Privy callback

3. **Discord OAuth**
   - ✅ Enable Discord login
   - Add callback URL: `https://auth.privy.io/oauth/discord/callback`
   - Configure Discord Application with Privy callback

4. **Google OAuth**
   - ✅ Enable Google login
   - Add callback URL: `https://auth.privy.io/oauth/google/callback`
   - Configure Google Cloud Console OAuth with Privy callback

### Step 2: App Configuration
Go to **Settings** → **App Configuration**:

1. **Allowed Origins**
   - Development: `http://localhost:3000`
   - Production: Add your production domain (e.g., `https://yourdomain.com`)

2. **Privacy & Terms URLs**
   - Privacy Policy: `http://localhost:3000/privacy` (or production URL)
   - Terms of Service: `http://localhost:3000/terms` (or production URL)

### Step 3: Wallet Configuration
Go to **Wallets** → **Configuration**:

1. **Supported Chains**
   - ✅ Solana Mainnet Beta
   - ✅ Solana Devnet (for testing)
   - ❌ Disable all Ethereum/EVM chains

2. **Wallet Providers**
   - ✅ External wallets enabled
   - ❌ Embedded wallets disabled

## OAuth Provider Setup

### Twitter (X) Developer Setup

1. Go to [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
2. Create a new App (or use existing)
3. **App Settings**:
   - Callback URL: `https://auth.privy.io/oauth/twitter/callback`
   - Website URL: Your app URL
4. Enable **OAuth 2.0**
5. Copy **Client ID** and **Client Secret** to Privy Dashboard

### Discord Developer Setup

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new Application
3. **OAuth2** → **Redirects**:
   - Add: `https://auth.privy.io/oauth/discord/callback`
4. **OAuth2** → **Scopes**: Select `identify` and `email`
5. Copy **Client ID** and **Client Secret** to Privy Dashboard

### Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or use existing)
3. **APIs & Services** → **Credentials**
4. Create **OAuth 2.0 Client ID**:
   - Application type: Web application
   - Authorized redirect URIs: `https://auth.privy.io/oauth/google/callback`
5. Copy **Client ID** and **Client Secret** to Privy Dashboard

## Testing the Configuration

### 1. Start Development Server
```bash
npm run dev
```

### 2. Test Solana Wallet Connection
1. Navigate to `http://localhost:3000`
2. Click "Connect" button
3. Select a Solana wallet (Phantom, Solflare, etc.)
4. Approve connection in wallet
5. Should redirect to `/profile` after successful auth

### 3. Test Social OAuth
1. Navigate to `http://localhost:3000`
2. Click "Connect" button
3. Select Twitter/Discord/Google
4. Authorize the app
5. Should redirect to `/profile` after successful auth

## Troubleshooting

### Issue: "Wallet not connecting"
- Check that Solana wallet extension is installed (Phantom, Solflare)
- Verify `walletChainType: 'solana-only'` is set
- Ensure no EVM chains are enabled in Dashboard

### Issue: "OAuth redirect error"
- Verify callback URLs in provider dashboards match Privy's callback
- Check that OAuth providers are enabled in Privy Dashboard
- Ensure `NEXT_PUBLIC_PRIVY_APP_ID` is set in `.env.local`

### Issue: "Embedded wallet popup showing"
- This should NOT happen with current config
- Verify `createOnLogin` is set to `'off'` or remove it entirely
- Check that only external wallets are enabled

### Issue: "Redirect not working after login"
- Check that `/profile` page exists
- Verify the user is authenticated after login
- Check browser console for errors

## Required Dependencies

The following packages are required for Solana integration:

```json
{
  "@privy-io/react-auth": "^3.7.0",
  "@solana/kit": "^5.0.0",
  "@solana-program/memo": "^0.10.0",
  "@solana-program/system": "^0.10.0",
  "@solana-program/token": "^0.8.0",
  "@scure/base": "^2.0.0"
}
```

**Note**: If you encounter peer dependency conflicts, install with:
```bash
npm install --legacy-peer-deps
```

## Environment Variables

Required in `.env.local`:

```bash
# Privy.io
NEXT_PUBLIC_PRIVY_APP_ID=cmc812f4e001yk20lr25u7i9b
PRIVY_APP_SECRET=your_privy_app_secret

# App URL (for redirects and legal links)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Next Steps

1. ✅ Configure OAuth providers in their respective developer portals
2. ✅ Enable login methods in Privy Dashboard
3. ✅ Set allowed origins in Privy Dashboard
4. ✅ Test all authentication flows (wallet + social)
5. ✅ Update production URLs before deployment

## Resources

- [Privy Documentation](https://docs.privy.io/)
- [Privy Dashboard](https://dashboard.privy.io/)
- [Solana Wallet Adapter](https://github.com/solana-labs/wallet-adapter)
- [Twitter Developer Portal](https://developer.twitter.com/)
- [Discord Developer Portal](https://discord.com/developers)
- [Google Cloud Console](https://console.cloud.google.com/)

---

**Last Updated**: 2025-11-16
**Privy SDK Version**: @privy-io/react-auth@3.7.0
