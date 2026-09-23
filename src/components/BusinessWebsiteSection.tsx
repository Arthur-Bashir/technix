import React from 'react';
import { Check, ArrowRight, MessageSquare, Globe, Shield, Sparkles, Smartphone, CheckCircle2 } from 'lucide-react';
import { WEBSITE_PACKAGES, COMPANY_INFO } from '../data/technixData';

interface BusinessWebsiteSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const BusinessWebsiteSection: React.FC<BusinessWebsiteSectionProps> = ({ onOpenQuote }) => {
  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="business-website" className="py-24 bg-[#040814] text-white relative border-b border-slate-800/80">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-sky-600/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1 text-xs font-mono text-sky-400 shadow-md">
            <Globe className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">Module 01 // Digital Presence Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Turn Website Visitors Into <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-400 via-blue-200 to-emerald-400 bg-clip-text text-transparent">
              Paying Customers & Institutional Clients
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Transparent pricing, modern mobile design, Airtel & TNM speed optimization, and direct WhatsApp customer conversion.
          </p>
        </div>

        {/* Pricing & Package Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {WEBSITE_PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                id={`pkg-card-${pkg.id}`}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  isPopular
                    ? 'glass-panel-elevated ring-2 ring-sky-500 shadow-2xl shadow-sky-600/20 scale-[1.02] lg:-translate-y-2'
                    : 'glass-panel border-slate-800/90 hover:border-slate-700'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-[11px] font-mono font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg flex items-center space-x-1.5 border border-sky-300/40">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>Most Popular Deployment</span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1">
                      SPECIFICATION TIER
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm mt-2 leading-relaxed text-slate-300">
                      {pkg.tagline}
                    </p>
                  </div>

                  <div className="mb-6 p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl sm:text-3xl font-black text-white font-mono">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        starting investment
                      </span>
                    </div>
                    <div className="mt-2 text-xs font-semibold text-sky-400 flex items-center space-x-1.5 font-mono">
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>{pkg.recommendedFor}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      Included Architecture Deliverables:
                    </span>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => onOpenQuote(`${pkg.name} (Website)`)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md ${
                      isPopular
                        ? 'bg-sky-600 hover:bg-sky-500 text-white shadow-sky-600/30 border border-sky-400/40'
                        : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <span>Choose {pkg.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() =>
                      handleWhatsApp(
                        `Hello TechNix, I am interested in the ${pkg.name} website package (${pkg.price}).`
                      )
                    }
                    className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer bg-slate-950/80 hover:bg-slate-900 text-emerald-400 border border-slate-800 hover:border-emerald-500/40"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
