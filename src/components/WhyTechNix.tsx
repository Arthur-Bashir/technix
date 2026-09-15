import React from 'react';
import { ShieldCheck, Users, Clock, Award, Compass, HeartHandshake } from 'lucide-react';

export const WhyTechNix: React.FC = () => {
  const pillars = [
    {
      title: 'We Understand Technology',
      desc: 'Experienced systems architects, developers, and field network engineers who know how to build and maintain systems that do not crash under pressure.',
      icon: Award,
    },
    {
      title: 'We Understand Organisations',
      desc: 'We do not push technology for the sake of technology. We start from your cash flow, your field realities, your staff capacity, and your operational goals.',
      icon: Users,
    },
    {
      title: 'We Stay With You',
      desc: 'Our relationship does not end when the website launches or the server is installed. With TechNix Care, we provide continuous monthly maintenance and support.',
      icon: HeartHandshake,
    },
    {
      title: 'We Build Practical Solutions',
      desc: 'No bloated software that nobody in your office knows how to use. We build clean, intuitive systems that ordinary staff can master in 30 minutes.',
      icon: Compass,
    },
    {
      title: 'Local Understanding, Global Tech',
      desc: 'We understand load-shedding, intermittent telecom networks, and local payment methods (Airtel Money, Mpamba), while applying international engineering standards.',
      icon: ShieldCheck,
    },
    {
      title: 'Rapid & Transparent Accountability',
      desc: 'No vague invoices or surprise charges. Clear written scope, defined starting prices in Malawi Kwacha, and rapid SLA response times in Blantyre & Lilongwe.',
      icon: Clock,
    },
  ];

  return (
    <section id="why-technix" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-1 text-xs font-bold text-blue-300">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Why TechNix Africa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Practical Technology. Dependable Partnership.
          </h2>
          <p className="text-lg text-slate-300">
            We don’t claim to be the &quot;best in the world&quot; without proof. Instead, we offer practical reasons why businesses and NGOs choose us as their long-term technology partner.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80 hover:border-blue-500/60 transition-all duration-300 hover:bg-slate-800 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
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
