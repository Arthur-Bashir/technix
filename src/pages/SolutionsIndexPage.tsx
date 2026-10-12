import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const SolutionsIndexPage: React.FC = () => {
  return (
    <section className="py-24 bg-[#050811] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">Solutions</h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Practical solutions that help your organisation work smarter and grow with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 border-t border-slate-800 pt-6">
            <h2 className="text-xl font-bold text-white">Digital Presence</h2>
            <p className="text-sm text-slate-300">Websites, domains and professional email to help customers find and contact you.</p>
            <Link to="/solutions/digital-presence" className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300">
              Explore <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4 border-t border-slate-800 pt-6">
            <h2 className="text-xl font-bold text-white">Business Systems & Data</h2>
            <p className="text-sm text-slate-300">Custom software, databases, workflow improvement and reporting.</p>
            <Link to="/solutions/business-systems" className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300">
              Explore <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4 border-t border-slate-800 pt-6">
            <h2 className="text-xl font-bold text-white">IT Operations & Support</h2>
            <p className="text-sm text-slate-300">IT support, maintenance, hosting and ongoing care.</p>
            <Link to="/solutions/it-support" className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300">
              Explore <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
