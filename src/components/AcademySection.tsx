import React, { useState } from 'react';
import { GraduationCap, Calendar, Clock, CheckCircle2, ArrowRight, MessageSquare, Award, BookOpen } from 'lucide-react';
import { COURSES, COMPANY_INFO } from '../data/technixData';
import { Course } from '../types';

interface AcademySectionProps {
  onRegisterCourse: (course: Course) => void;
}

export const AcademySection: React.FC<AcademySectionProps> = ({ onRegisterCourse }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);

  const categories = ['All', 'Business & Office', 'Data & Analytics', 'Development', 'IT & Security'];

  const filteredCourses = selectedCategory === 'All'
    ? COURSES
    : COURSES.filter((c) => c.category === selectedCategory);

  const handleWhatsApp = (courseTitle: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      `Hello TechNix Academy, I would like to inquire about enrolling in: ${courseTitle}.`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="academy" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1 text-xs font-bold text-amber-800">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Product 6 — TechNix Academy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Learn Technology. Build Skills. Create Opportunities.
          </h2>
          <p className="text-lg text-slate-600">
            Practical, hands-on digital skills training designed for working professionals, managers, job-seekers, and corporate teams. Real projects, zero theoretical fluff.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-slate-50 border border-slate-200/90 rounded-3xl p-7 flex flex-col justify-between hover:shadow-xl hover:border-amber-400 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-full">
                    {course.category}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded">
                    {course.level}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {course.summary}
                </p>

                {/* Key Course Meta */}
                <div className="space-y-2 mb-6 text-xs text-slate-700 bg-white p-3.5 rounded-xl border border-slate-200/80">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span><strong>Duration:</strong> {course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span><strong>Cohort:</strong> {course.upcomingDate}</span>
                  </div>
                </div>

                {/* Key Outcomes */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Core Skills Covered:
                  </span>
                  {course.outcomes.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Price & Action */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-semibold block">Tuition Fee</span>
                    <span className="text-2xl font-black text-slate-900">{course.fee}</span>
                  </div>
                  <span className="text-[11px] text-slate-500">Includes Certificate</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onRegisterCourse(course)}
                    className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-amber-600 text-white text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <span>Register Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleWhatsApp(course.title)}
                    className="py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Training Custom Quote Box */}
        <div className="mt-14 p-8 rounded-3xl bg-amber-50/70 border border-amber-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Custom In-House Training for Corporate Teams & NGOs</h4>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                We provide tailored on-site or virtual training for your specific accounting, M&E, or administrative department. Packages include customized datasets and post-training support.
              </p>
            </div>
          </div>
          <button
            onClick={() => onRegisterCourse(COURSES[0])}
            className="shrink-0 px-6 py-3 bg-slate-900 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
          >
            Request Corporate Training Proposal
          </button>
        </div>
      </div>
    </section>
  );
};
