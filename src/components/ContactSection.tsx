import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    phone: '',
    email: '',
    service: initialService || 'Business Website',
    preferredContact: 'WhatsApp',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const servicesList = [
    'Business Starter Website (MK 380,000)',
    'Business Pro Website (MK 790,000)',
    'Business Premium / Custom Web App',
    'Professional Business Email Setup',
    'TechNix Care Starter IT Plan',
    'TechNix Care Business IT Plan',
    'TechNix Care Professional IT Plan',
    'Urgent IT Rescue / Breakdown Assistance',
    'Custom Software / School / NGO System',
    'TechNix Academy Course Registration',
    'Digital Transformation Assessment',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate instantaneous dispatch
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello TechNix, my name is ${formData.name || 'a prospective client'} from ${
      formData.organisation || 'my business'
    }. I am interested in: ${formData.service}. ${formData.message ? `Details: ${formData.message}` : ''}`;
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-1 text-xs font-bold text-blue-300">
            <span>Direct Commercial Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Talk to TechNix Africa
          </h2>
          <p className="text-lg text-slate-300">
            Ready to start a project, upgrade your business email, fix an urgent IT issue, or train your team? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Phone, WhatsApp & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Communication Lines</h3>

              <div className="space-y-4 text-sm">
                {/* Phone Primary */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Direct Phone Call</span>
                    <a
                      href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s/g, '')}`}
                      className="text-base font-bold text-white hover:text-blue-300 transition-colors"
                    >
                      {COMPANY_INFO.phonePrimary}
                    </a>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Alt: {COMPANY_INFO.phoneSecondary}
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Official WhatsApp Line</span>
                    <button
                      onClick={handleWhatsAppDirect}
                      className="text-base font-bold text-emerald-400 hover:text-emerald-300 transition-colors text-left cursor-pointer"
                    >
                      +265 999 824 110 (Click to Chat)
                    </button>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Fastest response during business hours
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Email Inquiries</span>
                    <a
                      href={`mailto:${COMPANY_INFO.emailInfo}`}
                      className="text-base font-bold text-white hover:text-blue-300 transition-colors"
                    >
                      {COMPANY_INFO.emailInfo}
                    </a>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Support: {COMPANY_INFO.emailSupport}
                    </span>
                  </div>
                </div>

                {/* Office locations */}
                <div className="flex items-start space-x-3.5 pt-2 border-t border-slate-700/80">
                  <div className="w-10 h-10 rounded-xl bg-slate-700 text-slate-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Physical Presence in Malawi</span>
                    <p className="text-xs text-slate-200 font-medium">
                      <strong>Blantyre:</strong> {COMPANY_INFO.address}
                    </p>
                    <p className="text-xs text-slate-200 font-medium mt-1">
                      <strong>Lilongwe:</strong> {COMPANY_INFO.secondaryOffice}
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-700 text-slate-300 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Working Hours</span>
                    <p className="text-xs text-slate-200">
                      {COMPANY_INFO.operatingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quote & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. A TechNix Africa team member will review your request regarding <strong>{formData.service}</strong> and get back to you shortly via {formData.preferredContact}.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up: Continue on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 text-slate-600 hover:text-slate-900 font-semibold text-xs rounded-xl"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">Request a Quote or Consultation</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      No technical paperwork. Tell us what your business or organisation needs.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Kondwani Banda"
                        className="w-full p-3 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Business / Organisation *</label>
                      <input
                        type="text"
                        required
                        value={formData.organisation}
                        onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                        placeholder="e.g. Horizon Logistics Ltd"
                        className="w-full p-3 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+265 999 000 000"
                        className="w-full p-3 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full p-3 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Service Required *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full p-3 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 bg-white"
                    >
                      {servicesList.map((srv, idx) => (
                        <option key={idx} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Preferred Contact Method</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['WhatsApp', 'Phone Call', 'Email'].map((method) => (
                        <label
                          key={method}
                          className={`p-2.5 rounded-xl border text-center text-xs font-bold cursor-pointer transition-all ${
                            formData.preferredContact === method
                              ? 'bg-blue-50 border-blue-600 text-blue-700'
                              : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method}
                            checked={formData.preferredContact === method}
                            onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                            className="sr-only"
                          />
                          {method}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Project Notes / Problem Description</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you want to achieve or what has stopped working in your office..."
                      className="w-full p-3 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-blue-700/20 transition-all cursor-pointer flex items-center justify-center space-x-2"
                    >
                      {submitting ? (
                        <span>Processing your request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Request to TechNix Team</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
