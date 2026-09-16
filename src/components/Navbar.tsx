import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MessageSquare, Menu, X, ArrowRight, ShieldCheck, ChevronDown, Laptop, Globe, Server, AlertTriangle, Shield, Code2, GraduationCap, Activity } from 'lucide-react';
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
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleWhatsApp = (msg = 'Hello TechNix, I would like to inquire about your technology services.') => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Simplified Commercial Navigation per Iteration 2A:
  // Home, Solutions, Products, Industries, Projects, Academy, About, Contact, Get Started
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Products', href: '#products-catalog', hasDropdown: true },
    { name: 'Industries', href: '#industries' },
    { name: 'Projects', href: '#case-studies' },
    { name: 'Academy', href: '#technix-academy' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const productDropdownItems = [
    { name: 'Business Websites', href: '#business-website', desc: 'Starting from MK 199,000', icon: Globe },
    { name: 'Business Email', href: '#business-email', desc: 'Custom domain inboxes', icon: Mail },
    { name: 'Hosting & Domains', href: '#hosting-domains', desc: '.mw & .com cloud hosting', icon: Server },
    { name: 'TechNix IT Rescue', href: '#it-rescue', desc: 'Urgent technology repair', icon: AlertTriangle },
    { name: 'TechNix Care', href: '#technix-care', desc: 'Managed monthly IT support', icon: Shield },
    { name: 'Software Solutions', href: '#software-solutions', desc: 'Databases & custom portals', icon: Code2 },
    { name: 'TechNix Academy', href: '#technix-academy', desc: 'Practical skills training', icon: GraduationCap },
    { name: 'Digital Health Check', href: '#digital-health-check', desc: '100% Free diagnostic review', icon: Activity },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-200 border-b border-slate-200/80 shadow-xs">
      {/* Top Utility & Hotline Strip */}
      <div className="bg-slate-950 text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a
              href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s/g, '')}`}
              className="flex items-center space-x-1.5 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium">{COMPANY_INFO.phonePrimary}</span>
            </a>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:flex items-center space-x-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              <span>Blantyre & Lilongwe, Malawi</span>
            </span>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={onOpenITRescue}
              className="flex items-center space-x-1.5 text-amber-300 hover:text-amber-200 font-medium cursor-pointer transition-colors"
            >
              <span className="bg-amber-500/20 text-amber-300 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                IT Rescue
              </span>
              <span className="hidden sm:inline">Urgent Tech Breakdown?</span>
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => handleWhatsApp('Hello TechNix, I would like to talk to TechNix on WhatsApp.')}
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
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-1">
                Technology Partner for Growth
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links: Home, Solutions, Products, Industries, Projects, Academy, About, Contact */}
          <nav className="hidden lg:flex items-center space-x-1 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                      onMouseEnter={() => setProductsDropdownOpen(true)}
                      className="px-3.5 py-2 rounded-lg hover:text-blue-700 hover:bg-slate-100 transition-colors flex items-center space-x-1 cursor-pointer"
                      aria-expanded={productsDropdownOpen}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                    </button>

                    {/* Products Dropdown Flyout */}
                    {productsDropdownOpen && (
                      <div 
                        onMouseLeave={() => setProductsDropdownOpen(false)}
                        className="absolute left-0 top-full mt-1.5 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                      >
                        <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Solutions & Products</span>
                          <a 
                            href="#products-catalog" 
                            onClick={() => setProductsDropdownOpen(false)}
                            className="text-[11px] font-bold text-blue-600 hover:text-blue-700"
                          >
                            View All →
                          </a>
                        </div>
                        <div className="py-1 space-y-0.5 max-h-96 overflow-y-auto">
                          {productDropdownItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setProductsDropdownOpen(false)}
                                className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                              >
                                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                                    {item.name}
                                  </div>
                                  <div className="text-[10px] text-slate-500">
                                    {item.desc}
                                  </div>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-2 rounded-lg hover:text-blue-700 hover:bg-slate-100 transition-colors"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => handleWhatsApp('Hello TechNix, I want to talk to TechNix about our organisation technology needs.')}
              className="px-4 py-2.5 text-xs font-bold text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              Talk to TechNix
            </button>

            <button
              onClick={() => onOpenQuote()}
              id="navbar-cta-get-started"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => onOpenQuote()}
              className="px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg sm:hidden cursor-pointer"
            >
              Get Started
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="space-y-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl text-center flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsApp('Hello TechNix, I am contacting you from the TechNix Africa mobile website.');
              }}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl text-center flex items-center justify-center space-x-2"
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
