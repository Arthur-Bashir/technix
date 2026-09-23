import React, { useState } from 'react';
import { X, AlertTriangle, PhoneCall, MessageSquare, Send, CheckCircle2, Radio, Terminal } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel-elevated rounded-3xl max-w-lg w-full shadow-2xl border border-red-900/60 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200 text-white">
        
        {/* Header */}
        <div className="p-6 bg-red-950/90 border-b border-red-900/60 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-red-900/50 border border-red-700/60 text-red-400 flex items-center justify-center shadow-inner">
              <AlertTriangle className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2 text-[10px] font-mono text-red-300 uppercase tracking-widest mb-0.5">
                <Radio className="w-3 h-3 text-red-400 animate-pulse" />
                <span>RAPID IT RESCUE HOTLINE</span>
              </div>
              <h3 className="text-xl font-black text-white tracking-tight">Emergency IT Breakdown</h3>
              <p className="text-xs text-red-200">Rapid emergency dispatch in Blantyre & Lilongwe</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close IT rescue modal"
            className="p-2 text-red-300 hover:text-white rounded-xl hover:bg-red-900/50 transition-colors"
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
              <h4 className="text-xl font-bold text-white">Emergency Request Formatted</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
                Your incident has been prepared for dispatch. Select your preferred method below to contact the on-duty engineer directly.
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleWhatsAppEmergency}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg shadow-emerald-900/30"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Urgent WhatsApp Alert</span>
                </button>

                <button
                  onClick={handleCall}
                  className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg shadow-red-900/30"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Emergency Duty Line</span>
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
                <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">Type of Urgent Issue *</label>
                <select
                  value={issueType}
                  onChange={(e) => setIssueType(e.target.value)}
                  className="w-full p-3 text-xs rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-red-500"
                >
                  {urgentIssues.map((issue, idx) => (
                    <option key={idx} value={issue} className="bg-slate-900 text-white">
                      {issue}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">Organisation / Office Name *</label>
                <input
                  type="text"
                  required
                  value={organisation}
                  onChange={(e) => setOrganisation(e.target.value)}
                  placeholder="e.g. Apex Legal Firm / Blantyre"
                  className="w-full p-3 text-xs rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-red-500 placeholder-slate-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">Direct Call/WhatsApp Contact *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+265 888 000 000"
                  className="w-full p-3 text-xs rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-red-500 placeholder-slate-500"
                />
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-red-600/30 transition-all cursor-pointer flex items-center justify-center space-x-2 border border-red-400/40"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Incident to On-Duty Engineer</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleCall}
                    className="py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-red-400" />
                    <span>Call Hotline</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppEmergency}
                    className="py-2.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Emergency Chat</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
