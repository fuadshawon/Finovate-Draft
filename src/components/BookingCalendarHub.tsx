import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  Phone,
  Video,
  MapPin,
  CheckCircle2,
  CalendarDays,
  Sparkles,
  ExternalLink,
  Code2,
  Settings,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { MeetingType, BookingDetails } from '../types.ts';
import { UPCOMING_SLOTS, COMPANY_CONTACT } from '../data/content.ts';

interface BookingCalendarHubProps {
  initialServiceTopic?: string;
  onBookingSuccess: (details: BookingDetails) => void;
}

export const BookingCalendarHub: React.FC<BookingCalendarHubProps> = ({
  initialServiceTopic = '',
  onBookingSuccess,
}) => {
  // Calendar Mode: 'native' | 'calendly'
  const [activeMode, setActiveMode] = useState<'native' | 'calendly'>('native');

  // Form State
  const [meetingType, setMeetingType] = useState<MeetingType>('phone');
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string>('11:00');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [discussionTopic, setDiscussionTopic] = useState('Not sure yet');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Calendly configuration
  const [calendlyUrl, setCalendlyUrl] = useState('https://calendly.com/finovate-accountancy/30min');
  const [showConfigPanel, setShowConfigPanel] = useState(false);

  useEffect(() => {
    if (initialServiceTopic) {
      setDiscussionTopic(initialServiceTopic);
    }
  }, [initialServiceTopic]);

  const currentSlotDay = UPCOMING_SLOTS[selectedDayIndex] || UPCOMING_SLOTS[0];

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!emailAddress.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!phoneNumber.trim() && meetingType === 'phone') {
      errs.phone = 'Phone number is required for phone call consultations';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const details: BookingDetails = {
      meetingType,
      date: currentSlotDay.displayDate,
      time: selectedTime,
      fullName,
      phone: phoneNumber,
      email: emailAddress,
      businessType: 'Consultation Inquiry',
      topic: discussionTopic,
    };

    onBookingSuccess(details);
  };

  const meetingTypeLabels = {
    phone: 'Phone call',
    video: 'Video call',
    'in-person': 'In person',
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden" id="booking-calendar-section">
      {/* Top Header / Mode Switcher */}
      <div className="bg-[#0C2D2B] text-white p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1A3D3B]">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E5A853] mb-1">
            <CalendarDays className="w-4 h-4" />
            <span>Interactive Appointment Hub</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Book a free consultation
          </h2>
          <p className="text-sm text-slate-300 mt-1">
            Pick a time, tell us a little about you, and we will confirm by email.
          </p>
        </div>

        {/* Integration Mode Switcher Tab (Designated space for Calendly / API) */}
        <div className="flex items-center gap-1.5 p-1 bg-[#071F1E] rounded-xl self-start sm:self-auto border border-[#1E4340]">
          <button
            type="button"
            onClick={() => setActiveMode('native')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeMode === 'native'
                ? 'bg-[#3F7A74] text-white shadow-xs'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Direct Scheduler
          </button>
          <button
            type="button"
            onClick={() => setActiveMode('calendly')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeMode === 'calendly'
                ? 'bg-[#E5A853] text-[#1A1813] shadow-xs'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Calendly / API Space</span>
          </button>
        </div>
      </div>

      {/* Mode A: Native Concept 1 Scheduler */}
      {activeMode === 'native' && (
        <form onSubmit={handleBookingSubmit} className="p-6 sm:p-8 space-y-7">
          {/* 1. Meeting Type Selector */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-3">
              1. How would you like to meet?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'phone' as MeetingType, label: 'Phone call', icon: Phone, note: 'Direct mobile call' },
                { id: 'video' as MeetingType, label: 'Video call', icon: Video, note: 'Google Meet or Teams' },
                { id: 'in-person' as MeetingType, label: 'In person', icon: MapPin, note: 'Tilbury Office (Essex)' },
              ].map((item) => {
                const isSelected = meetingType === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setMeetingType(item.id)}
                    className={`flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-[#0C2D2B] text-white border-[#0C2D2B] shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#E5A853]' : 'text-slate-500'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Choose a Day */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-3">
              2. Choose a day
            </label>
            <div className="flex flex-wrap gap-2.5">
              {UPCOMING_SLOTS.map((slot, idx) => {
                const isSelected = selectedDayIndex === idx;
                return (
                  <button
                    key={slot.date}
                    type="button"
                    onClick={() => setSelectedDayIndex(idx)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-[#0C2D2B] text-white font-semibold shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {slot.displayDate}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Choose a Time */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-3">
              3. Choose a time
            </label>
            <div className="flex flex-wrap gap-2.5">
              {currentSlotDay.times.map((timeStr) => {
                const isSelected = selectedTime === timeStr;
                return (
                  <button
                    key={timeStr}
                    type="button"
                    onClick={() => setSelectedTime(timeStr)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-[#3F7A74] text-white font-semibold ring-2 ring-[#3F7A74]/30'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {timeStr}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Your Details */}
          <div className="pt-2 border-t border-slate-100">
            <label className="block text-sm font-semibold text-slate-900 mb-4">
              4. Your details
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors({ ...errors, fullName: '' });
                  }}
                  placeholder="e.g. John Smith"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#3F7A74] transition-colors ${
                    errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Phone number {meetingType === 'phone' ? <span className="text-red-500">*</span> : '(optional)'}
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                  placeholder="e.g. 07123 456789"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#3F7A74] transition-colors ${
                    errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={emailAddress}
                  onChange={(e) => {
                    setEmailAddress(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  placeholder="name@business.co.uk"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#3F7A74] transition-colors ${
                    errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  What would you like to discuss?
                </label>
                <select
                  value={discussionTopic}
                  onChange={(e) => setDiscussionTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#3F7A74]"
                >
                  <option value="Not sure yet">Not sure yet (General guidance)</option>
                  <option value="Free Companies House ACSP Identity Verification">Free Companies House ACSP Identity Verification</option>
                  <option value="Online Trader & E-commerce Accounting (Amazon/Shopify)">Online Trader & E-commerce Accounting (Amazon/Shopify)</option>
                  <option value="Landlord Services & Section 24 Tax Planning">Landlord Services & Section 24 Tax Planning</option>
                  <option value="Bookkeeping & Reconciliations">Bookkeeping & Reconciliations</option>
                  <option value="Payroll & HR Services">Payroll & HR Services</option>
                  <option value="VAT Returns & Making Tax Digital (MTD)">VAT Returns & Making Tax Digital (MTD)</option>
                  <option value="Year-End Tax Preparation & Filing">Year-End Tax Preparation & Filing</option>
                  <option value="Statutory Accounts Preparation">Statutory Accounts Preparation</option>
                  <option value="Financial Planning & Advisory">Financial Planning & Advisory</option>
                  <option value="Switching from current accountant">Switching from current accountant</option>
                  <option value="New business / Limited company setup">New business / Limited company setup</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submission and Confirmation notice */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#E5A853] hover:bg-[#D99436] text-[#1A1813] font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl transition-all shadow-xs hover:shadow-sm cursor-pointer active:scale-[0.99] flex items-center justify-center gap-2"
            >
              <span>Confirm my free consultation</span>
            </button>

            {/* Selected Summary Notice matching concept screenshot */}
            <div className="mt-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-600 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#3F7A74] shrink-0 mt-0.5" />
              <span>
                <strong>Selected:</strong> {currentSlotDay.displayDate} at {selectedTime}, {meetingTypeLabels[meetingType]}. We will only use your details to arrange and follow up on your consultation. See our privacy policy.
              </span>
            </div>
          </div>
        </form>
      )}

      {/* Mode B: Designated Calendly / External Booking API Space */}
      {activeMode === 'calendly' && (
        <div className="p-6 sm:p-8 space-y-6">
          {/* Space announcement banner */}
          <div className="bg-[#EBF3F1] border border-[#C5DDD8] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#3F7A74] text-white rounded-lg shrink-0 mt-0.5">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0C2D2B]">
                  Designated Calendly / Booking App API Container
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  This responsive iframe and script container is reserved for embedding your live Calendly, Cal.com, or Google Calendar appointment scheduler.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowConfigPanel(!showConfigPanel)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors shrink-0 cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>{showConfigPanel ? 'Hide API Settings' : 'Configure Booking URL'}</span>
            </button>
          </div>

          {/* Config Drawer for Firm Owners */}
          {showConfigPanel && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-3">
              <div className="font-semibold text-slate-800 flex items-center justify-between">
                <span>Set Calendly or Cal.com URL:</span>
                <span className="text-[11px] text-slate-500">Live preview below</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={calendlyUrl}
                  onChange={(e) => setCalendlyUrl(e.target.value)}
                  placeholder="https://calendly.com/your-firm/30min"
                  className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#3F7A74]"
                />
                <button
                  type="button"
                  onClick={() => alert('Calendly URL updated for this session!')}
                  className="px-3 py-2 bg-[#0C2D2B] text-white rounded-lg font-semibold cursor-pointer"
                >
                  Save URL
                </button>
              </div>
              <p className="text-[11px] text-slate-500">
                You can also install the official Calendly inline widget script <code className="bg-slate-200 px-1 py-0.5 rounded">https://assets.calendly.com/assets/external/widget.js</code> or sync leads automatically into Xero/HubSpot via Zapier webhooks.
              </p>
            </div>
          )}

          {/* Live Simulated Calendly Interactive Booking Widget */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs">
            <div className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="font-medium text-slate-700">Live Calendly API Integration Frame</span>
              </div>
              <span className="text-slate-500 truncate max-w-xs">{calendlyUrl}</span>
            </div>

            {/* Embedded Calendar Interface */}
            <div className="p-6 sm:p-8 min-h-[460px] flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left profile summary */}
                <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-6 space-y-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    Finovate Accountancy
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    30-Minute Business Consultation
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#3F7A74]" />
                      <span>30 min</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-[#3F7A74]" />
                      <span>Web conferencing details provided upon confirmation.</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    A relaxed, confidential conversation with Tamima Chowdhury AFA MIPA about your bookkeeping, tax strategy, and filing requirements.
                  </p>
                </div>

                {/* Right Interactive Calendar View */}
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-800">Select Date & Time (London Time BST)</span>
                    <span className="text-xs text-slate-500">October 2026</span>
                  </div>

                  <div className="grid grid-cols-5 gap-2 text-center text-xs">
                    {['Thu 22', 'Fri 23', 'Mon 26', 'Tue 27', 'Wed 28'].map((day, i) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setSelectedDayIndex(i)}
                        className={`py-3 px-2 rounded-xl border text-xs font-semibold cursor-pointer transition-colors ${
                          selectedDayIndex === i
                            ? 'bg-[#3F7A74] text-white border-[#3F7A74]'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <span className="text-xs font-semibold text-slate-600 block mb-2">Available slots for {currentSlotDay.displayDate}:</span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {currentSlotDay.times.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => {
                            setSelectedTime(t);
                            setActiveMode('native');
                          }}
                          className={`py-2 px-3 rounded-lg border text-xs font-medium cursor-pointer transition-colors flex items-center justify-center gap-1 ${
                            selectedTime === t
                              ? 'border-[#0C2D2B] bg-[#0C2D2B] text-white'
                              : 'border-slate-200 text-[#0C2D2B] hover:border-[#3F7A74] hover:bg-[#EBF3F1]'
                          }`}
                        >
                          <span>{t}</span>
                          <span className="text-[10px] opacity-75">Select</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Powered by Calendly / Finovate API Bridge</span>
                    <button
                      type="button"
                      onClick={() => setActiveMode('native')}
                      className="text-xs font-semibold text-[#3F7A74] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Continue with full form</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
