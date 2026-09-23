import React from 'react';
import { 
  Mail, 
  Check, 
  X, 
  ShieldCheck, 
  Smartphone, 
  ArrowRight, 
  MessageSquare, 
  Lock, 
  ShieldAlert,
  Laptop
} from 'lucide-react';
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

  const mailboxes = [
    { prefix: 'director', domain: 'yourcompany.mw', role: 'Executive tenders & banking communications' },
    { prefix: 'finance', domain: 'yourcompany.mw', role: 'Invoices, payroll & audited supplier contracts' },
    { prefix: 'orders', domain: 'yourcompany.mw', role: 'Customer orders, quotes & client correspondence' },
    { prefix: 'support', domain: 'yourcompany.mw', role: 'Helpdesk, logistics & customer inquiries' },
  ];

  return (
    <section id="business-email" className="py-24 bg-[#080f20] text-white relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
            Corporate Identity & Email
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">
            Stop Submitting High-Value Tenders from a Personal @gmail.com Address
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
            Corporate procurement committees, banks, and international donors review your email domain before opening your bid. Branded inboxes establish trust before negotiations begin.
          </p>
        </div>

        {/* Identity & Visual Comparison Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-14">
          
          {/* Left: The Corporate Reality (Col 1-7) */}
          <div className="lg:col-span-7 bg-[#050811] border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <span className="text-xs font-mono font-semibold uppercase text-emerald-400 tracking-wider">
                  Verified Enterprise Inboxes
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-0.5 rounded-full">
                  Starting from MK 7,500 / month
                </span>
              </div>

              <div className="space-y-3">
                {mailboxes.map((mb, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#090e1a] border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="font-mono text-sm sm:text-base font-bold text-white flex items-center space-x-1">
                        <span className="text-emerald-400">{mb.prefix}</span>
                        <span className="text-slate-400">@</span>
                        <span className="text-sky-300">{mb.domain}</span>
                      </div>
                      <div className="text-xs text-slate-400 mt-1">{mb.role}</div>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                      AUTHENTICATED
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-300">
                <div className="flex items-center space-x-2 bg-[#090e1a] p-3 rounded-xl border border-slate-800">
                  <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>SPF & DKIM Protection</span>
                </div>
                <div className="flex items-center space-x-2 bg-[#090e1a] p-3 rounded-xl border border-slate-800">
                  <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Syncs to Phone & PC</span>
                </div>
                <div className="flex items-center space-x-2 bg-[#090e1a] p-3 rounded-xl border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Passes Audits</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenQuote('Professional Business Email')}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-emerald-950/40 flex items-center space-x-2 cursor-pointer border border-emerald-400/30"
                >
                  <span>Configure Business Email</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center space-x-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: The Vulnerability Risk (Col 8-12) */}
          <div className="lg:col-span-5 bg-[#090e1a] border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-rose-400 text-xs font-mono font-bold uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4" />
                <span>The Cost of Free Personal Inboxes</span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Why businesses lose money using generic @gmail.com accounts
              </h3>

              <div className="space-y-4 pt-2">
                <div className="bg-[#050811] border border-rose-950/40 rounded-2xl p-4 space-y-1">
                  <div className="text-xs font-bold text-rose-300 flex items-center gap-2">
                    <X className="w-3.5 h-3.5 text-rose-400" />
                    <span>Failed Corporate Procurement Audits</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Formal tender boards disqualify vendor proposals that use unverifiable free consumer email addresses.
                  </p>
                </div>

                <div className="bg-[#050811] border border-rose-950/40 rounded-2xl p-4 space-y-1">
                  <div className="text-xs font-bold text-rose-300 flex items-center gap-2">
                    <X className="w-3.5 h-3.5 text-rose-400" />
                    <span>Departing Staff Take Client Records</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    When an employee leaves, their personal email account leaves with them, taking your customer conversations and quotations.
                  </p>
                </div>

                <div className="bg-[#050811] border border-rose-950/40 rounded-2xl p-4 space-y-1">
                  <div className="text-xs font-bold text-rose-300 flex items-center gap-2">
                    <X className="w-3.5 h-3.5 text-rose-400" />
                    <span>Invoices Trigger Spam Filters</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Free accounts lack cryptographic domain signatures, causing financial invoices and quotes to land directly in customer spam folders.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              TechNix configures domain ownership, mailbox provisioning, and phone synchronization within 24 to 48 hours.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
