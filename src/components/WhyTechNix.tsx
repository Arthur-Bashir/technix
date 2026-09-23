import React from 'react';
import { ShieldCheck, Users, Clock, Award, Compass, HeartHandshake } from 'lucide-react';

export const WhyTechNix: React.FC = () => {
  const pillars = [
    {
      title: 'Real Systems Engineering',
      desc: 'Experienced software architects and network engineers who build dependable systems that do not break under load or power fluctuations.',
      icon: Award,
    },
    {
      title: 'Engineered for African Realities',
      desc: 'We design specifically for local conditions: load-shedding resilience, low-bandwidth optimization, and local mobile money (Airtel & Mpamba) workflows.',
      icon: ShieldCheck,
    },
    {
      title: 'Long-Term Operational Care',
      desc: 'Our work doesn&apos;t end at launch. Through TechNix Care, our engineers remain actively engaged for continuous maintenance, backups, and user support.',
      icon: HeartHandshake,
    },
    {
      title: 'Practical, Jargon-Free Systems',
      desc: 'No bloated software that sits unused. We build clean, intuitive portals and tools that staff can master immediately without months of complicated manuals.',
      icon: Compass,
    },
    {
      title: 'Understanding Commercial Realities',
      desc: 'We don&apos;t sell technology for novelty. We build around your cash flow, staff capacity, and clear, measurable operational improvements.',
      icon: Users,
    },
    {
      title: 'Transparent Kwacha Pricing',
      desc: 'No unexpected exchange-rate shocks or mystery fees. Clear written scope, fixed pricing in Malawi Kwacha, and dependable local teams in Blantyre & Lilongwe.',
      icon: Clock,
    },
  ];

  return (
    <section id="why-technix" className="py-24 bg-[#060b17] text-white relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            Why TechNix Africa
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">
            Dependable Technology Built for Practical African Operations
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
            We don&apos;t make unsupported promises. Here is why international development initiatives, regional commercial operators, and growing Malawian enterprises choose TechNix as their digital infrastructure partner.
          </p>
        </div>

        {/* 6 Editorial Pillars Grid - Subtle Top-Border Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="pt-6 border-t border-slate-800/80 space-y-3"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
