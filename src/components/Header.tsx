import React, { useState } from 'react';
import { Phone, Mail, Clock, Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { FinovateLogo } from './FinovateLogo.tsx';
import { COMPANY_CONTACT } from '../data/content.ts';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onBookClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'updates', label: 'Recent Updates' },
    { id: 'insights', label: 'Insights' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-xs">
      {/* Top Notification / Contact Bar (matching Concept design) */}
      <div className="bg-[#0C2D2B] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-[#1A3D3B]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <a
              href={COMPANY_CONTACT.phoneTel}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5A853]" />
              <span>Call {COMPANY_CONTACT.phone}</span>
            </a>
            <span className="hidden sm:inline text-slate-500">·</span>
            <a
              href={COMPANY_CONTACT.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#86EFAC] hover:text-white transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp: Let's Talk!</span>
            </a>
            <span className="hidden sm:inline text-slate-500">·</span>
            <a
              href={COMPANY_CONTACT.emailMailto}
              className="hidden md:flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#4E8F88]" />
              <span>{COMPANY_CONTACT.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-[#E5A853] font-medium text-[11px] sm:text-xs">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E5A853]"></span>
            <span>Free 30-min consultation · No obligation</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark / Logo */}
          <div className="shrink-0">
            <FinovateLogo
              size="md"
              theme="light"
              onClick={() => handleNavClick('home')}
            />
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`cursor-pointer whitespace-nowrap transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#0C2D2B] font-semibold'
                      : 'text-slate-600 hover:text-[#0C2D2B]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3F7A74] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onBookClick}
              className="cursor-pointer bg-[#E5A853] hover:bg-[#D99436] text-[#1A1813] font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-xs hover:shadow-sm whitespace-nowrap active:scale-[0.98]"
            >
              Book a free consultation
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-3 py-2.5 text-base font-medium rounded-lg transition-colors ${
                activeTab === link.id
                  ? 'bg-[#EBF3F1] text-[#0C2D2B] font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={COMPANY_CONTACT.phoneTel}
              className="flex items-center gap-2 text-sm text-slate-600 px-3 py-2"
            >
              <Phone className="w-4 h-4 text-[#3F7A74]" />
              <span>{COMPANY_CONTACT.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full text-center bg-[#E5A853] hover:bg-[#D99436] text-[#1A1813] font-semibold py-3 px-4 rounded-xl text-sm"
            >
              Book a free consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
