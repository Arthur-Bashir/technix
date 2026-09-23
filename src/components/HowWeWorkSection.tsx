import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  ChevronRight,
  ShieldCheck,
  Clock,
  Coins
} from 'lucide-react';
import { HOW_WE_WORK_STEPS, COMPANY_INFO } from '../data/technixData';

interface HowWeWorkSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ onOpenQuote }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      'Hello TechNix, I would like to discuss a project and understand your delivery process.'
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const stages = [
    { key: '01', verb: 'Understand', title: 'Tell Us What You Need', desc: 'An honest, jargon-free conversation to define your operational bottleneck and technical requirements.' },
    { key: '02', verb: 'Plan', title: 'Scope & Transparent Quote', desc: 'An itemized written specification with fixed Malawi Kwacha pricing and guaranteed milestone deadlines.' },
    { key: '03', verb: 'Build', title: 'Direct Engineering', desc: 'Our Malawian software engineers and network technicians build and configure your solution.' },
    { key: '04', verb: 'Test', title: 'Collaborative Review', desc: 'Hands-on walkthrough with your team on your actual laptops and phones to ensure 100% satisfaction.' },
    { key: '05', verb: 'Launch', title: 'Smooth Go-Live', desc: 'Production deployment, domain routing, and data migration without interrupting your business operations.' },
    { key: '06', verb: 'Support', title: 'Long-Term Care', desc: 'Proactive maintenance, automated backups, and senior engineers on call whenever you need assistance.' },
  ];

  return (
    <section id="how-we-work" className="py-24 bg-[#060b16] text-white relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            How We Work
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">
            Predictable Delivery from First Call to Live System
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
            No unexpected invoices or vanishing contractors. We follow a structured six-stage process with clear milestones and fixed pricing.
          </p>
        </div>

        {/* CONNECTED JOURNEY TIMELINE (Desktop & Tablet Horizontal Progression) */}
        <div className="hidden lg:block mb-16 relative">
          
          {/* Connecting Infrastructure Conduit Line */}
          <div className="absolute top-7 left-8 right-8 h-[2px] bg-slate-800 -z-0" />
          <div 
            className="absolute top-7 left-8 h-[2px] bg-gradient-to-r from-sky-500 via-sky-400 to-emerald-400 transition-all duration-500 -z-0"
            style={{ width: `${(activeStep / (stages.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {stages.map((st, idx) => {
              const isSelected = activeStep === idx;
              const isPassed = idx <= activeStep;
              return (
                <button
                  key={st.key}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left group cursor-pointer transition-all duration-200 focus:outline-none`}
                >
                  <div className="flex flex-col items-start">
                    {/* Node Dot */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-sm mb-5 transition-all duration-300 border ${
                      isSelected
                        ? 'bg-sky-500 text-white border-sky-400 shadow-lg shadow-sky-500/30 scale-110'
                        : isPassed
                        ? 'bg-slate-900 text-sky-400 border-sky-600/50'
                        : 'bg-[#050811] text-slate-400 border-slate-800 group-hover:border-slate-700'
                    }`}>
                      {st.key}
                    </div>

                    <div className="text-xs font-mono font-semibold uppercase text-sky-400 tracking-wider mb-1">
                      {st.verb}
                    </div>

                    <h4 className="text-sm font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                      {st.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {st.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET CONNECTED VERTICAL PATH */}
        <div className="lg:hidden space-y-6 mb-16 relative">
          <div className="absolute top-4 bottom-4 left-6 w-[2px] bg-slate-800" />

          {stages.map((st, idx) => (
            <div key={st.key} className="relative flex items-start space-x-5 pl-2">
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-sky-500/40 text-sky-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 relative z-10">
                {st.key}
              </div>

              <div className="bg-[#090e1a] border border-slate-800/80 rounded-2xl p-5 flex-1 space-y-1.5">
                <div className="text-xs font-mono font-semibold uppercase text-sky-400">
                  {st.verb}
                </div>
                <h4 className="text-base font-bold text-white">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* COMMERCIAL CERTAINTY PROMISE BAR */}
        <div className="bg-[#090e1a] border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center shrink-0">
                <Coins className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold uppercase text-slate-400">
                  Fixed Pricing
                </div>
                <h4 className="text-sm font-bold text-white mt-1">
                  Itemized Malawi Kwacha Quotes
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Every deliverable is priced in advance. No unexpected surprises or currency exchange penalties.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold uppercase text-slate-400">
                  Fast Turnaround
                </div>
                <h4 className="text-sm font-bold text-white mt-1">
                  Deployment in 5 to 10 Working Days
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Websites and emails deploy within days. Urgent IT rescue dispatched same-day.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold uppercase text-slate-400">
                  Engineering Continuity
                </div>
                <h4 className="text-sm font-bold text-white mt-1">
                  Local Blantyre & Lilongwe Hubs
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Real Malawian engineers on the ground for physical office visits, support, and maintenance.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-400 font-medium">
              Ready to begin? Share your requirements and receive an itemized proposal within 24 hours.
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenQuote()}
                className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center space-x-1.5 cursor-pointer border border-sky-400/30"
              >
                <span>Request a Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700/80 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                title="Ask a question on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
