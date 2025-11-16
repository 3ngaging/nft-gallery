import { getTotalSupply } from '@/lib/nftHashList';
import { useMemo } from 'react';

/**
 * Hook to get the total NFT count from hash list
 * Now returns the dynamic count from _hash.json
 */
export function useNFTCount() {
  // Get count directly from hash list - no async needed
  const count = useMemo(() => getTotalSupply(), []);
  const loading = false; // No loading state needed since it's synchronous

  return { count, loading };
}
