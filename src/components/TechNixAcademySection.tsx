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
import { COURSES, COMPANY_INFO } from '../data/technixData';

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

  const getCourseIcon = (id: string) => {
    switch (id) {
      case 'excel-mastery': return FileSpreadsheet;
      case 'power-bi': return BarChart;
      case 'web-dev-practical': return Code;
      case 'cybersecurity-essentials': return Shield;
      case 'ai-for-business': return Sparkles;
      default: return GraduationCap;
    }
  };

  return (
    <section id="technix-academy" className="py-24 bg-[#040814] text-white border-b border-slate-800/80 relative">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1 text-xs font-mono text-amber-400 shadow-md">
            <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold uppercase tracking-wider">Human Capital Infrastructure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            TechNix Academy: Practical <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-emerald-400 bg-clip-text text-transparent">
              Technology Workforce Training
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Technology is only as effective as the people operating it. TechNix Academy delivers rigorous, hands-on masterclasses designed to build immediate operational capability for working professionals and organisations.
          </p>
        </div>

        {/* 3 Academy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel rounded-2xl p-6 border border-slate-800/90 flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-800/40 text-amber-400 flex items-center justify-center shrink-0 shadow-inner">
              <Laptop className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">100% Practical Labs</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zero theoretical fluff. Every session involves building actual spreadsheets, data models, or code on your computer.
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-slate-800/90 flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-800/40 text-amber-400 flex items-center justify-center shrink-0 shadow-inner">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Small Cohorts & Mentorship</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Maximum 12 participants per cohort ensures every attendee receives personalized guidance from our senior engineering leads.
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-slate-800/90 flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-800/40 text-amber-400 flex items-center justify-center shrink-0 shadow-inner">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Institutional Upskilling</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Custom on-site training packages for corporate departments, finance teams, NGOs, and government agencies.
              </p>
            </div>
          </div>
        </div>

        {/* Masterclasses Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Active Curriculum
              </span>
              <h3 className="text-2xl font-bold text-white">Upcoming Practical Cohorts</h3>
            </div>
            <button
              onClick={() => handleWhatsApp()}
              className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center space-x-1 cursor-pointer"
            >
              <span>Download Full Syllabus</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((course) => {
              const Icon = getCourseIcon(course.id);
              return (
                <div
                  key={course.id}
                  className="glass-panel rounded-2xl p-6 border border-slate-800/90 hover:border-amber-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-800/40 text-amber-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-inner">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-black text-amber-400 bg-amber-950/60 border border-amber-800/40 px-2.5 py-1 rounded-md">
                        {course.fee}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                      {course.title}
                    </h4>
                    <span className="text-xs font-semibold text-sky-400 block mb-3 font-mono">
                      Duration: {course.duration}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {course.summary}
                    </p>

                    <div className="space-y-2 mb-6">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                        Core Competencies:
                      </span>
                      {course.outcomes.map((t, tIdx) => (
                        <div key={tIdx} className="flex items-start space-x-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-slate-800/80">
                    <button
                      onClick={() => onOpenQuote(`${course.title} Enrollment`)}
                      className="w-full py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-all cursor-pointer shadow-md shadow-amber-600/20 border border-amber-400/30"
                    >
                      <span>Enroll in {course.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleWhatsApp(course.title)}
                      className="w-full py-2 bg-slate-900/90 hover:bg-slate-800 text-emerald-400 border border-slate-700/80 text-xs font-semibold rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Course Coordinator</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Corporate Training Custom Banner */}
        <div className="glass-panel-elevated rounded-3xl p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block">
              ENTERPRISE & IN-HOUSE WORKSHOPS
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Need Customized Group Training for Your Organisation?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We deliver tailored on-site masterclasses in Advanced Excel, Power BI, and IT Security directly at your offices in Blantyre, Lilongwe, or Zomba.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote('Corporate In-House Academy Training')}
            className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/40 rounded-xl font-bold text-xs shrink-0 cursor-pointer shadow-lg transition-all"
          >
            Request Corporate Proposal
          </button>
        </div>

      </div>
    </section>
  );
};
