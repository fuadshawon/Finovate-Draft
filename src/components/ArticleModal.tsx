import React from 'react';
import { X, Calendar, Clock, BookOpen, ArrowRight } from 'lucide-react';
import { InsightArticle } from '../types.ts';

interface ArticleModalProps {
  article: InsightArticle;
  onClose: () => void;
  onBookClick: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onBookClick }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-semibold text-[#3F7A74]">
            <span className="uppercase tracking-wider">{article.category}</span>
            <span>·</span>
            <span>{article.publishDate}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C2D2B] tracking-tight">
            {article.title}
          </h2>

          <div className="prose text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 pt-2">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Lead conversion banner inside article */}
          <div className="mt-8 p-5 bg-[#EBF3F1] rounded-2xl border border-[#C5DDD8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-[#0C2D2B]">
                Have questions about how this applies to your business?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Speak directly with Tamima Chowdhury AFA MIPA for 30 minutes free of charge.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookClick();
              }}
              className="shrink-0 bg-[#E5A853] hover:bg-[#D99436] text-[#1A1813] font-bold text-xs px-4 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              Book consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
