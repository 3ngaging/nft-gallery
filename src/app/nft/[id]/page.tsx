import { getNFTByTokenId, getNFTWallets } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import NFTDetailClient from '@/components/NFTDetailClient';

type Props = {
  params: Promise<{ id: string }>;
};

// Generate metadata for better SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const tokenId = parseInt(id);

  if (isNaN(tokenId)) {
    return {
      title: 'NFT Not Found - Power Grinders',
      description: 'The requested NFT could not be found.'
    };
  }

  const nft = await getNFTByTokenId(tokenId);

  if (!nft) {
    return {
      title: 'NFT Not Found - Power Grinders',
      description: 'The requested NFT could not be found.'
    };
  }

  return {
    title: `${nft.name} - Power Grinders NFT Collection`,
    description: nft.description || `View ${nft.name} from the exclusive Power Grinders NFT collection. Part of 45 unique characters surviving the wasteland.`,
    openGraph: {
      title: `${nft.name} - Power Grinders`,
      description: nft.description || `View ${nft.name} from the Power Grinders NFT collection`,
      images: [
        {
          url: nft.image_url,
          width: 1000,
          height: 1000,
          alt: nft.name,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${nft.name} - Power Grinders`,
      description: nft.description || `View ${nft.name} from the Power Grinders NFT collection`,
      images: [nft.image_url],
    },
  };
}

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