import React from 'react';
import { Quote } from 'lucide-react';
import { CLIENT_STORIES } from '../data/content.ts';

export const ClientStoriesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#3F7A74] mb-2">
            CLIENT STORIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2D2B] tracking-tight">
            What clients say about working with us.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLIENT_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-[#F8FAF9] rounded-2xl border border-slate-200/90 p-7 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-[#3F7A74]/40 mb-4" />
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed italic mb-6">
                  "{story.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60">
                <div className="text-sm font-bold text-slate-900">
                  {story.clientName}
                </div>
                <div className="text-xs text-slate-500">
                  {story.businessType} · {story.location}
                </div>
                <div className="mt-2 inline-flex items-center text-[11px] font-semibold text-[#3F7A74]">
                  <span>Outcome: {story.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
