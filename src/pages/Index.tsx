import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

import AboutSection from '@/components/AboutSection';
import ConstructionSection from '@/components/ConstructionSection';
import GuitarsSection from '@/components/GuitarsSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import InstagramSection from '@/components/InstagramSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        
        <AboutSection />
        <ConstructionSection />
        <GuitarsSection />
        <ProcessSection />
        <ContactSection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
