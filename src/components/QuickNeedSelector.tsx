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
      index: '01',
      category: 'Web & Presence',
      title: 'I need a business website',
      description: 'Deploy a high-performance commercial website that builds institutional credibility, ranks on Google, and captures WhatsApp sales leads.',
      icon: Globe,
      targetSection: 'business-website',
      serviceName: 'Business Website',
      whatsAppMsg: 'Hello TechNix, I am interested in a business website.',
    },
    {
      id: 'software',
      index: '02',
      category: 'Custom Software',
      title: 'I need business software or a database',
      description: 'Custom management systems, student information databases, and client portals that eliminate manual paper logs and messy spreadsheets.',
      icon: Code2,
      targetSection: 'software-solutions',
      serviceName: 'Custom Business Software',
      whatsAppMsg: 'Hello TechNix, I would like to discuss a custom business software project.',
    },
    {
      id: 'it-support',
      index: '03',
      category: 'IT Rescue & Care',
      title: 'I need IT support or emergency repair',
      description: 'Rapid on-site and remote technical triage for down servers, network crashes, malware removal, and ongoing office maintenance retainers.',
      icon: Wrench,
      targetSection: 'it-rescue',
      serviceName: 'IT Support & Rescue',
      whatsAppMsg: 'Hello TechNix, I need urgent IT support.',
    },
    {
      id: 'email',
      index: '04',
      category: 'Identity & Security',
      title: 'I need professional business email',
      description: 'Move away from personal @gmail.com accounts. Secure company inboxes (name@yourcompany.mw) with SPF and cryptographic protection.',
      icon: Mail,
      targetSection: 'business-email',
      serviceName: 'Professional Business Email',
      whatsAppMsg: 'Hello TechNix, I want to set up professional business email accounts.',
    },
    {
      id: 'hosting',
      index: '05',
      category: 'Cloud Infrastructure',
      title: 'I need web hosting & domain registration',
      description: 'Fast NVMe SSD cloud hosting, complimentary SSL certificates, automated daily backups, and official local .mw or .com registration.',
      icon: Server,
      targetSection: 'hosting-domains',
      serviceName: 'Web Hosting & Domain',
      whatsAppMsg: 'Hello TechNix, I need reliable web hosting and domain registration.',
    },
    {
      id: 'data-solution',
      index: '06',
      category: 'Data & Dashboards',
      title: 'I need executive reporting & data systems',
      description: 'Automated data pipelines, mobile field survey collection, and interactive Power BI executive dashboards for board and donor reviews.',
      icon: BarChart3,
      targetSection: 'case-studies',
      serviceName: 'Data Systems & Dashboards',
      whatsAppMsg: 'Hello TechNix, our organisation needs a digital data and dashboard solution.',
    },
    {
      id: 'training',
      index: '07',
      category: 'Workforce Academy',
      title: 'I need technology skills training',
      description: 'Practical, job-ready masterclasses in Advanced Microsoft Excel, Power BI dashboards, and modern digital office skills for teams.',
      icon: GraduationCap,
      targetSection: 'technix-academy',
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
    <section id="service-discovery" className="py-24 bg-[#050811] text-white border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Clean Editorial Typography */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            System Orientation
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            What Is Your Organisation&apos;s Immediate Operational Priority?
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
            Select a solution path below to review technical specifications, verified Kwacha pricing, and deployment timelines.
          </p>
        </div>

        {/* Structured Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {needs.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onSelectNeed(item.targetSection, item.serviceName)}
                className="bg-[#090e1a]/90 hover:bg-[#0c1322] border border-slate-800/80 hover:border-slate-700 rounded-2xl p-7 transition-all duration-200 flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center group-hover:text-white group-hover:bg-sky-600 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="text-xs font-mono text-slate-400">
                      <span>{item.index}</span>
                      <span aria-hidden="true" className="mx-1.5">·</span>
                      <span>{item.category}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-sky-400 flex items-center space-x-1.5 group-hover:translate-x-1 transition-transform">
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>

                  <button
                    onClick={(e) => handleWhatsApp(e, item.whatsAppMsg)}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 transition-colors"
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
