/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
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
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Primary Navigation Bar */}
      <Navbar
        onOpenQuote={handleOpenQuote}
        onOpenHealthCheck={handleOpenHealthCheck}
        onOpenITRescue={handleOpenITRescue}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section: Primary Commercial Entry Point */}
        <Hero
          onOpenQuote={handleOpenQuote}
          onOpenHealthCheck={handleOpenHealthCheck}
        />

        {/* 3. Quick Need Selector: Fast Customer Orientation ("How Can We Help You?") */}
        <QuickNeedSelector
          onSelectNeed={handleSelectNeed}
          onOpenITRescue={handleOpenITRescue}
          onOpenQuote={handleOpenQuote}
        />

        {/* 4. Solutions You Can Start With (Quick Entry Products) */}
        <SolutionsYouCanStartWith
          onOpenQuote={handleOpenQuote}
          onOpenITRescue={handleOpenITRescue}
          onOpenHealthCheck={handleOpenHealthCheck}
          onSelectNeed={handleSelectNeed}
        />

        {/* 5. Central Products Page & Commercial Sales Funnel (Iteration 2 Hub) */}
        <ProductsPage
          onOpenQuote={handleOpenQuote}
          onOpenITRescue={handleOpenITRescue}
          onOpenHealthCheck={handleOpenHealthCheck}
          onSelectSection={handleScrollToSection}
        />

        {/* 6. Product 1: Business Websites (Starter, Growth, Custom with "Starting From" pricing) */}
        <BusinessWebsiteSection onOpenQuote={handleOpenQuote} />

        {/* 7. Product 2: Business Email (Domain inboxes, team credibility, verified pricing) */}
        <BusinessEmailSection onOpenQuote={handleOpenQuote} />

        {/* 8. Product 3: Hosting & Domains (Concepts demystified, verified MK starting rates) */}
        <HostingDomainsSection onOpenQuote={handleOpenQuote} />

        {/* 9. Product 4: IT Rescue ("Something Is Not Working? Let's Fix It" - 10 emergency areas) */}
        <ITRescueSection onOpenITRescue={handleOpenITRescue} />

        {/* 10. Product 5: TechNix Care ("Your Technology Team Without the Full-Time Cost" - 3 Retainer tiers) */}
        <TechNixCareSection onOpenQuote={handleOpenQuote} />

        {/* 11. Product 6: Software Solutions (Custom business tools, clear categories, request quote) */}
        <SoftwareSolutionsSection onOpenQuote={handleOpenQuote} />

        {/* 12. Product 7: TechNix Academy (Practical hands-on real-world tech education) */}
        <TechNixAcademySection onOpenQuote={handleOpenQuote} />

        {/* 13. How We Work: 6-Step Customer Journey Process */}
        <HowWeWorkSection onOpenQuote={handleOpenQuote} />

        {/* 14. Trust & Credibility: Enterprise-grade Client Proof (Pact Malawi, Save the Children, Red Cross) */}
        <TrustCredibilitySection />

        {/* 14. What We've Built: Real Project Case Studies (Problem -> Solution -> Result) */}
        <CaseStudiesSection onOpenQuote={handleOpenQuote} />

        {/* 15. Customer Segments: Technology for Organisations Like Yours */}
        <CustomerTypesSection onOpenQuote={handleOpenQuote} />

        {/* 16. Product 8: Digital Business Health Check (Free diagnostic audit lead generation) */}
        <DigitalHealthCheckSection onOpenInteractiveCheck={handleOpenHealthCheck} />

        {/* 17. Final Conversion Section: Ready to Move Your Business Forward? */}
        <FinalCTASection onOpenQuote={handleOpenQuote} />

        {/* 18. Why TechNix: Commercial Principles & Local African Engineering Reliability */}
        <WhyTechNix />

        {/* 19. Physical Office Locations in Blantyre & Lilongwe */}
        <AboutSection />

        {/* 20. Direct Quotation & Contact Inquiry Form */}
        <ContactSection initialService={quoteService} />
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
