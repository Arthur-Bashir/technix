import React, { useState } from 'react';
import { Briefcase, ArrowRight, MessageSquare, CheckCircle, ChevronRight, Layers, ExternalLink, Activity, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface CaseStudiesSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenQuote }) => {
  const categories = [
    'All Projects',
    'Dashboards & Data Systems',
    'Infrastructure',
    'Business Software',
    'Websites',
    'Mobile Applications',
    'Digital Transformation',
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');

  const projects = [
    {
      id: 'pact-data-system',
      code: 'DEP-01',
      client: 'PACT / Civil Society Partner Initiative',
      category: 'Dashboards & Data Systems',
      title: 'Field Reporting & Grant Performance Monitoring System',
      problem: 'Field officers across 8 districts were collecting community empowerment and health data on paper and disparate spreadsheets. Consolidating quarterly reports for donor submissions took 3 to 4 weeks of manual aggregation, with frequent transcription errors.',
      solution: 'TechNix Africa engineered an offline-capable mobile data collection system combined with a centralized cloud reporting dashboard. Field data synced automatically when connectivity was restored, with instant automated validation checks.',
      result: 'Reduced reporting preparation time from 24 days to under 48 hours. Eliminated 95% of data transcription discrepancies, giving project directors live visibility over community indicators.',
      impact: '12x Faster Reporting • 8 Districts Reached • 95% Error Reduction',
    },
    {
      id: 'red-cross-infrastructure',
      code: 'DEP-02',
      client: 'Malawi Red Cross Society Collaboration',
      category: 'Infrastructure',
      title: 'Emergency Communication & High-Availability IT Backbone',
      problem: 'Frequent power outages and unstable local connectivity were cutting off district coordination teams during critical disaster response windows. Local workstation failures regularly threatened volunteer registries and inventory records.',
      solution: 'TechNix Africa overhauled the district IT infrastructure: implemented dual-WAN failover routers, stabilized power conditioning, deployed encrypted NAS cloud backups, and configured automated business email systems.',
      result: 'Maintained 99.8% communication uptime during heavy seasonal weather events. Safeguarded all volunteer records and disaster logistics inventories with zero data loss.',
      impact: '99.8% Disaster Uptime • 100% Data Protection • Same-Day Dispatch',
    },
    {
      id: 'commercial-logistics',
      code: 'DEP-03',
      client: 'Trans-Central Commercial Logistics & Distribution',
      category: 'Business Software',
      title: 'Fleet Dispatch & Digital Invoicing Management System',
      problem: 'A fleet operator managing over 28 transit trucks suffered revenue leakage, delayed client billing, and lost paper delivery notes along major transit corridors.',
      solution: 'TechNix Africa engineered a customized dispatch and proof-of-delivery application with driver mobile photo uploads, digital signature capture, and automated invoice dispatch upon delivery.',
      result: 'Shortened average invoicing turnaround from 14 days to the exact same day of delivery. Cash flow collection accelerated by 35% in the first quarter of deployment.',
      impact: 'Same-Day Invoicing • +35% Cash Flow Speed • 100% Paper Elimination',
    },
    {
      id: 'save-children-partner',
      code: 'DEP-04',
      client: 'Education & Child Protection Partner Programs',
      category: 'Mobile Applications',
      title: 'Interactive Learning Resource Portal & School Asset Tracker',
      problem: 'Partner school headteachers and facilitators lacked a centralized, accessible repository for curriculum guides, training manuals, and equipment tracking across community secondary schools.',
      solution: 'Built a lightweight, mobile-optimized digital resource portal with SMS notification alerts, downloadable offline modules, and an asset tracking dashboard for donated laboratory and computing equipment.',
      result: 'Over 1,200 educators and administrators gained immediate digital access to learning modules without requesting physical printouts, saving substantial logistics costs.',
      impact: '1,200+ Educators Reached • 60% Print Cost Reduction • Real-Time Tracking',
    },
    {
      id: 'apex-corporate-web',
      code: 'DEP-05',
      client: 'Apex Commercial Services & Engineering',
      category: 'Websites',
      title: 'Corporate Web Presence & Lead Generation Engine',
      problem: 'The company was losing high-value regional commercial tenders because they lacked an official digital footprint and used personal Gmail addresses for formal bids.',
      solution: 'TechNix Africa deployed a fast, mobile-friendly corporate website with structured service portfolios, staff domain email setup, on-page SEO tuning, and direct WhatsApp quotation triggers.',
      result: 'Generated 40+ qualified corporate inquiries in the first 90 days after launch and improved tender compliance evaluation scores.',
      impact: '40+ Inbound Commercial Leads • 100% Tender Compliance • Top Google Rank',
    },
    {
      id: 'digital-transform-sme',
      code: 'DEP-06',
      client: 'Multi-Branch Retail & Agro-Supply Consortium',
      category: 'Digital Transformation',
      title: 'Paperless Multi-Branch Inventory & Centralized Accounting Sync',
      problem: 'Branches were managing stock levels in physical ledger books, resulting in undetected stock discrepancies and week-long delays in branch stock reconciliations.',
      solution: 'Designed and deployed a centralized cloud inventory synchronization system with barcode scanning, automated reorder alerts, and daily sales auditing.',
      result: 'Reduced stock reconciliation time to zero minutes (instantaneous) and eliminated unrecorded inventory losses across all retail outlets.',
      impact: 'Zero Stock Discrepancies • Instant Reconciliation • Full Executive Control',
    },
  ];

  const filteredProjects = selectedCategory === 'All Projects'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const [activeProject, setActiveProject] = useState(projects[0]);

  const handleWhatsApp = (projectTitle: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      `Hello TechNix, I am reviewing your project "${projectTitle}". We have a similar requirement for our organisation.`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="case-studies" className="py-24 bg-[#040814] text-white relative border-b border-slate-800/80">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-sky-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1 text-xs font-mono text-sky-400 shadow-md">
            <Briefcase className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">Demonstrated Engineering Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Field-Tested Deployments Across <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-400 via-blue-200 to-emerald-400 bg-clip-text text-transparent">
              Enterprises, NGOs & Institutions
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Real institutional problems solved with practical, dependable technology. Every system is engineered for measurable operational outcomes in the African operating context.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white border-sky-400 shadow-lg shadow-sky-600/30'
                  : 'bg-slate-900/80 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Project Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {filteredProjects.map((p) => {
              const isSelected = activeProject.id === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => setActiveProject(p)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                    isSelected
                      ? 'glass-panel-elevated border-sky-500/80 shadow-lg shadow-sky-500/10'
                      : 'glass-panel border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 bg-slate-900/90 border border-slate-800 px-2 py-0.5 rounded">
                      {p.code} • {p.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 font-semibold">
                      {p.client.split('/')[0]}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5 leading-snug">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {p.problem}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Case Study Deep Dive */}
          <div className="lg:col-span-7">
            <div className="glass-panel-elevated rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-sky-400 block mb-1">
                    PROJECT ARCHITECTURE DEEP DIVE // {activeProject.code}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {activeProject.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-300 mt-1">
                    Client: <span className="text-sky-300 font-mono">{activeProject.client}</span>
                  </div>
                </div>
              </div>

              {/* The Challenge */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span>The Operational Bottleneck</span>
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                  {activeProject.problem}
                </p>
              </div>

              {/* The TechNix Solution */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  <span>The TechNix Engineering Solution</span>
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                  {activeProject.solution}
                </p>
              </div>

              {/* Measurable Impact */}
              <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-800/50 space-y-2">
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold font-mono">
                  <Activity className="w-4 h-4 shrink-0" />
                  <span>VERIFIED MEASURABLE OUTCOME:</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">
                  {activeProject.impact}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeProject.result}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenQuote(`${activeProject.title} (Case Study Inquiry)`)}
                  className="flex-1 py-3 px-5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-sky-600/20 transition-all cursor-pointer flex items-center justify-center space-x-2 border border-sky-400/40"
                >
                  <span>Build a Similar System for Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleWhatsApp(activeProject.title)}
                  className="py-3 px-4 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discuss Case Study</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
