import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  Globe, 
  Mail, 
  Server, 
  AlertTriangle, 
  Shield, 
  Code2, 
  GraduationCap, 
  Activity,
  Cpu,
  Layers,
  Terminal
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
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navLinks = [
    { name: 'Infrastructure', href: '#hero-spatial-3d' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Deployable Modules', href: '#products-catalog', hasDropdown: true },
    { name: 'Architecture & Process', href: '#how-we-work' },
    { name: 'Field Deployments', href: '#case-studies' },
    { name: 'Industries', href: '#industries' },
    { name: 'Academy', href: '#technix-academy' },
    { name: 'Diagnostics', href: '#digital-health-check' },
    { name: 'Contact', href: '#contact' },
  ];

  const productDropdownItems = [
    { name: 'Business Websites', href: '#business-website', desc: 'Starting from MK 199,000', icon: Globe, tag: 'Storefront' },
    { name: 'Business Email', href: '#business-email', desc: 'Custom domain inboxes & SPF/DKIM', icon: Mail, tag: 'Identity' },
    { name: 'Hosting & Domains', href: '#hosting-domains', desc: '.mw & .com NVMe SSD cloud', icon: Server, tag: 'Cloud' },
    { name: 'TechNix IT Rescue', href: '#it-rescue', desc: 'Urgent emergency tech recovery', icon: AlertTriangle, tag: 'Emergency' },
    { name: 'TechNix Care', href: '#technix-care', desc: 'Managed monthly SLA & maintenance', icon: Shield, tag: 'Retainer' },
    { name: 'Software Solutions', href: '#software-solutions', desc: 'Databases & field sync portals', icon: Code2, tag: 'Custom' },
    { name: 'TechNix Academy', href: '#technix-academy', desc: 'Practical enterprise skills training', icon: GraduationCap, tag: 'Masterclasses' },
    { name: 'Digital Health Check', href: '#digital-health-check', desc: '100% Free diagnostic review', icon: Activity, tag: 'Audit' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/60' 
          : 'bg-[#030712]/70 backdrop-blur-md border-b border-slate-800/40'
      }`}
    >
      {/* Top Operational Telemetry & Emergency Hotline Strip */}
      <div className="bg-[#02050c] text-slate-300 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          
          {/* Telemetry Indicator */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-emerald-400 font-semibold tracking-wider uppercase text-[10px]">
                INFRASTRUCTURE STATUS: 99.9% UPTIME
              </span>
            </div>
            
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:flex items-center space-x-1.5 text-slate-400 text-[11px]">
              <Cpu className="w-3 h-3 text-sky-400" />
              <span>Blantyre HQ & Lilongwe Operations Hubs</span>
            </span>
          </div>

          {/* Quick Support & Urgent Channels */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a
              href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s/g, '')}`}
              className="flex items-center space-x-1.5 hover:text-sky-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span className="font-mono text-[11px]">{COMPANY_INFO.phonePrimary}</span>
            </a>

            <span className="text-slate-800">|</span>

            <button
              onClick={onOpenITRescue}
              className="flex items-center space-x-1.5 text-amber-400 hover:text-amber-300 font-semibold cursor-pointer transition-colors"
            >
              <span className="bg-amber-500/20 text-amber-300 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase tracking-wider border border-amber-500/30">
                IT RESCUE
              </span>
              <span className="hidden sm:inline text-[11px]">Urgent Breakdown?</span>
            </button>

            <span className="text-slate-800">|</span>

            <button
              onClick={() => handleWhatsApp('Hello TechNix, I am reaching out from the TechNix website.')}
              className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 font-medium cursor-pointer text-[11px]"
            >
              <MessageSquare className="w-3 h-3" />
              <span className="hidden xs:inline">WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Command Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand Identity Lockup */}
          <a href="#" className="flex items-center space-x-3 group" id="brand-logo">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-blue-700 to-indigo-800 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-sky-600/20 border border-sky-400/30 group-hover:scale-105 group-hover:border-sky-300 transition-all duration-200">
              <span className="tracking-tighter font-mono font-bold">TN</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="text-lg font-black tracking-tight text-white leading-none">
                  TechNix
                </span>
                <span className="text-lg font-black tracking-tight text-sky-400 leading-none">
                  Africa
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-1">
                Digital Infrastructure
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 text-[13px] font-semibold text-slate-300">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                      onMouseEnter={() => setProductsDropdownOpen(true)}
                      className={`px-3 py-2 rounded-lg transition-colors flex items-center space-x-1 cursor-pointer ${
                        productsDropdownOpen 
                          ? 'text-sky-300 bg-slate-800/60' 
                          : 'hover:text-white hover:bg-slate-800/40'
                      }`}
                      aria-expanded={productsDropdownOpen}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-sky-400' : 'text-slate-400'}`} />
                    </button>

                    {/* Products Dropdown Flyout */}
                    {productsDropdownOpen && (
                      <div 
                        onMouseLeave={() => setProductsDropdownOpen(false)}
                        className="absolute left-0 top-full mt-2 w-96 rounded-2xl glass-panel-elevated p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                      >
                        <div className="px-3 py-2 border-b border-slate-800 flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                            Deployable Technology Modules
                          </span>
                          <a 
                            href="#products-catalog" 
                            onClick={() => setProductsDropdownOpen(false)}
                            className="text-[11px] font-bold text-sky-400 hover:text-sky-300 flex items-center space-x-1"
                          >
                            <span>Full Catalog</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                        <div className="py-1.5 space-y-1 max-h-[420px] overflow-y-auto">
                          {productDropdownItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setProductsDropdownOpen(false)}
                                className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group border border-transparent hover:border-slate-700/60"
                              >
                                <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800/40 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors truncate">
                                      {item.name}
                                    </span>
                                    <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60 ml-2 shrink-0">
                                      {item.tag}
                                    </span>
                                  </div>
                                  <div className="text-[11px] text-slate-400 truncate">
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
                  className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-800/40 transition-colors"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => handleWhatsApp('Hello TechNix, I want to talk to TechNix about our organisation technology needs.')}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-700/60"
            >
              Talk to TechNix
            </button>

            <button
              onClick={() => onOpenQuote()}
              id="navbar-cta-get-started"
              className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-sky-600/30 hover:shadow-sky-500/40 transition-all flex items-center space-x-2 cursor-pointer border border-sky-400/40"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex xl:hidden items-center space-x-2">
            <button
              onClick={() => onOpenQuote()}
              className="px-3.5 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg cursor-pointer transition-all shadow-md shadow-sky-600/20"
            >
              Start Project
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#030712]/95 border-b border-slate-800 px-4 pt-4 pb-6 space-y-4 shadow-2xl backdrop-blur-2xl">
          <div className="grid grid-cols-2 gap-1.5 pb-3 border-b border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-800/80 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Quick IT Rescue & Health Check buttons in mobile menu */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenITRescue();
              }}
              className="py-2.5 px-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center justify-center space-x-1.5"
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

          <div className="space-y-2 pt-1">
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
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl text-center flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/20"
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
