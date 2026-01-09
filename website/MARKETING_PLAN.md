# Magpie.money Marketing Plan
## Goal: Increase App Downloads & Subscription Conversions

**Last Updated:** 2025-12-22
**Status:** Ready for implementation

---

## Executive Summary

**Product:** Magpie - a bill-splitting app with open banking integration
**Current State:** Production-ready app (v3.4.14), live website, zero marketing presence
**Monetization:** Freemium model (Free → Starter £1.99/mo → Premium £2.99/mo → Ultimate £3.99/mo)
**Key Differentiator:** Open banking integration for automatic transaction import (competitors require manual entry)

**Android App Location:** `/Users/th/AndroidStudioProjects/magpie`
**Website Location:** `/Users/th/magpie-website/website`

---

## Part 1: Play Store Optimization (ASO)

### 1.1 Store Listing Fundamentals

**App Title (30 chars max):**
```
Magpie: Split Bills & Expenses
```

**Short Description (80 chars):**
```
Split bills with friends. Connect your bank for automatic expense tracking.
```

**Full Description Structure:**
1. Hook (problem statement)
2. Solution (what Magpie does)
3. Key features (bullet points)
4. Social proof (when available)
5. Call to action

**Suggested Full Description:**
```
Fed up with chasing friends for money? Magpie makes splitting bills effortless.

🏦 CONNECT YOUR BANK
Link your cards and accounts to automatically import transactions. No more manual entry or forgotten expenses.

👥 SPLIT WITH ANYONE
Create groups for flatmates, holidays, or date nights. Works even if your friends don't have the app - add them as guests.

📱 WORKS OFFLINE
Add expenses anywhere. Magpie syncs when you're back online.

✨ KEY FEATURES
• Connect multiple bank accounts and credit cards
• Split bills in 3 taps
• See exactly who owes what
• Guest accounts for non-users
• Multi-currency support
• GDPR compliant & secure

Perfect for:
🏠 Flatmates sharing rent and bills
✈️ Group holidays and road trips
💑 Couples managing shared expenses
🍽️ Splitting restaurant bills fairly

Download free. Upgrade for bank connections.
```

### 1.2 Keywords to Target

**Primary Keywords:**
- bill splitting app
- split expenses
- splitwise alternative
- expense tracker friends
- shared expenses app
- money splitting app

**Long-tail Keywords:**
- split bills with flatmates
- holiday expense splitter
- couples expense tracker
- group expense manager
- automatic expense tracking

**UK-Specific:**
- bill splitting uk
- flatmate expenses uk
- open banking expense app

### 1.3 Visual Assets

**Screenshots (minimum 4, recommend 8):**
1. Hero: "You're owed £156.40" dashboard view
2. Bank connection: "Connect all your accounts"
3. Group view: "Track expenses with any group"
4. Split expense: "Split in 3 taps"
5. Guest accounts: "Works even if friends don't have the app"
6. Offline mode: "Works without internet"
7. Settlement: "See who owes what instantly"
8. Multi-currency: "Perfect for holidays abroad"

**Feature Graphic (1024x500):**
- Clean design with tagline: "Split bills. Not friendships."
- Show phone mockup with dashboard

**Short Video (30 sec):**
- Problem: "Splitting bills is awkward"
- Solution: Quick demo of 3-tap split
- Result: "Everyone knows who owes what"

---

## Part 2: Website SEO & Conversion Optimization

### 2.1 Technical SEO (Currently Missing)

**Immediate Fixes Required:**

1. **Add Open Graph tags** to `app/layout.tsx`:
```tsx
openGraph: {
  title: 'magpie.money - Split Bills with Friends',
  description: 'Connect your bank accounts and split expenses automatically.',
  url: 'https://magpie.money',
  siteName: 'magpie.money',
  images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  locale: 'en_GB',
  type: 'website',
}
```

2. **Add Twitter Card tags** to `app/layout.tsx`

3. **Create sitemap.xml** at `/public/sitemap.xml`

4. **Create robots.txt** at `/public/robots.txt`

5. **Add JSON-LD structured data** (SoftwareApplication schema)

### 2.2 Content Pages to Add

| Page | Purpose | Target Keywords |
|------|---------|-----------------|
| `/features` | Detailed feature breakdown | expense splitting features, bank connection app |
| `/pricing` | Clear pricing comparison | free expense tracker, premium features |
| `/how-it-works` | Step-by-step guide | how to split bills with app |
| `/vs-splitwise` | Comparison page | splitwise alternative, better than splitwise |
| `/use-cases/flatmates` | Targeted landing | flatmate expense tracker |
| `/use-cases/couples` | Targeted landing | couples expense app |
| `/use-cases/travel` | Targeted landing | travel expense splitter |
| `/blog` | Content marketing hub | (various informational queries) |
| `/faq` | Address objections | how does open banking work |

### 2.3 Landing Page Improvements

**Current Issues:**
- No clear pricing/value proposition for free vs paid
- No social proof
- No FAQ section
- Meta description mentions "budgets" and "insights" which aren't visible features

