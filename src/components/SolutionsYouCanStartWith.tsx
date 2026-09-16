import React from 'react';
import { 
  Globe, 
  Mail, 
  Wrench, 
  ShieldCheck, 
  Code2, 
  GraduationCap, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  MessageSquare
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
      name: 'Business Websites',
      description: 'Get a professional website that helps customers find, trust and contact your business.',
      mainBenefit: 'Immediate online credibility, Google visibility, and direct WhatsApp customer inquiries.',
      icon: Globe,
      iconBg: 'bg-blue-50 text-blue-600',
      badge: 'High Conversion',
      ctaText: 'Build My Website',
      targetSection: 'business-website',
      action: () => onOpenQuote('Business Website'),
      whatsAppMsg: 'Hello TechNix, I want to build a professional website for my business.',
    },
    {
      id: 'business-email',
      name: 'Business Email',
      description: 'Replace @gmail.com with secure, professional email on your company domain for your entire team.',
      mainBenefit: 'Win corporate tenders and client trust with branded inboxes synced on all devices.',
      icon: Mail,
      iconBg: 'bg-emerald-50 text-emerald-600',
      badge: 'Brand Credibility',
      ctaText: 'Get Business Email',
      targetSection: 'business-email',
      action: () => onOpenQuote('Professional Business Email'),
      whatsAppMsg: 'Hello TechNix, I want to set up professional business email accounts for my team.',
    },
    {
      id: 'it-rescue',
      name: 'TechNix IT Rescue',
      description: 'Fast on-site and remote technical emergency response when computer problems stop your workday.',
      mainBenefit: 'Rapid diagnostics for crashing PCs, down networks, failing printers, and data recovery.',
      icon: Wrench,
      iconBg: 'bg-red-50 text-red-600',
      badge: 'Same-Day Response',
      ctaText: 'Get IT Rescue',
      targetSection: 'it-rescue',
      action: () => onOpenITRescue(),
      whatsAppMsg: 'Hello TechNix, I need urgent IT rescue support for an office breakdown.',
    },
    {
      id: 'technix-care',
      name: 'TechNix Care',
      description: 'Proactive monthly IT support and maintenance that prevents breakdowns and protects your data.',
      mainBenefit: 'Your dedicated outsourced IT department without the cost of full-time payroll.',
      icon: ShieldCheck,
      iconBg: 'bg-indigo-50 text-indigo-600',
      badge: 'Monthly Retainer',
      ctaText: 'Get TechNix Care',
      targetSection: 'technix-care',
      action: () => onOpenQuote('TechNix Care Support'),
      whatsAppMsg: 'Hello TechNix, I am interested in signing up for TechNix Care ongoing IT support.',
    },
    {
      id: 'software-solutions',
      name: 'Software Solutions',
      description: 'Custom management systems, databases, and portals built to streamline your daily operations.',
      mainBenefit: 'Eliminate repetitive manual paperwork and get real-time operational reports.',
      icon: Code2,
      iconBg: 'bg-purple-50 text-purple-600',
      badge: 'Custom Built',
      ctaText: 'Discuss Software',
      targetSection: 'software-solutions',
      action: () => onOpenQuote('Custom Software Solution'),
      whatsAppMsg: 'Hello TechNix, I would like to discuss building custom business software.',
    },
    {
      id: 'academy',
      name: 'TechNix Academy',
      description: 'Practical, hands-on technology training that empowers your staff to do more in less time.',
      mainBenefit: 'Job-ready skills in Advanced Excel, Power BI dashboards, AI tools, and network administration.',
      icon: GraduationCap,
      iconBg: 'bg-amber-50 text-amber-600',
      badge: 'Capacity Building',
      ctaText: 'Browse Courses',
      targetSection: 'academy',
      action: () => onSelectNeed('academy', 'TechNix Academy'),
      whatsAppMsg: 'Hello TechNix, I want to inquire about upcoming training courses at TechNix Academy.',
    },
    {
      id: 'health-check',
      name: 'Digital Business Health Check',
      description: 'A structured review of your website, email, backups, and security to identify immediate improvements.',
      mainBenefit: 'Know your exact digital vulnerabilities and get a clear, practical improvement plan.',
      icon: Sparkles,
      iconBg: 'bg-sky-50 text-sky-600',
      badge: 'Free Diagnostic',
      ctaText: 'Take Free Health Check',
      targetSection: 'health-check-section',
      action: () => onOpenHealthCheck(),
      whatsAppMsg: 'Hello TechNix, I would like to request a free Digital Business Health Check.',
    },
  ];

  const handleWhatsApp = (e: React.MouseEvent, msg: string) => {
    e.stopPropagation();
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="solutions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Commercial Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Solutions You Can Start With
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Clear, dependable products built to solve real operational challenges for growing African organisations.
          </p>
        </div>

        {/* 7 Core Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => {
            const Icon = product.icon;
            const isFullWidthSpan = idx === 6; // Center the 7th item nicely
            return (
              <div
                key={product.id}
                className={`bg-slate-50/70 border border-slate-200/90 rounded-2xl p-7 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-blue-300 transition-all duration-200 ${
                  isFullWidthSpan ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${product.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-md">
                      {product.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  <div className="p-3 bg-white rounded-xl border border-slate-200/80 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Main Customer Benefit
                    </span>
                    <p className="text-xs text-slate-800 font-medium leading-normal flex items-start space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{product.mainBenefit}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between gap-3">
                  <button
                    onClick={product.action}
                    className="flex-1 py-3 px-4 bg-slate-900 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs"
                  >
                    <span>{product.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={(e) => handleWhatsApp(e, product.whatsAppMsg)}
                    className="p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors cursor-pointer shrink-0"
                    title={`Chat on WhatsApp about ${product.name}`}
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
