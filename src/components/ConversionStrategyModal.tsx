import React from 'react';
import { X, Lightbulb, TrendingUp, CheckCircle, Zap, Shield, Sparkles, Calendar, MessageSquare, Download } from 'lucide-react';

interface ConversionStrategyModalProps {
  onClose: () => void;
}

export const ConversionStrategyModal: React.FC<ConversionStrategyModalProps> = ({ onClose }) => {
  const suggestions = [
    {
      title: '1. Calendly / Booking API Webhook Automation',
      tag: 'Calendar Integration',
      description:
        'When clients book through your Calendly or native scheduler, pass the payload via Webhooks (Zapier/Make) to your CRM (e.g. HubSpot, Notion, or Xero Practice Manager). Automatically send an SMS reminder 2 hours prior to drastically reduce consultation no-shows.',
    },
    {
      title: '2. Free Consultation Call Anchor (No Upfront Pricing Friction)',
      tag: 'Direct Conversion',
      description:
        'By avoiding fixed pricing tables on the website, prospects are motivated to book a free 30-minute consultation call. This allows Tamima to thoroughly assess the client’s exact bookkeeping volume, transaction complexity, and software setup, presenting a tailored proposal and handling payment questions with high closing confidence.',
    },
    {
      title: '3. Dual-Track Lead Funnel (Self-Schedule vs 30-Sec Callback)',
      tag: 'User Friction Reduction',
      description:
        'Not all visitors want to inspect calendar slots. The hero "Request a call back" captures mobile users and busy tradespeople in under 30 seconds, while the full interactive calendar caters to planned appointments.',
    },
    {
      title: '4. Attributable Social Proof & Specific Financial Wins',
      tag: 'Trust Building',
      description:
        'Highlighting real outcomes (e.g., "identified £6,200 in legitimate capital allowances") rather than generic praise builds instant authority for UK tax matters.',
    },
    {
      title: '5. HMRC Urgency Triggers & Deadline Alerts',
      tag: 'Conversion Urgency',
      description:
        'Countdown reminders to the 31 January Self Assessment and quarterly VAT dates turn passive browsers into active inquiries by highlighting the risk of automatic £100+ HMRC penalties.',
    },
    {
      title: '6. Direct WhatsApp Business Click-to-Chat',
      tag: 'Instant Engagement',
      description:
        'Sole traders and contractors frequently prefer messaging on WhatsApp over sending email forms. Adding a direct click-to-chat link with Tamima yields fast 1-on-1 dialogue.',
    },
  ];

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
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3F7A74]">
            <Sparkles className="w-4 h-4 text-[#E5A853]" />
            <span>Optimization Blueprint</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C2D2B] tracking-tight">
            Suggestions for Improving Engagement & Lead Conversion
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Here are actionable recommendations to maximize the effectiveness of the Finovate Accountancy platform and streamline client acquisition:
          </p>

          {/* GitHub ZIP Download Card */}
          <div className="bg-[#0C2D2B] text-white rounded-2xl p-5 border border-[#2B5450] space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-[#E5A853]" />
                <span className="font-bold text-sm">Download GitHub-Ready ZIP Archive</span>
              </div>
              <span className="text-[10px] font-semibold bg-[#3F7A74] px-2 py-0.5 rounded text-white">
                Clean · No API Keys
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Contains the complete React + TypeScript + Vite codebase with all assets, Montserrat font configuration, Calendly API integration slot, and README.md with push instructions. Real API keys and secrets are excluded per GitHub security guidelines.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="/finovate-accountancy.zip"
                download="finovate-accountancy.zip"
                className="bg-[#E5A853] hover:bg-[#D99436] text-[#1A1813] font-bold text-xs py-2.5 px-4 rounded-xl inline-flex items-center gap-2 transition-all shadow-xs cursor-pointer active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download finovate-accountancy.zip (2.2 MB)</span>
              </a>
              <span className="text-[11px] text-slate-400">
                Ready to push to GitHub / Vercel / Netlify
              </span>
            </div>
          </div>

          <div className="space-y-3.5 pt-2">
            {suggestions.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#F8FAF9] border border-slate-200/80"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h4 className="text-sm font-bold text-slate-900">
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-semibold text-[#3F7A74] bg-[#EBF3F1] px-2 py-0.5 rounded-md">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">All key mechanisms are now active in this build.</span>
            <button
              type="button"
              onClick={onClose}
              className="bg-[#0C2D2B] text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-[#16403D] transition-colors cursor-pointer"
            >
              Close Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
