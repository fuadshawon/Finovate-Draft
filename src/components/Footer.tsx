import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FinovateLogo } from './FinovateLogo.tsx';
import { COMPANY_CONTACT } from '../data/content.ts';

interface FooterProps {
  onNavClick: (tab: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  return (
    <footer className="bg-[#0C2D2B] text-white pt-16 pb-12 border-t border-[#183F3C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1A4441]">
          {/* Brand & Description (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <FinovateLogo size="lg" theme="dark" onClick={() => onNavClick('home')} />
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Innovative accounting and tax services for small and medium-sized businesses, contractors, and landlords across the United Kingdom.
            </p>
            <div className="pt-2 text-xs text-[#84ACA7]">
              <span>Principal: Tamima Chowdhury AFA MIPA</span>
            </div>
          </div>

          {/* Explore Links (Col 6-7) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#E5A853]">
              Explore
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('updates')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Recent Updates
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('insights')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Insights
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Get in touch (Col 8-10) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#E5A853]">
              Get in touch
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a
                  href={COMPANY_CONTACT.phoneTel}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#4E8F88]" />
                  <span>{COMPANY_CONTACT.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_CONTACT.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-[#86EFAC] transition-colors flex items-center gap-2 font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
                  <span>WhatsApp: Let's Talk!</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_CONTACT.emailMailto}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#4E8F88]" />
                  <span className="truncate">{COMPANY_CONTACT.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#4E8F88] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">{COMPANY_CONTACT.address}</span>
                  <span className="text-[11px] text-slate-400">Your local accountancy partner · Tilbury, Essex</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#4E8F88] shrink-0 mt-0.5" />
                <span>{COMPANY_CONTACT.openingHours}</span>
              </li>
            </ul>
          </div>

          {/* Legal (Col 11-12) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#E5A853]">
              Legal
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cookie policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTerms}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms of engagement
                </button>
              </li>
              <li>
                <span className="text-[11px] text-slate-400 block pt-1">
                  GDPR & DPA 2018 Compliant
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Copyright Notice (exact match to concept OCR) */}
        <div className="pt-8 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p>© 2026 Finovate Accountancy Ltd. Registered in England and Wales, company number 14829103. Supervised under the Money Laundering Regulations 2017.</p>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span>Institute of Financial Accountants (AFA)</span>
            <span>·</span>
            <span>Institute of Public Accountants (MIPA)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
