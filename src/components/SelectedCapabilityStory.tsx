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

          {/* RIGHT: ONE Art-Directed Technology Design Object (Spatial, Typographic, Restrained) */}
          <div className="lg:col-span-7 relative min-h-[460px] lg:min-h-[520px] flex items-center justify-center p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#070e22]/85 via-[#040814]/90 to-[#02050e] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
            {/* Ambient Atmospheric Radial Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_65%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.06),transparent_65%)] pointer-events-none" />
            
            {/* 1. BUSINESS WEBSITE: Spatial Architectural Plane (Design Object, Not a Browser Chrome Window) */}
            {activeStory === 'website' && (
              <div className="relative w-full max-w-lg mx-auto [perspective:1200px]">
                {/* Floating Architectural Surface */}
                <div className="relative bg-gradient-to-br from-[#0c1630] via-[#070e22] to-[#030713] border border-sky-400/30 rounded-2xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(2,132,199,0.25)] transform -rotate-y-6 rotate-x-3 transition-transform duration-700 hover:rotate-0">
                  {/* Architectural Top Fragments */}
                  <div className="flex items-center justify-between pb-5 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 rounded-md bg-sky-500/20 border border-sky-400 flex items-center justify-center">
                        <div className="w-2 h-2 bg-sky-400 rounded-sm" />
                      </div>
                      <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">
                        APEX HOLDINGS
                      </span>
                    </div>

                    <div className="hidden sm:flex items-center space-x-3 text-[10px] font-mono text-slate-400">
                      <span>SERVICES</span>
                      <span className="text-slate-600">·</span>
                      <span>PROJECTS</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-sky-400">CONTACT</span>
                    </div>
                  </div>

                  {/* Giant Typographic Billboard Headline */}
                  <div className="py-6 space-y-2">
                    <div className="text-[11px] font-mono text-sky-400 uppercase tracking-widest">
                      Digital Commercial Front-Door
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-[1.05]">
                      INSTITUTIONAL<br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-slate-200 to-sky-400">
                        PRESENCE.
                      </span>
                    </div>
                  </div>

                  {/* Abstract Visual Media Zone */}
                  <div className="h-28 rounded-xl bg-gradient-to-r from-sky-950/60 via-slate-900/80 to-[#050a18] border border-sky-500/20 p-4 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-sky-500/10 blur-xl pointer-events-none" />
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>COMMERCIAL STANDARD</span>
                      <span className="text-emerald-400">STATUS: VERIFIED</span>
                    </div>
                    <div className="text-xs text-slate-300 max-w-xs font-normal">
                      Structured for executive credibility, procurement tenders, and mobile customer inquiries.
                    </div>
                  </div>

                  {/* Direct Commercial Action Fragment */}
                  <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-500/20 border border-sky-400/40 text-sky-200 font-mono text-[11px] font-semibold">
                      <span>[ INITIATE CLIENT CONTACT ]</span>
                    </div>

                    <span className="text-[11px] font-mono text-slate-400">
                      5–10 Day Delivery
                    </span>
                  </div>

                  {/* Floating Domain Anchor Chip */}
                  <div className="absolute -bottom-3.5 right-6 px-3.5 py-1.5 rounded-full bg-[#030816] border border-sky-400/50 shadow-xl flex items-center space-x-2 text-xs font-mono text-sky-300 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-semibold">apex-holdings.mw</span>
                  </div>
                </div>
              </div>
            )}

            {/* 2. BUSINESS EMAIL: Typographic Identity Composition (Not an Inbox Window) */}
            {activeStory === 'email' && (
              <div className="w-full max-w-lg mx-auto space-y-8 relative">
                {/* Subtle Geometric Communication Web */}
                <div className="relative p-6 sm:p-8 rounded-2xl bg-[#030713]/80 border border-sky-500/20">
                  <div className="text-[11px] font-mono text-sky-400 uppercase tracking-widest mb-3">
                    Organisational Domain Identity
                  </div>

                  {/* Hero Typographic Identity */}
                  <div className="space-y-1 mb-6">
                    <span className="text-2xl sm:text-3xl font-light text-sky-400/80 font-mono block">
                      director<span className="text-sky-300 font-bold">@</span>
                    </span>
                    <span className="text-3xl sm:text-5xl font-black text-white tracking-tight block">
                      yourcompany.mw
                    </span>
                  </div>

                  {/* Radiating Institutional Endpoints */}
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        Tender Proposals &amp; Bids
                      </span>
                      <span className="text-emerald-400 font-semibold">DKIM Authenticated</span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        Commercial Banking &amp; Audits
                      </span>
                      <span className="text-emerald-400 font-semibold">SPF Verified</span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        Multi-Device Smartphone Sync
                      </span>
                      <span className="text-slate-300">Outlook · Mail · Android</span>
                    </div>
                  </div>
                </div>

                {/* Conceptual Identity Progression Flow */}
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400 px-2">
                  <span className="text-white font-bold">PROFESSIONAL IDENTITY</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-white font-bold">AUTHENTICATED DISPATCH</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-emerald-400 font-bold">INSTITUTIONAL TRUST</span>
                </div>
              </div>
            )}

            {/* 3. HOSTING: Spatial Foundation Metaphor (Architecture, Not 4 Cards) */}
            {activeStory === 'hosting' && (
              <div className="w-full max-w-lg mx-auto space-y-6">
                <div className="text-[11px] font-mono text-sky-400 uppercase tracking-widest">
                  Foundational Infrastructure Stack
                </div>

                {/* Ascending Spatial Architecture Stack */}
                <div className="space-y-2 relative">
                  {/* Layer 04 - Domain & Gateway */}
                  <div className="p-3.5 rounded-xl bg-[#0a142c]/90 border border-sky-400/40 flex items-center justify-between text-xs font-mono shadow-md transform hover:translate-x-1 transition-transform">
                    <div className="flex items-center space-x-3">
                      <span className="w-6 h-6 rounded-md bg-sky-500/20 text-sky-300 flex items-center justify-center font-bold text-[11px]">
                        04
                      </span>
                      <span className="text-white font-bold">DOMAIN GATEWAY &amp; DNS</span>
                    </div>
                    <span className="text-sky-300 text-[11px]">.mw National Registry</span>
                  </div>

                  {/* Layer 03 - Web Application Runtime */}
                  <div className="p-3.5 rounded-xl bg-[#081024]/90 border border-sky-500/30 flex items-center justify-between text-xs font-mono shadow-md transform hover:translate-x-1 transition-transform">
                    <div className="flex items-center space-x-3">
                      <span className="w-6 h-6 rounded-md bg-sky-500/20 text-sky-300 flex items-center justify-center font-bold text-[11px]">
                        03
                      </span>
                      <span className="text-white font-bold">WEB &amp; SYSTEM RUNTIME</span>
                    </div>
                    <span className="text-slate-300 text-[11px]">Fast Responsive Delivery</span>
                  </div>

                  {/* Layer 02 - Data Persistence & Storage */}
                  <div className="p-3.5 rounded-xl bg-[#060c1d]/90 border border-sky-600/25 flex items-center justify-between text-xs font-mono shadow-md transform hover:translate-x-1 transition-transform">
                    <div className="flex items-center space-x-3">
                      <span className="w-6 h-6 rounded-md bg-sky-500/20 text-sky-300 flex items-center justify-center font-bold text-[11px]">
                        02
                      </span>
                      <span className="text-white font-bold">PERSISTENCE &amp; BACKUPS</span>
                    </div>
                    <span className="text-slate-300 text-[11px]">Routine Cloud Preservation</span>
                  </div>

                  {/* Layer 01 - Heavy Base Plinth Foundation */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-sky-950 via-[#07132a] to-emerald-950/70 border-2 border-sky-400/60 flex items-center justify-between text-xs font-mono shadow-xl">
                    <div className="flex items-center space-x-3">
                      <span className="w-6 h-6 rounded-md bg-sky-400 text-slate-950 flex items-center justify-center font-black text-[11px]">
                        01
                      </span>
                      <div>
                        <span className="text-white font-black block">SOLID-STATE CLOUD FOUNDATION</span>
                        <span className="text-[10px] text-sky-300 font-normal">Local MWK Billing · No Foreign Forex Surcharges</span>
                      </div>
                    </div>
                    <span className="text-emerald-400 font-bold text-[11px]">ACTIVE CORE</span>
                  </div>
                </div>

                <div className="pt-2 text-center text-xs font-mono text-slate-400">
                  THE FOUNDATION THAT EVERYTHING ELSE SITS ON
                </div>
              </div>
            )}

            {/* 4. IT SUPPORT: Connected Workplace Topology (People -> Devices -> Network -> Support) */}
            {activeStory === 'support' && (
              <div className="w-full max-w-lg mx-auto space-y-6">
                <div className="text-[11px] font-mono text-sky-400 uppercase tracking-widest">
                  Connected Workplace Topology
                </div>

                {/* Central Support Node with Radiating Stations */}
                <div className="relative p-6 sm:p-7 rounded-2xl bg-[#040816]/90 border border-sky-500/25 space-y-4">
                  {/* Central Node */}
                  <div className="p-3 rounded-xl bg-gradient-to-r from-sky-950 to-[#07132e] border border-sky-400/50 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <div>
                        <span className="text-xs font-mono font-bold text-white block">TECHNIX CENTRAL CARE HUB</span>
                        <span className="text-[10px] text-slate-400 font-mono">Blantyre Headquarters &amp; Lilongwe Operations Hub</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold">Active Dispatch</span>
                  </div>

                  {/* Connected Workstation Nodes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1">
                      <span className="text-sky-300 font-semibold block">01 PEOPLE</span>
                      <span className="text-slate-300 text-[11px] block">Executive, finance &amp; operational teams</span>
                    </div>

                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1">
                      <span className="text-sky-300 font-semibold block">02 DEVICES</span>
                      <span className="text-slate-300 text-[11px] block">Laptops, desktops &amp; branch terminals</span>
                    </div>

                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1">
                      <span className="text-sky-300 font-semibold block">03 NETWORK</span>
                      <span className="text-slate-300 text-[11px] block">Office Wi-Fi, routers &amp; secure firewalls</span>
                    </div>

                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1">
                      <span className="text-sky-300 font-semibold block">04 ON-CALL SUPPORT</span>
                      <span className="text-slate-300 text-[11px] block">Rapid on-site triage &amp; remote helpdesk</span>
                    </div>
                  </div>
                </div>

                {/* Typographic System Principle */}
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400 px-2">
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

            {/* 5. SOFTWARE: Spatial Workflow (WORK -> DATA -> SYSTEM -> DECISION as One Integrated System) */}
            {activeStory === 'software' && (
              <div className="w-full max-w-lg mx-auto space-y-6">
                <div className="text-[11px] font-mono text-sky-400 uppercase tracking-widest">
                  Integrated Operational Data Architecture
                </div>

                {/* Spatial Progression Visual Flow */}
                <div className="relative p-6 sm:p-7 rounded-2xl bg-[#040816]/90 border border-sky-500/25 space-y-4">
                  {/* Step Progression Chain */}
                  <div className="space-y-3 relative">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-sky-400 text-sm">01</span>
                        <div>
                          <span className="text-white font-bold block">WORK</span>
                          <span className="text-[11px] text-slate-400 font-normal">Daily operational routines &amp; staff field activity</span>
                        </div>
                      </div>
                      <span className="text-slate-500 text-xs">INPUT</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-sky-400 text-sm">02</span>
                        <div>
                          <span className="text-white font-bold block">DATA</span>
                          <span className="text-[11px] text-slate-400 font-normal">Offline-first mobile entry, barcode scanning &amp; sync</span>
                        </div>
                      </div>
                      <span className="text-slate-500 text-xs">CAPTURE</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-sky-400 text-sm">03</span>
                        <div>
                          <span className="text-white font-bold block">SYSTEM</span>
                          <span className="text-[11px] text-slate-400 font-normal">Automated validation rules, invoices &amp; reconciliations</span>
                        </div>
                      </div>
                      <span className="text-slate-500 text-xs">ENGINE</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-gradient-to-r from-sky-950 via-[#07132a] to-emerald-950/70 border border-sky-400/50 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-emerald-400 text-sm">04</span>
                        <div>
                          <span className="text-white font-bold block">DECISION</span>
                          <span className="text-[11px] text-sky-300 font-normal">Structured executive metrics &amp; financial reports</span>
                        </div>
                      </div>
                      <span className="text-emerald-400 font-bold text-xs">OUTCOME</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400 px-2">
                  <span className="text-white font-bold">WORK</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-white font-bold">DATA</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-white font-bold">SYSTEM</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-emerald-400 font-bold">DECISION</span>
                </div>
              </div>
            )}

            {/* 6. ACADEMY: Progression as Growth (Foundation -> Practice -> Capability -> Confidence) */}
            {activeStory === 'academy' && (
              <div className="w-full max-w-lg mx-auto space-y-6">
                <div className="text-[11px] font-mono text-sky-400 uppercase tracking-widest">
                  Team Capability Elevation Journey
                </div>

                {/* Ascending Stepped Growth Architecture */}
                <div className="space-y-3 relative p-6 sm:p-7 rounded-2xl bg-[#040816]/90 border border-sky-500/25">
                  {/* Tier 04 - Confidence */}
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-950/60 to-emerald-950/60 border border-amber-400/50 flex items-center justify-between text-xs font-mono shadow-md">
                    <div className="flex items-center space-x-3">
                      <span className="w-6 h-6 rounded-md bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xs">
                        04
                      </span>
                      <div>
                        <span className="text-white font-bold block">CONFIDENCE</span>
                        <span className="text-[11px] text-slate-300">Independent execution without external software dependency</span>
                      </div>
                    </div>
                    <span className="text-amber-400 font-bold text-xs">MASTERY</span>
                  </div>

                  {/* Tier 03 - Capability */}
                  <div className="p-3 rounded-xl bg-[#09152e]/90 border border-sky-400/30 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center space-x-3">
                      <span className="w-6 h-6 rounded-md bg-sky-500/20 text-sky-300 flex items-center justify-center font-bold text-xs">
                        03
                      </span>
                      <div>
                        <span className="text-white font-bold block">CAPABILITY</span>
                        <span className="text-[11px] text-slate-300">Power BI visual dashboards &amp; automated data models</span>
                      </div>
                    </div>
                    <span className="text-slate-400 text-[11px]">ADVANCED</span>
                  </div>

                  {/* Tier 02 - Practice */}
                  <div className="p-3 rounded-xl bg-[#060e20]/90 border border-sky-500/20 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center space-x-3">
                      <span className="w-6 h-6 rounded-md bg-sky-500/20 text-sky-300 flex items-center justify-center font-bold text-xs">
                        02
                      </span>
                      <div>
                        <span className="text-white font-bold block">PRACTICE</span>
                        <span className="text-[11px] text-slate-300">Real workplace scenarios with authentic Malawian datasets</span>
                      </div>
                    </div>
                    <span className="text-slate-400 text-[11px]">APPLIED</span>
                  </div>

                  {/* Tier 01 - Foundation */}
                  <div className="p-3 rounded-xl bg-[#040816]/90 border border-white/10 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center space-x-3">
                      <span className="w-6 h-6 rounded-md bg-white/10 text-slate-300 flex items-center justify-center font-bold text-xs">
                        01
                      </span>
                      <div>
                        <span className="text-white font-bold block">FOUNDATION</span>
                        <span className="text-[11px] text-slate-300">Core spreadsheet disciplines, logic &amp; financial formulas</span>
                      </div>
                    </div>
                    <span className="text-slate-400 text-[11px]">START</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400 px-2">
                  <span className="text-white font-bold">FOUNDATION</span>
                  <span className="text-sky-400">→</span>
                  <span className="text-white font-bold">PRACTICE</span>
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
