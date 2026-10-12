import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageSquare, ArrowRight, ShieldAlert } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface NavbarProps {
  onOpenQuote: (service?: string) => void;
  onOpenHealthCheck: () => void;
  onOpenITRescue: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenQuote,
  onOpenHealthCheck,
  onOpenITRescue
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const solutionsRef = useRef<HTMLDivElement>(null);

  const handleWhatsApp = (msg = 'Hello TechNix Africa, I would like to inquire about your technology services.') => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setSolutionsOpen(false);
  }, [location]);

  const handleLinkClick = (to: string) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDiscussProject = () => {
    handleLinkClick('/contact');
    setTimeout(() => {
      onOpenQuote();
    }, 100);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#04060C]/95 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-[#04060C]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => handleLinkClick('/')} className="flex items-center space-x-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-sky-600 text-white font-black text-base flex items-center justify-center shadow-md shadow-sky-600/25 group-hover:shadow-sky-600/40 transition-all">
              TN
            </div>
            <span className="text-lg font-black text-white tracking-tight">
              TechNix <span className="text-sky-400">Africa</span>
            </span>
          </button>

          {/* Desktop Navigation - as specified */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleLinkClick('/')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Home
            </button>
            
            <div className="relative" ref={solutionsRef}>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full mt-2 w-64 rounded-xl bg-[#050811] border border-slate-800 shadow-xl">
                  <div className="p-2">
                    <button
                      onClick={() => handleLinkClick('/solutions/digital-presence')}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-900/60 transition-colors"
                    >
                      Digital Presence
                    </button>
                    <button
                      onClick={() => handleLinkClick('/solutions/business-systems')}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-900/60 transition-colors"
                    >
                      Business Systems & Data
                    </button>
                    <button
                      onClick={() => handleLinkClick('/solutions/it-support')}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-900/60 transition-colors"
                    >
                      IT Operations & Support
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => handleLinkClick('/our-work')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Our Work
            </button>
            <button onClick={() => handleLinkClick('/academy')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Academy
            </button>
            <button onClick={() => handleLinkClick('/about')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              About
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenITRescue}
              className="px-3 py-2 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              IT Rescue
            </button>
            <button
              onClick={handleWhatsApp}
              className="p-2.5 rounded-lg bg-slate-900/60 border border-white/10 hover:bg-slate-800/80 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
            </button>
            <button
              onClick={handleDiscussProject}
              className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm rounded-lg transition-all flex items-center gap-2 shadow-sm shadow-sky-600/20"
            >
              Discuss a Project <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-900/60 border border-white/10"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#04060C] border-t border-white/5">
          <div className="px-4 py-3 space-y-2">
            <button onClick={() => handleLinkClick('/')} className="w-full text-left py-2 text-sm text-slate-300">Home</button>
            <button onClick={() => handleLinkClick('/solutions')} className="w-full text-left py-2 text-sm text-slate-300">Solutions</button>
            <button onClick={() => handleLinkClick('/solutions/digital-presence')} className="w-full text-left py-2 pl-4 text-sm text-slate-400">Digital Presence</button>
            <button onClick={() => handleLinkClick('/solutions/business-systems')} className="w-full text-left py-2 pl-4 text-sm text-slate-400">Business Systems & Data</button>
            <button onClick={() => handleLinkClick('/solutions/it-support')} className="w-full text-left py-2 pl-4 text-sm text-slate-400">IT Operations & Support</button>
            <button onClick={() => handleLinkClick('/our-work')} className="w-full text-left py-2 text-sm text-slate-300">Our Work</button>
            <button onClick={() => handleLinkClick('/academy')} className="w-full text-left py-2 text-sm text-slate-300">Academy</button>
            <button onClick={() => handleLinkClick('/about')} className="w-full text-left py-2 text-sm text-slate-300">About</button>
            <div className="pt-3 space-y-2">
              <button
                onClick={handleDiscussProject}
                className="w-full py-2.5 bg-sky-600 text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2"
              >
                Discuss a Project <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onOpenITRescue}
                className="w-full py-2.5 bg-slate-900 text-rose-400 font-semibold text-sm rounded-lg border border-slate-700 flex items-center justify-center gap-2"
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                IT Rescue
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
