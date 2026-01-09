"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";

export default function Flatmates() {
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
          <div className="mb-6 text-7xl">🏠</div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Split Bills with Flatmates
          </h1>
          <p className="text-xl text-white/90 sm:text-2xl">
            Stop chasing roommates for rent and bills. Magpie makes flatmate finances effortless.
          </p>
        </div>

        {/* Hero Section with Image */}
        <div className="w-full max-w-6xl">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/group-details.png"
              alt="Group details showing shared expenses"
              width={600}
              height={1200}
              className="mx-auto h-auto w-full max-w-sm drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Problem Statement */}
        <div className="w-full max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Tired of awkward money conversations?
          </h2>
          <p className="text-lg text-white/90">
            We've all been there. Rent is due, someone forgot to pay their share of utilities,
            the grocery shop needs splitting again. With Magpie, everyone knows exactly what
            they owe, and there's never any confusion.
          </p>
        </div>

        {/* Common Flatmate Scenarios */}
        <div className="w-full max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Perfect for Every Flatmate Expense
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🏠",
                title: "Monthly Rent",
                description: "Set up recurring £1500/month rent split between 3 people. Magpie auto-creates it every month."
              },
              {
                icon: "💡",
                title: "Utility Bills",
                description: "Gas, electric, water, internet. Split them all fairly and track who's paid their share."
              },
              {
                icon: "🛒",
                title: "Weekly Shop",
                description: "Someone does the big Tesco run? Add it to Magpie and split it in seconds."
              },
              {
                icon: "🧹",
                title: "Cleaning Supplies",
                description: "Toilet paper, washing liquid, bin bags. Track all the little purchases that add up."
              },
              {
                icon: "📺",
                title: "Subscriptions",
                description: "Netflix, Spotify, TV license. Share the cost and never forget who's paying what."
              },
              {
                icon: "🔧",
                title: "House Repairs",
                description: "Broken hoover? Leaky tap? Split maintenance costs fairly among everyone."
              },
            ].map((scenario) => (
              <div
                key={scenario.title}
                className="flex flex-col rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="mb-3 text-5xl">{scenario.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {scenario.title}
                </h3>
                <p className="text-white/90">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features for Flatmates */}
        <div className="w-full max-w-5xl rounded-3xl border-2 border-yellow-400 bg-white p-8 shadow-2xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
            Why Flatmates Love Magpie
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                icon: "🔄",
                title: "Recurring Expenses",
                description: "Set up rent and bills once, they auto-create every month. Never forget again."
              },
              {
                icon: "🏦",
                title: "Connect Everyone's Cards",
                description: "Each flatmate connects their own cards. Every purchase can be split instantly."
              },
              {
                icon: "📊",
                title: "Running Balance",
                description: "See exactly who owes what across all expenses. No spreadsheet needed."
              },
              {
                icon: "👥",
                title: "Guest Accounts",
                description: "Temporary flatmate or partner staying? Add them as a guest for short-term splits."
              },
              {
                icon: "💰",
                title: "Unequal Splits",
                description: "Different sized rooms? Split rent by percentage. Magpie handles it."
              },
              {
                icon: "🔔",
                title: "Payment Reminders",
                description: "Gentle notifications when bills are due. No more awkward reminders."
              },
            ].map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="text-4xl">{feature.icon}</div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works for Flatmates */}
        <div className="w-full max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            How It Works
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Create 'Our Flat' Group",
                description: "Add all your flatmates. They can download the app or join as guests."
              },
              {
                step: "2",
                title: "Set Up Recurring Bills",
                description: "Add monthly rent, utilities, subscriptions. Magpie will auto-create them."
              },
              {
                step: "3",
                title: "Connect Bank Accounts",
                description: "Each person connects their own cards for automatic expense tracking."
              },
              {
                step: "4",
                title: "Split Everything Instantly",
                description: "Shopping? Takeaway? Just tap the transaction and split it with the group."
              },
              {
                step: "5",
                title: "Settle Up Monthly",
                description: "At month end, see who owes what and settle via bank transfer."
              },
            ].map((step) => (
              <div
                key={step.step}
                className="flex gap-6 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white text-xl font-bold text-blue-600">
                  {step.step}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/90">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof / Testimonial Placeholder */}
        <div className="w-full max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm">
          <div className="mb-4 text-5xl">💬</div>
          <p className="mb-4 text-xl italic text-white">
            "Finally, a way to track flatmate expenses without awkward conversations
            or complicated spreadsheets. Game changer for our house!"
          </p>
          <p className="text-white/80">— Typical Magpie User</p>
        </div>

        {/* Pricing Callout */}
        <div className="w-full max-w-4xl rounded-3xl bg-white p-8 text-center shadow-2xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Start Free, Upgrade When Ready
          </h2>
          <p className="mb-6 text-lg text-gray-700">
            Use Magpie free for manual expense entry. Upgrade to connect your
            bank accounts for automatic tracking from just £1.99/month.
          </p>
          <a
            href="/pricing"
            className="inline-block rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-blue-700"
          >
            See Pricing
          </a>
        </div>

        {/* CTA Section */}
        <div className="w-full max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to simplify flatmate finances?
          </h2>
          <p className="mb-8 text-xl text-white/90">
            Download Magpie and stop chasing roommates for money.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-105"
              onClick={() => track("flatmates_page_google_play")}
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
              onClick={() => track("flatmates_page_app_store")}
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
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/60">
          <a href="/features" className="transition-colors hover:text-white">
            Features
          </a>
          <a href="/pricing" className="transition-colors hover:text-white">
            Pricing
          </a>
          <a href="/faq" className="transition-colors hover:text-white">
            FAQ
          </a>
          <a href="/use-cases/couples" className="transition-colors hover:text-white">
            For Couples
          </a>
          <a href="/use-cases/travel" className="transition-colors hover:text-white">
            For Travel
          </a>
          <a href="/" className="transition-colors hover:text-white">
            Home
          </a>
        </div>
      </main>
    </div>
  );
}
