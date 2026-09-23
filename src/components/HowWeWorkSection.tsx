import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  PhoneCall, 
  ShieldCheck, 
  Sparkles, 
  Workflow,
  ChevronRight,
  GitCommit,
  Terminal
} from 'lucide-react';
import { HOW_WE_WORK_STEPS, CUSTOMER_JOURNEY_FLOW, COMPANY_INFO } from '../data/technixData';

interface HowWeWorkSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ onOpenQuote }) => {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      'Hello TechNix, I would like to discuss what my business needs.'
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="how-we-work" className="py-24 bg-[#040814] text-white relative border-b border-slate-800/80">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-sky-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1 text-xs font-mono text-sky-400 shadow-md">
            <Workflow className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">Predictable Execution Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            The 6-Stage Engineering <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-400 via-blue-200 to-emerald-400 bg-clip-text text-transparent">
              Deployment Protocol
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            From initial requirements capture to live production deployment, staff onboarding, and ongoing SLA maintenance, here is how TechNix guarantees commercial confidence.
          </p>
        </div>

        {/* The 6 Clean Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {HOW_WE_WORK_STEPS.map((step) => (
            <div
              key={step.step}
              className="glass-panel rounded-2xl p-7 border border-slate-800/90 hover:border-sky-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-sky-400 font-mono tracking-tight group-hover:text-sky-300 transition-colors">
                    {step.step}
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800/40 text-sky-400 flex items-center justify-center text-xs font-bold font-mono">
                    PH-{step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {step.desc}
                </p>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-4 font-mono">
                  {step.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center space-x-2 text-xs text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className="font-mono text-[11px]">Milestone Guaranteed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Journey Flow Bar */}
        <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              COMMERCIAL TIMELINE
            </span>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Direct Contact to First Operational Milestone in as Little as 5 Days
            </h4>
            <p className="text-xs text-slate-300">
              Clear itemized scope, zero hidden costs, fixed Malawi Kwacha invoicing.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onOpenQuote()}
              className="flex-1 md:flex-none py-3 px-6 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-sky-600/20 transition-all cursor-pointer border border-sky-400/40 text-center"
            >
              Start: Request a Quote
            </button>
            <button
              onClick={handleWhatsApp}
              className="py-3 px-4 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
