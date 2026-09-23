import React from 'react';
import { 
  AlertTriangle, 
  Wifi, 
  Printer, 
  ShieldAlert, 
  ServerCrash, 
  Laptop, 
  PhoneCall, 
  MessageSquare,
  Clock,
  CheckCircle2,
  HardDrive,
  Globe2,
  HelpCircle,
  Code,
  Radio,
  Zap
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface ITRescueSectionProps {
  onOpenITRescue: () => void;
}

export const ITRescueSection: React.FC<ITRescueSectionProps> = ({ onOpenITRescue }) => {
  const problems = [
    { title: 'Broken Email & Inboxes', desc: 'Can not send or receive messages, mailbox lockouts, DNS MX errors', icon: HelpCircle },
    { title: 'Hacked or Down Websites', desc: 'Website offline, defaced pages, SSL security warnings, server down', icon: Globe2 },
    { title: 'Network & Wi-Fi Drops', desc: 'Office cabling, dropping Wi-Fi signal, router resets, firewall lockouts', icon: Wifi },
    { title: 'Workstation & OS Crashes', desc: 'Laptops, desktop PCs, blue screen errors, slow startup, malware infection', icon: Laptop },
    { title: 'Data Loss & Drive Failure', desc: 'Missing files, crashed external drives, corrupted accounting databases', icon: HardDrive },
    { title: 'Urgent Tech Emergencies', desc: 'Any critical system stoppage halting your organization operations', icon: AlertTriangle },
  ];

  const handleWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      'Hello TechNix, I need urgent IT support. We have a problem with our office technology and need immediate assistance.'
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="it-rescue" className="py-20 bg-[#030712] text-white relative border-b border-red-950/60 overflow-hidden">
      {/* Background warning grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Urgent Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-red-950/80 border border-red-800/60 rounded-full px-3.5 py-1 text-xs font-mono font-bold text-red-400 shadow-md">
              <AlertTriangle className="w-3.5 h-3.5 text-red-400 animate-pulse" />
              <span>Module 04 // Emergency IT Rescue & Rapid Triage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Something Is Not Working? <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-red-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
                Let&apos;s Restore Your Operations.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              When office computers freeze, internet drops, or files disappear, downtime costs your business money. Fast remote triage or physical engineer dispatch across Blantyre and Lilongwe.
            </p>
          </div>

          {/* Urgent Action Triggers */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenITRescue}
              id="it-rescue-trigger-btn"
              className="py-3.5 px-6 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-red-600/30 transition-all flex items-center justify-center space-x-2 cursor-pointer border border-red-400/40"
            >
              <AlertTriangle className="w-4 h-4 text-amber-200" />
              <span>Request Urgent IT Support</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="py-3.5 px-6 bg-slate-900/90 hover:bg-slate-800 text-emerald-400 border border-slate-700/80 hover:border-emerald-500/50 font-semibold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Emergency WhatsApp</span>
            </button>
          </div>
        </div>

        {/* 6 Common Emergency Scenarios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-5 border border-slate-800/90 hover:border-red-500/40 transition-all group flex items-start space-x-4"
              >
                <div className="w-10 h-10 rounded-xl bg-red-950/70 border border-red-900/40 text-red-400 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-red-600 group-hover:text-white transition-all shadow-inner">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-red-300 transition-colors">
                    {prob.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational Commitment Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center space-x-3 text-slate-300">
            <Radio className="w-4 h-4 text-red-400 animate-pulse shrink-0" />
            <span>
              <strong>Emergency Dispatch Protocol:</strong> Rapid diagnosis over phone/remote tool. Agreed fixed quote before physical work commences.
            </span>
          </div>

          <div className="flex items-center space-x-4 shrink-0 text-slate-400 font-mono text-[11px]">
            <span>Blantyre: <strong className="text-white">+265 888 123 456</strong></span>
            <span>•</span>
            <span>Lilongwe Operations Hub</span>
          </div>
        </div>

      </div>
    </section>
  );
};
