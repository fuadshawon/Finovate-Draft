import React, { useState } from 'react';
import {
  BookOpen,
  Calculator,
  Percent,
  FileText,
  BarChart3,
  Home,
  User,
  Globe,
  Laptop,
  ShieldCheck,
  Users,
  TrendingUp,
  Check,
  ArrowRight,
  Sparkles,
  Phone
} from 'lucide-react';
import { SERVICES, COMPANY_CONTACT } from '../data/content.ts';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
  onBookClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookClick,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#3F7A74]" />;
      case 'Calculator':
        return <Calculator className="w-5 h-5 text-[#3F7A74]" />;
      case 'Percent':
        return <Percent className="w-5 h-5 text-[#3F7A74]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#3F7A74]" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#3F7A74]" />;
      case 'Home':
        return <Home className="w-5 h-5 text-[#3F7A74]" />;
      case 'User':
        return <User className="w-5 h-5 text-[#3F7A74]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#3F7A74]" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-[#3F7A74]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#3F7A74]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#3F7A74]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#3F7A74]" />;
      default:
        return <FileText className="w-5 h-5 text-[#3F7A74]" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F8FAF9]" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-widest text-[#3F7A74] mb-2">
            OUR SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C2D2B] tracking-tight leading-tight">
            Support that fits the way your business actually works.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Professional accountancy, tax and business support for limited companies, sole traders, landlords and online traders.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 items-center">
            <button
              onClick={onBookClick}
              className="bg-[#E5A853] hover:bg-[#D99436] text-[#1A1813] font-bold text-sm px-6 py-3 rounded-full transition-all shadow-xs cursor-pointer active:scale-[0.98]"
            >
              Book a free 30-minute consultation
            </button>
            <a
              href={COMPANY_CONTACT.phoneTel}
              className="text-sm font-semibold text-[#0C2D2B] hover:text-[#3F7A74] transition-colors border border-slate-300 rounded-full px-5 py-3 bg-white shadow-xs"
            >
              Call {COMPANY_CONTACT.phone}
            </a>
          </div>
        </div>

        {/* 12 Services Grid (incorporating flyer services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-[#3F7A74]/50 hover:shadow-xs transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3F1] flex items-center justify-center shrink-0">
                    {getIcon(srv.icon)}
                  </div>
                  {srv.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0C2D2B] bg-[#E5A853]/30 px-2.5 py-1 rounded-full border border-[#E5A853]/40">
                      {srv.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0C2D2B] transition-colors mb-2">
                  {srv.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {srv.summary}
                </p>

                <div className="border-t border-slate-100 pt-4 mb-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    WHAT YOU GET
                  </div>
                  <ul className="space-y-2">
                    {srv.whatYouGet.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#3F7A74] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-50">
                <button
                  type="button"
                  onClick={() => onSelectService(srv.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3F7A74] group-hover:text-[#0C2D2B] transition-colors cursor-pointer"
                >
                  <span>Ask about {srv.title.toLowerCase()} →</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Pillars Banner from Flyer */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EBF3F1] flex items-center justify-center shrink-0 text-[#3F7A74]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Personal & Friendly</div>
              <div className="text-[11px] text-slate-500">Dedicated local team</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EBF3F1] flex items-center justify-center shrink-0 text-[#3F7A74]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Fully Compliant</div>
              <div className="text-[11px] text-slate-500">AFA MIPA & HMRC registered</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EBF3F1] flex items-center justify-center shrink-0 text-[#3F7A74]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Proactive Advice</div>
              <div className="text-[11px] text-slate-500">Year-round tax support</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EBF3F1] flex items-center justify-center shrink-0 text-[#3F7A74]">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Tailored Approach</div>
              <div className="text-[11px] text-slate-500">Built around your needs</div>
            </div>
          </div>
        </div>

        {/* Consultation Callout Banner */}
        <div className="bg-[#0C2D2B] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="max-w-2xl text-center md:text-left">
            <div className="text-xs font-bold text-[#E5A853] uppercase tracking-wider mb-1">
              FREE INITIAL CONSULTATION · NO OBLIGATION
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Not sure which service fits your setup?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              That is what the free 30-minute consultation is for. We discuss your business, records, and plans so you get clear answers and custom options directly.
            </p>
          </div>

          <button
            onClick={onBookClick}
            className="shrink-0 bg-[#E5A853] hover:bg-[#D99436] text-[#1A1813] font-bold text-sm sm:text-base px-6 py-3.5 rounded-full transition-all shadow-xs cursor-pointer active:scale-[0.98]"
          >
            Book free consultation
          </button>
        </div>
      </div>
    </section>
  );
};
