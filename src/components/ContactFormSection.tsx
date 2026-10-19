import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/content.ts';

interface ContactFormSectionProps {
  onMessageSent: (name: string) => void;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({ onMessageSent }) => {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [clientType, setClientType] = useState('Sole trader or contractor');
  const [message, setMessage] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: { [key: string]: string } = {};

    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!emailAddress.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
      errs.email = 'Please provide a valid email';
    }
    if (!message.trim()) errs.message = 'Please let us know how we can help';
    if (!agreedToTerms) errs.terms = 'Please consent to being contacted regarding your enquiry';

    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      onMessageSent(fullName);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs flex flex-col justify-between h-full">
      <div>
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Prefer to write to us?
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Send a message and we will reply within 1 business hour.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#EBF3F1] border border-[#B3D6CF] rounded-xl p-6 text-center space-y-3">
            <div className="w-12 h-12 bg-[#3F7A74] text-white rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[#0C2D2B]">Thank you, {fullName}!</h4>
            <p className="text-sm text-slate-700">
              Your message has been sent directly to Tamima Chowdhury. We will review your enquiry and respond to <span className="font-semibold">{emailAddress}</span> shortly.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setMessage('');
              }}
              className="mt-2 text-xs font-semibold text-[#3F7A74] hover:underline cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Your full name"
                className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#3F7A74] ${
                  errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                }`}
              />
              {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
            </div>

            <div>
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
                className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#3F7A74] ${
                  errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                }`}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1.5">
                Phone number (optional)
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="07123 456789"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#3F7A74]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1.5">
                I am a
              </label>
              <select
                value={clientType}
                onChange={(e) => setClientType(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#3F7A74]"
              >
                <option value="Sole trader or contractor">Sole trader or contractor</option>
                <option value="Limited company director">Limited company director</option>
                <option value="Property landlord or investor">Property landlord or investor</option>
                <option value="Growing small/medium business">Growing small/medium business</option>
                <option value="Starting a new business">Starting a new business</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1.5">
                How can we help? <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message) setErrors({ ...errors, message: '' });
                }}
                placeholder="Tell us a little about your business, records, or tax questions..."
                className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#3F7A74] resize-none ${
                  errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                }`}
              />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>

            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => {
                    setAgreedToTerms(e.target.checked);
                    if (errors.terms) setErrors({ ...errors, terms: '' });
                  }}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-[#3F7A74] focus:ring-[#3F7A74]"
                />
                <span className="text-xs text-slate-600 leading-normal">
                  I agree to Finovate Accountancy contacting me about my enquiry. See our privacy policy.
                </span>
              </label>
              {errors.terms && <p className="text-xs text-red-500 mt-1">{errors.terms}</p>}
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-[#0C2D2B] hover:bg-[#16403D] text-white font-semibold text-sm sm:text-base py-3.5 px-6 rounded-xl transition-all shadow-xs cursor-pointer active:scale-[0.99] flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-[#E5A853]" />
              <span>Send message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
