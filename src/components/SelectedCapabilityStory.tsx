import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Mail, 
  Server, 
  AlertTriangle, 
  ShieldCheck, 
  Code2, 
  GraduationCap, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2,
  HardDrive,
  Smartphone,
  BarChart3,
  Clock,
  Lock,
  Headphones,
  Check,
  ChevronRight,
  Database
} from 'lucide-react';
import { 
  COURSES, 
  COMPANY_INFO 
} from '../data/technixData';

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
      anchorId: 'business-website',
      label: 'Business Websites',
      icon: Globe,
      tagline: 'High-Conversion Web Presence',
      heading: 'Websites That Turn Visitors into Paying Customers',
      narrative: 'In Malawi and across the region, customers verify your credibility on their phones before doing business. We build lightning-fast, mobile-optimized websites designed to rank on Google and route inquiries straight into your WhatsApp inbox.',
      pricing: 'From MK 199,000 (One-Time)',
      benefits: [
        'Optimized for Airtel & TNM mobile data speeds',
        'Google Maps & local business profile verification',
        'Direct WhatsApp ordering & inquiry buttons',
        'Includes free .mw domain & SSL certificate for 1 year',
      ],
      ctaText: 'Start Your Website',
      action: () => onOpenQuote('Business Website'),
      whatsAppMsg: 'Hello TechNix, I am interested in building a professional business website.',
    },
    {
      id: 'email',
      anchorId: 'business-email',
      label: 'Business Email',
      icon: Mail,
      tagline: 'Official Domain Inboxes',
      heading: 'Stop Sending Tenders from Personal @gmail.com Accounts',
      narrative: 'Sending corporate proposals or formal procurement bids from personal free webmail creates suspicion and invites phishing. We configure authenticated domain email (name@yourcompany.mw) with DKIM/SPF security and mobile synchronization.',
      pricing: 'From MK 7,500 / month',
      benefits: [
        'Verified domain trust (@yourcompany.mw)',
        'Anti-spoofing & anti-phishing SPF/DKIM verification',
        'Seamless sync on iPhone, Android & Outlook',
        'Centralized administrative console to add/remove staff',
      ],
      ctaText: 'Setup Business Email',
      action: () => onOpenQuote('Business Email Setup'),
      whatsAppMsg: 'Hello TechNix, I want to set up professional business email accounts.',
    },
    {
      id: 'hosting',
      anchorId: 'hosting-domains',
      label: 'Cloud & Hosting',
      icon: Server,
      tagline: 'Sovereign Regional Cloud',
      heading: 'NVMe Cloud Hosting with Local Kwacha Billing',
      narrative: 'Avoid international credit card declines and sudden dollar exchange rate spikes. Our high-speed cloud infrastructure offers 99.9% uptime, daily automated snapshot backups, and official .mw domain registry connectivity paid in Malawi Kwacha.',
      pricing: 'From MK 65,000 / year',
      benefits: [
        'Local Kwacha payment with zero foreign exchange fees',
        'Automated daily off-site disaster backups',
        'Low-latency regional routing for African traffic',
        'Official .mw, .com, .org domain registration',
      ],
      ctaText: 'Provision Hosting',
      action: () => onOpenQuote('Cloud Hosting & Domain'),
      whatsAppMsg: 'Hello TechNix, I need cloud hosting and domain registration.',
    },
    {
      id: 'support',
      anchorId: 'it-rescue',
      label: 'IT Rescue & Care',
      icon: ShieldCheck,
      tagline: 'On-Call IT Department',
      heading: '15-Minute Emergency Rescue & Dedicated Monthly IT Care',
      narrative: 'When staff computers crash, Wi-Fi drops, or virus infections threaten payroll, our field technicians dispatch immediately across Blantyre and Lilongwe. With TechNix Care, you get an entire IT department on retainer for less than the cost of one salary.',
      pricing: 'From MK 50,000 / month',
      benefits: [
        '15-minute emergency response protocol in Blantyre & Lilongwe',
        'Scheduled on-site preventative maintenance visits',
        'Encrypted automated database & file backups',
        'Guaranteed SLA response times and remote helpdesk',
      ],
      ctaText: 'Request IT Support',
      action: () => onOpenITRescue(),
      whatsAppMsg: '🚨 URGENT: I need emergency IT rescue or support for my office.',
    },
    {
      id: 'software',
      anchorId: 'software-solutions',
      label: 'Custom Software',
      icon: Code2,
      tagline: 'Tailored Business Engines',
      heading: 'Software Built Around How Your Business Actually Operates',
      narrative: 'Foreign off-the-shelf software charges exorbitant US dollar subscriptions and fails to accommodate local workflows. We engineer tailored administrative portals, multi-branch inventory databases, and offline mobile data collection tools designed for your exact operations.',
      pricing: 'Milestone-Based Project Scope',
      benefits: [
        'Offline-capable mobile apps with automatic cloud sync',
        'Multi-branch inventory, POS & financial auditing',
        'Executive Power BI dashboards for board & donor reporting',
        'Airtel Money & TNM Mpamba digital billing integration',
      ],
      ctaText: 'Scope Custom Software',
      action: () => onOpenQuote('Custom Software Solution'),
      whatsAppMsg: 'Hello TechNix, I would like to discuss a custom software project.',
    },
    {
      id: 'academy',
      anchorId: 'technix-academy',
      label: 'TechNix Academy',
      icon: GraduationCap,
      tagline: 'Workforce Capability',
      heading: 'Practical Tech Masterclasses Taught by Working Engineers',
      narrative: 'Technology is only as effective as the people operating it. TechNix Academy delivers hands-on, lab-driven masterclasses in Advanced Excel, Power BI dashboards, and modern digital workplace tools using real commercial African datasets.',
      pricing: 'From MK 95,000 / seat',
      benefits: [
        '100% practical computer lab exercises with zero theoretical filler',
        'Small cohorts (maximum 12 participants) with personal mentorship',
        'Verified Certificate of Completion & reusable office templates',
        'Tailored on-site training for corporate & NGO departments',
      ],
      ctaText: 'Enroll in Masterclass',
      action: () => onOpenQuote('TechNix Academy Enrollment'),
      whatsAppMsg: 'Hello TechNix Academy, I want to learn more about upcoming courses.',
    },
  ];

  const currentCap = capabilities.find(c => c.id === activeStory) || capabilities[0];

  return (
    <section id="capabilities" className="py-24 bg-[#040814] text-white relative border-b border-slate-800/80">
      {/* Invisible anchor landmarks so existing section links smoothly jump here */}
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
            Engineered Systems Supporting African Organisations
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
            Explore our core commercial capabilities — from public digital storefronts and authenticated communication to resilient sovereign cloud and on-call engineering support.
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
                    : 'bg-[#090e1a] text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cap.label}</span>
              </button>
            );
          })}
        </div>

        {/* Split-Screen Capability Theater (Type B Editorial Showcase) */}
        <div className="bg-[#080d1b] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Column (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                  {currentCap.tagline}
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                  {currentCap.heading}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {currentCap.narrative}
              </p>

              {/* Pricing & Outcome Highlight */}
              <div className="flex items-center justify-between p-4 bg-[#050811] border border-slate-800 rounded-2xl">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold block">
                    Starting Investment
                  </span>
                  <span className="text-base sm:text-lg font-black font-mono text-emerald-400">
                    {currentCap.pricing}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  Fixed Kwacha Pricing
                </span>
              </div>

              {/* Key Deliverables */}
              <div className="space-y-2.5 pt-1">
                <div className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                  Key Operational Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentCap.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Call to Action */}
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

            {/* Right Dynamic Visual Column (6 Cols) */}
            <div className="lg:col-span-6 bg-[#050811] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-inner">
              
              {/* Dynamic Content based on activeStory */}
              {activeStory === 'website' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-sky-400 font-semibold uppercase">
                      Live Storefront Simulation
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">
                      3G/4G Optimized
                    </span>
                  </div>

                  <div className="bg-[#090e1a] border border-slate-800 rounded-xl p-4 space-y-3">
                    <div className="h-32 rounded-lg bg-gradient-to-br from-sky-950/60 to-slate-900 border border-slate-800 flex flex-col justify-end p-4">
                      <span className="text-xs text-sky-400 font-mono">www.yourcompany.mw</span>
                      <h4 className="text-sm font-bold text-white">Your High-Converting Web Storefront</h4>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-center text-xs">
                      <div className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-800">
                        <span className="text-emerald-400 font-bold block">1.2s Load Time</span>
                        <span className="text-[10px] text-slate-400">Local Mobile Networks</span>
                      </div>
                      <div className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-800">
                        <span className="text-sky-400 font-bold block">Direct WhatsApp</span>
                        <span className="text-[10px] text-slate-400">Instant Customer Leads</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-400 leading-relaxed font-normal">
                    Delivered in 5–10 working days with Google Search indexation and mobile responsiveness tested on low-spec smartphones.
                  </div>
                </div>
              )}

              {activeStory === 'email' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-sky-400 font-semibold uppercase">
                      Identity & Procurement Trust
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">
                      DKIM / SPF Verified
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 rounded-xl border border-rose-900/40 bg-rose-950/20 space-y-1">
                      <div className="text-xs font-mono text-rose-400 font-bold flex items-center space-x-1.5">
                        <span>⚠️ Personal Webmail (yourcompany@gmail.com)</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Easily impersonated by hackers, automatically penalized by enterprise procurement filters, and unverified in tender reviews.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-emerald-900/50 bg-emerald-950/20 space-y-1">
                      <div className="text-xs font-mono text-emerald-400 font-bold flex items-center space-x-1.5">
                        <span>✅ Official Domain (director@yourcompany.mw)</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        Cryptographically authenticated with your domain. Instantly passes institutional due diligence and government tender criteria.
                      </p>
                    </div>
                  </div>

                  <div className="text-xs text-slate-400 leading-relaxed font-normal">
                    Includes migration support from existing inboxes, Outlook setup, and mobile phone configuration for all staff members.
                  </div>
                </div>
              )}

              {activeStory === 'hosting' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-sky-400 font-semibold uppercase">
                      Cloud Stack Architecture
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">
                      99.9% Cloud Uptime
                    </span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { layer: 'Layer 1: Storage', desc: 'Enterprise NVMe SSD with 10x faster database query speeds' },
                      { layer: 'Layer 2: Disaster Backup', desc: 'Nightly automated snapshots stored across isolated server zones' },
                      { layer: 'Layer 3: Security & SSL', desc: 'Free automated SSL certificate renewal & DDoS firewall defense' },
                      { layer: 'Layer 4: Local Currency', desc: 'Fixed Kwacha billing via Airtel Money, Mpamba, or bank transfer' },
                    ].map((st, idx) => (
                      <div key={idx} className="p-3 bg-[#090e1a] border border-slate-800 rounded-xl flex items-start space-x-3 text-xs">
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
                      Rapid Operational Triage
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Blantyre & Lilongwe Hubs
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 bg-[#090e1a] border border-slate-800 rounded-xl space-y-1">
                      <span className="text-xs font-mono font-bold text-rose-400 block">IT Rescue</span>
                      <p className="text-xs text-slate-300">
                        Emergency breakdown dispatch when servers, Wi-Fi or finance laptops fail.
                      </p>
                      <span className="text-[11px] font-mono text-slate-400 block pt-1">
                        15-min triage callback
                      </span>
                    </div>

                    <div className="p-4 bg-[#090e1a] border border-slate-800 rounded-xl space-y-1">
                      <span className="text-xs font-mono font-bold text-emerald-400 block">TechNix Care</span>
                      <p className="text-xs text-slate-300">
                        Proactive monthly support retainers for continuous maintenance and antivirus.
                      </p>
                      <span className="text-[11px] font-mono text-slate-400 block pt-1">
                        From MK 50,000 / mo
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                    <span>Emergency Hotline: {COMPANY_INFO.phonePrimary}</span>
                    <span className="text-emerald-400 font-mono text-[11px]">Active Mon–Sat</span>
                  </div>
                </div>
              )}

              {activeStory === 'software' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-indigo-400 font-semibold uppercase">
                      Connected Business Flow
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">
                      Offline-First Capable
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 bg-[#090e1a] border border-slate-800 rounded-xl text-xs flex items-center space-x-3">
                      <Smartphone className="w-4 h-4 text-sky-400 shrink-0" />
                      <div>
                        <span className="font-bold text-white block">Step 1 · Staff & Field Input</span>
                        <span className="text-slate-400">Mobile or browser data collection with offline storage</span>
                      </div>
                    </div>

                    <div className="p-3 bg-[#090e1a] border border-slate-800 rounded-xl text-xs flex items-center space-x-3">
                      <Database className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <span className="font-bold text-white block">Step 2 · Automated Business Logic</span>
                        <span className="text-slate-400">Validation, fee auditing, stock reorder triggers & backup</span>
                      </div>
                    </div>

                    <div className="p-3 bg-[#090e1a] border border-slate-800 rounded-xl text-xs flex items-center space-x-3">
                      <BarChart3 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <div>
                        <span className="font-bold text-white block">Step 3 · Executive Intelligence</span>
                        <span className="text-slate-400">Real-time director dashboards & one-click PDF reporting</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStory === 'academy' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                      Practical Masterclasses
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Next Cohort Enrolling
                    </span>
                  </div>

                  <div className="space-y-2">
                    {COURSES.slice(0, 3).map((c) => (
                      <div key={c.id} className="p-3 bg-[#090e1a] border border-slate-800 rounded-xl text-xs flex items-center justify-between">
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

                  <div className="text-xs text-slate-400 leading-relaxed font-normal">
                    Custom on-site workshops available for corporate accounting teams, school faculties, and NGO project officers.
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
