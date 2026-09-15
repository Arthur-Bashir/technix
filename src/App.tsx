/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickNeedSelector } from './components/QuickNeedSelector';
import { BusinessWebsiteSection } from './components/BusinessWebsiteSection';
import { BusinessEmailSection } from './components/BusinessEmailSection';
import { TechNixCareSection } from './components/TechNixCareSection';
import { ITRescueSection } from './components/ITRescueSection';
import { SoftwareSolutions } from './components/SoftwareSolutions';
import { CentralSolutionsSection } from './components/CentralSolutionsSection';
import { CustomerTypesSection } from './components/CustomerTypesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { WhyTechNix } from './components/WhyTechNix';
import { AcademySection } from './components/AcademySection';
import { TestimonialsSection } from './components/TestimonialsSection';
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
      {/* Primary Navigation Bar */}
      <Navbar
        onOpenQuote={handleOpenQuote}
        onOpenHealthCheck={handleOpenHealthCheck}
        onOpenITRescue={handleOpenITRescue}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenQuote={handleOpenQuote}
          onOpenHealthCheck={handleOpenHealthCheck}
        />

        <QuickNeedSelector
          onSelectNeed={handleSelectNeed}
          onOpenITRescue={handleOpenITRescue}
          onOpenQuote={handleOpenQuote}
        />

        <BusinessWebsiteSection onOpenQuote={handleOpenQuote} />

        <BusinessEmailSection onOpenQuote={handleOpenQuote} />

        <TechNixCareSection onOpenQuote={handleOpenQuote} />

        <ITRescueSection onOpenITRescue={handleOpenITRescue} />

        <SoftwareSolutions onOpenQuote={handleOpenQuote} />

        <CentralSolutionsSection onOpenQuote={handleOpenQuote} />

        <CustomerTypesSection onOpenQuote={handleOpenQuote} />

        <CaseStudiesSection onOpenQuote={handleOpenQuote} />

        <WhyTechNix />

        <AcademySection onRegisterCourse={handleRegisterCourse} />

        <TestimonialsSection />

        <AboutSection />

        <ContactSection initialService={quoteService} />
      </main>

      {/* Footer */}
      <Footer
        onOpenQuote={handleOpenQuote}
        onOpenHealthCheck={handleOpenHealthCheck}
        onOpenITRescue={handleOpenITRescue}
      />

      {/* Modals & Floating Action Widgets */}
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

      <WhatsAppButton />
    </div>
  );
}

