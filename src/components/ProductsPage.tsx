import React, { useState } from 'react';
import { 
  Globe, 
  Mail, 
  Server, 
  AlertTriangle, 
  ShieldCheck, 
  Code2, 
  GraduationCap, 
  Sparkles,
  ArrowRight, 
  MessageSquare, 
  Check, 
  Users, 
  ChevronRight,
  Workflow
} from 'lucide-react';
import { COMMERCIAL_PRODUCTS, COMPANY_INFO, SALES_FUNNEL_STEPS } from '../data/technixData';
import { CommercialProduct } from '../types';

interface ProductsPageProps {
  onOpenQuote: (service?: string) => void;
  onOpenITRescue: () => void;
  onOpenHealthCheck: () => void;
  onSelectSection: (sectionId: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onOpenQuote,
  onOpenITRescue,
  onOpenHealthCheck,
  onSelectSection,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [expandedFunnelStep, setExpandedFunnelStep] = useState<number>(4);

  const getProductIcon = (id: string) => {
    switch (id) {
      case 'business-websites': return Globe;
      case 'business-email': return Mail;
      case 'hosting-domains': return Server;
      case 'it-rescue': return AlertTriangle;
      case 'technix-care': return ShieldCheck;
      case 'software-solutions': return Code2;
      case 'technix-academy': return GraduationCap;
      case 'digital-health-check': return Sparkles;
      default: return Globe;
    }
  };

  const handleWhatsApp = (product: CommercialProduct) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(product.whatsAppMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePrimaryAction = (product: CommercialProduct) => {
    if (product.id === 'it-rescue') {
      onOpenITRescue();
    } else if (product.id === 'digital-health-check') {
      onOpenHealthCheck();
    } else {
      onOpenQuote(product.name);
    }
  };

  const filterTabs = [
    { id: 'all', label: 'All 8 Products' },
    { id: 'web', label: 'Web & Email' },
    { id: 'support', label: 'IT Support & Care' },
    { id: 'software', label: 'Software & Systems' },
    { id: 'education', label: 'Academy & Audits' },
  ];

  const filteredProducts = COMMERCIAL_PRODUCTS.filter((prod) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'web') return ['business-websites', 'business-email', 'hosting-domains'].includes(prod.id);
    if (activeFilter === 'support') return ['it-rescue', 'technix-care'].includes(prod.id);
    if (activeFilter === 'software') return ['software-solutions'].includes(prod.id);
    if (activeFilter === 'education') return ['technix-academy', 'digital-health-check'].includes(prod.id);
    return true;
  });

  return (
    <section id="products-catalog" className="py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-bold text-blue-700">
            <Globe className="w-3.5 h-3.5" />
            <span>Commercial Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Solutions You Can Start With
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore our primary commercial offerings. Each solution is engineered to solve a specific business problem with transparent pricing, clear deliverables, and responsive local support.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Concise Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {filteredProducts.map((product) => {
            const Icon = getProductIcon(product.id);
            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Icon & Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    {product.startingPrice ? (
                      <div className="text-right">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                          Starting From
                        </span>
                        <span className="text-xs font-extrabold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md inline-block">
                          {product.startingPrice}
                        </span>
                      </div>
                    ) : (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                        Request Quote
                      </span>
                    )}
                  </div>

                  {/* Product Title & Short Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{product.explanation}</p>

                  {/* Who It Is For */}
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 mb-4 text-xs text-slate-600">
                    <span className="font-bold text-slate-800">Best for: </span>
                    {product.whoItIsFor}
                  </div>

                  {/* 3-4 Key Features */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Key Capabilities:
                    </span>
                    {product.whatsIncluded.slice(0, 4).map((inc, iIdx) => (
                      <div key={iIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handlePrimaryAction(product)}
                    className="w-full py-2.5 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <span>{product.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleWhatsApp(product)}
                    className="w-full py-2 bg-emerald-50/70 hover:bg-emerald-100/70 text-emerald-800 border border-emerald-200 text-xs font-semibold rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Inquire</span>
                  </button>

                  <button
                    onClick={() => onSelectSection(product.targetSection)}
                    className="w-full py-1 text-[11px] text-slate-500 hover:text-blue-600 font-semibold flex items-center justify-center space-x-1 cursor-pointer transition-colors"
                  >
                    <span>View Full Details & Options</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Sales Funnel Interactive Journey */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-10 space-y-3">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-3.5 py-1 text-xs font-bold text-blue-300">
              <Workflow className="w-3.5 h-3.5 text-blue-400" />
              <span>The TechNix Commercial Lifecycle</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              A Transparent, Predictable Journey from First Chat to Long-Term Scale
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We eliminate friction at every step. From the moment you contact us to deployment, ongoing SLA support, and future expansion, your organization works with accountable Malawian engineers.
            </p>
          </div>

          {/* 9 Funnel Steps Scrollable Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3 mb-8">
            {SALES_FUNNEL_STEPS.map((step) => {
              const isSelected = expandedFunnelStep === step.step;
              return (
                <button
                  key={step.step}
                  onClick={() => setExpandedFunnelStep(step.step)}
                  className={`p-3 rounded-2xl text-left transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-400 shadow-lg scale-105'
                      : 'bg-slate-800/70 text-slate-300 border-slate-700/80 hover:bg-slate-800'
                  }`}
                >
                  <span className={`text-[10px] font-black uppercase tracking-wider block mb-1 ${
                    isSelected ? 'text-blue-100' : 'text-slate-400'
                  }`}>
                    0{step.step}
                  </span>
                  <span className="text-xs font-bold block leading-tight">{step.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Funnel Stage Detail Box */}
          {(() => {
            const current = SALES_FUNNEL_STEPS.find((s) => s.step === expandedFunnelStep) || SALES_FUNNEL_STEPS[3];
            return (
              <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-black uppercase px-2.5 py-1 rounded-md bg-blue-500 text-white">
                      Stage 0{current.step}: {current.name}
                    </span>
                    <span className="text-xs text-slate-400">Step {current.step} of 9</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">{current.desc}</h4>
                  <div className="flex items-center space-x-2 text-xs text-emerald-400 pt-1">
                    <Check className="w-4 h-4" />
                    <span><strong>Transparent Milestone Commitment:</strong> Clear deliverables and prompt communication guaranteed.</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
                  <button
                    onClick={() => onOpenQuote()}
                    className="px-6 py-3 bg-white text-slate-950 hover:bg-slate-100 font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
                  >
                    Start: Request a Quote
                  </button>
                  <button
                    onClick={() => {
                      const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(
                        'Hello TechNix, I would like to learn more about how you work with clients from quote to deployment.'
                      )}`;
                      window.open(url, '_blank', 'noopener,noreferrer');
                    }}
                    className="px-5 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Ask on WhatsApp</span>
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};
