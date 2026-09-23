import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Spatial3DHero } from './components/Spatial3DHero';
import { MotionSection } from './components/MotionSection';
import { QuickNeedSelector } from './components/QuickNeedSelector';
import { SolutionsYouCanStartWith } from './components/SolutionsYouCanStartWith';
import { SelectedCapabilityStory } from './components/SelectedCapabilityStory';
import { TrustCredibilitySection } from './components/TrustCredibilitySection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CustomerTypesSection } from './components/CustomerTypesSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { DigitalHealthCheckSection } from './components/DigitalHealthCheckSection';
import { FinalCTASection } from './components/FinalCTASection';
import { WhyTechNix } from './components/WhyTechNix';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteRequestModal } from './components/QuoteRequestModal';
import { ITRescueModal } from './components/ITRescueModal';
import { DigitalHealthCheckModal } from './components/DigitalHealthCheckModal';
import { CourseRegistrationModal } from './components/CourseRegistrationModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Course } from './types';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteService, setQuoteService] = useState<string | undefined>(undefined);
  const [isHealthCheckModalOpen, setIsHealthCheckModalOpen] = useState(false);
  const [isITRescueModalOpen, setIsITRescueModalOpen] = useState(false);
  const [selectedCourseForReg, setSelectedCourseForReg] = useState<Course | null>(null);

  const handleOpenQuote = (service?: string) => {
    setQuoteService(service);
    setIsQuoteModalOpen(true);
  };

  const handleOpenHealthCheck = () => {
    setIsHealthCheckModalOpen(true);
  };

  const handleOpenITRescue = () => {
    setIsITRescueModalOpen(true);
  };

  const handleRegisterCourse = (course: Course) => {
    setSelectedCourseForReg(course);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectNeed = (targetSection: string, serviceTitle: string) => {
    const el = document.getElementById(targetSection);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenQuote(serviceTitle);
    }
  };

  return (
    <div className="min-h-screen bg-[#040814] text-white flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* 1. Primary Navigation Bar */}
      <Navbar
        onOpenQuote={handleOpenQuote}
        onOpenHealthCheck={handleOpenHealthCheck}
        onOpenITRescue={handleOpenITRescue}
      />

      {/* Main Curated Narrative Flow */}
      <main className="flex-1">
        {/* 1. HERO: Spatial 3D Hero - Living African Digital Infrastructure Ecosystem */}
        <Spatial3DHero
          onOpenQuote={handleOpenQuote}
          onOpenHealthCheck={handleOpenHealthCheck}
          onOpenITRescue={handleOpenITRescue}
          onSelectSection={handleScrollToSection}
        />

        {/* 2. CUSTOMER NEED / ORIENTATION: Human First-Person Pathways */}
        <MotionSection>
          <QuickNeedSelector
            onSelectNeed={handleSelectNeed}
            onOpenITRescue={handleOpenITRescue}
            onOpenQuote={handleOpenQuote}
          />
        </MotionSection>

        {/* 3. CORE SOLUTIONS SHOWCASE: Commercial Showroom with Dominant Featured Solution */}
        <MotionSection>
          <SolutionsYouCanStartWith
            onOpenQuote={handleOpenQuote}
            onOpenITRescue={handleOpenITRescue}
            onOpenHealthCheck={handleOpenHealthCheck}
            onSelectNeed={handleSelectNeed}
          />
        </MotionSection>

        {/* 4. SELECTED CAPABILITY / PRODUCT STORY: Curated Split-Screen Theater */}
        <MotionSection>
          <SelectedCapabilityStory
            onOpenQuote={handleOpenQuote}
            onOpenITRescue={handleOpenITRescue}
            onOpenHealthCheck={handleOpenHealthCheck}
          />
        </MotionSection>

        {/* 5. PROOF / TRUST: Brought Forward Early (PACT Malawi, Save the Children, Red Cross) */}
        <MotionSection>
          <TrustCredibilitySection />
        </MotionSection>

        <MotionSection>
          <CaseStudiesSection onOpenQuote={handleOpenQuote} />
        </MotionSection>

        {/* 6. SECTOR SPECIFIC RELEVANCE: Tailored Operational Modules */}
        <MotionSection>
          <CustomerTypesSection onOpenQuote={handleOpenQuote} />
        </MotionSection>

        {/* 7. HOW TECHNIX WORKS: 5-Stage Visual Journey (Discover -> Plan -> Build -> Deploy -> Support) */}
        <MotionSection>
          <HowWeWorkSection onOpenQuote={handleOpenQuote} />
        </MotionSection>

        {/* 8. STRATEGIC DIAGNOSTIC INVITATION: Digital Business Health Check */}
        <MotionSection>
          <DigitalHealthCheckSection onOpenInteractiveCheck={handleOpenHealthCheck} />
        </MotionSection>

        {/* 9. FINAL CONVERSION: Culmination of Site Experience Connected to Hero */}
        <MotionSection>
          <FinalCTASection onOpenQuote={handleOpenQuote} />
        </MotionSection>

        {/* 10. SUPPORTING INFORMATION: Principles, Physical Hubs, Contact Form */}
        <MotionSection>
          <WhyTechNix />
        </MotionSection>

        <MotionSection>
          <AboutSection />
        </MotionSection>

        <MotionSection>
          <ContactSection initialService={quoteService} />
        </MotionSection>
      </main>

      {/* Footer */}
      <Footer
        onOpenQuote={handleOpenQuote}
        onOpenHealthCheck={handleOpenHealthCheck}
        onOpenITRescue={handleOpenITRescue}
      />

      {/* Interactive Conversion Modals */}
      <QuoteRequestModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={quoteService}
      />

      <ITRescueModal
        isOpen={isITRescueModalOpen}
        onClose={() => setIsITRescueModalOpen(false)}
      />

      <DigitalHealthCheckModal
        isOpen={isHealthCheckModalOpen}
        onClose={() => setIsHealthCheckModalOpen(false)}
        onOpenQuote={(srv) => {
          setIsHealthCheckModalOpen(false);
          handleOpenQuote(srv);
        }}
      />

      <CourseRegistrationModal
        course={selectedCourseForReg}
        onClose={() => setSelectedCourseForReg(null)}
      />

      {/* Persistent, Contextual WhatsApp Quick-Launcher */}
      <WhatsAppButton />
    </div>
  );
}
