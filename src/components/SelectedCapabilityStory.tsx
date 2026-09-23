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
      narrative: 'Keep your website and web applications online with reliable cloud hosting, automated backups, and Malawian (.mw) or international domain management, billed transparently in Malawi Kwacha.',
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
      scope: 'Workstation health, networks & backup verification',
      keyPoints: [
        'Rapid technical response in Blantyre and Lilongwe',
        'Scheduled preventative maintenance visits for office workstations',
        'Office Wi-Fi, router, and printer network troubleshooting',
        'Automated local and cloud backup configuration',
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
    <section id="capabilities" className="py-24 bg-[#050811] text-white relative border-b border-slate-800/80">
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
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-slate-800/80 no-scrollbar">
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

          {/* RIGHT: Large Visual Representation (Browser, Inbox, Infrastructure, Console, Dataflow, Labs) */}
          <div className="lg:col-span-7 bg-[#040813] border border-slate-800/80 rounded-2xl p-6 sm:p-8 min-h-[380px] flex flex-col justify-center">
            
            {/* Website: Browser / Window Composition */}
            {activeStory === 'website' && (
              <div className="w-full space-y-4">
                {/* Browser Titlebar */}
                <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
                  </div>
                  <div className="flex-1 max-w-sm mx-auto bg-slate-900 rounded px-3 py-1 text-[11px] font-mono text-slate-300 flex items-center space-x-2 border border-slate-800">
                    <Lock className="w-3 h-3 text-emerald-400" />
                    <span>https://yourcompany.mw</span>
                  </div>
                </div>

                {/* Web Viewport Content */}
                <div className="bg-[#080d1a] border border-slate-800/70 rounded-xl p-6 space-y-5">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider">
                      Commercial Web Platform
                    </span>
                    <h4 className="text-xl font-bold text-white">
                      Your Business Name · Official Website
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                      Clean presentation of your products, customer service channels, and location details in Blantyre, Lilongwe, or across Malawi.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
                    <span className="px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-300 border border-sky-500/20 font-mono">
                      Mobile Responsive
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono">
                      WhatsApp Connected
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 font-mono">
                      Google Maps Verified
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Email: Communication / Inbox Composition */}
            {activeStory === 'email' && (
              <div className="w-full space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono">
                  <span className="text-sky-400 font-medium">Domain Mailbox Suite</span>
                  <span className="text-slate-400">@yourcompany.mw</span>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-[#080d1a] border border-slate-800 rounded-xl flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center font-mono font-bold">
                        info
                      </div>
                      <div>
                        <div className="font-bold text-white">info@yourcompany.mw</div>
                        <div className="text-slate-400 text-[11px]">Primary business enquiries &amp; client communication</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400">Authenticated</span>
                  </div>

                  <div className="p-4 bg-[#080d1a] border border-slate-800 rounded-xl flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-mono font-bold">
                        dir
                      </div>
                      <div>
                        <div className="font-bold text-white">director@yourcompany.mw</div>
                        <div className="text-slate-400 text-[11px]">Executive correspondence for formal contracts &amp; tenders</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400">Authenticated</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 pt-1">
                  Synchronized across Outlook, iPhone, and Android devices for all staff.
                </p>
              </div>
            )}

            {/* Hosting: Infrastructure / Domain Composition */}
            {activeStory === 'hosting' && (
              <div className="w-full space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono">
                  <span className="text-sky-400 font-medium">Cloud Infrastructure &amp; DNS</span>
                  <span className="text-slate-400">Billed in Malawi Kwacha</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-4 bg-[#080d1a] border border-slate-800 rounded-xl space-y-2">
                    <Server className="w-5 h-5 text-sky-400" />
                    <div className="font-bold text-white">Solid-State Cloud Storage</div>
                    <div className="text-slate-400 text-[11px]">Fast server response for website visitors</div>
                  </div>

                  <div className="p-4 bg-[#080d1a] border border-slate-800 rounded-xl space-y-2">
                    <Lock className="w-5 h-5 text-emerald-400" />
                    <div className="font-bold text-white">SSL Security Certificates</div>
                    <div className="text-slate-400 text-[11px]">Automated HTTPS encryption for domains</div>
                  </div>

                  <div className="p-4 bg-[#080d1a] border border-slate-800 rounded-xl space-y-2">
                    <Database className="w-5 h-5 text-indigo-400" />
                    <div className="font-bold text-white">Scheduled Cloud Backups</div>
                    <div className="text-slate-400 text-[11px]">Routine file &amp; database preservation</div>
                  </div>

                  <div className="p-4 bg-[#080d1a] border border-slate-800 rounded-xl space-y-2">
                    <Cpu className="w-5 h-5 text-amber-400" />
                    <div className="font-bold text-white">Malawian (.mw) DNS</div>
                    <div className="text-slate-400 text-[11px]">National registrar setup &amp; maintenance</div>
                  </div>
                </div>
              </div>
            )}

            {/* IT Support: Office / Network Support Composition */}
            {activeStory === 'support' && (
              <div className="w-full space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono">
                  <span className="text-sky-400 font-medium">Operational Technical Hub</span>
                  <span className="text-slate-400">Blantyre &amp; Lilongwe</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-4 bg-[#080d1a] border border-slate-800 rounded-xl flex items-start space-x-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="font-bold text-white">TechNix Care Monthly Retainer</div>
                      <p className="text-slate-300 text-[11px]">
                        Structured monthly maintenance visits, workstation antivirus updates, and remote helpdesk assistance.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-[#080d1a] border border-slate-800 rounded-xl flex items-start space-x-3">
                    <Wifi className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="font-bold text-white">On-Call IT Rescue Triage</div>
                      <p className="text-slate-300 text-[11px]">
                        Rapid dispatch for office Wi-Fi outages, printer failures, slow machines, and network restoration.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-400 pt-1 flex justify-between">
                  <span>Support line: {COMPANY_INFO.phonePrimary}</span>
                  <span>Physical presence in BT &amp; LL</span>
                </div>
              </div>
            )}

            {/* Software: Workflow / Data / System Composition */}
            {activeStory === 'software' && (
              <div className="w-full space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono">
                  <span className="text-sky-400 font-medium">Purpose-Built Architecture</span>
                  <span className="text-slate-400">Structured Data Pipelines</span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 bg-[#080d1a] border border-slate-800 rounded-xl flex items-center space-x-3">
                    <Smartphone className="w-4 h-4 text-sky-400 shrink-0" />
                    <div className="flex-1">
                      <span className="font-bold text-white block">1. Field &amp; Office Data Capture</span>
                      <span className="text-slate-400 text-[11px]">Mobile forms and desktop input working with or without connectivity</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#080d1a] border border-slate-800 rounded-xl flex items-center space-x-3">
                    <Database className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div className="flex-1">
                      <span className="font-bold text-white block">2. Centralized Database Engine</span>
                      <span className="text-slate-400 text-[11px]">Validation logic, role permissions, and structured record storage</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#080d1a] border border-slate-800 rounded-xl flex items-center space-x-3">
                    <BarChart3 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <div className="flex-1">
                      <span className="font-bold text-white block">3. Management &amp; Donor Reporting</span>
                      <span className="text-slate-400 text-[11px]">Visual dashboard summaries and clean exportable spreadsheets</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Academy: Learning / Data / Skills Composition */}
            {activeStory === 'academy' && (
              <div className="w-full space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono">
                  <span className="text-sky-400 font-medium">Practical Digital Masterclasses</span>
                  <span className="text-slate-400">Blantyre &amp; Lilongwe</span>
                </div>

                <div className="space-y-2.5">
                  {COURSES.slice(0, 3).map((c) => (
                    <div key={c.id} className="p-3 bg-[#080d1a] border border-slate-800 rounded-xl text-xs flex items-center justify-between">
                      <div>
                        <span className="font-bold text-white block">{c.title}</span>
                        <span className="text-slate-400 text-[11px]">{c.duration} · {c.level}</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-sky-400 shrink-0">
                        {c.fee}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-400 pt-1">
                  Hands-on computer exercises using real commercial datasets. Group corporate sessions available.
                </p>
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
