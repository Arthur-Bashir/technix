import React from 'react';
import { 
  AlertTriangle, 
  Wifi, 
  ServerCrash, 
  Laptop, 
  PhoneCall, 
  MessageSquare, 
  HardDrive, 
  HelpCircle,
  Clock,
  ShieldAlert,
  ArrowRight,
  MapPin
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface ITRescueSectionProps {
  onOpenITRescue: () => void;
}

export const ITRescueSection: React.FC<ITRescueSectionProps> = ({ onOpenITRescue }) => {
  const problems = [
    { title: 'Server & Workstation Crashes', desc: 'Accounting servers down, blue screen errors, corrupted files, and system halts.', icon: ServerCrash },
    { title: 'Office Network & Wi-Fi Outages', desc: 'Router resets, inter-office connection drops, failed network switches, and DNS lockouts.', icon: Wifi },
    { title: 'Malware & Ransomware Lockouts', desc: 'Virus infections, locked files, suspicious extortion screens, and security compromises.', icon: ShieldAlert },
    { title: 'Data Loss & Hard Drive Failure', desc: 'Accidentally deleted records, clicking drives, unreadable USB disks, and database recovery.', icon: HardDrive },
    { title: 'Broken Email & Outlook Sync', desc: 'Inability to send or receive tender communications, password lockouts, and inbox errors.', icon: HelpCircle },
    { title: 'Critical Stoppages', desc: 'Any technical emergency currently stopping staff from conducting normal business.', icon: AlertTriangle },
  ];

  const handleWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      '🚨 EMERGENCY IT RESCUE: We have a critical system breakdown halting our office operations and require urgent assistance.'
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="it-rescue" className="py-24 bg-[#0c0810] text-white relative border-b border-rose-950/60 overflow-hidden">
      {/* Background warning atmosphere */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-rose-600/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Urgent Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-8 space-y-4">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-rose-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              Emergency Technical Response
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">
              When Technology Breaks Down, Your Business Stops Moving
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
              Crashing accounting computers, dropped Wi-Fi networks, corrupted databases, and malware lockouts cost real money every hour. TechNix deploys rapid remote diagnostics and same-day physical engineer dispatch across Blantyre and Lilongwe.
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#140b16] border border-rose-900/60 rounded-3xl p-6 space-y-4 shadow-xl">
            <div className="text-xs font-mono uppercase text-rose-400 font-bold tracking-wider">
              Emergency Dispatch Hotlines
            </div>

            <div className="space-y-2">
              <button
                onClick={onOpenITRescue}
                id="it-rescue-trigger-btn"
                className="w-full py-3.5 px-4 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-rose-950/50 transition-all flex items-center justify-center space-x-2 cursor-pointer border border-rose-400/40"
              >
                <AlertTriangle className="w-4 h-4 text-rose-200" />
                <span>Request IT Rescue Now</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full py-3 px-4 bg-[#0a050d] hover:bg-[#120a17] text-emerald-400 border border-slate-800 font-semibold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Emergency WhatsApp Dispatch</span>
              </button>
            </div>

            <div className="pt-2 text-[11px] font-mono text-slate-400 flex items-center justify-between border-t border-rose-900/40">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-rose-400" />
                Same-Day Physical Triage
              </span>
              <span className="text-white font-bold">Blantyre & Lilongwe</span>
            </div>
          </div>
        </div>

        {/* 6 Urgent Scenarios in an Asymmetric Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="bg-[#120a17]/90 hover:bg-[#180e1f] border border-rose-950/60 hover:border-rose-800/80 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1c0d22] border border-rose-900/50 text-rose-400 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-rose-200 transition-colors">
                    {prob.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {prob.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-rose-950/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-rose-400">
                    High Priority Response
                  </span>

                  <button
                    onClick={onOpenITRescue}
                    className="text-xs font-semibold text-slate-300 hover:text-white flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
