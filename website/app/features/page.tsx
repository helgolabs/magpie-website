"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";
import { PLAY_STORE_URL } from "../lib/constants";

export default function Features() {
  const features = [
    {
      icon: "🏦",
      title: "Open Banking Integration",
      description:
        "Connect your bank accounts and credit cards securely via open banking. Powered by GoCardless, Magpie automatically imports your transactions so you never have to manually enter an expense again.",
      benefits: [
        "Powered by GoCardless",
        "Supports thousands of UK banks",
        "Bank-grade security & encryption",
        "FCA regulated",
        "No access to move money",
        "Automatic transaction sync",
      ],
    },
    {
      icon: "⚡",
      title: "3-Tap Bill Splitting",
      description:
        "Split any expense in just 3 taps. Select a transaction, choose who to split with, and you're done. Magpie calculates everything instantly.",
      benefits: [
        "Lightning-fast splitting",
        "Equal or custom splits",
        "Percentage-based splits",
        "Split by exact amounts",
        "Instant balance updates",
      ],
    },
    {
      icon: "👥",
      title: "Guest Accounts",
      description:
        "Not everyone in your group needs the app. Add friends as guests and split expenses with them just as easily, even if they don't have Magpie installed.",
      benefits: [
        "No app required for guests",
        "Full expense tracking",
        "Share balances via link",
        "Invite to join later",
        "Works for any group size",
      ],
    },
    {
      icon: "📱",
      title: "Works Offline",
      description:
        "Add expenses anywhere, even without internet. Traveling abroad or in a remote area? No problem. Magpie syncs everything automatically when you're back online.",
      benefits: [
        "Full offline functionality",
        "Automatic sync when online",
        "No data loss",
        "Perfect for travel",
        "Reliable anywhere",
      ],
    },
    {
      icon: "💰",
      title: "Multi-Currency Support",
      description:
        "Traveling internationally? Magpie handles multiple currencies seamlessly. Add expenses in any currency and track who owes what across different countries.",
      benefits: [
        "Support for all major currencies",
        "Perfect for group travel",
        "Automatic currency tracking",
        "No manual conversion needed",
        "Clear balance reporting",
      ],
    },
    {
      icon: "🔒",
      title: "Bank-Grade Security",
      description:
        "Your financial data is protected with the same level of security used by banks. We're GDPR compliant, use end-to-end encryption, and never sell your data.",
      benefits: [
        "End-to-end encryption",
        "GDPR compliant",
        "FCA regulated open banking",
        "No data selling",
        "Delete anytime",
      ],
    },
    {
      icon: "📊",
      title: "Real-Time Balance Tracking",
      description:
        "Always know exactly who owes what. Magpie shows you clear, real-time balances for every person in every group. No more awkward money conversations.",
      benefits: [
        "Live balance updates",
        "Per-person breakdowns",
        "Per-group summaries",
        "Settlement tracking",
        "Transaction history",
      ],
    },
    {
      icon: "🎯",
      title: "Smart Expense Categorization",
      description:
        "Magpie automatically categorizes your expenses based on the merchant. Restaurants, groceries, transport - everything is organized for you.",
      benefits: [
        "Automatic categorization",
        "Custom categories",
        "Visual spending insights",
        "Filter by category",
        "Export data",
      ],
    },
    {
      icon: "🔄",
      title: "Recurring Expenses",
      description:
        "Set up recurring expenses for regular bills like rent, utilities, or subscriptions. Magpie automatically creates and splits them on schedule.",
      benefits: [
        "Automatic recurring bills",
        "Custom schedules",
        "Never forget rent",
        "Utility bill splitting",
        "Subscription tracking",
      ],
    },
    {
      icon: "🎨",
      title: "Group Customization",
      description:
        "Personalize your groups with custom names, images, and settings. Keep your flatmates, holiday friends, and couples groups organized and easy to identify.",
      benefits: [
        "Custom group names",
        "Group images",
        "Color coding",
        "Flexible settings",
        "Archive old groups",
      ],
    },
    {
      icon: "📈",
      title: "Expense Insights",
      description:
        "See where your shared money is going. Magpie provides insights into group spending patterns to help you budget better together.",
      benefits: [
        "Spending breakdowns",
        "Category analysis",
        "Monthly summaries",
        "Group trends",
        "Export reports",
      ],
    },
    {
      icon: "🔔",
      title: "Smart Notifications",
      description:
        "Stay updated with what matters. Get notified when someone adds an expense, when you're owed money, or when it's time to settle up.",
      benefits: [
        "New expense alerts",
        "Balance reminders",
        "Settlement notifications",
        "Group activity updates",
        "Customizable preferences",
      ],
    },
  ];

  return (
    <div
      className="min-h-screen overflow-x-hidden pt-16 font-sans"
      style={{
        background:
          "linear-gradient(to bottom, #0B5A9F 0%, #0F80E1 50%, #3A9AE8 100%)",
      }}
    >
      <main className="flex w-full max-w-full flex-col items-center gap-12 overflow-x-hidden px-4 py-12 sm:px-6 sm:py-16">
        {/* Header */}
        <div className="w-full max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Everything you need to split bills
          </h1>
          <p className="text-xl text-white/90 sm:text-2xl">
            Powerful features that make sharing expenses effortless
          </p>
        </div>

        {/* Key Differentiator Callout */}
        <div className="w-full max-w-5xl rounded-3xl border-2 border-yellow-400 bg-white p-8 shadow-2xl">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="text-6xl">🏆</div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                The only expense splitter that connects to your bank
              </h2>
              <p className="text-lg text-gray-700">
                While other apps require manual entry, Magpie automatically
                imports your transactions via open banking. Save hours of time
                and never forget to log an expense again.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/15"
            >
              <div className="mb-4 text-5xl">{feature.icon}</div>
              <h3 className="mb-3 text-2xl font-bold text-white">
                {feature.title}
              </h3>
              <p className="mb-4 text-white/90">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-green-400"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="w-full max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Magpie vs Manual Entry Apps
          </h2>
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="p-4 text-left font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="p-4 text-center font-semibold text-blue-600">
                    Magpie
                  </th>
                  <th className="p-4 text-center font-semibold text-gray-600">
                    Others
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { feature: "Automatic transaction import", magpie: true, others: false },
                  { feature: "Open banking integration", magpie: true, others: false },
                  { feature: "Manual expense entry", magpie: true, others: true },
                  { feature: "Works offline", magpie: true, others: "Some" },
                  { feature: "Guest accounts", magpie: true, others: "Some" },
                  { feature: "Multi-currency support", magpie: true, others: true },
                  { feature: "Bank-grade security", magpie: true, others: true },
                  { feature: "3-tap splitting", magpie: true, others: false },
                  { feature: "Real-time sync", magpie: true, others: true },
                  { feature: "Free tier available", magpie: true, others: true },
                ].map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50">
                    <td className="p-4 text-gray-900">{row.feature}</td>
                    <td className="p-4 text-center">
                      {typeof row.magpie === "boolean" ? (
                        row.magpie ? (
                          <span className="text-2xl text-green-500">✓</span>
                        ) : (
                          <span className="text-2xl text-gray-300">✗</span>
                        )
                      ) : (
                        <span className="text-gray-600">{row.magpie}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.others === "boolean" ? (
                        row.others ? (
                          <span className="text-2xl text-green-500">✓</span>
                        ) : (
                          <span className="text-2xl text-gray-300">✗</span>
                        )
                      ) : (
                        <span className="text-gray-600">{row.others}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="w-full max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Perfect for any situation
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                emoji: "🏠",
                title: "Flatmates",
                description:
                  "Split rent, utilities, groceries, and household expenses. Set up recurring bills and never chase roommates for money again.",
                link: "/use-cases/flatmates",
              },
              {
                emoji: "💑",
                title: "Couples",
                description:
                  "Manage shared expenses fairly. From date nights to rent, keep track of who paid for what without awkward conversations.",
                link: "/use-cases/couples",
              },
              {
                emoji: "✈️",
                title: "Group Travel",
                description:
                  "Perfect for holidays, road trips, and adventures. Multi-currency support and offline mode make it ideal for international travel.",
                link: "/use-cases/travel",
              },
            ].map((useCase) => (
              <a
                key={useCase.title}
                href={useCase.link}
                className="flex flex-col items-center rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/15"
              >
                <div className="mb-4 text-6xl">{useCase.emoji}</div>
                <h3 className="mb-3 text-2xl font-bold text-white">
                  {useCase.title}
                </h3>
                <p className="text-white/90">{useCase.description}</p>
                <span className="mt-4 text-sm font-semibold text-yellow-400">
                  Learn more →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to experience the future of bill splitting?
          </h2>
          <p className="mb-8 text-xl text-white/90">
            Download Magpie today and never manually enter an expense again.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-105"
              onClick={() => track("features_page_google_play")}
            >
              <Image
                src="/GetItOnGooglePlay_Badge_Web_color_English.svg"
                alt="Get it on Google Play"
                width={240}
                height={72}
                className="h-auto w-48"
              />
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-105"
              onClick={() => track("features_page_app_store")}
            >
              <Image
                src="/Pre-order_on_the_App_Store_Badge_US-UK_RGB_blk_121217.svg"
                alt="Pre-order on the App Store"
                width={240}
                height={72}
                className="h-auto w-44"
              />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 flex gap-6 text-sm text-white/60">
          <a href="/pricing" className="transition-colors hover:text-white">
            Pricing
          </a>
          <a href="/faq" className="transition-colors hover:text-white">
            FAQ
          </a>
          <a href="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </a>
          <a href="/" className="transition-colors hover:text-white">
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
}
