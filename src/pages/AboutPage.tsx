import React from 'react';
import { MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

export const AboutPage: React.FC = () => {
  return (
    <section className="py-24 bg-[#050811] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">About TechNix</h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            TechNix Africa is a technology partner for growing businesses and organisations in Malawi and across Africa.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Our Approach</h2>
            <p className="text-slate-300">
              We focus on practical technology solutions that solve real business problems. Our priority is delivering solutions that fit your needs, budget, and context.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Why Work With Us</h2>
            <ul className="space-y-3 text-slate-300">
              <li>• Practical experience with organisations across Malawi</li>
              <li>• Clear, straightforward communication</li>
              <li>• Transparent pricing in Malawi Kwacha</li>
              <li>• Local presence and understanding of context</li>
              <li>• Focus on solutions that work in practice</li>
            </ul>
          </div>

          <div className="space-y-4 border-t border-slate-800 pt-8">
            <h2 className="text-2xl font-bold text-white">Contact Information</h2>
            <div className="space-y-2 text-slate-300">
              <p><strong>Email:</strong> {COMPANY_INFO.emailInfo}</p>
              <p><strong>Phone:</strong> {COMPANY_INFO.phonePrimary}</p>
              <p><strong>WhatsApp:</strong> {COMPANY_INFO.whatsAppNumber.replace('265', '+265 ')}</p>
              <p className="flex items-center gap-2 mt-4">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Blantyre & Lilongwe Operations Hubs</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
