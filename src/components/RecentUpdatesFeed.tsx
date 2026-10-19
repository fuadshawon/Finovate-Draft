import React, { useState } from 'react';
import {
  Bell,
  RefreshCw,
  Share2,
  Heart,
  ExternalLink,
  ShieldCheck,
  Globe,
  Calendar,
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react';
import { RECENT_UPDATES, SocialUpdate } from '../data/content.ts';

interface RecentUpdatesFeedProps {
  onDiscussUpdate: (updateTitle: string) => void;
  onViewArticles: () => void;
  onShowToast: (msg: string) => void;
}

export const RecentUpdatesFeed: React.FC<RecentUpdatesFeedProps> = ({
  onDiscussUpdate,
  onViewArticles,
  onShowToast,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [likesMap, setLikesMap] = useState<{ [id: string]: { count: number; liked: boolean } }>({
    'upd-1': { count: 38, liked: false },
    'upd-2': { count: 52, liked: false },
    'upd-3': { count: 64, liked: false },
    'upd-4': { count: 45, liked: false },
    'upd-5': { count: 73, liked: false },
    'upd-6': { count: 29, liked: false },
  });

  const categories = ['All', 'HMRC & Regulatory', 'Tax Tips', 'E-Commerce', 'Practice News'];

  const filteredUpdates = selectedCategory === 'All'
    ? RECENT_UPDATES
    : RECENT_UPDATES.filter((u) => u.category === selectedCategory);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      onShowToast('Feed refreshed with the latest UK tax and regulatory updates!');
    }, 600);
  };

  const handleLike = (id: string) => {
    setLikesMap((prev) => {
      const current = prev[id] || { count: 0, liked: false };
      const nextLiked = !current.liked;
      return {
        ...prev,
        [id]: {
          count: nextLiked ? current.count + 1 : current.count - 1,
          liked: nextLiked,
        },
      };
    });
  };

  const handleShare = (update: SocialUpdate) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`Finovate Update: ${update.title} - Read more at https://www.finovate-accountancy.co.uk`);
    }
    onShowToast(`Link to "${update.title.substring(0, 30)}..." copied!`);
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'HMRC Alert':
        return <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />;
      case 'LinkedIn':
        return <span className="text-[10px] font-bold text-sky-700 bg-sky-100 px-1.5 py-0.5 rounded">in</span>;
      case 'E-Commerce':
        return <Globe className="w-3.5 h-3.5 text-[#3F7A74]" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#3F7A74]" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-slate-100" id="latest-updates-feed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header & Feed Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3F7A74] mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3F7A74] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3F7A74]"></span>
              </span>
              <span>LIVE PRACTICE & REGULATORY FEED</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2D2B] tracking-tight">
              Recent Updates & Practice News
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Real-time insights on HMRC compliance, Making Tax Digital, Companies House ACSP verification, and small business tax strategies.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-full border border-slate-200 bg-[#F8FAF9] text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer disabled:opacity-60"
              title="Check for newest updates"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-[#3F7A74]' : ''}`} />
              <span>{isRefreshing ? 'Refreshing...' : 'Refresh feed'}</span>
            </button>

            <button
              type="button"
              onClick={onViewArticles}
              className="text-xs font-bold text-[#0C2D2B] hover:text-[#3F7A74] flex items-center gap-1 cursor-pointer"
            >
              <span>View tax guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#0C2D2B] text-white font-semibold shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUpdates.map((item) => {
            const likeState = likesMap[item.id] || { count: 12, liked: false };
            return (
              <div
                key={item.id}
                className="bg-[#F8FAF9] rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-[#3F7A74]/50 hover:shadow-xs transition-all duration-200 group"
              >
                <div>
                  {/* Top metadata strip (clean unboxed text per constitution) */}
                  <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-200/60 mb-3">
                    <div className="flex items-center gap-1.5 font-medium">
                      {getSourceIcon(item.source)}
                      <span className="text-slate-800 font-semibold">{item.source}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.timestamp}</span>
                    </div>

                    <span className="text-[11px] font-semibold text-[#3F7A74]">
                      {item.badgeText || item.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0C2D2B] transition-colors leading-snug mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.snippet}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  {/* Action to book consultation with this topic */}
                  <button
                    type="button"
                    onClick={() => onDiscussUpdate(item.title)}
                    className="text-xs font-bold text-[#3F7A74] hover:text-[#0C2D2B] inline-flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Discuss in free consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Social reactions */}
                  <div className="flex items-center gap-2.5 text-xs text-slate-500">
                    <button
                      type="button"
                      onClick={() => handleLike(item.id)}
                      className={`flex items-center gap-1 hover:text-red-600 transition-colors cursor-pointer ${
                        likeState.liked ? 'text-red-500 font-semibold' : ''
                      }`}
                      aria-label="Like update"
                    >
                      <Heart className={`w-3.5 h-3.5 ${likeState.liked ? 'fill-red-500' : ''}`} />
                      <span className="tabular-nums">{likeState.count}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleShare(item)}
                      className="hover:text-slate-900 transition-colors cursor-pointer"
                      title="Share this update"
                      aria-label="Share update"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live ACSP Verification Callout Banner (directly from flyer!) */}
        <div className="bg-[#0C2D2B] rounded-3xl p-6 sm:p-8 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#3F7A74] text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#E5A853]" />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E5A853] uppercase tracking-wider">
                <span>NEW UK REGULATION · MANDATORY FOR ALL DIRECTORS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                FREE Companies House Identity Verification for all clients
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Finovate is officially registered with Companies House as an Authorised Corporate Service Provider (ACSP). We verify your identity with zero hassle, keeping your company fully compliant under the Economic Crime and Corporate Transparency Act.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onDiscussUpdate('Companies House ACSP Identity Verification')}
            className="shrink-0 bg-[#E5A853] hover:bg-[#D99436] text-[#1A1813] font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-xs cursor-pointer active:scale-[0.98] whitespace-nowrap"
          >
            Claim free verification
          </button>
        </div>
      </div>
    </section>
  );
};