**Recommended Additions:**
1. **Pricing section** - Show the 4 tiers clearly
2. **Trust badges** - "Bank-grade security", "GDPR Compliant", "Open Banking Regulated"
3. **FAQ accordion** - Answer common objections
4. **Testimonials section** - Add when available
5. **"How it works"** - 3-step visual guide

---

## Part 3: Content Marketing Strategy

### 3.1 Blog Content Calendar (First 3 Months)

**Month 1 - Foundation:**
| Week | Topic | Target Keyword |
|------|-------|----------------|
| 1 | "How to Split Bills Fairly with Flatmates" | split bills flatmates |
| 2 | "What is Open Banking? A Simple Guide" | open banking explained |
| 3 | "5 Money Mistakes That Ruin Friendships" | money and friendships |
| 4 | "Magpie vs Splitwise: Which is Better?" | splitwise alternative |

**Month 2 - Use Cases:**
| Week | Topic | Target Keyword |
|------|-------|----------------|
| 1 | "The Ultimate Guide to Group Holiday Budgeting" | group holiday budget |
| 2 | "How Couples Can Manage Shared Finances" | couples shared expenses |
| 3 | "Road Trip Cost Calculator: How to Split Fairly" | road trip expenses |
| 4 | "Student House Bill Splitting Made Easy" | student bills split |

**Month 3 - Authority:**
| Week | Topic | Target Keyword |
|------|-------|----------------|
| 1 | "Open Banking Apps: Are They Safe?" | open banking safe |
| 2 | "10 Apps Every UK Flatmate Needs" | flatmate apps uk |
| 3 | "Why Manual Expense Tracking Fails" | expense tracking tips |
| 4 | "The Psychology of Splitting Bills" | splitting bills awkward |

### 3.2 Content Distribution

**Channels:**
1. **Reddit** - r/UKPersonalFinance, r/london, r/StudentUK, r/CasualUK
2. **Twitter/X** - Personal finance tips, engage with UK fintech community
3. **LinkedIn** - Open banking industry content, B2B potential
4. **Product Hunt** - Launch campaign
5. **Hacker News** - If technical angle works

---

## Part 4: User Acquisition Channels

### 4.1 Organic Channels (Free)

| Channel | Tactic | Expected Impact |
|---------|--------|-----------------|
| **Google Play Search** | ASO optimization | High - primary discovery |
| **Google Web Search** | SEO + content | Medium - long-term growth |
| **Reddit** | Genuine participation + strategic posts | Medium - engaged users |
| **Product Hunt** | Launch campaign | Medium - tech early adopters |
| **App review sites** | Outreach to finance app reviewers | Low-Medium |
| **Word of mouth** | Referral program (future) | High - best conversion |

### 4.2 Paid Channels (When Ready)

| Channel | Best For | Estimated CPI |
|---------|----------|---------------|
| **Google App Campaigns** | Intent-based acquisition | £1-3 |
| **Facebook/Instagram** | Lifestyle targeting (travel, students) | £2-5 |
| **TikTok** | Gen Z flatmates, students | £1-4 |
| **Influencer (micro)** | UK personal finance creators | Variable |

### 4.3 Partnership Opportunities

1. **Student unions** - Freshers week promotions
2. **Estate agents** - Flatmate recommendation
3. **Travel bloggers** - Group travel content
4. **UK banks** - Open banking showcase
5. **Comparison sites** - MoneySupermarket, etc.

---

## Part 5: Conversion Optimization (Free → Paid)

### 5.1 Current Subscription Funnel

```
Free User → Tries to add bank → Paywall → Starter/Premium/Ultimate
```

### 5.2 Optimization Tactics

**A. Value Demonstration:**
- Show "transactions you could import" preview before paywall
- Display "time saved" calculator (manual entry vs auto-import)
- Free trial period for bank connections (7 days)

**B. Pricing Psychology:**
- Highlight yearly savings (£2/mo vs £24/year = 17% off)
- Show "most popular" badge on Premium tier
- Anchor with Ultimate tier to make Premium seem reasonable

**C. Trigger Points:**
- Prompt upgrade after 3rd manually-entered expense
- Remind when adding expenses abroad (multi-currency = upgrade)
- Suggest upgrade when group balance exceeds £100

**D. Reduce Friction:**
- One-tap upgrade from in-app prompts
- Clear feature comparison table
- Money-back messaging (Play Store policy)

### 5.3 Retention Tactics

- Weekly "you're owed" push notifications
- Monthly summary emails
- Settlement reminders
- New feature announcements
- Group activity notifications

---

## Part 6: Metrics to Track

### 6.1 Acquisition Metrics
| Metric | Target |
|--------|--------|
| Daily installs | Track growth rate |
| Install sources | Identify best channels |
| Website → Store conversion | >30% |
| Store listing conversion | >25% |

### 6.2 Activation Metrics
| Metric | Target |
|--------|--------|
| Day 1 retention | >40% |
| Day 7 retention | >20% |
| First expense created | >60% of installs |
| First group created | >40% of installs |

