import React, { useState } from 'react';
import { Server, Globe, Mail, Layout, Check, ArrowRight, MessageSquare, Shield, HardDrive, Cpu, Zap, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, HOSTING_DOMAIN_PACKAGES } from '../data/technixData';

interface HostingDomainsSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const HostingDomainsSection: React.FC<HostingDomainsSectionProps> = ({ onOpenQuote }) => {
  const [filter, setFilter] = useState<'all' | 'domain' | 'hosting'>('all');

  const handleWhatsApp = (service: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      `Hello TechNix, I would like to inquire about ${service}.`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const concepts = [
    {
      term: '1. Domain Name',
      subtitle: 'Your Web Address',
      analogy: 'Your official street address or plot identifier (e.g. yourcompany.mw). It tells internet routers and clients exactly where to reach you.',
      icon: Globe,
      code: 'DNS-01',
      badge: 'Identity',
    },
    {
      term: '2. Web Hosting',
      subtitle: 'Your Digital Foundation',
      analogy: 'The secure, high-speed solid-state cloud server running 24/7 where your website files, photos, and databases are safely stored.',
      icon: Server,
      code: 'SSD-02',
      badge: 'Infrastructure',
    },
    {
      term: '3. Business Email',
      subtitle: 'Your Official Inboxes',
      analogy: 'Branded email inboxes (info@yourcompany.mw) linked directly to your domain so institutional communications stay professional.',
      icon: Mail,
      code: 'MAIL-03',
      badge: 'Communication',
    },
    {
      term: '4. The Web System',
      subtitle: 'Your Physical Building',
      analogy: 'The digital storefront and customer showroom designed and built on top of your hosting infrastructure for customers to interact with.',
      icon: Layout,
      code: 'APP-04',
      badge: 'Storefront',
    },
  ];

  const displayedPackages = HOSTING_DOMAIN_PACKAGES.filter((pkg) => {
    if (filter === 'all') return true;
    if (filter === 'domain') return pkg.type === 'Domain';
    if (filter === 'hosting') return pkg.type === 'Hosting';
    return true;
  });

  return (
    <section id="hosting-domains" className="py-24 bg-[#040814] text-white relative border-b border-slate-800/80">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sky-600/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1 text-xs font-mono text-sky-400 shadow-md">
            <Server className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">Module 03 // Cloud Infrastructure & Domains</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            High-Availability Cloud Hosting & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-400 via-blue-200 to-emerald-400 bg-clip-text text-transparent">
              Official .mw & .com Domain Registration
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            No confusing overseas credit card hurdles or foreign exchange surprises. Solid-state NVMe cloud servers and official domain registration billed locally in Malawi Kwacha.
          </p>
        </div>

        {/* 4 Concepts Demystified */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
              INFRASTRUCTURE TOPOLOGY DEMYSTIFIED
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {concepts.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl p-6 border border-slate-800/90 hover:border-sky-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-800/40 text-sky-400 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors shadow-inner">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                        {item.code}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-0.5">{item.term}</h3>
                    <span className="text-xs font-semibold text-sky-400 block mb-3">{item.subtitle}</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.analogy}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Tiers Filter & Cards */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white">Verified Cloud Packages & Fixed Pricing</h3>
              <p className="text-xs text-slate-400 font-mono">Billed transparently in Malawi Kwacha with Airtel Money, Mpamba & local bank payments.</p>
            </div>

            <div className="flex items-center space-x-1 glass-panel p-1 rounded-xl border border-slate-800 text-xs font-semibold">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  filter === 'all' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                All Packages
              </button>
              <button
                onClick={() => setFilter('domain')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  filter === 'domain' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Domains
              </button>
              <button
                onClick={() => setFilter('hosting')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  filter === 'hosting' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Cloud Hosting
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedPackages.map((pkg) => (
              <div
                key={pkg.id}
                id={`pkg-card-${pkg.id}`}
                className="glass-panel rounded-2xl p-6 border border-slate-800/90 hover:border-sky-500/50 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-950/70 border border-sky-800/40 px-2.5 py-1 rounded-md">
                      {pkg.badge}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {pkg.type}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
                    {pkg.name}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {pkg.description}
                  </p>

                  <div className="mb-6 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-2xl font-black text-emerald-400 font-mono">
                      {pkg.price}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                      {pkg.period} • No Forex Fees
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => onOpenQuote(`${pkg.name} (${pkg.price})`)}
                    className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-all cursor-pointer shadow-md shadow-sky-600/20 border border-sky-400/30"
                  >
                    <span>Order {pkg.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleWhatsApp(pkg.name)}
                    className="w-full py-2 bg-slate-900/90 hover:bg-slate-800 text-emerald-400 border border-slate-700/80 text-xs font-semibold rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
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
