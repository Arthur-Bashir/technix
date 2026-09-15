import React, { useState } from 'react';
import { X, AlertTriangle, PhoneCall, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface ITRescueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ITRescueModal: React.FC<ITRescueModalProps> = ({ isOpen, onClose }) => {
  const [issueType, setIssueType] = useState('Computer Crash / Won’t Boot');
  const [organisation, setOrganisation] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const urgentIssues = [
    'Computer Crash / Won’t Boot',
    'Office Wi-Fi / Router / Internet Down',
    'Network Printer / Billing Printer Offline',
    'Business Email Blocked / Password Lockout',
    'Suspected Virus, Malware or Ransomware',
    'Server Crash / Data Backup Failure',
    'Other Urgent Technical Breakdown',
  ];

  const handleCall = () => {
    window.location.href = `tel:${COMPANY_INFO.phonePrimary.replace(/\s/g, '')}`;
  };

  const handleWhatsAppEmergency = () => {
    const text = `🚨 URGENT IT RESCUE:
Organisation: ${organisation || 'Client Office'}
Phone: ${phone || 'Not specified'}
Issue: ${issueType}
Request: Immediate assistance from a TechNix systems engineer.`;

    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-red-200 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 bg-red-600 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white tracking-tight">TechNix IT Rescue Hotline</h3>
              <p className="text-xs text-red-100">Rapid emergency tech assistance in Blantyre & Lilongwe</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close IT rescue modal"
            className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Immediate Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={handleCall}
              className="p-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex flex-col items-center justify-center space-y-1 transition-colors cursor-pointer shadow-md"
            >
              <PhoneCall className="w-5 h-5 text-emerald-400" />
              <span>Call Primary Dispatch</span>
              <span className="text-[11px] text-slate-400 font-mono">{COMPANY_INFO.phonePrimary}</span>
            </button>

            <button
              onClick={handleWhatsAppEmergency}
              className="p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex flex-col items-center justify-center space-y-1 transition-colors cursor-pointer shadow-md"
            >
              <MessageSquare className="w-5 h-5 text-white" />
              <span>WhatsApp Emergency Line</span>
              <span className="text-[11px] text-emerald-100">Live engineer dispatch</span>
            </button>
          </div>

          <div className="border-t border-slate-200 pt-4">
            {submitted ? (
              <div className="text-center py-4 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Emergency Ticket Logged</h4>
                <p className="text-xs text-slate-600">
                  Our duty technician has been alerted for <strong>{organisation}</strong> regarding <strong>{issueType}</strong>. We will call you immediately at {phone}.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 text-xs font-bold text-slate-600 hover:text-slate-900 underline"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Or request an instant callback:
                </span>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Issue Category *</label>
                  <select
                    value={issueType}
                    onChange={(e) => setIssueType(e.target.value)}
                    className="w-full p-3 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-red-500 bg-white"
                  >
                    {urgentIssues.map((issue, idx) => (
                      <option key={idx} value={issue}>
                        {issue}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Business Name *</label>
                    <input
                      type="text"
                      required
                      value={organisation}
                      onChange={(e) => setOrganisation(e.target.value)}
                      placeholder="e.g. Acme Ltd"
                      className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Direct Phone *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+265 999 000 000"
                      className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Emergency Callback (Under 15 Mins)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
