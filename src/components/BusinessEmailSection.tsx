import React from 'react';
import { Mail, Check, X, Shield, Smartphone, ArrowRight, MessageSquare, Lock, Users, Server, HelpCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface BusinessEmailSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const BusinessEmailSection: React.FC<BusinessEmailSectionProps> = ({ onOpenQuote }) => {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      'Hello TechNix, I want to set up professional business email accounts for my team.'
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const emailExamples = [
    { prefix: 'info', domain: 'yourbusiness.com', desc: 'General client inquiries & corporate correspondence' },
    { prefix: 'sales', domain: 'yourbusiness.com', desc: 'Quotations, customer orders & proposal submissions' },
    { prefix: 'support', domain: 'yourbusiness.com', desc: 'Client ticketing, customer care & technical help' },
  ];

  const setupSteps = [
    { title: 'Domain Setup', desc: 'We register or link your official company web domain (.mw or .com).', icon: Server },
    { title: 'Email Account Creation', desc: 'Provisioning custom inboxes for your directors, departments, and staff.', icon: Mail },
    { title: 'Security & DNS Records', desc: 'SPF, DKIM & DMARC authentication to prevent spoofing and spam folders.', icon: Lock },
    { title: 'Mobile & Desktop Setup', desc: 'Step-by-step assistance setting up Apple Mail, Outlook, Android & Webmail.', icon: Smartphone },
    { title: 'Ongoing Technical Support', desc: 'Malawian helpdesk for password resets, mailbox expansion, and troubleshooting.', icon: HelpCircle },
  ];

  return (
    <section id="business-email" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-400/30 rounded-full px-3.5 py-1 text-xs font-bold text-emerald-300">
            <Mail className="w-3.5 h-3.5" />
            <span>Product 2 — Business Email</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Use your own business email address and look more professional every time you communicate with customers.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            When you send a quote, proposal, or tender from a free email address, customers wonder if you are an established business. Branded domain emails establish trust before they even open your message.
          </p>
        </div>

        {/* Transformation & Examples Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Left: Examples Box */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700/80 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Professional Inboxes for Your Entire Team
              </span>

              <div className="space-y-3">
                {emailExamples.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/60 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-mono text-sm font-bold text-white">
                          <span className="text-emerald-400">{item.prefix}</span>@{item.domain}
                        </span>
                        <p className="text-xs text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md bg-slate-800 text-emerald-300 border border-emerald-500/30 shrink-0">
                      Verified
                    </span>
                  </div>
                ))}
              </div>

              {/* Free vs Branded comparison */}
              <div className="pt-2 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-red-950/40 border border-red-800/40">
                  <div className="flex items-center space-x-2 text-red-400 text-xs font-bold uppercase mb-1">
                    <X className="w-3.5 h-3.5" />
                    <span>Amateur Impression</span>
                  </div>
                  <p className="font-mono text-xs text-slate-300 line-through">companyname2024@gmail.com</p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-700/50">
                  <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase mb-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Institutional Standard</span>
                  </div>
                  <p className="font-mono text-xs text-emerald-200 font-semibold">director@companyname.com</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => onOpenQuote('Business Email Setup')}
                className="flex-1 py-3.5 px-5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <span>Get Business Email</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="flex-1 py-3.5 px-5 bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 hover:border-emerald-500/50 font-bold text-sm rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Talk to TechNix</span>
              </button>
            </div>
          </div>

          {/* Right: What TechNix Sets Up & Pricing */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700/80 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                What TechNix Sets Up For You
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {setupSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/50">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-2">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-xs font-bold text-white mb-1">{step.title}</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Pricing breakdown banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/60 to-indigo-900/60 border border-blue-500/30">
                <div className="flex items-baseline justify-between flex-wrap gap-2">
                  <div>
                    <span className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider block">
                      Starting Investment
                    </span>
                    <div className="flex items-baseline space-x-2 mt-0.5">
                      <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                        From MK 45,000
                      </span>
                      <span className="text-xs text-slate-300">/ inbox / year</span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-300 bg-slate-800/90 px-3 py-1.5 rounded-lg border border-slate-700">
                    Configuration setup: from MK 35,000
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  *Team mailbox configurations available. Local payments supported in Malawi Kwacha.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cross-Sell Strip */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-800/60 border border-slate-700/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center space-x-3 text-slate-300">
            <Shield className="w-5 h-5 text-blue-400 shrink-0" />
            <span>
              <strong>You May Also Need:</strong> Connect your new email to a <strong>Business Website</strong>, register a <strong>.mw Domain</strong>, or add <strong>TechNix Care</strong> for ongoing staff email helpdesk.
            </span>
          </div>
          <button
            onClick={() => onOpenQuote('Website & Email Package')}
            className="shrink-0 text-blue-400 hover:text-blue-300 font-bold flex items-center space-x-1 cursor-pointer"
          >
            <span>Explore Website + Email Bundle</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
