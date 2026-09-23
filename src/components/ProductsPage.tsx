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
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { COMMERCIAL_PRODUCTS, COMPANY_INFO } from '../data/technixData';
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
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'support' | 'software' | 'skills'>('all');

  const categories = [
    { id: 'all', label: 'Complete Directory' },
    { id: 'web', label: 'Commercial Web & Email' },
    { id: 'support', label: 'IT Support & Rescue' },
    { id: 'software', label: 'Custom Systems & Portals' },
    { id: 'skills', label: 'Workforce Training' },
  ];

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

  const filteredProducts = COMMERCIAL_PRODUCTS.filter((prod) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'web') return ['business-websites', 'business-email', 'hosting-domains'].includes(prod.id);
    if (activeCategory === 'support') return ['it-rescue', 'technix-care'].includes(prod.id);
    if (activeCategory === 'software') return ['software-solutions'].includes(prod.id);
    if (activeCategory === 'skills') return ['technix-academy', 'digital-health-check'].includes(prod.id);
    return true;
  });

  const handleAction = (product: CommercialProduct) => {
    if (product.id === 'it-rescue') {
      onOpenITRescue();
    } else if (product.id === 'digital-health-check') {
      onOpenHealthCheck();
    } else {
      onSelectSection(product.targetSection);
    }
  };

  return (
    <section id="products-catalog" className="py-20 bg-[#060b17] text-white relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              Commercial Directory
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              All Commercial Services & Operational Modules
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              Quick access to our core business systems, managed support retainers, and workforce training.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                  activeCategory === cat.id
                    ? 'bg-sky-600 text-white border-sky-400'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Row Listing: Non-repetitive, compact, and scannable */}
        <div className="bg-[#090e1a] border border-slate-800 rounded-3xl divide-y divide-slate-800/80 overflow-hidden shadow-xl">
          {filteredProducts.map((product) => {
            const Icon = getProductIcon(product.id);
            return (
              <div
                key={product.id}
                className="p-6 sm:p-7 hover:bg-[#0c1424] transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-6 group"
              >
                <div className="flex items-start space-x-4 max-w-2xl">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                        {product.name}
                      </h3>
                      {product.badge && (
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {product.tagline}
                    </p>

                    <div className="text-[11px] font-mono text-slate-400">
                      Best for: <span className="text-slate-300">{product.whoItIsFor}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 lg:shrink-0 justify-between lg:justify-end">
                  <div className="text-left lg:text-right">
                    <div className="text-xs font-mono font-bold text-emerald-400">
                      {product.startingPrice}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      local kwacha pricing
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleAction(product)}
                      className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center space-x-1 cursor-pointer border border-sky-400/30"
                    >
                      <span>{product.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onSelectSection(product.targetSection)}
                      className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 text-xs transition-colors cursor-pointer"
                      title="Read specifications"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
