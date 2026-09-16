import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Exact contextual pre-filled messages requested by TechNix Africa
  const quickMessages = [
    { 
      label: 'Business Website', 
      text: 'Hello TechNix, I am interested in a business website.' 
    },
    { 
      label: 'IT Support & Emergency', 
      text: 'Hello TechNix, I need IT support.' 
    },
    { 
      label: 'Custom Software Project', 
      text: 'Hello TechNix, I would like to discuss a software project.' 
    },
    { 
      label: 'TechNix Care Monthly Retainer', 
      text: 'Hello TechNix, I am interested in TechNix Care.' 
    },
    { 
      label: 'Professional Business Email', 
      text: 'Hello TechNix, I want to set up professional business email accounts.' 
    },
    { 
      label: 'TechNix Academy Training', 
      text: 'Hello TechNix, I want to inquire about upcoming training courses.' 
    },
  ];

  const handleLaunchWhatsApp = (text: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Contextual Pre-Filled Message Drawer */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="p-4 bg-emerald-600 text-white flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                TN
              </div>
              <div>
                <h4 className="font-bold text-sm leading-none">Chat with TechNix Africa</h4>
                <p className="text-[11px] text-emerald-100 mt-0.5">Online & ready to assist</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-emerald-200 hover:text-white rounded-md cursor-pointer"
              aria-label="Close WhatsApp options"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3 bg-slate-50">
            <p className="text-xs text-slate-600">
              Select what you need to chat directly with a TechNix technical advisor:
            </p>

            <div className="space-y-1.5">
              {quickMessages.map((qm, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLaunchWhatsApp(qm.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 text-xs font-semibold text-slate-800 border border-slate-200 hover:border-emerald-300 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span className="line-clamp-1">{qm.label}</span>
                  <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0 ml-2" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200">
              <button
                onClick={() => handleLaunchWhatsApp('Hello TechNix, I would like to speak with a representative about your technology services.')}
                className="w-full py-2 px-3 text-center text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer"
              >
                Other General Inquiry
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl shadow-emerald-900/20 hover:scale-105 transition-all duration-200 cursor-pointer group"
        aria-label="Chat with TechNix Africa on WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-white text-emerald-600" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
        </div>
        <span className="font-bold text-sm tracking-wide hidden sm:inline">WhatsApp</span>
      </button>
    </div>
  );
};
