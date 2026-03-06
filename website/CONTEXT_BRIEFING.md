# Magpie Context Briefing for Claude

**Last Updated:** 2026-01-15
**Purpose:** This document provides comprehensive context about Magpie for future Claude instances to understand the product, codebase, and business.

---

## 1. Product Overview

**Name:** Magpie
**Tagline:** "Because 'who owes what' should feel like this."
**Website:** https://magpie.money
**Play Store:** https://play.google.com/store/apps/details?id=com.helgolabs.magpie

### What is Magpie?

Magpie is a bill-splitting mobile app that automatically imports bank transactions via open banking, making expense sharing effortless. Users can split bills in 3 taps instead of manually entering every expense.

### Current Status (as of Jan 2026)

- **Launch Status:** Just launched v1.0 on Google Play Store (Dec 2025)
- **Users:** 0 users (in very early stage)
- **Version:** Android 3.5.26 (versionCode 99)
- **iOS:** Not yet available (coming soon, waitlist active)
- **Stage:** Post-launch, pre-growth

---

## 2. Core Features & Functionality

### Key Differentiator

**Automatic transaction import via open banking** - This is Magpie's moat. Competitors like Splitwise and Tricount require manual entry. Magpie automatically pulls transactions from connected bank accounts.

### Main Features

1. **Open Banking Integration**
   - Powered by GoCardless
   - Connects to UK banks and credit cards
   - Automatic transaction import
   - Read-only access (cannot move money)
   - FCA regulated

2. **3-Tap Bill Splitting**
   - Select imported transaction
   - Choose who to split with
   - Done - balances update instantly
   - Equal or custom splits (amounts or percentages)

3. **Guest Accounts**
   - Non-users can be added to groups
   - Split expenses with anyone
   - No app installation required for guests
   - Can invite guests to join later

4. **Works Offline**
   - Full offline functionality
   - Automatic sync when back online
   - Perfect for travel

5. **Multi-Currency Support**
   - All major currencies supported
   - Ideal for international group travel
   - Automatic currency tracking

6. **Group Management**
   - Unlimited groups
   - Custom group names and images
   - Archive old groups
   - Invite links for easy joining

7. **Real-Time Balance Tracking**
   - Live balance updates
   - Per-person and per-group views
   - Settlement tracking
   - Transaction history

8. **Smart Features**
   - Automatic expense categorization
   - Recurring expenses (rent, utilities)
   - Push notifications
   - Biometric security

---

## 3. Target Audience

### Primary Use Cases

1. **Flatmates (Primary)**
   - Sharing rent, utilities, groceries
   - Recurring bills
   - UK focus (London, Manchester, Bristol)

2. **Couples**
   - Shared expenses
   - Date nights, groceries, rent
   - Fair cost tracking

3. **Group Travel**
   - Holidays, road trips
   - Multi-currency expenses
   - International travelers

4. **Students**
   - Student houses
   - Shared living costs
   - Budget-conscious

### Geographic Focus

- **Primary:** United Kingdom
- **Reason:** Open banking connections only work with UK banks (currently)
- **Manual mode:** Works anywhere in the world

---

## 4. Monetization Model

### Subscription Tiers

| Tier | Monthly | Yearly | Bank Connections | Target User |
|------|---------|--------|------------------|-------------|
| **FREE** | £0.00 | £0.00 | 0 | Manual entry users |
| **STARTER** | £1.99 | £21.99 (17% off) | 1 | Single card users |
| **PREMIUM** | £2.99 | £32.99 (17% off) | 5 | Most users (multiple cards) |
| **ULTIMATE** | £3.99 | £34.99 (17% off) | 10 | Power users |

### Free Tier Includes

- Unlimited expenses
- Unlimited groups
- Guest accounts
- Offline mode
- Multi-currency support
- Basic expense splitting

### Paid Tier Value Proposition

**The only thing you pay for is bank connections** - Everything else is free. The value proposition is "save time by connecting your bank instead of manually entering expenses."

### Conversion Strategy

- 7-day free trial on all paid plans
- Upgrade prompts after 3rd manual expense
- Show "time saved" calculations
- Preview of transactions available to import

---

## 5. Competitive Landscape

### Main Competitors

1. **Splitwise** (Market Leader)
   - Manual entry only
   - Established user base
   - No bank connections
   - Free with ads

2. **Tricount**
   - Manual entry only
   - Popular in Europe
   - Simple interface

3. **Settle Up**
   - Manual entry
   - Multiple platforms

### Competitive Advantage

**Magpie is the ONLY expense splitter with open banking integration.** This is the core differentiator and should be emphasized in all marketing:

