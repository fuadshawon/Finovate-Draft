import { ServiceItem, FaqItem, InsightArticle, ClientStory, BookingSlot } from '../types.ts';

export const COMPANY_CONTACT = {
  phone: '07932 869 761',
  phoneRaw: '07932869761',
  phoneTel: 'tel:07932869761',
  email: 'info@finovate-accountancy.co.uk',
  emailMailto: 'mailto:info@finovate-accountancy.co.uk',
  website: 'www.finovate-accountancy.co.uk',
  address: '12 Parker Avenue, Tilbury RM18 8JA',
  region: 'Tilbury, Essex & London / Remote Nationwide',
  tagline: 'Smart Advice. Better Numbers. Stronger Business.',
  heroHeadline: 'CLARITY IN YOUR NUMBERS. CONFIDENCE IN YOUR BUSINESS.',
  heroSubtitle: 'Professional accountancy, tax and business support for limited companies, sole traders, landlords and online traders.',
  openingHours: 'Monday – Friday: 09:00 – 17:30',
  whatsAppUrl: 'https://wa.me/447932869761?text=Hi%20Finovate%20Accountancy%2C%20I%20would%20like%20to%20book%20a%20free%2030-minute%20consultation.',
  registration: 'Finovate Accountancy Ltd · Registered in England & Wales · Authorised Corporate Service Provider (ACSP) with Companies House · Supervised under the Money Laundering Regulations',
};

export interface SocialUpdate {
  id: string;
  source: 'LinkedIn' | 'HMRC Alert' | 'Practice News' | 'X (Twitter)';
  category: 'HMRC & Regulatory' | 'Tax Tips' | 'Practice News' | 'E-Commerce';
  timestamp: string;
  title: string;
  snippet: string;
  metrics?: { likes: number; shares: number };
  badgeText?: string;
}

