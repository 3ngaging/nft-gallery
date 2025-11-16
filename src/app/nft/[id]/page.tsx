import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import NFTDetailClient from '@/components/NFTDetailClient';
import { matricaNFTClient } from '@/lib/matrica-nft-client';
import { isValidMintAddress, getNFTNumber, getTotalSupply } from '@/lib/nftHashList';

type Props = {
  params: Promise<{ id: string }>;
};

// Generate metadata for better SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id: mintAddress } = await params;

  // Validate mint address
  if (!isValidMintAddress(mintAddress)) {
    return {
      title: 'NFT Not Found - Power Grinders',
      description: 'The requested NFT could not be found.'
    };
  }

  try {
    const nft = await matricaNFTClient.getNFT(mintAddress);
    const nftNumber = getNFTNumber(mintAddress);
    const totalSupply = getTotalSupply();

    return {
      title: `${nft.name} #${nftNumber} - Power Grinders NFT Collection`,
      description: `View ${nft.name}, NFT #${nftNumber} of ${totalSupply} from the exclusive Power Grinders NFT collection.`,
      openGraph: {
        title: `${nft.name} #${nftNumber} - Power Grinders`,
        description: `NFT #${nftNumber} of ${totalSupply} - ${nft.name}`,
        images: [
          {
            url: nft.url, // Matrica CDN optimized image
            width: 1000,
            height: 1000,
            alt: nft.name,
          },
        ],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${nft.name} #${nftNumber} - Power Grinders`,
        description: `NFT #${nftNumber} of ${totalSupply}`,
        images: [nft.url],
      },
    };
  } catch (error) {
    console.error('Error fetching NFT metadata:', error);
    return {
      title: 'NFT Not Found - Power Grinders',
      description: 'The requested NFT could not be found.'
    };
  }
}

export default async function NFTDetailPage({ params }: Props) {
  const { id: mintAddress } = await params;

  // Validate mint address exists in our collection
  if (!isValidMintAddress(mintAddress)) {
    notFound();
  }

  // Fetch NFT data from Matrica API
  let nftData;
  let nftNumber;

  try {
    nftData = await matricaNFTClient.getNFT(mintAddress);
    nftNumber = getNFTNumber(mintAddress);
  } catch (error) {
    console.error('Error fetching NFT:', error);
    notFound();
  }

  if (!nftData || !nftNumber) {
    notFound();
  }

  // Parse to our format with number
  const nft = {
    mintAddress: nftData.id,
    number: nftNumber,
    name: nftData.name,
    image: nftData.image,
    cdnImage: nftData.url,
    owner: nftData.owner.id,
    status: nftData.status,
    collection: {
      id: nftData.collection.id,
      name: nftData.collection.name,
      communityId: nftData.collection.community.id,
      communityName: nftData.collection.community.name,
    },
    isMutable: nftData.isMutable,
  };

  return <NFTDetailClient nft={nft} />;
}