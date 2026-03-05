import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductCategories from '@/components/ProductCategories';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProductCategories />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
