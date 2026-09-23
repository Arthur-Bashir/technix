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
      deliverables: ['Rapid on-site technician dispatch in Blantyre & Lilongwe', 'Office Wi-Fi & network stabilization', 'Automated local & cloud backup setup', 'Predictable monthly support retainers'],
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
      deliverables: ['Reliable cloud SSD storage', 'Malawian (.mw) and international domain registration', 'Scheduled cloud backup protection', 'Local Malawi Kwacha payment options'],
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

  return (
    <section id="customer-needs" className="py-24 bg-[#040813] text-white relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent Question & Editorial Introduction */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-medium uppercase tracking-wider text-sky-400">
            Customer Need / Orientation
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
            What does your organisation need right now?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
            Match your immediate operational challenge with the appropriate engineering response. Each pathway is designed around a clear problem, direct execution, and predictable Malawi Kwacha pricing.
          </p>
        </div>

        {/* Problem → Solution Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (5 Cols): List of Organisational Challenges */}
          <div className="lg:col-span-5 divide-y divide-slate-800/60 border-y border-slate-800/60">
            {pathways.map((item) => {
              const isSelected = item.id === activePathwayId;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePathwayId(item.id)}
                  className={`w-full text-left py-4 px-3 transition-colors cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-sky-500/10 text-white'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
                  }`}
                >
                  <div className="flex items-center space-x-3 pr-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                      isSelected 
                        ? 'bg-sky-500 text-white border-sky-400' 
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-sky-400">
                        {item.needStatement}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-slate-300 leading-snug line-clamp-1">
                        {item.problem}
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-sky-400 translate-x-1' : 'text-slate-600'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column (7 Cols): The Solution Formulation: If X → TechNix does Y */}
          <div className="lg:col-span-7 bg-[#070d1a] border border-slate-800/80 rounded-2xl p-8 sm:p-10 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono">
                <span className="text-sky-400 font-medium uppercase tracking-wider">
                  Recommended Solution Pathway
                </span>
                <span className="text-emerald-400 font-bold">
                  {activePathway.startingFrom}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {activePathway.needStatement}
              </h3>

              {/* Problem / Solution Formula */}
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-medium">
                    The Challenge
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {activePathway.problem}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-medium">
                    How TechNix Solves It
                  </span>
                  <p className="text-base text-slate-200 leading-relaxed font-normal">
                    {activePathway.solution}
                  </p>
                </div>
              </div>

              {/* What TechNix Delivers */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-medium mb-3">
                  Scope Summary:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {activePathway.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">
                Local Kwacha billing &amp; direct technical support
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handlePathwayAction(activePathway)}
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition-all flex items-center space-x-1.5 cursor-pointer border border-sky-400/30"
                >
                  <span>Explore Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleWhatsApp(activePathway)}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 transition-colors flex items-center space-x-1.5 text-xs font-medium cursor-pointer"
                  title="Discuss on WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
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
