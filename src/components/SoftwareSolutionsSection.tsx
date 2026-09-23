import React, { useState } from 'react';
import { 
  Code2, 
  ArrowRight, 
  MessageSquare, 
  Database,
  Smartphone,
  BarChart3,
  Building2,
  GraduationCap,
  Truck,
  CheckCircle2,
  Layers,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface SoftwareSolutionsSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const SoftwareSolutionsSection: React.FC<SoftwareSolutionsSectionProps> = ({ onOpenQuote }) => {
  const [selectedSolutionIndex, setSelectedSolutionIndex] = useState<number>(0);

  const handleWhatsApp = (topic?: string) => {
    const msg = topic
      ? `Hello TechNix, I would like to discuss a custom software project: ${topic}.`
      : 'Hello TechNix, I would like to discuss a custom software solution for my business.';
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const systems = [
    {
      title: 'School & Academic Management Portals',
      sector: 'Education & Institutions',
      problem: 'Tuition fee reconciliations tracked in paper notebooks and exam marks lost across teacher laptops.',
      solution: 'Centralized web portal for student records, automated fee tracking with SMS parent alerts, and instant report card generation.',
      capabilities: ['Student enrollment & grading', 'Tuition payment tracking', 'Automated SMS alerts to parents', 'Teacher gradebook access'],
      icon: GraduationCap,
    },
    {
      title: 'Multi-Branch Inventory & Billing Systems',
      sector: 'Retail & Commercial Wholesale',
      problem: 'Undetected stock leakages between warehouses and week-long delays in branch sales reconciliations.',
      solution: 'Cloud inventory database with barcode scanning, automated low-stock reorder thresholds, and daily executive sales auditing.',
      capabilities: ['Real-time multi-branch stock levels', 'Point-of-sale receipting', 'Loss prevention audits', 'Mobile manager dashboard'],
      icon: Building2,
    },
    {
      title: 'Field Data Collection & Donor M&E',
      sector: 'NGOs & Development Agencies',
      problem: 'Enumerators collecting community health data on paper surveys requiring weeks of manual data entry.',
      solution: 'Offline-capable mobile data collection apps with GPS coordinates and automatic cloud sync into executive Power BI dashboards.',
      capabilities: ['Offline mobile survey forms', 'Automated validation checks', 'Live donor KPI dashboards', 'One-click PDF reporting'],
      icon: BarChart3,
    },
    {
      title: 'Fleet Dispatch & Digital Invoicing',
      sector: 'Logistics & Haulage',
      problem: 'Transit trucks losing signed delivery notes on haulage routes, delaying client invoicing by weeks.',
      solution: 'Driver mobile app capturing photo proof of delivery and digital client signatures, immediately releasing automated commercial invoices.',
      capabilities: ['Same-day billing trigger', 'Driver photo & signature capture', 'Route & delivery verification', 'Accounting software export'],
      icon: Truck,
    },
  ];

  const currentSystem = systems[selectedSolutionIndex];

  return (
    <section id="software-solutions" className="py-24 bg-[#080d1a] text-white relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            Custom Software & Databases
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">
            Software Built Around How Your Business Actually Operates
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
            Off-the-shelf software charges expensive dollar subscriptions and forces you into rigid foreign templates. We engineer custom web systems and databases designed around your exact workflows.
          </p>
        </div>

        {/* SYSTEMS / DATA RELATIONSHIP VISUAL */}
        <div className="mb-16 bg-[#050811] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              The Connected Systems Architecture
            </span>
            <h3 className="text-2xl font-black text-white">
              From Field Data to Executive Decision
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="bg-[#090e1a] border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono font-bold text-sky-400 uppercase">
                Step 1 · Input Layer
              </div>
              <h4 className="text-base font-bold text-white">
                Mobile App & Staff Portal
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Field staff, teachers, drivers, or branch cashiers enter data on phones or laptops, even without internet access.
              </p>
            </div>

            <div className="bg-[#090e1a] border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase">
                Step 2 · Engine Layer
              </div>
              <h4 className="text-base font-bold text-white">
                Automated Cloud Database
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Enforces business rules, calculates totals, checks inventory levels, and secures confidential records with encrypted backups.
              </p>
            </div>

            <div className="bg-[#090e1a] border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono font-bold text-sky-400 uppercase">
                Step 3 · Decision Layer
              </div>
              <h4 className="text-base font-bold text-white">
                Live Executive Dashboard
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Directors and board members view real-time KPI metrics, revenue, and donor indicators with automated PDF exports.
              </p>
            </div>
          </div>
        </div>

        {/* INTERACTIVE SOLUTION ARTIFACTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Solution Selector (Col 1-5) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider mb-2">
              Common Custom Deployments
            </div>

            {systems.map((sys, idx) => {
              const isSelected = idx === selectedSolutionIndex;
              const Icon = sys.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedSolutionIndex(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#0c1527] border-sky-500/70 shadow-lg'
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
                      <div className="text-[11px] font-mono text-slate-400">
                        {sys.sector}
                      </div>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {sys.title}
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

          {/* Solution Details (Col 6-12) */}
          <div className="lg:col-span-7 bg-[#090e1a] border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl">
            <div className="space-y-4">
              <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider">
                {currentSystem.sector}
              </span>

              <h3 className="text-2xl font-black text-white leading-tight">
                {currentSystem.title}
              </h3>

              <div className="space-y-3 pt-2">
                <div className="bg-[#050811] border border-slate-850 rounded-2xl p-4">
                  <div className="text-xs font-mono font-bold text-rose-400 uppercase mb-1">
                    The Operational Problem
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentSystem.problem}
                  </p>
                </div>

                <div className="bg-[#050811] border border-slate-850 rounded-2xl p-4">
                  <div className="text-xs font-mono font-bold text-emerald-400 uppercase mb-1">
                    How We Solve It
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentSystem.solution}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Delivered Capabilities
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentSystem.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">
                Milestone pricing based on scoped workflows
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenQuote(currentSystem.title)}
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center space-x-1.5 cursor-pointer border border-sky-400/30"
                >
                  <span>Scope This System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleWhatsApp(currentSystem.title)}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 transition-colors flex items-center cursor-pointer"
                  title="Discuss on WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
