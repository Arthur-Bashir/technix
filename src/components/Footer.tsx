import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare,
  Shield,
  Lock,
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface FooterProps {
  onOpenQuote: (service?: string) => void;
  onOpenHealthCheck: () => void;
  onOpenITRescue: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenQuote, 
  onOpenHealthCheck,
  onOpenITRescue 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent('Hello TechNix Africa, I would like to discuss your services.')}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#03060F] border-t border-white/5 text-slate-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-sky-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-sky-600/30">
                TN
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                TechNix <span className="text-sky-400">Africa</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Technology partner for growing African businesses and organisations. Practical software, websites, email, IT support, hosting and training.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300 font-mono">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Blantyre & Lilongwe Operations Hubs, Malawi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{COMPANY_INFO.phonePrimary} / {COMPANY_INFO.phoneSecondary}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{COMPANY_INFO.emailInfo}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/solutions/digital-presence" className="hover:text-sky-300 transition-colors">
                  Digital Presence
                </Link>
              </li>
              <li>
                <Link to="/solutions/business-systems" className="hover:text-sky-300 transition-colors">
                  Business Systems & Data
                </Link>
              </li>
              <li>
                <Link to="/solutions/it-support" className="hover:text-sky-300 transition-colors">
                  IT Operations & Support
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenITRescue}
                  className="text-red-400 hover:text-red-300 font-semibold cursor-pointer text-left"
                >
                  Urgent IT Rescue
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/our-work" className="hover:text-sky-300 transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/academy" className="hover:text-sky-300 transition-colors">
                  Academy
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-300 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={() => onOpenQuote()}
                  className="hover:text-sky-300 text-left cursor-pointer"
                >
                  Discuss a Project
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenHealthCheck}
                  className="hover:text-sky-300 text-left cursor-pointer"
                >
                  Digital Health Check
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-6 text-[11px] text-slate-500">
            <span>© {new Date().getFullYear()} TechNix Africa. All Rights Reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleWhatsApp}
              className="p-2.5 rounded-xl bg-slate-900/60 border border-white/10 hover:bg-slate-800/80 transition-colors group"
              title="Chat with us on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
            </button>
            <div className="flex items-center space-x-2 text-[10px] text-slate-500 font-mono px-2.5 py-1.5 rounded-lg bg-slate-950/50 border border-white/5">
              <Shield className="w-3 h-3 text-sky-400" />
              <span>SECURE</span>
              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>PRIVATE</span>
              <span className="w-1 h-1 rounded-full bg-sky-500 animate-pulse" />
              <Cpu className="w-3 h-3 text-sky-400" />
              <span>RELIABLE</span>
            </div>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900/60 border border-white/10 hover:bg-sky-600 hover:border-sky-500/40 transition-all group"
              title="Back to Top"
            >
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:-rotate-45 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
