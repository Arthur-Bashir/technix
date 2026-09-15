import React from 'react';
import { Mail, Check, X, Shield, Smartphone, ArrowRight, MessageSquare, Lock, Users } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface BusinessEmailSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const BusinessEmailSection: React.FC<BusinessEmailSectionProps> = ({ onOpenQuote }) => {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      'Hello TechNix, I want to upgrade my business to professional business email (e.g. info@ourcompany.com).'
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const emailBenefits = [
    {
      title: 'Instant Commercial Credibility',
      desc: 'Clients and banks trust info@yourcompany.com over personal @gmail.com or @yahoo.com addresses.',
      icon: Shield,
    },
    {
      title: 'Team Inboxes with Full Control',
      desc: 'Create accounts for sales@, accounts@, director@. When staff leave, you retain complete access to company communications.',
      icon: Users,
    },
    {
      title: 'Synced on Phones & Outlook',
      desc: 'Seamless real-time synchronization across iPhone, Android, Outlook, and webmail so you never miss an urgent tender or client RFP.',
      icon: Smartphone,
    },
    {
      title: 'Enterprise Spam & Antivirus Protection',
      desc: 'Multi-layer cloud filtering blocks malicious phishing, malware, and spam before reaching your employee inboxes.',
      icon: Lock,
    },
  ];

  return (
    <section id="business-email" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: The Problem & The Transformation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-400/30 rounded-full px-3.5 py-1 text-xs font-bold text-emerald-300">
              <Mail className="w-3.5 h-3.5" />
              <span>Product 2 — Professional Business Email</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Credibility Starts With Your Email Address
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              When communicating with potential clients, institutional donors, or government procurement officers, your email address is your digital handshake.
            </p>

            {/* Visual Transformation Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-800/90 border border-slate-700/80 space-y-4">
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-red-950/40 border border-red-800/40">
                <div className="w-8 h-8 rounded-full bg-red-900/60 text-red-300 flex items-center justify-center shrink-0">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <span className="text-xs text-red-400 font-bold block uppercase tracking-wider">Avoid Looking Amateur</span>
                  <span className="text-sm font-mono text-slate-300 line-through">companyname2024@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-xl bg-emerald-950/40 border border-emerald-700/50">
                <div className="w-8 h-8 rounded-full bg-emerald-800/80 text-emerald-200 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <span className="text-xs text-emerald-400 font-bold block uppercase tracking-wider">Trusted Commercial Standard</span>
                  <span className="text-base font-mono font-bold text-white">director@companyname.com</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenQuote('Professional Business Email Setup')}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <span>Get Professional Email</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="px-5 py-3.5 bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-sm rounded-xl border border-emerald-500/50 flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat via WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column: Key Features & Pricing Banner */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {emailBenefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-800/70 border border-slate-700/70 hover:border-slate-600 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5">{benefit.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Starting Price Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/60 to-indigo-900/60 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider block">
                  Transparent Domain Email Setup
                </span>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-3xl font-black text-white">Starting from MK 45,000</span>
                  <span className="text-xs text-slate-300">/ inbox / year</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Includes custom domain, technical DNS setup, phone configuration, and 99.9% uptime.
                </p>
              </div>

              <button
                onClick={() => onOpenQuote('Professional Business Email Setup')}
                className="shrink-0 px-4 py-2.5 bg-white text-slate-950 font-bold text-xs rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Configure My Inboxes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
