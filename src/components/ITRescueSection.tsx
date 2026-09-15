import React from 'react';
import { 
  AlertTriangle, 
  WifiOff, 
  HardDrive, 
  Printer, 
  Mail, 
  ShieldAlert, 
  ServerCrash, 
  Laptop, 
  PhoneCall, 
  MessageSquare,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface ITRescueSectionProps {
  onOpenITRescue: () => void;
}

export const ITRescueSection: React.FC<ITRescueSectionProps> = ({ onOpenITRescue }) => {
  const issues = [
    { title: 'Computer Crashing or Freezing', icon: Laptop, desc: 'Laptops won’t boot, blue screens, slow performance, or software errors.' },
    { title: 'Wi-Fi & Office Network Drops', icon: WifiOff, desc: 'Internet cutting out, router disconnects, slow file sharing between desks.' },
    { title: 'Printer & Scanner Failures', icon: Printer, desc: 'Network printers offline, queue stuck, driver conflicts stopping billing.' },
    { title: 'Email & Password Lockouts', icon: Mail, desc: 'Inboxes not receiving mail, Outlook sync errors, forgotten credentials.' },
    { title: 'Virus, Malware & Ransomware', icon: ShieldAlert, desc: 'Suspicious popups, encrypted folders, unauthorized browser redirects.' },
    { title: 'Server & Backup Failures', icon: ServerCrash, desc: 'Local server won’t start, NAS drive degraded, fear of lost business data.' },
  ];

  const handleWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      'URGENT IT RESCUE: Hello TechNix, we have a technical problem in our office that needs immediate assistance.'
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
              <span>Product 3 — Urgent IT Rescue</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Something Not Working? TechNix Can Help.
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Technology breakdowns cost your business money every hour they linger. Our field engineers and remote helpdesk resolve office hardware, network, and software crises fast.
            </p>
          </div>

          {/* Urgent Action Bar */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <button
              onClick={onOpenITRescue}
              id="btn-it-rescue-trigger"
              className="px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-red-600/30 flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Get Technical Help Now</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s/g, '')}`}
              className="px-5 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl flex items-center justify-center space-x-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Call Dispatch: {COMPANY_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>

        {/* Breakdown Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {issues.map((issue, idx) => {
            const Icon = issue.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200/90 hover:border-amber-300 hover:shadow-md transition-all flex items-start space-x-4"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{issue.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{issue.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rapid SLA badge row */}
        <div className="mt-8 pt-6 border-t border-amber-200/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-700">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold">Average Remote Triage: Under 30 Minutes</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold">On-site Support in Blantyre & Lilongwe Metros</span>
          </div>
          <button
            onClick={handleWhatsApp}
            className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center space-x-1 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Send screenshot or error via WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
