import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface BusinessSystemsPageProps {
  onOpenQuote: (service?: string) => void;
}

export const BusinessSystemsPage: React.FC<BusinessSystemsPageProps> = ({ onOpenQuote }) => {
  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 bg-[#050811] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">Business Systems & Data</h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Custom software, databases, workflow improvement and reporting to help your organisation work smarter.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">What problem does this solve?</h2>
            <p className="text-slate-300">Repetitive manual work, scattered records, and difficulty getting clear information for decision making.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Who is it for?</h2>
            <p className="text-slate-300">Organisations looking to streamline processes, track information better, or replace paper/spreadsheet-heavy workflows.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">What practical solution can TechNix provide?</h2>
            <p className="text-slate-300">Tailored web systems, databases, and reporting tools designed around how you actually work.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">What should you expect?</h2>
            <p className="text-slate-300">A practical scoping discussion, clear requirements, milestone-based approach, and training to use the system confidently.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              onClick={() => onOpenQuote('Custom Software Solution')}
              className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl flex items-center gap-2"
            >
              Discuss Your System <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleWhatsApp('Hello TechNix, I would like to discuss a custom software project.')}
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
