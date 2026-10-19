import React from 'react';
import { Calendar, AlertCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { TAX_DEADLINES } from '../data/content.ts';

interface TaxDeadlinesWidgetProps {
  onBookClick: () => void;
}

export const TaxDeadlinesWidget: React.FC<TaxDeadlinesWidgetProps> = ({ onBookClick }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#3F7A74] flex items-center gap-1.5 mb-1">
            <Clock className="w-3.5 h-3.5" />
            <span>UK Statutory Compliance Tracker</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Key UK Tax Deadlines You Cannot Afford to Miss
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Automatic HMRC late-filing penalties start from £100. We ensure our clients file weeks ahead.
          </p>
        </div>

        <button
          type="button"
          onClick={onBookClick}
          className="shrink-0 bg-[#0C2D2B] hover:bg-[#16403D] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
        >
          Protect your business
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TAX_DEADLINES.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-[#F8FAF9] border border-slate-200/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-bold text-[#3F7A74] uppercase tracking-wider">
                  {item.tag}
                </span>
                <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  {item.urgency}
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                {item.name}
              </h4>
              <p className="text-xs font-bold text-[#0C2D2B] mb-2">
                Deadline: {item.date}
              </p>
              <p className="text-[11px] text-slate-500">
                {item.tip}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
