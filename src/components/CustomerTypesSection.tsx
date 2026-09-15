import React, { useState } from 'react';
import { 
  Building2, 
  School, 
  HeartHandshake, 
  Users, 
  Briefcase, 
  Landmark, 
  Check, 
  AlertCircle, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { CUSTOMER_TYPES, COMPANY_INFO } from '../data/technixData';

interface CustomerTypesSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const CustomerTypesSection: React.FC<CustomerTypesSectionProps> = ({ onOpenQuote }) => {
  const [selectedTypeId, setSelectedTypeId] = useState<string>(CUSTOMER_TYPES[0].id);

  const activeCustomer = CUSTOMER_TYPES.find((c) => c.id === selectedTypeId) || CUSTOMER_TYPES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'School': return School;
      case 'HeartHandshake': return HeartHandshake;
      case 'Users': return Users;
      case 'Briefcase': return Briefcase;
      case 'Landmark': return Landmark;
      default: return Building2;
    }
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
      `Hello TechNix, I am reaching out on behalf of a ${activeCustomer.title} to discuss your tailored technology solutions.`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="industries" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1 text-xs font-bold text-blue-700">
            <Users className="w-3.5 h-3.5" />
            <span>Tailored Solutions by Sector</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built for Your Specific Operational Reality
          </h2>
          <p className="text-lg text-slate-600">
            Every organisation has different pressures. Explore how TechNix configures technology specifically for your sector.
          </p>
        </div>

        {/* Sector Tabs Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {CUSTOMER_TYPES.map((cust) => {
            const Icon = getIcon(cust.iconName);
            const isSelected = cust.id === selectedTypeId;
            return (
              <button
                key={cust.id}
                onClick={() => setSelectedTypeId(cust.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-950/20 scale-[1.03]'
                    : 'bg-slate-50 text-slate-700 border-slate-200/90 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 ${
                  isSelected ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 shadow-xs'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold leading-tight line-clamp-2">
                  {cust.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Sector Detailed Blueprint */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-xs transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Sector Challenges vs Solutions */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-block text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                  Selected Industry Focus
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Technology Solutions for {activeCustomer.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {activeCustomer.subtitle}
                </p>
              </div>

              {/* The Common Pain Points */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs font-bold text-red-700 uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  <span>Common Challenges We Solve in This Sector:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCustomer.painPoints.map((pain, pIdx) => (
                    <div key={pIdx} className="p-3 bg-red-50/70 border border-red-200/70 rounded-xl text-xs text-red-900 flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                      <span>{pain}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Recommended Solutions */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Recommended TechNix Solutions:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCustomer.recommendedSolutions.map((sol, sIdx) => (
                    <div key={sIdx} className="p-3 bg-emerald-50/70 border border-emerald-200/70 rounded-xl text-xs text-emerald-950 font-medium flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Direct Action Card for Sector */}
            <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-md space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md">
                  Ready to Modernise?
                </span>
                <h4 className="text-xl font-bold text-slate-900">
                  Get a Proposal for Your {activeCustomer.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We schedule a brief, practical 20-minute discussion to understand your staff workflow, existing equipment, and budget.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onOpenQuote(`${activeCustomer.title} Solution Package`)}
                  className="w-full py-3.5 px-4 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <span>{activeCustomer.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="w-full py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-semibold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discuss via WhatsApp</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-500 text-center border-t border-slate-100 pt-3">
                No technical background needed. We speak plain business English.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
