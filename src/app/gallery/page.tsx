'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Grid3x3, LayoutGrid, List } from 'lucide-react';
import NFTCard from '@/components/NFTCard';
import StickerSystem from '@/components/StickerSystem';
import { supabase, type NFT } from '@/lib/supabase';
import { useLanguage } from '@/lib/LanguageContext';

export default function GalleryPage() {
  const { t } = useLanguage();
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [filteredNfts, setFilteredNfts] = useState<NFT[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [gridSize, setGridSize] = useState<3 | 4 | 5>(4);

  // Cargar NFTs
  useEffect(() => {
    loadNFTs();
  }, []);

  // Filtrar por búsqueda
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredNfts(nfts);
      return;
    }

    const search = searchTerm.toLowerCase();
    const result = nfts.filter(nft =>
      nft.name.toLowerCase().includes(search) ||
      nft.description?.toLowerCase().includes(search) ||
      nft.token_id.toString().includes(search)
    );

    setFilteredNfts(result);
  }, [searchTerm, nfts]);

  async function loadNFTs() {
    setLoading(true);
    const { data, error } = await supabase
      .from('nfts')
      .select('*')
      .order('token_id', { ascending: true });

    if (!error && data) {
      setNfts(data);
      setFilteredNfts(data);
    }
    setLoading(false);
  }

  const gridClasses = {
    3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
  };

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
          <div className="bg-[#86C520]/20 backdrop-blur-sm px-4 py-2 inline-block mb-4 border border-[#86C520]/30">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">NFT Gallery</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-3 text-white">
            Full <span className="gradient-text-primary">Collection</span>
          </h1>
          <p className="text-lg text-gray-400">
            {filteredNfts.length} {filteredNfts.length === 1 ? 'NFT' : 'NFTs'}
            {nfts.length !== filteredNfts.length && ` of ${nfts.length} total`}
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

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin h-10 w-10 border-t-2 border-b-2 border-accent"></div>
            <p className="text-gray-400 mt-4">{t.gallery.loading}</p>
          </div>
        )}

        {/* No Results */}
        {!loading && filteredNfts.length === 0 && searchTerm && (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2 text-white">{t.gallery.noResults}</h3>
            <p className="text-gray-400 mb-6">
              {t.gallery.noResultsDesc} "{searchTerm}"
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="bg-accent hover:bg-accent/90 text-primary-dark px-6 py-3 font-semibold transition shadow-[0_3px_0_0_#75ad1b] hover:shadow-[0_1px_0_0_#75ad1b] hover:translate-y-[2px]"
            >
              {t.gallery.clearSearch}
            </button>
          </div>
        )}

        {/* Grid de NFTs */}
        {!loading && filteredNfts.length > 0 && (
          <div className={`grid ${gridClasses[gridSize]} gap-6`}>
            {filteredNfts.map((nft) => (
              <NFTCard key={nft.id} nft={nft} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
