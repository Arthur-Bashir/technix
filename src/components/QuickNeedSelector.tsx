import React from 'react';
import { 
  Globe, 
  Code2, 
  Wrench, 
  Mail, 
  Server, 
  GraduationCap, 
  TrendingUp, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface QuickNeedSelectorProps {
  onSelectNeed: (targetSection: string, serviceTitle: string) => void;
  onOpenITRescue: () => void;
  onOpenQuote: (service?: string) => void;
}

export const QuickNeedSelector: React.FC<QuickNeedSelectorProps> = ({
  onSelectNeed,
  onOpenITRescue,
  onOpenQuote,
}) => {
  const needs = [
    {
      id: 'website',
      title: 'I Need a Website',
      description: 'Professional, mobile-friendly websites that attract clients, showcase services and build instant business credibility.',
      badge: 'Most Requested',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
      icon: Globe,
      iconColor: 'text-blue-600 bg-blue-50',
      targetSection: 'business-website',
      startingPrice: 'From MK 380,000',
      actionLabel: 'View Website Packages',
      whatsAppMsg: 'Hello TechNix, I am looking for a business website for my company.',
    },
    {
      id: 'software',
      title: 'I Need Software',
      description: 'Custom management systems, databases, and client portals that replace tedious manual paperwork and spreadsheets.',
      badge: 'High Impact',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
      icon: Code2,
      iconColor: 'text-purple-600 bg-purple-50',
      targetSection: 'software-solutions',
      startingPrice: 'Custom Quote',
      actionLabel: 'Explore Software Solutions',
      whatsAppMsg: 'Hello TechNix, I need custom software to automate our business processes.',
    },
    {
      id: 'it-support',
      title: 'I Need IT Support',
      description: 'Rapid technical troubleshooting, network setup, Wi-Fi repairs, printer fixes, virus removal, and PC maintenance.',
      badge: 'Urgent Help',
      badgeColor: 'bg-red-100 text-red-800 border-red-200',
      icon: Wrench,
      iconColor: 'text-red-600 bg-red-50',
      targetSection: 'it-rescue',
      startingPrice: 'Same-Day Service',
      actionLabel: 'Get Technical Help',
      isEmergency: true,
      whatsAppMsg: 'Hello TechNix, we have an urgent IT problem in our office that needs technical support.',
    },
    {
      id: 'email',
      title: 'I Need Business Email',
      description: 'Stop using @gmail.com. Upgrade to credible, secure company inboxes (name@yourcompany.com) on your own registered domain.',
      badge: 'Credibility',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      icon: Mail,
      iconColor: 'text-emerald-600 bg-emerald-50',
      targetSection: 'business-email',
      startingPrice: 'From MK 45,000/yr',
      actionLabel: 'Get Professional Email',
      whatsAppMsg: 'Hello TechNix, I want to set up professional business email accounts for our staff.',
    },
    {
      id: 'hosting',
      title: 'I Need Hosting & Domains',
      description: 'Fast, secure web hosting, local .mw & .com domain registration, SSL certificates, and 99.9% uptime for business apps.',
      badge: 'Cloud Infrastructure',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      icon: Server,
      iconColor: 'text-cyan-600 bg-cyan-50',
      targetSection: 'hosting-domains',
      startingPrice: 'From MK 65,000/yr',
      actionLabel: 'Explore Hosting Plans',
      whatsAppMsg: 'Hello TechNix, I need reliable hosting and domain registration for my website.',
    },
    {
      id: 'training',
      title: 'I Need Practical Training',
      description: 'Practical, workplace-ready courses in Advanced Excel, Power BI dashboards, AI for business, and cybersecurity for your team.',
      badge: 'TechNix Academy',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      icon: GraduationCap,
      iconColor: 'text-amber-600 bg-amber-50',
      targetSection: 'academy',
      startingPrice: 'From MK 95,000',
      actionLabel: 'View Upcoming Courses',
      whatsAppMsg: 'Hello TechNix, I would like to inquire about TechNix Academy training courses.',
    },
    {
      id: 'transformation',
      title: 'I Want to Transform My Org',
      description: 'Strategic IT roadmap, M&E data dashboards, office digitization, cloud migration, and workflow automation for growing institutions.',
      badge: 'Consultancy',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      icon: TrendingUp,
      iconColor: 'text-indigo-600 bg-indigo-50',
      targetSection: 'digital-transformation',
      startingPrice: 'Consultation',
      actionLabel: 'Request Assessment',
      whatsAppMsg: 'Hello TechNix, our organisation is seeking digital transformation and ICT strategy guidance.',
    },
  ];

  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCardClick = (item: typeof needs[0]) => {
    if (item.isEmergency) {
      onOpenITRescue();
      return;
    }
    const element = document.getElementById(item.targetSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      onSelectNeed(item.targetSection, item.title);
    }
  };

  return (
    <section id="what-do-you-need" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold tracking-widest text-blue-700 uppercase bg-blue-100/70 border border-blue-200 px-3.5 py-1.5 rounded-full">
            Immediate Action
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Do You Need Help With?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Select your immediate requirement below. We turn technology capabilities into clear, purchasable solutions.
          </p>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {needs.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={`need-card-${item.id}`}
                className={`relative flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-blue-400 hover:shadow-xl transition-all duration-200 group ${
                  item.isEmergency ? 'border-red-200 hover:border-red-400 bg-gradient-to-b from-white to-red-50/20' : ''
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconColor} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Starting Point:</span>
                    <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                      {item.startingPrice}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleCardClick(item)}
                      className={`flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        item.isEmergency
                          ? 'bg-red-600 hover:bg-red-700 text-white'
                          : 'bg-slate-900 hover:bg-blue-700 text-white'
                      }`}
                    >
                      <span>{item.actionLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleWhatsApp(item.whatsAppMsg)}
                      title="Direct WhatsApp"
                      className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
