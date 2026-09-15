import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles, MessageSquare, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface HeroProps {
  onOpenQuote: (service?: string) => void;
  onOpenHealthCheck: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onOpenHealthCheck }) => {
  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle architectural background grid & radial light */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Value pill */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm text-blue-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold tracking-wide">Technology Partner for Growing African Businesses</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Technology That Moves <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                Your Business Forward
              </span>
            </h1>

            {/* Supporting Value Proposition */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              TechNix Africa helps businesses and organisations use technology to work smarter, reach customers, manage information and grow. No unnecessary complexity — just practical, dependable solutions.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => onOpenQuote()}
                id="hero-cta-get-started"
                className="w-full sm:w-auto flex items-center justify-center space-x-2.5 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleWhatsApp('Hello TechNix Africa, I would like to talk about a project for my business.')}
                id="hero-cta-whatsapp"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-4 bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-base rounded-xl border border-emerald-500/50 shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Talk to TechNix</span>
              </button>

              <a
                href="#solutions"
                className="w-full sm:w-auto flex items-center justify-center space-x-1 px-5 py-4 text-slate-300 hover:text-white font-semibold text-base hover:bg-slate-800/60 rounded-xl transition-all"
              >
                <span>Explore Solutions</span>
              </a>
            </div>

            {/* Value checklist badges */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Clear Upfront Pricing in MK</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Blantyre & Lilongwe Local Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fast 5-Day Delivery Options</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick-Value Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-slate-800/90 to-slate-900/95 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl relative">
              {/* Highlight ribbon */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-700/80">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                    TN
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Commercial Tech Suite</h3>
                    <p className="text-xs text-slate-400">Everything your organisation needs</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  Active in Malawi
                </span>
              </div>

              {/* 3 Core Quick Packs */}
              <div className="space-y-3 py-5">
                <div
                  onClick={() => onOpenQuote('Business Starter Website')}
                  className="group p-3.5 rounded-xl bg-slate-800/60 hover:bg-blue-950/40 border border-slate-700/60 hover:border-blue-500/50 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm text-white group-hover:text-blue-300">Business Website Pack</span>
                      <span className="text-[10px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded">All-in-One</span>
                    </div>
                    <p className="text-xs text-slate-400">Website + .com/.mw Domain + Hosting + WhatsApp</p>
                  </div>
                  <div className="text-right shrink-0 pl-3">
                    <span className="text-xs text-slate-400 block">From</span>
                    <span className="text-sm font-bold text-emerald-400">MK 380,000</span>
                  </div>
                </div>

                <div
                  onClick={() => onOpenQuote('Professional Business Email')}
                  className="group p-3.5 rounded-xl bg-slate-800/60 hover:bg-blue-950/40 border border-slate-700/60 hover:border-blue-500/50 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm text-white group-hover:text-blue-300">Professional Business Email</span>
                      <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded">Trust</span>
                    </div>
                    <p className="text-xs text-slate-400">Replace @gmail with info@yourcompany.com</p>
                  </div>
                  <div className="text-right shrink-0 pl-3">
                    <span className="text-xs text-slate-400 block">From</span>
                    <span className="text-sm font-bold text-emerald-400">MK 45,000/yr</span>
                  </div>
                </div>

                <div
                  onClick={() => onOpenQuote('TechNix Care Managed Support')}
                  className="group p-3.5 rounded-xl bg-slate-800/60 hover:bg-blue-950/40 border border-slate-700/60 hover:border-blue-500/50 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm text-white group-hover:text-blue-300">TechNix Care IT Retainer</span>
                      <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded">Retainer</span>
                    </div>
                    <p className="text-xs text-slate-400">Your outsourced IT department without full-time payroll</p>
                  </div>
                  <div className="text-right shrink-0 pl-3">
                    <span className="text-xs text-slate-400 block">From</span>
                    <span className="text-sm font-bold text-emerald-400">MK 140,000/mo</span>
                  </div>
                </div>
              </div>

              {/* Interactive Health Check Prompt */}
              <div className="pt-3 border-t border-slate-700/80">
                <button
                  onClick={onOpenHealthCheck}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-amber-500/20 via-blue-500/20 to-emerald-500/20 border border-amber-500/40 hover:border-amber-400 transition-all text-left cursor-pointer group"
                >
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 text-amber-400 shrink-0 group-hover:rotate-12 transition-transform" />
                    <div>
                      <span className="text-xs font-bold text-white block">How Digitally Ready Is Your Business?</span>
                      <span className="text-[11px] text-slate-300">Take our free 2-minute digital health audit</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility & Verified Client Experience Bar */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Trusted by Businesses, NGOs & Development Partners in Southern Africa
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 hover:opacity-100 transition-opacity">
            <div className="flex items-center space-x-2 text-slate-300 font-bold tracking-tight text-base sm:text-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span>PACT Partner Initiatives</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300 font-bold tracking-tight text-base sm:text-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span>Malawi Red Cross Society</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300 font-bold tracking-tight text-base sm:text-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Save the Children Partner Programs</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300 font-bold tracking-tight text-base sm:text-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span>Commercial Haulage & SMEs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
