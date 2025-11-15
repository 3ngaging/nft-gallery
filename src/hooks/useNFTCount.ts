import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export function useNFTCount() {
  const [count, setCount] = useState<number>(45); // Default fallback
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchCount() {
      try {
        const { count: nftCount, error } = await supabase
          .from('nfts')
          .select('*', { count: 'exact', head: true });

        if (!cancelled && !error && nftCount !== null) {
          setCount(nftCount);
        }
      } catch (err) {
        console.error('Error fetching NFT count:', err);
        // Keep default fallback of 45
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchCount();

    return () => {
      cancelled = true;
    };
  }, []);

  return { count, loading };
}
