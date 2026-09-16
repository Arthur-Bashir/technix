import React from 'react';
import { 
  GraduationCap, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Users, 
  Laptop, 
  Sparkles, 
  Code, 
  FileSpreadsheet, 
  Wrench, 
  Calendar,
  Award,
  Shield,
  BarChart,
  Globe
} from 'lucide-react';
import { ACADEMY_CATEGORIES, COMPANY_INFO } from '../data/technixData';

interface TechNixAcademySectionProps {
  onOpenQuote: (service?: string) => void;
}

export const TechNixAcademySection: React.FC<TechNixAcademySectionProps> = ({ onOpenQuote }) => {
  const handleWhatsApp = (courseTitle?: string) => {
    const msg = courseTitle
      ? `Hello TechNix Academy, I would like to inquire about enrolling in: ${courseTitle}.`
      : 'Hello TechNix Academy, I would like to inquire about the next intake dates and available courses.';
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'excel': return FileSpreadsheet;
      case 'power-bi': return BarChart;
      case 'web-development': return Code;
      case 'cybersecurity': return Shield;
      case 'networking': return Wrench;
      case 'digital-marketing': return Globe;
      default: return GraduationCap;
    }
  };

  const academyHighlights = [
    { title: 'Practical Hands-on Projects', desc: 'Build actual functional websites, spreadsheets, and programs, not just theory on paper.', icon: Laptop },
    { title: 'Small Cohorts & Mentorship', desc: 'Direct guidance from practicing software developers and network engineers.', icon: Users },
    { title: 'Modern In-Demand Tools', desc: 'Learn current industry tools used by technology firms across Africa and globally.', icon: Sparkles },
    { title: 'Clear Structured Milestones', desc: 'Step-by-step modular curricula with verifiable skills outcomes and certificates.', icon: Award },
  ];

  return (
    <section id="technix-academy" className="py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-300 rounded-full px-4 py-1 text-xs font-bold text-amber-900">
            <GraduationCap className="w-3.5 h-3.5 text-amber-800" />
            <span>Product 7 — TechNix Academy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Practical Technology Skills for the Real World
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Hands-on, instructor-led training in web development, IT support skills, and digital productivity tools. Designed specifically for young professionals, students, and organizations upskilling their teams.
          </p>

          {/* Target Audience Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="text-xs font-semibold text-slate-500 mr-1">Designed for:</span>
            <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-full shadow-2xs">
              Young Professionals
            </span>
            <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-full shadow-2xs">
              Students & Graduates
            </span>
            <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-full shadow-2xs">
              Organisations Training Their Teams
            </span>
          </div>

          {/* Top CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#academy-courses"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenQuote('TechNix Academy Training Inquiry')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs rounded-xl transition-colors cursor-pointer shadow-2xs"
            >
              <span>Inquire About Training</span>
            </button>

            <button
              onClick={() => handleWhatsApp()}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp TechNix</span>
            </button>
          </div>
        </div>

        {/* 4 Pillars of practical education */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {academyHighlights.map((hl, idx) => {
            const Icon = hl.icon;
            return (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{hl.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{hl.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Course Categories Grid */}
        <div id="academy-courses" className="mb-14 scroll-mt-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Available Learning Pathways</h3>
              <p className="text-xs text-slate-500">Curated for absolute beginners, aspiring developers, and office teams.</p>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <Calendar className="w-3.5 h-3.5" />
              <span>Next Cohort Registration Now Open</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACADEMY_CATEGORIES.map((cat) => {
              const Icon = getCategoryIcon(cat.id);
              return (
                <div
                  key={cat.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 text-amber-700 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        {cat.count}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mb-1">{cat.name}</h4>
                    <p className="text-xs text-slate-600 mb-6 leading-relaxed">{cat.focus}</p>

                    <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-100/70 mb-4 flex items-start space-x-2 text-xs text-amber-950">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                      <span><strong>Key Focus:</strong> Practical real-world workplace application & certified outcomes.</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <button
                      onClick={() => onOpenQuote(`TechNix Academy — ${cat.name}`)}
                      className="w-full py-2.5 bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                    >
                      <span>Join the Next Intake</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleWhatsApp(cat.name)}
                      className="w-full py-2 bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 text-xs font-semibold rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Inquire on WhatsApp</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Corporate & Institutional Training Banner */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-amber-900 to-slate-900 text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Corporate & NGO Digital Upskilling
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Need Tailored Digital Training for Your Entire Office Staff?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              We provide custom on-site group workshops in Excel data handling, cybersecurity hygiene, remote collaboration, and digital tools tailored to your team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onOpenQuote('Corporate Staff IT Training')}
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <span>Request Group Training</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleWhatsApp('Corporate Group Training')}
              className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
