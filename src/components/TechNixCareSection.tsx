import React from 'react';
import { ShieldCheck, Check, ArrowRight, Clock, RefreshCw, Server, MessageSquare } from 'lucide-react';
import { TECHNIX_CARE_PACKAGES, COMPANY_INFO } from '../data/technixData';

interface TechNixCareSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const TechNixCareSection: React.FC<TechNixCareSectionProps> = ({ onOpenQuote }) => {
  const handleWhatsApp = (planName: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      `Hello TechNix, I am interested in signing up for the ${planName} monthly IT support plan.`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="technix-care" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1 text-xs font-bold text-emerald-800">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Product 4 — Ongoing IT Maintenance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Your IT Department, Without the Full-Time Cost
          </h2>
          <p className="text-lg text-slate-600">
            Hiring a full-time in-house IT manager costs millions each year in salary, allowances, and benefits. TechNix Care gives your team an entire multi-disciplinary engineering department on a flexible monthly subscription.
          </p>
        </div>

        {/* 3 Support Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TECHNIX_CARE_PACKAGES.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-2xl ring-2 ring-emerald-500 scale-[1.02] lg:-translate-y-2'
                    : 'bg-slate-50 border border-slate-200/90 text-slate-900 hover:shadow-lg'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-black uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Best Value for Growing Offices</span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold ${isPopular ? 'text-white' : 'text-slate-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm mt-2 leading-relaxed ${isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6 pb-6 border-b border-slate-200/20">
                    <span className={`text-xs font-semibold uppercase tracking-wider block ${isPopular ? 'text-emerald-400' : 'text-slate-500'}`}>
                      Monthly Retainer
                    </span>
                    <div className="flex items-baseline space-x-2 mt-1">
                      <span className={`text-3xl sm:text-4xl font-black ${isPopular ? 'text-white' : 'text-slate-900'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-xs ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                        / month
                      </span>
                    </div>

                    <div className={`mt-3 text-xs p-2.5 rounded-lg flex items-center justify-between ${
                      isPopular ? 'bg-slate-800 text-emerald-300' : 'bg-white border border-slate-200 text-slate-800'
                    }`}>
                      <span className="font-semibold">{plan.workstations}</span>
                      <span className="font-mono text-[11px] font-bold">{plan.sla}</span>
                    </div>
                  </div>

                  {/* Included Services */}
                  <div className="space-y-3 mb-8">
                    <span className={`text-xs font-bold uppercase tracking-wider block ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                      What&apos;s Included:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-sm">
                        <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${
                          isPopular ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 border-t border-slate-200/20 space-y-2.5">
                  <button
                    onClick={() => onOpenQuote(`${plan.name} Monthly Plan`)}
                    className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                      isPopular
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>Subscribe to {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleWhatsApp(plan.name)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center space-x-2 transition-colors cursor-pointer ${
                      isPopular
                        ? 'bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700'
                        : 'bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison benefit card */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3.5">
            <RefreshCw className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-white text-base">Proactive, Not Just Reactive</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                We monitor disk health, antivirus definitions, and network switches regularly to prevent disasters before they stop your business.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <Clock className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-white text-base">Guaranteed Response SLA</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                No waiting days for an unpredictable freelance technician to answer their phone. Our assigned technicians respond rapidly under contract.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <Server className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-white text-base">Automated Cloud Backups</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Never lose years of accounting or project files. Automated, tested backups keep your company immune to hardware theft or ransomware.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
