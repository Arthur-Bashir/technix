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
  Code
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface ITRescueSectionProps {
  onOpenITRescue: () => void;
}

export const ITRescueSection: React.FC<ITRescueSectionProps> = ({ onOpenITRescue }) => {
  const problems = [
    { title: 'Broken Email', desc: 'Can not send or receive messages, mailbox lockouts, DNS errors', icon: HelpCircle },
    { title: 'Hacked or Down Sites', desc: 'Website offline, defaced pages, SSL security warnings, server down', icon: Globe2 },
    { title: 'Network & Wi-Fi Issues', desc: 'Office cabling, dropping signal, router resets, switch failure', icon: Wifi },
    { title: 'Device Failures', desc: 'Laptops, desktop PCs, boot failures, crashing screens, hardware errors', icon: Laptop },
    { title: 'Data Loss & Backups', desc: 'Missing files, drive failure, corrupted drives, recovery assistance', icon: HardDrive },
    { title: 'Urgent Tech Emergencies', desc: 'Any critical system stoppage halting your organization operations', icon: AlertTriangle },
  ];

  const handleWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      'Hello TechNix, I need IT support. I have a problem with our office technology and need assistance.'
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="it-rescue" className="py-20 bg-amber-500/5 border-y border-amber-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Urgent Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-red-100 border border-red-200 rounded-full px-3.5 py-1 text-xs font-bold text-red-700">
              <AlertTriangle className="w-3.5 h-3.5 text-red-600 animate-bounce" />
              <span>Product 4 — Urgent IT Support</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Something Is Not Working? Let&apos;s Fix It.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              When office computers freeze, internet drops, or files disappear, downtime costs your business money. Fast remote triage or on-ground dispatch across Blantyre and Lilongwe. <strong>Clear technical assessment before work begins.</strong>
            </p>
          </div>

          {/* Urgent Action Buttons per Instruction 9 */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenITRescue}
              id="btn-it-rescue-trigger"
              className="px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-red-600/30 flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Request Emergency Support</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Now</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s/g, '')}`}
              className="px-4 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Call: {COMPANY_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>

        {/* 6 Core Emergency Areas Grid */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-4">
            Common Technical Emergencies We Troubleshoot & Resolve:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {problems.map((prob, idx) => {
              const Icon = prob.icon;
              return (
                <div
                  key={idx}
                  onClick={onOpenITRescue}
                  className="bg-white p-4 rounded-xl border border-slate-200/90 hover:border-red-400 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 mb-1">{prob.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-tight">{prob.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Rapid Response Strip */}
        <div className="pt-6 border-t border-amber-200/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-700">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold">Local Support: Blantyre & Lilongwe Metros</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold">Clear Assessment Before Work Begins</span>
          </div>
          <span className="text-slate-500 italic">
            Zero long-term retainer required to get immediate emergency help.
          </span>
        </div>
      </div>
    </section>
  );
};
