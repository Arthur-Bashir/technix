import React from 'react';
import { ArrowRight, PhoneCall, MessageSquare, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
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
    <section className="py-28 bg-[#050811] text-white relative overflow-hidden border-b border-slate-800/80">
      {/* Visual ties back to 3D hero spatial infrastructure */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-500/10 blur-[180px] rounded-full pointer-events-none" />

      {/* Subtle regional coordinate markings */}
      <div className="absolute top-8 left-8 text-[11px] font-mono text-slate-400 hidden md:block">
        BLANTYRE [15.7861° S, 35.0058° E]
      </div>
      <div className="absolute top-8 right-8 text-[11px] font-mono text-slate-400 hidden md:block">
        LILONGWE [13.9626° S, 33.7741° E]
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Unboxed Kicker */}
        <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
          Begin Your Engagement
        </div>

        {/* Display Statement */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] text-balance">
          Your technology should help your business move forward.
        </h2>

        {/* Supporting Narrative */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
          Whether you need an institutional website, a custom operational database, emergency IT rescue, or proactive monthly support, our engineering team is ready to deliver.
        </p>

        {/* Action Triggers */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onOpenQuote()}
            id="final-cta-start-project"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm rounded-xl shadow-xl shadow-sky-600/30 transition-all cursor-pointer border border-sky-400/40"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleWhatsApp('Hello TechNix, I want to talk to TechNix about our organisation technology needs.')}
            id="final-cta-whatsapp"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-7 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl border border-emerald-400/40 shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </button>

          <a
            href={`tel:${COMPANY_INFO.phonePrimary}`}
            id="final-cta-call"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl border border-slate-700 transition-all cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-sky-400" />
            <span>Call Our Team</span>
          </a>
        </div>

        {/* Three Quiet Commercial Confidence Pillars - Clean Containerless Dividers */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 pt-8 max-w-3xl mx-auto text-xs font-mono text-slate-400 border-t border-slate-800/80">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Transparent Kwacha Pricing</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Blantyre &amp; Lilongwe Hubs</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Direct Technical Engineers</span>
          </div>
        </div>

      </div>
    </section>
  );
};
