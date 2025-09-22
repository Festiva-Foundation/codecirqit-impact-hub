import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MetricsSection from '@/components/MetricsSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import BlogSection from '@/components/BlogSection';
import CollaborationsSection from '@/components/CollaborationsSection';
import FoundersSection from '@/components/FoundersSection';
import SocialImpactSection from '@/components/SocialImpactSection';
import ContactSection from '@/components/ContactSection';

import Footer from '@/components/Footer';

const Index = () => {
  return (
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
        <ContactSection />
        
      </main>
      <Footer />
    </div>
  );
};

export default Index;
