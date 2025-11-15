import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos TypeScript
export type NFT = {
  id: number;
  token_id: number;
  name: string;
  description: string;
  image_url: string;
  thumbnail_url: string | null;
  traits: any;
  created_at: string;
};

export type NFTWallet = {
  id: number;
  nft_id: number;
  wallet_address: string;
  connected_at: string;
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
  const { data, error } = await supabase
    .from('nft_wallets')
    .select('*')
    .eq('nft_id', nftId);
  
  if (error) {
    console.error('Error fetching wallets:', error);
    return [];
  }
  
  return data || [];
}