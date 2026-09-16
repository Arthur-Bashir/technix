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
  AppWindow
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
    <section id="software-solutions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-1 text-xs font-bold text-indigo-700">
            <Code2 className="w-3.5 h-3.5" />
            <span>Product 6 — Software Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Custom Software Built Around How Your Business Operates
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Off-the-shelf software often forces you to change your workflow or charges steep recurring US dollar subscriptions. TechNix engineers tailored business management portals, database tools, and operational systems built specifically for African business operations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Commercial Software Categories</h3>
              <p className="text-xs text-slate-500">Proven architectures built with modern, secure, scalable codebases.</p>
            </div>
            <span className="text-xs font-bold text-indigo-600 hidden sm:inline-block">
              Clear categories — no vague tech buzzwords
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOFTWARE_SYSTEM_TYPES.map((sys) => {
              const Icon = getIcon(sys.icon);
              return (
                <div
                  key={sys.id}
                  className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 hover:bg-white hover:border-indigo-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-indigo-100/70 text-indigo-700 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mb-2">{sys.name}</h4>
                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">{sys.desc}</p>

                    <div className="p-3 bg-indigo-50/50 rounded-xl border border-indigo-100/80 mb-4 flex items-start space-x-2 text-xs text-indigo-900">
                      <Check className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" />
                      <span><strong>Key Advantage:</strong> {sys.highlight}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">Quotation provided after scope assessment</span>
                    <button
                      onClick={() => onOpenQuote(`${sys.name} Custom Software`)}
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Request a Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Transparency Philosophy */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 mb-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Responsible Commercial Pricing
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why TechNix Does Not Publish Flat Prices for Complex Software
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Every organization has unique workflows, compliance demands, and operational branches. Charging a fake flat price risks underdelivering or forcing you into software that does not solve your actual business bottleneck. Instead, we scope thoroughly and provide a fixed-price written quotation based on:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {pricingFactors.map((factor, idx) => {
              const Icon = factor.icon;
              return (
                <div key={idx} className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{factor.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{factor.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
            <span className="text-xs text-slate-400">
              Need an initial architecture consultation or feasibility assessment?
            </span>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => onOpenQuote('Custom Software Solution')}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleWhatsApp('Software Project Discussion')}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <span>Discuss Your Software Project</span>
              </button>

              <button
                onClick={() => handleWhatsApp()}
                className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp TechNix</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
