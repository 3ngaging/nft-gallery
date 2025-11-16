'use client';

import { useState, useMemo, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import {
  useSendTransaction as useSendTransactionSolana,
  useSignMessage as useSignMessageSolana,
  useSignTransaction as useSignTransactionSolana,
} from '@privy-io/react-auth/solana';
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import Section from '../reusables/section';
import { showSuccessToast, showErrorToast } from '@/components/ui/custom-toast';

type WalletInfo = {
  address: string;
  name: string;
  walletClientType: string;
};

const WalletActions = () => {
  const { user } = usePrivy();
  const { signMessage: signMessageSolana } = useSignMessageSolana();
  const { signTransaction: signTransactionSolana } = useSignTransactionSolana();
  const { sendTransaction: sendTransactionSolana } = useSendTransactionSolana();

  // Get Solana wallets from linked accounts
  const solanaWallets = user?.linkedAccounts?.filter(
    (account) => account.type === 'wallet' && (account as any).chainType === 'solana'
  ) || [];

  const allWallets = useMemo((): WalletInfo[] => {
    return solanaWallets.map((wallet: any) => ({
      address: wallet.address,
      name: wallet.address,
      walletClientType: wallet.walletClient || 'privy',
    }));
  }, [solanaWallets]);

  const [selectedWallet, setSelectedWallet] = useState<WalletInfo | null>(null);

  useEffect(() => {
    if (allWallets.length > 0 && !selectedWallet) {
      setSelectedWallet(allWallets[0]);
    }
  }, [allWallets, selectedWallet]);

  const handleSignMessage = async () => {
    if (!selectedWallet) {
      showErrorToast('Please select a Solana wallet');
      return;
    }
    try {
      const message = 'Hello from Power Grinders!';
      const signatureUint8Array = await signMessageSolana({
        message: new TextEncoder().encode(message),
        options: {
          address: selectedWallet.address,
          uiOptions: {
            title: 'Sign this message',
          },
        },
      });

      // Convert Uint8Array to hex string for display
      const signature = Buffer.from(signatureUint8Array).toString('hex');
      showSuccessToast(`Message signed: ${signature.slice(0, 16)}...`);
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

      const signedTransaction = await signTransactionSolana({
        transaction: transaction,
        connection: connection,
        address: selectedWallet.address,
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

      const receipt = await sendTransactionSolana({
        transaction: transaction,
        connection: connection,
        address: selectedWallet.address,
      });

      showSuccessToast(`Transaction sent! Signature: ${receipt.slice(0, 16)}...`);
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
              const wallet = allWallets.find(
                (w) => w.address === e.target.value
              );
              setSelectedWallet(wallet || null);
            }}
            className="w-full pl-3 pr-8 py-2 border border-white/20 rounded-md bg-white/10 text-white focus:outline-none focus:ring-1 focus:ring-[#F2ECC8] appearance-none"
          >
            {allWallets.length === 0 ? (
              <option value="">No wallets available</option>
            ) : (
              <>
                <option value="">Select a wallet</option>
                {allWallets.map((wallet) => (
                  <option key={wallet.address} value={wallet.address} className="bg-gray-900">
                    {wallet.address.slice(0, 8)}...{wallet.address.slice(-6)} [{wallet.walletClientType}]
                  </option>
                ))}
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