export const RECENT_UPDATES: SocialUpdate[] = [
  {
    id: 'upd-1',
    source: 'Practice News',
    category: 'HMRC & Regulatory',
    timestamp: 'Just now',
    title: 'Companies House Identity Verification: Finovate is an Authorised ACSP',
    snippet:
      'Under the new Economic Crime & Corporate Transparency Act, all UK company directors and PSCs must verify their identity. As a registered ACSP (Authorised Corporate Service Provider), Finovate verifies our clients for FREE.',
    badgeText: 'Regulatory Update',
    metrics: { likes: 38, shares: 12 },
  },
  {
    id: 'upd-2',
    source: 'LinkedIn',
    category: 'E-Commerce',
    timestamp: '4 hours ago',
    title: 'Selling on Amazon, Shopify or TikTok Shop? VAT & MTD Essentials',
    snippet:
      'Online traders often run into cross-border VAT threshold pitfalls. We help e-commerce sellers automate multi-channel reconciliations and stay 100% compliant with HMRC Making Tax Digital.',
    badgeText: 'Online Traders',
    metrics: { likes: 52, shares: 19 },
  },
  {
    id: 'upd-3',
    source: 'HMRC Alert',
    category: 'Tax Tips',
    timestamp: 'Yesterday',
    title: 'Self Assessment Reminder: Avoid the automatic £100 late penalty',
    snippet:
      'Sole traders, CIS contractors and directors: gathering your expense receipts now saves you stress in January. Tamima and the team are reviewing records this week—book your free slot.',
    badgeText: 'Deadline Advisory',
    metrics: { likes: 64, shares: 27 },
  },
  {
    id: 'upd-4',
    source: 'Practice News',
    category: 'Practice News',
    timestamp: '2 days ago',
    title: 'Local partner for Tilbury, Essex & nationwide remote digital portal',
    snippet:
      'Proud to serve local businesses in Tilbury and Essex while supporting growing companies across the UK with our secure cloud portal and Xero/QuickBooks integrations.',
    badgeText: 'Community',
    metrics: { likes: 45, shares: 8 },
  },
  {
    id: 'upd-5',
    source: 'LinkedIn',
    category: 'Tax Tips',
    timestamp: '3 days ago',
    title: 'Landlords: Navigating Section 24 and SPV Limited Companies',
    snippet:
      'Thinking of transferring buy-to-let properties to a limited company? Understand mortgage interest relief restrictions, stamp duty land tax (SDLT) and capital gains before making changes.',
    badgeText: 'Landlords',
    metrics: { likes: 73, shares: 31 },
  },
  {
    id: 'upd-6',
    source: 'X (Twitter)',
    category: 'HMRC & Regulatory',
    timestamp: '5 days ago',
    title: 'Making Tax Digital (MTD) for Income Tax roadmap guidance',
    snippet:
      'Upcoming phases of MTD will mandate quarterly digital submissions for qualifying self-employed individuals and landlords. Find out what you need in place today.',
    badgeText: 'MTD Ready',
    metrics: { likes: 29, shares: 14 },
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'bookkeeping',
    title: 'Bookkeeping',
    summary: 'Keep your records accurate and up to date, so you can focus on your business.',
    whatYouGet: [
      'Every transaction tracked and recorded accurately',
      'A clear view of business performance',
      'Records ready for VAT, payroll and year-end',
      'Monthly bank feed reconciliations',
    ],
    idealFor: 'Small businesses, freelancers & contractors wanting admin-free finance',
    icon: 'BookOpen',
  },
  {
    id: 'accounting',
    title: 'Accounting',
    summary: 'Reliable and accurate accounting services for all types of businesses.',
    whatYouGet: [
      'Annual accounts prepared accurately and filed on time',
      'Companies House statutory filing compliance',
      'Clear financial summaries and profit/loss insights',
      'Dedicated qualified accountant oversight',
    ],
    idealFor: 'Limited companies, partnerships and sole practitioners',
    icon: 'Calculator',
  },
  {
    id: 'tax-services',
    title: 'Tax Services',
    summary: 'Self Assessment, Corporation Tax, Capital Gains Tax, Inheritance Tax, VAT and more.',
    whatYouGet: [
      'Comprehensive personal & corporate tax planning',
      'Capital Gains Tax (including 60-day property filings)',
      'Inheritance Tax and estate advice',
      'Maximising allowable reliefs and allowances',
    ],
    idealFor: 'Directors, landlords, investors and growing firms',
    icon: 'Percent',
  },
  {
    id: 'tax-returns',
    title: 'Tax Returns',
    summary: 'Accurate and timely submissions so tax time is stress-free and nothing is missed.',
    whatYouGet: [
      'Self Assessment returns prepared and submitted to HMRC',
      'Corporation Tax (CT600) filings with full computations',
      'CIS returns and subcontractor deduction statements',
      'Liabilities kept as low as the rules allow',
    ],
    idealFor: 'Self-employed, company directors and property owners',
    icon: 'FileText',
  },
  {
    id: 'management-accounts',
    title: 'Management Accounts',
    summary: 'Clear, simple reports to help you make better decisions.',
    whatYouGet: [
      'Monthly or quarterly management performance reports',
      'Cash flow analysis and budgeting guidance',
      'Insight into margins, overheads and profit drivers',
      'Support with bank finance and expansion decisions',
    ],
    idealFor: 'Growing SMEs and ambitious company founders',
    icon: 'BarChart3',
  },
  {
    id: 'landlord-services',
    title: 'Landlord Services',
    summary: 'Accounts, tax returns, CIS and a digital portal designed for landlords.',
    whatYouGet: [
      'Rental income and allowable expenditure tracking',
      'Section 24 mortgage interest relief calculations',
      'Property portfolio incorporation guidance (SPV Ltd)',
      'Digital portal for hassle-free receipt management',
    ],
    idealFor: 'Buy-to-let landlords and commercial property investors',
    icon: 'Home',
  },
  {
    id: 'personal-tax-return',
    title: 'Personal Tax Return',
    summary: 'We help with your personal tax returns, ensuring you pay the right amount and keep more of what you earn.',
    whatYouGet: [
      'Personal income and dividend reconciliation',
      'Foreign income, pensions and capital gains accounted for',
      'Direct submission to HMRC before the January rush',
      'Clear guidance on payment deadlines and payments on account',
    ],
    idealFor: 'Individuals with multiple income streams or director dividends',
    icon: 'User',
  },
  {
    id: 'online-trader-support',
    title: 'Online Trader Support',
    summary: 'Bookkeeping, VAT, self assessment and compliance for e-commerce and online businesses.',
    whatYouGet: [
      'Shopify, Amazon, eBay, Etsy & TikTok Shop reconciliations',
      'Cross-border VAT, OSS, and digital service compliance',
      'Payment gateway fee matching (Stripe, PayPal, Klarna)',
      'Inventory cost of sales tracking and margin analysis',
    ],
    idealFor: 'E-commerce sellers, dropshippers and digital service providers',
    icon: 'Globe',
    badge: 'Popular',
  },
  {
    id: 'mtd-services',
    title: 'Making Tax Digital (MTD)',
    summary: 'Stay compliant with MTD for VAT and Income Tax.',
    whatYouGet: [
      'Cloud software setup and digital linking (Xero / QuickBooks)',
      'MTD quarterly VAT return submissions directly to HMRC',
      'Preparation for MTD for Income Tax Self Assessment (ITSA)',
      'Paperless workflows and digital receipt scanning',
    ],
    idealFor: 'All VAT-registered businesses and landlords preparing for MTD',
    icon: 'Laptop',
  },
  {
    id: 'acsp-identity-verification',
    title: 'Free Companies House Identity Verification',
    summary: 'We are registered with Companies House as an ACSP (Authorised Corporate Service Provider) for identity verification.',
    whatYouGet: [
      'FREE identity verification for all Finovate clients',
      'Direct authorized submission to Companies House registers',
      'Full compliance with Economic Crime & Corporate Transparency Act',
      'Secure cryptographic ID checks with zero bureaucratic delays',
    ],
    idealFor: 'All UK limited company directors and Persons with Significant Control (PSCs)',
    icon: 'ShieldCheck',
    badge: 'FREE FOR CLIENTS',
  },
  {
    id: 'hr-services',
    title: 'HR Services',
    summary: 'Employment support, policies and guidance for your team.',
    whatYouGet: [
      'Employment contract templates and handbook policies',
      'Payroll integration and statutory sick/maternity compliance',
      'Workplace pension auto-enrolment setup',
      'Employee onboarding and compliance guidance',
    ],
    idealFor: 'Small businesses hiring staff or restructuring teams',
    icon: 'Users',
  },
  {
    id: 'financial-planning',
    title: 'Financial Planning & Advisory',
    summary: 'Expert guidance on cash flow, budgeting and growth, helping your business stay financially healthy for the long term.',
    whatYouGet: [
      'Cash flow forecasting and runway planning',
      'Support with sustainable growth decisions',
      'Proactive tax efficiency reviews before financial year-end',
      'Regular strategy reviews with qualified accountant Tamima Chowdhury',
    ],
    idealFor: 'Business owners wanting proactive advisory rather than retroactive filing',
    icon: 'TrendingUp',
  },
];

