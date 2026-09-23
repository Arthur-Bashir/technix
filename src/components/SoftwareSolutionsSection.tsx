import React, { useState } from 'react';
import { 
  Code2, 
  ArrowRight, 
  MessageSquare, 
  Layers, 
  Users, 
  Boxes, 
  Building2, 
  GraduationCap, 
  CalendarCheck, 
  Package, 
  Globe, 
  ShieldCheck,
  Check,
  Smartphone,
  BarChart3,
  FileSpreadsheet,
  Cpu,
  AppWindow,
  CheckCircle2
} from 'lucide-react';
import { SOFTWARE_SYSTEM_TYPES, COMPANY_INFO } from '../data/technixData';

interface SoftwareSolutionsSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const SoftwareSolutionsSection: React.FC<SoftwareSolutionsSectionProps> = ({ onOpenQuote }) => {
  const handleWhatsApp = (topic?: string) => {
    const msg = topic
      ? `Hello TechNix, I would like to discuss a custom software project: ${topic}.`
      : 'Hello TechNix, I would like to discuss a custom software solution for my business.';
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'Users': return Users;
      case 'Layers': return Layers;
      case 'GraduationCap': return GraduationCap;
      case 'CalendarCheck': return CalendarCheck;
      case 'Package': return Package;
      case 'Globe': return Globe;
      case 'Smartphone': return Smartphone;
      case 'BarChart3': return BarChart3;
      case 'FileSpreadsheet': return FileSpreadsheet;
      case 'Cpu': return Cpu;
      case 'AppWindow': return AppWindow;
      default: return Code2;
    }
  };

  const pricingFactors = [
    { title: 'Project Scope', desc: 'Number of specific user workflows, automated forms, and business logic complexity.', icon: Layers },
    { title: 'Core Modules', desc: 'Inventory tracking, billing gateways, role management, or customer portals required.', icon: Boxes },
    { title: 'User Base & Permissions', desc: 'Single-site administration vs. multi-branch or public multi-tenant user access levels.', icon: Users },
    { title: 'External Integrations', desc: 'Connections to local mobile money (Airtel/TNM), SMS gateways, accounting or CRM tools.', icon: ShieldCheck },
  ];

  return (
    <section id="software-solutions" className="py-24 bg-[#030712] text-white relative border-b border-slate-800/80">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-indigo-600/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1 text-xs font-mono text-indigo-400 shadow-md">
            <Code2 className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">Module 06 // Tailored Software Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Custom Software Systems Built Around <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
              How African Organisations Actually Operate
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Off-the-shelf software forces you to contort your workflows or charges steep recurring US dollar subscriptions. TechNix engineers tailored business management portals, database tools, and operational systems built specifically for local context.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 border-b border-slate-800/80 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white">Commercial Software Categories</h3>
              <p className="text-xs text-slate-400 font-mono">Proven architectures built with modern, secure, scalable codebases.</p>
            </div>
            <span className="text-xs font-mono font-bold text-indigo-400 hidden sm:inline-block">
              SYSTEM ARCHITECTURES // MOD-06
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOFTWARE_SYSTEM_TYPES.map((sys) => {
              const Icon = getIcon(sys.icon);
              return (
                <div
                  key={sys.id}
                  className="glass-panel rounded-2xl p-6 border border-slate-800/90 hover:border-indigo-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-800/40 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {sys.name}
                    </h4>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      {sys.desc}
                    </p>

                    <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 mb-4 flex items-start space-x-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                      <span><strong>Key Advantage:</strong> {sys.highlight}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">Fixed Milestone Scope</span>
                    <button
                      onClick={() => onOpenQuote(`${sys.name} Custom Software`)}
                      className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center space-x-1 cursor-pointer transition-colors"
                    >
                      <span>Request Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Responsible Commercial Pricing Box */}
        <div className="glass-panel-elevated rounded-3xl p-8 sm:p-10 mb-12 border border-slate-800">
          <div className="max-w-3xl space-y-3 mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
              RESPONSIBLE COMMERCIAL PRICING
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Why TechNix Does Not Publish Flat Prices for Enterprise Software
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Every organisation has unique data schemas, internal authorization hierarchies, and reporting flows. We scope every project thoroughly before providing an itemized, milestone-based quote in Malawi Kwacha.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {pricingFactors.map((factor, idx) => {
              const Icon = factor.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-indigo-950/80 border border-indigo-800/40 text-indigo-400 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{factor.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{factor.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
            <span className="text-xs text-slate-400 font-mono">
              Ready to automate your operations? Contact our engineering team in Blantyre & Lilongwe.
            </span>
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={() => onOpenQuote('Custom Software Architecture')}
                className="flex-1 sm:flex-none py-3 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/20 transition-all cursor-pointer border border-indigo-400/40 text-center"
              >
                Request Architecture Consultation
              </button>
              <button
                onClick={() => handleWhatsApp()}
                className="py-3 px-4 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
