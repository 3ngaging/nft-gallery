'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { NFT } from '@/lib/supabase';
import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

type NFTCardProps = {
  nft: NFT;
};

export default function NFTCard({ nft }: NFTCardProps) {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link href={`/nft/${nft.token_id}`}>
      <motion.div
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-accent/10 hover:border-accent/30 transition-all cursor-pointer group shadow-lg hover:shadow-[0_0_25px_rgba(134,197,32,0.3)]"
      >
        <div className="relative aspect-square bg-black border-b border-white/10">
          {/* Loading skeleton */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-black to-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-accent/30 border-t-accent animate-spin"></div>
              </div>
            </div>
          )}

          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center text-gray-600">
              <div className="text-center">
                <div className="text-4xl mb-2">🖼️</div>
                <p className="text-sm">{t.nft.imageNotAvailable}</p>
              </div>
            </div>
          ) : (
            <Image
              src={nft.thumbnail_url || nft.image_url}
              alt={nft.name}
              fill
              className={`object-cover transition-all duration-300 group-hover:scale-[1.02] ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzAwMDAwMCIvPjwvc3ZnPg=="
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          )}

          <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm border border-accent/40 px-2.5 py-1 text-xs font-bold text-accent shadow-lg">
            #{nft.token_id.toString().padStart(2, '0')}
          </div>
        </div>

        <div className="p-4 bg-black/30 backdrop-blur-sm">
          <h3 className="text-sm font-bold text-white mb-1 group-hover:text-accent transition">{nft.name}</h3>
          <p className="text-gray-500 text-xs line-clamp-2 uppercase tracking-wider">
            {nft.description || t.nft.noDescription}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
