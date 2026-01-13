"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";
import { PLAY_STORE_URL } from "../../lib/constants";

export default function Travel() {
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
          <div className="mb-6 text-7xl">✈️</div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Split Group Travel Expenses
          </h1>
          <p className="text-xl text-white/90 sm:text-2xl">
            From road trips to holidays abroad, track group expenses effortlessly and settle up at the end.
          </p>
        </div>

        {/* Hero Section with Image */}
        <div className="w-full max-w-6xl">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/men-on-car.jpg"
              alt="Friends on a road trip"
              width={1000}
              height={750}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Problem Statement */}
        <div className="w-full max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Stop using messy spreadsheets
          </h2>
          <p className="text-lg text-white/90">
            Group holidays should be fun, not stressful. No more complicated spreadsheets,
            forgotten receipts, or awkward conversations at the end of the trip. Magpie
            tracks everything automatically so you can focus on making memories.
          </p>
        </div>

        {/* Common Travel Scenarios */}
        <div className="w-full max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Perfect for Every Type of Trip
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🏖️",
                title: "Group Holidays",
                description: "Beach trips, city breaks, festivals. Split flights, accommodation, meals, and activities."
              },
              {
                icon: "🚗",
                title: "Road Trips",
                description: "Petrol, tolls, parking, snacks. Track every expense as you go."
              },
              {
                icon: "⛷️",
                title: "Ski Trips",
                description: "Chalet costs, lift passes, equipment hire, après-ski drinks."
              },
              {
                icon: "🎒",
                title: "Backpacking",
                description: "Hostels, transport, food. Track expenses in multiple currencies."
              },
              {
                icon: "🏕️",
                title: "Camping Trips",
                description: "Campsite fees, BBQ supplies, group equipment. Split fairly."
              },
              {
                icon: "🎉",
                title: "Stag/Hen Dos",
                description: "Hotels, activities, meals, drinks. Keep track of who paid what."
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

        {/* Key Features for Travel */}
        <div className="w-full max-w-5xl rounded-3xl border-2 border-yellow-400 bg-white p-8 shadow-2xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
            Why Travelers Love Magpie
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                icon: "📱",
                title: "Works Offline",
                description: "Add expenses anywhere, even without WiFi. Syncs when you're back online."
              },
              {
                icon: "💱",
                title: "Multi-Currency Support",
                description: "Track expenses in euros, dollars, pounds. Magpie handles it all."
              },
              {
                icon: "👥",
                title: "Guest Accounts",
                description: "Not everyone has the app? Add them as guests. They can still be in the group."
              },
              {
                icon: "🏦",
                title: "Automatic Import",
                description: "Connect your bank before the trip. Expenses appear automatically."
              },
              {
                icon: "💰",
                title: "Real-Time Balances",
                description: "See who owes what at any moment. No surprises at the end."
              },
              {
                icon: "📊",
                title: "Trip Summary",
                description: "At trip end, see total spend, per-person breakdown, and who owes what."
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

        {/* Example Trip Breakdown */}
        <div className="w-full max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Example: Weekend in Barcelona
          </h2>
          <div className="rounded-3xl border border-white/20 bg-white p-8 shadow-2xl">
            <div className="mb-6 space-y-4">
              {[
                { person: "Sarah", expense: "Flights for everyone", amount: "€800" },
                { person: "Mike", expense: "Airbnb accommodation", amount: "€450" },
                { person: "Lisa", expense: "Dinner at La Rambla", amount: "€120" },
                { person: "Tom", expense: "Sagrada Familia tickets", amount: "€80" },
                { person: "Sarah", expense: "Taxi to airport", amount: "€35" },
                { person: "Mike", expense: "Beach club drinks", amount: "€90" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between border-b border-gray-200 pb-3">
                  <div>
                    <p className="font-semibold text-gray-900">{item.expense}</p>
                    <p className="text-sm text-gray-600">Paid by {item.person}</p>
                  </div>
                  <p className="font-bold text-gray-900">{item.amount}</p>
                </div>
              ))}
            </div>
            <div className="border-t-2 border-gray-300 pt-4">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Final Balances:</h3>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="rounded-xl bg-green-50 p-4 text-center">
                  <p className="text-sm text-gray-600">Sarah</p>
                  <p className="text-xl font-bold text-green-600">+€225</p>
                </div>
                <div className="rounded-xl bg-green-50 p-4 text-center">
                  <p className="text-sm text-gray-600">Mike</p>
                  <p className="text-xl font-bold text-green-600">+€87</p>
                </div>
                <div className="rounded-xl bg-red-50 p-4 text-center">
                  <p className="text-sm text-gray-600">Lisa</p>
                  <p className="text-xl font-bold text-red-600">-€156</p>
                </div>
                <div className="rounded-xl bg-red-50 p-4 text-center">
                  <p className="text-sm text-gray-600">Tom</p>
                  <p className="text-xl font-bold text-red-600">-€156</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works for Travel */}
        <div className="w-full max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            How It Works
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Create Trip Group",
                description: "Before you go, create a group like 'Portugal 2025' and add all travelers."
              },
              {
                step: "2",
                title: "Add Expenses as You Go",
                description: "Someone pays for dinner? Add it instantly. Works offline too."
              },
              {
                step: "3",
                title: "Track Multi-Currency",
                description: "Expenses in different currencies? No problem. Magpie tracks them correctly."
              },
              {
                step: "4",
                title: "See Live Balances",
                description: "Check anytime to see who's owed money and who owes money."
              },
              {
                step: "5",
                title: "Settle Up After Trip",
                description: "At the end, everyone knows exactly what they owe. Transfer via bank and close the trip."
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

        {/* Pro Tips for Travelers */}
        <div className="w-full max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Pro Tips for Group Travel
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                icon: "💡",
                title: "Pre-book together",
                description: "One person books flights and accommodation? Add it to Magpie immediately so everyone knows the starting balance."
              },
              {
                icon: "📸",
                title: "Add receipt photos",
                description: "Take photos of receipts as you go. Attach them to expenses for reference later."
              },
              {
                icon: "🎯",
                title: "Agree on split rules",
                description: "Equal split? Or some people didn't do an activity? Decide the approach before the trip."
              },
              {
                icon: "🔄",
                title: "Regular check-ins",
                description: "Review balances midway through the trip. Catch any mistakes early."
              },
            ].map((tip) => (
              <div
                key={tip.title}
                className="flex gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="text-4xl">{tip.icon}</div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {tip.title}
                  </h3>
                  <p className="text-white/90">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof / Testimonial Placeholder */}
        <div className="w-full max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm">
          <div className="mb-4 text-5xl">💬</div>
          <p className="mb-4 text-xl italic text-white">
            "Used Magpie for our group holiday in Spain. No arguments about money,
            no messy spreadsheets. Just automatically tracked everything. Brilliant!"
          </p>
          <p className="text-white/80">— Typical Magpie User</p>
        </div>

        {/* Pricing Callout */}
        <div className="w-full max-w-4xl rounded-3xl bg-white p-8 text-center shadow-2xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Perfect for Travel
          </h2>
          <p className="mb-6 text-lg text-gray-700">
            Use the free version for manual entry, or upgrade for automatic tracking.
            Offline mode and multi-currency work on all plans.
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
            Ready for your next adventure?
          </h2>
          <p className="mb-8 text-xl text-white/90">
            Download Magpie and make group travel expenses stress-free.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-105"
              onClick={() => track("travel_page_google_play")}
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
              onClick={() => track("travel_page_app_store")}
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
          <a href="/use-cases/couples" className="transition-colors hover:text-white">
            For Couples
          </a>
          <a href="/" className="transition-colors hover:text-white">
            Home
          </a>
        </div>
      </main>
    </div>
  );
}
