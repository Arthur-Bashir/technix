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
  MessageSquare,
  Zap
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
      code: 'MOD-01',
      name: 'Business Websites',
      description: 'Deploy a high-converting corporate website that helps clients find, trust, and contact your business directly.',
      mainBenefit: 'Immediate commercial credibility, Google visibility, and direct WhatsApp customer inquiries.',
      icon: Globe,
      accent: 'text-sky-400 bg-sky-950/80 border-sky-800/40',
      badge: 'From MK 199k',
      ctaText: 'Build My Website',
      targetSection: 'business-website',
      action: () => onOpenQuote('Business Website'),
      whatsAppMsg: 'Hello TechNix, I want to build a professional website for my business.',
    },
    {
      id: 'business-email',
      code: 'MOD-02',
      name: 'Business Email',
      description: 'Replace @gmail.com with secure, professional email on your company domain for your entire team.',
      mainBenefit: 'Pass corporate procurement audits and win tenders with verified company domain inboxes.',
      icon: Mail,
      accent: 'text-emerald-400 bg-emerald-950/80 border-emerald-800/40',
      badge: 'From MK 7,500/mo',
      ctaText: 'Get Business Email',
      targetSection: 'business-email',
      action: () => onOpenQuote('Professional Business Email'),
      whatsAppMsg: 'Hello TechNix, I want to set up professional business email accounts for my team.',
    },
    {
      id: 'it-rescue',
      code: 'MOD-04',
      name: 'TechNix IT Rescue',
      description: 'Rapid physical and remote technical emergency response when computer problems stop your workday.',
      mainBenefit: 'Rapid diagnostics for crashing PCs, down networks, failing printers, and data recovery.',
      icon: Wrench,
      accent: 'text-red-400 bg-red-950/80 border-red-800/40',
      badge: 'Emergency Response',
      ctaText: 'Request IT Rescue',
      targetSection: 'it-rescue',
      action: () => onOpenITRescue(),
      whatsAppMsg: '🚨 URGENT: I need emergency IT rescue assistance.',
    },
    {
      id: 'technix-care',
      code: 'MOD-05',
      name: 'TechNix Care Managed IT',
      description: 'Proactive monthly IT support, computer health servicing, antivirus, backups, and priority support.',
      mainBenefit: 'Eliminate unplanned downtime, preserve hardware life, and have a dedicated IT department on retainer.',
      icon: ShieldCheck,
      accent: 'text-indigo-400 bg-indigo-950/80 border-indigo-800/40',
      badge: 'From MK 50k/mo',
      ctaText: 'Explore Care Plans',
      targetSection: 'technix-care',
      action: () => onOpenQuote('TechNix Care Monthly IT'),
      whatsAppMsg: 'Hello TechNix, I am interested in TechNix Care monthly IT support plans.',
    },
    {
      id: 'software-solutions',
      code: 'MOD-06',
      name: 'Software Solutions',
      description: 'Custom web software, school management portals, and NGO data collection systems tailored to your workflows.',
      mainBenefit: 'Automate manual paper processes, eliminate human error, and gain real-time visibility.',
      icon: Code2,
      accent: 'text-purple-400 bg-purple-950/80 border-purple-800/40',
      badge: 'Custom Architecture',
      ctaText: 'Discuss My Software',
      targetSection: 'software-solutions',
      action: () => onOpenQuote('Custom Software Solution'),
      whatsAppMsg: 'Hello TechNix, I would like to discuss a custom software project.',
    },
    {
      id: 'technix-academy',
      code: 'MOD-07',
      name: 'TechNix Academy',
      description: 'Practical, in-demand technical courses in Advanced Excel, Power BI, and digital skills taught by practicing engineers.',
      mainBenefit: 'Upskill your workforce with hands-on capabilities that immediately improve productivity.',
      icon: GraduationCap,
      accent: 'text-amber-400 bg-amber-950/80 border-amber-800/40',
      badge: 'Practical Cohorts',
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
    <section id="solutions" className="py-24 bg-[#040814] text-white relative border-b border-slate-800/80">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-sky-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1 text-xs font-mono text-sky-400 shadow-md">
            <Zap className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-semibold uppercase tracking-wider">Fast-Deployment Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Digital Solutions You Can <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-400 via-blue-200 to-emerald-400 bg-clip-text text-transparent">
              Deploy in Days, Not Months
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            No endless scoping meetings or theoretical presentations. These are concrete, tested technology modules that solve immediate operational bottlenecks.
          </p>
        </div>

        {/* 6 Core Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {products.map((prod) => {
            const Icon = prod.icon;
            return (
              <div
                key={prod.id}
                className="glass-panel rounded-2xl p-7 border border-slate-800/90 hover:border-sky-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-inner transition-transform group-hover:scale-105 ${prod.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 bg-slate-950/80 border border-slate-800 px-2.5 py-1 rounded">
                      {prod.code} • {prod.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {prod.description}
                  </p>

                  <div className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-3 mb-6">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Business Outcome:
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed font-medium">
                      {prod.mainBenefit}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <button
                    onClick={prod.action}
                    className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-sky-600/20 transition-all cursor-pointer flex items-center justify-center space-x-1.5 border border-sky-400/30"
                  >
                    <span>{prod.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center justify-between gap-2 pt-1">
                    <button
                      onClick={() => onSelectNeed(prod.targetSection, prod.name)}
                      className="text-xs font-mono text-slate-400 hover:text-sky-300 transition-colors"
                    >
                      View full specs &rarr;
                    </button>

                    <button
                      onClick={() => handleWhatsApp(prod.whatsAppMsg)}
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700/80 transition-colors flex items-center space-x-1 text-xs"
                      title="Quick WhatsApp inquiry"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span className="font-mono text-[11px]">Chat</span>
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
