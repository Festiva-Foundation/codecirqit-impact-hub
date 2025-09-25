import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MetricsSection from '@/components/MetricsSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import BlogSection from '@/components/BlogSection';
import CollaborationsSection from '@/components/CollaborationsSection';
import FoundersSection from '@/components/FoundersSection';
import SocialImpactSection from '@/components/SocialImpactSection';
import CelebrateWithLoveSection from '@/components/CelebrateWithLoveSection';
import ContactSection from '@/components/ContactSection';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <MetricsSection />
          <AboutSection />
          <GallerySection />
          <BlogSection />
          <CollaborationsSection />
          <FoundersSection />
          <SocialImpactSection />
          <CelebrateWithLoveSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
