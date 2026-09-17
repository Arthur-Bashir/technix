import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import TechNix3DWorld from './components/TechNix3DWorld';
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
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState<string | undefined>();
  const [healthOpen, setHealthOpen] = useState(false);
  const [rescueOpen, setRescueOpen] = useState(false);
  const [course, setCourse] = useState<Course | null>(null);

  const openQuote = (service?: string) => { setQuoteService(service); setQuoteOpen(true); };
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const selectNeed = (id: string, service: string) => document.getElementById(id) ? scrollTo(id) : openQuote(service);

  const panel = (children: React.ReactNode, className = '') => (
    <section className={`tnx-3d-panel ${className}`}><div className="tnx-panel-glow" />{children}</section>
  );

  return (
    <div className="tnx-site">
      <div className="tnx-space" aria-hidden="true">
        <div className="tnx-nebula tnx-nebula-one" />
        <div className="tnx-nebula tnx-nebula-two" />
        <div className="tnx-scanline" />
        <TechNix3DWorld />
      </div>

      <Navbar onOpenQuote={openQuote} onOpenHealthCheck={() => setHealthOpen(true)} onOpenITRescue={() => setRescueOpen(true)} />

      <main className="tnx-main">
        <section className="tnx-hero-3d">
          <div className="tnx-hero-copy">
            <div className="tnx-eyebrow"><span /> TECHNIX AFRICA · DIGITAL INFRASTRUCTURE</div>
            <h1>Technology That<br /><em>Moves Your Business</em><br />Forward.</h1>
            <p>We design, build and support the digital systems that keep African businesses and organisations moving.</p>
            <div className="tnx-hero-actions">
              <button onClick={() => openQuote()} className="tnx-primary">Start a Project <span>↗</span></button>
              <button onClick={() => scrollTo('solutions')} className="tnx-secondary">Explore the ecosystem <span>↓</span></button>
            </div>
            <div className="tnx-hero-proof"><b>01</b><span>Build</span><i /> <b>02</b><span>Support</span><i /> <b>03</b><span>Scale</span></div>
          </div>
          <div className="tnx-hero-orbit-label tnx-label-one"><span>●</span> CLOUD & HOSTING</div>
          <div className="tnx-hero-orbit-label tnx-label-two"><span>●</span> BUSINESS SYSTEMS</div>
          <div className="tnx-hero-orbit-label tnx-label-three"><span>●</span> DATA · MOBILE · WEB</div>
          <div className="tnx-hero-bottom">SCROLL TO ENTER THE SYSTEM <span>⌄</span></div>
        </section>

        <div id="solutions" className="tnx-content-space">
          {panel(<QuickNeedSelector onSelectNeed={selectNeed} onOpenITRescue={() => setRescueOpen(true)} onOpenQuote={openQuote} />, 'tnx-panel-wide')}
          {panel(<SolutionsYouCanStartWith onOpenQuote={openQuote} onOpenITRescue={() => setRescueOpen(true)} onOpenHealthCheck={() => setHealthOpen(true)} onSelectNeed={selectNeed} />, 'tnx-panel-wide')}
          {panel(<ProductsPage onOpenQuote={openQuote} onOpenITRescue={() => setRescueOpen(true)} onOpenHealthCheck={() => setHealthOpen(true)} onSelectSection={scrollTo} />, 'tnx-panel-wide')}

          <div className="tnx-section-grid">
            {panel(<BusinessWebsiteSection onOpenQuote={openQuote} />, 'tnx-depth-left')}
            {panel(<BusinessEmailSection onOpenQuote={openQuote} />, 'tnx-depth-right')}
          </div>
          <div className="tnx-section-grid reverse">
            {panel(<HostingDomainsSection onOpenQuote={openQuote} />, 'tnx-depth-right')}
            {panel(<ITRescueSection onOpenITRescue={() => setRescueOpen(true)} />, 'tnx-depth-left')}
          </div>
          {panel(<TechNixCareSection onOpenQuote={openQuote} />, 'tnx-panel-wide')}
          <div className="tnx-section-grid">
            {panel(<SoftwareSolutionsSection onOpenQuote={openQuote} />, 'tnx-depth-left')}
            {panel(<TechNixAcademySection onOpenQuote={openQuote} />, 'tnx-depth-right')}
          </div>
          {panel(<HowWeWorkSection onOpenQuote={openQuote} />, 'tnx-panel-wide')}
          {panel(<TrustCredibilitySection />, 'tnx-panel-wide')}
          {panel(<CaseStudiesSection onOpenQuote={openQuote} />, 'tnx-panel-wide')}
          {panel(<CustomerTypesSection onOpenQuote={openQuote} />, 'tnx-panel-wide')}
          {panel(<DigitalHealthCheckSection onOpenInteractiveCheck={() => setHealthOpen(true)} />, 'tnx-panel-wide')}
          {panel(<FinalCTASection onOpenQuote={openQuote} />, 'tnx-panel-wide tnx-final-panel')}
          <div className="tnx-section-grid">
            {panel(<WhyTechNix />, 'tnx-depth-left')}
            {panel(<AboutSection />, 'tnx-depth-right')}
          </div>
          {panel(<ContactSection initialService={quoteService} />, 'tnx-panel-wide tnx-contact-panel')}
        </div>
      </main>

      <Footer onOpenQuote={openQuote} onOpenHealthCheck={() => setHealthOpen(true)} onOpenITRescue={() => setRescueOpen(true)} />
      <QuoteRequestModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} preselectedService={quoteService} />
      <ITRescueModal isOpen={rescueOpen} onClose={() => setRescueOpen(false)} />
      <DigitalHealthCheckModal isOpen={healthOpen} onClose={() => setHealthOpen(false)} onOpenQuote={(service) => { setHealthOpen(false); openQuote(service); }} />
      <CourseRegistrationModal course={course} onClose={() => setCourse(null)} />
      <WhatsAppButton />
    </div>
  );
}
