import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageSquare, Menu, X, ArrowRight, ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = (msg = 'Hello TechNix Africa, I would like to inquire about your technology services.') => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Business Websites', href: '#business-website' },
    { name: 'Business Email', href: '#business-email' },
    { name: 'TechNix Care', href: '#technix-care' },
    { name: 'Software', href: '#software-solutions' },
    { name: 'Industries', href: '#industries' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Academy', href: '#academy' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-200 border-b border-slate-200/80 shadow-xs">
      {/* Top emergency & contact utility bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a
              href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s/g, '')}`}
              className="flex items-center space-x-1.5 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium">{COMPANY_INFO.phonePrimary}</span>
            </a>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:flex items-center space-x-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              <span>Offices in Blantyre & Lilongwe, Malawi</span>
            </span>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={onOpenITRescue}
              className="flex items-center space-x-1 text-amber-300 hover:text-amber-200 font-medium cursor-pointer transition-colors"
            >
              <span className="bg-amber-500/20 text-amber-300 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                IT Rescue
              </span>
              <span className="hidden sm:inline">Urgent Tech Breakdown?</span>
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => handleWhatsApp()}
              className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 font-medium cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group" id="brand-logo">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-950 via-blue-900 to-indigo-700 flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition-transform duration-200">
              <span className="text-white tracking-tighter font-extrabold">TN</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                TechNix <span className="text-blue-700">Africa</span>
              </span>
              <span className="text-[11px] text-slate-700 font-semibold tracking-wider uppercase mt-1">
                Technology Partner for Growth
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 text-sm font-medium text-slate-700">
            <a
              href="#solutions"
              className="px-3 py-2 rounded-lg hover:text-blue-800 hover:bg-slate-100 transition-colors"
            >
              Solutions
            </a>
            <a
              href="#business-website"
              className="px-3 py-2 rounded-lg hover:text-blue-800 hover:bg-slate-100 transition-colors"
            >
              Websites
            </a>
            <a
              href="#business-email"
              className="px-3 py-2 rounded-lg hover:text-blue-800 hover:bg-slate-100 transition-colors"
            >
              Business Email
            </a>
            <a
              href="#technix-care"
              className="px-3 py-2 rounded-lg hover:text-blue-800 hover:bg-slate-100 transition-colors flex items-center gap-1"
            >
              <span>IT Support</span>
              <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded font-semibold">Care</span>
            </a>
            <a
              href="#software-solutions"
              className="px-3 py-2 rounded-lg hover:text-blue-800 hover:bg-slate-100 transition-colors"
            >
              Software
            </a>
            <a
              href="#industries"
              className="px-3 py-2 rounded-lg hover:text-blue-800 hover:bg-slate-100 transition-colors"
            >
              Industries
            </a>
            <a
              href="#case-studies"
              className="px-3 py-2 rounded-lg hover:text-blue-800 hover:bg-slate-100 transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#academy"
              className="px-3 py-2 rounded-lg hover:text-blue-800 hover:bg-slate-100 transition-colors"
            >
              Academy
            </a>
            <a
              href="#about"
              className="px-3 py-2 rounded-lg hover:text-blue-800 hover:bg-slate-100 transition-colors"
            >
              About
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenHealthCheck}
              id="btn-health-check-header"
              className="flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Free Health Check</span>
            </button>

            <button
              onClick={() => onOpenQuote()}
              id="btn-get-quote-header"
              className="flex items-center space-x-1.5 px-4.5 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <span>Talk to TechNix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={() => onOpenQuote()}
              className="text-xs font-semibold bg-blue-700 text-white px-3 py-1.5 rounded-lg sm:hidden"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="btn-mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <button
              onClick={() => {
                onOpenHealthCheck();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center space-x-1.5 py-2.5 px-3 bg-amber-50 text-amber-800 text-xs font-bold rounded-lg border border-amber-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Digital Health Check</span>
            </button>
            <button
              onClick={() => {
                onOpenITRescue();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center space-x-1.5 py-2.5 px-3 bg-red-50 text-red-700 text-xs font-bold rounded-lg border border-red-200"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
              <span>IT Emergency Rescue</span>
            </button>
          </div>

          <div className="flex flex-col space-y-1 text-sm font-medium text-slate-800 border-t border-slate-100 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-100 hover:text-blue-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <button
              onClick={() => {
                onOpenQuote();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-blue-700 text-white font-semibold text-sm shadow-sm"
            >
              <span>Request a Quote / Start Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                handleWhatsApp();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat Directly on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
