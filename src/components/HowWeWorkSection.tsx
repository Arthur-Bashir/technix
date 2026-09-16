import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  PhoneCall, 
  ShieldCheck, 
  Sparkles, 
  Workflow,
  ChevronRight
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
    <section id="how-we-work" className="py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1 text-xs font-bold text-blue-700">
            <Workflow className="w-3.5 h-3.5" />
            <span>Clear, Predictable Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How We Work
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From your first conversation through to launch and ongoing local support, here is exactly how working with TechNix Africa progresses.
          </p>
        </div>

        {/* The 6 Clean Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {HOW_WE_WORK_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-7 hover:border-blue-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-blue-600 font-mono tracking-tight">
                    {step.step}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-blue-100/70 text-blue-700 flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-sm font-semibold text-blue-900/80 mb-3">
                  {step.desc}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-bold text-slate-400">
                <span>Phase {step.step} of 06</span>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Journey Progression Map (Instruction 14) */}
        <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 mb-12 shadow-xl">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
              Complete Customer Journey
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white">
              Every Step Built Around Clarity, Transparency & Growth
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              You never have to guess what comes next or worry about hidden costs.
            </p>
          </div>

          {/* Horizontal Scroller / Step Sequence */}
          <div className="overflow-x-auto pb-4 pt-2">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-[760px]">
              {CUSTOMER_JOURNEY_FLOW.map((item, idx) => {
                const isLast = idx === CUSTOMER_JOURNEY_FLOW.length - 1;
                return (
                  <React.Fragment key={item.step}>
                    <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 shrink-0 hover:border-blue-500/50 transition-colors">
                      <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-black flex items-center justify-center shrink-0">
                        {item.step}
                      </span>
                      <span className="text-xs font-bold text-slate-200 whitespace-nowrap">
                        {item.label}
                      </span>
                    </div>

                    {!isLast && (
                      <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Direct CTA Strip */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-300 text-center sm:text-left">
              Ready to begin? Share what your business is trying to accomplish.
            </span>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => onOpenQuote()}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <span>Talk to TechNix</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
