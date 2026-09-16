import React, { useState } from 'react';
import { Server, Globe, Mail, Layout, Check, ArrowRight, MessageSquare, Shield, HardDrive, Cpu, Zap } from 'lucide-react';
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
      subtitle: 'Your Address on the Web',
      analogy: 'Think of this as your official street address or plot number (e.g. yourcompany.mw). It tells visitors exactly where to find you.',
      icon: Globe,
      color: 'blue',
      badge: 'Identity',
    },
    {
      term: '2. Web Hosting',
      subtitle: 'Your Plot of Digital Land',
      analogy: 'The secure, high-speed cloud server running 24/7 where your website files, photos, and databases are safely stored.',
      icon: Server,
      color: 'emerald',
      badge: 'Infrastructure',
    },
    {
      term: '3. Business Email',
      subtitle: 'Your Official Letterbox',
      analogy: 'Branded email inboxes (info@yourcompany.mw) linked to your domain so official communications stay professional.',
      icon: Mail,
      color: 'indigo',
      badge: 'Communication',
    },
    {
      term: '4. The Website',
      subtitle: 'Your Physical Building',
      analogy: 'The digital storefront and customer showroom designed and built on top of your hosting for customers to visit.',
      icon: Layout,
      color: 'amber',
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
    <section id="hosting-domains" className="py-24 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 border border-emerald-200 rounded-full px-4 py-1 text-xs font-bold text-emerald-800">
            <Server className="w-3.5 h-3.5 text-emerald-700" />
            <span>Product 3 — Hosting & Domains</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Fast, Reliable Hosting & Domains Made Simple
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            No confusing technical jargon or overseas credit card hurdles. We provide blazing-fast cloud hosting and official domain registration billed locally in Malawi Kwacha.
          </p>
        </div>

        {/* The 4 Concepts Demystified */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Understanding the Difference in Simple Language
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {concepts.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-0.5">{item.term}</h3>
                    <span className="text-xs font-semibold text-blue-600 block mb-3">{item.subtitle}</span>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.analogy}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Tiers Filter & Cards */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Verified Packages & Starting Prices</h3>
              <p className="text-xs text-slate-500">Transparent yearly rates in Malawi Kwacha with zero hidden renewal markups.</p>
            </div>

            <div className="flex items-center space-x-1 bg-white p-1 rounded-xl border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  filter === 'all' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Options
              </button>
              <button
                onClick={() => setFilter('domain')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  filter === 'domain' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Domains
              </button>
              <button
                onClick={() => setFilter('hosting')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  filter === 'hosting' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
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
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{pkg.type}</span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-1">{pkg.name}</h4>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">{pkg.description}</p>

                  {/* Price */}
                  <div className="py-3 border-y border-slate-100 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Starting From
                    </span>
                    <div className="flex items-baseline space-x-1 mt-0.5">
                      <span className="text-2xl font-black text-slate-900">{pkg.price}</span>
                      <span className="text-xs text-slate-500">/{pkg.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onOpenQuote(`${pkg.name} (${pkg.price})`)}
                    className="w-full py-2.5 bg-slate-900 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <span>{pkg.type === 'Domain' ? 'Register a Domain' : 'Get Hosting'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleWhatsApp(pkg.name)}
                    className="w-full py-2 bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 text-xs font-semibold rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Talk to TechNix</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Fast Action Bar */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-blue-950 text-white rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="text-xl font-bold text-white">Need Help Choosing the Right Domain or Server?</h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Tell our infrastructure engineers what system or website you are hosting. We will recommend the exact server specs and register your domain in minutes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
            <button
              onClick={() => onOpenQuote('Hosting & Domain Consultation')}
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <span>Get Hosting & Domain Setup</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleWhatsApp('Hosting and Domain setup')}
              className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Talk to TechNix on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
