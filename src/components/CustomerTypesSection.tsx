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
      title: 'SMEs & Growing Businesses',
      sector: 'Commercial & Retail',
      icon: Building2,
      tagline: 'Retailers, wholesalers, transit operators & expanding family businesses',
      howTechNixHelps: 'We help you present a trusted corporate image to buyers, stop losing stock across stores, and eliminate costly PC downtime with affordable monthly IT support.',
      keyDeliverables: [
        'Professional business websites with WhatsApp ordering',
        'Custom domain email (e.g. info@yourcompany.mw)',
        'Multi-branch inventory and point-of-sale systems',
        'On-call IT rescue and computer repair retainers',
      ],
      ctaText: 'Explore SME Solutions',
    },
    {
      id: 'schools',
      title: 'Schools & Training Colleges',
      sector: 'Education',
      icon: School,
      tagline: 'Primary, secondary schools, vocational training colleges & universities',
      howTechNixHelps: 'We replace chaotic paper notebooks with centralized student records, automate termly report cards, and enable automated SMS broadcast notifications to parents.',
      keyDeliverables: [
        'Student records and automated report card generators',
        'Direct SMS tuition and fee reminders to parents',
        'Official admissions website and prospectus downloads',
        'Computer lab network maintenance & virus defense',
      ],
      ctaText: 'Explore Education Solutions',
    },
    {
      id: 'ngos',
      title: 'NGOs & Development Programmes',
      sector: 'International Development',
      icon: HeartHandshake,
      tagline: 'Local civil society, international NGOs, trusts & donor-funded programs',
      howTechNixHelps: 'We build offline-capable field survey apps, executive donor M&E dashboards, and automated off-site cloud backups that safeguard mission data across remote districts.',
      keyDeliverables: [
        'Offline mobile survey and enumerator reporting tools',
        'Executive Power BI dashboards for board and donor reporting',
        'Encrypted cloud backups & multi-office network links',
        'Technical ICT4D deployment consulting',
      ],
      ctaText: 'Explore NGO Solutions',
    },
    {
      id: 'professional-practices',
      title: 'Lawyers, Doctors & Advisors',
      sector: 'Professional Services',
      icon: Briefcase,
      tagline: 'Law firms, clinics, audit partnerships & architectural studios',
      howTechNixHelps: 'We protect confidential client case files with encrypted local backups, configure high-trust domain email, and streamline client bookings with structured intake workflows.',
      keyDeliverables: [
        'Executive profile websites designed to present an official commercial profile',
        'Authenticated business email with mobile and PC synchronization',
        'Online consultation booking and client intake portals',
        'Dedicated workstation and printer support agreements',
      ],
      ctaText: 'Explore Practice Solutions',
    },
    {
      id: 'churches',
      title: 'Churches & Community Bodies',
      sector: 'Faith & Community',
      icon: Users,
      tagline: 'Congregations, dioceses, synods, youth networks & community trusts',
      howTechNixHelps: 'We empower churches and associations to organize member registries, securely collect digital contributions via Airtel Money and Mpamba, and broadcast weekly communications.',
      keyDeliverables: [
        'Church member database & attendance tracking systems',
        'Airtel Money & TNM Mpamba digital giving integrations',
        'Livestreaming hardware and audio-visual consulting',
        'Bulk SMS and WhatsApp announcement channels',
      ],
      ctaText: 'Explore Community Solutions',
    },
    {
      id: 'corporates',
      title: 'Larger Corporations & Parastatals',
      sector: 'Corporate Enterprise',
      icon: Landmark,
      tagline: 'Financial institutions, multi-branch conglomerates & statutory corporations',
      howTechNixHelps: 'We partner with enterprise IT directors to extend their engineering capacity: building bespoke internal portals, conducting cybersecurity reviews, and providing multi-site infrastructure support.',
      keyDeliverables: [
        'Custom enterprise modules and multi-branch database sync',
        'Cybersecurity reviews and system hardening',
        'Structured infrastructure support retainers',
        'Corporate workforce technology training (Power BI, Excel, Cloud)',
      ],
      ctaText: 'Explore Corporate Solutions',
    },
  ];

  const [activeTab, setActiveTab] = useState(industries[0].id);
  const activeIndustry = industries.find((i) => i.id === activeTab) || industries[0];

  const handleWhatsApp = (title: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      `Hello TechNix, I represent an organisation in the ${title} sector and would like to discuss our technology requirements.`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="customer-types" className="py-24 bg-[#050811] text-white relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            Sector-Specific Solutions
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">
            Engineered Around How Your Organisation Truly Works
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
            A school operates differently from an NGO, which operates differently from a law firm, transport company, or retail enterprise. We design digital systems that match your sector&apos;s daily realities.
          </p>
        </div>

        {/* Sector Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {industries.map((ind) => {
            const isSelected = activeTab === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-sky-600 text-white border-sky-400 shadow-md shadow-sky-950/50'
                    : 'bg-[#090e1a] text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                <span>{ind.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Showcase */}
        <div className="bg-[#090e1a] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase text-sky-400 tracking-wider">
                  {activeIndustry.sector}
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  How TechNix Powers {activeIndustry.title}
                </h3>

                <p className="text-xs font-mono text-slate-400 mt-1">
                  {activeIndustry.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {activeIndustry.howTechNixHelps}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Key Tailored Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeIndustry.keyDeliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start space-x-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#050811] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Sector Engagement
                </span>
                <h4 className="text-lg font-bold text-white mb-2">
                  Upgrade your organisation&apos;s technology infrastructure
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Schedule a confidential 30-minute discovery call with our engineering team in Blantyre or Lilongwe.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => onOpenQuote(`${activeIndustry.title} Technology Inquiry`)}
                  className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center space-x-2 border border-sky-400/30"
                >
                  <span>{activeIndustry.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleWhatsApp(activeIndustry.title)}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 font-semibold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
