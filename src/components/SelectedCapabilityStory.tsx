import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Mail, 
  Server, 
  ShieldCheck, 
  Code2, 
  GraduationCap, 
  ArrowRight, 
  MessageSquare, 
  Check,
  CheckCircle2,
  Lock,
  Wifi,
  Laptop,
  Database,
  BarChart3,
  Smartphone,
  Cpu
} from 'lucide-react';
import { COURSES, COMPANY_INFO } from '../data/technixData';

interface SelectedCapabilityStoryProps {
  onOpenQuote: (service?: string) => void;
  onOpenITRescue: () => void;
  onOpenHealthCheck: () => void;
}

export const SelectedCapabilityStory: React.FC<SelectedCapabilityStoryProps> = ({
  onOpenQuote,
  onOpenITRescue,
  onOpenHealthCheck,
}) => {
  const [activeStory, setActiveStory] = useState<'website' | 'email' | 'hosting' | 'support' | 'software' | 'academy'>('website');

  // Listen for hash changes to auto-select capability
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'business-website') setActiveStory('website');
      else if (hash === 'business-email') setActiveStory('email');
      else if (hash === 'hosting-domains') setActiveStory('hosting');
      else if (hash === 'it-rescue' || hash === 'technix-care') setActiveStory('support');
      else if (hash === 'software-solutions') setActiveStory('software');
      else if (hash === 'technix-academy') setActiveStory('academy');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const capabilities = [
    {
      id: 'website',
      label: 'Business Websites',
      icon: Globe,
      tagline: 'Public Commercial Presence',
      heading: 'Websites That Present Your Business Professionally',
      whoItHelps: 'Growing Malawian enterprises, professional practices, and institutions needing an official online presence.',
      narrative: 'Prospective clients, donors, and procurement committees evaluate your credibility before making contact. We build fast, mobile-responsive websites that showcase your services clearly and route customer inquiries directly to phone and WhatsApp.',
      pricing: 'From MK 199,000',
      scope: 'Design, mobile testing, domain & launch',
      keyPoints: [
        'Mobile-responsive layout designed for local smartphones',
        'Direct WhatsApp contact and inquiry integration',
        'Google Maps and local business search presence',
        'Domain registration and secure HTTPS setup',
      ],
      ctaText: 'Start a Website Project',
      action: () => onOpenQuote('Business Website'),
      whatsAppMsg: 'Hello TechNix, I am interested in building a professional business website.',
    },
    {
      id: 'email',
      label: 'Business Email',
      icon: Mail,
      tagline: 'Organisational Identity',
      heading: 'Professional Email Accounts on Your Own Domain',
      whoItHelps: 'Companies and organisations still using personal @gmail.com or @yahoo.com addresses for formal correspondence.',
      narrative: 'Conducting official business from personal webmail creates confusion and undermines institutional confidence during tenders. We configure authenticated domain email (name@yourcompany.mw) with synchronized access across staff laptops and phones.',
      pricing: 'From MK 7,500 / month',
      scope: 'Team mailboxes, DNS records & device sync',
      keyPoints: [
        'Custom domain email addresses (@yourcompany.mw)',
        'Synchronized access on smartphones, tablets, and computers',
        'Spam filtering and standard email authentication',
        'Centralized administration for adding and removing staff',
      ],
      ctaText: 'Configure Business Email',
      action: () => onOpenQuote('Business Email Setup'),
      whatsAppMsg: 'Hello TechNix, I want to set up professional business email accounts.',
    },
    {
      id: 'hosting',
      label: 'Hosting & Domains',
      icon: Server,
      tagline: 'Reliable Cloud Infrastructure',
      heading: 'Dependable Web Hosting with Local Currency Billing',
      whoItHelps: 'Organisations seeking stable hosting without the friction of international credit card payments or foreign exchange fees.',
      narrative: 'Keep your website and web applications online with reliable cloud hosting, scheduled backups, and Malawian (.mw) or international domain management, billed transparently in Malawi Kwacha.',
      pricing: 'From MK 65,000 / year',
      scope: 'SSD storage, SSL encryption & scheduled backups',
      keyPoints: [
        'High-speed SSD storage for responsive web loading',
        'Malawian (.mw) and international domain registration',
        'Scheduled backup routines for data safety',
        'Direct local Kwacha payment via bank or mobile money',
      ],
      ctaText: 'Set Up Hosting',
      action: () => onOpenQuote('Cloud Hosting & Domain'),
      whatsAppMsg: 'Hello TechNix, I need cloud hosting and domain registration.',
    },
    {
      id: 'support',
      label: 'IT Support & Maintenance',
      icon: ShieldCheck,
      tagline: 'Operational IT Assistance',
      heading: 'Rapid IT Support and Ongoing Office Maintenance',
      whoItHelps: 'Offices facing computer disruptions, Wi-Fi drops, or needing structured monthly technology care.',
      narrative: 'When computers fail or network issues interrupt daily operations, TechNix provides rapid technical support in Blantyre and Lilongwe. Through TechNix Care retainers, we provide ongoing preventative servicing and assistance without the expense of a full-time in-house salary.',
      pricing: 'From MK 50,000 / month',
      scope: 'Workstation health, networks & backup routine configuration',
      keyPoints: [
        'Rapid technical response in Blantyre and Lilongwe',
        'Scheduled preventative maintenance visits for office workstations',
        'Office Wi-Fi, router, and printer network troubleshooting',
        'Backup configuration can be included as part of agreed IT support scope',
      ],
      ctaText: 'Request IT Support',
      action: () => onOpenITRescue(),
      whatsAppMsg: 'Hello TechNix, I need IT support assistance for our office.',
    },
    {
      id: 'software',
      label: 'Custom Software',
      icon: Code2,
      tagline: 'Tailored Digital Systems',
      heading: 'Software Engineered Around Your Actual Workflows',
      whoItHelps: 'Businesses, schools, and NGOs outgrowing manual paperwork and disconnected spreadsheets.',
      narrative: 'We build administrative web systems, multi-branch tracking tools, and mobile data applications tailored to how your organisation operates in Malawi, supporting offline field collection and local payment channels.',
      pricing: 'Milestone Quotation',
      scope: 'Requirements scoping, custom development & deployment',
      keyPoints: [
        'Offline-capable mobile and web data entry tools',
        'Inventory tracking, student records, or administrative portals',
        'Management dashboards for operational oversight',
        'Integration with local mobile money payment channels',
      ],
      ctaText: 'Discuss Software Project',
      action: () => onOpenQuote('Custom Software Solution'),
      whatsAppMsg: 'Hello TechNix, I would like to discuss a custom software project.',
    },
    {
      id: 'academy',
      label: 'TechNix Academy',
      icon: GraduationCap,
      tagline: 'Practical Skills Training',
      heading: 'Hands-On Digital Skills Training for Working Teams',
      whoItHelps: 'Administrative staff, finance teams, and professionals looking to improve workplace efficiency.',
      narrative: 'Our masterclasses focus on practical digital competencies that immediately improve everyday productivity: Advanced Microsoft Excel formulas and reports, Power BI data visualization, and workplace network administration.',
      pricing: 'From MK 95,000 / seat',
      scope: 'Instructor-led labs, reference templates & project review',
      keyPoints: [
        'Hands-on lab exercises with real-world scenarios',
        'Small cohorts with direct instructor support',
        'Practical course templates and materials to take back to work',
        'Custom on-site training sessions available for corporate groups',
      ],
      ctaText: 'View Course Schedule',
      action: () => onOpenQuote('TechNix Academy Enrollment'),
      whatsAppMsg: 'Hello TechNix Academy, I would like to inquire about training courses.',
    },
  ];

  const currentCap = capabilities.find(c => c.id === activeStory) || capabilities[0];

  return (
    <section id="capabilities" className="py-24 bg-[#050811] text-white relative">
      {/* Anchor landmarks for navigation */}
      <div id="products-catalog" className="absolute top-0" />
      <div id="business-website" className="absolute top-0" />
      <div id="business-email" className="absolute top-0" />
      <div id="hosting-domains" className="absolute top-0" />
      <div id="it-rescue" className="absolute top-0" />
      <div id="technix-care" className="absolute top-0" />
      <div id="software-solutions" className="absolute top-0" />
      <div id="technix-academy" className="absolute top-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curated Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-mono font-medium uppercase tracking-wider text-sky-400">
            Selected Capability Story
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Technology Systems Supporting Practical Operations
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
            Explore our core service disciplines — from public digital storefronts and authenticated communication to reliable cloud infrastructure and responsive on-call support.
          </p>
        </div>

        {/* Capability Selection: Clean Horizontal Editorial Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-white/10 no-scrollbar">
          {capabilities.map((cap) => {
            const isSelected = cap.id === activeStory;
            const Icon = cap.icon;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveStory(cap.id as any)}
                className={`py-2.5 px-4 text-xs sm:text-sm font-semibold transition-colors shrink-0 flex items-center space-x-2 cursor-pointer border-b-2 -mb-[1px] ${
                  isSelected
                    ? 'border-sky-400 text-sky-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cap.label}</span>
              </button>
            );
          })}
        </div>

        {/* Capability Theater: Left Story Narrative + Right Clean UI Demonstration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Capability Title, Narrative, Primary CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-sky-400">
                {currentCap.tagline}
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                {currentCap.heading}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {currentCap.narrative}
            </p>

            <div className="text-xs font-mono text-slate-400 pt-1">
              <span className="text-slate-400 uppercase">Target: </span>
              <span className="text-slate-300">{currentCap.whoItHelps}</span>
            </div>

            {/* One Primary CTA + Subtle WhatsApp Channel */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={currentCap.action}
                className="px-6 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center space-x-2 cursor-pointer border border-sky-400/30"
              >
                <span>{currentCap.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleWhatsApp(currentCap.whatsAppMsg)}
                className="px-4 py-3 bg-transparent hover:bg-slate-900 text-slate-300 hover:text-emerald-400 border border-slate-800 rounded-xl transition-colors flex items-center space-x-2 text-xs font-semibold cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Quick Inquiry via WhatsApp</span>
              </button>
            </div>
          </div>

          {/* RIGHT: ONE Art-Directed Spatial Visual Metaphor (Environment, Not a Card or Simulated UI) */}
          <div className="lg:col-span-7 relative min-h-[480px] lg:min-h-[540px] flex items-center justify-center p-4 sm:p-8 overflow-hidden">
            {/* Ambient Atmospheric Sheen (Subtle Spatial Glow) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08),transparent_70%)] pointer-events-none" />
            
            {/* 1. BUSINESS WEBSITE: Spatial Architectural Plane (DOMAIN → PRESENCE → VISIBILITY → CONTACT) */}
            {activeStory === 'website' && (
              <div className="relative w-full max-w-lg mx-auto h-[420px] flex flex-col justify-between p-6 sm:p-8 [perspective:1000px]">
                {/* Horizon Grid Lines extending into space */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
                  <div className="absolute w-72 h-72 border border-sky-400/30 rounded-full [transform:rotateX(75deg)]" />
                  <div className="absolute w-96 h-96 border border-white/10 rounded-full [transform:rotateX(75deg)]" />
                </div>

                {/* Floating Architectural Monolith / Digital Building */}
                <div className="relative z-10 my-auto transform -rotate-y-12 rotate-x-6 transition-transform duration-700 hover:rotate-0">
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#0c1836]/90 via-[#070e22]/95 to-[#030612] border border-sky-400/20 shadow-[0_30px_90px_rgba(2,132,199,0.18)] backdrop-blur-md space-y-6">
                    {/* Architectural Coordinate Lines */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-sky-400/80">
                      <span>DIGITAL ARCHITECTURE</span>
                      <span>[ 01 // PRESENCE ]</span>
                    </div>

                    {/* Oversized Typographic Presence */}
                    <div className="space-y-1">
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                        PRESENCE.
                      </div>
                      <div className="text-sm font-mono text-slate-400">
                        The digital front door of your enterprise.
                      </div>
                    </div>

                    {/* Architectural Convergence Lines toward Contact Point */}
                    <div className="relative h-16 border-t border-b border-white/10 flex items-center justify-between px-2">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                        <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                        <span className="font-semibold text-white">yourcompany.mw</span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-sky-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>FOCAL CONTACT POINT</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conceptual Journey: DOMAIN → PRESENCE → VISIBILITY → CONTACT */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400 pt-4 border-t border-white/5">
                  <span className="text-slate-300">DOMAIN</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-white font-bold">PRESENCE</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-slate-300">VISIBILITY</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-emerald-400 font-bold">CONTACT</span>
                </div>
              </div>
            )}

            {/* 2. BUSINESS EMAIL: Typographic Identity Composition (IDENTITY → COMMUNICATION → TRUST) */}
            {activeStory === 'email' && (
              <div className="relative w-full max-w-lg mx-auto h-[420px] flex flex-col justify-between p-6 sm:p-8">
                {/* Subtle Geometric Communication Web Background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
                  <div className="w-80 h-80 border border-sky-400/20 rounded-full" />
                  <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />
                  <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-sky-400/30 to-transparent" />
                </div>

                <div className="text-[11px] font-mono text-sky-400/80 uppercase tracking-widest">
                  Communication Identity
                </div>

                {/* Hero Typographic Anchor */}
                <div className="relative z-10 my-auto space-y-4">
                  <div className="space-y-1">
                    <span className="text-2xl sm:text-3xl font-light text-sky-400/90 font-mono tracking-tight block">
                      director<span className="text-sky-300">@</span>
                    </span>
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight block">
                      yourcompany.mw
                    </span>
                  </div>

                  {/* Flowing Structural Paths to Organizational Nodes */}
                  <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-400">
                    <div className="space-y-1">
                      <span className="text-white font-bold block">TENDERS</span>
                      <span className="text-[11px] text-slate-400">Institutional Bids</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-white font-bold block">BANKING</span>
                      <span className="text-[11px] text-slate-400">Financial Accounts</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-white font-bold block">PARTNERS</span>
                      <span className="text-[11px] text-slate-400">Executive Dialogue</span>
                    </div>
                  </div>
                </div>

                {/* Conceptual Journey: IDENTITY → COMMUNICATION → TRUST */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400 pt-4 border-t border-white/5">
                  <span className="text-white font-bold">IDENTITY</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-slate-300">COMMUNICATION</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-emerald-400 font-bold">TRUST</span>
                </div>
              </div>
            )}

            {/* 3. HOSTING & DOMAINS: Spatial Foundation Metaphor (DOMAIN ↓ WEB ↓ DATA ↓ BACKUP) */}
            {activeStory === 'hosting' && (
              <div className="relative w-full max-w-lg mx-auto h-[420px] flex flex-col justify-between p-6 sm:p-8">
                <div className="text-[11px] font-mono text-sky-400/80 uppercase tracking-widest">
                  Structural Foundation Architecture
                </div>

                {/* Spatial Architectural Layers Rising Above Base (Not Cards - One Coherent Sculpture) */}
                <div className="relative z-10 my-auto py-2 space-y-4 [perspective:900px]">
                  {/* Layer 4: DOMAIN */}
                  <div className="relative mx-auto w-11/12 py-3 px-6 rounded-lg bg-sky-950/40 border border-sky-400/40 shadow-sm flex items-center justify-between text-xs font-mono transform -rotate-x-6 hover:rotate-0 transition-transform">
                    <div className="flex items-center space-x-3">
                      <span className="text-sky-400 font-bold">04</span>
                      <span className="text-white font-bold tracking-wider">DOMAIN</span>
                    </div>
                    <span className="text-slate-400 text-[11px]">.mw National Identity</span>
                  </div>

                  {/* Layer 3: WEB */}
                  <div className="relative mx-auto w-10/12 py-3 px-6 rounded-lg bg-sky-950/50 border border-sky-500/30 shadow-sm flex items-center justify-between text-xs font-mono transform -rotate-x-6 hover:rotate-0 transition-transform">
                    <div className="flex items-center space-x-3">
                      <span className="text-sky-400 font-bold">03</span>
                      <span className="text-white font-bold tracking-wider">WEB</span>
                    </div>
                    <span className="text-slate-400 text-[11px]">Application Runtime</span>
                  </div>

                  {/* Layer 2: DATA */}
                  <div className="relative mx-auto w-9/12 py-3 px-6 rounded-lg bg-sky-950/60 border border-sky-600/30 shadow-sm flex items-center justify-between text-xs font-mono transform -rotate-x-6 hover:rotate-0 transition-transform">
                    <div className="flex items-center space-x-3">
                      <span className="text-sky-400 font-bold">02</span>
                      <span className="text-white font-bold tracking-wider">DATA</span>
                    </div>
                    <span className="text-slate-400 text-[11px]">Structured Storage</span>
                  </div>

                  {/* Layer 1: BACKUP & BASE PLATFORM */}
                  <div className="relative mx-auto w-full py-4 px-6 rounded-xl bg-gradient-to-r from-sky-950 via-[#06122a] to-emerald-950 border-2 border-sky-400/60 shadow-xl flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center space-x-3">
                      <span className="text-emerald-400 font-black">01</span>
                      <div>
                        <span className="text-white font-black tracking-wider block">BACKUP &amp; FOUNDATION</span>
                        <span className="text-[10px] text-slate-300 font-normal">Solid-State Cloud Servers · Billed in Malawi Kwacha</span>
                      </div>
                    </div>
                    <span className="text-emerald-400 font-bold text-[11px]">BEDROCK</span>
                  </div>
                </div>

                <div className="relative z-10 text-center text-xs font-mono text-slate-400 pt-4 border-t border-white/5">
                  THE FOUNDATION UNDERNEATH THE DIGITAL PRESENCE
                </div>
              </div>
            )}

            {/* 4. IT SUPPORT & MAINTENANCE: Connected Workplace Constellation (PEOPLE → DEVICES → NETWORK → SUPPORT) */}
            {activeStory === 'support' && (
              <div className="relative w-full max-w-lg mx-auto h-[420px] flex flex-col justify-between p-6 sm:p-8">
                <div className="text-[11px] font-mono text-sky-400/80 uppercase tracking-widest">
                  Living Connected Workplace
                </div>

                {/* Spatial Constellation Topology */}
                <div className="relative z-10 my-auto flex items-center justify-center py-6">
                  {/* Outer Orbital Orbit Ring */}
                  <div className="absolute w-72 h-72 border border-sky-500/20 rounded-full animate-pulse" />
                  
                  {/* Central Support Node */}
                  <div className="relative z-20 w-28 h-28 rounded-full bg-gradient-to-br from-sky-600/30 via-slate-900 to-[#030612] border-2 border-sky-400/60 flex flex-col items-center justify-center p-3 text-center shadow-xl">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping mb-1" />
                    <span className="text-xs font-mono font-black text-white">SUPPORT</span>
                    <span className="text-[9px] font-mono text-sky-300">CENTRAL PULSE</span>
                  </div>

                  {/* Surrounding Constellation Vertices */}
                  <div className="absolute top-2 left-6 px-3 py-1.5 rounded-lg bg-sky-950/60 border border-white/10 text-xs font-mono text-slate-200">
                    <span className="text-sky-400 font-bold mr-1.5">●</span>PEOPLE
                  </div>

                  <div className="absolute top-2 right-6 px-3 py-1.5 rounded-lg bg-sky-950/60 border border-white/10 text-xs font-mono text-slate-200">
                    <span className="text-sky-400 font-bold mr-1.5">◆</span>DEVICES
                  </div>

                  <div className="absolute bottom-2 left-10 px-3 py-1.5 rounded-lg bg-sky-950/60 border border-white/10 text-xs font-mono text-slate-200">
                    <span className="text-sky-400 font-bold mr-1.5">▲</span>NETWORK
                  </div>

                  <div className="absolute bottom-2 right-10 px-3 py-1.5 rounded-lg bg-sky-950/60 border border-white/10 text-xs font-mono text-slate-200">
                    <span className="text-emerald-400 font-bold mr-1.5">★</span>CONTINUITY
                  </div>
                </div>

                {/* Conceptual Principle */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400 pt-4 border-t border-white/5">
                  <span className="text-white font-bold">PEOPLE</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-white font-bold">DEVICES</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-white font-bold">NETWORK</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-emerald-400 font-bold">SUPPORT</span>
                </div>
              </div>
            )}

            {/* 5. CUSTOM SOFTWARE: Transformation Flow (WORK → DATA → SYSTEM → DECISION) */}
            {activeStory === 'software' && (
              <div className="relative w-full max-w-lg mx-auto h-[420px] flex flex-col justify-between p-6 sm:p-8">
                <div className="text-[11px] font-mono text-sky-400/80 uppercase tracking-widest">
                  Transformation Architecture
                </div>

                {/* Single Elegant Spatial Flow Pipeline (Not 4 Cards) */}
                <div className="relative z-10 my-auto py-8">
                  {/* Connecting Gradient Light Vector */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-sky-500/20 via-sky-400 to-emerald-400" />

                  {/* Flow Stages */}
                  <div className="relative z-10 grid grid-cols-4 gap-2 text-center">
                    {/* Stage 1: WORK */}
                    <div className="space-y-3">
                      <div className="w-8 h-8 rounded-full bg-[#050c1e] border-2 border-sky-400/40 text-sky-300 font-mono text-xs font-bold flex items-center justify-center mx-auto shadow-md">
                        01
                      </div>
                      <div>
                        <div className="text-xs font-black font-mono text-white tracking-wider">WORK</div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">Everyday Tasks</div>
                      </div>
                    </div>

                    {/* Stage 2: DATA */}
                    <div className="space-y-3">
                      <div className="w-8 h-8 rounded-full bg-[#050c1e] border-2 border-sky-400/60 text-sky-300 font-mono text-xs font-bold flex items-center justify-center mx-auto shadow-md">
                        02
                      </div>
                      <div>
                        <div className="text-xs font-black font-mono text-white tracking-wider">DATA</div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">Structured Input</div>
                      </div>
                    </div>

                    {/* Stage 3: SYSTEM */}
                    <div className="space-y-3">
                      <div className="w-8 h-8 rounded-full bg-[#050c1e] border-2 border-sky-400 text-white font-mono text-xs font-bold flex items-center justify-center mx-auto shadow-md">
                        03
                      </div>
                      <div>
                        <div className="text-xs font-black font-mono text-white tracking-wider">SYSTEM</div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">Automated Logic</div>
                      </div>
                    </div>

                    {/* Stage 4: DECISION */}
                    <div className="space-y-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/30 border-2 border-emerald-400 text-emerald-300 font-mono text-xs font-bold flex items-center justify-center mx-auto shadow-md">
                        04
                      </div>
                      <div>
                        <div className="text-xs font-black font-mono text-emerald-400 tracking-wider">DECISION</div>
                        <div className="text-[10px] text-emerald-300/80 font-mono mt-0.5">Executive Clarity</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conceptual Journey: WORK → DATA → SYSTEM → DECISION */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400 pt-4 border-t border-white/5">
                  <span className="text-white font-bold">WORK</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-slate-300">DATA</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-white font-bold">SYSTEM</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-emerald-400 font-bold">DECISION</span>
                </div>
              </div>
            )}

            {/* 6. TECHNIX ACADEMY: Rising Spatial Trajectory (FOUNDATION → PRACTICE → CAPABILITY → CONFIDENCE) */}
            {activeStory === 'academy' && (
              <div className="relative w-full max-w-lg mx-auto h-[420px] flex flex-col justify-between p-6 sm:p-8">
                <div className="text-[11px] font-mono text-sky-400/80 uppercase tracking-widest">
                  Capability Elevation Trajectory
                </div>

                {/* Rising Spatial Incline (Ascending Stepped Planes) */}
                <div className="relative z-10 my-auto py-4 space-y-3">
                  {/* Step 4: CONFIDENCE (Summit) */}
                  <div className="ml-auto w-3/4 p-3 rounded-lg bg-gradient-to-r from-amber-950/60 to-emerald-950/60 border border-amber-400/60 flex items-center justify-between text-xs font-mono shadow-md">
                    <div className="flex items-center space-x-3">
                      <span className="text-amber-400 font-black">04</span>
                      <span className="text-white font-black tracking-wider">CONFIDENCE</span>
                    </div>
                    <span className="text-amber-400 font-semibold text-[11px]">Independent Mastery</span>
                  </div>

                  {/* Step 3: CAPABILITY */}
                  <div className="mx-auto w-4/5 p-3 rounded-lg bg-sky-950/50 border border-sky-400/30 flex items-center justify-between text-xs font-mono shadow-sm">
                    <div className="flex items-center space-x-3">
                      <span className="text-sky-400 font-bold">03</span>
                      <span className="text-white font-bold tracking-wider">CAPABILITY</span>
                    </div>
                    <span className="text-slate-400 text-[11px]">Advanced Dashboarding</span>
                  </div>

                  {/* Step 2: PRACTICE */}
                  <div className="mr-auto w-4/5 p-3 rounded-lg bg-sky-950/40 border border-sky-500/20 flex items-center justify-between text-xs font-mono shadow-sm">
                    <div className="flex items-center space-x-3">
                      <span className="text-sky-400 font-bold">02</span>
                      <span className="text-white font-bold tracking-wider">PRACTICE</span>
                    </div>
                    <span className="text-slate-400 text-[11px]">Real Business Datasets</span>
                  </div>

                  {/* Step 1: FOUNDATION (Base) */}
                  <div className="mr-auto w-3/4 p-3 rounded-lg bg-[#040916] border border-white/10 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center space-x-3">
                      <span className="text-slate-400 font-bold">01</span>
                      <span className="text-slate-200 font-bold tracking-wider">FOUNDATION</span>
                    </div>
                    <span className="text-slate-400 text-[11px]">Core Spreadsheet Logic</span>
                  </div>
                </div>

                {/* Conceptual Journey: FOUNDATION → PRACTICE → CAPABILITY → CONFIDENCE */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400 pt-4 border-t border-white/5">
                  <span className="text-slate-300">FOUNDATION</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-slate-300">PRACTICE</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-white font-bold">CAPABILITY</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-amber-400 font-bold">CONFIDENCE</span>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* BELOW: Small Supporting Facts / Scope / Starting Price (Containerless with Simple Dividers) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          <div className="space-y-1">
            <span className="text-slate-500 uppercase font-mono block">Starting Investment</span>
            <span className="text-base font-bold font-mono text-emerald-400">{currentCap.pricing}</span>
            <span className="text-slate-400 block">Transparent Kwacha billing</span>
          </div>

          <div className="space-y-1">
            <span className="text-slate-500 uppercase font-mono block">Engagement Scope</span>
            <span className="text-slate-200 font-medium block">{currentCap.scope}</span>
            <span className="text-slate-400 block">Defined in written quotation</span>
          </div>

          <div className="space-y-1 sm:col-span-2">
            <span className="text-slate-500 uppercase font-mono block mb-1">Key Deliverables</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {currentCap.keyPoints.map((pt, i) => (
                <div key={i} className="flex items-center space-x-1.5 text-slate-300">
                  <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
