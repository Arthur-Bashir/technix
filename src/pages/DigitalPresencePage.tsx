import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { WEBSITE_PACKAGES, COMPANY_INFO } from '../data/technixData';

interface DigitalPresencePageProps {
  onOpenQuote: (service?: string) => void;
}

export const DigitalPresencePage: React.FC<DigitalPresencePageProps> = ({ onOpenQuote }) => {
  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 bg-[#050811] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">Digital Presence</h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Websites, domains and professional email that help customers find, understand and contact your organisation.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">What problem does this solve?</h2>
            <p className="text-slate-300">Many organisations rely on personal email or have no clear online presence, making it difficult for potential customers to find and trust them.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Who is it for?</h2>
            <p className="text-slate-300">Businesses, NGOs, institutions and organisations that need to be more discoverable and look professional.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">What practical solution can TechNix provide?</h2>
            <p className="text-slate-300">Professional websites optimised for mobile, domain registration (including .mw), and business email accounts set up and configured to work across devices.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">What should you expect?</h2>
            <p className="text-slate-300">A clear scope, transparent pricing in Malawi Kwacha, practical guidance, and support to get your presence up and running.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {WEBSITE_PACKAGES.map((pkg) => (
                <div key={pkg.id} className="border-t border-slate-800 pt-6 space-y-3">
                  <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                  <div className="text-sm font-semibold text-emerald-400">{pkg.price}</div>
                  <p className="text-sm text-slate-300">{pkg.recommendedFor}</p>
                  <button
                    onClick={() => onOpenQuote(`${pkg.name} (Website)`)}
                    className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg flex items-center gap-2"
                  >
                    Discuss <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8">
            <button
              onClick={() => handleWhatsApp('Hello TechNix, I would like to discuss a website for my organisation.')}
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 rounded-xl flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Discuss on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
