import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [name, setName] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [notes, setNotes] = useState('');
  const [preferredContact, setPreferredContact] = useState('WhatsApp');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setService(preselectedService || '');
      setSubmitted(false);
    }
  }, [isOpen, preselectedService]);

  if (!isOpen) return null;

  const buildWhatsAppMessage = () => `Hello TechNix, I would like to request a quote.

Name: ${name}
Organisation: ${organisation}
Phone / WhatsApp: ${phone}
Email: ${email || 'Not provided'}
Service: ${service}
Preferred contact: ${preferredContact}
Notes: ${notes || 'No additional notes.'}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(buildWhatsAppMessage())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(buildWhatsAppMessage())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel-elevated rounded-3xl max-w-lg w-full shadow-2xl border border-slate-700/80 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200 text-white">
        
        {/* Header */}
        <div className="p-6 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 text-[10px] font-mono text-sky-400 uppercase tracking-widest mb-0.5">
              <Terminal className="w-3 h-3" />
              <span>PROJECT SCOPING INTAKE</span>
            </div>
            <h3 className="text-xl font-black text-white">Request a Quote / Start Project</h3>
            <p className="text-xs text-slate-300">Tell us what you need and continue directly to WhatsApp.</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close quote modal"
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-900/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Request Prepared</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
                Your enquiry has been formatted for WhatsApp transmission. Send it to TechNix so our engineering team can review your requirements and respond promptly.
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg shadow-emerald-900/30"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Again</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 text-xs text-slate-400 hover:text-white font-semibold transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Chisomo Mwale"
                  className="w-full p-3 text-xs rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-sky-500 placeholder-slate-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">Business / Organisation *</label>
                  <input
                    type="text"
                    required
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                    placeholder="e.g. Prime Agro Enterprises"
                    className="w-full p-3 text-xs rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-sky-500 placeholder-slate-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+265 999 000 000"
                    className="w-full p-3 text-xs rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-sky-500 placeholder-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.mw"
                  className="w-full p-3 text-xs rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-sky-500 placeholder-slate-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">Service Required *</label>
                <input
                  type="text"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="e.g. Business website, IT support, software system"
                  className="w-full p-3 text-xs rounded-xl bg-slate-950/80 border border-slate-800 text-sky-400 font-mono font-semibold focus:outline-none focus:border-sky-500 placeholder-slate-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">Preferred Contact Method</label>
                <div className="grid grid-cols-3 gap-2">
                  {['WhatsApp', 'Phone Call', 'Email'].map((method) => (
                    <label
                      key={method}
                      className={`p-2.5 rounded-xl border text-center text-xs font-bold cursor-pointer transition-all ${
                        preferredContact === method
                          ? 'bg-sky-600 text-white border-sky-400 shadow-md shadow-sky-600/30'
                          : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:bg-slate-900'
                      }`}
                    >
                      <input
                        type="radio"
                        name="modalPreferredContact"
                        value={method}
                        checked={preferredContact === method}
                        onChange={(e) => setPreferredContact(e.target.value)}
                        className="sr-only"
                      />
                      {method}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">Brief Description / Notes (Optional)</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about your requirements, number of workstations, preferred features, or current problem..."
                  className="w-full p-3 text-xs rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-sky-500 placeholder-slate-500 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-sky-600/30 transition-all cursor-pointer flex items-center justify-center space-x-2 border border-sky-400/40"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Continue to WhatsApp Transmission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-400 flex items-center justify-center space-x-1 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Encrypted direct routing to TechNix engineering helpdesk.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
