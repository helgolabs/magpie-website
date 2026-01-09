"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";

export default function Couples() {
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
          <div className="mb-6 text-7xl">💑</div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Manage Shared Expenses as a Couple
          </h1>
          <p className="text-xl text-white/90 sm:text-2xl">
            Keep your relationship strong by keeping your shared finances clear and fair.
          </p>
        </div>

        {/* Hero Section with Image */}
        <div className="w-full max-w-6xl">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/couple-in-car.jpg"
              alt="Couple on a road trip"
              width={1000}
              height={750}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Problem Statement */}
        <div className="w-full max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Money doesn't have to be awkward
          </h2>
          <p className="text-lg text-white/90">
            Whether you're dating, engaged, or married, tracking shared expenses shouldn't
            be stressful. Magpie helps couples split costs fairly without awkward conversations
            or mental math.
          </p>
        </div>

        {/* Common Couple Scenarios */}
        <div className="w-full max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Perfect for Every Couple Expense
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🍽️",
                title: "Date Nights",
                description: "Dinner, cinema, drinks. Take turns paying and track who's ahead without keeping score."
              },
              {
                icon: "🏠",
                title: "Living Together",
                description: "Rent, groceries, utilities. Split everything fairly whether 50/50 or by income."
              },
              {
                icon: "✈️",
                title: "Holidays Together",
                description: "Flights, hotels, meals abroad. Track it all in one place and settle up at the end."
              },
              {
                icon: "🛒",
                title: "Weekly Shopping",
                description: "Food shop, household items. See at a glance who paid for what this week."
              },
              {
                icon: "🎁",
                title: "Shared Gifts",
                description: "Birthday presents for friends, wedding gifts. Split the cost seamlessly."
              },
              {
                icon: "🎬",
                title: "Subscriptions",
                description: "Netflix, Spotify, gym membership. Track who's paying for what service."
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

        {/* Key Features for Couples */}
        <div className="w-full max-w-5xl rounded-3xl border-2 border-yellow-400 bg-white p-8 shadow-2xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
            Why Couples Love Magpie
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                icon: "⚖️",
                title: "Fair Splitting Options",
                description: "50/50, by income, or custom percentages. Split however works for you."
              },
              {
                icon: "🏦",
                title: "Both Connect Banks",
                description: "Each person connects their own cards. Every purchase can be split instantly."
              },
              {
                icon: "💰",
                title: "Running Balance",
                description: "See at a glance who's ahead or behind. No more 'I think I paid last time'."
              },
              {
                icon: "🤫",
                title: "Private Groups",
                description: "Your couple expenses are private. Just between the two of you."
              },
              {
                icon: "📊",
                title: "Spending Insights",
                description: "See where your shared money goes. Budget better together."
              },
              {
                icon: "💬",
                title: "No Awkward Talks",
                description: "The app does the tracking. You can focus on enjoying time together."
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

        {/* Different Approaches */}
        <div className="w-full max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Split Your Way
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: "⚖️",
                title: "50/50 Everything",
                description: "Split all shared expenses equally. Simple and fair."
              },
              {
                icon: "💼",
                title: "By Income",
                description: "Earn different amounts? Split proportionally (e.g., 60/40)."
              },
              {
                icon: "🔄",
                title: "Take Turns",
                description: "Alternate who pays. Magpie tracks who's ahead over time."
              },
            ].map((approach) => (
              <div
                key={approach.title}
                className="flex flex-col items-center rounded-3xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm"
              >
                <div className="mb-3 text-5xl">{approach.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {approach.title}
                </h3>
                <p className="text-white/90">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works for Couples */}
        <div className="w-full max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            How It Works
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Create 'Us' Group",
                description: "Set up a private group just for the two of you."
              },
              {
                step: "2",
                title: "Both Connect Banks",
                description: "Each person links their cards via secure open banking."
              },
              {
                step: "3",
                title: "Choose Your Split Method",
                description: "50/50, by percentage, or however you prefer."
              },
              {
                step: "4",
                title: "Split Automatically",
                description: "Someone pays for dinner? Transaction appears, tap to split."
              },
              {
                step: "5",
                title: "Settle Periodically",
                description: "Weekly or monthly, see who owes what and transfer via bank."
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
            "Takes all the awkwardness out of splitting costs. We can focus on enjoying
            our time together instead of keeping mental tallies."
          </p>
          <p className="text-white/80">— Typical Magpie User</p>
        </div>

        {/* Pricing Callout */}
        <div className="w-full max-w-4xl rounded-3xl bg-white p-8 text-center shadow-2xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Two Individual Subscriptions
          </h2>
          <p className="mb-6 text-lg text-gray-700">
            Each person needs their own subscription to connect their bank accounts.
            Start at £1.99/month per person, or £3.98/month total for automatic tracking.
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
            Ready to simplify shared expenses?
          </h2>
          <p className="mb-8 text-xl text-white/90">
            Download Magpie and keep your relationship finances stress-free.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-105"
              onClick={() => track("couples_page_google_play")}
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
              onClick={() => track("couples_page_app_store")}
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
          <a href="/use-cases/flatmates" className="transition-colors hover:text-white">
            For Flatmates
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
