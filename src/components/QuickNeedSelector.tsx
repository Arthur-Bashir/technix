import React, { useState } from 'react';
import { 
  Globe, 
  Code2, 
  Wrench, 
  Mail, 
  Server, 
  BarChart3, 
  GraduationCap, 
  ArrowRight,
  MessageSquare,
  Check,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface QuickNeedSelectorProps {
  onSelectNeed: (targetSection: string, serviceTitle: string) => void;
  onOpenITRescue: () => void;
  onOpenQuote: (service?: string) => void;
}

export const QuickNeedSelector: React.FC<QuickNeedSelectorProps> = ({
  onSelectNeed,
  onOpenITRescue,
  onOpenQuote,
}) => {
  const [activePathwayId, setActivePathwayId] = useState<string>('need-website');

  const pathways = [
    {
      id: 'need-website',
      problem: 'Prospects cannot find or verify our business online',
      solution: 'A mobile-responsive commercial website with Google Maps presence and direct WhatsApp inquiry routing.',
      needStatement: 'Official Business Website',
      deliverables: ['Custom mobile-responsive design', 'Google Maps & search verification', 'Direct WhatsApp inquiry integration', 'Domain & secure SSL setup'],
      targetSection: 'business-website',
      serviceName: 'Business Website',
      startingFrom: 'From MK 199,000',
      actionType: 'scroll',
      icon: Globe,
    },
    {
      id: 'need-software',
      problem: 'Manual paper logs and disconnected spreadsheets slow down our operations',
      solution: 'Custom administrative databases and mobile forms built around how your organization actually works.',
      needStatement: 'Custom Business Software & Portals',
      deliverables: ['Offline-capable data entry', 'Multi-user role permissions', 'Automated invoicing & financial summaries', 'Operational management reporting'],
      targetSection: 'software-solutions',
      serviceName: 'Custom Business Software',
      startingFrom: 'Milestone scope',
      actionType: 'scroll',
      icon: Code2,
    },
    {
      id: 'need-it-support',
      problem: 'Office computers, Wi-Fi, or printers break down and disrupt work',
      solution: 'Rapid physical and remote technical support in Blantyre & Lilongwe, plus ongoing preventative maintenance retainers.',
      needStatement: 'IT Rescue & Workplace Maintenance',
      deliverables: ['Rapid on-site technician dispatch in Blantyre & Lilongwe', 'Office Wi-Fi & network stabilization', 'Workplace backup routine configuration', 'Predictable monthly support retainers'],
      targetSection: 'it-rescue',
      serviceName: 'IT Rescue & Support',
      startingFrom: 'Emergency triage / Retainers',
      actionType: 'rescue',
      icon: Wrench,
    },
    {
      id: 'need-email',
      problem: 'Staff use personal Gmail or Yahoo addresses for formal correspondence and tenders',
      solution: 'Authenticated domain email accounts (name@yourcompany.mw) configured across staff computers and phones.',
      needStatement: 'Professional Business Email',
      deliverables: ['Custom domain setup (@yourcompany.mw)', 'Standard spam filtering & email security', 'Mobile & Outlook synchronization', 'Centralized staff inbox administration'],
      targetSection: 'business-email',
      serviceName: 'Professional Business Email',
      startingFrom: 'From MK 7,500 / month',
      actionType: 'scroll',
      icon: Mail,
    },
    {
      id: 'need-hosting',
      problem: 'Foreign hosting fees and card payment issues make site hosting difficult',
      solution: 'Dependable cloud hosting and national .mw domain registration billed transparently in Malawi Kwacha.',
      needStatement: 'Cloud Hosting & National (.mw) Domains',
      deliverables: ['Reliable cloud SSD storage', 'Malawian (.mw) and international domain registration', 'Scheduled cloud backup routines', 'Local Malawi Kwacha payment options'],
      targetSection: 'hosting-domains',
      serviceName: 'Cloud Hosting & Domains',
      startingFrom: 'From MK 65,000 / year',
      actionType: 'scroll',
      icon: Server,
    },
    {
      id: 'need-data',
      problem: 'Management lacks clear visibility over field indicators and project metrics',
      solution: 'Structured reporting pipelines and dashboard summaries to track performance without administrative backlogs.',
      needStatement: 'Data Systems & Dashboards',
      deliverables: ['Field data collection pipelines', 'Operational KPI visualization', 'Standardized report export tools', 'Automated database synchronization'],
      targetSection: 'case-studies',
      serviceName: 'Data Systems & Dashboards',
      startingFrom: 'Project scope',
      actionType: 'scroll',
      icon: BarChart3,
    },
    {
      id: 'need-training',
      problem: 'Staff struggle with advanced Excel formulas, reporting tools, and digital workflows',
      solution: 'Hands-on practical masterclasses in Excel, Power BI, and workplace digital tools taught with commercial datasets.',
      needStatement: 'Workforce Digital Skills Training',
      deliverables: ['Hands-on computer lab exercises', 'Small interactive cohorts', 'Practical course templates and materials', 'Custom on-site corporate workshops'],
      targetSection: 'technix-academy',
      serviceName: 'TechNix Academy Training',
      startingFrom: 'From MK 95,000 / seat',
      actionType: 'scroll',
      icon: GraduationCap,
    },
  ];

  const activePathway = pathways.find(p => p.id === activePathwayId) || pathways[0];

  const handlePathwayAction = (pathway: typeof pathways[0]) => {
    if (pathway.actionType === 'rescue') {
      onOpenITRescue();
    } else {
      onSelectNeed(pathway.targetSection, pathway.serviceName);
    }
  };

  const handleWhatsApp = (pathway: typeof pathways[0]) => {
    const text = `Hello TechNix, our organisation is looking for help with: "${pathway.needStatement}". Let's discuss our requirements.`;
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const [showTechnicalScope, setShowTechnicalScope] = useState<boolean>(false);

  return (
    <section id="customer-needs" className="py-24 bg-[#040813] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent Question & Editorial Introduction */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-medium uppercase tracking-wider text-sky-400">
            Orientation
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
            What does your organisation need right now?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
            Identify the operational challenge you face today. Every pathway connects directly to an engineering response, agreed scope, and transparent Kwacha pricing.
          </p>
        </div>

        {/* Problem → Solution Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols): Editorial List of Human Situations */}
          <div className="lg:col-span-5 space-y-1">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3 px-1">
              Select Your Current Challenge
            </div>

            <div className="divide-y divide-white/5 border-y border-white/5">
              {pathways.map((item, idx) => {
                const isSelected = item.id === activePathwayId;
                const indexNum = String(idx + 1).padStart(2, '0');
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActivePathwayId(item.id);
                      setShowTechnicalScope(false);
                    }}
                    className={`w-full text-left py-4 px-3.5 transition-all cursor-pointer flex items-start justify-between gap-4 group ${
                      isSelected
                        ? 'border-l-2 border-sky-400 bg-sky-950/20 text-white pl-4'
                        : 'border-l-2 border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-xs font-mono">
                        <span className={isSelected ? 'text-sky-400 font-bold' : 'text-slate-400'}>
                          {indexNum}
                        </span>
                        <span className={isSelected ? 'text-sky-300 font-semibold' : 'text-slate-400'}>
                          {item.needStatement}
                        </span>
                      </div>
                      <p className={`text-sm leading-snug transition-colors ${
                        isSelected ? 'text-white font-medium' : 'text-slate-300 group-hover:text-slate-100'
                      }`}>
                        “{item.problem}”
                      </p>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                      isSelected ? 'text-sky-400 translate-x-1' : 'text-slate-400 opacity-40 group-hover:opacity-100'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column (7 Cols): Editorial Response Stage (Unboxed, High Typographic Impact) */}
          <div className="lg:col-span-7 pt-1 lg:pl-4 space-y-8">
            
            {/* Header: Stage Kicker & Pricing Anchor */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
              <span className="text-xs font-mono font-medium text-sky-400 uppercase tracking-wider">
                TechNix Solution Pathway
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400">
                {activePathway.startingFrom}
              </span>
            </div>

            {/* Core Human Narrative: Problem to Engineering Pathway */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                {activePathway.needStatement}
              </h3>

              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  The Operational Challenge
                </div>
                <p className="text-base text-slate-300 leading-relaxed font-normal">
                  {activePathway.problem}. Without a dedicated system, team time is lost to repetitive manual coordination, confusion, or uncaptured opportunities.
                </p>
              </div>

              <div className="space-y-2 border-l-2 border-sky-400 pl-4 py-1">
                <div className="text-xs font-mono uppercase tracking-wider text-sky-400">
                  How TechNix Solves It
                </div>
                <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                  {activePathway.solution}
                </p>
              </div>
            </div>

            {/* Progressive Disclosure: Technical Scope Toggle */}
            <div className="pt-2">
              <button
                onClick={() => setShowTechnicalScope(!showTechnicalScope)}
                className="text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors flex items-center space-x-1.5 cursor-pointer py-1"
              >
                <span>{showTechnicalScope ? 'Hide Scope Deliverables' : 'View Scope Deliverables'}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showTechnicalScope ? 'rotate-90' : ''}`} />
              </button>

              {showTechnicalScope && (
                <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 animate-in fade-in duration-200">
                  {activePathway.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Commercial Action Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">
                Transparent Kwacha quotation · Agreed milestones
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handlePathwayAction(activePathway)}
                  className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center space-x-2 cursor-pointer border border-sky-400/30 shadow-md shadow-sky-600/20"
                >
                  <span>Explore Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleWhatsApp(activePathway)}
                  className="px-4 py-3 rounded-xl bg-transparent hover:bg-slate-900 text-slate-300 hover:text-emerald-400 border border-slate-800 transition-colors flex items-center space-x-1.5 text-xs font-medium cursor-pointer"
                  title="Discuss on WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
