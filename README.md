# Finovate Accountancy - Web Platform & Client Booking Hub

A modern, high-converting web platform and client appointment booking portal for **Finovate Accountancy**, led by qualified accountant **Tamima Chowdhury AFA MIPA**.

Built with React 19, TypeScript, Vite, and Tailwind CSS v4, styled in the signature **Montserrat** font family and brand palette.

---

## Features

- **Branded Design System**: Matching Finovate Accountancy's visual identity, logo mark, and colour palette (Spruce Teal `#0C2D2B`, Muted Sage `#3F7A74`, Warm Ochre `#E5A853`).
- **Dedicated Calendar & Booking Hub**:
  - Direct 4-step consultation scheduler (Phone, Video, In-Person).
  - 1-click **Add to Google Calendar** and **Download .ICS (Outlook/Apple Calendar)**.
  - Dedicated slot for **Calendly / Cal.com embed** or booking API integration.
- **Fast 30-Second Callback Request**: Captures mobile and immediate inquiries.
- **Recent Updates & Regulatory Live Feed**: Displays dynamic snippets from HMRC alerts, LinkedIn, e-commerce compliance, and practice news with interactive categories and social actions.
- **12 Comprehensive Accountancy Services**: Bookkeeping, Accounting, Tax Services, Tax Returns, Management Accounts, Landlord Services, Personal Tax Returns, MTD Quarterly Returns, Online Trader Support (Amazon/Shopify/TikTok Shop), Free Companies House Identity Verification (ACSP), HR Services, and Financial Planning.
- **Direct WhatsApp Chat Integration**: Click-to-chat with Tamima on `07932 869 761`.
- **UK Tax Deadlines Tracker**: Highlights key HMRC deadlines (Self Assessment, Corporation Tax, VAT).
- **Zero Pricing Friction**: Directs all prospects to the free 30-minute consultation call to discuss personalized packages directly.

---

## Getting Started

### Prerequisites

- **Node.js** v18+ or v20+
- **npm** or **bun** / **yarn**

### 1. Installation

Clone or extract the repository, navigate into the directory, and install dependencies:

```bash
npm install
```

### 2. Environment Variables

Create a local `.env` file from the provided `.env.example`:

```bash
cp .env.example .env
```

> **Security Note:** Never commit your `.env` file with actual API secrets to public repositories. `.gitignore` is already pre-configured to ignore all `.env*` files except `.env.example`.

### 3. Running Locally

Start the Vite development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) or [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Building for Production

Compile and bundle the production assets:

```bash
npm run build
```

The compiled output will be generated in the `/dist` directory, ready to deploy.

---

## Publishing to GitHub

To push this codebase to a new repository on your GitHub account:

1. **Initialize Git** (if not already initialized):
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Finovate Accountancy website"
   ```

2. **Link to your GitHub Repository**:
   Create a new empty repository on [GitHub](https://github.com/new), then run:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/finovate-accountancy.git
   git branch -M main
   git push -u origin main
   ```

---

## 1-Click Deployment Options

- **Vercel**: Import your GitHub repository into Vercel; framework preset auto-detects as Vite.
- **Netlify**: Connect repository, set build command to `npm run build` and publish directory to `dist`.
- **Cloudflare Pages / GitHub Pages**: Deploy the `dist` folder directly.

---

## Practice Information

- **Firm**: Finovate Accountancy Ltd
- **Principal**: Tamima Chowdhury AFA MIPA
- **Address**: 12 Parker Avenue, Tilbury RM18 8JA, Essex
- **Phone**: 07932 869 761
- **Email**: info@finovate-accountancy.co.uk
- **Website**: www.finovate-accountancy.co.uk
