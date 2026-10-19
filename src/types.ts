export type MeetingType = 'phone' | 'video' | 'in-person';

export interface BookingSlot {
  date: string;
  displayDate: string;
  times: string[];
}

export interface BookingDetails {
  meetingType: MeetingType;
  date: string;
  time: string;
  fullName: string;
  phone: string;
  email: string;
  businessType: string;
  topic: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  whatYouGet: string[];
  idealFor: string;
  icon: string;
  badge?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface InsightArticle {
  id: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  publishDate: string;
  content: string[];
}

export interface ClientStory {
  id: string;
  quote: string;
  clientName: string;
  businessType: string;
  location: string;
  outcome: string;
}
