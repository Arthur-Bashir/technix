import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Terminal,
  Radio
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    phone: '',
    email: '',
    service: initialService || 'Business Website',
    preferredContact: 'WhatsApp',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const servicesList = [
    'Business Starter Website (MK 199,000)',
    'Business Growth Website (MK 349,000)',
    'Enterprise Corporate Website (MK 599,000)',
    'Professional Business Domain Email',
    'High-Speed SSD Web Hosting & .mw Domain',
    'TechNix Care Starter IT Plan (MK 50,000/mo)',
    'TechNix Care Business IT Plan (MK 100,000/mo)',
    'TechNix Care Enterprise IT Plan (MK 250,000/mo)',
    'Urgent IT Rescue / Breakdown Assistance',
    'Custom Software / School / NGO Portal',
    'TechNix Academy Course Registration',
    'Digital Transformation Assessment',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello TechNix, my name is ${formData.name || 'a prospective client'} from ${
      formData.organisation || 'my organisation'
    }. I am interested in: ${formData.service}. ${formData.message ? `Details: ${formData.message}` : ''}`;
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-[#040814] text-white relative border-b border-slate-800/80">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1 text-xs font-mono text-sky-400 shadow-md">
            <Radio className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span className="font-semibold uppercase tracking-wider">Direct Engagement Terminal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Start a Project or <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-400 via-blue-200 to-emerald-400 bg-clip-text text-transparent">
              Talk Directly with TechNix
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Whether you need a new commercial website, corporate domain inboxes, urgent IT rescue, or custom software architecture — our engineering team in Blantyre & Lilongwe responds promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Regional Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-8 border border-slate-800 space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  OFFICIAL CHANNELS
                </span>
                <h3 className="text-xl font-bold text-white">Direct Communication</h3>
              </div>

              <div className="space-y-4">
                <a
                  href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s/g, '')}`}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-800/40 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors shadow-inner">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Call Direct</span>
                    <span className="text-sm font-mono font-bold text-white group-hover:text-sky-300 transition-colors">
                      {COMPANY_INFO.phonePrimary}
                    </span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent('Hello TechNix, I would like to make an inquiry.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800/40 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-inner">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">WhatsApp Direct</span>
                    <span className="text-sm font-mono font-bold text-emerald-400">
                      Chat with an Engineer
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.emailInfo}`}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-800/40 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors shadow-inner">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Email Inquiries</span>
                    <span className="text-sm font-mono font-bold text-white group-hover:text-sky-300 transition-colors">
                      {COMPANY_INFO.emailInfo}
                    </span>
                  </div>
                </a>
              </div>

              {/* Physical Regional Nodes */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  PHYSICAL OPERATIONS HUBS
                </span>
                
                <div className="text-xs text-slate-300 space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span><strong>Blantyre HQ:</strong> Victoria Avenue / Henderson St Commercial Zone</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Lilongwe Hub:</strong> City Centre Business District / Area 4</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span><strong>Operating Hours:</strong> Mon - Fri 08:00 - 17:00 (Emergency SLAs 24/7)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-elevated rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Transmission Received</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.name || 'valued client'}. Your inquiry has been routed to our technical team. We will contact you via {formData.preferredContact} within 4 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-sky-400 hover:underline pt-2 font-mono"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">Project Scoping & Quotation</h3>
                    <span className="text-[10px] font-mono text-sky-400 bg-sky-950/60 border border-sky-800/40 px-2.5 py-1 rounded-md">
                      RAPID RESPONSE
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono text-slate-400 block mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Chisomo Banda"
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-slate-400 block mb-1">Company / Organisation</label>
                      <input
                        type="text"
                        required
                        value={formData.organisation}
                        onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                        placeholder="e.g. Apex Malawi"
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono text-slate-400 block mb-1">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+265 888 123 456"
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-slate-400 block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="chisomo@company.mw"
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono text-slate-400 block mb-1">Primary Capability Needed</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-sky-500 transition-colors"
                      >
                        {servicesList.map((svc, idx) => (
                          <option key={idx} value={svc} className="bg-slate-900 text-white">
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono text-slate-400 block mb-1">Preferred Response Mode</label>
                      <select
                        value={formData.preferredContact}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-sky-500 transition-colors"
                      >
                        <option value="WhatsApp" className="bg-slate-900 text-white">WhatsApp</option>
                        <option value="Phone Call" className="bg-slate-900 text-white">Phone Call</option>
                        <option value="Email" className="bg-slate-900 text-white">Email</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Brief Description of Need</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you are looking to build, fix, or support..."
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 space-y-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-sky-600/20 transition-all cursor-pointer flex items-center justify-center space-x-2 border border-sky-400/40"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{submitting ? 'Transmitting Request...' : 'Transmit Scoping Request'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Send Directly via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
