import React, { useState } from 'react';
import { Briefcase, ArrowRight, MessageSquare, CheckCircle, ChevronRight, Layers, ExternalLink } from 'lucide-react';
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
    <section id="case-studies" className="py-24 bg-slate-50 border-b border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Demonstrated Capability
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What We&apos;ve Built
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Real problems solved with practical, dependable technology. Every project is designed for measurable operational impact.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid: Problem -> Solution -> Result */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 px-2.5 py-1 rounded-md">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {project.client}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {project.title}
                </h3>

                {/* Problem -> Solution -> Result Flow */}
                <div className="space-y-4 mb-6 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-100">
                    <span className="font-bold text-red-900 block mb-1 uppercase text-[10px] tracking-wider">
                      Problem:
                    </span>
                    <p className="text-slate-700 leading-relaxed">{project.problem}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100">
                    <span className="font-bold text-blue-900 block mb-1 uppercase text-[10px] tracking-wider">
                      Solution:
                    </span>
                    <p className="text-slate-700 leading-relaxed">{project.solution}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <span className="font-bold text-emerald-900 block mb-1 uppercase text-[10px] tracking-wider">
                      Result:
                    </span>
                    <p className="text-slate-800 font-medium leading-relaxed">{project.result}</p>
                  </div>
                </div>

                {/* Impact highlights */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 mb-6">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">
                    Key Impact
                  </span>
                  <p className="text-xs font-bold text-slate-900">{project.impact}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onOpenQuote(project.title)}
                  className="flex-1 py-2.5 px-4 bg-slate-900 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Build Similar Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleWhatsApp(project.title)}
                  className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors cursor-pointer shrink-0"
                  title="Discuss on WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenQuote()}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-xl border border-slate-300 shadow-sm transition-all cursor-pointer"
          >
            <span>View Our Projects &amp; Get a Proposal</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
};
