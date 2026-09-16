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
      title: 'SMEs',
      badge: 'Commercial',
      icon: Building2,
      tagline: 'Retailers, wholesalers, service companies & emerging ventures',
      howTechNixHelps: 'We help you present a credible professional face with custom websites, domain email, digital point-of-sale setups, and affordable monthly IT care so your daily trading never stops.',
      keyDeliverables: [
        'Business Starter & Pro websites with WhatsApp inquiries',
        'Custom corporate domain email (e.g. info@yourcompany.com)',
        'Inventory, invoicing, and sales recording software',
        'On-call IT rescue and PC maintenance',
      ],
      ctaText: 'Explore SME Solutions',
    },
    {
      id: 'schools',
      title: 'Schools & Training Institutions',
      badge: 'Education',
      icon: School,
      tagline: 'Primary, secondary, vocational colleges & academies',
      howTechNixHelps: 'We digitize school operations to eliminate fee reconciliations headaches, automate student report cards, broadcast urgent alerts to parents, and keep computer labs virus-free.',
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
      title: 'NGOs & Development Organisations',
      badge: 'Development',
      icon: HeartHandshake,
      tagline: 'Local and international NGOs, trust funds & consortia',
      howTechNixHelps: 'We engineer offline-first field data collection tools, automated donor-compliant M&E dashboards, and encrypted cloud backups that protect field findings across remote districts.',
      keyDeliverables: [
        'Offline mobile survey & field reporting applications',
        'Executive Power BI dashboards for board and donor reporting',
        'Encrypted off-site cloud data protection and disaster recovery',
        'ICT4D technical consulting and team workshops',
      ],
      ctaText: 'Explore NGO Solutions',
    },
    {
      id: 'churches',
      title: 'Churches & Associations',
      badge: 'Community',
      icon: Users,
      tagline: 'Faith institutions, cooperatives, alumni bodies & unions',
      howTechNixHelps: 'We help member organizations maintain accurate member registers, coordinate bulk announcements, track pledges and contributions, and broadcast notices securely.',
      keyDeliverables: [
        'Member directory and contribution management portal',
        'Bulk SMS and WhatsApp group notice broadcasting',
        'Official informational website with event calendars',
        'Audio/visual and live streaming technology setup',
      ],
      ctaText: 'Explore Association Solutions',
    },
    {
      id: 'professionals',
      title: 'Professionals',
      badge: 'Practices',
      icon: Briefcase,
      tagline: 'Lawyers, clinics, accountants, architects & consultants',
      howTechNixHelps: 'We build high-trust corporate profile websites, configure secure confidential client file backups, and streamline digital consultation bookings so you win higher-value clients.',
      keyDeliverables: [
        'Executive credential and case-study showcase website',
        'Confidential encrypted cloud backup for client files',
        'Domain email and calendar synchronization across devices',
        'Client intake and consultation scheduling workflows',
      ],
      ctaText: 'Explore Professional Solutions',
    },
    {
      id: 'larger-orgs',
      title: 'Larger Organisations',
      badge: 'Enterprise',
      icon: Landmark,
      tagline: 'Multi-branch enterprises, distributors & statutory bodies',
      howTechNixHelps: 'We provide dedicated SLA-backed IT infrastructure management, inter-branch VPN networks, cybersecurity auditing, and integration with legacy databases to guarantee business continuity.',
      keyDeliverables: [
        'TechNix Care Professional with dedicated Senior Systems Engineer',
        'Inter-office secure VPN and enterprise firewall management',
        'Cybersecurity risk assessment and disaster recovery planning',
        'Custom enterprise software and database integration',
      ],
      ctaText: 'Explore Enterprise Solutions',
    },
  ];

  const [activeTab, setActiveTab] = useState<string>(industries[0].id);
  const activeIndustry = industries.find((i) => i.id === activeTab) || industries[0];

  const handleWhatsApp = (industryTitle: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      `Hello TechNix, I am inquiring on behalf of ${industryTitle} regarding your tailored technology solutions.`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="industries" className="py-24 bg-white border-b border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Sector Focus
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Technology for Organisations Like Yours
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            We adapt technology to your specific operational environment — because a rural school, an emergency NGO, and a city trading business face very different technical realities.
          </p>
        </div>

        {/* Industry Selection Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isSelected = ind.id === activeTab;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`p-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center space-y-2 ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-102'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isSelected ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border border-slate-200'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold">{ind.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Detailed Card */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-md">
                  {activeIndustry.badge} Sector
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {activeIndustry.tagline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                How TechNix Helps {activeIndustry.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {activeIndustry.howTechNixHelps}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Tailored Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeIndustry.keyDeliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 bg-white p-3 rounded-xl border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Ready to move forward?
                </span>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Get a tailored proposal for your {activeIndustry.title.toLowerCase()}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Speak directly with an engineer who understands your sector requirements and budget expectations.
                </p>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={() => onOpenQuote(`${activeIndustry.title} Technology Solution`)}
                  className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-xs"
                >
                  <span>Request {activeIndustry.title} Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleWhatsApp(activeIndustry.title)}
                  className="w-full py-3.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs sm:text-sm rounded-xl border border-emerald-200 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
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
