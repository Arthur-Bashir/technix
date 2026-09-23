import React from 'react';
import { Sparkles, ArrowRight, MessageSquare, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface DigitalHealthCheckSectionProps {
  onOpenInteractiveCheck: () => void;
}

export const DigitalHealthCheckSection: React.FC<DigitalHealthCheckSectionProps> = ({
  onOpenInteractiveCheck,
}) => {
  const handleWhatsApp = () => {
    const text = 'Hello TechNix, I would like to schedule a 15-minute Digital Health Check review for our organisation.';
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="digital-health-check" className="py-20 bg-[#060a16] text-white relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strategic Diagnostic Invitation Panel */}
        <div className="bg-[#090f20] border border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 blur-[140px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                Strategic Diagnostic Invitation
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Not sure what your organisation needs? <br className="hidden sm:inline" />
                <span className="text-slate-300">Find the gaps before they become expensive.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
                Most organisations lose commercial credibility, donor funding, or daily productivity to subtle vulnerabilities: free personal emails, unbacked databases, or missing mobile web presence. Our 3-minute health check identifies your highest-risk bottlenecks.
              </p>

              {/* 3 Quiet Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Website & Online Visibility</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Email Security & Domain Trust</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Backup & Network Reliability</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenInteractiveCheck}
                id="run-health-check-btn"
                className="w-full py-4 px-6 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-sky-600/20 transition-all cursor-pointer flex items-center justify-center space-x-2 border border-sky-400/30"
              >
                <span>Run a Digital Health Check</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full py-3.5 px-6 bg-[#050811] hover:bg-[#0c1424] text-emerald-400 border border-slate-800 font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request 15-Min Walkthrough</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
