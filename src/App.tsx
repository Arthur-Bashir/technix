import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Spatial3DHero } from './components/Spatial3DHero';
import { MotionSection } from './components/MotionSection';
import { QuickNeedSelector } from './components/QuickNeedSelector';
import { SolutionsYouCanStartWith } from './components/SolutionsYouCanStartWith';
import { ProductsPage } from './components/ProductsPage';
import { BusinessWebsiteSection } from './components/BusinessWebsiteSection';
import { BusinessEmailSection } from './components/BusinessEmailSection';
import { HostingDomainsSection } from './components/HostingDomainsSection';
import { ITRescueSection } from './components/ITRescueSection';
import { TechNixCareSection } from './components/TechNixCareSection';
import { SoftwareSolutionsSection } from './components/SoftwareSolutionsSection';
import { TechNixAcademySection } from './components/TechNixAcademySection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { TrustCredibilitySection } from './components/TrustCredibilitySection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CustomerTypesSection } from './components/CustomerTypesSection';
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

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Spatial 3D Hero: Genuine WebGL African Digital Infrastructure Ecosystem */}
        <Spatial3DHero
          onOpenQuote={handleOpenQuote}
          onOpenHealthCheck={handleOpenHealthCheck}
          onOpenITRescue={handleOpenITRescue}
          onSelectSection={handleScrollToSection}
        />

        {/* 3. Quick Need Selector: Fast Customer Orientation */}
        <MotionSection>
          <QuickNeedSelector
            onSelectNeed={handleSelectNeed}
            onOpenITRescue={handleOpenITRescue}
            onOpenQuote={handleOpenQuote}
          />
        </MotionSection>

        {/* 4. Solutions You Can Start With */}
        <MotionSection>
          <SolutionsYouCanStartWith
            onOpenQuote={handleOpenQuote}
            onOpenITRescue={handleOpenITRescue}
            onOpenHealthCheck={handleOpenHealthCheck}
            onSelectNeed={handleSelectNeed}
          />
        </MotionSection>

        {/* 5. Central Products Page & Commercial Catalog */}
        <MotionSection>
          <ProductsPage
            onOpenQuote={handleOpenQuote}
            onOpenITRescue={handleOpenITRescue}
            onOpenHealthCheck={handleOpenHealthCheck}
            onSelectSection={handleScrollToSection}
          />
        </MotionSection>

        {/* 6. Product 1: Business Websites */}
        <MotionSection>
          <BusinessWebsiteSection onOpenQuote={handleOpenQuote} />
        </MotionSection>

        {/* 7. Product 2: Business Email */}
        <MotionSection>
          <BusinessEmailSection onOpenQuote={handleOpenQuote} />
        </MotionSection>

        {/* 8. Product 3: Hosting & Domains */}
        <MotionSection>
          <HostingDomainsSection onOpenQuote={handleOpenQuote} />
        </MotionSection>

        {/* 9. Product 4: IT Rescue */}
        <MotionSection>
          <ITRescueSection onOpenITRescue={handleOpenITRescue} />
        </MotionSection>

        {/* 10. Product 5: TechNix Care */}
        <MotionSection>
          <TechNixCareSection onOpenQuote={handleOpenQuote} />
        </MotionSection>

        {/* 11. Product 6: Software Solutions */}
        <MotionSection>
          <SoftwareSolutionsSection onOpenQuote={handleOpenQuote} />
        </MotionSection>

        {/* 12. Product 7: TechNix Academy */}
        <MotionSection>
          <TechNixAcademySection onOpenQuote={handleOpenQuote} />
        </MotionSection>

        {/* 13. How We Work: 6-Step Customer Journey Process */}
        <MotionSection>
          <HowWeWorkSection onOpenQuote={handleOpenQuote} />
        </MotionSection>

        {/* 14. Trust & Credibility: Enterprise-grade Client Proof */}
        <MotionSection>
          <TrustCredibilitySection />
        </MotionSection>

        {/* 15. Case Studies: Real Project Results */}
        <MotionSection>
          <CaseStudiesSection onOpenQuote={handleOpenQuote} />
        </MotionSection>

        {/* 16. Customer Types */}
        <MotionSection>
          <CustomerTypesSection onOpenQuote={handleOpenQuote} />
        </MotionSection>

        {/* 17. Digital Business Health Check */}
        <MotionSection>
          <DigitalHealthCheckSection onOpenInteractiveCheck={handleOpenHealthCheck} />
        </MotionSection>

        {/* 18. Final Conversion Section */}
        <MotionSection>
          <FinalCTASection onOpenQuote={handleOpenQuote} />
        </MotionSection>

        {/* 19. Why TechNix: Commercial Principles */}
        <MotionSection>
          <WhyTechNix />
        </MotionSection>

        {/* 20. Office Locations in Blantyre & Lilongwe */}
        <MotionSection>
          <AboutSection />
        </MotionSection>

        {/* 21. Direct Quotation & Contact Inquiry Form */}
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
