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
  ExternalLink
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
      tier: 'Identity',
      name: 'Professional Business Email',
      description: 'Replace personal webmail with official company domain inboxes (name@yourcompany.mw) synchronized across staff computers and phones.',
      pricing: 'From MK 7,500 / mo',
      icon: Mail,
      targetSection: 'business-email',
      action: () => onOpenQuote('Professional Business Email'),
      whatsAppMsg: 'Hello TechNix, I want to set up professional business email accounts.',
    },
    {
      id: 'it-rescue',
      index: '03',
      tier: 'Support',
      name: 'TechNix IT Rescue',
      description: 'Rapid physical and remote technical intervention when computer crashes, failing Wi-Fi, or printer issues disrupt office work.',
      pricing: 'On-demand triage',
      icon: Wrench,
      targetSection: 'it-rescue',
      action: () => onOpenITRescue(),
      whatsAppMsg: 'Hello TechNix, I need IT rescue assistance for our office.',
    },
    {
      id: 'technix-care',
      index: '04',
      tier: 'Maintenance',
      name: 'TechNix Care Monthly IT',
      description: 'Proactive monthly IT management, staff computer servicing, antivirus enforcement, and on-call technical assistance in Blantyre & Lilongwe.',
      pricing: 'From MK 50,000 / mo',
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
      pricing: 'Milestone quotation',
      icon: Code2,
      targetSection: 'software-solutions',
      action: () => onOpenQuote('Custom Software Solution'),
      whatsAppMsg: 'Hello TechNix, I would like to discuss a custom software project.',
    },
    {
      id: 'technix-academy',
      index: '06',
      tier: 'Skills',
      name: 'TechNix Academy',
      description: 'Hands-on practical masterclasses in Advanced Microsoft Excel, Power BI dashboards, and modern workplace digital tools.',
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
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-medium uppercase tracking-wider text-sky-400">
            Solutions You Can Start With
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Practical Technology Engagements
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
            Clear solutions that address real operational needs with defined scopes, transparent pricing, and local Malawi Kwacha invoicing.
          </p>
        </div>

        {/* 1. DOMINANT FEATURED SHOWCASE: Business Websites */}
        <div className="mb-16 border-b border-slate-800/80 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (Dominant Typography & Commercial Clarity) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-medium uppercase text-sky-400 tracking-wider">
                  Featured Solution · Commercial Web Presence
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400">
                  Starting from MK 199,000
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Business Websites Built to Present Your Organisation Professionally
              </h3>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                A modern corporate website designed specifically for local mobile connectivity. Fast-loading on local networks, configured with your official domain, and set up to capture direct customer inquiries on WhatsApp and phone.
              </p>

              {/* What This Changes */}
              <div className="border-l-2 border-sky-400 pl-4 py-1 space-y-1">
                <div className="text-xs font-mono font-medium uppercase tracking-wider text-slate-400">
                  Operational outcome
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Replaces outdated contact info and missed opportunities with an official digital presence that gives clients confidence and routes inquiries directly to your team.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenQuote('Business Website')}
                  className="px-6 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center space-x-2 cursor-pointer border border-sky-400/30"
                >
                  <span>Build My Website</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleWhatsApp('Hello TechNix, I want to discuss building a website for my business.')}
                  className="px-4 py-3.5 bg-transparent hover:bg-slate-900 text-slate-300 hover:text-emerald-400 border border-slate-800 text-xs font-semibold rounded-xl transition-colors flex items-center space-x-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Talk on WhatsApp</span>
                </button>

                <button
                  onClick={() => onSelectNeed('business-website', 'Business Website')}
                  className="text-xs text-slate-400 hover:text-sky-300 font-medium transition-colors flex items-center space-x-1 cursor-pointer"
                >
                  <span>Explore Technical Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Visual Preview: Clean Window Surface */}
            <div className="lg:col-span-5 bg-[#040813] border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                </div>
                <span className="text-slate-400 truncate">
                  yourcompany.mw
                </span>
                <span className="text-emerald-400 font-medium">
                  Verified
                </span>
              </div>

              <div className="space-y-3 pt-1">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-medium">
                  Standard Scope
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
                    <span>Direct inquiry integration for WhatsApp and phone</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <span>Google Business Profile &amp; local search visibility</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <span>Professional domain email account configured</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Delivery: 5–10 business days</span>
                  <span className="text-sky-400 font-medium">Fixed Kwacha Quote</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. SUBORDINATE SHOWROOM: Editorial List with Divider Rows (Visibly Secondary) */}
        <div className="space-y-6">
          <div className="text-xs font-mono font-medium uppercase tracking-wider text-slate-400">
            Supporting Solutions &amp; Operational Services
          </div>

          <div className="divide-y divide-slate-800/80 border-y border-slate-800/80">
            {supportingSolutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.id}
                  className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-slate-900/30 px-3 rounded-lg transition-colors"
                >
                  <div className="flex items-start space-x-4 md:max-w-2xl">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 text-sky-400 flex items-center justify-center shrink-0 border border-slate-800 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center space-x-3">
                        <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                          {sol.name}
                        </h4>
                        <span className="text-[11px] font-mono uppercase text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                          {sol.tier}
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {sol.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 shrink-0 pt-2 md:pt-0">
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {sol.pricing}
                    </span>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={sol.action}
                        className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs rounded-lg transition-colors flex items-center space-x-1 cursor-pointer"
                      >
                        <span>Engage</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      <button
                        onClick={() => handleWhatsApp(sol.whatsAppMsg)}
                        className="p-1.5 rounded-lg bg-transparent hover:bg-slate-800 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
                        title="Inquire via WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
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
