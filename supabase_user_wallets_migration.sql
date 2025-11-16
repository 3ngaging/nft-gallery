-- Migration: Create user_wallets table to track wallet ownership
-- Run this SQL in your Supabase SQL editor

-- Create user_wallets table
CREATE TABLE IF NOT EXISTS user_wallets (
  id BIGSERIAL PRIMARY KEY,
  privy_user_id TEXT NOT NULL,
  wallet_address TEXT NOT NULL,
  chain_type TEXT DEFAULT 'solana',
  connected_at TIMESTAMPTZ DEFAULT NOW(),
  last_synced_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(privy_user_id, wallet_address)
);

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_user_wallets_privy_user_id ON user_wallets(privy_user_id);
CREATE INDEX IF NOT EXISTS idx_user_wallets_wallet_address ON user_wallets(wallet_address);

-- Add comments
COMMENT ON TABLE user_wallets IS 'Tracks which Solana wallets are connected to each user';
COMMENT ON COLUMN user_wallets.privy_user_id IS 'Privy user ID (did:privy:...)';
COMMENT ON COLUMN user_wallets.wallet_address IS 'Solana wallet address';
COMMENT ON COLUMN user_wallets.chain_type IS 'Blockchain type (solana, ethereum, etc.)';
COMMENT ON COLUMN user_wallets.connected_at IS 'When wallet was first connected';
COMMENT ON COLUMN user_wallets.last_synced_at IS 'Last time wallet data was synced';
