import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/landing/HeroSection';

const ProductSection = dynamic(() => import('@/components/landing/ProductSection').then(mod => mod.ProductSection));
const BenefitsSection = dynamic(() => import('@/components/landing/BenefitsSection').then(mod => mod.BenefitsSection));
const BonusesSection = dynamic(() => import('@/components/landing/BonusesSection').then(mod => mod.BonusesSection));
const TestimonialsSection = dynamic(() => import('@/components/landing/TestimonialsSection').then(mod => mod.TestimonialsSection));
const OfferSection = dynamic(() => import('@/components/landing/OfferSection').then(mod => mod.OfferSection));
const GuaranteeSection = dynamic(() => import('@/components/landing/GuaranteeSection').then(mod => mod.GuaranteeSection));
const FaqSection = dynamic(() => import('@/components/landing/FaqSection').then(mod => mod.FaqSection));
const Footer = dynamic(() => import('@/components/landing/Footer').then(mod => mod.Footer));


export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <main className="flex-1">
        <HeroSection />
        <ProductSection />
        <BenefitsSection />
        <BonusesSection />
        <TestimonialsSection />
        <OfferSection />
        <GuaranteeSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
