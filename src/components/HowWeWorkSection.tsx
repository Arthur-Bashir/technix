import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Coins,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface HowWeWorkSectionProps {
  onOpenQuote: (service?: string) => void;
}

interface ProcessStage {
  step: string;
  name: string;
  subtitle: string;
  objective: string;
  deliverables: string[];
}

const FIVE_STAGES: ProcessStage[] = [
  {
    step: '01',
    name: 'Understand',
    subtitle: 'Discovery & Operational Review',
    objective: 'We examine your daily workflows, existing hardware/software setup, and business goals before proposing solutions.',
    deliverables: [
      'In-person discovery session in Blantyre, Lilongwe, or online',
      'Operational workflow & infrastructure assessment',
      'Clear identification of friction points and bottlenecks'
    ]
  },
  {
    step: '02',
    name: 'Plan',
    subtitle: 'Architecture & Fixed Kwacha Scope',
    objective: 'We deliver a structured written proposal with exact deliverables, timeline checkpoints, and transparent pricing in Malawi Kwacha.',
    deliverables: [
      'Written technical scope with zero hidden costs',
      'Agreed delivery milestones and sign-off points',
      'Predictable fixed-cost Malawi Kwacha quotation'
    ]
  },
  {
    step: '03',
    name: 'Build',
    subtitle: 'Engineering & Development',
    objective: 'Our engineering team constructs your software, website, or infrastructure in controlled staging environments with regular check-ins.',
    deliverables: [
      'Modern, performant code optimized for local cellular speeds',
      'Regular staging previews for stakeholder feedback',
      'Comprehensive data validation and usability testing'
    ]
  },
  {
    step: '04',
    name: 'Deploy',
    subtitle: 'Rollout & Staff Orientation',
    objective: 'We launch your system, configure domain authentication and security layers, and train your staff on practical day-to-day operations.',
    deliverables: [
      'Smooth transition with minimal disruption to operations',
      'DNS activation, SSL certificates & domain authentication',
      'Hands-on staff orientation and practical user guides'
    ]
  },
  {
    step: '05',
    name: 'Support',
    subtitle: 'Proactive Care & Helpdesk',
    objective: 'We remain your long-term technical partner with local technicians in Blantyre & Lilongwe, scheduled backups, and on-call assistance.',
    deliverables: [
      'Local on-call technical helpdesk for rapid resolution',
      'Scheduled cloud backups and preventative maintenance',
      'Ongoing advisory as your organisation expands'
    ]
  }
];

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ onOpenQuote }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStage = FIVE_STAGES[activeStepIndex];

  const handleWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      'Hello TechNix, I would like to discuss a project and understand your engagement process.'
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="how-we-work" className="py-24 bg-[#050811] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-medium uppercase tracking-wider text-sky-400">
            Process Journey
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
            How We Work
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
            A disciplined five-stage trajectory designed to eliminate surprises, deliver working systems on schedule, and maintain continuity long after launch.
          </p>
        </div>

        {/* 5-Stage Process Diagram Embedded in Page */}
        <div className="mb-16">
          
          {/* Continuous Architectural Timeline Bar */}
          <div className="relative">
            {/* Subtle connecting line running behind the numbers on desktop */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-white/10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
              {FIVE_STAGES.map((st, idx) => {
                const isSelected = activeStepIndex === idx;

                return (
                  <button
                    key={st.step}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`text-left p-4 rounded-xl transition-all cursor-pointer group ${
                      isSelected
                        ? 'bg-sky-500/10 border-b-2 border-sky-400'
                        : 'border-b-2 border-transparent hover:bg-white/[0.02]'
                    }`}
                  >
                    {/* Oversized Number */}
                    <div className={`text-4xl sm:text-5xl font-black font-mono tracking-tight transition-colors mb-2 ${
                      isSelected ? 'text-sky-400' : 'text-slate-600 group-hover:text-slate-400'
                    }`}>
                      {st.step}
                    </div>

                    {/* Stage Name */}
                    <div className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                      isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {st.name}
                    </div>

                    <div className="text-xs font-mono text-slate-400 mt-0.5">
                      {st.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Detailed Breakdown (Containerless Editorial Spread) */}
          <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-3 text-xs font-mono">
                <span className="text-sky-400 font-bold">STAGE {currentStage.step} OF 05</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-400 uppercase tracking-wider">{currentStage.subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Stage {currentStage.step}: {currentStage.name}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed font-normal">
                {currentStage.objective}
              </p>
            </div>

            <div className="lg:col-span-5 space-y-3 lg:border-l lg:border-white/5 lg:pl-8">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Key Stage Deliverables
              </div>

              <div className="space-y-2.5">
                {currentStage.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                    <ChevronRight className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Institutional Confidence Pillars */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full md:w-auto text-slate-300">
            <div className="flex items-center space-x-2.5">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Defined Written Scope</span>
            </div>

            <div className="flex items-center space-x-2.5">
              <Clock className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Agreed Milestone Dates</span>
            </div>

            <div className="flex items-center space-x-2.5">
              <Coins className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Fixed MWK Invoicing</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 shrink-0 w-full md:w-auto justify-end">
            <button
              onClick={() => onOpenQuote('Standard Engagement')}
              className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition-all flex items-center space-x-1.5 cursor-pointer border border-sky-400/30 shadow-md shadow-sky-600/20"
            >
              <span>Start an Engagement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="px-4 py-2.5 bg-transparent hover:bg-slate-900 text-slate-300 hover:text-emerald-400 border border-slate-800 rounded-xl transition-colors flex items-center space-x-1.5 text-xs font-medium cursor-pointer"
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
