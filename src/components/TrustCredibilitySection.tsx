import React from 'react';
import { HeartHandshake, Building2, Stethoscope, CheckCircle2 } from 'lucide-react';

export const TrustCredibilitySection: React.FC = () => {
  const partners = [
    {
      name: 'PACT Malawi',
      sector: 'International Development',
      relationship: 'Mission-critical IT support and systems infrastructure services across field offices since 2017.',
      tenure: 'Partner Since 2017',
      icon: HeartHandshake,
    },
    {
      name: 'Save the Children',
      sector: 'Child Welfare & Education',
      relationship: 'Custom database engineering and low-bandwidth digital resource tracking platforms for partner initiatives.',
      tenure: 'Systems Partner',
      icon: Building2,
    },
    {
      name: 'Malawi Red Cross Society',
      sector: 'Humanitarian & Disaster Relief',
      relationship: 'District network IT infrastructure, emergency communication failover, and operational web portal support.',
      tenure: 'Infrastructure Partner',
      icon: Stethoscope,
    },
  ];

  return (
    <section id="trust-credibility" className="py-24 bg-[#070d1a] text-white border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Quiet, Confident Credibility */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            Institutional Standing
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">
            Trusted by International Agencies, Development Partners, and Malawian Enterprises
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
            Over eight years of dependable technology delivery across humanitarian programmes, commercial logistics fleets, corporate legal practices, and growing businesses.
          </p>
        </div>

        {/* 3 Quiet Architectural Institutional Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {partners.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="bg-[#0a1224] border border-slate-800/80 rounded-2xl p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-lg">
                      {p.tenure}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {p.name}
                  </h3>

                  <div className="text-xs font-mono text-slate-400 mb-4">
                    {p.sector}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {p.relationship}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center space-x-2 text-xs text-slate-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verified Long-Term Engagement</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Geographic Anchors Bar */}
        <div className="bg-[#050811] border border-slate-850 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              On-Site Operational Presence
            </h4>
            <p className="text-xs text-slate-300">
              Active engineering teams and physical dispatch available across Blantyre, Lilongwe, Zomba, and Mzuzu.
            </p>
          </div>

          <div className="flex items-center space-x-6 text-xs font-mono text-slate-400">
            <div>
              <span className="text-white font-bold block">Blantyre</span>
              <span>Southern Commercial Hub</span>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div>
              <span className="text-white font-bold block">Lilongwe</span>
              <span>Capital Operations Hub</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
