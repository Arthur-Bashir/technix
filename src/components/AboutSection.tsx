import React from 'react';
import { Shield, Compass, HeartHandshake, MapPin, Users, Award, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1 text-xs font-bold text-blue-700">
              <Users className="w-3.5 h-3.5" />
              <span>About TechNix Africa</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Dedicated Technology Partner for African Enterprises
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              TechNix Africa was founded on a simple conviction: <strong>African businesses and organisations do not need complicated, overpriced technology that ends up abandoned after launch.</strong> They need dependable, practical systems that solve real daily operational bottlenecks.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">What We Believe</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">
                    Technology should reduce workload, not create new confusion. Every system we build or maintain must justify itself in time saved, errors prevented, or revenue generated.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Local Presence, Real Accountability</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">
                    With operational hubs in both Blantyre and Lilongwe, we don&apos;t just communicate over remote tickets — our field engineers visit your office, assess your setup, and sit with your staff until everything runs smoothly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Long-Term Commitment</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">
                    We measure relationships in years, not projects. Through our TechNix Care managed plans, we remain your ongoing IT department as your business grows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights & Presence Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <span>Our Geographic Presence</span>
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                  <div className="flex items-center space-x-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-4 h-4" />
                    <span>Commercial Hub — Blantyre</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {COMPANY_INFO.address}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Engineering, Web Development & Field Rescue Team
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                  <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-4 h-4" />
                    <span>Capital Hub — Lilongwe</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {COMPANY_INFO.secondaryOffice}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    NGO Advisory, Systems Consulting & Corporate Training
                  </p>
                </div>
              </div>

              {/* Operating Commitments */}
              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Transparent Fixed Scope & Milestones</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>All Invoices in Malawi Kwacha (MK)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Strict Data Privacy & Client Confidentiality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
