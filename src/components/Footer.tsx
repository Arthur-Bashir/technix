import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Globe, Shield } from 'lucide-react';
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
      'Hello TechNix Africa, I am visiting your website and have an inquiry.'
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      {/* Pre-footer Call to Action Band */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 py-12 px-4 sm:px-6 lg:px-8 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Ready to modernise your organisation?
            </h3>
            <p className="text-sm text-slate-300">
              Speak with a practical African technology specialist today. No pressure, no confusing jargon.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuote()}
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all cursor-pointer"
            >
              Request a Free Quote
            </button>
            <button
              onClick={handleWhatsApp}
              className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center space-x-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </button>
            <button
              onClick={onOpenHealthCheck}
              className="px-4 py-3.5 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
            >
              Free Health Check
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-blue-700 text-white font-black text-lg flex items-center justify-center">
                TN
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                TechNix <span className="text-blue-500">Africa</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              A Technology Partner for Growing African Businesses and Organisations. We turn software, web portals, managed IT, cloud hosting, and data analytics into clear, dependable, and purchasable solutions.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Blantyre & Lilongwe, Malawi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{COMPANY_INFO.phonePrimary} / {COMPANY_INFO.phoneSecondary}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>{COMPANY_INFO.emailInfo}</span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Priority Products
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#business-website" className="hover:text-white transition-colors">
                  Business Websites (from MK 380k)
                </a>
              </li>
              <li>
                <a href="#business-email" className="hover:text-white transition-colors">
                  Professional Business Email
                </a>
              </li>
              <li>
                <a href="#technix-care" className="hover:text-white transition-colors">
                  TechNix Care Monthly IT
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenITRescue}
                  className="text-amber-400 hover:text-amber-300 font-semibold cursor-pointer text-left"
                >
                  Urgent IT Rescue
                </button>
              </li>
              <li>
                <a href="#software-solutions" className="hover:text-white transition-colors">
                  Custom Software & Portals
                </a>
              </li>
              <li>
                <a href="#academy" className="hover:text-white transition-colors">
                  TechNix Academy Training
                </a>
              </li>
            </ul>
          </div>

          {/* Sectors Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Sectors We Serve
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Small & Medium Businesses
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Schools & Colleges
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  NGOs & Development Programs
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Churches & Associations
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Legal & Medical Professionals
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Commercial Fleets & Retail
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Tools & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Tools & Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenHealthCheck}
                  className="hover:text-white text-left cursor-pointer flex items-center space-x-1"
                >
                  <span>Digital Business Health Check</span>
                </button>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Client Case Studies & Proof
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Our Team & Ethos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Office Locations & Inquiries
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenQuote('Consultancy Inquiry')}
                  className="hover:text-white text-left cursor-pointer"
                >
                  Request a Formal Proposal
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal line */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex flex-wrap items-center gap-3">
            <span>&copy; {new Date().getFullYear()} TechNix Africa. All rights reserved.</span>
            <span>&bull;</span>
            <span>Registered in Malawi</span>
            <span>&bull;</span>
            <span>Providing Practical ICT & Software Services</span>
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
