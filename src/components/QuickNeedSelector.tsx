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
  MessageSquare
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
      title: 'I need a website',
      description: 'Get a clean, professional website that builds trust and helps customers find and contact your business.',
      icon: Globe,
      badge: 'Popular',
      color: 'blue',
      targetSection: 'business-website',
      serviceName: 'Business Website',
      whatsAppMsg: 'Hello TechNix, I am interested in a business website.',
    },
    {
      id: 'software',
      title: 'I need business software',
      description: 'Custom management systems, databases, and client portals that eliminate manual paper workflows and spreadsheets.',
      icon: Code2,
      badge: 'High Impact',
      color: 'purple',
      targetSection: 'software-solutions',
      serviceName: 'Custom Business Software',
      whatsAppMsg: 'Hello TechNix, I would like to discuss a software project.',
    },
    {
      id: 'it-support',
      title: 'I need IT support',
      description: 'Rapid technical help for crashing computers, down networks, failing printers, and proactive office IT care.',
      icon: Wrench,
      badge: 'Urgent & Care',
      color: 'red',
      targetSection: 'it-rescue',
      serviceName: 'IT Support & Rescue',
      whatsAppMsg: 'Hello TechNix, I need IT support.',
    },
    {
      id: 'email',
      title: 'I need professional email',
      description: 'Stop using @gmail.com. Upgrade to secure company inboxes (name@yourcompany.com) on your own registered domain.',
      icon: Mail,
      badge: 'Trust',
      color: 'emerald',
      targetSection: 'business-email',
      serviceName: 'Professional Business Email',
      whatsAppMsg: 'Hello TechNix, I want to set up professional business email accounts.',
    },
    {
      id: 'hosting',
      title: 'I need hosting',
      description: 'Fast, secure cloud hosting, SSL certificates, automated backups, and local .mw / international domain registration.',
      icon: Server,
      badge: 'Infrastructure',
      color: 'cyan',
      targetSection: 'solutions',
      serviceName: 'Web Hosting & Domain',
      whatsAppMsg: 'Hello TechNix, I need reliable web hosting and domain registration.',
    },
    {
      id: 'data-solution',
      title: 'I need a digital/data solution',
      description: 'Automated data pipelines, mobile field survey collection, and interactive executive Power BI dashboards.',
      icon: BarChart3,
      badge: 'Analytics',
      color: 'indigo',
      targetSection: 'case-studies',
      serviceName: 'Data Systems & Dashboards',
      whatsAppMsg: 'Hello TechNix, our organisation needs a digital data and dashboard solution.',
    },
    {
      id: 'training',
      title: 'I need technology training',
      description: 'Practical, job-ready skills in Advanced Excel, Power BI, AI business automation, and IT network administration.',
      icon: GraduationCap,
      badge: 'TechNix Academy',
      color: 'amber',
      targetSection: 'academy',
      serviceName: 'TechNix Academy Training',
      whatsAppMsg: 'Hello TechNix, I want to inquire about practical technology training courses.',
    },
  ];

  const handleWhatsApp = (e: React.MouseEvent, msg: string) => {
    e.stopPropagation();
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="service-discovery" className="py-20 bg-slate-50 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Quick Identification
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How Can We Help You?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Select what your organisation needs right now. We will direct you straight to the practical solution without technical jargon.
          </p>
        </div>

        {/* 7 Large Visually Attractive Choice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {needs.map((item, idx) => {
            const Icon = item.icon;
            const isWide = idx === 6; // Center the 7th item nicely on desktop
            return (
              <div
                key={item.id}
                onClick={() => onSelectNeed(item.targetSection, item.serviceName)}
                className={`group relative bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isWide ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-700 group-hover:text-white transition-colors flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
                    &ldquo;{item.title}&rdquo;
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center text-sm font-semibold text-blue-700 group-hover:translate-x-1 transition-transform">
                    <span>Explore solution</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </span>

                  <button
                    onClick={(e) => handleWhatsApp(e, item.whatsAppMsg)}
                    className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors cursor-pointer"
                    title={`Inquire about "${item.title}" on WhatsApp`}
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