export const HOW_IT_WORKS = [
  {
    step: '1',
    title: 'Free 30-Minute Consultation',
    description:
      'A relaxed 30-minute conversation about your business, your numbers and where you need support. No obligation.',
  },
  {
    step: '2',
    title: 'Review',
    description:
      'We review your current records, deadlines, software set-up and HMRC registrations to spot gaps and quick wins.',
  },
  {
    step: '3',
    title: 'Tailored Plan',
    description:
      'We agree a clear scope and working approach tailored exactly to how your business operates, with payments discussed directly.',
  },
  {
    step: '4',
    title: 'Ongoing Support',
    description:
      'Reliable day-to-day help, proactive advice and deadline peace of mind as your business grows.',
  },
];

export const AUDIENCE_SEGMENTS = [
  {
    title: 'Limited companies',
    description: 'Accounts, VAT, payroll, director dividends and Corporation Tax handled all under one roof.',
    features: ['Companies House filings', 'Free ACSP Identity Verification', 'Director remuneration planning'],
  },
  {
    title: 'Sole traders and contractors',
    description: 'Bookkeeping, CIS returns and Self Assessment without the stress or late penalties.',
    features: ['Direct HMRC agent access', 'CIS refund reconciliations', 'Allowable expense tracking'],
  },
  {
    title: 'Landlords and investors',
    description: 'Accounts, tax returns, CIS and a digital portal designed specifically for landlords.',
    features: ['Section 24 mortgage relief', 'SPV Limited Company structuring', '60-day CGT property returns'],
  },
  {
    title: 'Online traders & E-commerce',
    description: 'Specialist accounting for Shopify, Amazon, eBay, TikTok Shop and digital businesses.',
    features: ['Multi-channel sales reconciliation', 'Cross-border VAT compliance', 'Inventory & fee matching'],
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'What happens in the free 30-minute consultation?',
    answer:
      'We talk through your business, what you need right now and where you want to get to. We discuss your setup, deadlines, and tailored service options so you leave with clearer next steps and no pressure or obligation to commit.',
  },
  {
    question: 'How do you handle fees and payments?',
    answer:
      'Every business is unique. During our free consultation, we assess your exact volume, entity type, and requirements, then provide a bespoke, transparent agreement with no hidden costs or surprise hourly clocks.',
  },
  {
    question: 'What is the Companies House Identity Verification service?',
    answer:
      'Under the new UK Economic Crime and Corporate Transparency Act, all company directors and Persons with Significant Control (PSCs) must verify their identity. Finovate is an Authorised Corporate Service Provider (ACSP) registered with Companies House, and we provide this verification completely FREE for our clients.',
  },
  {
    question: 'Do you only work with businesses in Tilbury and Essex?',
    answer:
      'While we are proud to be your local accountancy partner based at 12 Parker Avenue, Tilbury RM18 8JA, our secure digital cloud portal allows us to serve limited companies, sole traders, and e-commerce traders across the entire UK.',
  },
  {
    question: 'Can I switch from my current accountant?',
    answer:
      'Yes, switching is straightforward. We handle professional clearance directly with your existing accountant, transfer your records, and ensure nothing falls between the cracks.',
  },
  {
    question: 'Are you Making Tax Digital (MTD) ready?',
    answer:
      'Yes, we are 100% MTD ready for VAT and upcoming Income Tax Self Assessment (ITSA) regulations, working seamlessly with certified platforms like Xero and QuickBooks.',
  },
];

