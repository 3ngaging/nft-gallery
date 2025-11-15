'use client';

import { lazy, Suspense } from 'react';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import Footer from '@/components/Footer';

// Lazy load componentes no críticos para mejorar tiempo de carga inicial
const GalleryPreview = lazy(() => import('@/components/home/GalleryPreview'));
const CommunitySection = lazy(() => import('@/components/home/CommunitySection'));
const FeaturesSection = lazy(() => import('@/components/home/FeaturesSection'));
const RoadmapSection = lazy(() => import('@/components/home/RoadmapSection'));
const TeamSection = lazy(() => import('@/components/home/TeamSection'));
const FAQSection = lazy(() => import('@/components/home/FAQSection'));

// Componente de fallback ligero
const SectionFallback = () => (
  <div className="h-96 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#F2ECC8] border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <HeroSection />
      <StatsSection />
      <Suspense fallback={<SectionFallback />}>
        <GalleryPreview />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CommunitySection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FeaturesSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <RoadmapSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TeamSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FAQSection />
      </Suspense>
      <Footer />
    </div>
  );
}
