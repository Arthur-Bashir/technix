import React, { useState } from 'react';
import { ArrowRight, MessageSquare, ChevronRight, Layers, Stethoscope, Truck, GraduationCap } from 'lucide-react';
import { COMPANY_INFO, CASE_STUDIES } from '../data/technixData';

interface CaseStudiesSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenQuote }) => {
  const projects = [
    {
      id: 'pact-data-system',
      client: 'PACT / Civil Society Partner Initiative',
      area: 'Field Reporting & Programme Operations',
      title: 'Offline Field Data Collection & Centralized Reporting System',
      context: 'Field officers collecting community health and development indicators on paper and disparate spreadsheets faced lengthy aggregation cycles and frequent transcription errors during quarterly donor reporting.',
      whatTechnixDid: 'TechNix Africa designed and deployed an offline-first mobile data collection tool linked to a centralized reporting dashboard with automated synchronization and data validation checks.',
      whyItMattered: 'Replaced manual paper tallying with structured digital submissions, giving programme directors consistent visibility over field indicators without administrative backlogs.',
      techFocus: 'Offline data architecture, automated validation, and executive dashboard visualization.',
      icon: Layers,
    },
    {
      id: 'red-cross-infrastructure',
      client: 'Malawi Red Cross Society Collaboration',
      area: 'Disaster Relief & Emergency Operations',
      title: 'District Network Infrastructure & Emergency Communication',
      context: 'Frequent power disruptions and unstable local connectivity challenged district coordination teams during critical seasonal weather events, risking communication cutoffs and record vulnerabilities.',
      whatTechnixDid: 'TechNix Africa deployed redundant networking, power conditioning stabilization, localized backup synchronization, and standardized organizational email accounts.',
      whyItMattered: 'Established dependable district communication channels and protected operational records across field operations during severe seasonal weather disruptions.',
      techFocus: 'Network redundancy, power stabilization, and local-to-cloud data backup.',
      icon: Stethoscope,
    },
    {
      id: 'save-children-partner',
      client: 'Education & Child Protection Partner Programs',
      area: 'Educational Resource Distribution',
      title: 'Digital Learning Resource Portal & School Asset Tracker',
      context: 'Partner school headteachers and facilitators lacked a centralized, accessible repository for curriculum guides, training manuals, and equipment tracking across community secondary schools.',
      whatTechnixDid: 'Developed a low-bandwidth digital resource portal with structured document distribution, mobile accessibility, and equipment inventory tracking.',
      whyItMattered: 'Enabled educators and administrators across participating schools to access curriculum modules directly on mobile devices without waiting for printed physical materials.',
      techFocus: 'Low-bandwidth portal engineering, mobile access, and asset registry.',
      icon: GraduationCap,
    },
    {
      id: 'commercial-logistics',
      client: 'Trans-Central Commercial Logistics & Distribution',
      area: 'Commercial Fleet & Haulage Operations',
      title: 'Fleet Dispatch & Digital Proof-of-Delivery Workflow',
      context: 'Commercial fleet operations suffered administrative delays, misplaced paper delivery notes, and delayed invoicing across transit corridors between Blantyre, Lilongwe, and Mzuzu.',
      whatTechnixDid: 'TechNix Africa developed a dispatch and proof-of-delivery workflow with mobile photo uploads, digital signature capture, and automated invoice notifications.',
      whyItMattered: 'Replaced physical paperwork with digital delivery confirmation, accelerating billing reconciliation and eliminating lost delivery documentation.',
      techFocus: 'Dispatch workflow web portal, mobile driver companion, and accounting export.',
      icon: Truck,
    },
  ];

  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0].id);
  const activeProject = projects.find(p => p.id === activeProjectId) || projects[0];

  const handleWhatsApp = (projectTitle: string) => {
    const text = `Hello TechNix, I saw your work on "${projectTitle}". I would like to discuss a similar project for our organisation.`;
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="case-studies" className="py-24 bg-[#050811] text-white relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            Project Evidence & Portfolio
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">
            Real Systems Built for Practical African Operations
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
            Explore factual examples of how TechNix Africa designs, implements, and supports digital systems for development initiatives, emergency relief programmes, and commercial enterprises.
          </p>
        </div>

        {/* Master-Detail Editorial Portfolio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Project Selector List */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider mb-3">
              Selected Engagements
            </div>

            {projects.map((proj) => {
              const isSelected = proj.id === activeProjectId;
              const Icon = proj.icon;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveProjectId(proj.id)}
                  className={`w-full text-left p-4.5 rounded-2xl transition-all cursor-pointer flex items-center justify-between border ${
                    isSelected
                      ? 'bg-[#0a1224] border-sky-500/60 text-white shadow-lg'
                      : 'bg-transparent hover:bg-[#080e1c] border-slate-800/60 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center space-x-3.5 pr-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                      isSelected
                        ? 'bg-sky-500 text-white border-sky-400'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="text-xs font-mono text-sky-400/80 font-medium">
                        {proj.area}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white leading-snug">
                        {proj.client}
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-sky-400 translate-x-1' : 'text-slate-600'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Editorial Project Dossier */}
          <div className="lg:col-span-8 bg-[#070c18] border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl">
            
            <div className="space-y-3 border-b border-slate-800/80 pb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="text-sky-400 font-semibold uppercase tracking-wider">
                  {activeProject.client}
                </span>
                <span className="text-slate-400">
                  {activeProject.area}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {activeProject.title}
              </h3>
            </div>

            {/* Structured Evidence: Problem -> What TechNix Did -> Why It Mattered */}
            <div className="space-y-6 text-sm text-slate-300">
              
              <div className="space-y-1.5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  The Operational Context
                </div>
                <p className="leading-relaxed font-normal text-slate-300">
                  {activeProject.context}
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                  What TechNix Delivered
                </div>
                <p className="leading-relaxed font-normal text-slate-200">
                  {activeProject.whatTechnixDid}
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  Why It Mattered to the Organisation
                </div>
                <p className="leading-relaxed font-normal text-slate-300">
                  {activeProject.whyItMattered}
                </p>
              </div>

              <div className="pt-2 text-xs font-mono text-slate-400 border-t border-slate-800/60">
                <span className="text-slate-500 uppercase">Core Technology: </span>
                <span>{activeProject.techFocus}</span>
              </div>

            </div>

            {/* Direct Commercial Action */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => onOpenQuote(activeProject.title)}
                className="px-5 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center space-x-2 cursor-pointer border border-sky-400/30"
              >
                <span>Discuss Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleWhatsApp(activeProject.title)}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 transition-colors flex items-center space-x-2 text-xs font-semibold cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Discuss on WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
