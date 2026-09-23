import React from 'react';
import { 
  Globe, 
  Mail, 
  Wrench, 
  ShieldCheck, 
  Code2, 
  GraduationCap, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Smartphone,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface SolutionsYouCanStartWithProps {
  onOpenQuote: (service?: string) => void;
  onOpenITRescue: () => void;
  onOpenHealthCheck: () => void;
  onSelectNeed: (targetSection: string, serviceTitle: string) => void;
}

export const SolutionsYouCanStartWith: React.FC<SolutionsYouCanStartWithProps> = ({
  onOpenQuote,
  onOpenITRescue,
  onOpenHealthCheck,
  onSelectNeed,
}) => {
  const supportingSolutions = [
    {
      id: 'business-email',
      index: '02',
      tier: 'Identity & Trust',
      name: 'Professional Business Email',
      description: 'Replace personal @gmail.com accounts with official company domain inboxes (name@yourcompany.mw) with cryptographic security.',
      changes: 'Passes corporate procurement audits, prevents email spoofing, and secures enterprise tenders.',
      pricing: 'From MK 7,500 / month',
      icon: Mail,
      targetSection: 'business-email',
      action: () => onOpenQuote('Professional Business Email'),
      whatsAppMsg: 'Hello TechNix, I want to set up professional business email accounts.',
    },
    {
      id: 'it-rescue',
      index: '03',
      tier: 'Emergency Response',
      name: 'TechNix IT Rescue',
      description: 'Rapid physical and remote technical intervention when computer crashes, failing networks, or hardware issues halt office work.',
      changes: 'Direct senior engineering triage for failing servers, crashing workstations, broken Wi-Fi, and data recovery.',
      pricing: 'Emergency breakdown triage',
      icon: Wrench,
      targetSection: 'it-rescue',
      action: () => onOpenITRescue(),
      whatsAppMsg: '🚨 URGENT: I need emergency IT rescue assistance.',
    },
    {
      id: 'technix-care',
      index: '04',
      tier: 'Managed Support',
      name: 'TechNix Care Managed IT',
      description: 'Proactive monthly IT management, staff computer servicing, antivirus enforcement, automated backups, and priority support.',
      changes: 'Eliminates unexpected downtime, extends hardware lifespan, and provides a dedicated IT department on retainer.',
      pricing: 'From MK 50,000 / month',
      icon: ShieldCheck,
      targetSection: 'technix-care',
      action: () => onOpenQuote('TechNix Care Monthly IT'),
      whatsAppMsg: 'Hello TechNix, I am interested in TechNix Care monthly IT support plans.',
    },
    {
      id: 'software-solutions',
      index: '05',
      tier: 'Custom Systems',
      name: 'Custom Software & Portals',
      description: 'Tailored administrative web systems, school management platforms, and NGO monitoring databases designed for local workflows.',
      changes: 'Automates manual paperwork, eliminates record loss, and synchronizes field data in real time.',
      pricing: 'Milestone quotation',
      icon: Code2,
      targetSection: 'software-solutions',
      action: () => onOpenQuote('Custom Software Solution'),
      whatsAppMsg: 'Hello TechNix, I would like to discuss a custom software project.',
    },
    {
      id: 'technix-academy',
      index: '06',
      tier: 'Workforce Capability',
      name: 'TechNix Academy',
      description: 'Hands-on executive and staff masterclasses in Advanced Microsoft Excel, Power BI dashboards, and modern digital business workflows.',
      changes: 'Equips your team with practical capabilities that immediately eliminate manual spreadsheet headaches.',
      pricing: 'From MK 95,000 / seat',
      icon: GraduationCap,
      targetSection: 'technix-academy',
      action: () => onOpenQuote('TechNix Academy Course Registration'),
      whatsAppMsg: 'Hello TechNix, I want to learn more about TechNix Academy courses.',
    },
  ];

  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="solutions" className="py-24 bg-[#050811] text-white relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Editorial & Outcome-Oriented */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            Commercial Showroom
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">
            Digital Solutions You Can Deploy in Days, Not Months
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
            These are tested, ready-to-deliver technology solutions that solve real operational bottlenecks. Transparent pricing, clear scope, and local Kwacha billing.
          </p>
        </div>

        {/* 1. FEATURED SHOWCASE: Business Websites */}
        <div className="mb-14 bg-gradient-to-br from-[#0c1424] via-[#09101d] to-[#060b14] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (Col 1-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-semibold uppercase text-sky-400 tracking-wider">
                  Featured Solution · Tier 01
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-0.5 rounded-full">
                  Starting from MK 199,000
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Business Websites Built to Drive Inquiries and Win Tenders
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                A high-performance corporate website designed specifically for the African commercial reality. Light, fast-loading on local Airtel and TNM mobile data, registered with your official domain, and wired directly to capture customer sales inquiries on WhatsApp.
              </p>

              {/* What This Changes Box */}
              <div className="bg-[#050811]/90 border border-slate-800 rounded-2xl p-5 space-y-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  What this changes for your organisation
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  Replaces outdated contact info and missed sales with a verified digital storefront that ranks on Google, gives corporate buyers confidence, and delivers warm inbound customer inquiries directly to your team.
                </p>
              </div>

              {/* Action Triggers */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenQuote('Business Website')}
                  className="px-6 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-sky-600/30 flex items-center space-x-2 cursor-pointer border border-sky-400/30"
                >
                  <span>Build My Website</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleWhatsApp('Hello TechNix, I want to discuss building a website for my business.')}
                  className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center space-x-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Talk on WhatsApp</span>
                </button>

                <button
                  onClick={() => onSelectNeed('business-website', 'Business Website')}
                  className="text-xs text-slate-400 hover:text-sky-300 font-medium transition-colors flex items-center space-x-1 cursor-pointer ml-auto sm:ml-0"
                >
                  <span>See How It Works</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Architectural Preview Card (Col 8-12) */}
            <div className="lg:col-span-5 bg-[#050811] border border-slate-800/90 rounded-2xl p-6 space-y-4 shadow-inner">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 truncate max-w-[200px]">
                  yourcompany.mw
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                  LIVE
                </span>
              </div>

              <div className="space-y-3 pt-1">
                <div className="text-xs font-semibold text-slate-300 uppercase font-mono tracking-wider">
                  Deliverable Highlights
                </div>

                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <span>Clean modern design reflecting your brand identity</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <span>Tested on 3G/4G Airtel & TNM mobile networks</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <span>Click-to-WhatsApp direct lead capture integration</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <span>Google Business Profile & local Maps verification</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <span>Professional domain email account included</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Fast Launch: 5–10 days</span>
                  <span className="text-sky-400">Starter · Pro · Premium</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. SUBORDINATE SHOWROOM GRID (Supporting Solutions) */}
        <div className="space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Supporting Solutions & Infrastructure Services
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportingSolutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.id}
                  className="bg-[#090e1a]/90 hover:bg-[#0c1322] border border-slate-800/80 hover:border-slate-700 rounded-2xl p-7 transition-all duration-200 flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center group-hover:text-white group-hover:bg-sky-600 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="text-xs font-mono text-slate-400">
                        <span>{sol.index}</span>
                        <span aria-hidden="true" className="mx-1.5">·</span>
                        <span>{sol.tier}</span>
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                      {sol.name}
                    </h4>

                    <div className="text-xs font-mono text-emerald-400 font-semibold mb-3">
                      {sol.pricing}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4 font-normal">
                      {sol.description}
                    </p>

                    <div className="bg-[#050811] border border-slate-850 rounded-xl p-3 mb-6">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1 font-semibold">
                        What this changes
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed">
                        {sol.changes}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 space-y-2">
                    <button
                      onClick={sol.action}
                      className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer flex items-center justify-center space-x-1.5 border border-sky-400/30"
                    >
                      <span>Engage TechNix</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center justify-between gap-2 pt-1">
                      <button
                        onClick={() => onSelectNeed(sol.targetSection, sol.name)}
                        className="text-xs text-slate-400 hover:text-sky-300 transition-colors flex items-center space-x-1 cursor-pointer"
                      >
                        <span>See How It Works</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleWhatsApp(sol.whatsAppMsg)}
                        className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 transition-colors flex items-center space-x-1.5 text-xs cursor-pointer"
                        title="Quick WhatsApp inquiry"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-medium">WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
