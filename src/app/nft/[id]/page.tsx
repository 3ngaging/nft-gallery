import { getNFTByTokenId, getNFTWallets } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import NFTDetailClient from '@/components/NFTDetailClient';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NFTDetailPage({ params }: Props) {
  const { id } = await params;
  const tokenId = parseInt(id);

  if (isNaN(tokenId)) {
    notFound();
  }

  const nft = await getNFTByTokenId(tokenId);

  if (!nft) {
    notFound();
  }

  const wallets = await getNFTWallets(nft.id);

  return <NFTDetailClient nft={nft} wallets={wallets} />;
}