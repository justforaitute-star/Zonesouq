import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MissionVision } from './components/MissionVision';
import { GlobalTradeVisualizer } from './components/GlobalTradeVisualizer';
import { InteractiveTilesShowcase } from './components/InteractiveTilesShowcase';
import { ServicesSection } from './components/ServicesSection';
import { WhyZoneSouq } from './components/WhyZoneSouq';
import { TradeProcess } from './components/TradeProcess';
import { ContactSection } from './components/ContactSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { TradeInquiryModal } from './components/TradeInquiryModal';
import { LegalModal } from './components/LegalModals';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string | undefined>();
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'accessibility' | null>(null);

  const handleOpenInquiry = (defaultService?: string) => {
    setSelectedServiceForInquiry(defaultService);
    setInquiryModalOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-amber-500/20 selection:text-amber-900 font-sans">
      {/* Top sticky navigation */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      <main className="flex-1">
        {/* 1. Cinematic Hero / "Discover Zone Souq" */}
        <Hero
          onExploreServices={handleExploreServices}
          onOpenInquiry={() => handleOpenInquiry()}
        />

        {/* 2. Mission & Vision */}
        <MissionVision />

        {/* 3. Global Trading / Connected Network Visual Section */}
        <GlobalTradeVisualizer />

        {/* 4. Interactive Tiles Showcase with Horizontal Scrolling & Trade Inspection */}
        <InteractiveTilesShowcase
          onSelectTileForInquiry={(tileTitle) => handleOpenInquiry(tileTitle)}
        />

        {/* 5. Services Section (Wholesale, Import & Export, Procurement) */}
        <ServicesSection onSelectService={(serviceName) => handleOpenInquiry(serviceName)} />

        {/* 6. Why Zone Souq / Value Proposition Section */}
        <WhyZoneSouq onOpenContact={handleScrollToContact} />

        {/* 7. Global Sourcing / Distribution Visual (Trade Process) */}
        <TradeProcess />

        {/* 8. Contact Section (Credentials, Location & Interactive Form) */}
        <ContactSection initialService={selectedServiceForInquiry} />

        {/* 9. Newsletter ("Stay Connected with Us") */}
        <Newsletter />
      </main>

      {/* 10. Footer with full credentials, social icons, legal modals */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Interactive Inquiries & Legal Dialogs */}
      <TradeInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultService={selectedServiceForInquiry}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
