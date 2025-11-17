'use client';

import { useState, useMemo } from 'react';
import {
  useSignMessage as useSignMessageSolana,
  useSignTransaction as useSignTransactionSolana,
  useWallets,
} from '@privy-io/react-auth/solana';
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import Section from '../reusables/section';
import { showSuccessToast, showErrorToast } from '@/components/ui/custom-toast';

const WalletActions = () => {
  const { signMessage: signMessageSolana } = useSignMessageSolana();
  const { signTransaction: signTransactionSolana } = useSignTransactionSolana();
  const { wallets } = useWallets();

  const [selectedWalletAddress, setSelectedWalletAddress] = useState<string | null>(null);

  // Derive selected wallet from address
  const selectedWallet = useMemo(() => {
    if (selectedWalletAddress) {
      const wallet = wallets.find(w => w.address === selectedWalletAddress);
      if (wallet) return wallet;
    }
    // Default to first wallet if no selection or selection not found
    return wallets.length > 0 ? wallets[0] : null;
  }, [wallets, selectedWalletAddress]);

  const handleSignMessage = async () => {
    if (!selectedWallet) {
      showErrorToast('Please select a Solana wallet');
      return;
    }
    try {
      const message = 'Hello from Power Grinders!';
      const { signature } = await signMessageSolana({
        message: new TextEncoder().encode(message),
        wallet: selectedWallet,
        options: {
          uiOptions: {
            title: 'Sign this message',
          },
        },
      });

      // Convert Uint8Array to hex string for display
      const signatureHex = Buffer.from(signature).toString('hex');
      showSuccessToast(`Message signed: ${signatureHex.slice(0, 16)}...`);
    } catch (error) {
      console.error(error);
      showErrorToast('Failed to sign message');
    }
  };

  const handleSignTransaction = async () => {
    if (!selectedWallet) {
      showErrorToast('Please select a Solana wallet');
      return;
    }
    try {
      const connection = new Connection('https://api.mainnet-beta.solana.com');
      const transaction = new Transaction();

      // Create a simple transfer instruction (self-transfer for demo)
      const transferInstruction = SystemProgram.transfer({
        fromPubkey: new PublicKey(selectedWallet.address),
        toPubkey: new PublicKey(selectedWallet.address),
        lamports: 1000,
      });
      transaction.add(transferInstruction);

      const latestBlockhash = await connection.getLatestBlockhash();
      transaction.recentBlockhash = latestBlockhash.blockhash;
      transaction.feePayer = new PublicKey(selectedWallet.address);

      // Serialize the transaction before signing
      const serializedTransaction = transaction.serialize({
        requireAllSignatures: false,
        verifySignatures: false,
      });

      const { signedTransaction } = await signTransactionSolana({
        transaction: serializedTransaction,
        wallet: selectedWallet,
      });

      console.log('Signed transaction:', signedTransaction);
      showSuccessToast('Transaction signed successfully');
    } catch (error) {
      console.error(error);
      showErrorToast('Failed to sign transaction');
    }
  };

  const handleSendTransaction = async () => {
    if (!selectedWallet) {
      showErrorToast('Please select a Solana wallet');
      return;
    }
    try {
      // Use devnet for testing
      const connection = new Connection('https://api.devnet.solana.com');
      const transaction = new Transaction();

      // Create a simple transfer instruction (sending to self for demo)
      const transferInstruction = SystemProgram.transfer({
        fromPubkey: new PublicKey(selectedWallet.address),
        toPubkey: new PublicKey(selectedWallet.address),
        lamports: 1000, // Very small amount for testing
      });
      transaction.add(transferInstruction);

      const latestBlockhash = await connection.getLatestBlockhash();
      transaction.recentBlockhash = latestBlockhash.blockhash;
      transaction.feePayer = new PublicKey(selectedWallet.address);

      // Serialize the transaction before signing
      const serializedTransaction = transaction.serialize({
        requireAllSignatures: false,
        verifySignatures: false,
      });

      // Sign the transaction first
      const { signedTransaction } = await signTransactionSolana({
        transaction: serializedTransaction,
        wallet: selectedWallet,
      });

      // Send the signed transaction
      const signature = await connection.sendRawTransaction(signedTransaction);

      // Confirm transaction with updated API
      await connection.confirmTransaction({
        signature,
        blockhash: latestBlockhash.blockhash,
        lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
      });

      showSuccessToast(`Transaction sent! Signature: ${signature.slice(0, 16)}...`);
    } catch (error) {
      console.error(error);
      showErrorToast('Failed to send transaction');
    }
  };

  const availableActions = [
    {
      name: 'Sign message',
      function: handleSignMessage,
      disabled: !selectedWallet,
    },
    {
      name: 'Sign transaction',
      function: handleSignTransaction,
      disabled: !selectedWallet,
    },
    {
      name: 'Send transaction (Devnet)',
      function: handleSendTransaction,
      disabled: !selectedWallet,
    },
  ];

  return (
    <Section
      name="Wallet actions"
      description="Sign messages and transactions, send transactions on Solana. Works with both external wallets (Phantom, Solflare) and embedded Privy wallets."
      filepath="src/components/sections/wallet-actions"
      actions={availableActions}
    >
      <div className="mb-4">
        <label
          htmlFor="wallet-select"
          className="block text-sm font-medium mb-2 text-white"
        >
          Select Solana wallet:
        </label>
        <div className="relative">
          <select
            id="wallet-select"
            value={selectedWallet?.address || ''}
            onChange={(e) => {
              setSelectedWalletAddress(e.target.value || null);
            }}
            className="w-full pl-3 pr-8 py-2 border border-white/20 rounded-md bg-white/10 text-white focus:outline-none focus:ring-1 focus:ring-[#F2ECC8] appearance-none"
          >
            {wallets.length === 0 ? (
              <option value="">No wallets available</option>
            ) : (
              <>
                <option value="">Select a wallet</option>
                {wallets.map((wallet) => {
                  const walletType = 'walletClientType' in wallet
                    ? (wallet as { walletClientType?: string }).walletClientType
                    : 'solana';
                  return (
                    <option key={wallet.address} value={wallet.address} className="bg-gray-900">
                      {wallet.address.slice(0, 8)}...{wallet.address.slice(-6)} [{walletType || 'solana'}]
                    </option>
                  );
                })}
              </>
            )}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WalletActions;
