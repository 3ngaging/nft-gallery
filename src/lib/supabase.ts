import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Some features may not work.');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
);

// Tipos TypeScript
export type NFT = {
  id: number;
  token_id: number;
  name: string;
  description: string;
  image_url: string;
  thumbnail_url: string | null;
  traits: Record<string, unknown> | null;
  created_at: string;
};

export type NFTWallet = {
  id: number;
  nft_id: number;
  wallet_address: string;
  connected_at: string;
};

export type UserProfile = {
  id: number;
  privy_user_id: string; // Privy's user.id (e.g., "did:privy:...")
  display_name: string | null;
  created_at: string;
  updated_at: string;
};

// Funciones helper para NFTs
export async function getAllNFTs(): Promise<NFT[]> {
  const { data, error } = await supabase
    .from('nfts')
    .select('*')
    .order('token_id', { ascending: true });
  
  if (error) {
    console.error('Error fetching NFTs:', error);
    return [];
  }
  
  return data || [];
}

// CAMBIADO: Ahora busca por token_id en lugar de id
export async function getNFTByTokenId(tokenId: number): Promise<NFT | null> {
  const { data, error } = await supabase
    .from('nfts')
    .select('*')
    .eq('token_id', tokenId)
    .single();
  
  if (error) {
    console.error('Error fetching NFT:', error);
    return null;
  }
  
  return data;
}

// Mantener esta función también por si la necesitas
export async function getNFTById(id: number): Promise<NFT | null> {
  const { data, error } = await supabase
    .from('nfts')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching NFT:', error);
    return null;
  }
  
  return data;
}

export async function getNFTWallets(nftId: number): Promise<NFTWallet[]> {
  const { data, error} = await supabase
    .from('nft_wallets')
    .select('*')
    .eq('nft_id', nftId);

  if (error) {
    console.error('Error fetching wallets:', error);
    return [];
  }

  return data || [];
}

// User Profile Functions
export async function getUserProfile(privyUserId: string): Promise<UserProfile | null> {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('privy_user_id', privyUserId)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      // No profile found - this is okay
      return null;
    }
    console.error('Error fetching user profile:', error);
    return null;
  }

  return data;
}

export async function createOrUpdateUserProfile(
  privyUserId: string,
  displayName: string
): Promise<UserProfile | null> {
  const { data, error } = await supabase
    .from('user_profiles')
    .upsert(
      {
        privy_user_id: privyUserId,
        display_name: displayName,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: 'privy_user_id',
      }
    )
    .select()
    .single();

  if (error) {
    console.error('Error upserting user profile:', error);
    return null;
  }

  return data;
}