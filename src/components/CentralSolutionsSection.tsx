import React from 'react';
import { 
  Laptop, 
  Cloud, 
  ShieldCheck, 
  BarChart, 
  GraduationCap, 
  Sparkles, 
  ArrowRight,
  MessageSquare,
  Cpu,
  Layers,
  CheckCircle2,
  Terminal
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface CentralSolutionsSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const CentralSolutionsSection: React.FC<CentralSolutionsSectionProps> = ({ onOpenQuote }) => {
  const solutionCategories = [
    {
      code: 'CAP-01',
      title: 'Digital Solutions & Platforms',
      category: 'Websites, Software & Mobile Apps',
      icon: Laptop,
      color: 'text-sky-400 bg-sky-950/80 border-sky-800/50',
      accentGlow: 'hover:border-sky-500/50 hover:shadow-sky-500/10',
      description: 'Modern, high-converting commercial websites, custom internal web portals, PWA mobile applications, and automated customer booking flows.',
      services: [
        'Commercial Business Websites',
        'Custom Web Applications & Portals',
        'Mobile Apps (Android & PWA)',
        'E-Commerce & Mobile Money Checkout',
      ],
      targetAction: 'Business Website',
    },
    {
      code: 'CAP-02',
      title: 'Cloud & Infrastructure',
      category: 'Hosting, Domains & Business Email',
      icon: Cloud,
      color: 'text-cyan-400 bg-cyan-950/80 border-cyan-800/50',
      accentGlow: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
      description: 'Dependable cloud hosting, local .mw & international .com domain management, encrypted corporate email inboxes, and automated off-site cloud backups.',
      services: [
        'High-Speed SSD Web Hosting',
        'Domain Registration (.mw, .com, .org)',
        'Professional Business Email Setup',
        'Automated Cloud Disaster Backups',
      ],
      targetAction: 'Cloud Hosting & Email',
    },
    {
      code: 'CAP-03',
      title: 'Business IT & TechNix Care',
      category: 'Managed IT & Technical Support',
      icon: ShieldCheck,
      color: 'text-emerald-400 bg-emerald-950/80 border-emerald-800/50',
      accentGlow: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
      description: 'Your outsourced IT department. Rapid on-site & remote hardware troubleshooting, Wi-Fi networking, printer fixes, virus cleanup, and SLA maintenance.',
      services: [
        'TechNix Care Monthly IT Retainers',
        'Urgent IT Emergency Breakdown Rescue',
        'Office Wi-Fi, Routers & Cabling',
        'Endpoint Antivirus & Firewall Defense',
      ],
      targetAction: 'TechNix Care Support',
    },
    {
      code: 'CAP-04',
      title: 'Data & Telemetry Systems',
      category: 'M&E, Reporting & Business Intelligence',
      icon: BarChart,
      color: 'text-indigo-400 bg-indigo-950/80 border-indigo-800/50',
      accentGlow: 'hover:border-indigo-500/50 hover:shadow-indigo-500/10',
      description: 'Turn scattered paper spreadsheets into live, interactive Power BI dashboards, automated quarterly donor reports, and mobile field survey data pipelines.',
      services: [
        'Power BI Executive Dashboards',
        'NGO Monitoring & Evaluation Systems',
        'Mobile Field Data Collection & Sync',
        'Financial & Operational Analytics',
      ],
      targetAction: 'Data & Dashboard Systems',
    },
    {
      code: 'CAP-05',
      title: 'TechNix Academy',
      category: 'Practical Professional Tech Training',
      icon: GraduationCap,
      color: 'text-amber-400 bg-amber-950/80 border-amber-800/50',
      accentGlow: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
      description: 'Empower your workforce with hands-on, job-ready skills in Advanced Excel, Power BI, AI business automation tools, and office network administration.',
      services: [
        'Advanced Microsoft Excel Mastery',
        'Power BI for Managers & Analysts',
        'AI Tools & Automation for SMEs',
        'In-House Tailored Corporate Training',
      ],
      targetAction: 'Academy Training',
    },
    {
      code: 'CAP-06',
      title: 'Digital Transformation',
      category: 'ICT Strategy & Process Modernisation',
      icon: Sparkles,
      color: 'text-purple-400 bg-purple-950/80 border-purple-800/50',
      accentGlow: 'hover:border-purple-500/50 hover:shadow-purple-500/10',
      description: 'Strategic technology audits, paperless office roadmaps, legacy system modernisation, and ICT4D project architecture for institutions and donor programs.',
      services: [
        'Digital Readiness Assessments',
        'Paperless Workflow Architecture',
        'ICT4D Project Advisory & Design',
        'Technology Procurement Auditing',
      ],
      targetAction: 'Digital Transformation Audit',
    },
  ];

  const handleWhatsApp = (title: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      `Hello TechNix, I would like to inquire about your ${title} services.`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="solutions" className="py-24 bg-[#040814] text-white relative border-b border-slate-800/80">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-600/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1 text-xs font-mono text-sky-400 shadow-md">
            <Cpu className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">Enterprise Capability Matrix</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Clear, Understandable & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-400 via-blue-200 to-emerald-400 bg-clip-text text-transparent">
              Purchasable Technology Infrastructure
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Organized into six specialized engineering hubs designed to solve real operational bottlenecks across African organisations.
          </p>
        </div>

        {/* 6 Capability Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className={`glass-panel rounded-3xl p-7 flex flex-col justify-between group transition-all duration-300 ${cat.accentGlow}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${cat.color} group-hover:scale-105 transition-transform shadow-inner`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-900/90 border border-slate-800 px-2.5 py-1 rounded-md">
                      {cat.code}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400/90 font-semibold block mb-1">
                    {cat.category}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-sky-300 transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  <div className="space-y-2 mb-8 bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block">
                      Core Infrastructure Deliverables:
                    </span>
                    {cat.services.map((item, sIdx) => (
                      <div key={sIdx} className="flex items-center space-x-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2">
                  <button
                    onClick={() => onOpenQuote(cat.targetAction)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center justify-center space-x-1.5 transition-all cursor-pointer shadow-md shadow-sky-600/20 border border-sky-400/30"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleWhatsApp(cat.title)}
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 hover:border-emerald-500/50 transition-colors cursor-pointer"
                    title="Inquire on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
