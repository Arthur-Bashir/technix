import React from 'react';
import { 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Clock, 
  RefreshCw, 
  Server, 
  MessageSquare, 
  Globe, 
  Code2, 
  Lock, 
  Wifi, 
  HardDrive, 
  Headphones, 
  FileCheck,
  PhoneCall,
  CheckCircle2,
  Zap,
  Activity
} from 'lucide-react';
import { TECHNIX_CARE_PACKAGES, COMPANY_INFO } from '../data/technixData';

interface TechNixCareSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const TechNixCareSection: React.FC<TechNixCareSectionProps> = ({ onOpenQuote }) => {
  const handleWhatsApp = (planName?: string) => {
    const msg = planName
      ? `Hello TechNix, I am interested in TechNix Care ongoing support (${planName}). Let's discuss our support needs.`
      : 'Hello TechNix, I am interested in ongoing IT support for my organisation.';
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const supportAreas = [
    { name: 'Website Maintenance', icon: Globe, desc: 'Keep content fresh, plugins updated, security verified, and speeds fast.' },
    { name: 'Software Support', icon: Code2, desc: 'Continuous bug fixes, user adjustments, and database health monitoring.' },
    { name: 'IT Helpdesk Support', icon: Headphones, desc: 'Direct on-call help for desktop issues, slow PCs, and printer failures.' },
    { name: 'Automated Backups', icon: HardDrive, desc: 'Scheduled daily & weekly off-site encrypted backups of essential files.' },
    { name: 'Cybersecurity Defense', icon: Lock, desc: 'Antivirus management, phishing defense, and network firewall configuration.' },
    { name: 'Network Tuning', icon: Wifi, desc: 'Office Wi-Fi tuning, router stability, and inter-branch VPN setups.' },
    { name: 'System Patching', icon: RefreshCw, desc: 'Scheduled operating system, security patch, and software version upgrades.' },
    { name: 'Technical Advisory', icon: FileCheck, desc: 'Staff technical onboarding, hardware procurement advice, and vendor liaison.' },
  ];

  return (
    <section id="technix-care" className="py-24 bg-[#040814] text-white relative border-b border-slate-800/80">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-600/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1 text-xs font-mono text-emerald-400 shadow-md">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold uppercase tracking-wider">Module 05 // Managed IT Support & Proactive Retainers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Your Dedicated Technology Team, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-200 to-sky-400 bg-clip-text text-transparent">
              Without the Overhead of a Full-Time Department
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Hiring a full-time in-house IT manager is expensive. TechNix Care gives your entire office dedicated access to experienced systems engineers, network managers, and helpdesk support for a predictable monthly fee.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenQuote('TechNix Care Managed IT Support')}
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-emerald-600/20 cursor-pointer border border-emerald-400/40"
            >
              <span>Get TechNix Care</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenQuote('TechNix Care Consultation')}
              className="inline-flex items-center space-x-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer border border-slate-700"
            >
              <span>Talk to TechNix</span>
            </button>

            <button
              onClick={() => handleWhatsApp()}
              className="inline-flex items-center space-x-2 px-5 py-3.5 bg-slate-950 hover:bg-slate-900 text-emerald-400 border border-slate-800 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp TechNix</span>
            </button>
          </div>
        </div>

        {/* 8 Practical Support Areas Grid */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
              PROACTIVE IT MAINTENANCE ACROSS 8 SERVICE AREAS
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {supportAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl p-5 border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800/40 text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-inner">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                    {area.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-normal">{area.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Structured TechNix Care Retainer Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {TECHNIX_CARE_PACKAGES.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  isPopular
                    ? 'glass-panel-elevated ring-2 ring-emerald-500 shadow-2xl shadow-emerald-900/30 scale-[1.02] lg:-translate-y-2'
                    : 'glass-panel border-slate-800/90 hover:border-slate-700'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-[11px] font-mono font-black uppercase tracking-wider py-1 px-4 rounded-full shadow-lg flex items-center space-x-1.5 border border-emerald-300">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Recommended for Growing Offices</span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1">
                      SUPPORT TIER
                    </span>
                    <h4 className="text-2xl font-bold text-white">{plan.name}</h4>
                    <p className="text-xs sm:text-sm mt-2 text-slate-300 leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  <div className="mb-6 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        / month
                      </span>
                    </div>
                    <div className="mt-2 text-xs font-semibold text-sky-400 flex items-center space-x-1.5 font-mono">
                      <Activity className="w-3.5 h-3.5" />
                      <span>SLA: {plan.sla}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      Included Care Protocols:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => onOpenQuote(`${plan.name} (TechNix Care)`)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md ${
                      isPopular
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30 border border-emerald-400/40'
                        : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <span>Enroll in {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleWhatsApp(plan.name)}
                    className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer bg-slate-950/80 hover:bg-slate-900 text-emerald-400 border border-slate-800 hover:border-emerald-500/40"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire via WhatsApp</span>
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
