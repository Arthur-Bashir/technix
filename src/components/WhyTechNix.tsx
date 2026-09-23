import React from 'react';
import { ShieldCheck, Users, Clock, Award, Compass, HeartHandshake } from 'lucide-react';

export const WhyTechNix: React.FC = () => {
  const pillars = [
    {
      code: 'DIR-01',
      title: 'We Master Infrastructure',
      desc: 'Experienced systems architects, developers, and field network engineers who know how to build and maintain systems that do not crash under high concurrency.',
      icon: Award,
      accent: 'text-sky-400 bg-sky-950/80 border-sky-800/40',
    },
    {
      code: 'DIR-02',
      title: 'We Understand Organisations',
      desc: 'We do not push technology for the sake of novelty. We engineer around your cash flow, field realities, staff capacity, and clear operational objectives.',
      icon: Users,
      accent: 'text-blue-400 bg-blue-950/80 border-blue-800/40',
    },
    {
      code: 'DIR-03',
      title: 'We Stay With You',
      desc: 'Our relationship does not end when the website launches or server is provisioned. With TechNix Care, we provide continuous monthly maintenance and technical support.',
      icon: HeartHandshake,
      accent: 'text-emerald-400 bg-emerald-950/80 border-emerald-800/40',
    },
    {
      code: 'DIR-04',
      title: 'We Build Practical Solutions',
      desc: 'No bloated software that sits idle. We build clean, intuitive systems that ordinary staff can master in 30 minutes without reading a 200-page manual.',
      icon: Compass,
      accent: 'text-indigo-400 bg-indigo-950/80 border-indigo-800/40',
    },
    {
      code: 'DIR-05',
      title: 'Local Context, Global Tech',
      desc: 'We engineer specifically for load-shedding resilience, intermittent rural telecom networks, and local mobile money integration (Airtel Money, TNM Mpamba).',
      icon: ShieldCheck,
      accent: 'text-cyan-400 bg-cyan-950/80 border-cyan-800/40',
    },
    {
      code: 'DIR-06',
      title: 'Fixed Transparent Accountability',
      desc: 'No vague invoices or unexpected overage costs. Itemized written scope, defined starting prices in Malawi Kwacha, and rapid SLA response times in Blantyre & Lilongwe.',
      icon: Clock,
      accent: 'text-amber-400 bg-amber-950/80 border-amber-800/40',
    },
  ];

  return (
    <section id="why-technix" className="py-24 bg-[#030712] text-white relative border-b border-slate-800/80">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sky-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1 text-xs font-mono text-sky-400 shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-semibold uppercase tracking-wider">Engineering Principles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Practical Technology. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-400 via-blue-200 to-emerald-400 bg-clip-text text-transparent">
              Dependable Long-Term Partnership.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            We don’t make empty promises. Instead, we offer practical reasons why commercial enterprises, NGOs, and educational institutions choose TechNix Africa as their long-term digital infrastructure partner.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.code}
                className="glass-panel rounded-2xl p-7 border border-slate-800/90 hover:border-sky-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-inner ${pillar.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-950/80 border border-slate-800 px-2 py-0.5 rounded">
                      {pillar.code}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
