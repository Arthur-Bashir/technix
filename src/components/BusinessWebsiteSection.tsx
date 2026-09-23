import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  Globe, 
  CheckCircle2, 
  Smartphone, 
  Laptop, 
  Search, 
  ShieldCheck,
  Zap,
  MapPin
} from 'lucide-react';
import { WEBSITE_PACKAGES, COMPANY_INFO } from '../data/technixData';

interface BusinessWebsiteSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const BusinessWebsiteSection: React.FC<BusinessWebsiteSectionProps> = ({ onOpenQuote }) => {
  const [selectedPkgId, setSelectedPkgId] = useState<string>('pkg-professional');

  const selectedPkg = WEBSITE_PACKAGES.find(p => p.id === selectedPkgId) || WEBSITE_PACKAGES[1];

  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="business-website" className="py-24 bg-[#070d1b] text-white relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Editorial & Outcome-Driven */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            Commercial Web Presence
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">
            Websites Built to Turn Inquiries into Paying Customers
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
            Engineered specifically for African business operations: fast on local 3G/4G networks, authoritative for corporate tenders, and wired directly to your WhatsApp sales team.
          </p>
        </div>

        {/* Digital Storefront & Browser-Inspired Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left: Interactive Browser Showcase (Col 1-7) */}
          <div className="lg:col-span-7 bg-[#050811] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            {/* Browser Top Bar */}
            <div className="bg-[#0b1222] border-b border-slate-800/80 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>

              <div className="bg-[#050811] border border-slate-800 rounded-lg px-4 py-1.5 flex items-center space-x-2 text-xs font-mono text-slate-400 w-3/5 max-w-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">https://yourbusiness.mw</span>
              </div>

              <span className="text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                SSL SECURED
              </span>
            </div>

            {/* Storefront Interior View */}
            <div className="p-8 sm:p-10 space-y-8">
              <div className="space-y-4">
                <div className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Airtel & TNM Data-Optimized Architecture</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Never lose a customer to slow load times or missing contact channels.
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Over 75% of Malawian web traffic accesses services from smartphones. We engineer lightweight, high-speed code that loads cleanly on local networks and turns visitors into immediate direct WhatsApp chats.
                </p>
              </div>

              {/* Real World Performance Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#090e1a] border border-slate-800/80 rounded-2xl p-4 space-y-1">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Search className="w-4 h-4 text-sky-400" />
                    <span>Google Search Discovery</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Structured metadata and Google Business Profile setup so local clients find your business first.
                  </p>
                </div>

                <div className="bg-[#090e1a] border border-slate-800/80 rounded-2xl p-4 space-y-1">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Lead Engine</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Custom click-to-chat triggers route customer inquiries straight to your sales team with message context.
                  </p>
                </div>
              </div>

              {/* Turnaround & Domain Inclusion */}
              <div className="bg-sky-950/20 border border-sky-800/40 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="text-slate-300">
                  <span className="font-semibold text-white">Includes: </span>
                  Official .mw or .com domain registration, 12 months hosting, and email accounts.
                </div>
                <span className="font-mono text-sky-400 font-bold">5–10 Day Delivery</span>
              </div>
            </div>
          </div>

          {/* Right: Package Selector & Pricing (Col 8-12) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider mb-2">
              Select Package Tier
            </div>

            {WEBSITE_PACKAGES.map((pkg) => {
              const isSelected = pkg.id === selectedPkgId;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPkgId(pkg.id)}
                  className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0c1527] border-sky-500/70 shadow-xl shadow-sky-950/40'
                      : 'bg-[#090e1a]/80 hover:bg-[#0c1322] border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-bold text-white">
                          {pkg.name}
                        </h4>
                        {pkg.popular && (
                          <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-950/80 border border-sky-800/60 px-2 py-0.5 rounded">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        {pkg.recommendedFor}
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-mono font-black text-emerald-400">
                        {pkg.price}
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 block">
                        starting investment
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-4">
                      <div className="space-y-2">
                        {pkg.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-xs text-slate-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 flex items-center gap-3">
                        <button
                          onClick={() => onOpenQuote(`${pkg.name} (Website)`)}
                          className="flex-1 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center space-x-1.5 cursor-pointer border border-sky-400/30"
                        >
                          <span>Build {pkg.name}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => handleWhatsApp(`Hello TechNix, I want to discuss the ${pkg.name} website package.`)}
                          className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 transition-colors flex items-center justify-center cursor-pointer"
                          title="Inquire via WhatsApp"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
