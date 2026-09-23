import React from 'react';
import { HeartHandshake, Database, Globe, MapPin } from 'lucide-react';

export const TrustCredibilitySection: React.FC = () => {
  const organisations = [
    {
      name: 'PACT Malawi',
      projectArea: 'IT Support',
      factualNote: 'TechNix has provided IT support services to support organisational technology operations since 2017.',
      icon: HeartHandshake,
    },
    {
      name: 'Save the Children',
      projectArea: 'Database Systems',
      factualNote: 'TechNix worked on database system development projects to organize and manage programme data.',
      icon: Database,
    },
    {
      name: 'Malawi Red Cross Society',
      projectArea: 'Website & Intranet Solutions',
      factualNote: 'TechNix developed website and intranet solutions to facilitate internal and public communication.',
      icon: Globe,
    },
  ];

  return (
    <section id="trust-credibility" className="py-20 bg-[#040813] text-white border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Quiet, Factual & Institutional */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-mono font-medium uppercase tracking-wider text-sky-400">
            Selected Organisations and Project Experience
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Institutional Project Experience
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
            TechNix Africa provides digital systems engineering, network infrastructure, and ongoing technical support for international development agencies, humanitarian initiatives, and commercial operators across Malawi.
          </p>
        </div>

        {/* 3 Institutional Reference Columns - Editorial, Containerless Divider Rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-slate-800/80">
          {organisations.map((org) => {
            const Icon = org.icon;
            return (
              <div key={org.name} className="space-y-4">
                <div className="flex items-center space-x-2 text-xs font-mono text-sky-400">
                  <Icon className="w-4 h-4 shrink-0 text-sky-400" />
                  <span className="uppercase tracking-wider">{org.projectArea}</span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {org.name}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {org.factualNote}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quiet Operational Hub Presence */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Operational engineering hubs in Blantyre &amp; Lilongwe</span>
          </div>

          <span className="text-slate-400">
            Victoria Avenue, Blantyre · City Centre, Lilongwe
          </span>
        </div>

      </div>
    </section>
  );
};
