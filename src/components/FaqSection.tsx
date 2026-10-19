import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/content.ts';

interface FaqSectionProps {
  onAskDirectlyClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onAskDirectlyClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-white" id="faq-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column Header (from Concept 2) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-[#3F7A74]">
              QUESTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2D2B] tracking-tight">
              Good questions to ask before you start.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Cannot see your question here? Ask us directly. We are happy to talk it through.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onAskDirectlyClick}
                className="bg-[#0C2D2B] hover:bg-[#16403D] text-white text-xs sm:text-sm font-semibold py-2.5 px-5 rounded-full transition-colors cursor-pointer active:scale-[0.98] inline-flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#E5A853]" />
                <span>Ask a question</span>
              </button>
            </div>
          </div>

          {/* Right Column Accordions */}
          <div className="lg:col-span-7 space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 overflow-hidden bg-white transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#3F7A74]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#FBFDFC]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
