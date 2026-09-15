import React, { useState } from 'react';
import { Briefcase, ArrowRight, MessageSquare, CheckCircle, ChevronRight, Layers } from 'lucide-react';
import { CASE_STUDIES, COMPANY_INFO } from '../data/technixData';

interface CaseStudiesSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenQuote }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES[0].id);

  const activeCase = CASE_STUDIES.find((c) => c.id === selectedCaseId) || CASE_STUDIES[0];

  const handleWhatsApp = (clientName: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      `Hello TechNix, I read your case study with ${clientName}. We have a similar operational challenge and would like to discuss a solution.`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="case-studies" className="py-24 bg-slate-50 border-t border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1 text-xs font-bold text-blue-700">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Demonstrated Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Real Problems. Real Solutions. Real Results.
          </h2>
          <p className="text-lg text-slate-600">
            See how TechNix Africa delivers measurable impact for development organizations, health bodies, and commercial enterprises.
          </p>
        </div>

        {/* Case Study Selector Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {CASE_STUDIES.map((item) => {
            const isSelected = item.id === selectedCaseId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCaseId(item.id)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-100/50'
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1.5 ${
                  isSelected ? 'text-blue-300' : 'text-blue-600'
                }`}>
                  {item.clientCategory}
                </span>
                <h4 className="text-sm font-bold line-clamp-1 mb-1">{item.client}</h4>
                <p className={`text-xs line-clamp-2 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  {item.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Case Study Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-8 lg:p-12">
          {/* Top metadata */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-slate-100 gap-4">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md">
                {activeCase.clientCategory}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                {activeCase.title}
              </h3>
              <p className="text-sm text-slate-500 font-medium mt-1">
                Collaborative Partner: <span className="text-slate-800 font-bold">{activeCase.client}</span>
              </p>
            </div>

            {/* Impact Metric Chips */}
            <div className="flex flex-wrap items-center gap-3">
              {activeCase.impactMetrics.map((metric, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-2.5 text-center">
                  <span className="text-lg font-black text-slate-900 block">{metric.value}</span>
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Problem -> Solution -> Result Structured Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {/* The Problem */}
            <div className="bg-red-50/50 border border-red-200/70 rounded-2xl p-6 space-y-3">
              <span className="text-xs font-bold text-red-700 uppercase tracking-wider block">
                1. The Problem (Before)
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeCase.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="bg-blue-50/50 border border-blue-200/70 rounded-2xl p-6 space-y-3">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                2. The Solution (What TechNix Built)
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeCase.solution}
              </p>
            </div>

            {/* The Result */}
            <div className="bg-emerald-50/50 border border-emerald-200/70 rounded-2xl p-6 space-y-3">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                3. The Result (The Outcome)
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeCase.result}
              </p>
            </div>
          </div>

          {/* Technical Architecture Highlight */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 mb-8 flex items-center space-x-3">
            <Layers className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <strong>Technology & Architecture: </strong> {activeCase.techHighlight}
            </span>
          </div>

          {/* Case Study Call to Action */}
          <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-white">Have a similar problem in your organisation?</h4>
              <p className="text-xs text-slate-300">
                Let&apos;s evaluate your current workflow and determine the best approach.
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={() => onOpenQuote(`Consultation: Similar to ${activeCase.client} case study`)}
                className="py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center space-x-1.5"
              >
                <span>Talk to TechNix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleWhatsApp(activeCase.client)}
                className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer flex items-center space-x-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
