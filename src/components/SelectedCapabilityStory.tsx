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

          {/* RIGHT: ONE Dominant Visual Composition (Art-directed representation) */}
          <div className="lg:col-span-7 bg-[#040813] border border-white/10 rounded-2xl p-6 sm:p-8 min-h-[420px] flex flex-col justify-center relative overflow-hidden shadow-2xl">
            
            {/* 1. BUSINESS WEBSITE: A large browser/site composition floating in space */}
            {activeStory === 'website' && (
              <div className="w-full space-y-4">
                {/* Browser Titlebar */}
                <div className="flex items-center space-x-3 border-b border-white/10 pb-3">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  </div>
                  <div className="flex-1 max-w-sm mx-auto bg-slate-900/90 rounded-lg px-3 py-1.5 text-[11px] font-mono text-slate-300 flex items-center space-x-2 border border-white/5">
                    <Lock className="w-3 h-3 text-emerald-400" />
                    <span>https://yourcompany.mw</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider hidden sm:inline">Active</span>
                </div>

                {/* Floating Site Composition */}
                <div className="relative bg-[#080d1a] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                  {/* Mini Site Navigation Header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 font-bold text-xs">
                        T
                      </div>
                      <span className="font-bold text-xs text-white tracking-wide">YOUR BRAND</span>
                    </div>
                    <div className="hidden sm:flex items-center space-x-4 text-[11px] text-slate-400 font-mono">
                      <span>Services</span>
                      <span>About</span>
                      <span>Contact</span>
                    </div>
                    <span className="text-[11px] text-sky-400 font-medium">Blantyre · Lilongwe</span>
                  </div>

                  {/* Site Hero Layout */}
                  <div className="space-y-3 max-w-md">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-400/30 px-2 py-0.5 rounded">
                      Commercial Front-Door
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      Modern Commercial Operations Across Malawi
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      Connecting clients directly to your services with clear enquiry paths, verified location maps, and WhatsApp integration.
                    </p>
                  </div>

                  {/* Actions & WhatsApp conversion */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <div className="px-4 py-2 bg-sky-600 text-white rounded-lg text-xs font-bold flex items-center space-x-1.5 shadow-sm">
                      <span>Contact Sales</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                    <div className="px-3 py-2 bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 rounded-lg text-xs font-mono flex items-center space-x-1.5">
                      <MessageSquare className="w-3 h-3 text-emerald-400" />
                      <span>WhatsApp Direct</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. BUSINESS EMAIL: A clean communication identity with inbox/domain visualisation */}
            {activeStory === 'email' && (
              <div className="w-full space-y-4">
                {/* Communication Identity Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-sky-400" />
                    <span className="text-white font-bold">@yourcompany.mw</span>
                  </div>
                  <span className="text-emerald-400 text-[11px]">DKIM &amp; SPF Authenticated</span>
                </div>

                {/* Unified Executive Inbox Composition */}
                <div className="bg-[#080d1a] border border-white/10 rounded-xl p-6 space-y-5">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-white">
                        managing.director@yourcompany.mw
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">
                        To: procurement@tender-board.gov.mw
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded">
                      Tender Ready
                    </span>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="font-semibold text-white">
                      Subject: Commercial Proposal &amp; Technical Schedule
                    </div>
                    <p className="text-slate-300 leading-relaxed font-normal text-[11px]">
                      Dear Procurement Committee, please find attached our finalized commercial proposal and schedule of works for your review...
                    </p>
                  </div>

                  {/* Corporate Identity Signature Block */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <div>
                      <div className="text-white font-semibold">Official Corporate Domain Mailbox</div>
                      <div>Outlook, iPhone &amp; Android sync enabled</div>
                    </div>
                    <span className="text-sky-400">Zero @gmail risk</span>
                  </div>
                </div>
              </div>
            )}

            {/* 3. HOSTING: A calm infrastructure / cloud representation */}
            {activeStory === 'hosting' && (
              <div className="w-full space-y-4">
                {/* Infrastructure Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
                  <div className="flex items-center space-x-2">
                    <Server className="w-4 h-4 text-sky-400" />
                    <span className="text-white font-bold">Cloud Infrastructure &amp; DNS</span>
                  </div>
                  <span className="text-slate-400">Billed in Malawi Kwacha</span>
                </div>

                {/* Calm Layered Topology Visual */}
                <div className="bg-[#080d1a] border border-white/10 rounded-xl p-6 space-y-4">
                  {/* Layer 1: DNS & Anycast Edge */}
                  <div className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-lg text-xs">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                      <div>
                        <div className="font-bold text-white">Malawian (.mw) &amp; Global DNS Routing</div>
                        <div className="text-[11px] text-slate-400">Instant registrar propagation and Anycast edge</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-sky-400">Layer 01</span>
                  </div>

                  {/* Layer 2: Solid-State Compute Node */}
                  <div className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-lg text-xs">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <div>
                        <div className="font-bold text-white">Modern Solid-State Storage Array</div>
                        <div className="text-[11px] text-slate-400">Engineered for fast database transactions and local cellular loading</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">Layer 02</span>
                  </div>

                  {/* Layer 3: Disaster Recovery Vault */}
                  <div className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-lg text-xs">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-400" />
                      <div>
                        <div className="font-bold text-white">Scheduled Cloud Snapshot Vault</div>
                        <div className="text-[11px] text-slate-400">Encrypted routine preservation against hardware loss</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-indigo-400">Layer 03</span>
                  </div>

                  <div className="pt-2 flex justify-between items-center text-[11px] font-mono text-slate-400 border-t border-white/5">
                    <span>99.9% Uptime SLA Target</span>
                    <span className="text-emerald-400">Local Currency Protected</span>
                  </div>
                </div>
              </div>
            )}

            {/* 4. IT SUPPORT: A connected workplace environment */}
            {activeStory === 'support' && (
              <div className="w-full space-y-4">
                {/* Workplace Topology Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                    <span className="text-white font-bold">Connected Workplace Operations</span>
                  </div>
                  <span className="text-sky-400 font-bold">Blantyre &amp; Lilongwe</span>
                </div>

                {/* Workplace Environment Diagram */}
                <div className="bg-[#080d1a] border border-white/10 rounded-xl p-6 space-y-5">
                  <div className="text-xs space-y-1">
                    <div className="font-bold text-white text-sm">TechNix Care Retainer &amp; Rescue Triage</div>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      Physical engineer visits to your office plus secure remote helpdesk for all staff workstations, printers, and network equipment.
                    </p>
                  </div>

                  {/* Visual Node Structure */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg space-y-1">
                      <span className="text-[10px] font-mono uppercase text-sky-400">Physical Presence</span>
                      <div className="font-bold text-white">Same-Day Dispatch</div>
                      <p className="text-[11px] text-slate-400">Blantyre &amp; Lilongwe technicians</p>
                    </div>

                    <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg space-y-1">
                      <span className="text-[10px] font-mono uppercase text-emerald-400">Security &amp; Backup</span>
                      <div className="font-bold text-white">Proactive Health</div>
                      <p className="text-[11px] text-slate-400">Antivirus &amp; scheduled routines</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Helpdesk Direct: {COMPANY_INFO.phonePrimary}</span>
                    <span className="text-emerald-400">Retainer Protection</span>
                  </div>
                </div>
              </div>
            )}

            {/* 5. SOFTWARE: A large workflow / data visualisation */}
            {activeStory === 'software' && (
              <div className="w-full space-y-4">
                {/* Software Pipeline Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
                  <div className="flex items-center space-x-2">
                    <Code2 className="w-4 h-4 text-sky-400" />
                    <span className="text-white font-bold">Operational Workflow &amp; Systems Pipeline</span>
                  </div>
                  <span className="text-sky-400">Multi-Role Architecture</span>
                </div>

                {/* Workflow Progression Visual */}
                <div className="bg-[#080d1a] border border-white/10 rounded-xl p-6 space-y-4">
                  {/* Step 1: Input */}
                  <div className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-lg text-xs">
                    <div className="flex items-center space-x-3">
                      <span className="text-sky-400 font-mono font-bold">01</span>
                      <div>
                        <div className="font-bold text-white">Field &amp; Office Data Capture</div>
                        <div className="text-[11px] text-slate-400">Offline-first mobile forms and desktop intake workflows</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">CAPTURE</span>
                  </div>

                  {/* Step 2: Processing */}
                  <div className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-lg text-xs">
                    <div className="flex items-center space-x-3">
                      <span className="text-indigo-400 font-mono font-bold">02</span>
                      <div>
                        <div className="font-bold text-white">TechNix Business Engine &amp; Permissions</div>
                        <div className="text-[11px] text-slate-400">Automated invoices, stock reconciliation, and role permissions</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-indigo-400">ENGINE</span>
                  </div>

                  {/* Step 3: Telemetry */}
                  <div className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-lg text-xs">
                    <div className="flex items-center space-x-3">
                      <span className="text-emerald-400 font-mono font-bold">03</span>
                      <div>
                        <div className="font-bold text-white">Executive Power BI &amp; Audit Dashboards</div>
                        <div className="text-[11px] text-slate-400">Live operational visibility for leadership and funding donors</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">TELEMETRY</span>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Zero Paper Records</span>
                    <span className="text-sky-400">Custom Milestone Delivery</span>
                  </div>
                </div>
              </div>
            )}

            {/* 6. ACADEMY: A learning environment / capability progression */}
            {activeStory === 'academy' && (
              <div className="w-full space-y-4">
                {/* Academy Progression Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-sky-400" />
                    <span className="text-white font-bold">Workforce Capability Progression</span>
                  </div>
                  <span className="text-slate-400">Hands-on Labs</span>
                </div>

                {/* Progression Theater */}
                <div className="bg-[#080d1a] border border-white/10 rounded-xl p-6 space-y-4">
                  <div className="space-y-1 text-xs">
                    <div className="font-bold text-white text-sm">Practical Technical Masterclasses</div>
                    <p className="text-slate-300 text-xs">
                      Taught using commercial datasets, practical labs, and real workplace scenarios in Blantyre &amp; Lilongwe.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between p-2.5 bg-white/[0.02] border border-white/5 rounded-lg text-xs">
                      <div>
                        <span className="font-bold text-white">1. Advanced Excel &amp; Financial Models</span>
                        <div className="text-[11px] text-slate-400">Automated lookups, macros, and financial statements</div>
                      </div>
                      <span className="text-xs font-mono font-bold text-sky-400">MK 95,000</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 bg-white/[0.02] border border-white/5 rounded-lg text-xs">
                      <div>
                        <span className="font-bold text-white">2. Power BI &amp; Executive Telemetry</span>
                        <div className="text-[11px] text-slate-400">Interactive donor and board dashboards</div>
                      </div>
                      <span className="text-xs font-mono font-bold text-sky-400">MK 145,000</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 bg-white/[0.02] border border-white/5 rounded-lg text-xs">
                      <div>
                        <span className="font-bold text-white">3. Tailored Corporate Workforce Workshops</span>
                        <div className="text-[11px] text-slate-400">Dedicated on-site sessions for institutional teams</div>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-400">Custom Scope</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Certificate of Completion</span>
                    <span className="text-sky-400">Small Cohorts</span>
                  </div>
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
