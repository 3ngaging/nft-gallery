'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Grid3x3, LayoutGrid, List } from 'lucide-react';
import NFTCard from '@/components/NFTCard';
import StickerSystem from '@/components/StickerSystem';
import LoadingScreen from '@/components/LoadingScreen';
import { useLanguage } from '@/lib/LanguageContext';
import type { NFTWithOwner } from '@/lib/matrica-nft-client';

// Grid classes constant - moved outside component for better performance
const GRID_CLASSES = {
  3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  5: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
} as const;

export default function GalleryPage() {
  const { t } = useLanguage();
  const [nfts, setNfts] = useState<NFTWithOwner[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [gridSize, setGridSize] = useState<3 | 4 | 5>(4);
  const [error, setError] = useState<string | null>(null);

  // Load NFTs from blockchain via API
  useEffect(() => {
    let cancelled = false;

    async function fetchNFTs() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/nfts');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || t.galleryErrors.failedToFetch);
        }

        if (!cancelled && data.success) {
          setNfts(data.nfts);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : t.galleryErrors.unknown);
          console.error('Error fetching NFTs:', err);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchNFTs();
    return () => {
      cancelled = true;
    };
  }, []);

  // Use useMemo for derived state instead of useEffect + setState
  const filteredNfts = useMemo(() => {
    if (!searchTerm.trim()) {
      return nfts;
    }

    const search = searchTerm.toLowerCase();
    return nfts.filter(nft =>
      nft.name.toLowerCase().includes(search) ||
      nft.collection.name.toLowerCase().includes(search) ||
      nft.mintAddress.toLowerCase().includes(search) ||
      nft.owner.toLowerCase().includes(search)
    );
  }, [searchTerm, nfts]);

  // Show full-screen loading only on initial load
  if (loading && nfts.length === 0) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen py-20 px-4 bg-black relative">
      <StickerSystem />

      {/* Background glow effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="bg-[#F2ECC8]/20 backdrop-blur-sm px-4 py-2 inline-block mb-4 border border-[#F2ECC8]/30">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">{t.gallery.title}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-3 text-white">
            {t.gallery.fullCollection.split(' ')[0]} <span className="gradient-text-primary">{t.gallery.fullCollection.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-lg text-gray-400">
            {filteredNfts.length} {filteredNfts.length === 1 ? t.gallery.nftSingular : t.gallery.nftPlural}
            {nfts.length !== filteredNfts.length && ` ${t.gallery.of} ${nfts.length} ${t.gallery.total}`}
          </p>
        </motion.div>

        {/* Search and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 mb-10 shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 w-full relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-accent" size={18} />
              <input
                type="text"
                placeholder={t.gallery.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/30 border border-white/10 pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:bg-black/50 transition"
              />
            </div>

            {/* Grid Size Selector */}
            <div className="flex gap-2 bg-black/40 p-1 border border-white/10">
              <button
                onClick={() => setGridSize(3)}
                className={`p-2 transition ${
                  gridSize === 3 ? 'bg-accent/20 text-accent border border-accent/40' : 'text-gray-500 hover:text-accent hover:bg-white/5'
                }`}
                title={t.gallery.gridLarge}
              >
                <Grid3x3 size={18} />
              </button>
              <button
                onClick={() => setGridSize(4)}
                className={`p-2 transition ${
                  gridSize === 4 ? 'bg-accent/20 text-accent border border-accent/40' : 'text-gray-500 hover:text-accent hover:bg-white/5'
                }`}
                title={t.gallery.gridMedium}
              >
                <LayoutGrid size={18} />
              </button>
              <button
                onClick={() => setGridSize(5)}
                className={`p-2 transition ${
                  gridSize === 5 ? 'bg-accent/20 text-accent border border-accent/40' : 'text-gray-500 hover:text-accent hover:bg-white/5'
                }`}
                title={t.gallery.gridCompact}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">⚠️</div>
            <h3 className="text-2xl font-bold mb-2 text-white">{t.galleryErrors.errorHeading}</h3>
            <p className="text-gray-400 mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-accent hover:bg-accent/90 text-primary-dark px-6 py-3 font-semibold transition shadow-[0_3px_0_0_#aca686] hover:shadow-[0_1px_0_0_#aca686] hover:translate-y-[2px]"
            >
              {t.galleryErrors.retryButton}
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && !error && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin h-10 w-10 border-t-2 border-b-2 border-[#F2ECC8]"></div>
            <p className="text-gray-400 mt-4">{t.gallery.loading}</p>
          </div>
        )}

        {/* No Results */}
        {!loading && filteredNfts.length === 0 && searchTerm && (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2 text-white">{t.gallery.noResults}</h3>
            <p className="text-gray-400 mb-6">
              {t.gallery.noResultsDesc} &quot;{searchTerm}&quot;
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="bg-accent hover:bg-accent/90 text-primary-dark px-6 py-3 font-semibold transition shadow-[0_3px_0_0_#aca686] hover:shadow-[0_1px_0_0_#aca686] hover:translate-y-[2px]"
            >
              {t.gallery.clearSearch}
            </button>
          </div>
        )}

        {/* Grid de NFTs */}
        {!loading && filteredNfts.length > 0 && (
          <div className={`grid ${GRID_CLASSES[gridSize]} gap-6`}>
            {filteredNfts.map((nft) => (
              <NFTCard key={nft.mintAddress} nft={nft} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
