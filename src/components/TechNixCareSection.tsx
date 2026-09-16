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
  PhoneCall
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
    { name: 'IT Support', icon: Headphones, desc: 'Direct on-call help for desktop issues, slow PCs, and printer failures.' },
    { name: 'Backups', icon: HardDrive, desc: 'Automated daily & weekly off-site encrypted backups of essential files.' },
    { name: 'Security', icon: Lock, desc: 'Antivirus management, phishing defense, and firewall configuration.' },
    { name: 'Network Support', icon: Wifi, desc: 'Office Wi-Fi tuning, router stability, and inter-branch VPN setups.' },
    { name: 'Updates', icon: RefreshCw, desc: 'Scheduled operating system, security patch, and software version upgrades.' },
    { name: 'Technical Assistance', icon: FileCheck, desc: 'Staff technical onboarding, hardware procurement advice, and vendor liaison.' },
  ];

  return (
    <section id="technix-care" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background architectural accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/15 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs font-bold text-emerald-300">
            <ShieldCheck className="w-4 h-4" />
            <span>Product 5 — TechNix Care</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Your Technology Team, Without the Full-Time Cost.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Hiring a full-time in-house IT department is expensive. TechNix Care gives your entire office dedicated access to experienced systems engineers, network managers, and helpdesk support for a predictable monthly fee.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenQuote('TechNix Care Managed IT Support')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-900/30 cursor-pointer"
            >
              <span>Get TechNix Care</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenQuote('TechNix Care Consultation')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-colors cursor-pointer border border-slate-700"
            >
              <span>Talk to TechNix</span>
            </button>

            <button
              onClick={() => handleWhatsApp()}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 bg-slate-800/80 hover:bg-slate-700 text-emerald-400 border border-slate-700 font-bold rounded-xl transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp TechNix</span>
            </button>
          </div>
        </div>

        {/* 8 Practical Support Areas Grid */}
        <div className="mb-20">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-8">
            Ongoing Maintenance Across 8 Essential Service Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {supportAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 hover:border-emerald-500/50 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-700/80 text-emerald-400 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{area.name}</h4>
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
                    ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-emerald-500 shadow-2xl scale-[1.02] lg:-translate-y-2'
                    : 'bg-slate-800/60 border border-slate-700/80 hover:border-slate-600'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-xs font-black uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Recommended for Busy Offices</span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-white">{plan.name}</h4>
                    <p className="text-xs sm:text-sm mt-2 text-slate-300 leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6 pb-6 border-b border-slate-700/80">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block">
                      Starting Monthly Retainer
                    </span>
                    <div className="flex items-baseline space-x-2 mt-1">
                      <span className="text-3xl sm:text-4xl font-black text-white">{plan.price}</span>
                      <span className="text-xs text-slate-400">/ month</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-2 italic">
                      *Starting price only. Subject to workstation scope & exact SLA requirements.
                    </p>
                  </div>

                  {/* Coverage details */}
                  <div className="space-y-2.5 mb-6 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    <div className="flex items-center space-x-2">
                      <Server className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span><strong>Coverage:</strong> {plan.workstations}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span><strong>SLA:</strong> {plan.sla}</span>
                    </div>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-2.5 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-slate-700/60 space-y-2">
                  <button
                    onClick={() => onOpenQuote(`TechNix Care — ${plan.name} Tier`)}
                    className={`w-full py-3 px-4 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-2 ${
                      isPopular
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md'
                        : 'bg-slate-700 hover:bg-slate-600 text-white'
                    }`}
                  >
                    <span>Get TechNix Care ({plan.name})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleWhatsApp(plan.name)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 text-xs font-semibold flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Philosophy & SLA Note */}
        <div className="p-6 bg-slate-800/80 border border-slate-700 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <span>
              <strong>Customizable Scope:</strong> Every business is different. We carry out an initial audit of your equipment and tailor an SLA that fits your exact operational needs.
            </span>
          </div>
          <button
            onClick={() => handleWhatsApp()}
            className="shrink-0 text-emerald-400 hover:text-emerald-300 font-bold flex items-center space-x-1 cursor-pointer"
          >
            <span>Let&apos;s discuss your support needs on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
