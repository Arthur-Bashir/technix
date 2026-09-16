import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';
import { TechEcosystemVisual3D } from './TechEcosystemVisual3D';

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
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800/80">
      {/* Background Architectural Grid & Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-blue-600/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Main Hero Narrative Column (5-10 second comprehension) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Identity Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm text-blue-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold tracking-wide">TechNix Africa • Technology Partner for Growth</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Technology That Moves <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                Your Business Forward
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Websites, software, IT support and digital solutions for businesses and organisations across Africa.
            </p>

            {/* Primary CTAs + Obvious WhatsApp Contact Option */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => onOpenQuote()}
                id="hero-cta-start-project"
                className="w-full sm:w-auto flex items-center justify-center space-x-2.5 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleWhatsApp('Hello TechNix, I would like to talk to TechNix about technology for our organisation.')}
                id="hero-cta-talk-technix"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-base rounded-xl border border-slate-700 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-blue-400" />
                <span>Talk to TechNix</span>
              </button>

              <button
                onClick={() => handleWhatsApp('Hello TechNix, I am reaching out to discuss a project on WhatsApp.')}
                id="hero-cta-whatsapp"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-5 py-4 bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-base rounded-xl border border-emerald-500/40 shadow-md transition-all cursor-pointer"
                title="Chat with an engineer on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Operational Commitments */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>We Build</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>We Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>We Stay With You After Deployment</span>
              </div>
            </div>
          </div>

          {/* Right Column: Controlled 3D Technology Visualization */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 shadow-2xl overflow-hidden">
              <TechEcosystemVisual3D />
            </div>

            {/* Quick action prompt below 3D */}
            <div className="mt-3 flex items-center justify-between px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
              <span className="flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Need a fast assessment of your business tech?</span>
              </span>
              <button
                onClick={onOpenHealthCheck}
                className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-2 cursor-pointer"
              >
                Free Health Check
              </button>
            </div>
          </div>
        </div>

        {/* Credibility & Verified Client Experience Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-5">
            Organisations trust TechNix to keep their technology working
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-90">
            <div className="flex items-center space-x-2 text-slate-300 font-bold text-sm sm:text-base">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span>PACT Partner Initiatives</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300 font-bold text-sm sm:text-base">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span>Malawi Red Cross Society</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300 font-bold text-sm sm:text-base">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Save the Children Partner Programs</span>
            </div>
          </div>
          <p className="text-center text-xs text-slate-400 mt-4">
            Supporting organisations across business, education, development and nonprofit sectors.
          </p>
        </div>
      </div>
    </section>
  );
};
