/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Check,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Clock,
  MessageSquare,
  Globe,
  ExternalLink,
  QrCode,
  Laptop
} from 'lucide-react';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { BookingCalendarHub } from './components/BookingCalendarHub.tsx';
import { ContactFormSection } from './components/ContactFormSection.tsx';
import { QuickCallbackCard } from './components/QuickCallbackCard.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { MeetTamimaSection } from './components/MeetTamimaSection.tsx';
import { AudienceSegmentsSection } from './components/AudienceSegmentsSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { InsightsSection } from './components/InsightsSection.tsx';
import { ClientStoriesSection } from './components/ClientStoriesSection.tsx';
import { RecentUpdatesFeed } from './components/RecentUpdatesFeed.tsx';
import { TaxDeadlinesWidget } from './components/TaxDeadlinesWidget.tsx';
import { BookingSuccessModal } from './components/BookingSuccessModal.tsx';
import { ArticleModal } from './components/ArticleModal.tsx';
import { ConversionStrategyModal } from './components/ConversionStrategyModal.tsx';
import { BookingDetails, InsightArticle } from './types.ts';
import { COMPANY_CONTACT } from './data/content.ts';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('');
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  const [readingArticle, setReadingArticle] = useState<InsightArticle | null>(null);
  const [showStrategyModal, setShowStrategyModal] = useState<boolean>(false);
  const [showWhatsAppQrModal, setShowWhatsAppQrModal] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const navigateToBooking = (serviceTopic?: string) => {
    if (serviceTopic) {
      setSelectedServiceForBooking(serviceTopic);
    }
    setActiveTab('contact');
    setTimeout(() => {
      const el = document.getElementById('booking-calendar-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFCFA] text-[#101C1B] antialiased selection:bg-[#3F7A74] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 bg-[#0C2D2B] text-white px-4 py-3 rounded-xl shadow-lg border border-[#3F7A74] text-xs flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <Sparkles className="w-4 h-4 text-[#E5A853]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onBookClick={() => navigateToBooking()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* VIEW 1: HOME PAGE */}
        {activeTab === 'home' && (
          <div className="space-y-0">
            {/* Hero Section Split with Flyer Messaging */}
            <section className="bg-white pt-10 pb-16 lg:py-20 border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                  {/* Left Column (Brand message & CTAs from Flyer) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#3F7A74]">
                      <span className="w-2 h-2 rounded-full bg-[#3F7A74]"></span>
                      <span>{COMPANY_CONTACT.tagline}</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-black text-[#0C2D2B] tracking-tight leading-[1.1] text-balance">
                      {COMPANY_CONTACT.heroHeadline}
                    </h1>

                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                      {COMPANY_CONTACT.heroSubtitle} Led by qualified accountant{' '}
                      <strong className="text-slate-900 font-semibold">Tamima Chowdhury AFA MIPA</strong>.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3.5 items-center pt-2">
                      <button
                        onClick={() => navigateToBooking()}
                        className="bg-[#E5A853] hover:bg-[#D99436] text-[#1A1813] font-bold text-sm sm:text-base px-6 py-3.5 rounded-full transition-all shadow-xs hover:shadow-sm cursor-pointer active:scale-[0.98]"
                      >
                        Book a free 30-minute consultation
                      </button>
                      <a
                        href={COMPANY_CONTACT.phoneTel}
                        className="text-sm sm:text-base font-semibold text-[#0C2D2B] hover:text-[#3F7A74] transition-colors border border-slate-300 rounded-full px-6 py-3.5 bg-white shadow-xs"
                      >
                        Call {COMPANY_CONTACT.phone}
                      </a>
                      <a
                        href={COMPANY_CONTACT.whatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[#15803D] hover:text-[#166534] bg-emerald-50 border border-emerald-200 rounded-full px-4 py-3.5 inline-flex items-center gap-2 transition-colors cursor-pointer"
                        title="Chat on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4 text-[#25D366]" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>

                    {/* Trust Badges & ACSP Highlights from Flyer */}
                    <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-slate-600 font-medium">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#3F7A74]" />
                        <span>Free 30-Minute Consultation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#3F7A74]" />
                        <span>Authorised ACSP Identity Verification</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#3F7A74]" />
                        <span>MTD Ready for VAT & Income Tax</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#3F7A74]" />
                        <span>Tilbury, Essex & Nationwide</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Hero Quick Callback Card */}
                  <div className="lg:col-span-5">
                    <QuickCallbackCard
                      onPickSlotClick={() => navigateToBooking()}
                      onSuccess={(name) =>
                        showToast(`Callback request received for ${name}! We will call you back shortly.`)
                      }
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Live Updates & Latest News Feed Section (NEW!) */}
            <RecentUpdatesFeed
              onDiscussUpdate={(title) => navigateToBooking(`Inquiry regarding: ${title}`)}
              onViewArticles={() => setActiveTab('insights')}
              onShowToast={showToast}
            />

            {/* 12 Services Showcase Grid (from Flyer) */}
            <ServicesSection
              onSelectService={(serviceTitle) => navigateToBooking(serviceTitle)}
              onBookClick={() => navigateToBooking()}
            />

            {/* How It Works & Audience Segments (incl. Online Traders) */}
            <AudienceSegmentsSection onBookClick={() => navigateToBooking()} />

            {/* Meet Tamima Section */}
            <MeetTamimaSection onBookClick={() => navigateToBooking()} />

            {/* UK Tax Deadlines Widget */}
            <section className="py-16 sm:py-20 bg-[#FBFCFA]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <TaxDeadlinesWidget onBookClick={() => navigateToBooking()} />
              </div>
            </section>

            {/* Client Stories */}
            <ClientStoriesSection />

            {/* Tax Insights Section */}
            <InsightsSection
              onReadArticle={(article) => setReadingArticle(article)}
            />

            {/* Pre-footer Call to Action Banner */}
            <section className="bg-[#0C2D2B] text-white py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-bold text-[#E5A853] uppercase tracking-wider mb-1">
                    YOUR LOCAL ACCOUNTANCY PARTNER · TILBURY, ESSEX & REMOTE NATIONWIDE
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    Let us talk about your business numbers.
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
                    Book a free 30-minute consultation. We discuss your business, records, and tailored setup directly with no pressure or obligations.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 shrink-0">
                  <button
                    onClick={() => navigateToBooking()}
                    className="bg-[#E5A853] hover:bg-[#D99436] text-[#1A1813] font-bold text-sm sm:text-base px-6 py-3.5 rounded-full transition-all shadow-xs cursor-pointer active:scale-[0.98]"
                  >
                    Book free consultation
                  </button>
                  <a
                    href={COMPANY_CONTACT.phoneTel}
                    className="text-sm sm:text-base font-semibold text-white border border-[#2B5450] hover:bg-[#16403D] transition-colors rounded-full px-6 py-3.5"
                  >
                    Call {COMPANY_CONTACT.phone}
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* VIEW 2: SERVICES TAB */}
        {activeTab === 'services' && (
          <div>
            <ServicesSection
              onSelectService={(serviceTitle) => navigateToBooking(serviceTitle)}
              onBookClick={() => navigateToBooking()}
            />
            <FaqSection onAskDirectlyClick={() => navigateToBooking()} />
          </div>
        )}

        {/* VIEW 3: RECENT UPDATES TAB */}
        {activeTab === 'updates' && (
          <div>
            <RecentUpdatesFeed
              onDiscussUpdate={(title) => navigateToBooking(`Inquiry regarding: ${title}`)}
              onViewArticles={() => setActiveTab('insights')}
              onShowToast={showToast}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <TaxDeadlinesWidget onBookClick={() => navigateToBooking()} />
            </div>
          </div>
        )}

        {/* VIEW 4: ABOUT TAB */}
        {activeTab === 'about' && (
          <div>
            <MeetTamimaSection onBookClick={() => navigateToBooking()} />
            <AudienceSegmentsSection onBookClick={() => navigateToBooking()} />
            <ClientStoriesSection />
          </div>
        )}

        {/* VIEW 5: INSIGHTS TAB */}
        {activeTab === 'insights' && (
          <div>
            <InsightsSection onReadArticle={(article) => setReadingArticle(article)} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <TaxDeadlinesWidget onBookClick={() => navigateToBooking()} />
            </div>
          </div>
        )}

        {/* VIEW 6: CONTACT & DEDICATED BOOKING CALENDAR PAGE */}
        {activeTab === 'contact' && (
          <div className="py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              {/* Contact Hero Title */}
              <div className="max-w-3xl">
                <div className="text-xs font-bold uppercase tracking-widest text-[#3F7A74] mb-2">
                  CONTACT & APPOINTMENT SCHEDULING
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0C2D2B] tracking-tight leading-tight">
                  Let us talk about your business.
                </h1>
                <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                  Choose a time that suits you, or send us a message. Either way, you will hear from a real person who understands small business and online trading.
                </p>
              </div>

              {/* Two Column Layout: Designated Booking Hub on Left, Write to Us on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Designated Booking Calendar API / Calendly & Scheduler */}
                <div className="lg:col-span-7">
                  <BookingCalendarHub
                    initialServiceTopic={selectedServiceForBooking}
                    onBookingSuccess={(details) => setBookingDetails(details)}
                  />
                </div>

                {/* Right Column: Prefer to write to us? Form */}
                <div className="lg:col-span-5">
                  <ContactFormSection
                    onMessageSent={(name) =>
                      showToast(`Message from ${name} sent! We will reply within 1 business hour.`)
                    }
                  />
                </div>
              </div>

              {/* Contact Information & WhatsApp Cards (from Flyer) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div className="bg-white rounded-2xl border border-slate-200/90 p-6 flex items-start gap-4 shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-[#EBF3F1] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#3F7A74]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      CALL US
                    </div>
                    <a
                      href={COMPANY_CONTACT.phoneTel}
                      className="text-base font-bold text-slate-900 hover:text-[#3F7A74] transition-colors block mt-0.5"
                    >
                      {COMPANY_CONTACT.phone}
                    </a>
                    <span className="text-xs text-slate-500 block mt-1">
                      {COMPANY_CONTACT.openingHours}
                    </span>
                  </div>
                </div>

                {/* WhatsApp Chat Card */}
                <div className="bg-white rounded-2xl border border-emerald-200 p-6 flex items-start gap-4 shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                      WHATSAPP LET'S TALK
                    </div>
                    <a
                      href={COMPANY_CONTACT.whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-emerald-900 hover:text-emerald-700 transition-colors block mt-0.5"
                    >
                      Scan or Click to Chat
                    </a>
                    <span className="text-xs text-slate-500 block mt-1">
                      Direct WhatsApp messaging with Tamima
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/90 p-6 flex items-start gap-4 shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-[#EBF3F1] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#3F7A74]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      FIND US
                    </div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">
                      {COMPANY_CONTACT.address}
                    </div>
                    <span className="text-xs text-slate-500 block mt-1">
                      Tilbury, Essex · London & Nationwide remote digital portal
                    </span>
                  </div>
                </div>
              </div>

              {/* What Happens After You Get In Touch */}
              <div className="bg-[#EBF3F1]/70 border border-[#D5E5E1] rounded-3xl p-8 sm:p-10">
                <h3 className="text-2xl font-bold text-[#0C2D2B] mb-8">
                  What happens after you get in touch.
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <div className="w-9 h-9 rounded-full bg-[#0C2D2B] text-white font-bold flex items-center justify-center text-sm">
                      1
                    </div>
                    <h4 className="text-base font-bold text-slate-900">
                      We confirm
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      You will receive a confirmation by email, with a reminder before we speak.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="w-9 h-9 rounded-full bg-[#0C2D2B] text-white font-bold flex items-center justify-center text-sm">
                      2
                    </div>
                    <h4 className="text-base font-bold text-slate-900">
                      We talk it through
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      A relaxed 30-minute conversation about your business, your numbers and where you need support.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="w-9 h-9 rounded-full bg-[#0C2D2B] text-white font-bold flex items-center justify-center text-sm">
                      3
                    </div>
                    <h4 className="text-base font-bold text-slate-900">
                      You decide
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      You leave with clearer next steps and custom options, with no pressure to commit to anything.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <FaqSection onAskDirectlyClick={() => {
                const el = document.getElementById('booking-calendar-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }} />
            </div>
          </div>
        )}
      </main>

      {/* Floating Consultation Badge (Compliant with 15% mobile sticky cap) */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        <a
          href={COMPANY_CONTACT.whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2 px-3 rounded-full shadow-md flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => setShowStrategyModal(true)}
          className="bg-white/95 hover:bg-white text-slate-700 text-xs font-semibold py-2 px-3.5 rounded-full shadow-md border border-slate-200/90 flex items-center gap-1.5 backdrop-blur-xs transition-transform active:scale-95 cursor-pointer"
          title="Conversion & Calendly integration notes"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E5A853]" />
          <span className="hidden sm:inline">Integration Guide</span>
        </button>

        <button
          type="button"
          onClick={() => navigateToBooking()}
          className="bg-[#E5A853] hover:bg-[#D99436] text-[#1A1813] font-bold text-xs sm:text-sm py-2 px-4 rounded-full shadow-md transition-transform active:scale-95 cursor-pointer flex items-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Free Slot</span>
        </button>
      </div>

      {/* Footer */}
      <Footer
        onNavClick={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPrivacy={() =>
          showToast('Finovate Accountancy complies fully with UK GDPR & Data Protection Act 2018.')
        }
        onOpenTerms={() =>
          showToast('Standard terms of engagement based on IFA / ICAEW professional standards.')
        }
      />

      {/* Modals */}
      {bookingDetails && (
        <BookingSuccessModal
          details={bookingDetails}
          onClose={() => setBookingDetails(null)}
        />
      )}

      {readingArticle && (
        <ArticleModal
          article={readingArticle}
          onClose={() => setReadingArticle(null)}
          onBookClick={() => navigateToBooking(`Inquiry related to ${readingArticle.title}`)}
        />
      )}

      {showStrategyModal && (
        <ConversionStrategyModal onClose={() => setShowStrategyModal(false)} />
      )}
    </div>
  );
}
