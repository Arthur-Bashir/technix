import React from 'react';
import { GraduationCap, MessageSquare } from 'lucide-react';
import { COURSES, COMPANY_INFO } from '../data/technixData';
import { Course } from '../types';

interface AcademyPageProps {
  onRegisterCourse: (course: Course) => void;
}

export const AcademyPage: React.FC<AcademyPageProps> = ({ onRegisterCourse }) => {
  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 bg-[#050811] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            TechNix Academy
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">Learn Technology. Build Skills. Create Opportunities.</h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Practical, hands-on digital skills training for working professionals, managers, job-seekers and corporate teams.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COURSES.map((course) => (
                <div key={course.id} className="border-t border-slate-800 pt-6 space-y-3">
                  <h3 className="text-lg font-bold text-white">{course.title}</h3>
                  <p className="text-sm text-slate-400">{course.duration} • {course.level} • {course.fee}</p>
                  <p className="text-sm text-slate-300 line-clamp-3">{course.summary}</p>
                  <button
                    onClick={() => onRegisterCourse(course)}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-lg"
                  >
                    Register Interest
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8">
            <button
              onClick={() => handleWhatsApp('Hello TechNix Academy, I would like to inquire about course enrollment.')}
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 rounded-xl flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Enquire on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
