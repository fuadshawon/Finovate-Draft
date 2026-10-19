import React from 'react';
import { CheckCircle2, Calendar, Download, X, Mail, Phone, Clock, Video, MapPin } from 'lucide-react';
import { BookingDetails } from '../types.ts';

interface BookingSuccessModalProps {
  details: BookingDetails;
  onClose: () => void;
}

export const BookingSuccessModal: React.FC<BookingSuccessModalProps> = ({ details, onClose }) => {
  // Generate Google Calendar Link
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`Finovate Accountancy Consultation - ${details.fullName}`);
    const desc = encodeURIComponent(
      `Free consultation with Tamima Chowdhury AFA MIPA.\nTopic: ${details.topic}\nMeeting Type: ${details.meetingType}\nPhone: ${details.phone}\nReference: FIN-${Math.floor(10000 + Math.random() * 90000)}`
    );
    const location = encodeURIComponent(
      details.meetingType === 'in-person'
        ? '12 Parker Avenue, Tilbury RM18 8JA, Essex'
        : details.meetingType === 'video'
        ? 'Google Meet (Link will be sent via email)'
        : `Phone Call (${details.phone})`
    );

    // Format ISO string for upcoming date
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${desc}&location=${location}`;
  };

  // Generate .ics download
  const handleDownloadIcs = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Finovate Accountancy//Consultation Calendar//EN
BEGIN:VEVENT
SUMMARY:Finovate Accountancy Consultation - ${details.fullName}
DESCRIPTION:Free 30-minute consultation with Tamima Chowdhury AFA MIPA. Topic: ${details.topic}
LOCATION:${details.meetingType}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `finovate-consultation-${details.date.replace(/\s+/g, '-')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-[#EBF3F1] text-[#3F7A74] rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-xs">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#3F7A74] block">
            Consultation Booked
          </span>

          <h3 className="text-2xl font-extrabold text-[#0C2D2B] tracking-tight">
            We look forward to speaking with you!
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
            You will receive a confirmation by email at <span className="font-semibold text-slate-900">{details.email}</span>, with a calendar invitation and reminder before we speak.
          </p>
        </div>

        {/* Appointment Card */}
        <div className="mt-6 p-4 rounded-2xl bg-[#F8FAF9] border border-slate-200/80 space-y-2.5 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
            <span className="text-slate-500">Booking Reference</span>
            <span className="font-mono font-bold text-slate-900">FIN-84920</span>
          </div>

          <div className="flex items-center gap-2 text-slate-700">
            <Clock className="w-4 h-4 text-[#3F7A74]" />
            <span className="font-semibold">{details.date} at {details.time}</span>
          </div>

          <div className="flex items-center gap-2 text-slate-700">
            {details.meetingType === 'video' ? (
              <Video className="w-4 h-4 text-[#3F7A74]" />
            ) : details.meetingType === 'in-person' ? (
              <MapPin className="w-4 h-4 text-[#3F7A74]" />
            ) : (
              <Phone className="w-4 h-4 text-[#3F7A74]" />
            )}
            <span className="capitalize">{details.meetingType} consultation</span>
          </div>

          <div className="flex items-center gap-2 text-slate-700">
            <Mail className="w-4 h-4 text-[#3F7A74]" />
            <span>Topic: {details.topic}</span>
          </div>
        </div>

        {/* Calendar Add Action Buttons */}
        <div className="mt-6 space-y-2.5">
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#0C2D2B] hover:bg-[#16403D] text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
          >
            <Calendar className="w-4 h-4 text-[#E5A853]" />
            <span>Add to Google Calendar</span>
          </a>

          <button
            type="button"
            onClick={handleDownloadIcs}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Download .ICS file (Outlook / Apple Calendar)</span>
          </button>
        </div>

        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={onClose}
            className="text-xs text-slate-500 hover:text-slate-800 transition-colors font-medium cursor-pointer"
          >
            Done & return to website
          </button>
        </div>
      </div>
    </div>
  );
};
