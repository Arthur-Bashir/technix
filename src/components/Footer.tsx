import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Globe, Shield, Terminal, Activity } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface FooterProps {
  onOpenQuote: (service?: string) => void;
  onOpenHealthCheck: () => void;
  onOpenITRescue: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenQuote,
  onOpenHealthCheck,
  onOpenITRescue,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      'Hello TechNix Africa, I am visiting your digital infrastructure portal and have an inquiry.'
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#02050e] text-slate-400 border-t border-slate-800/80 text-xs">
      
      {/* Pre-footer Call to Action Command Deck */}
      <div className="bg-gradient-to-r from-slate-950 via-sky-950/40 to-slate-950 py-12 px-4 sm:px-6 lg:px-8 text-white border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-[10px] font-mono text-sky-400 uppercase tracking-widest mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>INFRASTRUCTURE DEPLOYMENT READY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Ready to modernise your organisation?
            </h3>
            <p className="text-sm text-slate-300">
              Speak with a dedicated African systems engineer today. Clear itemized scope, zero technical confusion.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuote()}
              className="px-6 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-sky-600/20 transition-all cursor-pointer border border-sky-400/40"
            >
              Request a Free Quote
            </button>
            <button
              onClick={handleWhatsApp}
              className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 font-semibold text-xs rounded-xl flex items-center space-x-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </button>
            <button
              onClick={onOpenHealthCheck}
              className="px-4 py-3.5 bg-slate-950 hover:bg-slate-900 text-amber-300 border border-slate-800 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Free Health Check
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Telemetry Info */}
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
              Digital Infrastructure Partner for Modern African Organisations. We turn custom software, web portals, managed IT, cloud hosting, and data telemetry into clear, dependable, and purchasable solutions.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300 font-mono">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Blantyre HQ & Lilongwe Hub, Malawi</span>
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

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Priority Modules
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#business-website" className="hover:text-sky-300 transition-colors">
                  Business Websites (from MK 199k)
                </a>
              </li>
              <li>
                <a href="#business-email" className="hover:text-sky-300 transition-colors">
                  Professional Business Email
                </a>
              </li>
              <li>
                <a href="#hosting-domains" className="hover:text-sky-300 transition-colors">
                  SSD Cloud Hosting & .mw Domains
                </a>
              </li>
              <li>
                <a href="#technix-care" className="hover:text-sky-300 transition-colors">
                  TechNix Care Monthly IT Retainers
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenITRescue}
                  className="text-red-400 hover:text-red-300 font-semibold cursor-pointer text-left"
                >
                  Urgent IT Rescue
                </button>
              </li>
              <li>
                <a href="#software-solutions" className="hover:text-sky-300 transition-colors">
                  Custom Software & Portals
                </a>
              </li>
              <li>
                <a href="#technix-academy" className="hover:text-sky-300 transition-colors">
                  TechNix Academy Training
                </a>
              </li>
            </ul>
          </div>

          {/* Sectors Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Sectors We Serve
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#customer-types" className="hover:text-sky-300 transition-colors">
                  SMEs & Growing Businesses
                </a>
              </li>
              <li>
                <a href="#customer-types" className="hover:text-sky-300 transition-colors">
                  Schools & Colleges
                </a>
              </li>
              <li>
                <a href="#customer-types" className="hover:text-sky-300 transition-colors">
                  NGOs & Development Programs
                </a>
              </li>
              <li>
                <a href="#customer-types" className="hover:text-sky-300 transition-colors">
                  Churches & Member Associations
                </a>
              </li>
              <li>
                <a href="#customer-types" className="hover:text-sky-300 transition-colors">
                  Legal & Medical Consultancies
                </a>
              </li>
              <li>
                <a href="#customer-types" className="hover:text-sky-300 transition-colors">
                  Commercial Fleets & Retail
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Tools & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              System Diagnostics
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenHealthCheck}
                  className="hover:text-sky-300 text-left cursor-pointer flex items-center space-x-1"
                >
                  <span>Digital Business Health Check</span>
                </button>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-sky-300 transition-colors">
                  Field Deployments & Case Studies
                </a>
              </li>
              <li>
                <a href="#how-we-work" className="hover:text-sky-300 transition-colors">
                  6-Stage Deployment Protocol
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-sky-300 transition-colors">
                  About Our Team & Regional Hubs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-300 transition-colors">
                  Office Locations & Inquiries
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenQuote('Formal Proposal Request')}
                  className="hover:text-sky-300 text-left cursor-pointer"
                >
                  Request a Formal Proposal
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal line */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
          <div className="flex flex-wrap items-center gap-3">
            <span>&copy; {new Date().getFullYear()} TechNix Africa. All rights reserved.</span>
            <span>&bull;</span>
            <span>Registered in Malawi</span>
            <span>&bull;</span>
            <span>Enterprise Digital Infrastructure</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-slate-300 hover:text-white cursor-pointer transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
