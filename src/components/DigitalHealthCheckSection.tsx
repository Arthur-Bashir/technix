import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, MessageSquare, ShieldCheck, Send, Activity, Terminal } from 'lucide-react';
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
    <section id="health-check-section" className="py-24 bg-[#040814] text-white relative border-b border-slate-800/80">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sky-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1.5 text-xs font-mono text-sky-400 shadow-md">
              <Activity className="w-3.5 h-3.5" />
              <span>Module 08 // Comprehensive Digital Health Check</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Where Is Your Technology <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-sky-400 via-blue-200 to-emerald-400 bg-clip-text text-transparent">
                Costing You Money or Customers?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Most organisations don&apos;t realize how much revenue or credibility they lose every month to slow websites, personal Gmail addresses, unbacked data, and manual paper workflows.
            </p>

            <div className="space-y-3.5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                Free Technical Diagnostic Includes:
              </span>
              {[
                'Domain & DNS reputation health verification',
                'Mobile speed & broadband performance analysis',
                'Data backup & disaster vulnerability review',
                'Actionable 1-page roadmap with zero technical jargon',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenInteractiveCheck}
                className="py-3.5 px-6 bg-slate-900 hover:bg-slate-800 text-sky-300 border border-sky-500/40 font-bold text-xs rounded-xl shadow-lg transition-all cursor-pointer flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Launch Interactive 2-Minute Self-Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-6">
            <div className="glass-panel-elevated rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Diagnostic Request Received</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    An engineer will review your organisation&apos;s digital posture and reach out via phone or WhatsApp within 24 hours with your preliminary report.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-sky-400 hover:underline pt-2 font-mono"
                  >
                    Submit another audit request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">Request Free Diagnostic</h3>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                      NO OBLIGATION
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono text-slate-400 block mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Kondwani Phiri"
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-slate-400 block mb-1">Company / Organisation</label>
                      <input
                        type="text"
                        required
                        value={formData.organisation}
                        onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                        placeholder="e.g. Apex Holdings"
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono text-slate-400 block mb-1">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+265 888 ..."
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-slate-400 block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="director@company.mw"
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Primary Area of Concern</label>
                    <select
                      value={formData.concern}
                      onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-sky-500 transition-colors"
                    >
                      {concernsList.map((c, idx) => (
                        <option key={idx} value={c} className="bg-slate-900 text-white">
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-2 space-y-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-sky-600/20 transition-all cursor-pointer flex items-center justify-center space-x-2 border border-sky-400/40"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{submitting ? 'Transmitting Request...' : 'Submit Diagnostic Request'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Send Request via WhatsApp</span>
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
