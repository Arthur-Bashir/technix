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
              <div className="relative w-full max-w-lg mx-auto h-[420px] flex flex-col justify-between p-6 sm:p-8 [perspective:1200px]">
                {/* Horizon Grid Lines extending into space */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
                  <div className="absolute w-[36rem] h-[36rem] border border-sky-400/15 rounded-full [transform:rotateX(75deg)]" />
                  <div className="absolute w-[48rem] h-[48rem] border border-white/5 rounded-full [transform:rotateX(75deg)]" />
                </div>

                {/* Floating Architectural Monolith / Digital Building */}
                <div className="relative z-10 my-auto transform -rotate-y-6 rotate-x-4 transition-transform duration-1000 hover:rotate-0">
                  {/* Floating horizontal architectural plane */}
                  <div className="absolute -inset-x-16 top-1/2 h-48 bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent backdrop-blur-sm [transform:rotateX(35deg) translateY(-15%)] pointer-events-none" />
                  
                  {/* Vertical architectural plane */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-sky-400/60 to-transparent opacity-60" />
                  
                  {/* Thin structural lines converging toward contact point */}
                  <div className="absolute inset-x-0 top-[60%] h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />
                  <div className="absolute left-1/2 -translate-x-1/2 h-40 w-px bg-gradient-to-t from-sky-400/30 to-transparent top-[60%]" />

                  {/* Oversized Typographic Presence - Floating independently */}
                  <div className="relative space-y-2">
                    <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tight leading-none text-center [text-shadow:0_10px_120px_rgba(14,165,233,0.25)]">
                      PRESENCE
                    </div>
                  </div>

                  {/* Domain floating independently */}
                  <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-3 text-xs font-mono text-slate-200 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span className="font-semibold text-white tracking-wide">yourcompany.mw</span>
                  </div>
                </div>

                {/* Conceptual Journey: DOMAIN → PRESENCE → VISIBILITY → CONTACT */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-500 pt-4">
                  <span className="text-slate-300">DOMAIN</span>
                  <span className="text-sky-400/80">→</span>
                  <span className="text-white font-semibold">PRESENCE</span>
                  <span className="text-sky-400/80">→</span>
                  <span className="text-slate-300">VISIBILITY</span>
                  <span className="text-sky-400/80">→</span>
                  <span className="text-slate-300">CONTACT</span>
                </div>
              </div>
            )}

            {/* 2. BUSINESS EMAIL: Typographic Identity Composition (IDENTITY → COMMUNICATION → TRUST) */}
            {activeStory === 'email' && (
              <div className="relative w-full max-w-lg mx-auto h-[420px] flex flex-col justify-between p-6 sm:p-8">
                {/* Subtle Geometric Communication Web Background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15">
                  <div className="w-[32rem] h-[32rem] border border-sky-400/10 rounded-full animate-[pulse_12s_ease-in-out_infinite]" />
                  <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-sky-400/15 to-transparent" />
                  <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-sky-400/12 to-transparent rotate-45" />
                  <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-sky-400/10 to-transparent -rotate-45" />
                </div>

                {/* Hero Typographic Anchor - Poster-like, floating independently */}
                <div className="relative z-10 my-auto space-y-6 text-center">
                  <div className="space-y-2">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-light text-sky-400/90 font-mono tracking-tight block [text-shadow:0_8px_100px_rgba(14,165,233,0.2)]">
                      director<span className="text-sky-300">@</span>
                    </span>
                    <span className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight block [text-shadow:0_12px_120px_rgba(255,255,255,0.08)]">
                      yourcompany.mw
                    </span>
                  </div>

                  {/* Simple typographic anchors positioned in space - visually subordinate */}
                  <div className="relative flex items-center justify-center gap-8 sm:gap-12 text-xs font-mono text-slate-400 pt-8">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                    <span className="text-slate-300 tracking-widest">TENDERS</span>
                    <span className="text-slate-300 tracking-widest">BANKING</span>
                    <span className="text-slate-300 tracking-widest">PARTNERS</span>
                  </div>
                </div>

                {/* Conceptual Journey: IDENTITY → COMMUNICATION → TRUST */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-500 pt-4">
                  <span className="text-white font-semibold">IDENTITY</span>
                  <span className="text-sky-400/80">→</span>
                  <span className="text-slate-300">COMMUNICATION</span>
                  <span className="text-sky-400/80">→</span>
                  <span className="text-slate-300">TRUST</span>
                </div>
              </div>
            )}

            {/* 3. HOSTING & DOMAINS: Spatial Foundation Metaphor (DOMAIN ↓ WEB ↓ DATA ↓ BACKUP) */}
            {activeStory === 'hosting' && (
              <div className="relative w-full max-w-lg mx-auto h-[420px] flex flex-col justify-between p-6 sm:p-8">
                {/* One coherent architectural sculpture - four horizontal planes connected by vertical spine */}
                <div className="relative z-10 my-auto [perspective:1000px] h-72">
                  {/* Vertical structural spine */}
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400/40 via-sky-400/30 to-transparent" />
                  
                  {/* Plane 1: BACKUP - deepest/furthest back, most illuminated at base */}
                  <div className="absolute w-[92%] right-0 top-[85%] h-6 bg-gradient-to-r from-sky-500/25 via-sky-500/15 to-transparent backdrop-blur-sm transform -rotate-x-12 -translate-y-1/2 opacity-90 [transform-origin:left]" />
                  <div className="absolute left-6 top-[85%] -translate-y-1/2 pl-3 text-xs font-mono text-white font-semibold tracking-wider">
                    BACKUP
                  </div>
                  
                  {/* Plane 2: DATA */}
                  <div className="absolute w-[88%] right-0 top-[62%] h-6 bg-gradient-to-r from-sky-500/20 via-sky-500/12 to-transparent backdrop-blur-sm transform -rotate-x-12 -translate-y-1/2 opacity-80 [transform-origin:left]" />
                  <div className="absolute left-6 top-[62%] -translate-y-1/2 pl-3 text-xs font-mono text-white font-semibold tracking-wider">
                    DATA
                  </div>
                  
                  {/* Plane 3: WEB */}
                  <div className="absolute w-[84%] right-0 top-[39%] h-6 bg-gradient-to-r from-sky-500/16 via-sky-500/10 to-transparent backdrop-blur-sm transform -rotate-x-12 -translate-y-1/2 opacity-75 [transform-origin:left]" />
                  <div className="absolute left-6 top-[39%] -translate-y-1/2 pl-3 text-xs font-mono text-white font-semibold tracking-wider">
                    WEB
                  </div>
                  
                  {/* Plane 4: DOMAIN - highest, most prominent */}
                  <div className="absolute w-[80%] right-0 top-[16%] h-6 bg-gradient-to-r from-sky-500/14 via-sky-500/8 to-transparent backdrop-blur-sm transform -rotate-x-12 -translate-y-1/2 opacity-70 [transform-origin:left]" />
                  <div className="absolute left-6 top-[16%] -translate-y-1/2 pl-3 text-xs font-mono text-white font-semibold tracking-wider">
                    DOMAIN
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-500 pt-4">
                  <span className="text-slate-300">DOMAIN</span>
                  <span className="text-sky-400/80">↓</span>
                  <span className="text-slate-300">WEB</span>
                  <span className="text-sky-400/80">↓</span>
                  <span className="text-slate-300">DATA</span>
                  <span className="text-sky-400/80">↓</span>
                  <span className="text-white font-semibold">BACKUP</span>
                </div>
              </div>
            )}

            {/* 4. IT SUPPORT & MAINTENANCE: Connected Workplace Constellation (PEOPLE → DEVICES → NETWORK → SUPPORT) */}
            {activeStory === 'support' && (
              <div className="relative w-full max-w-lg mx-auto h-[420px] flex flex-col justify-between p-6 sm:p-8">
                {/* Spatial Constellation Topology */}
                <div className="relative z-10 my-auto flex items-center justify-center py-6">
                  {/* Subtle orbital ring */}
                  <div className="absolute w-72 h-72 border border-sky-500/10 rounded-full" />
                  
                  {/* Connecting lines to nodes */}
                  <svg className="absolute w-72 h-72 pointer-events-none opacity-40" viewBox="0 0 288 288">
                    <line x1="144" y1="144" x2="72" y2="72" stroke="rgba(56,189,248,0.4)" strokeWidth="0.5" />
                    <line x1="144" y1="144" x2="216" y2="72" stroke="rgba(56,189,248,0.4)" strokeWidth="0.5" />
                    <line x1="144" y1="144" x2="72" y2="216" stroke="rgba(56,189,248,0.4)" strokeWidth="0.5" />
                    <line x1="144" y1="144" x2="216" y2="216" stroke="rgba(56,189,248,0.4)" strokeWidth="0.5" />
                  </svg>
                  
                  {/* Central Support Node */}
                  <div className="relative z-20 w-24 h-24 rounded-full bg-gradient-to-br from-sky-500/25 via-sky-500/10 to-transparent flex flex-col items-center justify-center text-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mb-1" />
                    <span className="text-xs font-mono font-semibold text-white">SUPPORT</span>
                  </div>

                  {/* Abstract nodes - PEOPLE */}
                  <div className="absolute top-8 left-12 flex items-center gap-2 text-xs font-mono text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    <span>PEOPLE</span>
                  </div>

                  {/* Abstract nodes - DEVICES */}
                  <div className="absolute top-8 right-12 flex items-center gap-2 text-xs font-mono text-slate-200">
                    <span className="w-1.5 h-3 bg-sky-400/80" />
                    <span>DEVICES</span>
                  </div>

                  {/* Abstract nodes - NETWORK */}
                  <div className="absolute bottom-8 left-16 flex items-center gap-2 text-xs font-mono text-slate-200">
                    <span className="w-3 h-1 bg-sky-400/80" />
                    <span>NETWORK</span>
                  </div>

                  {/* Abstract nodes - CONTINUITY */}
                  <div className="absolute bottom-8 right-14 flex items-center gap-2 text-xs font-mono text-slate-200">
                    <span className="w-2 h-2 bg-sky-400 rotate-45" />
                    <span>CONTINUITY</span>
                  </div>
                </div>

                {/* Conceptual Principle */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-500 pt-4">
                  <span className="text-slate-300">PEOPLE</span>
                  <span className="text-sky-400/80">→</span>
                  <span className="text-slate-300">DEVICES</span>
                  <span className="text-sky-400/80">→</span>
                  <span className="text-slate-300">NETWORK</span>
                  <span className="text-sky-400/80">→</span>
                  <span className="text-white font-semibold">SUPPORT</span>
                </div>
              </div>
            )}

            {/* 5. CUSTOM SOFTWARE: Transformation Flow - Single continuous process sculpture */}
            {activeStory === 'software' && (
              <div className="relative w-full max-w-lg mx-auto h-[420px] flex flex-col justify-between p-6 sm:p-8">
                {/* Single flowing line system - continuous transformation */}
                <div className="relative z-10 my-auto py-12">
                  {/* Main flow line with subtle gradient */}
                  <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 h-px">
                    <svg className="w-full h-full" viewBox="0 0 100 1" preserveAspectRatio="none">
                      <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="url(#flowGradient)" strokeWidth="0.8" opacity="0.6" />
                      <defs>
                        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(56,189,248,0.3)" />
                          <stop offset="50%" stopColor="rgba(56,189,248,0.8)" />
                          <stop offset="100%" stopColor="rgba(16,185,129,0.8)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Flow stages along the line - no circular containers, just points and typography */}
                  <div className="relative grid grid-cols-4 gap-4">
                    {/* WORK - scattered inputs */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-2 h-2 rounded-full bg-sky-400 mt-6" />
                      <div className="text-center mt-2">
                        <div className="text-xs font-mono text-white tracking-widest">WORK</div>
                      </div>
                    </div>

                    {/* DATA - becomes organized */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-2 h-2 rounded-full bg-sky-400 mt-6" />
                      <div className="text-center mt-2">
                        <div className="text-xs font-mono text-white tracking-widest">DATA</div>
                      </div>
                    </div>

                    {/* SYSTEM - becomes structured */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-2 h-2 rounded-full bg-sky-400 mt-6" />
                      <div className="text-center mt-2">
                        <div className="text-xs font-mono text-white tracking-widest">SYSTEM</div>
                      </div>
                    </div>

                    {/* DECISION - resolves into focal point */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.5)] mt-6" />
                      <div className="text-center mt-2">
                        <div className="text-xs font-mono text-emerald-300 tracking-widest">DECISION</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conceptual Journey */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-500 pt-4">
                  <span className="text-slate-300">WORK</span>
                  <span className="text-sky-400/80">→</span>
                  <span className="text-slate-300">DATA</span>
                  <span className="text-sky-400/80">→</span>
                  <span className="text-slate-300">SYSTEM</span>
                  <span className="text-sky-400/80">→</span>
                  <span className="text-white font-semibold">DECISION</span>
                </div>
              </div>
            )}

            {/* 6. TECHNIX ACADEMY: Rising Spatial Trajectory - ascending planes with increasing height/light */}
            {activeStory === 'academy' && (
              <div className="relative w-full max-w-lg mx-auto h-[420px] flex flex-col justify-between p-6 sm:p-8">
                {/* Ascending spatial composition - four ascending planes, increasing height/light, summit at top */}
                <div className="relative z-10 my-auto h-64 [perspective:1000px]">
                  {/* Subtle upward trajectory line */}
                  <svg className="absolute left-8 top-0 bottom-0 pointer-events-none opacity-25" width="2" height="256" viewBox="0 0 2 256">
                    <line x1="1" y1="256" x2="1" y2="0" stroke="url(#upwardGradient)" strokeWidth="1" />
                    <defs>
                      <linearGradient id="upwardGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="rgba(56,189,248,0.3)" />
                        <stop offset="60%" stopColor="rgba(56,189,248,0.6)" />
                        <stop offset="100%" stopColor="rgba(251,191,36,0.8)" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Plane 1: FOUNDATION - base level */}
                  <div className="absolute left-10 bottom-[10%] w-3/4 h-4 bg-gradient-to-r from-white/10 to-transparent transform -rotate-x-8 opacity-40" />
                  <div className="absolute left-12 bottom-[10%] -translate-y-1/2 text-xs font-mono text-slate-300 tracking-widest">
                    FOUNDATION
                  </div>

                  {/* Plane 2: PRACTICE */}
                  <div className="absolute left-10 bottom-[30%] w-4/5 h-5 bg-gradient-to-r from-sky-500/15 to-transparent transform -rotate-x-8 opacity-55" />
                  <div className="absolute left-12 bottom-[30%] -translate-y-1/2 text-xs font-mono text-white tracking-widest">
                    PRACTICE
                  </div>

                  {/* Plane 3: CAPABILITY */}
                  <div className="absolute left-10 bottom-[55%] w-5/6 h-6 bg-gradient-to-r from-sky-500/20 to-transparent transform -rotate-x-8 opacity-70" />
                  <div className="absolute left-12 bottom-[55%] -translate-y-1/2 text-xs font-mono text-white tracking-widest">
                    CAPABILITY
                  </div>

                  {/* Plane 4: CONFIDENCE - summit, highest light */}
                  <div className="absolute left-10 bottom-[85%] w-full h-8 bg-gradient-to-r from-amber-500/30 via-amber-500/15 to-transparent transform -rotate-x-8 opacity-90 [box-shadow:0_0_40px_rgba(251,191,36,0.2)]" />
                  <div className="absolute left-12 bottom-[85%] -translate-y-1/2 text-xs font-mono text-amber-200 font-semibold tracking-widest">
                    CONFIDENCE
                  </div>
                </div>

                {/* Conceptual Journey */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-500 pt-4">
                  <span className="text-slate-300">FOUNDATION</span>
                  <span className="text-sky-400/80">→</span>
                  <span className="text-slate-300">PRACTICE</span>
                  <span className="text-sky-400/80">→</span>
                  <span className="text-slate-300">CAPABILITY</span>
                  <span className="text-sky-400/80">→</span>
                  <span className="text-white font-semibold">CONFIDENCE</span>
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
