import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Spatial3DHero } from '../components/Spatial3DHero';
import { MotionSection } from '../components/MotionSection';
import { COMPANY_INFO } from '../data/technixData';

interface HomePageProps {
  onOpenQuote: (service?: string) => void;
  onOpenHealthCheck: () => void;
  onOpenITRescue: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenQuote,
  onOpenHealthCheck,
  onOpenITRescue,
}) => {
  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Section A — Hero */}
      <Spatial3DHero
        onOpenQuote={onOpenQuote}
        onOpenHealthCheck={onOpenHealthCheck}
        onOpenITRescue={onOpenITRescue}
        onSelectSection={() => {}}
      />

      {/* Section B — Solutions for real business needs */}
      <MotionSection>
        <section className="py-24 bg-[#050811] text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
                Solutions for real business needs
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                Practical technology that helps your organisation work smarter and grow with confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4 border-t border-slate-800 pt-6">
                <h3 className="text-xl font-bold text-white">Build Your Digital Presence</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Help customers find, understand and contact your organisation through a professional website, domain and business email.
                </p>
                <Link to="/solutions/digital-presence" className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4 border-t border-slate-800 pt-6">
                <h3 className="text-xl font-bold text-white">Improve How Your Organisation Works</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Organise information, reduce repetitive manual work and connect workflows through suitable business systems, databases and reporting.
                </p>
                <Link to="/solutions/business-systems" className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4 border-t border-slate-800 pt-6">
                <h3 className="text-xl font-bold text-white">Keep Your Technology Working</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Get practical IT support, maintenance, hosting and technical guidance to help your team stay productive.
                </p>
                <Link to="/solutions/it-support" className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </MotionSection>

      {/* Section C — Credibility */}
      <MotionSection>
        <section className="py-20 bg-[#040813] text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Verified project experience
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
                Factual engagements with respected organisations across Malawi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-white/5">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">PACT Malawi</h3>
                <p className="text-sm text-slate-300">IT support experience since 2017.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">Save the Children</h3>
                <p className="text-sm text-slate-300">Database system development projects.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">Malawi Red Cross Society</h3>
                <p className="text-sm text-slate-300">Website and intranet solutions.</p>
              </div>
            </div>
            <div className="mt-6">
              <Link to="/our-work" className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300">
                See more about our work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </MotionSection>

      {/* Section D — Working relationship */}
      <MotionSection>
        <section className="py-20 bg-[#050811] text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                A straightforward working relationship
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3 border-t border-slate-800 pt-6">
                <div className="text-sm font-semibold text-sky-400">1. Tell us what you need</div>
                <p className="text-sm text-slate-300">Share your goals and current challenges.</p>
              </div>
              <div className="space-y-3 border-t border-slate-800 pt-6">
                <div className="text-sm font-semibold text-sky-400">2. We agree on a practical approach and scope</div>
                <p className="text-sm text-slate-300">Clear proposal with transparent pricing.</p>
              </div>
              <div className="space-y-3 border-t border-slate-800 pt-6">
                <div className="text-sm font-semibold text-sky-400">3. We build, implement or support the solution</div>
                <p className="text-sm text-slate-300">Practical delivery that fits your needs.</p>
              </div>
            </div>
          </div>
        </section>
      </MotionSection>

      {/* Section E — Final invitation */}
      <MotionSection>
        <section className="py-24 bg-[#040813] text-white relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.06] text-balance">
              Let's make technology work better for your organisation.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenQuote()}
                className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-all flex items-center gap-2"
              >
                Discuss Your Needs <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleWhatsApp("Hello TechNix, I'd like to discuss a project.")}
                className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 font-semibold rounded-xl transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Message on WhatsApp
              </button>
              <button
                onClick={onOpenITRescue}
                className="px-6 py-4 text-rose-400 hover:text-rose-300 font-semibold transition-colors"
              >
                Request urgent IT support
              </button>
            </div>
          </div>
        </section>
      </MotionSection>
    </>
  );
};