export const CLIENT_STORIES: ClientStory[] = [
  {
    id: '1',
    quote:
      'Tamima restructured our company accounting and payroll before year-end, spotting legitimate allowances our previous firm missed. The peace of mind is priceless.',
    clientName: 'Julian Mercer',
    businessType: 'Director, Mercer Media Ltd',
    location: 'Essex & London',
    outcome: 'Flawless MTD compliance & dedicated support',
  },
  {
    id: '2',
    quote:
      'As an Amazon and Shopify seller, reconciling multi-currency payouts and VAT was a nightmare until Finovate took over. They understand modern e-commerce.',
    clientName: 'Liam T.',
    businessType: 'Online Retailer',
    location: 'Remote / UK',
    outcome: 'Automated sales reconciliation & accurate VAT',
  },
  {
    id: '3',
    quote:
      'Having a local accountant in Tilbury who is also an Authorised ACSP gave me huge confidence. The free 30-minute consultation answered all my questions upfront.',
    clientName: 'Marcus Evans',
    businessType: 'Property Investor & Landlord',
    location: 'Tilbury, Essex',
    outcome: 'Free Companies House verification & smooth portfolio filing',
  },
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'acsp-rules',
    category: 'COMPANIES HOUSE',
    title: 'Companies House Identity Verification: What UK Directors Must Know',
    summary: 'The Economic Crime and Corporate Transparency Act introduces mandatory identity verification for all UK company directors and PSCs.',
    readTime: '3 min read',
    publishDate: 'October 2026',
    content: [
      'The UK government has instituted historic reforms under the Economic Crime and Corporate Transparency Act. A central pillar is mandatory identity verification for all new and existing company directors and Persons with Significant Control (PSCs).',
      'To prevent fraudulent incorporations, verification must be conducted directly via Companies House or through an Authorised Corporate Service Provider (ACSP).',
      'Finovate Accountancy is a registered ACSP, enabling us to conduct verified checks directly for our clients at zero extra charge.',
    ],
  },
  {
    id: 'ecommerce-vat',
    category: 'ONLINE TRADERS',
    title: 'E-Commerce Accounting: Multi-Channel VAT and Sales Reconciliations',
    summary: 'Selling on Amazon, Shopify or TikTok Shop? How to handle marketplace fees, OSS, and digital records.',
    readTime: '4 min read',
    publishDate: 'October 2026',
    content: [
      'E-commerce businesses face unique complexities: payout fees, returns, gift cards, and varying VAT rules across UK and EU jurisdictions.',
      'Marketplaces like Amazon and eBay withhold deemed VAT in certain transactions, which can create significant confusion on standard VAT returns if not reconciled correctly.',
      'Finovate helps online sellers configure automated sync tools to ensure sales figures, platform fees, and VAT liabilities match HMRC records perfectly.',
    ],
  },
  {
    id: 'capital-gains',
    category: 'CAPITAL GAINS',
    title: 'Capital Gains Tax changes: what you need to know',
    summary: 'How recent reforms affect UK individuals, landlords, property investors, and business owners.',
    readTime: '4 min read',
    publishDate: 'October 2026',
    content: [
      'Capital Gains Tax (CGT) rules for UK property disposals and business assets continue to evolve. Understanding annual exempt amounts and qualifying reliefs like Business Asset Disposal Relief (BADR) is essential for avoiding surprise tax liabilities.',
      'For residential property sales, UK residents must report and pay any CGT due within 60 days of completion using HMRC’s online service.',
      'We advise taking proactive steps before signing disposal agreements to ensure maximum utilization of spousal transfers and available expense deductions.',
    ],
  },
];

