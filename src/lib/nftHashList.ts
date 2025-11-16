/**
 * NFT Hash List Utility
 * Manages the collection hash list and provides NFT numbering (#1, #2, etc.)
 * The order in the hash list determines the NFT number
 */

import hashList from '../../public/_hash.json';

export interface NFTWithNumber {
  mintAddress: string;
  number: number; // Position in collection (#1, #2, etc.)
}

/**
 * Get the complete NFT hash list
 */
export function getNFTHashList(): string[] {
  return hashList as string[];
}

/**
 * Get total supply (count of NFTs in hash list)
 */
export function getTotalSupply(): number {
  return hashList.length;
}

/**
 * Get NFT number by mint address
 * Returns the # position (1-indexed) or null if not found
 */
export function getNFTNumber(mintAddress: string): number | null {
  const index = hashList.findIndex(
    (hash) => hash.toLowerCase() === mintAddress.toLowerCase()
  );
  return index >= 0 ? index + 1 : null;
}

/**
 * Get mint address by NFT number
 * Returns the mint address or null if number is out of range
 */
export function getMintAddressByNumber(number: number): string | null {
  const index = number - 1; // Convert from 1-indexed to 0-indexed
  return index >= 0 && index < hashList.length ? hashList[index] : null;
}

/**
 * Get all NFTs with their numbers
 */
export function getAllNFTsWithNumbers(): NFTWithNumber[] {
  return hashList.map((mintAddress, index) => ({
    mintAddress,
    number: index + 1,
  }));
}

/**
 * Check if a mint address exists in the collection
 */
export function isValidMintAddress(mintAddress: string): boolean {
  return hashList.some(
    (hash) => hash.toLowerCase() === mintAddress.toLowerCase()
  );
}

/**
 * Get paginated NFT list
 */
export function getPaginatedNFTs(
  page: number = 1,
  pageSize: number = 12
): NFTWithNumber[] {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return hashList
    .slice(startIndex, endIndex)
    .map((mintAddress, relativeIndex) => ({
      mintAddress,
      number: startIndex + relativeIndex + 1,
    }));
}

/**
 * Get total number of pages for pagination
 */
export function getTotalPages(pageSize: number = 12): number {
  return Math.ceil(hashList.length / pageSize);
}
