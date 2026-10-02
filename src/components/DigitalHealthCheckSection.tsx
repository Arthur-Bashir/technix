import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2, Activity } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface DigitalHealthCheckSectionProps {
  onOpenInteractiveCheck: () => void;
}

export const DigitalHealthCheckSection: React.FC<DigitalHealthCheckSectionProps> = ({
  onOpenInteractiveCheck,
}) => {
  const handleWhatsApp = () => {
    const text = 'Hello TechNix, I would like to schedule a Digital Health Check review for our organisation.';
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="digital-health-check" className="py-24 bg-[#040813] text-white relative overflow-hidden">
      {/* Subtle Visual Diagnostic Grid & Motif */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unboxed Editorial Diagnostic Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Dominant Statement & Rationale */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-sky-400">
              <Activity className="w-3.5 h-3.5" />
              <span>Technology Diagnostic Review</span>
            </div>

            {/* Large Statement per user instruction */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] text-balance">
              Before you invest in more technology, understand what you already have.
            </h2>

            {/* Short Explanation */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
              Most organisations lose revenue, donor credibility, or staff productivity to quiet technical gaps: consumer @gmail inboxes on executive proposals, unbacked databases, or missing mobile web presence. TechNix audits your setup and identifies your exact operational priorities.
            </p>

            {/* Subtle Diagnostic Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-300">
              <div className="border-l-2 border-sky-400/40 pl-3 space-y-1">
                <span className="font-bold text-white block">Presence &amp; Search</span>
                <span className="text-slate-400">Mobile speed &amp; Google visibility</span>
              </div>
              <div className="border-l-2 border-sky-400/40 pl-3 space-y-1">
                <span className="font-bold text-white block">Email &amp; Domains</span>
                <span className="text-slate-400">SPF/DKIM tender compliance</span>
              </div>
              <div className="border-l-2 border-sky-400/40 pl-3 space-y-1">
                <span className="font-bold text-white block">Data &amp; Continuity</span>
                <span className="text-slate-400">Cloud backups &amp; IT uptime</span>
              </div>
            </div>
          </div>

          {/* Right Column: Strong Single CTA Conversion & Diagnostic Motif */}
          <div className="lg:col-span-4 flex flex-col space-y-4 justify-center">
            
            {/* Subtle Diagnostic Graphic Motif */}
            <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-sky-400 font-semibold">DIAGNOSTIC STATUS</span>
                <span className="text-emerald-400">AVAILABLE</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Scope Assessment</span>
                  <span className="font-mono text-slate-400">8 Key Areas</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-sky-400 h-full rounded-full w-full opacity-60" />
                </div>
              </div>

              <div className="text-xs text-slate-400 leading-relaxed font-mono">
                Completed online or in person with a TechNix systems engineer in Blantyre or Lilongwe.
              </div>

              {/* Dominant Primary CTA */}
              <button
                onClick={onOpenInteractiveCheck}
                id="run-health-check-btn"
                className="w-full py-4 px-6 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-2 border border-sky-400/30 shadow-lg shadow-sky-600/30"
              >
                <span>Run Digital Health Check</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary WhatsApp Inquire */}
              <button
                onClick={handleWhatsApp}
                className="w-full py-2.5 text-center text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Or ask a diagnostic question on WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