export const UPCOMING_SLOTS: BookingSlot[] = [
  {
    date: '2026-10-22',
    displayDate: 'Thu 22 Oct',
    times: ['09:30', '11:00', '13:30', '15:00', '16:30'],
  },
  {
    date: '2026-10-23',
    displayDate: 'Fri 23 Oct',
    times: ['09:30', '11:00', '13:30', '15:00', '16:30'],
  },
  {
    date: '2026-10-26',
    displayDate: 'Mon 26 Oct',
    times: ['10:00', '11:30', '14:00', '15:30', '17:00'],
  },
  {
    date: '2026-10-27',
    displayDate: 'Tue 27 Oct',
    times: ['09:30', '11:00', '13:30', '15:00', '16:30'],
  },
  {
    date: '2026-10-28',
    displayDate: 'Wed 28 Oct',
    times: ['10:00', '11:30', '13:30', '15:00', '16:00'],
  },
];

export const TAX_DEADLINES = [
  {
    name: 'Self Assessment Online Filing & Tax Payment',
    date: '31 January 2027',
    tag: 'Sole Traders & Directors',
    urgency: 'Annual Milestone',
    tip: 'Avoid the £100 instant late filing penalty by submitting records well ahead of the deadline.',
  },
  {
    name: 'Quarterly VAT Return & Payment',
    date: '7th of month following quarter end',
    tag: 'VAT Registered Businesses & Online Traders',
    urgency: 'Quarterly',
    tip: 'MTD-compatible digital submission directly through reconciled cloud accounting software.',
  },
  {
    name: 'Corporation Tax Payment (HMRC)',
    date: '9 months & 1 day after company year-end',
    tag: 'Limited Companies',
    urgency: 'Financial Year End',
    tip: 'Clear calculation of your liability with full deduction of allowable reliefs.',
  },
  {
    name: 'Annual Accounts (Companies House)',
    date: '9 months after accounting reference date',
    tag: 'Limited Companies',
    urgency: 'Statutory Requirement',
    tip: 'Must include verified director credentials under new ACSP identity verification rules.',
  },
];
