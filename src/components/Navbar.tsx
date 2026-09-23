import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  AlertTriangle, 
  Activity,
  Phone,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface NavbarProps {
  onOpenQuote: (service?: string) => void;
  onOpenHealthCheck: () => void;
  onOpenITRescue: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuote,
  onOpenHealthCheck,
  onOpenITRescue,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = (msg = 'Hello TechNix Africa, I would like to inquire about your technology services.') => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Customer-facing navigation structure
  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Proof & Trust', href: '#case-studies' },
    { name: 'How We Work', href: '#how-we-work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050811]/92 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/70' 
          : 'bg-[#050811]/70 backdrop-blur-md border-b border-slate-800/40'
      }`}
    >
      {/* Top Bar Contract: Exactly 3 Zones in a single row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#" 
            className="flex items-center space-x-2 text-xl font-bold tracking-tight text-white group"
            id="brand-wordmark"
          >
            <span className="font-black text-sky-400 tracking-tight group-hover:text-sky-300 transition-colors">
              TechNix
            </span>
            <span className="text-slate-100 font-semibold tracking-tight">
              Africa
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links with subtle hover states */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 text-sm tracking-normal"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Specialist Action: IT Rescue */}
            <button
              onClick={onOpenITRescue}
              className="text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors px-3 py-2 rounded-lg hover:bg-rose-500/10 flex items-center space-x-1.5 cursor-pointer"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>IT Rescue</span>
            </button>

            {/* Primary Action: Start a Project */}
            <button
              onClick={() => onOpenQuote()}
              id="navbar-cta-start-project"
              className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-sky-600/20 hover:shadow-sky-500/30 flex items-center space-x-2 cursor-pointer border border-sky-400/30 whitespace-nowrap"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => onOpenQuote()}
              className="px-3.5 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg cursor-pointer transition-all"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none cursor-pointer border border-slate-700/50"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050811]/98 border-b border-slate-800 px-5 pt-4 pb-6 space-y-4 shadow-2xl backdrop-blur-2xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-800/70 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Specialist Actions in Mobile Drawer */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenITRescue();
              }}
              className="py-2.5 px-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold flex items-center justify-center space-x-1.5"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>IT Rescue</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHealthCheck();
              }}
              className="py-2.5 px-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold flex items-center justify-center space-x-1.5"
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Health Check</span>
            </button>
          </div>

          <div className="space-y-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl text-center flex items-center justify-center space-x-2 shadow-lg shadow-sky-600/30"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsApp('Hello TechNix, I am contacting you from the TechNix Africa mobile website.');
              }}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 font-semibold text-xs rounded-xl text-center flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Talk to TechNix on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
