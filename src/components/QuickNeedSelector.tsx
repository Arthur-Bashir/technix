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
  CheckCircle2,
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
      needStatement: 'I need a professional business website',
      summary: 'Turn visitors into paying clients with a fast, modern website optimized for local mobile networks and direct WhatsApp leads.',
      deliverables: ['Custom mobile-responsive design', 'Google Maps & search verification', 'Direct WhatsApp ordering integration', 'Domain & secure SSL setup'],
      targetSection: 'business-website',
      serviceName: 'Business Website',
      startingFrom: 'MK 199,000',
      actionType: 'scroll',
      icon: Globe,
      accent: 'text-sky-400',
    },
    {
      id: 'need-software',
      needStatement: 'I need custom business software or a database',
      summary: 'Replace chaotic spreadsheets and paper logs with custom management portals, multi-branch stock tracking, and automated billing.',
      deliverables: ['Offline-capable data entry', 'Multi-user role permissions', 'Automated invoicing & financial audits', 'Executive Power BI reporting'],
      targetSection: 'software-solutions',
      serviceName: 'Custom Business Software',
      startingFrom: 'Milestone scope',
      actionType: 'scroll',
      icon: Code2,
      accent: 'text-indigo-400',
    },
    {
      id: 'need-it-support',
      needStatement: 'I need reliable IT support or emergency rescue',
      summary: 'Rapid physical technician dispatch in Blantyre & Lilongwe when computers crash, networks fail, or critical files are lost.',
      deliverables: ['15-minute emergency triage protocol', 'Office Wi-Fi & network stabilization', 'Automated nightly off-site backups', 'Predictable monthly support retainers'],
      targetSection: 'it-rescue',
      serviceName: 'IT Rescue & Support',
      startingFrom: 'Emergency triage / Retainers',
      actionType: 'rescue',
      icon: Wrench,
      accent: 'text-rose-400',
    },
    {
      id: 'need-email',
      needStatement: 'I need professional business email on my own domain',
      summary: 'Upgrade from personal @gmail.com accounts to verified company email (name@yourcompany.mw) that passes corporate procurement audits.',
      deliverables: ['Custom domain setup (@yourcompany.mw)', 'Spam filtering & DKIM/SPF security', 'Mobile & Outlook synchronization', 'Centralized staff inbox administration'],
      targetSection: 'business-email',
      serviceName: 'Professional Business Email',
      startingFrom: 'MK 7,500 / month',
      actionType: 'scroll',
      icon: Mail,
      accent: 'text-blue-400',
    },
    {
      id: 'need-hosting',
      needStatement: 'I need dependable cloud hosting and a .mw domain',
      summary: 'High-speed cloud servers with daily automated backups, free SSL certificates, and convenient local Kwacha billing with zero dollar cards required.',
      deliverables: ['High-speed NVMe cloud storage', 'Official .mw domain registration', 'Daily snapshot disaster recovery', 'Local Malawi Kwacha payment options'],
      targetSection: 'hosting-domains',
      serviceName: 'Cloud Hosting & Domains',
      startingFrom: 'MK 65,000 / year',
      actionType: 'scroll',
      icon: Server,
      accent: 'text-cyan-400',
    },
    {
      id: 'need-data',
      needStatement: 'I need better digital data systems and executive dashboards',
      summary: 'Interactive Power BI dashboards and offline mobile survey data pipelines for executive boards, grant reporting, and donor compliance.',
      deliverables: ['Field data collection pipelines', 'Real-time KPI visualization', 'One-click donor report generation', 'Automated database synchronization'],
      targetSection: 'case-studies',
      serviceName: 'Data Systems & Dashboards',
      startingFrom: 'Custom project scope',
      actionType: 'scroll',
      icon: BarChart3,
      accent: 'text-emerald-400',
    },
    {
      id: 'need-training',
      needStatement: 'I need technology training for myself or my staff',
      summary: 'Practical, hands-on masterclasses in Advanced Microsoft Excel, Power BI dashboards, and modern digital workplace tools taught by working engineers.',
      deliverables: ['100% practical lab exercises', 'Small cohorts (max 12 participants)', 'Verified certificate of completion', 'Custom on-site corporate workshops'],
      targetSection: 'technix-academy',
      serviceName: 'TechNix Academy Training',
      startingFrom: 'MK 95,000 / seat',
      actionType: 'scroll',
      icon: GraduationCap,
      accent: 'text-amber-400',
    },
  ];

  const activePathway = pathways.find(p => p.id === activePathwayId) || pathways[0];

  const handlePathwayClick = (pathway: typeof pathways[0]) => {
    setActivePathwayId(pathway.id);
  };

  const handlePathwayAction = (pathway: typeof pathways[0]) => {
    if (pathway.actionType === 'rescue') {
      onOpenITRescue();
    } else {
      onSelectNeed(pathway.targetSection, pathway.serviceName);
    }
  };

  const handleWhatsApp = (pathway: typeof pathways[0]) => {
    const text = `Hello TechNix, I am looking for help: "${pathway.needStatement}". Let's discuss our requirements.`;
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="customer-needs" className="py-24 bg-[#050811] text-white relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Human, Customer-Oriented */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            Choose Where You Need Help
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">
            What does your organisation need right now?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
            Whether you are losing customers to competitors who appear first online, struggling with broken computers, or need custom software to run your operations — select your immediate challenge to find the direct path forward.
          </p>
        </div>

        {/* Asymmetric Pathway Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 Cols): The 7 Direct Need Statements */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider mb-3">
              Select Your Requirement
            </div>

            {pathways.map((item) => {
              const isSelected = item.id === activePathwayId;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handlePathwayClick(item)}
                  className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#0e1628] border-sky-500/70 shadow-lg shadow-sky-950/40 text-white'
                      : 'bg-[#090e1a]/80 hover:bg-[#0c1424] border-slate-800/80 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center space-x-3.5 pr-2">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                      isSelected 
                        ? 'bg-sky-500 text-white border-sky-400' 
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <span className="text-xs sm:text-sm font-bold leading-snug">
                      {item.needStatement}
                    </span>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-sky-400 translate-x-1' : 'text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column (7 Cols): Selected Pathway Showcase */}
          <div className="lg:col-span-7 bg-[#090e1a] border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl relative overflow-hidden">
            {/* Ambient accent glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/5 blur-[120px] pointer-events-none rounded-full" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <span className="text-xs font-mono font-semibold uppercase text-sky-400 tracking-wider">
                  Verified Solution Pathway
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1 rounded-xl">
                  {activePathway.startingFrom}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {activePathway.needStatement}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {activePathway.summary}
              </p>

              {/* What We Deliver */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  What TechNix Delivers:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activePathway.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <span className="text-xs font-mono text-slate-400">
                Transparent Malawian Kwacha pricing & local support
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handlePathwayAction(activePathway)}
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center space-x-1.5 cursor-pointer border border-sky-400/30"
                >
                  <span>Explore Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleWhatsApp(activePathway)}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 transition-colors flex items-center cursor-pointer"
                  title="Discuss on WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
