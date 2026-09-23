import React from 'react';
import { HeartHandshake, Building2, Stethoscope, MapPin } from 'lucide-react';

export const TrustCredibilitySection: React.FC = () => {
  const organisations = [
    {
      name: 'PACT Malawi',
      sector: 'International Development',
      scope: 'IT support, network infrastructure, and field systems services for programme offices.',
      icon: HeartHandshake,
    },
    {
      name: 'Save the Children Partner Programs',
      sector: 'Education & Community Initiatives',
      scope: 'Digital learning resource tracking portal and information management systems.',
      icon: Building2,
    },
    {
      name: 'Malawi Red Cross Society Collaboration',
      sector: 'Humanitarian & Relief Operations',
      scope: 'District network infrastructure, emergency communication failover, and technical operational support.',
      icon: Stethoscope,
    },
  ];

  return (
    <section id="trust-credibility" className="py-20 bg-[#060a15] text-white border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Quiet, Factual & Institutional */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            Selected Organisational Experience
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
            Selected Organisations We&apos;ve Worked With
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
            TechNix Africa provides digital systems engineering, network infrastructure, and dependable technical support for international development agencies, humanitarian initiatives, and commercial operators across Malawi.
          </p>
        </div>

        {/* 3 Institutional Reference Strips - Unboxed, Editorial, Clean */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {organisations.map((org) => {
            const Icon = org.icon;
            return (
              <div
                key={org.name}
                className="bg-[#080e1c] border border-slate-800/80 rounded-2xl p-7 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-xs font-mono text-slate-400">
                    <Icon className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{org.sector}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {org.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {org.scope}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Operational Hub Presence */}
        <div className="p-6 bg-[#040710] border border-slate-800/60 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center space-x-2 text-slate-300">
            <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Operational engineering hubs in Blantyre and Lilongwe, supporting projects nationwide.</span>
          </div>

          <span className="font-mono text-slate-400">
            Victoria Avenue, Blantyre · City Centre, Lilongwe
          </span>
        </div>

      </div>
    </section>
  );
};
