import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteRequestModal } from './components/QuoteRequestModal';
import { ITRescueModal } from './components/ITRescueModal';
import { DigitalHealthCheckModal } from './components/DigitalHealthCheckModal';
import { CourseRegistrationModal } from './components/CourseRegistrationModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Course } from './types';

import { HomePage } from './pages/HomePage';
import { SolutionsIndexPage } from './pages/SolutionsIndexPage';
import { DigitalPresencePage } from './pages/DigitalPresencePage';
import { BusinessSystemsPage } from './pages/BusinessSystemsPage';
import { ITSupportPage } from './pages/ITSupportPage';
import { AcademyPage } from './pages/AcademyPage';
import { OurWorkPage } from './pages/OurWorkPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

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

  const handleCloseCourseReg = () => {
    setSelectedCourseForReg(null);
  };

  return (
    <div className="min-h-screen bg-[#050811] text-white flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      <Navbar
        onOpenQuote={handleOpenQuote}
        onOpenHealthCheck={handleOpenHealthCheck}
        onOpenITRescue={handleOpenITRescue}
      />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenQuote={handleOpenQuote}
                onOpenHealthCheck={handleOpenHealthCheck}
                onOpenITRescue={handleOpenITRescue}
              />
            }
          />
          <Route path="/solutions" element={<SolutionsIndexPage />} />
          <Route
            path="/solutions/digital-presence"
            element={<DigitalPresencePage onOpenQuote={handleOpenQuote} />}
          />
          <Route
            path="/solutions/business-systems"
            element={<BusinessSystemsPage onOpenQuote={handleOpenQuote} />}
          />
          <Route
            path="/solutions/it-support"
            element={<ITSupportPage onOpenQuote={handleOpenQuote} onOpenITRescue={handleOpenITRescue} />}
          />
          <Route
            path="/academy"
            element={<AcademyPage onRegisterCourse={handleRegisterCourse} />}
          />
          <Route
            path="/our-work"
            element={<OurWorkPage onOpenQuote={handleOpenQuote} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage initialService={quoteService} />} />
        </Routes>
      </main>

      <Footer
        onOpenQuote={handleOpenQuote}
        onOpenHealthCheck={handleOpenHealthCheck}
        onOpenITRescue={handleOpenITRescue}
      />

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
        onClose={handleCloseCourseReg}
      />

      <WhatsAppButton />
    </div>
  );
}
