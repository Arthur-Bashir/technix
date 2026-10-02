import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
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
    <section className="py-32 sm:py-36 lg:py-44 bg-[#050811] text-white relative overflow-hidden">
      {/* Subtle Spatial Horizon Gradients Connecting to 3D Hero World */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(14,165,233,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* Unboxed Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-mono font-medium tracking-widest uppercase">
          Technology Infrastructure Partner
        </div>

        {/* Display Statement - Large Typographic Conversion Moment */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.06] text-balance">
          Technology that moves your business forward.
        </h2>

        {/* Supporting Narrative */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
          Websites, custom software, IT support and digital infrastructure for organisations across Malawi and Africa. Ready to deploy with clear scope and fixed Kwacha pricing.
        </p>

        {/* Action Triggers: One Dominant Action + Clear Secondary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {/* DOMINANT ACTION: START A PROJECT */}
          <button
            onClick={() => onOpenQuote()}
            id="final-cta-start-project"
            className="w-full sm:w-auto px-10 py-5 bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-base rounded-2xl shadow-2xl shadow-sky-600/40 hover:shadow-sky-500/50 transition-all cursor-pointer flex items-center justify-center space-x-3 border border-sky-400/50"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* SECONDARY ACTION: Talk to TechNix */}
          <button
            onClick={() => handleWhatsApp('Hello TechNix, I want to talk to TechNix about our organisation technology needs.')}
            id="final-cta-talk-technix"
            className="w-full sm:w-auto px-8 py-5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-bold text-base rounded-2xl transition-colors cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>Talk to TechNix</span>
          </button>
        </div>

        {/* Discreet WhatsApp Link - Available but Does Not Visually Compete */}
        <div className="pt-2">
          <button
            onClick={() => handleWhatsApp('Hello TechNix, I would like to chat about a project.')}
            className="text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center space-x-1.5 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Prefer WhatsApp? Chat directly with an engineer</span>
          </button>
        </div>

        {/* Three Quiet Commercial Confidence Pillars */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-12 max-w-3xl mx-auto text-xs font-mono text-slate-400 border-t border-white/5">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Transparent MWK Pricing</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Blantyre &amp; Lilongwe Hubs</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Long-Term Post-Deployment Support</span>
          </div>
        </div>

      </div>
    </section>
  );
};
