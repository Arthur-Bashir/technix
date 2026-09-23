import React, { useState } from 'react';
import { ArrowRight, MessageSquare, ChevronRight, HeartHandshake, Database, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface CaseStudiesSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenQuote }) => {
  const projects = [
    {
      id: 'pact-malawi',
      client: 'PACT Malawi',
      projectArea: 'IT Support',
      title: 'Ongoing Technical & Network Operations Support',
      technixContribution: 'TechNix has provided IT support services to support organisational technology operations since 2017.',
      contextPurpose: 'Ensuring consistent workstation availability, office network continuity, and responsive hardware and systems maintenance across programme activities.',
      icon: HeartHandshake,
    },
    {
      id: 'save-the-children',
      client: 'Save the Children',
      projectArea: 'Database Systems',
      title: 'Database System Development Projects',
      technixContribution: 'TechNix worked on database system development projects to organize and manage programme data.',
      contextPurpose: 'Transitioning fragmented operational and project records into structured, queryable digital systems that support administrative coordination and data integrity.',
      icon: Database,
    },
    {
      id: 'malawi-red-cross',
      client: 'Malawi Red Cross Society',
      projectArea: 'Website & Intranet',
      title: 'Website & Intranet Solutions Development',
      technixContribution: 'TechNix developed website and intranet solutions to facilitate internal and public communication.',
      contextPurpose: 'Establishing dependable digital channels for organizational visibility and internal collaboration across humanitarian initiatives and relief operations.',
      icon: Globe,
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
    <section id="case-studies" className="py-24 bg-[#050812] text-white relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-medium uppercase tracking-wider text-sky-400">
            Case Studies
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Project Evidence
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
            Factual project engagements demonstrating how TechNix Africa delivers digital systems, software engineering, and operational IT support.
          </p>
        </div>

        {/* Master-Detail Editorial Layout with Subtle Boundaries */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Project Selector List (Containerless / subtle row dividers) */}
          <div className="lg:col-span-4 divide-y divide-slate-800/60 border-y border-slate-800/60">
            {projects.map((proj) => {
              const isSelected = proj.id === activeProjectId;
              const Icon = proj.icon;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveProjectId(proj.id)}
                  className={`w-full text-left py-5 px-3 transition-colors cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-sky-500/10 text-white'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
                  }`}
                >
                  <div className="flex items-center space-x-3.5 pr-2">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
                      isSelected
                        ? 'bg-sky-500 text-white border-sky-400'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-sky-400">
                        {proj.projectArea}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-white leading-snug">
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

          {/* Right Column: Editorial Case Study Dossier */}
          <div className="lg:col-span-8 bg-[#070d1a] border border-slate-800/80 rounded-2xl p-8 sm:p-12 space-y-8">
            
            <div className="space-y-3 pb-6 border-b border-slate-800/80">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="text-sky-400 font-medium uppercase tracking-wider">
                  {activeProject.client}
                </span>
                <span className="text-slate-400">
                  {activeProject.projectArea}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {activeProject.title}
              </h3>
            </div>

            {/* Factual Dossier: CLIENT, PROJECT AREA, TECHNIX CONTRIBUTION, CONTEXT / PURPOSE */}
            <div className="space-y-6 text-sm">
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-medium">
                  TechNix Contribution
                </div>
                <p className="text-base text-slate-200 leading-relaxed font-normal">
                  {activeProject.technixContribution}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-medium">
                  Context / Purpose
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {activeProject.contextPurpose}
                </p>
              </div>
            </div>

            {/* Commercial Action */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => onOpenQuote(activeProject.title)}
                className="px-5 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center space-x-2 cursor-pointer border border-sky-400/30"
              >
                <span>Discuss Similar Engagement</span>
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
