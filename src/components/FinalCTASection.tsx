import React from 'react';
import { ArrowRight, PhoneCall, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';
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
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Subtle architectural background accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-1.5 text-xs font-bold text-blue-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>TechNix Africa Commercial Partnership</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Ready to Move Your Business Forward?
        </h2>

        {/* Supporting Text */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Tell us what you need. We&apos;ll help you find the right technology solution.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onOpenQuote()}
            id="final-cta-start-project"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base rounded-xl shadow-xl shadow-blue-600/30 transition-all cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleWhatsApp('Hello TechNix, I would like to talk to TechNix about our organisation technology needs.')}
            id="final-cta-talk-technix"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-7 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-base rounded-xl border border-slate-700 transition-all cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-blue-400" />
            <span>Talk to TechNix</span>
          </button>

          <button
            onClick={() => handleWhatsApp('Hello TechNix Africa, I am reaching out to discuss a project on WhatsApp.')}
            id="final-cta-whatsapp"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-4 bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-base rounded-xl border border-emerald-500/40 shadow-md transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Clear Upfront Pricing in MK</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Local Engineering Teams in Blantyre & Lilongwe</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Rapid Response Times</span>
          </div>
        </div>
      </div>
    </section>
  );
};
