import React from 'react';
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
  Compass
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
  const needs = [
    {
      id: 'website',
      code: 'RTE-01',
      title: 'I need a website',
      description: 'Deploy a high-performance, mobile-optimized commercial website that builds institutional trust and generates inbound client inquiries.',
      icon: Globe,
      badge: 'Presence',
      targetSection: 'business-website',
      serviceName: 'Business Website',
      accentColor: 'text-sky-400 bg-sky-950/80 border-sky-800/40',
      whatsAppMsg: 'Hello TechNix, I am interested in a business website.',
    },
    {
      id: 'software',
      code: 'RTE-02',
      title: 'I need business software',
      description: 'Custom management systems, databases, and client portals that eliminate manual paper workflows and fragmented spreadsheets.',
      icon: Code2,
      badge: 'Automation',
      targetSection: 'software-solutions',
      serviceName: 'Custom Business Software',
      accentColor: 'text-purple-400 bg-purple-950/80 border-purple-800/40',
      whatsAppMsg: 'Hello TechNix, I would like to discuss a custom business software project.',
    },
    {
      id: 'it-support',
      code: 'RTE-03',
      title: 'I need IT support & rescue',
      description: 'Rapid physical and remote technical help for crashing computers, down networks, failing printers, and proactive office IT care.',
      icon: Wrench,
      badge: 'Emergency & Care',
      targetSection: 'it-rescue',
      serviceName: 'IT Support & Rescue',
      accentColor: 'text-red-400 bg-red-950/80 border-red-800/40',
      whatsAppMsg: 'Hello TechNix, I need urgent IT support.',
    },
    {
      id: 'email',
      code: 'RTE-04',
      title: 'I need professional email',
      description: 'Migrate away from personal @gmail.com. Upgrade to secure company inboxes (name@yourcompany.mw) on your own registered domain.',
      icon: Mail,
      badge: 'Identity',
      targetSection: 'business-email',
      serviceName: 'Professional Business Email',
      accentColor: 'text-emerald-400 bg-emerald-950/80 border-emerald-800/40',
      whatsAppMsg: 'Hello TechNix, I want to set up professional business email accounts.',
    },
    {
      id: 'hosting',
      code: 'RTE-05',
      title: 'I need hosting & domain',
      description: 'High-speed NVMe cloud hosting, SSL certificates, automated daily backups, and official local .mw or .com domain registration.',
      icon: Server,
      badge: 'Infrastructure',
      targetSection: 'hosting-domains',
      serviceName: 'Web Hosting & Domain',
      accentColor: 'text-cyan-400 bg-cyan-950/80 border-cyan-800/40',
      whatsAppMsg: 'Hello TechNix, I need reliable web hosting and domain registration.',
    },
    {
      id: 'data-solution',
      code: 'RTE-06',
      title: 'I need a digital/data solution',
      description: 'Automated data pipelines, mobile field survey collection, and interactive executive Power BI dashboards for board and donor reporting.',
      icon: BarChart3,
      badge: 'Analytics',
      targetSection: 'case-studies',
      serviceName: 'Data Systems & Dashboards',
      accentColor: 'text-blue-400 bg-blue-950/80 border-blue-800/40',
      whatsAppMsg: 'Hello TechNix, our organisation needs a digital data and dashboard solution.',
    },
    {
      id: 'training',
      code: 'RTE-07',
      title: 'I need technology training',
      description: 'Practical, job-ready skills in Advanced Excel, Power BI, cybersecurity basics, and IT network administration for corporate teams.',
      icon: GraduationCap,
      badge: 'Academy',
      targetSection: 'technix-academy',
      serviceName: 'TechNix Academy Training',
      accentColor: 'text-amber-400 bg-amber-950/80 border-amber-800/40',
      whatsAppMsg: 'Hello TechNix, I want to inquire about practical technology training courses.',
    },
  ];

  const handleWhatsApp = (e: React.MouseEvent, msg: string) => {
    e.stopPropagation();
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="service-discovery" className="py-20 bg-[#030712] text-white border-b border-slate-800/80 relative">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1 text-xs font-mono text-sky-400 shadow-md">
            <Compass className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">Fast System Routing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            What Is Your Organisation&apos;s <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-400 via-blue-200 to-emerald-400 bg-clip-text text-transparent">
              Immediate Operational Priority?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Select what you need below to navigate straight to the relevant technology module, specifications, and pricing.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {needs.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onSelectNeed(item.targetSection, item.serviceName)}
                className="glass-panel rounded-2xl p-6 border border-slate-800/90 hover:border-sky-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-inner transition-transform group-hover:scale-105 ${item.accentColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-950/80 border border-slate-800 px-2 py-0.5 rounded">
                      {item.code} • {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-400 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore Module</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>

                  <button
                    onClick={(e) => handleWhatsApp(e, item.whatsAppMsg)}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700/80 transition-colors"
                    title="Quick inquiry via WhatsApp"
                    aria-label={`WhatsApp inquiry for ${item.title}`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
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
