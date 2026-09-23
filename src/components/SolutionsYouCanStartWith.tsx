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
  const products = [
    {
      id: 'business-website',
      index: '01',
      tier: 'Digital Presence',
      name: 'Business Websites',
      description: 'Deploy a high-converting corporate website that builds institutional trust, ranks on Google, and captures verified customer inquiries.',
      mainBenefit: 'Immediate commercial credibility, Google Maps visibility, and direct WhatsApp customer inquiries.',
      icon: Globe,
      pricing: 'Starting from MK 199,000',
      ctaText: 'Build My Website',
      targetSection: 'business-website',
      action: () => onOpenQuote('Business Website'),
      whatsAppMsg: 'Hello TechNix, I want to build a professional website for my business.',
    },
    {
      id: 'business-email',
      index: '02',
      tier: 'Corporate Identity',
      name: 'Professional Business Email',
      description: 'Replace personal @gmail.com accounts with verified inboxes on your own domain (name@yourcompany.mw) for your entire staff.',
      mainBenefit: 'Pass corporate procurement audits, protect sensitive correspondence, and secure enterprise tenders.',
      icon: Mail,
      pricing: 'Starting from MK 7,500 / month',
      ctaText: 'Configure Business Email',
      targetSection: 'business-email',
      action: () => onOpenQuote('Professional Business Email'),
      whatsAppMsg: 'Hello TechNix, I want to set up professional business email accounts for my team.',
    },
    {
      id: 'it-rescue',
      index: '03',
      tier: 'Emergency Response',
      name: 'TechNix IT Rescue',
      description: 'Rapid physical and remote technical emergency response when computer crashes, failing networks, or hardware issues halt work.',
      mainBenefit: 'Direct engineering triage for failing servers, crashing workstations, broken Wi-Fi, and data recovery.',
      icon: Wrench,
      pricing: 'Urgent breakdown triage',
      ctaText: 'Request IT Rescue',
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
      mainBenefit: 'Eliminate unplanned downtime, extend hardware lifespan, and have a dedicated IT department on retainer.',
      icon: ShieldCheck,
      pricing: 'From MK 50,000 / month',
      ctaText: 'Explore Care Retainers',
      targetSection: 'technix-care',
      action: () => onOpenQuote('TechNix Care Monthly IT'),
      whatsAppMsg: 'Hello TechNix, I am interested in TechNix Care monthly IT support plans.',
    },
    {
      id: 'software-solutions',
      index: '05',
      tier: 'Operational Systems',
      name: 'Custom Software & Portals',
      description: 'Tailored administrative web systems, school management platforms, and NGO monitoring databases designed for local workflows.',
      mainBenefit: 'Automate manual paperwork, prevent financial leakages, and capture field data in real time.',
      icon: Code2,
      pricing: 'Milestone-based quotation',
      ctaText: 'Discuss Custom Software',
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
      mainBenefit: 'Upskill your workforce with practical technical capability that immediately improves productivity.',
      icon: GraduationCap,
      pricing: 'From MK 95,000 per seat',
      ctaText: 'View Academy Courses',
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
        
        {/* Section Header: Clean Editorial Hierarchy */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            Core Deployments
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Digital Solutions You Can Deploy in Days, Not Months
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
            Tested, reliable technology implementations designed to solve immediate business bottlenecks with clear scope and upfront Kwacha pricing.
          </p>
        </div>

        {/* 6 Structured Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((prod) => {
            const Icon = prod.icon;
            return (
              <div
                key={prod.id}
                className="bg-[#090e1a]/90 hover:bg-[#0c1322] border border-slate-800/80 hover:border-slate-700 rounded-2xl p-7 transition-all duration-200 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center group-hover:text-white group-hover:bg-sky-600 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="text-xs font-mono text-slate-400">
                      <span>{prod.index}</span>
                      <span aria-hidden="true" className="mx-1.5">·</span>
                      <span>{prod.tier}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {prod.name}
                  </h3>

                  <div className="text-xs font-mono text-emerald-400 font-semibold mb-3">
                    {prod.pricing}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5 font-normal">
                    {prod.description}
                  </p>

                  <div className="bg-[#050811] border border-slate-850 rounded-xl p-3.5 mb-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1 font-semibold">
                      Business Outcome
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {prod.mainBenefit}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                  <button
                    onClick={prod.action}
                    className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-md shadow-sky-600/20 transition-all cursor-pointer flex items-center justify-center space-x-1.5 border border-sky-400/30"
                  >
                    <span>{prod.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center justify-between gap-2 pt-1">
                    <button
                      onClick={() => onSelectNeed(prod.targetSection, prod.name)}
                      className="text-xs text-slate-400 hover:text-sky-300 transition-colors flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleWhatsApp(prod.whatsAppMsg)}
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
    </section>
  );
};
