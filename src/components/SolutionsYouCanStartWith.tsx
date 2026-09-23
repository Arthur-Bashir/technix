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
  ChevronRight
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
      tier: 'Identity & Communication',
      name: 'Professional Business Email',
      description: 'Replace personal webmail with official company domain inboxes (name@yourcompany.mw) synchronized across staff computers and phones.',
      changes: 'Establishes a verifiable commercial identity for client proposals, contracts, and daily organizational correspondence.',
      pricing: 'From MK 7,500 / month',
      icon: Mail,
      targetSection: 'business-email',
      action: () => onOpenQuote('Professional Business Email'),
      whatsAppMsg: 'Hello TechNix, I want to set up professional business email accounts.',
    },
    {
      id: 'it-rescue',
      index: '03',
      tier: 'Technical Assistance',
      name: 'TechNix IT Rescue',
      description: 'Rapid physical and remote technical intervention when computer crashes, failing Wi-Fi, or printer issues disrupt office work.',
      changes: 'Direct technician assistance in Blantyre and Lilongwe to diagnose and resolve computer and network breakdowns.',
      pricing: 'Emergency breakdown triage',
      icon: Wrench,
      targetSection: 'it-rescue',
      action: () => onOpenITRescue(),
      whatsAppMsg: 'Hello TechNix, I need IT rescue assistance for our office.',
    },
    {
      id: 'technix-care',
      index: '04',
      tier: 'Managed Support Retainer',
      name: 'TechNix Care Monthly IT',
      description: 'Proactive monthly IT management, staff computer servicing, antivirus enforcement, and on-call technical assistance.',
      changes: 'Provides regular preventative maintenance and predictable on-call IT support without hiring a full-time in-house department.',
      pricing: 'From MK 50,000 / month',
      icon: ShieldCheck,
      targetSection: 'technix-care',
      action: () => onOpenQuote('TechNix Care Monthly IT'),
      whatsAppMsg: 'Hello TechNix, I am interested in TechNix Care monthly IT support plans.',
    },
    {
      id: 'software-solutions',
      index: '05',
      tier: 'Custom Digital Systems',
      name: 'Custom Software & Portals',
      description: 'Tailored administrative web systems, school management platforms, and NGO monitoring databases designed for local workflows.',
      changes: 'Replaces manual paperwork and fragmented spreadsheets with structured digital records accessible online and offline.',
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
      description: 'Hands-on practical masterclasses in Advanced Microsoft Excel, Power BI dashboards, and modern workplace digital tools.',
      changes: 'Equips your team with practical capabilities that immediately streamline reporting and daily spreadsheet workflows.',
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
            Digital Solutions Built for African Commercial Realities
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
            Ready-to-deploy technology solutions that address practical operational bottlenecks: clear scope, transparent pricing, and local Malawi Kwacha billing.
          </p>
        </div>

        {/* 1. DOMINANT FEATURED SHOWCASE: Business Websites */}
        <div className="mb-14 bg-gradient-to-br from-[#0b1222] via-[#080e1a] to-[#050811] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (Col 1-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-semibold uppercase text-sky-400 tracking-wider">
                  Featured Solution · Commercial Web Presence
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-0.5 rounded-full">
                  Starting from MK 199,000
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Business Websites Built to Drive Inquiries and Win Tenders
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                A modern corporate website designed specifically for local mobile connectivity. Fast-loading on local cellular networks, configured with your official domain, and set up to capture direct customer inquiries on WhatsApp and phone.
              </p>

              {/* What This Changes */}
              <div className="bg-[#050811] border border-slate-800 rounded-2xl p-5 space-y-1.5">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  What this changes for your organisation
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  Replaces outdated contact info and missed opportunities with an official digital presence that gives clients confidence and routes inquiries directly to your team.
                </p>
              </div>

              {/* Action Buttons */}
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
                  <span>Explore Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Visual Preview (Col 8-12) */}
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
                    <span>Tested on mobile networks across Malawi</span>
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
                    <span>Professional domain email account configured</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Fast Delivery: 5–10 days</span>
                  <span className="text-sky-400">Fixed Kwacha Pricing</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. SUBORDINATE SHOWROOM (Supporting Solutions Visually Receding) */}
        <div className="space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Supporting Solutions & Operational Services
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportingSolutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.id}
                  className="bg-[#080d1b] border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>

                      <div className="text-xs font-mono text-slate-400">
                        <span>{sol.tier}</span>
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-white mb-1.5">
                      {sol.name}
                    </h4>

                    <div className="text-xs font-mono text-emerald-400 font-semibold mb-3">
                      {sol.pricing}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4 font-normal">
                      {sol.description}
                    </p>

                    <div className="bg-[#050811] border border-slate-850 rounded-xl p-3 mb-5">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1 font-semibold">
                        What this changes
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {sol.changes}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={sol.action}
                      className="px-3.5 py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center space-x-1.5 border border-sky-400/30"
                    >
                      <span>Engage</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => handleWhatsApp(sol.whatsAppMsg)}
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 transition-colors flex items-center space-x-1 text-xs cursor-pointer"
                      title="Quick WhatsApp inquiry"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-medium">WhatsApp</span>
                    </button>
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
