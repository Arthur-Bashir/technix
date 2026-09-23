import React, { useState } from 'react';
import { 
  Building2, 
  School, 
  HeartHandshake, 
  Users, 
  Briefcase, 
  Landmark, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface CustomerTypesSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const CustomerTypesSection: React.FC<CustomerTypesSectionProps> = ({ onOpenQuote }) => {
  const industries = [
    {
      id: 'smes',
      code: 'SEC-01',
      title: 'SMEs & Growing Businesses',
      badge: 'Commercial',
      icon: Building2,
      tagline: 'Retailers, wholesalers, logistics firms & emerging ventures',
      howTechNixHelps: 'We help you present a credible professional face with custom websites, domain email, digital point-of-sale setups, and affordable monthly IT care so your daily trading never stops.',
      keyDeliverables: [
        'Business Starter & Pro websites with WhatsApp inquiries',
        'Custom corporate domain email (e.g. info@yourcompany.mw)',
        'Inventory, invoicing, and sales recording software',
        'On-call IT rescue and PC maintenance',
      ],
      ctaText: 'Explore SME Solutions',
    },
    {
      id: 'schools',
      code: 'SEC-02',
      title: 'Schools & Training Institutions',
      badge: 'Education',
      icon: School,
      tagline: 'Primary, secondary, vocational colleges & academies',
      howTechNixHelps: 'We digitize school operations to eliminate fee reconciliation headaches, automate student report cards, broadcast urgent alerts to parents, and keep computer labs virus-free.',
      keyDeliverables: [
        'Student management and report card generators',
        'SMS and WhatsApp broadcast portals for parents',
        'Official admissions website and prospectus downloads',
        'Computer lab network maintenance & staff digital training',
      ],
      ctaText: 'Explore Education Solutions',
    },
    {
      id: 'ngos',
      code: 'SEC-03',
      title: 'NGOs & Development Organisations',
      badge: 'Development',
      icon: HeartHandshake,
      tagline: 'Local and international NGOs, trust funds & donor consortia',
      howTechNixHelps: 'We engineer offline-first field data collection tools, automated donor-compliant M&E dashboards, and encrypted cloud backups that protect field findings across remote districts.',
      keyDeliverables: [
        'Offline mobile survey & field reporting applications',
        'Executive Power BI dashboards for board and donor reporting',
        'High-security cloud backups & multi-branch IT maintenance',
        'ICT4D technical consultation & field tech deployment',
      ],
      ctaText: 'Explore NGO Solutions',
    },
    {
      id: 'churches',
      code: 'SEC-04',
      title: 'Churches & Community Organisations',
      badge: 'Community',
      icon: Users,
      tagline: 'Congregations, national synods, youth networks & foundations',
      howTechNixHelps: 'We empower churches and associations to organize member registries, securely collect digital tithes or dues via mobile money, and broadcast weekly sermons.',
      keyDeliverables: [
        'Church member database & attendance tracking systems',
        'Airtel Money & TNM Mpamba digital giving integrations',
        'Livestreaming hardware setup and audio-visual consulting',
        'Event registration and digital bulk SMS announcements',
      ],
      ctaText: 'Explore Community Solutions',
    },
    {
      id: 'professional-practices',
      code: 'SEC-05',
      title: 'Professional Practices & Consultancies',
      badge: 'Professional',
      icon: Briefcase,
      tagline: 'Law firms, clinics, audit partnerships & architectural studios',
      howTechNixHelps: 'We safeguard privileged client records with encrypted local backups, configure high-trust domain email, and streamline client bookings with confidential intake workflows.',
      keyDeliverables: [
        'Authoritative corporate websites designed to win formal bids',
        'Strictly encrypted business email and document archiving',
        'Online consultation booking and client intake portals',
        'Dedicated TechNix Care workstation & printer SLA support',
      ],
      ctaText: 'Explore Practice Solutions',
    },
    {
      id: 'corporates',
      code: 'SEC-06',
      title: 'Larger Corporations & Enterprises',
      badge: 'Enterprise',
      icon: Landmark,
      tagline: 'Financial institutions, multi-branch conglomerates & parastatals',
      howTechNixHelps: 'We partner with enterprise IT directors to extend their engineering capacity: building bespoke internal portals, conducting digital security audits, and managing multi-site infrastructure.',
      keyDeliverables: [
        'Custom enterprise ERP modules and multi-branch database sync',
        'Cybersecurity health checks, penetration testing & hardening',
        'Dedicated SLA infrastructure retainers with guaranteed response times',
        'Workforce technology training (Power BI, Advanced Excel, Cloud)',
      ],
      ctaText: 'Explore Enterprise Solutions',
    },
  ];

  const [activeTab, setActiveTab] = useState(industries[0].id);
  const activeIndustry = industries.find((i) => i.id === activeTab) || industries[0];

  const handleWhatsApp = (title: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      `Hello TechNix, I represent a ${title} and would like to learn how you can support our technology needs.`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="customer-types" className="py-24 bg-[#030712] text-white relative border-b border-slate-800/80">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-sky-600/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1 text-xs font-mono text-sky-400 shadow-md">
            <Building2 className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">Sector Specific Infrastructure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Tailored Engineering for Your <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-400 via-blue-200 to-emerald-400 bg-clip-text text-transparent">
              Specific Organisational Context
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A school operates differently from an NGO, which operates differently from a law firm or retail enterprise. We design solutions aligned with your exact operational realities.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(ind.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border flex items-center space-x-2 ${
                activeTab === ind.id
                  ? 'bg-sky-600 text-white border-sky-400 shadow-lg shadow-sky-600/30'
                  : 'bg-slate-900/80 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span>{ind.title.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Selected Industry Card */}
        <div className="glass-panel-elevated rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 bg-slate-900/90 border border-slate-800 px-2.5 py-1 rounded">
                  {activeIndustry.code} • {activeIndustry.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {activeIndustry.tagline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                How TechNix Powers {activeIndustry.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeIndustry.howTechNixHelps}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Tailored Sector Modules:
                </span>
                {activeIndustry.keyDeliverables.map((d, dIdx) => (
                  <div key={dIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1">
                  SECTOR ONBOARDING
                </span>
                <h4 className="text-lg font-bold text-white mb-2">
                  Ready to upgrade your technology systems?
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Book a confidential 30-minute discovery consultation with our technical team in Blantyre & Lilongwe.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => onOpenQuote(`${activeIndustry.title} Technology Inquiry`)}
                  className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-sky-600/20 transition-all cursor-pointer flex items-center justify-center space-x-2 border border-sky-400/40"
                >
                  <span>{activeIndustry.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleWhatsApp(activeIndustry.title)}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discuss on WhatsApp</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
