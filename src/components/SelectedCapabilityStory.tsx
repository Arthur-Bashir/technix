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
  CheckCircle2,
  Smartphone,
  BarChart3,
  Database
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
      pricing: 'Starting from MK 199,000',
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
      pricing: 'Starting from MK 7,500 / month',
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
      pricing: 'Starting from MK 65,000 / year',
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
      pricing: 'Retainers from MK 50,000 / month',
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
      pricing: 'Milestone project quotation',
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
      pricing: 'Courses from MK 95,000 / seat',
      keyPoints: [
        '100% practical lab exercises with real-world scenarios',
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
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            Selected Capability Story
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">
            Technology Systems Supporting Practical Operations
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
            Explore our core service disciplines — from public digital storefronts and authenticated communication to reliable cloud infrastructure and responsive on-call support.
          </p>
        </div>

        {/* 6 Capability Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {capabilities.map((cap) => {
            const isSelected = cap.id === activeStory;
            const Icon = cap.icon;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveStory(cap.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 flex items-center space-x-2 border cursor-pointer ${
                  isSelected
                    ? 'bg-sky-600 text-white border-sky-400 shadow-lg shadow-sky-950/60'
                    : 'bg-[#080d1b] text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cap.label}</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Story Canvas */}
        <div className="bg-[#070c18] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                  {currentCap.tagline}
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                  {currentCap.heading}
                </h3>
              </div>

              <div className="text-xs font-mono text-slate-400">
                <span className="text-slate-500 uppercase">Who this is for: </span>
                <span>{currentCap.whoItHelps}</span>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {currentCap.narrative}
              </p>

              {/* Pricing & Deliverables */}
              <div className="p-4 bg-[#040710] border border-slate-800/80 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold block">
                    Starting Investment
                  </span>
                  <span className="text-base sm:text-lg font-bold font-mono text-emerald-400">
                    {currentCap.pricing}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  Malawi Kwacha Billing
                </span>
              </div>

              {/* Deliverables List */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                  Key Scope Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentCap.keyPoints.map((b, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={currentCap.action}
                  className="px-6 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center space-x-2 cursor-pointer border border-sky-400/30"
                >
                  <span>{currentCap.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleWhatsApp(currentCap.whatsAppMsg)}
                  className="p-3 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 rounded-xl transition-colors flex items-center space-x-2 text-xs font-semibold cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discuss on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Right Visual Demonstration Canvas (5 Cols) */}
            <div className="lg:col-span-5 bg-[#040710] border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-inner">
              
              {activeStory === 'website' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-sky-400 font-semibold uppercase">
                      Commercial Web Storefront
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">
                      Mobile Ready
                    </span>
                  </div>

                  <div className="bg-[#080d1b] border border-slate-800 rounded-xl p-4 space-y-3">
                    <div className="h-28 rounded-lg bg-gradient-to-br from-sky-950/60 to-slate-900 border border-slate-800 flex flex-col justify-end p-4">
                      <span className="text-xs text-sky-400 font-mono">www.yourcompany.mw</span>
                      <h4 className="text-sm font-bold text-white">Your Professional Web Storefront</h4>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-300">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Tested on mobile devices across local networks</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Direct inquiry buttons routing to WhatsApp and phone</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    Designed, reviewed, and deployed with full domain configuration and search indexation.
                  </p>
                </div>
              )}

              {activeStory === 'email' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-sky-400 font-semibold uppercase">
                      Email Credibility
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Domain Authentication
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 rounded-xl border border-rose-900/30 bg-rose-950/20 space-y-1">
                      <div className="text-xs font-mono text-rose-400 font-bold">
                        Personal Webmail (yourbusiness@gmail.com)
                      </div>
                      <p className="text-xs text-slate-400">
                        Often questioned during formal tender evaluations and institutional supplier reviews.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-emerald-900/40 bg-emerald-950/20 space-y-1">
                      <div className="text-xs font-mono text-emerald-400 font-bold">
                        Domain Email (info@yourbusiness.mw)
                      </div>
                      <p className="text-xs text-slate-300">
                        Presents an established, verifiable commercial identity for contracts, proposals, and client correspondence.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    Includes setup on Outlook, Apple Mail, and Android devices for all staff members.
                  </p>
                </div>
              )}

              {activeStory === 'hosting' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-sky-400 font-semibold uppercase">
                      Hosting Infrastructure
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Local Kwacha Billing
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      { layer: 'Fast SSD Storage', desc: 'Responsive page delivery for web visitors' },
                      { layer: 'Scheduled Backups', desc: 'Routine off-site snapshots of site files and database' },
                      { layer: 'SSL Certificate', desc: 'Encrypted HTTPS security included on your domain' },
                      { layer: 'Local Invoicing', desc: 'Direct payment via bank transfer or mobile money' },
                    ].map((st, idx) => (
                      <div key={idx} className="p-3 bg-[#080d1b] border border-slate-800 rounded-xl flex items-start space-x-3 text-xs">
                        <Server className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-white block">{st.layer}</span>
                          <span className="text-slate-400">{st.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeStory === 'support' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-rose-400 font-semibold uppercase">
                      On-Call Technical Help
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Blantyre & Lilongwe
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 bg-[#080d1b] border border-slate-800 rounded-xl space-y-1">
                      <span className="text-xs font-mono font-bold text-rose-400 block">IT Rescue</span>
                      <p className="text-xs text-slate-300">
                        Urgent dispatch when office workstations, internet routers, or accounting files experience disruption.
                      </p>
                    </div>

                    <div className="p-4 bg-[#080d1b] border border-slate-800 rounded-xl space-y-1">
                      <span className="text-xs font-mono font-bold text-emerald-400 block">TechNix Care</span>
                      <p className="text-xs text-slate-300">
                        Monthly support retainers for regular computer maintenance, antivirus updates, and backup verification.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#080d1b] rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                    <span>Direct Call: {COMPANY_INFO.phonePrimary}</span>
                    <span className="text-slate-400 font-mono text-[11px]">Blantyre & Lilongwe Hubs</span>
                  </div>
                </div>
              )}

              {activeStory === 'software' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-indigo-400 font-semibold uppercase">
                      Operational Data Flow
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Offline Capable
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3 bg-[#080d1b] border border-slate-800 rounded-xl text-xs flex items-center space-x-3">
                      <Smartphone className="w-4 h-4 text-sky-400 shrink-0" />
                      <div>
                        <span className="font-bold text-white block">1. Staff & Field Input</span>
                        <span className="text-slate-400">Mobile data entry working with or without internet</span>
                      </div>
                    </div>

                    <div className="p-3 bg-[#080d1b] border border-slate-800 rounded-xl text-xs flex items-center space-x-3">
                      <Database className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <span className="font-bold text-white block">2. Centralized Database</span>
                        <span className="text-slate-400">Structured validation, role permissions & automated backups</span>
                      </div>
                    </div>

                    <div className="p-3 bg-[#080d1b] border border-slate-800 rounded-xl text-xs flex items-center space-x-3">
                      <BarChart3 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <div>
                        <span className="font-bold text-white block">3. Management Reporting</span>
                        <span className="text-slate-400">Visual summaries and exportable operational records</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStory === 'academy' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                      Course Offerings
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Practical Computer Labs
                    </span>
                  </div>

                  <div className="space-y-2">
                    {COURSES.slice(0, 3).map((c) => (
                      <div key={c.id} className="p-3 bg-[#080d1b] border border-slate-800 rounded-xl text-xs flex items-center justify-between">
                        <div>
                          <span className="font-bold text-white block">{c.title}</span>
                          <span className="text-slate-400 text-[11px]">{c.duration} · {c.level}</span>
                        </div>
                        <span className="font-mono text-xs font-bold text-amber-400 shrink-0">
                          {c.fee}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    Custom on-site workshops available for corporate accounting teams, school faculties, and NGO project officers.
                  </p>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
