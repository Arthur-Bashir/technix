import React from 'react';
import { 
  Laptop, 
  Cloud, 
  ShieldCheck, 
  BarChart, 
  GraduationCap, 
  Sparkles, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface CentralSolutionsSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const CentralSolutionsSection: React.FC<CentralSolutionsSectionProps> = ({ onOpenQuote }) => {
  const solutionCategories = [
    {
      title: 'Digital Solutions',
      category: 'Websites, Software & Mobile Apps',
      icon: Laptop,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
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
      title: 'Cloud & Infrastructure',
      category: 'Hosting, Domains & Business Email',
      icon: Cloud,
      color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
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
      title: 'Business IT & TechNix Care',
      category: 'Managed IT & Technical Support',
      icon: ShieldCheck,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
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
      title: 'Data & Dashboards',
      category: 'M&E, Reporting & Business Intelligence',
      icon: BarChart,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
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
      title: 'TechNix Academy',
      category: 'Practical Professional Tech Training',
      icon: GraduationCap,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
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
      title: 'Digital Transformation',
      category: 'ICT Strategy & Process Modernisation',
      icon: Sparkles,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
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
    <section id="solutions" className="py-24 bg-slate-50 border-t border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1 text-xs font-bold text-blue-700">
            <span>Comprehensive Solutions Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Clear, Understandable & Purchasable Technology
          </h2>
          <p className="text-lg text-slate-600">
            We organize our capabilities into six focused service hubs designed to solve real operational bottlenecks.
          </p>
        </div>

        {/* 6 Category Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${cat.color} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {cat.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Core Capabilities:
                    </span>
                    {cat.services.map((item, sIdx) => (
                      <div key={sIdx} className="flex items-center space-x-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onOpenQuote(cat.targetAction)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleWhatsApp(cat.title)}
                    className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors cursor-pointer"
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
