import { useState, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';

/**
 * Hook to fetch and manage user profile data including custom display name
 */
export function useUserProfile() {
  const { user, authenticated } = usePrivy();
  const [customDisplayName, setCustomDisplayName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch custom display name from API
  useEffect(() => {
    if (!authenticated || !user) {
      setCustomDisplayName(null);
      return;
    }

    async function fetchDisplayName() {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/profile/display-name?privyUserId=${encodeURIComponent(user.id)}`
        );
        const data = await response.json();

        if (data.success && data.displayName) {
          setCustomDisplayName(data.displayName);
        } else {
          setCustomDisplayName(null);
        }
      } catch (error) {
        console.error('Error fetching display name:', error);
        setCustomDisplayName(null);
      } finally {
        setLoading(false);
      }
    }

    fetchDisplayName();
  }, [authenticated, user]);

  // Get display name with fallback logic
  const displayName =
    customDisplayName ||
    user?.twitter?.username ||
    user?.discord?.username ||
    user?.google?.email ||
    user?.email?.address ||
    (user ? `User ${user.id.slice(0, 6)}` : null);

  return {
    user,
    authenticated,
    customDisplayName,
    displayName,
    loading,
    refreshDisplayName: setCustomDisplayName,
  };
}