### 6.3 Revenue Metrics
| Metric | Target |
|--------|--------|
| Free → Paid conversion | >3% |
| Trial → Paid conversion | >30% |
| MRR growth | Track monthly |
| Subscriber churn | <5% monthly |
| LTV:CAC ratio | >3:1 |

---

## Part 7: Implementation Checklist (90-Day Plan)

### Phase 1: Foundation (Days 1-30)

#### Website Technical SEO
- [ ] Add Open Graph meta tags to `app/layout.tsx`
- [ ] Add Twitter Card meta tags to `app/layout.tsx`
- [ ] Create `/public/sitemap.xml`
- [ ] Create `/public/robots.txt`
- [ ] Add JSON-LD structured data (SoftwareApplication schema)
- [ ] Update meta description to match actual features
- [ ] Set up Google Search Console
- [ ] Set up Google Analytics 4 (in addition to Vercel Analytics)

#### Website Content
- [ ] Create `/pricing` page with 4-tier comparison
- [ ] Create `/faq` page addressing common objections
- [ ] Add "How it works" section to homepage
- [ ] Add trust badges section (security, GDPR, open banking)
- [ ] Create OG image for social sharing (`/public/og-image.png`)

#### Play Store
- [ ] Update app title to "Magpie: Split Bills & Expenses"
- [ ] Update short description (80 chars)
- [ ] Update full description with keywords
- [ ] Create 8 high-quality screenshots
- [ ] Create feature graphic (1024x500)
- [ ] Add relevant categories and tags

### Phase 2: Content & Visibility (Days 31-60)

#### Content Creation
- [ ] Set up `/blog` section on website
- [ ] Write: "How to Split Bills Fairly with Flatmates"
- [ ] Write: "What is Open Banking? A Simple Guide"
- [ ] Write: "5 Money Mistakes That Ruin Friendships"
- [ ] Write: "Magpie vs Splitwise: Which is Better?"
- [ ] Create `/vs-splitwise` comparison landing page

#### Distribution
- [ ] Launch on Product Hunt
- [ ] Begin authentic Reddit participation
- [ ] Create Twitter/X account and start posting
- [ ] Reach out to 10 UK personal finance bloggers
- [ ] Submit to app review sites

#### Website Enhancements
- [ ] Create `/features` detailed page
- [ ] Create `/how-it-works` page
- [ ] Create `/use-cases/flatmates` landing page
- [ ] Create `/use-cases/couples` landing page
- [ ] Create `/use-cases/travel` landing page

### Phase 3: Scale & Optimize (Days 61-90)

#### Optimization
- [ ] Analyze Play Store conversion data
- [ ] A/B test Play Store screenshots
- [ ] Analyze website conversion funnel
- [ ] Optimize upgrade prompts in app based on data
- [ ] Gather and display user testimonials

#### Growth
- [ ] Consider paid acquisition test (small budget £100-500)
- [ ] Build email list from iOS waitlist
- [ ] Plan referral program feature
- [ ] Write Month 2 blog content
- [ ] Explore partnership opportunities

---

## Quick Wins (Implement First)

**Priority 1 - This Week:**
1. Play Store listing - Update title, descriptions with keywords
2. Website SEO - Add Open Graph tags, sitemap.xml, robots.txt
3. Pricing page - Add clear pricing to website
4. Google Search Console - Verify site, submit sitemap

**Priority 2 - Next Week:**
5. Screenshots - Create professional Play Store screenshots
6. FAQ page - Address common objections
7. Trust badges - Add security/compliance messaging
8. OG image - Create social sharing image

---

## Key Competitive Advantage

**"The only expense splitter that connects to your bank"**

Splitwise requires manual entry. Tricount requires manual entry. Magpie automatically imports transactions. This is the moat. Lead with it everywhere:

- Play Store: "Automatic expense tracking via open banking"
- Website hero: "Connect your bank. Split automatically."
- Content: "Why manual expense tracking fails"
- Comparison: "Magpie vs Splitwise: automatic vs manual"

---

## Reference: Current Tech Stack

**Website:**
- Next.js 16.1.0
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4
- Vercel Analytics
- Hosted on Vercel

**App:**
- Kotlin with Jetpack Compose
- Material 3
- Google Play Billing v7.1.1
- Firebase (Analytics, FCM)
- Room database
- GoCardless (open banking)

---

## Reference: Subscription Tiers

| Tier | Monthly | Yearly | Bank Connections |
|------|---------|--------|------------------|
| FREE | £0.00 | £0.00 | 0 |
| STARTER | £1.99 | £21.99 | 1 |
| PREMIUM | £2.99 | £32.99 | 5 |
| ULTIMATE | £3.99 | £34.99 | 10 |

---

## Notes for Implementation

- Website files are in `/Users/th/magpie-website/website`
- Android app is in `/Users/th/AndroidStudioProjects/magpie`
- Current website has Vercel Analytics already set up
- Privacy policy last updated July 15, 2025
- iOS version is "coming soon" with waitlist
