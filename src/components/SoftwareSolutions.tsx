import React, { useState } from 'react';
import { 
  Code2, 
  BarChart3, 
  Smartphone, 
  Layers, 
  Check, 
  ArrowRight, 
  MessageSquare, 
  Building2, 
  School, 
  HeartHandshake, 
  Stethoscope, 
  Briefcase 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface SoftwareSolutionsProps {
  onOpenQuote: (service?: string) => void;
}

export const SoftwareSolutions: React.FC<SoftwareSolutionsProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'business' | 'ngo' | 'education'>('all');

  const systems = [
    {
      title: 'School Management & Student Portals',
      target: 'Schools, Colleges & Academies',
      icon: School,
      category: 'education',
      features: [
        'Automated terminal report card generation & grading',
        'Tuition fee tracking, receipting & debt alerts',
        'Direct SMS / WhatsApp broadcasts to parents',
        'Student attendance & timetable scheduling',
      ],
      deliverable: 'Web Portal + Parent SMS + Admin Console',
    },
    {
      title: 'NGO M&E & Field Data Systems',
      target: 'NGOs, Donors & Development Projects',
      icon: HeartHandshake,
      category: 'ngo',
      features: [
        'Offline mobile surveys syncing automatically in rural areas',
        'Live Power BI & web KPI donor dashboards',
        'Beneficiary registration & identity tracking',
        'One-click quarterly PDF/Excel donor reporting',
      ],
      deliverable: 'PWA Mobile App + Cloud Database + Live Dashboard',
    },
    {
      title: 'Inventory, Dispatch & POS Software',
      target: 'Wholesalers, Distributors & Retailers',
      icon: Building2,
      category: 'business',
      features: [
        'Real-time multi-branch stock levels & theft prevention',
        'Barcode scanning & instant thermal receipt generation',
        'Driver dispatch tracking & digital signature on delivery',
        'Daily gross profit & cashier reconciliation reports',
      ],
      deliverable: 'Desktop / Tablet POS + Central Cloud Server',
    },
    {
      title: 'Clinic & Patient Records Management',
      target: 'Private Clinics, Dental & Diagnostic Centers',
      icon: Stethoscope,
      category: 'business',
      features: [
        'Paperless patient medical history & visit records',
        'Doctor appointment scheduling & SMS reminders',
        'Dispensary pharmacy stock & expiry tracking',
        'Medical insurance billing & private invoice tracking',
      ],
      deliverable: 'HIPAA/Confidential Cloud System + Local Backup',
    },
    {
      title: 'Membership & Cooperative Portals',
      target: 'SACCOs, Associations & Professional Bodies',
      icon: Briefcase,
      category: 'business',
      features: [
        'Digital member directory with verification badges',
        'Subscription dues, contributions & pledge accounting',
        'Automated AGM voting & event registrations',
        'Member self-service statement downloads',
      ],
      deliverable: 'Member Mobile Web App + Admin Portal',
    },
    {
      title: 'Executive Dashboards & Data Systems',
      target: 'Boards, CEOs & Operations Heads',
      icon: BarChart3,
      category: 'business',
      features: [
        'Consolidate multiple messy Excel sheets into one live view',
        'Visual interactive graphs, targets vs actuals, and burn rates',
        'Role-based access security for executive and operational staff',
        'Automated weekly email summaries sent to leadership',
      ],
      deliverable: 'Interactive Web Dashboard + Automated PDF Digest',
    },
  ];

  const filteredSystems = activeTab === 'all' 
    ? systems 
    : systems.filter((s) => s.category === activeTab || (activeTab === 'business' && s.category === 'business'));

  const handleWhatsApp = (systemTitle: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      `Hello TechNix, I would like to discuss building software for: ${systemTitle}.`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="software-solutions" className="py-24 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-1 text-xs font-bold text-purple-800">
            <Code2 className="w-3.5 h-3.5" />
            <span>Product 5 — Custom Software Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Replace Manual Work With Smart Systems
          </h2>
          <p className="text-lg text-slate-600">
            Ditch paper logs, duplicate data entry, and fragile spreadsheets. We engineer robust, intuitive software systems tailored to how your African organisation actually operates.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Software Systems
          </button>
          <button
            onClick={() => setActiveTab('business')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'business'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Commercial & Retail Systems
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'education'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Schools & Education Portals
          </button>
          <button
            onClick={() => setActiveTab('ngo')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'ngo'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            NGOs, Donors & Development
          </button>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSystems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-purple-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {item.target}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>

                  <div className="space-y-2.5 mb-6">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-600">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Deliverable: </span>
                    {item.deliverable}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenQuote(item.title)}
                      className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-purple-700 text-white text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                    >
                      <span>Discuss Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleWhatsApp(item.title)}
                      className="py-2.5 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
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

        {/* Bottom Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Have a unique business process or custom requirement?</h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              We consult directly with your team, map your actual workflow, and engineer software that works for your staff without requiring a Computer Science degree to operate.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote('Custom Software Architecture')}
            className="shrink-0 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/30 flex items-center space-x-2 transition-all cursor-pointer"
          >
            <span>Book Free Tech Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
