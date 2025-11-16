/**
 * Simple toast notification utility
 * Provides user feedback for wallet operations
 */

export const showSuccessToast = (message: string) => {
  if (typeof window !== 'undefined') {
    console.log('✅ Success:', message);
    // You can replace this with a proper toast library later (e.g., sonner, react-hot-toast)
    alert(message);
  }
};

export const showErrorToast = (message: string) => {
  if (typeof window !== 'undefined') {
    console.error('❌ Error:', message);
    // You can replace this with a proper toast library later (e.g., sonner, react-hot-toast)
    alert(`Error: ${message}`);
  }
};
