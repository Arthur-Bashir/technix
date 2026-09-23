import React from 'react';
import { ShieldCheck, CheckCircle2, HeartHandshake, Stethoscope, Building2, Award } from 'lucide-react';

export const TrustCredibilitySection: React.FC = () => {
  const clientRelationships = [
    {
      name: 'PACT Malawi',
      category: 'Development & Civil Society',
      statement: 'TechNix has provided mission-critical IT support and systems infrastructure services to PACT Malawi since 2017.',
      icon: HeartHandshake,
      accent: 'text-sky-400 bg-sky-950/80 border-sky-800/40',
      tenure: 'PARTNER SINCE 2017',
    },
    {
      name: 'Save the Children',
      category: 'Child Protection & Education',
      statement: 'TechNix has engineered database systems and digital resource tracking platforms for education partner initiatives.',
      icon: Building2,
      accent: 'text-emerald-400 bg-emerald-950/80 border-emerald-800/40',
      tenure: 'SYSTEMS PARTNER',
    },
    {
      name: 'Malawi Red Cross Society',
      category: 'Health & Humanitarian Relief',
      statement: 'TechNix has developed portal, website, and high-reliability district network IT solutions for humanitarian coordination.',
      icon: Stethoscope,
      accent: 'text-red-400 bg-red-950/80 border-red-800/40',
      tenure: 'INFRASTRUCTURE PARTNER',
    },
  ];

  return (
    <section id="trust-credibility" className="py-20 bg-[#030712] text-white border-b border-slate-800/80 relative">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1 text-xs font-mono text-emerald-400 shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold uppercase tracking-wider">Institutional Proof</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Technology Experience Built Across <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-400 via-blue-200 to-emerald-400 bg-clip-text text-transparent">
              Real African Organisations
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            TechNix has supported international development agencies, humanitarian entities, educational institutions, and commercial enterprises with dependable software and managed IT.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {clientRelationships.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="glass-panel rounded-2xl p-6 border border-slate-800/90 hover:border-sky-500/50 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-inner ${item.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                      {item.tenure}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-xs font-mono text-sky-400 mb-3">{item.category}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <p className="text-xs text-slate-300 font-normal leading-relaxed">
                    {item.statement}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Credibility Banner */}
        <div className="glass-panel-elevated rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Full Commercial & Technical Accountability</h4>
              <p className="text-xs text-slate-300">Registered Malawian technology enterprise with on-ground engineering hubs in Blantyre and Lilongwe.</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-4 py-2 rounded-xl">
            <span>READY FOR DISPATCH & AUDIT</span>
          </div>
        </div>

      </div>
    </section>
  );
};
