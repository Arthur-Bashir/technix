import React from 'react';
import { ArrowRight, MessageSquare, AlertTriangle } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface ITSupportPageProps {
  onOpenQuote: (service?: string) => void;
  onOpenITRescue: () => void;
}

export const ITSupportPage: React.FC<ITSupportPageProps> = ({ onOpenQuote, onOpenITRescue }) => {
  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 bg-[#050811] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">IT Operations & Support</h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            IT support, maintenance, hosting and ongoing care to keep your technology working so your team stays productive.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">What problem does this solve?</h2>
            <p className="text-slate-300">Outages, connectivity issues, email problems, or systems that suddenly stop working can disrupt your work and cost you time.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Who is it for?</h2>
            <p className="text-slate-300">Organisations that need reliable support for their day-to-day IT needs without complex support contracts.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">What practical solution can TechNix provide?</h2>
            <p className="text-slate-300">Responsive IT support, proactive maintenance, hosting and domain management, and practical guidance tailored to your setup.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">What should you expect?</h2>
            <p className="text-slate-300">Clear communication, realistic timeframes, and practical fixes that get you back to work.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              onClick={onOpenITRescue}
              className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl flex items-center gap-2"
            >
              <AlertTriangle className="w-4 h-4" />
              Request IT Rescue
            </button>
            <button
              onClick={() => onOpenQuote('IT Support & Maintenance')}
              className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl flex items-center gap-2"
            >
              Discuss Ongoing Support <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleWhatsApp('Hello TechNix, I need help with an IT issue.')}
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 rounded-xl flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Message on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
