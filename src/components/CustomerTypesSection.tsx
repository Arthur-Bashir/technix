import React, { useState } from 'react';
import { 
  Building2, 
  HeartHandshake, 
  School, 
  Briefcase, 
  ArrowRight,
  MessageSquare,
  ChevronRight,
  Check
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface CustomerTypesSectionProps {
  onOpenQuote: (service?: string) => void;
}

interface SectorGroup {
  id: string;
  name: string;
  subtitle: string;
  shortSummary: string;
  howTechNixWorks: string;
  deliverables: string[];
  ctaLabel: string;
}

const SECTORS: SectorGroup[] = [
  {
    id: 'businesses',
    name: 'BUSINESSES & ENTERPRISES',
    subtitle: 'Commercial operators, SMEs, professional practices & corporate retailers',
    shortSummary: 'Technology that protects revenue, captures client enquiries, and eliminates computer downtime.',
    howTechNixWorks: 'We deploy professional corporate websites, authenticated domain email, multi-branch POS/inventory databases, and proactive monthly IT maintenance so leadership can focus on business growth.',
    deliverables: [
      'Commercial websites with integrated WhatsApp sales paths',
      'Authenticated domain inboxes (@yourcompany.mw)',
      'Multi-branch inventory and administrative systems',
      'On-call IT support retainers in Blantyre & Lilongwe'
    ],
    ctaLabel: 'Start Business Technology Project',
  },
  {
    id: 'ngos',
    name: 'NGOs & DEVELOPMENT ORGANISATIONS',
    subtitle: 'International development partners, civil society, trusts & donor programmes',
    shortSummary: 'Secure, offline-capable field systems and structured reporting for funding partners.',
    howTechNixWorks: 'We build offline-first mobile survey tools, queryable project databases, executive Power BI dashboards, and scheduled cloud backups that keep mission data safe across field locations.',
    deliverables: [
      'Offline-capable field survey and beneficiary data platforms',
      'Executive M&E dashboards for board and donor reporting',
      'Scheduled cloud backups across distributed offices',
      'ICT4D technical consulting and system deployment'
    ],
    ctaLabel: 'Discuss NGO & Programme Requirements',
  },
  {
    id: 'institutions',
    name: 'INSTITUTIONS & EDUCATION',
    subtitle: 'Schools, training colleges, universities, healthcare bodies & parastatals',
    shortSummary: 'Digital record governance, student administration, and reliable campus networks.',
    howTechNixWorks: 'We replace manual paper notebooks with centralized records, automated termly report cards, direct SMS fee alerts to parents, and structured campus computer lab maintenance.',
    deliverables: [
      'Centralized student records and automated report generators',
      'Automated parent SMS broadcast notifications',
      'Official institutional portals and prospectus downloads',
      'Campus Wi-Fi stabilization and computer lab servicing'
    ],
    ctaLabel: 'Plan Institutional Systems',
  },
  {
    id: 'programmes',
    name: 'PROJECTS & PROGRAMMES',
    subtitle: 'Multi-partner initiatives, public sector transformations & rapid rollouts',
    shortSummary: 'Specialized digital infrastructure engineered for defined timelines and scale.',
    howTechNixWorks: 'We act as the technical execution partner for specific programme scopes: delivering custom portals, conducting systems training for field officers, and providing dedicated support.',
    deliverables: [
      'Custom web portals built to programme terms of reference',
      'Workforce digital training workshops (Excel, Power BI, Cloud)',
      'Systems security review and technical hardening',
      'Fixed-milestone delivery with Malawi Kwacha invoicing'
    ],
    ctaLabel: 'Scope a Programme Engagement',
  },
];

export const CustomerTypesSection: React.FC<CustomerTypesSectionProps> = ({ onOpenQuote }) => {
  const [activeSectorId, setActiveSectorId] = useState<string>(SECTORS[0].id);
  const activeSector = SECTORS.find((s) => s.id === activeSectorId) || SECTORS[0];

  const handleWhatsApp = (sectorName: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      `Hello TechNix, I represent an organisation in the ${sectorName} sector and would like to discuss our technology requirements.`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="customer-types" className="py-24 bg-[#050811] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-medium uppercase tracking-wider text-sky-400">
            Sector-Oriented Architecture
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
            Technology Configured for Your Operational Sector
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
            A commercial business, an international development NGO, and an educational institution operate on entirely different constraints. We tailor digital systems to match your operational reality.
          </p>
        </div>

        {/* Typographic Sector Grid - Zero Cards, Pure Typographic Rhythm & Scale */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Large Typographic Sector Names with Asymmetric Indicators */}
          <div className="lg:col-span-6 space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-4 px-2">
              Select an Operational Sector
            </div>

            <div className="divide-y divide-white/5 border-y border-white/5">
              {SECTORS.map((sector, idx) => {
                const isSelected = sector.id === activeSectorId;
                const num = String(idx + 1).padStart(2, '0');

                return (
                  <button
                    key={sector.id}
                    onClick={() => setActiveSectorId(sector.id)}
                    className={`w-full text-left py-6 px-4 transition-all cursor-pointer group flex items-start justify-between gap-4 ${
                      isSelected
                        ? 'bg-sky-500/10 border-l-4 border-sky-400 pl-5'
                        : 'border-l-4 border-transparent hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center space-x-3 text-xs font-mono">
                        <span className={isSelected ? 'text-sky-400 font-bold' : 'text-slate-400'}>
                          {num}
                        </span>
                        <span className="text-[11px] uppercase tracking-wider text-slate-400">
                          Sector Group
                        </span>
                      </div>

                      <div className={`text-xl sm:text-2xl font-black tracking-tight leading-tight transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}>
                        {sector.name}
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed font-normal max-w-md">
                        {sector.subtitle}
                      </p>
                    </div>

                    <ChevronRight className={`w-5 h-5 shrink-0 mt-2 transition-transform ${
                      isSelected ? 'text-sky-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Editorial Sector Dossier - Unboxed, Generous Space */}
          <div className="lg:col-span-6 pt-2 space-y-8">
            
            {/* Active Sector Heading */}
            <div className="space-y-3 pb-6 border-b border-white/5">
              <span className="text-xs font-mono font-medium text-sky-400 uppercase tracking-wider">
                Sector Strategy
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {activeSector.name}
              </h3>
              <p className="text-base text-slate-200 font-medium leading-relaxed">
                {activeSector.shortSummary}
              </p>
            </div>

            {/* Operational Approach */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                How TechNix Delivers
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {activeSector.howTechNixWorks}
              </p>
            </div>

            {/* Core Deliverables - Clean Typography with Dividers */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-medium">
                Standard Deliverables for This Sector
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {activeSector.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => onOpenQuote(`${activeSector.name} Project Inquiry`)}
                className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center space-x-2 cursor-pointer border border-sky-400/30 shadow-md shadow-sky-600/20"
              >
                <span>{activeSector.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleWhatsApp(activeSector.name)}
                className="px-4 py-3 bg-transparent hover:bg-slate-900 text-slate-300 hover:text-emerald-400 border border-slate-800 rounded-xl transition-colors flex items-center space-x-2 text-xs font-semibold cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss on WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
