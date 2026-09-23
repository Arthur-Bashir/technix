import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Clock, 
  HardDrive, 
  Headphones, 
  MessageSquare, 
  CheckCircle2,
  Lock,
  Wifi,
  Laptop
} from 'lucide-react';
import { TECHNIX_CARE_PACKAGES, COMPANY_INFO } from '../data/technixData';

interface TechNixCareSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const TechNixCareSection: React.FC<TechNixCareSectionProps> = ({ onOpenQuote }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('care-business');

  const handleWhatsApp = (planName?: string) => {
    const msg = planName
      ? `Hello TechNix, I am interested in TechNix Care ongoing support (${planName}). Let's discuss our support needs.`
      : 'Hello TechNix, I am interested in ongoing IT support for my organisation.';
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const selectedPlan = TECHNIX_CARE_PACKAGES.find(p => p.id === selectedPlanId) || TECHNIX_CARE_PACKAGES[1];

  const pillars = [
    { title: 'Helpdesk on Call', desc: 'Staff get rapid remote assistance for slow laptops, forgotten passwords, printer jams, and broken software.', icon: Headphones },
    { title: 'Automated Off-Site Backups', desc: 'Nightly encrypted backups of financial databases and critical documents so hardware theft or failure causes zero panic.', icon: HardDrive },
    { title: 'Network & Wi-Fi Stability', desc: 'Active monitoring of office routers, firewalls, and inter-branch links to eliminate connection dropouts.', icon: Wifi },
    { title: 'Cybersecurity Hygiene', desc: 'Managed endpoint antivirus, phishing defense, and operating system patch management across all workstations.', icon: Lock },
  ];

  return (
    <section id="technix-care" className="py-24 bg-[#060e1d] text-white relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Calm Editorial Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            Managed IT Support
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">
            Your Dedicated IT Department on Retainer, for a Fraction of a Full-Time Salary
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
            Hiring a full-time in-house IT manager costs hundreds of thousands each month and leaves you vulnerable when they are away. TechNix Care provides an entire engineering bench on call for a predictable monthly retainer.
          </p>
        </div>

        {/* 4 Operational Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="bg-[#091224] border border-slate-800/80 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Plan Comparison & Retainers */}
        <div className="bg-[#091224] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                Monthly Retainer Options
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                Choose the Right Tier for Your Office Size
              </h3>
            </div>

            <div className="flex items-center bg-[#050811] border border-slate-800 rounded-xl p-1 text-xs">
              {TECHNIX_CARE_PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => setSelectedPlanId(pkg.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                    selectedPlanId === pkg.id ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {pkg.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#050811] border border-slate-800/80 rounded-2xl p-8">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <h4 className="text-2xl font-black text-white">
                  {selectedPlan.name} Plan
                </h4>
                <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">
                  {selectedPlan.workstations}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedPlan.tagline}
              </p>

              <div className="space-y-2 pt-2">
                {selectedPlan.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#091224] border border-slate-800 rounded-2xl p-6 text-center space-y-4">
              <div className="text-xs font-mono uppercase text-slate-400 font-bold">
                Monthly Retainer Fee
              </div>

              <div className="text-3xl font-black font-mono text-emerald-400">
                {selectedPlan.price}
                <span className="text-xs text-slate-400 font-normal"> / month</span>
              </div>

              <div className="text-xs text-slate-400 font-mono">
                {selectedPlan.sla}
              </div>

              <button
                onClick={() => onOpenQuote(`${selectedPlan.name} (TechNix Care)`)}
                className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer border border-sky-400/30"
              >
                <span>Engage {selectedPlan.name} Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleWhatsApp(selectedPlan.name)}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 font-medium text-xs rounded-xl border border-slate-800 transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Discuss on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
