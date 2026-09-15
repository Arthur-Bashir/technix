import React, { useState } from 'react';
import { X, GraduationCap, CheckCircle2, Clock, Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import { Course } from '../types';
import { COMPANY_INFO } from '../data/technixData';

interface CourseRegistrationModalProps {
  course: Course | null;
  onClose: () => void;
}

export const CourseRegistrationModal: React.FC<CourseRegistrationModalProps> = ({
  course,
  onClose,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [registered, setRegistered] = useState(false);

  if (!course) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  const handleWhatsAppEnrollment = () => {
    const text = `Hello TechNix Academy, I want to register for ${course.title}.
Name: ${fullName || 'Learner'}
Phone: ${phone}
Organisation: ${organisation || 'Individual'}
Course Fee: ${course.fee}`;

    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-amber-200 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-tight">TechNix Academy Registration</h3>
              <p className="text-xs text-amber-100">Practical, Job-Ready Digital Skills Training</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close registration modal"
            className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-amber-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Selected Course Summary */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-amber-900 uppercase tracking-wider">{course.category}</span>
              <span className="font-semibold text-amber-800">{course.level}</span>
            </div>
            <h4 className="text-base font-extrabold text-slate-900">{course.title}</h4>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-600 pt-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                {course.duration}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                {course.upcomingDate}
              </span>
            </div>
            <div className="pt-2 border-t border-amber-200/80 flex items-baseline justify-between">
              <span className="text-xs text-slate-600">Course Fee:</span>
              <span className="text-xl font-black text-slate-900">{course.fee}</span>
            </div>
          </div>

          {registered ? (
            <div className="text-center py-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Pre-Registration Reserved!</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thank you, <strong>{fullName}</strong>. A TechNix Academy coordinator will send the syllabus, timetable, and payment details to {phone}.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleWhatsAppEnrollment}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm Seat on WhatsApp</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Alinane Phiri"
                  className="w-full p-2.5 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+265 999 000 000"
                    className="w-full p-2.5 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="w-full p-2.5 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Organisation / Employer (Optional)</label>
                <input
                  type="text"
                  value={organisation}
                  onChange={(e) => setOrganisation(e.target.value)}
                  placeholder="Company name if corporate sponsored"
                  className="w-full p-2.5 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>Submit Enrollment Application</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500">
                Payment options available: Airtel Money, Mpamba, Bank Transfer, or Cash at office.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
