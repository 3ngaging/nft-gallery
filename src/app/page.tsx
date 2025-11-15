'use client';

import StickerSystem from '@/components/StickerSystem';
import HeroSection from '@/components/home/HeroSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import StatsSection from '@/components/home/StatsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* <StickerSystem /> */}
      <HeroSection />
      <GalleryPreview />
      <StatsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
