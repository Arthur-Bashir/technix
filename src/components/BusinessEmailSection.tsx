import React from 'react';
import { Mail, Check, X, Shield, Smartphone, ArrowRight, MessageSquare, Lock, Users, Server, HelpCircle, CheckCircle2, ShieldAlert } from 'lucide-react';
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
    { prefix: 'info', domain: 'yourcompany.mw', desc: 'General client inquiries & corporate correspondence' },
    { prefix: 'director', domain: 'yourcompany.mw', desc: 'Executive communications, board papers & banking' },
    { prefix: 'finance', domain: 'yourcompany.mw', desc: 'Invoicing, procurement contracts & supplier billing' },
    { prefix: 'support', domain: 'yourcompany.mw', desc: 'Customer helpdesk, operational logistics & field triage' },
  ];

  const setupSteps = [
    { title: 'Domain Verification', desc: 'We register or link your official company web domain (.mw or .com).', icon: Server },
    { title: 'Cryptographic Authentication', desc: 'SPF, DKIM & DMARC records to stop spam folders and spoofing.', icon: Lock },
    { title: 'Mailbox Provisioning', desc: 'Provisioning dedicated secure inboxes for your directors, departments, and staff.', icon: Mail },
    { title: 'Mobile & Outlook Sync', desc: 'Hands-on configuration on iPhone, Android, Outlook, and webmail portals.', icon: Smartphone },
    { title: 'Local Malawi Helpdesk', desc: 'Direct Blantyre & Lilongwe telephone and WhatsApp support for resets & expansion.', icon: HelpCircle },
  ];

  return (
    <section id="business-email" className="py-24 bg-[#030712] text-white relative border-b border-slate-800/80">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-600/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1 text-xs font-mono text-emerald-400 shadow-md">
            <Mail className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">Module 02 // Enterprise Identity & Email Defense</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Use Your Own Business Email Address & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              Command Institutional Commercial Trust
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            When you send a quote, proposal, or tender from a free @gmail.com address, corporate buyers and donors question your legitimacy. Branded domain inboxes establish authority before they even open your message.
          </p>
        </div>

        {/* Comparison & Examples Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left: Examples Box */}
          <div className="lg:col-span-6 space-y-4">
            <div className="glass-panel rounded-3xl p-6 sm:p-7 space-y-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                Branded Mailbox Infrastructure
              </span>
              
              <div className="space-y-2.5">
                {emailExamples.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <div className="font-mono text-sm sm:text-base font-bold text-white flex items-center space-x-1">
                        <span className="text-emerald-400">{item.prefix}</span>
                        <span className="text-slate-400">@</span>
                        <span className="text-sky-300">{item.domain}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                      SECURED
                    </span>
                  </div>
                ))}
              </div>

              {/* Free vs Branded Comparison */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-red-950/20 border border-red-900/40">
                  <div className="flex items-center space-x-2 text-red-400 text-xs font-bold mb-2">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>Free Gmail / Yahoo Inboxes</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-center space-x-1.5"><X className="w-3.5 h-3.5 text-red-400 shrink-0" /><span>Rejected by corporate procurement tenders</span></li>
                    <li className="flex items-center space-x-1.5"><X className="w-3.5 h-3.5 text-red-400 shrink-0" /><span>Departing staff take customer history</span></li>
                    <li className="flex items-center space-x-1.5"><X className="w-3.5 h-3.5 text-red-400 shrink-0" /><span>Zero centralized ownership or security</span></li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-900/40">
                  <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold mb-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>TechNix Branded Inboxes</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-200">
                    <li className="flex items-center space-x-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /><span>Immediate credibility with banks & donors</span></li>
                    <li className="flex items-center space-x-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /><span>You own and retain all client correspondence</span></li>
                    <li className="flex items-center space-x-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /><span>Protected by SPF, DKIM & spam defense</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Setup Flow & Quote Trigger */}
          <div className="lg:col-span-6 space-y-4">
            <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  DEPLOYMENT LIFECYCLE
                </span>
                <h3 className="text-xl font-bold text-white">How We Deploy Your Company Inboxes</h3>
              </div>

              <div className="space-y-4">
                {setupSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="flex items-start space-x-3.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white">{step.title}</h4>
                        <p className="text-xs text-slate-300 mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenQuote('Business Domain Email')}
                  className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-600/20 transition-all cursor-pointer flex items-center justify-center space-x-2 border border-emerald-400/40"
                >
                  <span>Request Business Email Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="py-3 px-4 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Ask on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
