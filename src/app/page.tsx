import { BenefitsSection } from '@/components/landing/BenefitsSection';
import { BonusesSection } from '@/components/landing/BonusesSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { Footer } from '@/components/landing/Footer';
import { GuaranteeSection } from '@/components/landing/GuaranteeSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { OfferSection } from '@/components/landing/OfferSection';
import { ProductSection } from '@/components/landing/ProductSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';

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
