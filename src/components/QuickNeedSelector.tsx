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
  Sparkles,
  CheckCircle2
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
  const [hoveredNeed, setHoveredNeed] = useState<string | null>(null);

  const featuredNeed = {
    id: 'website',
    category: 'Commercial Presence',
    title: 'A professional business website that turns visitors into clients',
    description: 'Stop losing clients to competitors who show up first on Google. We build modern, fast websites optimized for local mobile data speeds that give your organisation instant credibility and drive direct sales inquiries to WhatsApp and phone.',
    highlight: 'Includes domain setup, Google Maps verification & WhatsApp lead routing',
    pricing: 'Starting from MK 199,000',
    targetSection: 'business-website',
    serviceName: 'Business Website',
    whatsAppMsg: 'Hello TechNix, I am interested in building a professional business website.',
  };

  const supportingNeeds = [
    {
      id: 'software',
      index: '02',
      category: 'Operations',
      title: 'Custom business software or database',
      description: 'Replace fragmented spreadsheets and manual paper logs with custom management portals, billing systems, and student records.',
      pricing: 'Milestone scope',
      targetSection: 'software-solutions',
      serviceName: 'Custom Business Software',
      icon: Code2,
      whatsAppMsg: 'Hello TechNix, I would like to discuss custom business software.',
    },
    {
      id: 'it-support',
      index: '03',
      category: 'Emergency & Care',
      title: 'Urgent IT rescue or ongoing office support',
      description: 'On-demand technician dispatch for failing servers, crashing computers, broken Wi-Fi, or reliable monthly maintenance retainers.',
      pricing: 'Emergency dispatch & retainers',
      targetSection: 'it-rescue',
      serviceName: 'IT Support & Rescue',
      icon: Wrench,
      whatsAppMsg: 'Hello TechNix, I need IT support assistance.',
    },
    {
      id: 'email',
      index: '04',
      category: 'Identity',
      title: 'Official business email on your domain',
      description: 'Upgrade from @gmail.com to verified company email addresses (name@yourcompany.mw) that pass corporate procurement audits.',
      pricing: 'From MK 7,500 / month',
      targetSection: 'business-email',
      serviceName: 'Professional Business Email',
      icon: Mail,
      whatsAppMsg: 'Hello TechNix, I want to set up professional business email accounts.',
    },
    {
      id: 'hosting',
      index: '05',
      category: 'Cloud',
      title: 'Fast SSD web hosting & .mw domain',
      description: 'High-speed cloud servers with daily automated backups, free SSL certificates, and convenient local Kwacha billing.',
      pricing: 'From MK 65,000 / year',
      targetSection: 'hosting-domains',
      serviceName: 'Web Hosting & Domain',
      icon: Server,
      whatsAppMsg: 'Hello TechNix, I need dependable hosting and domain registration.',
    },
    {
      id: 'data-solution',
      index: '06',
      category: 'Analytics',
      title: 'Executive dashboards & field data systems',
      description: 'Interactive Power BI dashboards and mobile survey data pipelines for executive boards, grant reporting, and donor compliance.',
      pricing: 'Custom project scope',
      targetSection: 'case-studies',
      serviceName: 'Data Systems & Dashboards',
      icon: BarChart3,
      whatsAppMsg: 'Hello TechNix, our organisation needs a data and dashboard solution.',
    },
    {
      id: 'training',
      index: '07',
      category: 'Academy',
      title: 'Practical team training in Excel & Power BI',
      description: 'Hands-on masterclasses led by practicing engineers to turn manual office workflows into fast, automated spreadsheets and dashboards.',
      pricing: 'From MK 95,000 / seat',
      targetSection: 'technix-academy',
      serviceName: 'TechNix Academy Training',
      icon: GraduationCap,
      whatsAppMsg: 'Hello TechNix, I want to inquire about TechNix Academy training.',
    },
  ];

  const handleWhatsApp = (e: React.MouseEvent, msg: string) => {
    e.stopPropagation();
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="service-discovery" className="py-24 bg-[#070c18] text-white border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            Choose Your Path
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">
            What does your organisation need right now?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
            Select the most pressing technology priority for your business. We will take you directly to verified pricing, turnaround timelines, and deployment options.
          </p>
        </div>

        {/* Asymmetric Composition: Featured Path + Supporting Paths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Featured Large Path (Col 1-5) */}
          <div 
            onClick={() => onSelectNeed(featuredNeed.targetSection, featuredNeed.serviceName)}
            className="lg:col-span-5 bg-gradient-to-b from-[#0e172a] to-[#0a1120] border border-sky-500/30 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl hover:border-sky-400/60 transition-all duration-300 cursor-pointer group relative overflow-hidden"
          >
            {/* Visual background conduit accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 blur-[100px] pointer-events-none rounded-full" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  Primary Commercial Gateway
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-lg">
                  {featuredNeed.pricing}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-4 group-hover:text-sky-300 transition-colors">
                {featuredNeed.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                {featuredNeed.description}
              </p>

              <div className="bg-[#050811]/80 border border-slate-800 rounded-2xl p-4 mb-8 space-y-2">
                <div className="text-xs font-semibold text-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{featuredNeed.highlight}</span>
                </div>
                <div className="text-xs font-semibold text-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Turnaround from 5 to 10 working days</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-sm font-bold text-sky-400 group-hover:translate-x-1.5 transition-transform">
                <span>Explore Website Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </div>

              <button
                onClick={(e) => handleWhatsApp(e, featuredNeed.whatsAppMsg)}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700/80 transition-colors flex items-center gap-2 text-xs font-semibold"
                title="Inquire on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Supporting Paths Grid (Col 6-12) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supportingNeeds.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectNeed(item.targetSection, item.serviceName)}
                  onMouseEnter={() => setHoveredNeed(item.id)}
                  onMouseLeave={() => setHoveredNeed(null)}
                  className="bg-[#0a1122]/90 hover:bg-[#0d162c] border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-xl bg-slate-900/90 border border-slate-800 text-sky-400 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-slate-400 font-medium">
                        {item.index} · {item.category}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-sky-300 transition-colors leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4 font-normal line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold text-emerald-400">
                      {item.pricing}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => handleWhatsApp(e, item.whatsAppMsg)}
                        className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 transition-colors"
                        title="Quick WhatsApp inquiry"
                        aria-label={`WhatsApp inquiry for ${item.title}`}
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                      </button>

                      <span className="text-xs font-semibold text-sky-400 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
