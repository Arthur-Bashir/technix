import React from 'react';
import { Quote, Star, CheckCircle, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/technixData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1 text-xs font-bold text-emerald-800">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Proven Reliability & Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Our Clients Say About Working With Us
          </h2>
          <p className="text-lg text-slate-600">
            We measure our success by the operational peace of mind and business growth we deliver to our partners.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 lg:p-9 flex flex-col justify-between hover:shadow-lg transition-shadow relative"
            >
              <div>
                {/* 5 star rating */}
                <div className="flex items-center space-x-1 text-amber-500 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-blue-200 mb-3" />

                <p className="text-sm sm:text-base text-slate-800 leading-relaxed italic mb-6">
                  &quot;{item.quote}&quot;
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.author}</h4>
                  <p className="text-xs text-slate-600">{item.role}</p>
                  <p className="text-xs font-semibold text-blue-700">{item.organisation}</p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-semibold uppercase text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded block mb-1">
                    {item.service}
                  </span>
                  <span className="text-[11px] text-slate-500 flex items-center justify-end space-x-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
