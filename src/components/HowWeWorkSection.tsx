import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Coins, 
  CheckCircle2,
  Search,
  FileText,
  Cpu,
  LifeBuoy
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface HowWeWorkSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ onOpenQuote }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      'Hello TechNix, I would like to discuss a project and understand your engagement process.'
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const stages = [
    {
      step: '01',
      verb: 'Understand',
      title: 'Operational Assessment',
      icon: Search,
      summary: 'We begin with a focused conversation to understand your workflow bottlenecks, existing hardware/software environment, and operational goals.',
      deliverable: 'Clarity on requirements, scope boundaries, and technical constraints.',
    },
    {
      step: '02',
      verb: 'Propose',
      title: 'Milestone Scope & Fixed Quote',
      icon: FileText,
      summary: 'You receive an itemized technical proposal with clearly defined deliverables, realistic timelines, and fixed Malawi Kwacha pricing.',
      deliverable: 'Transparent agreement with no hidden costs or surprise fees.',
    },
    {
      step: '03',
      verb: 'Deliver',
      title: 'Direct Engineering & Setup',
      icon: Cpu,
      summary: 'Our engineers build, configure, and thoroughly test the solution on your actual office computers, network, and mobile devices before go-live.',
      deliverable: 'Working deployment verified against your operational needs.',
    },
    {
      step: '04',
      verb: 'Support',
      title: 'Ongoing Operational Care',
      icon: LifeBuoy,
      summary: 'Following handover, we provide staff orientation, scheduled preventative maintenance, backup routines, and reliable on-call technical help.',
      deliverable: 'Direct engineering contact for queries, upgrades, or emergency support.',
    },
  ];

  return (
    <section id="how-we-work" className="py-24 bg-[#060b16] text-white relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            Engagement Process
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">
            A Structured Engineering Engagement
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
            Every project follows a disciplined four-stage trajectory — from initial operational assessment through fixed-scope delivery and ongoing technical support.
          </p>
        </div>

        {/* CONNECTED CONDUIT TIMELINE (Desktop 4-Stage Horizontal Flow) */}
        <div className="hidden lg:block mb-16 relative">
          
          {/* Connecting Infrastructure Conduit Line */}
          <div className="absolute top-7 left-12 right-12 h-[2px] bg-slate-800 -z-0" />
          <div 
            className="absolute top-7 left-12 h-[2px] bg-gradient-to-r from-sky-500 via-sky-400 to-emerald-400 transition-all duration-500 -z-0"
            style={{ width: `${(activeStep / (stages.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {stages.map((st, idx) => {
              const isSelected = activeStep === idx;
              const isPassed = idx <= activeStep;
              const Icon = st.icon;
              return (
                <button
                  key={st.step}
                  onClick={() => setActiveStep(idx)}
                  className="text-left group cursor-pointer transition-all duration-200 focus:outline-none"
                >
                  <div className="flex flex-col items-start">
                    {/* Node Dot */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-sm mb-5 transition-all duration-300 border ${
                      isSelected
                        ? 'bg-sky-500 text-white border-sky-400 shadow-lg shadow-sky-500/30 scale-105'
                        : isPassed
                        ? 'bg-slate-900 text-sky-400 border-sky-600/50'
                        : 'bg-[#050811] text-slate-400 border-slate-800 group-hover:border-slate-700'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="text-xs font-mono font-semibold uppercase text-sky-400 tracking-wider mb-1">
                      {st.step} · {st.verb}
                    </div>

                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                      {st.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal mb-3">
                      {st.summary}
                    </p>

                    <div className="text-[11px] font-mono text-emerald-400/90 flex items-center space-x-1.5 pt-2 border-t border-slate-800/80 w-full">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{st.deliverable}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET CONNECTED VERTICAL PATH */}
        <div className="lg:hidden space-y-6 mb-16 relative">
          <div className="absolute top-4 bottom-4 left-6 w-[2px] bg-slate-800" />

          {stages.map((st) => {
            const Icon = st.icon;
            return (
              <div key={st.step} className="relative flex items-start space-x-5 pl-2">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-sky-500/40 text-sky-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 relative z-10">
                  <Icon className="w-4 h-4" />
                </div>

                <div className="bg-[#090e1a] border border-slate-800/80 rounded-2xl p-5 flex-1 space-y-1.5">
                  <div className="text-xs font-mono font-semibold uppercase text-sky-400">
                    {st.step} · {st.verb}
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {st.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {st.summary}
                  </p>
                  <div className="text-[11px] font-mono text-emerald-400 pt-2 border-t border-slate-800 flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{st.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Assurances Bar */}
        <div className="bg-[#050811] border border-slate-850 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full md:w-auto">
            
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Transparent Terms</span>
                <span className="text-[11px] text-slate-400">Defined scope with no unapproved costs</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Agreed Milestones</span>
                <span className="text-[11px] text-slate-400">Scheduled delivery phases</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                <Coins className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Local Kwacha Billing</span>
                <span className="text-[11px] text-slate-400">No foreign exchange surprises</span>
              </div>
            </div>

          </div>

          <div className="flex items-center space-x-3 shrink-0 w-full md:w-auto justify-end">
            <button
              onClick={() => onOpenQuote('Standard Engagement')}
              className="px-5 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center space-x-2 cursor-pointer border border-sky-400/30"
            >
              <span>Start an Engagement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="p-3 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 rounded-xl transition-colors flex items-center space-x-1.5 text-xs font-semibold cursor-pointer"
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
