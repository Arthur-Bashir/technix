import React, { useState } from 'react';
import { 
  Server, 
  Globe, 
  ShieldCheck, 
  HardDrive, 
  Cpu, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Database,
  Coins
} from 'lucide-react';
import { COMPANY_INFO, HOSTING_DOMAIN_PACKAGES } from '../data/technixData';

interface HostingDomainsSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const HostingDomainsSection: React.FC<HostingDomainsSectionProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'hosting' | 'domain'>('all');

  const handleWhatsApp = (service: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      `Hello TechNix, I would like to inquire about ${service}.`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const layers = [
    {
      level: 'Layer 01',
      title: 'High-Speed NVMe Solid-State Storage',
      desc: 'All website files and databases run on modern NVMe SSD drives for instant page loading and rapid database response times.',
      icon: HardDrive,
    },
    {
      level: 'Layer 02',
      title: 'Automated Daily Snapshot Backups',
      desc: 'Nightly encrypted off-site cloud snapshots protect your company files from accidental deletion, ransomware, or server failure.',
      icon: Database,
    },
    {
      level: 'Layer 03',
      title: 'Official .mw & .com Domain Routing',
      desc: 'Registered directly with official Malawi and international registries, backed by automated DNS routing and free SSL certificates.',
      icon: Globe,
    },
    {
      level: 'Layer 04',
      title: 'Convenient Local Kwacha Billing',
      desc: 'Pay for hosting and domains directly via Airtel Money, Mpamba, or local bank transfer without foreign card fees or FX risks.',
      icon: Coins,
    },
  ];

  const displayedPackages = HOSTING_DOMAIN_PACKAGES.filter((pkg) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'domain') return pkg.type === 'Domain';
    if (activeTab === 'hosting') return pkg.type === 'Hosting';
    return true;
  });

  return (
    <section id="hosting-domains" className="py-24 bg-[#050811] text-white relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            Cloud Foundation
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">
            High-Performance Cloud Hosting & Local .mw Domain Registration
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
            No international credit card required. Fast, monitored solid-state cloud hosting and domain registration billed directly in Malawi Kwacha.
          </p>
        </div>

        {/* LAYERED INFRASTRUCTURE ARCHITECTURAL VISUAL */}
        <div className="mb-16 bg-[#090e1a] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              The 4-Layer Cloud Stack
            </span>
            <h3 className="text-2xl font-black text-white">
              Engineered for local stability, fast speed, and zero data loss
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {layers.map((l, idx) => {
              const Icon = l.icon;
              return (
                <div key={idx} className="bg-[#050811] border border-slate-800/80 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 font-semibold">
                        {l.level}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white leading-snug">
                      {l.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {l.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400 flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Active Protection</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PACKAGES FILTER & GRID */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white">
                Available Hosting & Domain Plans
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Transparent annual billing with complimentary technical setup.
              </p>
            </div>

            <div className="flex items-center bg-[#090e1a] border border-slate-800 rounded-xl p-1 text-xs">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeTab === 'all' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                All Plans
              </button>
              <button
                onClick={() => setActiveTab('hosting')}
                className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeTab === 'hosting' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Web Hosting
              </button>
              <button
                onClick={() => setActiveTab('domain')}
                className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeTab === 'domain' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Domains
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#090e1a]/90 hover:bg-[#0c1322] border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {pkg.type}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {pkg.price}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {pkg.name}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5 font-normal">
                    {pkg.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <button
                    onClick={() => onOpenQuote(`${pkg.name} (${pkg.type})`)}
                    className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center space-x-1.5 cursor-pointer border border-sky-400/30"
                  >
                    <span>Deploy Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleWhatsApp(pkg.name)}
                    className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-emerald-400 font-medium text-xs rounded-xl border border-slate-800 transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
