import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { label: 'Business Website', text: 'Hello TechNix, I am interested in a business website.' },
    { label: 'IT Support Emergency', text: 'Hello TechNix, I need IT support. Something is not working.' },
    { label: 'Professional Email', text: 'Hello TechNix, I want to set up professional business email accounts.' },
    { label: 'Custom Software Project', text: 'Hello TechNix, I would like to discuss a custom software project.' },
    { label: 'TechNix Academy', text: 'Hello TechNix, I want to inquire about upcoming training courses.' },
  ];

  const handleLaunchWhatsApp = (text: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick context bubble popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-emerald-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
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
              className="p-1 text-emerald-200 hover:text-white rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3 bg-slate-50">
            <p className="text-xs text-slate-600">
              Welcome! What can we help your business or organisation with today? Tap an option to start WhatsApp instantly:
            </p>

            <div className="space-y-1.5">
              {quickMessages.map((qm, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLaunchWhatsApp(qm.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 text-xs font-semibold text-slate-800 border border-slate-200 hover:border-emerald-300 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span>{qm.label}</span>
                  <Send className="w-3 h-3 text-slate-400 group-hover:text-emerald-600 shrink-0 ml-2" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200">
              <button
                onClick={() => handleLaunchWhatsApp('Hello TechNix Africa, I would like to speak with a representative.')}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Open General WhatsApp Chat</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="persistent-whatsapp-button"
        aria-label="Contact TechNix on WhatsApp"
        className="group flex items-center space-x-2.5 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 cursor-pointer"
      >
        <MessageSquare className="w-6 h-6 fill-white text-emerald-600" />
        <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider">
          Chat on WhatsApp
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping absolute top-1 right-1 sm:hidden" />
      </button>
    </div>
  );
};
