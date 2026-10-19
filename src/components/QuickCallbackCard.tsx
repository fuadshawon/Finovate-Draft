import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';

interface QuickCallbackCardProps {
  onPickSlotClick: () => void;
  onSuccess: (name: string) => void;
}

export const QuickCallbackCard: React.FC<QuickCallbackCardProps> = ({
  onPickSlotClick,
  onSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [interest, setInterest] = useState('Not sure yet');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !contactInfo.trim()) {
      setError('Please provide your name and contact details.');
      return;
    }
    setError('');
    setSubmitted(true);
    onSuccess(fullName);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-6 sm:p-7 relative overflow-hidden">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3F7A74] mb-1">
        <PhoneCall className="w-3.5 h-3.5" />
        <span>Fast Callback Request</span>
      </div>

      <h3 className="text-xl font-bold tracking-tight text-slate-900">
        Request a call back
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 mt-1">
        Tell us a little about your business and we will be in touch.
      </p>

      {submitted ? (
        <div className="my-6 bg-[#EBF3F1] border border-[#B3D6CF] rounded-xl p-5 text-center space-y-2">
          <div className="w-10 h-10 bg-[#3F7A74] text-white rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-[#0C2D2B]">Callback Requested!</h4>
          <p className="text-xs text-slate-600">
            Thank you, {fullName}. Tamima will call you back at {contactInfo} within our next working window.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-[11px] font-semibold text-[#3F7A74] hover:underline pt-1"
          >
            Submit another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Full name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your name"
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#3F7A74] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Phone or email
            </label>
            <input
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              placeholder="How should we reach you?"
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#3F7A74] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              I am interested in
            </label>
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#3F7A74]"
            >
              <option value="Not sure yet">Not sure yet</option>
              <option value="Bookkeeping">Bookkeeping</option>
              <option value="Payroll">Payroll</option>
              <option value="VAT returns">VAT returns</option>
              <option value="Tax preparation and returns">Tax preparation and returns</option>
              <option value="Accounts preparation">Accounts preparation</option>
              <option value="Financial planning and advice">Financial planning and advice</option>
            </select>
          </div>

          {error && <p className="text-xs text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#E5A853] hover:bg-[#D99436] text-[#1A1813] font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-xs cursor-pointer active:scale-[0.98]"
          >
            Request my free consultation
          </button>

          <p className="text-[11px] text-slate-500 leading-tight">
            By submitting, you agree to us contacting you about your enquiry. See our privacy policy.
          </p>

          <div className="pt-2 border-t border-slate-100 text-center">
            <button
              type="button"
              onClick={onPickSlotClick}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0C2D2B] hover:text-[#3F7A74] transition-colors cursor-pointer"
            >
              <span>Prefer to pick a time yourself? Book a slot now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
