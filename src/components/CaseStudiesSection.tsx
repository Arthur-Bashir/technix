import React, { useState } from 'react';
import { 
  Briefcase, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  Activity,
  Building2,
  Stethoscope,
  Truck,
  GraduationCap
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface CaseStudiesSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenQuote }) => {
  const projects = [
    {
      id: 'pact-data-system',
      client: 'PACT / Civil Society Partner Initiative',
      sector: 'Development & Grant Management',
      title: 'Field Reporting & Grant Performance Monitoring System',
      problem: 'Field officers across 8 districts were collecting community empowerment and health data on paper and disparate spreadsheets. Consolidating quarterly reports for donor submissions took 3 to 4 weeks of manual aggregation, with frequent transcription errors.',
      solution: 'TechNix Africa engineered an offline-capable mobile data collection system combined with a centralized cloud reporting dashboard. Field data synced automatically when connectivity was restored, with instant automated validation checks.',
      result: 'Reduced quarterly reporting turnaround from 24 days to under 48 hours. Eliminated data transcription discrepancies, giving project directors live visibility over community indicators.',
      metrics: [
        { label: 'Reporting Turnaround', value: '12x Faster' },
        { label: 'Districts Covered', value: '8 Districts' },
        { label: 'Data Discrepancies', value: '95% Reduced' },
      ],
      icon: Layers,
    },
    {
      id: 'red-cross-infrastructure',
      client: 'Malawi Red Cross Society Collaboration',
      sector: 'Humanitarian & Disaster Relief',
      title: 'Emergency Communication & High-Availability IT Backbone',
      problem: 'Frequent power outages and unstable local connectivity were cutting off district coordination teams during critical disaster response windows. Workstation failures regularly threatened volunteer registries and emergency inventory records.',
      solution: 'TechNix Africa overhauled the district IT infrastructure: implemented dual-WAN failover routers, stabilized power conditioning, deployed encrypted NAS cloud backups, and configured automated business email systems.',
      result: 'Maintained continuous disaster communication through heavy seasonal weather events. Safeguarded all volunteer records and disaster logistics inventories with zero data loss.',
      metrics: [
        { label: 'Communication Backbone', value: 'Continuous' },
        { label: 'Volunteer Records', value: '100% Protected' },
        { label: 'Emergency Response', value: 'Same-Day' },
      ],
      icon: Stethoscope,
    },
    {
      id: 'commercial-logistics',
      client: 'Trans-Central Commercial Logistics & Distribution',
      sector: 'Commercial Fleet & Haulage',
      title: 'Fleet Dispatch & Digital Invoicing Management System',
      problem: 'A fleet operator managing over 28 transit trucks suffered revenue leakage, delayed client billing, and lost paper delivery notes along major transit corridors between Blantyre, Lilongwe, and Mzuzu.',
      solution: 'TechNix Africa engineered a customized dispatch and proof-of-delivery application with driver mobile photo uploads, digital signature capture, and automated invoice dispatch upon delivery.',
      result: 'Shortened average invoicing turnaround from 14 days to the exact same day of delivery. Cash flow collection accelerated by 35% in the first quarter of deployment.',
      metrics: [
        { label: 'Billing Turnaround', value: 'Same-Day' },
        { label: 'Cash Flow Speed', value: '+35%' },
        { label: 'Paper Forms Cut', value: '100%' },
      ],
      icon: Truck,
    },
    {
      id: 'save-children-partner',
      client: 'Education & Child Protection Partner Programs',
      sector: 'Education & Community Development',
      title: 'Interactive Learning Resource Portal & School Asset Tracker',
      problem: 'Partner school headteachers and facilitators lacked a centralized, accessible repository for curriculum guides, training manuals, and equipment tracking across community secondary schools.',
      solution: 'Built a lightweight, mobile-optimized digital resource portal with SMS notification alerts, downloadable offline modules, and an asset tracking dashboard for donated laboratory and computing equipment.',
      result: 'Over 1,200 educators and administrators gained immediate digital access to learning modules without requesting physical printouts, saving substantial logistics costs.',
      metrics: [
        { label: 'Educators Reached', value: '1,200+' },
        { label: 'Print Costs Saved', value: '60%' },
        { label: 'Asset Visibility', value: 'Real-Time' },
      ],
      icon: GraduationCap,
    },
    {
      id: 'apex-corporate-web',
      client: 'Apex Commercial Services & Engineering',
      sector: 'Corporate Engineering Services',
      title: 'Corporate Web Presence & Lead Generation Engine',
      problem: 'The company was losing high-value regional commercial tenders because they lacked an official digital footprint and used personal Gmail addresses for formal bids.',
      solution: 'TechNix Africa deployed a fast, mobile-friendly corporate website with structured service portfolios, staff domain email setup, on-page SEO tuning, and direct WhatsApp quotation triggers.',
      result: 'Generated 40+ qualified corporate inquiries in the first 90 days after launch and improved tender compliance evaluation scores.',
      metrics: [
        { label: 'New Commercial Leads', value: '40+ in 90 Days' },
        { label: 'Tender Compliance', value: '100% Passed' },
        { label: 'Google Search Rank', value: 'Top Placement' },
      ],
      icon: Building2,
    },
  ];

  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0].id);
  const featured = projects.find(p => p.id === activeProjectId) || projects[0];

  const handleWhatsApp = (title: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      `Hello TechNix, I am interested in learning more about your work on: ${title}`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="case-studies" className="py-24 bg-[#050811] text-white relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            Case Studies & Proof
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">
            Real Systems Built for Real African Organisations
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
            Evidence of working engineering across humanitarian agencies, commercial logistics, education initiatives, and growing Malawian enterprises.
          </p>
        </div>

        {/* Master-Detail Proof Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Project Selector List (Col 1-5) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider mb-2">
              Select Verified Project Record
            </div>

            {projects.map((proj) => {
              const isSelected = proj.id === activeProjectId;
              const Icon = proj.icon;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveProjectId(proj.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#0c1527] border-sky-500/60 shadow-lg shadow-sky-950/40'
                      : 'bg-[#090e1a]/80 hover:bg-[#0c1322] border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center space-x-3.5 pr-2">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                      isSelected ? 'bg-sky-500 text-white border-sky-400' : 'bg-slate-900 text-sky-400 border-slate-800'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="text-[11px] font-mono text-slate-400 font-medium">
                        {proj.sector}
                      </div>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {proj.client}
                      </h4>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-sky-400 translate-x-1' : 'text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: In-Depth Proof Dossier (Col 6-12) */}
          <div className="lg:col-span-7 bg-[#090e1a] border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            <div className="space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-5">
                <div>
                  <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider block">
                    {featured.sector}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    {featured.client}
                  </h3>
                </div>

                <button
                  onClick={() => handleWhatsApp(featured.title)}
                  className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Ask About This System</span>
                </button>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-100 mb-3">
                  {featured.title}
                </h4>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  <div className="bg-[#050811] border border-slate-850 rounded-2xl p-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 block mb-1">
                      The Operational Challenge
                    </span>
                    <p className="text-slate-300">
                      {featured.problem}
                    </p>
                  </div>

                  <div className="bg-[#050811] border border-slate-850 rounded-2xl p-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 block mb-1">
                      What TechNix Engineered & Deployed
                    </span>
                    <p className="text-slate-300">
                      {featured.solution}
                    </p>
                  </div>

                  <div className="bg-[#050811] border border-slate-850 rounded-2xl p-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      Resulting Capability & Operational Impact
                    </span>
                    <p className="text-slate-200 font-medium">
                      {featured.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Impact Metrics */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                  Verified Outcome Metrics
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {featured.metrics.map((m, idx) => (
                    <div key={idx} className="bg-[#0c1424] border border-slate-800/90 rounded-xl p-3.5 text-center">
                      <div className="text-base sm:text-lg font-black font-mono text-sky-400">
                        {m.value}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Have a similar challenge in your organisation?
                </span>

                <button
                  onClick={() => onOpenQuote(featured.title)}
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center space-x-1.5 cursor-pointer border border-sky-400/30"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
