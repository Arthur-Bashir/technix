import React from 'react';
import { ShieldCheck, CheckCircle2, Building, HeartHandshake, Stethoscope } from 'lucide-react';

export const TrustCredibilitySection: React.FC = () => {
  const verifiedPartners = [
    {
      name: 'PACT',
      division: 'Civil Society & Partner Initiatives',
      category: 'Development & Governance',
      scope: 'Field Data Systems & Grant Monitoring',
      icon: HeartHandshake,
      accent: 'text-blue-700 bg-blue-50 border-blue-200',
    },
    {
      name: 'Save the Children',
      division: 'Partner Education Programs',
      category: 'Child Protection & Education',
      scope: 'Digital Resource Portals & Asset Tracking',
      icon: HeartHandshake,
      accent: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    {
      name: 'Malawi Red Cross Society',
      division: 'Emergency Coordination Programs',
      category: 'Health & Humanitarian Relief',
      scope: 'High-Availability IT Infrastructure & Cloud Backups',
      icon: Stethoscope,
      accent: 'text-red-700 bg-red-50 border-red-200',
    },
  ];

  return (
    <section id="trust-credibility" className="py-20 bg-slate-100/70 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Trust Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 shadow-2xs rounded-full px-4 py-1 text-xs font-bold text-slate-700">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Demonstrated Industry Trust</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Organisations trust TechNix to keep their technology working.
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            From international development initiatives to regional operational teams, TechNix Africa delivers reliable systems that teams depend on every single day.
          </p>
        </div>

        {/* Verified Organisation Cards - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {verifiedPartners.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
                      Verified Client Partner
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">{item.name}</h3>
                  <p className="text-xs font-medium text-slate-500 mb-3">{item.division}</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Delivered Scope
                  </span>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    {item.scope}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Separate Broad Market Coverage Statement per Instruction 4 */}
        <div className="text-center py-4 px-6 bg-white/70 border border-slate-200/80 rounded-2xl mb-8">
          <p className="text-sm font-semibold text-slate-700">
            Supporting organisations across business, education, development and nonprofit sectors.
          </p>
        </div>

        {/* Commitment Banner */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Local Presence & Clear Accountability</h4>
              <p className="text-xs text-slate-600">Offices and on-ground technical staff in Blantyre and Lilongwe, Malawi.</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
            <span>Dedicated On-Ground Technical Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};
