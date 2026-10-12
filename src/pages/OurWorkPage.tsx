import React from 'react';
import { MapPin, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import { CASE_STUDIES, COMPANY_INFO } from '../data/technixData';

interface OurWorkPageProps {
  onOpenQuote: (service?: string) => void;
}

export const OurWorkPage: React.FC<OurWorkPageProps> = ({ onOpenQuote }) => {
  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 bg-[#050811] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">Our Work</h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Factual engagements with respected organisations across Malawi. We share only verified information.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400" />
              <h2 className="text-xl font-bold text-white">PACT Malawi</h2>
            </div>
            <p className="text-slate-300">IT support experience since 2017.</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400" />
              <h2 className="text-xl font-bold text-white">Save the Children</h2>
            </div>
            <p className="text-slate-300">Database system development projects.</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400" />
              <h2 className="text-xl font-bold text-white">Malawi Red Cross Society</h2>
            </div>
            <p className="text-slate-300">Website and intranet solutions.</p>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <h2 className="text-2xl font-bold text-white mb-6">Additional Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CASE_STUDIES.map((study) => (
                <div key={study.id} className="space-y-3 border-t border-slate-800 pt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">{study.client}</h3>
                    <span className="text-xs font-mono text-slate-500">{study.clientCategory}</span>
                  </div>
                  <p className="text-sm text-slate-300">{study.title}</p>
                  <div className="text-sm text-slate-300">
                    <div className="font-semibold text-white mb-1">Problem:</div>
                    <p>{study.problem}</p>
                  </div>
                  <div className="text-sm text-slate-300">
                    <div className="font-semibold text-white mb-1">Solution:</div>
                    <p>{study.solution}</p>
                  </div>
                  <div className="text-sm text-slate-300">
                    <div className="font-semibold text-white mb-1">Result:</div>
                    <p>{study.result}</p>
                  </div>
                  <div className="text-xs text-slate-400 pt-2 border-t border-slate-800/60">
                    Tech: {study.techHighlight}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button
              onClick={() => onOpenQuote()}
              className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl flex items-center gap-2"
            >
              Discuss a Project <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleWhatsApp('Hello TechNix, I would like to discuss a project.')}
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
