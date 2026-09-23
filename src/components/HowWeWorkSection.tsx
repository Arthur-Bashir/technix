import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Coins, 
  Search,
  FileText,
  Cpu,
  CheckCircle,
  Rocket,
  LifeBuoy
} from 'lucide-react';
import { COMPANY_INFO, HOW_WE_WORK_STEPS } from '../data/technixData';

interface HowWeWorkSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ onOpenQuote }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const handleWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      'Hello TechNix, I would like to discuss a project and understand your engagement process.'
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const stepIcons = [Search, FileText, Cpu, CheckCircle, Rocket, LifeBuoy];

  const steps = HOW_WE_WORK_STEPS.map((s, idx) => ({
    ...s,
    icon: stepIcons[idx] || Search,
  }));

  const currentStep = steps[activeStepIndex] || steps[0];

  return (
    <section id="how-we-work" className="py-24 bg-[#050811] text-white relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-medium uppercase tracking-wider text-sky-400">
            Engineering Workflow
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
            How TechNix Works
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
            A structured, 6-stage engineering trajectory designed to eliminate surprises, deliver working systems on schedule, and provide dependable operational support.
          </p>
        </div>

        {/* 6-Stage Engineering Progression: Sequence with Connecting Indicators */}
        <div className="mb-14">
          
          {/* Horizontal Sequential Stepper (Desktop & Tablet) */}
          <div className="relative pb-6">
            {/* Base Line */}
            <div className="hidden md:block absolute top-6 left-6 right-6 h-[1px] bg-slate-800" />
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative z-10">
              {steps.map((st, idx) => {
                const isSelected = activeStepIndex === idx;
                const isCompleted = idx < activeStepIndex;
                const Icon = st.icon;

                return (
                  <button
                    key={st.step}
                    onClick={() => setActiveStepIndex(idx)}
                    className="text-left group cursor-pointer p-3 rounded-xl transition-colors"
                  >
                    <div className="flex items-center space-x-3 md:flex-col md:items-start md:space-x-0">
                      {/* Node Indicator */}
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono font-bold text-xs mb-3 transition-colors border ${
                        isSelected
                          ? 'bg-sky-500 text-white border-sky-400'
                          : isCompleted
                          ? 'bg-slate-900 text-sky-400 border-sky-500/40'
                          : 'bg-[#080d1a] text-slate-400 border-slate-800 group-hover:border-slate-700'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>

                      <div>
                        <div className="text-xs font-mono font-medium text-sky-400">
                          {st.step}
                        </div>
                        <div className={`text-sm font-bold transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                        }`}>
                          {st.title}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Detailed Breakdown (Editorial, Non-boxed) */}
          <div className="bg-[#070d1a] border border-slate-800/80 rounded-2xl p-8 sm:p-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-mono font-bold text-sky-400">
                  STAGE {currentStep.step} OF 06
                </span>
                <span className="text-slate-600">/</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {currentStep.desc}
                </span>
              </div>

              <span className="text-xs font-mono text-emerald-400">
                Engineering Discipline
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {currentStep.title}
                </h3>
                <p className="text-base text-slate-300 leading-relaxed font-normal">
                  {currentStep.detail}
                </p>
              </div>

              <div className="md:col-span-4 border-l border-slate-800/80 pl-6 space-y-2 text-xs font-mono text-slate-400">
                <div className="text-slate-500 uppercase tracking-wider font-semibold">Stage Objective</div>
                <div className="text-slate-300 font-normal leading-relaxed">{currentStep.desc}</div>
                <div className="pt-2 text-sky-400">Fixed deliverables &amp; agreed checkpoints</div>
              </div>
            </div>
          </div>

        </div>

        {/* Institutional Assurances Bar: Containerless / Subtle Line */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full md:w-auto">
            
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <div>
                <span className="font-bold text-white block">Transparent Terms</span>
                <span className="text-slate-400">Defined scope with no unapproved costs</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold text-white block">Agreed Milestones</span>
                <span className="text-slate-400">Scheduled delivery phases</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Coins className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="font-bold text-white block">Local Kwacha Invoicing</span>
                <span className="text-slate-400">Predictable local business billing</span>
              </div>
            </div>

          </div>

          <div className="flex items-center space-x-3 shrink-0 w-full md:w-auto justify-end">
            <button
              onClick={() => onOpenQuote('Standard Engagement')}
              className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition-all flex items-center space-x-1.5 cursor-pointer border border-sky-400/30"
            >
              <span>Start an Engagement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="p-2.5 bg-transparent hover:bg-slate-900 text-slate-300 hover:text-emerald-400 border border-slate-800 rounded-xl transition-colors flex items-center space-x-1.5 text-xs font-medium cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