- "The only expense splitter that connects to your bank"
- "Automatic transaction import vs manual entry"
- "Never forget to log an expense again"
- "Save hours of time"

---

## 6. Technical Stack

### Android App

**Location:** `/Users/th/AndroidStudioProjects/magpie`

**Tech Stack:**
- Kotlin
- Jetpack Compose (Material 3)
- MVVM Architecture
- Room Database (local storage)
- Retrofit (API calls)
- Coroutines (async operations)
- Firebase (Analytics, FCM notifications)
- Google Play Billing v7.1.1 (subscriptions)
- GoCardless (open banking via backend)
- Coil (image loading)
- WorkManager (background sync)

**Key Details:**
- Package: `com.helgolabs.magpie`
- Min SDK: 29 (Android 10+)
- Target SDK: 35
- Version: 3.5.26
- Build variants: debug, staging, release

**Backend API:**
- Production: https://api.magpie.money
- Staging: https://staging-api.magpie.money
- Dev: http://192.168.1.63:3000 (local)

**Key Features in Code:**
- Biometric authentication
- Offline-first architecture
- Real-time sync
- Deep linking (magpie://)
- Push notifications
- In-app updates
- Play Store review prompts
- Image cropping for group photos

### Website

**Location:** `/Users/th/magpie-website/website`

**Tech Stack:**
- Next.js 16.1.0 (App Router)
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4
- Vercel Analytics
- Hosted on Vercel

**Pages:**
- `/` - Homepage with hero, features, how it works
- `/features` - Detailed feature breakdown
- `/pricing` - Subscription tier comparison
- `/how-it-works` - Step-by-step guide
- `/faq` - Comprehensive FAQ
- `/use-cases/flatmates` - Flatmate use case
- `/use-cases/couples` - Couples use case
- `/use-cases/travel` - Travel use case
- `/blog` - Marketing blog (4 posts currently)
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/delete-account` - GDPR account deletion
- `/invite/[code]` - Group invite deep links

**SEO Features:**
- Open Graph tags
- JSON-LD structured data
- Sitemap.xml
- Robots.txt
- Optimized meta descriptions

---

## 7. Marketing Strategy

### Current State

- **Users:** 0
- **Marketing:** No active campaigns yet
- **Content:** 4 blog posts published
- **Social:** No active social media presence
- **Paid Ads:** None

### Marketing Positioning

**Primary Message:** "The only bill-splitting app that connects to your bank"

**Value Propositions:**
1. **Automatic** - Transactions import automatically
2. **Fast** - Split in 3 taps (10x faster than manual)
3. **Accurate** - Never forget to log an expense
4. **Secure** - FCA regulated, bank-grade encryption
5. **Works Offline** - Perfect for travel

### Target Keywords

- bill splitting app
- split expenses with flatmates
- splitwise alternative
- expense tracker with bank connection
- open banking expense app
- uk flatmate bills

### Marketing Plan

A comprehensive 90-day marketing plan exists at `/Users/th/magpie-website/website/MARKETING_PLAN.md` covering:
- Play Store ASO optimization
- Website SEO
- Content marketing (blog strategy)
- Reddit marketing (r/UKPersonalFinance, r/HouseShare)
- Product Hunt launch
- Social media strategy

**Priority Focus:** Getting first 50 users through Reddit + Product Hunt before scaling to paid channels.

---

## 8. Brand Voice & Messaging

### Tone

- Friendly and approachable
- Clear and straightforward
- Focus on benefits, not features
- UK-centric (use £, mention UK banks)
- Avoid financial jargon
- Problem-focused ("Stop chasing friends for money")

### Key Messaging Angles

1. **Problem/Solution:** "Fed up with chasing friends for money? Magpie makes splitting bills effortless."
2. **Time-saving:** "Save hours with automatic transaction import"
3. **Trust:** "FCA regulated, bank-grade security, GDPR compliant"
4. **Simplicity:** "Split bills in 3 taps"
5. **Flexibility:** "Works even if your friends don't have the app"

### What NOT to Emphasize

- Don't lead with "app for budgeting" - it's specifically for SPLITTING bills with others
- Don't oversell AI/automation - keep it simple
- Don't focus on individual expense tracking - this is about GROUP expenses
- Don't use generic fintech language - speak like a real person

---

## 9. User Journey

### Ideal User Flow

1. **Discovery** → User finds Magpie via Play Store search, Reddit, or friend recommendation
2. **Download** → Installs from Play Store
3. **Onboarding** → Quick tutorial showing value props
4. **Create Group** → Sets up first group (e.g., "Flat 21" or "Portugal Holiday")
5. **Add Members** → Invites flatmates or adds guests
6. **First Expense** → Manually adds first expense to learn the flow
7. **Upgrade Prompt** → After 3rd expense, shown benefit of bank connection
8. **Free Trial** → Starts 7-day trial, connects bank account
9. **Aha Moment** → Sees transactions auto-import, realizes the value
10. **Conversion** → Subscribes to paid plan
11. **Retention** → Regular usage, invites friends, long-term subscriber

### Friction Points to Watch

- Paywall timing (too early = drop off, too late = missed revenue)
- Trust in open banking (security concerns)
- Friend adoption (network effects)
- Understanding the value prop (auto-import vs manual)

---

## 10. Business Model Insights

### Unit Economics (Assumptions)

- **Avg Monthly Subscription:** £2.99 (Premium tier expected to be most popular)
- **Avg Customer Lifetime:** 12-18 months (typical for expense apps)
- **LTV Target:** £35-50
- **CAC Target:** <£15 (to achieve 3:1 LTV:CAC ratio)

### Revenue Strategy

**Freemium Model Rationale:**
- Free tier attracts users and proves value
- Network effects (groups need multiple people)
- Conversion to paid when users see time-saving benefit
- Bank connection is clear, valuable upgrade

**Free Tier Strategy:**
- Not hobbled - all core features work
- Acts as viral growth driver (guests become users)
- Upgrade path is clear (connect banks to save time)

---

## 11. Key Files & Locations

### Android App

```
/Users/th/AndroidStudioProjects/magpie/
├── app/
│   ├── build.gradle.kts (dependencies, version info)
│   ├── src/main/
│   │   ├── AndroidManifest.xml (permissions, deep links)
│   │   ├── java/com/helgolabs/magpie/
│   │   │   ├── MainActivity.kt
│   │   │   ├── ui/screens/ (all app screens)
│   │   │   ├── ui/viewmodels/ (business logic)
│   │   │   ├── data/local/ (Room database)
│   │   │   ├── data/network/ (API calls)
│   │   │   └── utils/ (helpers)
└── ONBOARDING_IMPLEMENTATION_PLAN.md
```

### Website

```
/Users/th/magpie-website/website/
├── app/
│   ├── page.tsx (homepage)
│   ├── features/page.tsx
│   ├── pricing/page.tsx
│   ├── how-it-works/page.tsx
│   ├── faq/page.tsx
│   ├── blog/ (marketing content)
│   ├── use-cases/ (targeted landing pages)
│   └── lib/constants.ts
├── public/ (images, assets)
├── MARKETING_PLAN.md
└── CONTEXT_BRIEFING.md (this file)
```

---

## 12. Important Context for Future Work

### When Working on Marketing

- **Zero users = validation phase** - Focus on first 50 users, not scaling
- **Test one channel at a time** - Don't spread thin
- **Content via mobile:** Claude mobile app can draft social posts, blog articles, ad copy, email campaigns
- **Reddit is key:** r/UKPersonalFinance, r/HouseShare, r/StudentUK are high-value communities
- **Product Hunt:** One-shot opportunity to get initial users
- **Lead with the moat:** Always emphasize automatic bank import as the key differentiator

### When Working on Code

**Android App:**
- Local-first architecture - app works fully offline
- Room database is source of truth
- API calls sync with backend
- Deep links follow pattern: `magpie://host/path`
- Billing integration is Google Play Billing v7
- GoCardless integration happens via backend API

**Website:**
- Next.js App Router (not Pages Router)
- Deployed on Vercel
- Uses Vercel Analytics (already set up)
- All styling via Tailwind CSS
- Play Store URL is in constants.ts

### When Working on Features

**Most Requested Features** (anticipate these):
- iOS app (in development)
- Direct payment integration (currently just tracks, doesn't facilitate payments)
- Recurring expenses templates
- Export to CSV/PDF
- Category budgeting
- Split by consumption (who ate what)

### When Working on Growth

**Key Metrics to Track:**
1. **Acquisition:** Daily installs, install sources
2. **Activation:** % who create first group, add first expense
3. **Retention:** Day 1, Day 7, Day 30 retention
4. **Revenue:** Free→Paid conversion rate, MRR, churn
5. **Referral:** Invites sent, invite→install conversion

---

## 13. Open Banking Context

### What is Open Banking?

Open banking allows third-party apps to securely access bank account data (read-only) via APIs. It's regulated by the FCA (Financial Conduct Authority) in the UK.

### How Magpie Uses It

1. User selects their bank in-app
2. Redirected to bank's official login (via GoCardless)
3. User grants read permission to Magpie
4. Transactions automatically sync
5. Magpie can ONLY read transactions, NEVER move money

### User Concerns to Address

- **Is it safe?** Yes - FCA regulated, bank-grade encryption
- **Can you access my money?** No - read-only access
- **Do you store my bank password?** No - authentication happens on bank's website
- **Can I disconnect?** Yes - anytime through the app or bank settings

### UK Banks Supported

Supports thousands of UK banks including:
- HSBC
- Barclays
- Lloyds
- NatWest
- Santander
- Monzo
- Revolut
- Starling
- And many more

---

## 14. Future Roadmap (Anticipated)

### Immediate (Next 3 Months)
- iOS app launch
- First 100 users
- Product-market fit validation
- Core feature stability

### Medium-term (3-6 Months)
- Referral program
- Direct payment integration exploration
- Advanced insights and analytics
- Improved categorization

### Long-term (6-12 Months)
- International expansion (EU open banking)
- Business/company expense features
- Advanced automation (smart reminders, auto-settle)

---

## 15. Common Questions & Answers

### Why bill-splitting vs general expense tracking?

Bill-splitting has clear monetization (people pay to save time on group expenses) and network effects (users invite friends). General expense tracking is commoditized.

### Why open banking instead of manual receipts?

Open banking provides automatic, accurate data without user effort. Receipts require photos, OCR, manual entry - too much friction.

### Why UK only?

Open banking regulation and infrastructure is most mature in UK. Will expand to EU (PSD2) and other markets as we grow.

### Why Android first?

Faster iteration, lower barrier to entry for indie developer. iOS coming soon.

### Why freemium vs fully paid?

Groups require multiple people. Free tier enables viral growth (guests become users, invite others). Conversion happens when users see time-saving value.

### What if users share one bank connection?

This is intentional - friends can share one Premium subscription (5 connections) between a group. Creates affordability and aligns incentives.

---

## 16. Critical Success Factors

### What Needs to Be True for Magpie to Succeed

1. **Users trust open banking** - Security messaging must be clear
2. **Bank connection is reliable** - GoCardless integration must work smoothly
3. **Aha moment is obvious** - Users must immediately see value of auto-import
4. **Network effects kick in** - Users must invite friends
5. **Conversion rate is healthy** - 3-5% free→paid minimum
6. **Retention is strong** - Users must stick around (habitual use)

### Biggest Risks

1. **Trust barrier** - Users scared of bank connections
2. **Competition** - Splitwise adds open banking
3. **Regulation** - Changes to open banking rules
4. **Adoption** - Can't get critical mass of users
5. **Monetization** - Free tier too good, no one upgrades

---

## 17. Developer Notes

### Running the Android App Locally

```bash
cd /Users/th/AndroidStudioProjects/magpie
# Open in Android Studio
# Select "debug" build variant for local development
# API points to http://192.168.1.63:3000 in debug mode
```

### Running the Website Locally

```bash
cd /Users/th/magpie-website/website
npm install
npm run dev
# Opens at http://localhost:3000
```

### Deploying

**Android:**
- Build variant: `release`
- Upload AAB to Google Play Console
- Internal testing → Production

**Website:**
- Push to main branch
- Vercel auto-deploys to https://magpie.money

---

## 18. Brand Assets

### Colors

- **Primary Blue:** #0F80E1 (bright, trustworthy)
- **Dark Blue:** #0B5A9F (depth)
- **Light Blue:** #3A9AE8 (accents)
- **Yellow:** #FFC107 (highlights, CTAs)
- **Green:** #4CAF50 (positive balances)
- **Red:** #F44336 (negative balances)

### Logo

- Magpie bird icon
- Available in /public/ directory

### Typography

- Website: System fonts via next/font (Geist)
- App: Material 3 default font (Roboto)

---

## 19. Support & Documentation

### User-Facing

- FAQ page: https://magpie.money/faq
- Privacy policy: https://magpie.money/privacy
- Terms: https://magpie.money/terms
- Account deletion: https://magpie.money/delete-account

### Internal

- Marketing plan: `MARKETING_PLAN.md`
- Onboarding plan: `ONBOARDING_IMPLEMENTATION_PLAN.md` (Android repo)
- This context briefing: `CONTEXT_BRIEFING.md`

---

## 20. Contact & Team

**Developer/Founder:** th (Thomas)
**Company:** HelgoLabs
**Support:** (to be set up)

---

## Quick Reference Summary

**Product:** Bill-splitting app with automatic bank import via open banking
**Differentiator:** Only expense splitter with bank connections
**Target:** UK flatmates, couples, travelers
**Status:** Just launched, 0 users
**Monetization:** Freemium (£0-£3.99/mo)
**Tech:** Kotlin/Compose (Android), Next.js (Web)
**Priority:** Get first 50 users to validate product-market fit

---

*This briefing should be read by any Claude instance working on Magpie to understand the full context of the product, business, and codebase.*
