'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import StatsSection from '@/components/home/StatsSection';
import CommunitySection from '@/components/home/CommunitySection';
import FeaturesSection from '@/components/home/FeaturesSection';
import RoadmapSection from '@/components/home/RoadmapSection';
import TeamSection from '@/components/home/TeamSection';
import FAQSection from '@/components/home/FAQSection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen">
      <HeroSection />
      <GalleryPreview />
      <StatsSection />
      <CommunitySection />
      <FeaturesSection />
      <RoadmapSection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
