import { HeroSection } from "@/features/hero/components/hero-section";
import { ExtrasafeSection } from "@/features/extrasafe/components/extrasafe-section";
import { ProductsSection } from "@/features/products/components/products-section";
import { AboutSection } from "@/features/about/components/about-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExtrasafeSection />
      <ProductsSection />
      <AboutSection />
    </main>
  );
}
