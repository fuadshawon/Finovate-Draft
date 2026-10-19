import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';
import { INSIGHTS } from '../data/content.ts';
import { InsightArticle } from '../types.ts';

interface InsightsSectionProps {
  onReadArticle: (article: InsightArticle) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onReadArticle }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F8FAF9]" id="insights-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#3F7A74] mb-2">
              INSIGHTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2D2B] tracking-tight">
              Tax news explained in plain English.
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onReadArticle(INSIGHTS[0])}
            className="text-xs sm:text-sm font-semibold text-[#0C2D2B] hover:text-[#3F7A74] flex items-center gap-1 cursor-pointer"
          >
            <span>View all articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INSIGHTS.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-[#3F7A74]/50 hover:shadow-xs transition-all duration-200"
            >
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#3F7A74] mb-2">
                  {art.category}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">{art.readTime}</span>
                <button
                  type="button"
                  onClick={() => onReadArticle(art)}
                  className="text-xs font-bold text-[#0C2D2B] hover:text-[#3F7A74] flex items-center gap-1 cursor-pointer"
                >
                  <span>Read article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription Box (from Concept 3 - Page 3) */}
        <div className="bg-[#0C2D2B] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Never miss a tax deadline or rule change.
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Short, useful updates for business owners and landlords. Unsubscribe any time.
            </p>
          </div>

          <div className="w-full md:w-auto min-w-[320px]">
            {subscribed ? (
              <div className="bg-[#144441] border border-[#235F5B] rounded-xl px-4 py-3 flex items-center gap-2 text-xs text-white">
                <CheckCircle2 className="w-4 h-4 text-[#E5A853]" />
                <span>You're subscribed! We'll keep you ahead of HMRC deadlines.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Your email address"
                  className="px-4 py-2.5 rounded-xl bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#E5A853] flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#E5A853] hover:bg-[#D99436] text-[#1A1813] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer active:scale-[0.98] whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
            {error && <p className="text-[11px] text-red-300 mt-1">{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};
