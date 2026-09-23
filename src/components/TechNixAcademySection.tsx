import React, { useState } from 'react';
import { 
  GraduationCap, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Laptop, 
  Users, 
  Award,
  FileSpreadsheet,
  BarChart,
  Code,
  Shield,
  Sparkles,
  Briefcase
} from 'lucide-react';
import { COURSES, COMPANY_INFO } from '../data/technixData';

interface TechNixAcademySectionProps {
  onOpenQuote: (service?: string) => void;
}

export const TechNixAcademySection: React.FC<TechNixAcademySectionProps> = ({ onOpenQuote }) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(COURSES[0].id);

  const handleWhatsApp = (courseTitle?: string) => {
    const msg = courseTitle
      ? `Hello TechNix Academy, I would like to inquire about enrolling in: ${courseTitle}.`
      : 'Hello TechNix Academy, I would like to inquire about the next intake dates and available courses.';
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const selectedCourse = COURSES.find(c => c.id === selectedCourseId) || COURSES[0];

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
    <section id="technix-academy" className="py-24 bg-[#0a0f1d] text-white relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
            Workforce Training
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">
            Practical Technology Skills Taught by Engineers Building Real Systems
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
            Most technology training is either abstract theory or disconnected from African workplace realities. TechNix Academy delivers hands-on masterclasses using real commercial datasets.
          </p>
        </div>

        {/* 3 Workforce Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#0e172a] border border-slate-800/80 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-800/40 text-amber-400 flex items-center justify-center">
              <Laptop className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">
              100% Practical Labs
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Zero slideshow filler. Every session is conducted on laptops with real business spreadsheets, databases, and code.
            </p>
          </div>

          <div className="bg-[#0e172a] border border-slate-800/80 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-800/40 text-amber-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">
              Small Mentorship Cohorts
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Limited to 12 participants per intake to ensure one-on-one attention and hands-on debugging with lead instructors.
            </p>
          </div>

          <div className="bg-[#0e172a] border border-slate-800/80 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-800/40 text-amber-400 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">
              Corporate On-Site Workshops
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Tailored on-site training programs for entire finance departments, administrative teams, and project officers.
            </p>
          </div>
        </div>

        {/* Master-Detail Course Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Course List (Col 1-5) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider mb-2">
              Available Masterclasses
            </div>

            {COURSES.map((course) => {
              const isSelected = course.id === selectedCourseId;
              const Icon = getCourseIcon(course.id);
              return (
                <button
                  key={course.id}
                  onClick={() => setSelectedCourseId(course.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#141f38] border-amber-500/60 shadow-lg'
                      : 'bg-[#0e172a]/80 hover:bg-[#121c32] border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center space-x-3.5 pr-2">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                      isSelected ? 'bg-amber-500 text-white border-amber-400' : 'bg-slate-900 text-amber-400 border-slate-800'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="text-[11px] font-mono text-slate-400">
                        {course.duration} · {course.level}
                      </div>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {course.title}
                      </h4>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-amber-400 shrink-0">
                    {course.fee}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Course Dossier (Col 6-12) */}
          <div className="lg:col-span-7 bg-[#0e172a] border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <span className="text-xs font-mono font-semibold uppercase text-amber-400 tracking-wider">
                  {selectedCourse.level} · {selectedCourse.duration}
                </span>

                <span className="text-sm font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1 rounded-xl">
                  {selectedCourse.fee}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white leading-tight">
                {selectedCourse.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {selectedCourse.summary}
              </p>

              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Core Skills Learned & Practical Deliverables
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedCourse.outcomes.map((topic, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#080d19] border border-slate-800 rounded-2xl p-4 text-xs text-slate-300 space-y-1">
                <span className="font-semibold text-white">Includes: </span>
                Verified Certificate of Practical Completion, exercise files, reusable workplace templates, and 30 days instructor follow-up support.
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">
                Corporate group rates available for 5+ staff
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenQuote(`Enroll in ${selectedCourse.title}`)}
                  className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center space-x-1.5 cursor-pointer border border-amber-400/30"
                >
                  <span>Enroll in Masterclass</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleWhatsApp(selectedCourse.title)}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 transition-colors flex items-center cursor-pointer"
                  title="Inquire on WhatsApp"
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
