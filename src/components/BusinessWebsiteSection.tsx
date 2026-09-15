import React from 'react';
import { Check, ArrowRight, MessageSquare, Globe, Shield, Sparkles, Smartphone } from 'lucide-react';
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
    <section id="business-website" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200/80 rounded-full px-4 py-1 text-xs font-bold text-blue-700">
            <Globe className="w-3.5 h-3.5" />
            <span>Product 1 — Business Websites</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Turn Website Visitors Into Paying Customers
          </h2>
          <p className="text-lg text-slate-600">
            Tell us what your business needs. We will build it. Transparent pricing, modern mobile design, fast turnaround, and full local support.
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
                    ? 'bg-slate-900 text-white shadow-2xl shadow-blue-900/20 ring-2 ring-blue-500 scale-[1.02] lg:-translate-y-2'
                    : 'bg-slate-50 border border-slate-200/80 text-slate-900 hover:shadow-lg'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-black uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold ${isPopular ? 'text-white' : 'text-slate-900'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-sm mt-2 leading-relaxed ${isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="mb-6 pb-6 border-b border-slate-200/20">
                    <span className={`text-xs font-semibold uppercase tracking-wider block ${isPopular ? 'text-blue-300' : 'text-slate-500'}`}>
                      Starting From
                    </span>
                    <div className="flex items-baseline space-x-2 mt-1">
                      <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isPopular ? 'text-emerald-400' : 'text-slate-900'}`}>
                        {pkg.price}
                      </span>
                      <span className={`text-xs ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                        once-off investment
                      </span>
                    </div>
                    <div className={`mt-3 text-xs p-2.5 rounded-lg ${isPopular ? 'bg-slate-800/80 text-blue-200' : 'bg-white border border-slate-200 text-slate-700'}`}>
                      <span className="font-bold">Recommended for: </span>
                      {pkg.recommendedFor}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className={`text-xs font-bold uppercase tracking-wider block ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                      What&apos;s Included:
                    </span>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-sm">
                        <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${isPopular ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTAs */}
                <div className="pt-4 border-t border-slate-200/20 space-y-2.5">
                  <button
                    onClick={() => onOpenQuote(`${pkg.name} Package`)}
                    className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                      isPopular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-slate-900 hover:bg-blue-700 text-white'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleWhatsApp(pkg.whatsAppMessage)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center space-x-2 transition-colors cursor-pointer ${
                      isPopular
                        ? 'bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700'
                        : 'bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Order via WhatsApp</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Upsell / Assurance strip */}
        <div className="mt-14 p-6 bg-blue-50/70 border border-blue-200/80 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-sm text-slate-800">
            <Shield className="w-6 h-6 text-blue-700 shrink-0" />
            <span>
              <strong>Every website package includes:</strong> Free .com or .mw domain, reliable high-speed SSD hosting, SSL security padlock, and WhatsApp chat setup.
            </span>
          </div>
          <button
            onClick={() => onOpenQuote('Custom Web Project')}
            className="shrink-0 text-xs font-bold text-blue-700 hover:text-blue-900 hover:underline flex items-center space-x-1 cursor-pointer"
          >
            <span>Need an e-commerce or custom web system? Request Custom Quote</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
};
