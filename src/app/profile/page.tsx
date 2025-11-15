'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function ProfilePage() {
  const { t } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    // Redirect to apply page since authentication is not available yet
    router.push('/apply');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin h-12 w-12 border-t-2 border-b-2 border-[#86C520]"></div>
    </div>
  );
}
