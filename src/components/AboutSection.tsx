import React from 'react';
import { Shield, Compass, HeartHandshake, MapPin, Users, Award, CheckCircle2, Server, Cpu, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#030712] text-white relative border-b border-slate-800/80">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-sky-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1 text-xs font-mono text-sky-400 shadow-md">
              <Users className="w-3.5 h-3.5" />
              <span>Engineering Backbone // TechNix Africa</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              A Dedicated Digital Infrastructure <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-sky-400 via-blue-200 to-emerald-400 bg-clip-text text-transparent">
                Partner for African Organisations
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              TechNix Africa was founded on a simple conviction: <strong>African organisations do not need complicated, overpriced technology that ends up abandoned after launch.</strong> They need dependable, practical systems that solve real daily operational bottlenecks.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-sky-950/80 border border-sky-800/40 text-sky-400 flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Engineering Philosophy</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-0.5">
                    Technology must reduce workload, not create new confusion. Every system we build or maintain must justify itself in time saved, errors prevented, or revenue generated.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-950/80 border border-emerald-800/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Physical Presence, Real Accountability</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-0.5">
                    With engineering hubs in both Blantyre and Lilongwe, we don&apos;t just communicate over remote tickets — our technicians visit your office, review your setup, and support your staff in person.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-950/80 border border-amber-800/40 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Long-Term Partnership</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-0.5">
                    We measure relationships in years, not projects. Through our TechNix Care managed plans, we remain your ongoing IT department as your business grows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Architecture Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel-elevated rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-slate-300">REGIONAL NETWORK STATUS</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                  ONLINE
                </span>
              </div>

              {/* Dual Regional Hubs */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      <span>Blantyre Engineering Hub</span>
                    </span>
                    <span className="text-[10px] font-mono text-sky-400">HQ NODE</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Primary Software & Cloud Engineering Lab • Physical Helpdesk Dispatch
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Lilongwe Operations Hub</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">CAPITAL NODE</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Government, Parastatal & NGO Technical Liaison • Field Support Network
                  </p>
                </div>
              </div>

              {/* Operational Hub Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center">
                  <div className="text-sm font-bold text-white font-mono">Blantyre & Lilongwe</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Physical Hubs</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center">
                  <div className="text-sm font-bold text-emerald-400 font-mono">Local Kwacha</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Direct Billing</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
