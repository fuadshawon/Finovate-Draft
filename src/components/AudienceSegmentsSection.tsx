import React from 'react';
import { Briefcase, Building2, Home, TrendingUp, ArrowRight } from 'lucide-react';
import { AUDIENCE_SEGMENTS, HOW_IT_WORKS } from '../data/content.ts';

interface AudienceSegmentsSectionProps {
  onBookClick: () => void;
}

export const AudienceSegmentsSection: React.FC<AudienceSegmentsSectionProps> = ({ onBookClick }) => {
  const getSegmentIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Briefcase className="w-5 h-5 text-[#3F7A74]" />;
      case 1:
        return <Building2 className="w-5 h-5 text-[#3F7A74]" />;
      case 2:
        return <Home className="w-5 h-5 text-[#3F7A74]" />;
      case 3:
        return <TrendingUp className="w-5 h-5 text-[#3F7A74]" />;
      default:
        return <Briefcase className="w-5 h-5 text-[#3F7A74]" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* How It Works (from Concept 3 - Page 2) */}
        <div>
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-[#3F7A74] mb-2">
              HOW IT WORKS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2D2B] tracking-tight">
              Getting started is simple, and starts with a conversation.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step) => (
              <div
                key={step.step}
                className="bg-[#F8FAF9] rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#0C2D2B] text-white font-bold flex items-center justify-center text-sm mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button
              onClick={onBookClick}
              className="bg-[#E5A853] hover:bg-[#D99436] text-[#1A1813] font-bold text-sm px-6 py-3 rounded-full transition-all shadow-xs cursor-pointer active:scale-[0.98]"
            >
              Start with a free consultation
            </button>
          </div>
        </div>

        {/* Built for the people who run small businesses (from Concept 3 - Page 2) */}
        <div className="pt-10 border-t border-slate-100">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2D2B] tracking-tight">
              Built for the people who run small businesses.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCE_SEGMENTS.map((seg, idx) => (
              <div
                key={seg.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#3F7A74]/50 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3F1] flex items-center justify-center mb-4">
                    {getSegmentIcon(idx)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {seg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {seg.description}
                  </p>
                </div>
                <ul className="space-y-1.5 pt-3 border-t border-slate-100">
                  {seg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-[11px] text-slate-500 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#3F7A74]"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
