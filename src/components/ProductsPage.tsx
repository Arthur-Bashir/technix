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
  Workflow,
  Cpu,
  Layers,
  Zap,
  CheckCircle2
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

  const getProductCode = (id: string) => {
    switch (id) {
      case 'business-websites': return 'MOD-01';
      case 'business-email': return 'MOD-02';
      case 'hosting-domains': return 'MOD-03';
      case 'it-rescue': return 'MOD-04';
      case 'technix-care': return 'MOD-05';
      case 'software-solutions': return 'MOD-06';
      case 'technix-academy': return 'MOD-07';
      case 'digital-health-check': return 'MOD-08';
      default: return 'MOD-SYS';
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
    { id: 'all', label: 'All 8 Deployable Modules' },
    { id: 'web', label: 'Web & Email Presence' },
    { id: 'support', label: 'IT Support & SLAs' },
    { id: 'software', label: 'Custom Systems & Portals' },
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
    <section id="products-catalog" className="py-24 bg-[#030712] text-white relative border-b border-slate-800/80">
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1.5 text-xs font-mono text-sky-400 shadow-md">
            <Layers className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">Deployable Technology Modules</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Commercial Digital Systems <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-400 via-blue-200 to-emerald-400 bg-clip-text text-transparent">
              Engineered for Immediate Deployment
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Each module is built around a proven commercial workflow: transparent Malawi Kwacha pricing, clear engineering milestones, and dedicated local SLA support.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  activeFilter === tab.id
                    ? 'bg-sky-600 text-white border-sky-400 shadow-lg shadow-sky-600/30'
                    : 'bg-slate-900/80 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white'
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
            const code = getProductCode(product.id);
            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800/90 hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Icon, Code & Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-11 h-11 rounded-xl bg-sky-950/80 border border-sky-800/40 text-sky-400 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors shadow-inner">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
                        {code}
                      </span>
                    </div>

                    {product.startingPrice ? (
                      <div className="text-right">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                          Starting From
                        </span>
                        <span className="text-xs font-mono font-extrabold text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2.5 py-1 rounded-md inline-block">
                          {product.startingPrice}
                        </span>
                      </div>
                    ) : (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 px-2.5 py-1 rounded-md border border-sky-800/40">
                        Milestone Quote
                      </span>
                    )}
                  </div>

                  {/* Product Title & Short Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {product.explanation}
                  </p>

                  {/* Best For Box */}
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 mb-4 text-xs text-slate-300">
                    <span className="font-bold text-sky-400">Target Segment: </span>
                    {product.whoItIsFor}
                  </div>

                  {/* Key Capabilities */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      Architectural Deliverables:
                    </span>
                    {product.whatsIncluded.slice(0, 4).map((inc, iIdx) => (
                      <div key={iIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => handlePrimaryAction(product)}
                    className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-all cursor-pointer shadow-md shadow-sky-600/20 border border-sky-400/30"
                  >
                    <span>{product.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleWhatsApp(product)}
                    className="w-full py-2 bg-slate-900/90 hover:bg-slate-800 text-emerald-400 border border-slate-700/80 hover:border-emerald-500/50 text-xs font-semibold rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Inquiry</span>
                  </button>

                  <button
                    onClick={() => onSelectSection(product.targetSection)}
                    className="w-full py-1 text-[11px] text-slate-400 hover:text-sky-300 font-semibold flex items-center justify-center space-x-1 cursor-pointer transition-colors"
                  >
                    <span>Inspect Layer Specifications</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Engineering Lifecycle Interactive Journey */}
        <div className="glass-panel-elevated rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-10 space-y-3">
            <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-400/30 rounded-full px-3.5 py-1 text-xs font-mono font-bold text-sky-300">
              <Workflow className="w-3.5 h-3.5 text-sky-400" />
              <span>Commercial Engineering Lifecycle</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              A Predictable Journey from Initial Audit to Long-Term Scale
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We eliminate friction at every milestone. From initial scoping to live deployment, staff training, and proactive TechNix Care SLA maintenance, you work directly with accountable engineers in Blantyre & Lilongwe.
            </p>
          </div>

          {/* 9 Funnel Steps Scrollable Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2.5 mb-8">
            {SALES_FUNNEL_STEPS.map((step) => {
              const isSelected = expandedFunnelStep === step.step;
              return (
                <button
                  key={step.step}
                  onClick={() => setExpandedFunnelStep(step.step)}
                  className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-sky-600 text-white border-sky-400 shadow-lg shadow-sky-600/30 scale-102'
                      : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block mb-1 ${
                    isSelected ? 'text-sky-200' : 'text-slate-400'
                  }`}>
                    PHASE 0{step.step}
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
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-sky-500 text-white">
                      Stage 0{current.step}: {current.name}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Milestone {current.step} of 9</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">{current.desc}</h4>
                  <div className="flex items-center space-x-2 text-xs text-emerald-400 pt-1">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span><strong>Transparent Milestone Commitment:</strong> Itemized scope in Malawi Kwacha, written agreement, no surprise costs.</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
                  <button
                    onClick={() => onOpenQuote()}
                    className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-sky-600/30 transition-all cursor-pointer border border-sky-400/40 text-center"
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
                    className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
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
