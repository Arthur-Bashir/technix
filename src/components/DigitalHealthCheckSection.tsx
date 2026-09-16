import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, MessageSquare, ShieldCheck, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface DigitalHealthCheckSectionProps {
  onOpenInteractiveCheck: () => void;
}

export const DigitalHealthCheckSection: React.FC<DigitalHealthCheckSectionProps> = ({
  onOpenInteractiveCheck,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    phone: '',
    email: '',
    concern: 'Website & Online Visibility',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const concernsList = [
    'Website & Online Visibility',
    'Business Email & Branded Domain',
    'IT Reliability, Backups & Crash Prevention',
    'Custom Software & Workflow Automation',
    'Full Digital Audit (Not Sure Where to Start)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello TechNix, I would like to request a Free Digital Business Health Check.
Name: ${formData.name || 'Not provided'}
Organisation: ${formData.organisation || 'My Organisation'}
Phone/WhatsApp: ${formData.phone || 'Not provided'}
Email: ${formData.email || 'Not provided'}
Main Concern: ${formData.concern}`;
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="health-check-section" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-500/15 border border-blue-400/30 rounded-full px-4 py-1.5 text-xs font-bold text-blue-300">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Free Diagnostic Opportunity</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Not Sure What Your Business Needs?
            </h2>

            <h3 className="text-xl sm:text-2xl font-bold text-sky-400">
              Free Digital Business Health Check
            </h3>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              TechNix can review your organisation&apos;s current digital presence, email systems, and operational setup to identify practical opportunities for improvement. No pressure, no technical confusion — just clear, actionable guidance.
            </p>

            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Quick, Practical Assessment Of:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Website status & speed</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Email professionalism</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Security basics</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Backup status</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60 sm:col-span-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Device & office tech health</span>
                </div>
              </div>
              <p className="text-xs text-emerald-400 font-semibold pt-1">
                Output: A clear 1-page summary of your critical risks and immediate quick wins.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </button>

              <button
                type="button"
                onClick={onOpenInteractiveCheck}
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                <span>Book a 15-Minute Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Lead Capture Form Column */}
          <div className="lg:col-span-6">
            <div className="bg-slate-800/90 border border-slate-700/90 rounded-3xl p-7 sm:p-9 shadow-2xl backdrop-blur-xl">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Health Check Requested</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. A TechNix specialist will review your details and contact you via phone or WhatsApp within 1 business day.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-700/80 pb-4 mb-4">
                    <h4 className="text-lg font-bold text-white">Request Your Free Assessment</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Simple, confidential, and 100% free.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Kondwani Banda"
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Organisation / Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      placeholder="e.g. Apex Haulage & Trading"
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+265 999 123 456"
                        className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Main Area of Concern
                    </label>
                    <select
                      value={formData.concern}
                      onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    >
                      {concernsList.map((item, idx) => (
                        <option key={idx} value={item} className="bg-slate-900 text-white">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base rounded-xl transition-all shadow-lg shadow-blue-900/40 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                    >
                      <span>{submitting ? 'Submitting...' : 'Request a Free Assessment'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-center text-[11px] text-slate-400 pt-1">
                    Your details are strictly confidential. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
