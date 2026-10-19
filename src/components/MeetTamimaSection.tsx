import React from 'react';
import { Check, Award, Shield, Clock, Calendar } from 'lucide-react';

interface MeetTamimaSectionProps {
  onBookClick: () => void;
}

export const MeetTamimaSection: React.FC<MeetTamimaSectionProps> = ({ onBookClick }) => {
  return (
    <section className="py-16 sm:py-20 bg-white" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EBF3F1]/70 border border-[#D5E5E1] rounded-3xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Professional Photo Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-md bg-slate-100 aspect-3/4 max-w-md mx-auto">
                <img
                  src="/src/assets/images/tamima_chowdhury_portrait_1792400284563.jpg"
                  alt="Tamima Chowdhury AFA MIPA - Founder & Chartered Accountant at Finovate Accountancy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    // Fallback container in case of load failure
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                {/* Trust overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0C2D2B]">
                    <Award className="w-4 h-4 text-[#E5A853]" />
                    <span>AFA & MIPA Qualified · 10+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column matching Concept design */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#3F7A74] mb-2">
                  MEET YOUR ACCOUNTANT
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2D2B] tracking-tight">
                  Tamima Chowdhury AFA MIPA
                </h2>
                <p className="text-sm font-semibold text-slate-500 mt-1">
                  Founder & Principal Accountant · Finovate Accountancy
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                With over 10 years of experience, Tamima helps small and medium-sized businesses stay compliant, efficient and ready to grow. She specialises in bookkeeping, payroll, tax compliance and financial management.
              </p>

              {/* Three key pillars from concept */}
              <div className="space-y-3 pt-1">
                {[
                  'Personalised advice, never one-size-fits-all',
                  'Long-term relationships built on trust',
                  'Practical solutions that make a real difference',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-800">
                    <div className="w-5 h-5 rounded-full bg-[#3F7A74] text-white flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Regulatory standing and credentials */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <span className="block text-xs font-bold text-slate-900">AFA</span>
                  <span className="text-[11px] text-slate-500">Associate Financial Accountant</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <span className="block text-xs font-bold text-slate-900">MIPA</span>
                  <span className="text-[11px] text-slate-500">Member Public Accountants</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200/80 col-span-2 sm:col-span-1">
                  <span className="block text-xs font-bold text-slate-900">AML Supervised</span>
                  <span className="text-[11px] text-slate-500">UK Regulated Practice</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="bg-[#0C2D2B] hover:bg-[#16403D] text-white font-semibold text-sm sm:text-base py-3 px-6 rounded-full transition-all shadow-xs cursor-pointer flex items-center gap-2 active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4 text-[#E5A853]" />
                  <span>Book a call with Tamima</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
