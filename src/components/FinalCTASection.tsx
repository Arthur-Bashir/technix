import React from 'react';
import { ArrowRight, PhoneCall, MessageSquare, CheckCircle2, ShieldCheck, Terminal, Radio } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface FinalCTASectionProps {
  onOpenQuote: (service?: string) => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenQuote }) => {
  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 bg-[#040814] text-white relative overflow-hidden border-b border-slate-800/80">
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1.5 text-xs font-mono text-sky-400 shadow-md">
          <Radio className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
          <span className="font-semibold uppercase tracking-wider">Enterprise Engagement Pipeline Active</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Ready to Move Your Business Forward with <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-sky-400 via-blue-200 to-emerald-400 bg-clip-text text-transparent">
            Dependable African Digital Infrastructure?
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Tell us what your organisation needs. We will architect, deploy, and support the right technology infrastructure for your team.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onOpenQuote()}
            id="final-cta-start-project"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xl shadow-sky-600/30 transition-all cursor-pointer border border-sky-400/40"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleWhatsApp('Hello TechNix, I would like to talk to TechNix about our organisation technology needs.')}
            id="final-cta-talk-technix"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-7 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm rounded-xl border border-slate-700 transition-all cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-sky-400" />
            <span>Talk to TechNix</span>
          </button>

          <button
            onClick={() => handleWhatsApp('Hello TechNix Africa, I am reaching out to discuss a project on WhatsApp.')}
            id="final-cta-whatsapp"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm rounded-xl border border-emerald-400/40 shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Talk to TechNix on WhatsApp</span>
          </button>
        </div>

        {/* 3 Confidence Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 max-w-3xl mx-auto text-xs font-mono text-slate-300">
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-center space-x-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Fixed Itemized Pricing</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-center space-x-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Malawi Engineering Hubs</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-center space-x-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Guaranteed Uptime SLAs</span>
          </div>
        </div>

      </div>
    </section>
  );
};
