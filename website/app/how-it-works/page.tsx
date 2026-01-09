"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Download & Sign Up",
      description:
        "Download Magpie from the Google Play Store (iOS coming soon) and create your free account in seconds. No credit card required.",
      icon: "📱",
    },
    {
      number: "2",
      title: "Create a Group",
      description:
        "Start a group for your flatmates, travel buddies, or partner. Add people by their email or phone number, or invite them as guests.",
      icon: "👥",
    },
    {
      number: "3",
      title: "Connect Your Bank (Optional)",
      description:
        "Upgrade to a paid plan and connect your bank accounts via secure open banking. This lets Magpie automatically import your transactions.",
      icon: "🏦",
    },
    {
      number: "4",
      title: "Split in 3 Taps",
      description:
        "Select a transaction, choose who to split with, and tap save. Magpie instantly calculates who owes what. It's that simple.",
      icon: "⚡",
    },
    {
      number: "5",
      title: "See Who Owes What",
      description:
        "View real-time balances for each person and group. Everyone knows exactly what they owe or are owed. No more awkward conversations.",
      icon: "💰",
    },
    {
      number: "6",
      title: "Settle Up",
      description:
        "When it's time to settle, mark debts as paid in the app. Use bank transfer, cash, or any payment method you prefer.",
      icon: "✅",
    },
  ];

  const workflows = [
    {
      title: "With Bank Connection (Automatic)",
      steps: [
        "Your purchase appears automatically in Magpie",
        "Tap the transaction",
        "Select who to split with",
        "Done! Balance updated instantly",
      ],
      time: "~5 seconds per expense",
      icon: "🚀",
    },
    {
      title: "Without Bank Connection (Manual)",
      steps: [
        "Tap 'Add Expense' button",
        "Enter amount and merchant name",
        "Select who to split with",
        "Done! Balance updated instantly",
      ],
      time: "~15 seconds per expense",
      icon: "📝",
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
      <main className="flex w-full max-w-full flex-col items-center gap-16 overflow-x-hidden px-4 py-12 sm:px-6 sm:py-16">
        {/* Header */}
        <div className="w-full max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            How Magpie Works
          </h1>
          <p className="text-xl text-white/90 sm:text-2xl">
            Split bills effortlessly in 6 simple steps
          </p>
        </div>

        {/* Main Steps */}
        <div className="w-full max-w-5xl">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex flex-col gap-6 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm md:flex-row md:items-center"
              >
                <div className="flex flex-shrink-0 items-center gap-4 md:flex-col md:items-center">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white text-2xl font-bold text-blue-600">
                    {step.number}
                  </div>
                  <div className="text-5xl">{step.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-lg text-white/90">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Comparison */}
        <div className="w-full max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Two Ways to Add Expenses
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {workflows.map((workflow) => (
              <div
                key={workflow.title}
                className="flex flex-col rounded-3xl border border-white/20 bg-white p-8"
              >
                <div className="mb-4 text-center text-5xl">{workflow.icon}</div>
                <h3 className="mb-4 text-center text-2xl font-bold text-gray-900">
                  {workflow.title}
                </h3>
                <div className="mb-6 flex-1 space-y-3">
                  {workflow.steps.map((workflowStep, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                        {index + 1}
                      </div>
                      <p className="flex-1 text-gray-700">{workflowStep}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl bg-blue-50 p-3 text-center">
                  <p className="font-semibold text-blue-900">
                    ⏱️ {workflow.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg text-white/90">
              💡 <strong>Pro tip:</strong> Automatic import saves you hours over
              time and ensures you never forget an expense!
            </p>
          </div>
        </div>

        {/* Common Scenarios */}
        <div className="w-full max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Common Scenarios
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                scenario: "Restaurant Bill",
                emoji: "🍽️",
                steps: [
                  "You pay the £120 bill with your card",
                  "Transaction appears automatically in Magpie",
                  "Tap it and select your 3 friends",
                  "Everyone owes you £30 instantly",
                ],
              },
              {
                scenario: "Monthly Rent",
                emoji: "🏠",
                steps: [
                  "Set up recurring £1200/month rent expense",
                  "Split equally with 3 flatmates (£300 each)",
                  "Magpie auto-creates expense every month",
                  "Mark as paid when money is received",
                ],
              },
              {
                scenario: "Group Holiday",
                emoji: "✈️",
                steps: [
                  "Create 'Portugal Trip 2025' group",
                  "Add all travelers (including non-users)",
                  "Add expenses in euros throughout trip",
                  "See final balances when trip ends",
                ],
              },
              {
                scenario: "Couple Date Night",
                emoji: "💑",
                steps: [
                  "One person pays for dinner",
                  "Transaction auto-imports to Magpie",
                  "Split 50/50 with partner",
                  "Keep track of who's ahead over time",
                ],
              },
            ].map((scenario) => (
              <div
                key={scenario.scenario}
                className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-4xl">{scenario.emoji}</span>
                  <h3 className="text-xl font-bold text-white">
                    {scenario.scenario}
                  </h3>
                </div>
                <ol className="space-y-2">
                  {scenario.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="font-semibold text-yellow-400">
                        {index + 1}.
                      </span>
                      <span className="text-white/90">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits Recap */}
        <div className="w-full max-w-5xl rounded-3xl border-2 border-yellow-400 bg-white p-8 shadow-2xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
            Why Magpie is Different
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Split bills in 3 taps. 10x faster than manual entry.",
              },
              {
                icon: "🤖",
                title: "Fully Automatic",
                description: "Your transactions appear automatically. No typing required.",
              },
              {
                icon: "🔒",
                title: "Bank-Grade Security",
                description: "FCA regulated open banking. Your data is safe and encrypted.",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="mb-3 text-5xl">{benefit.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="w-full max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Quick Questions
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                q: "Do I need the paid version?",
                a: "No! Free version includes all core features. Upgrade only if you want automatic bank connections.",
              },
              {
                q: "Can I use it without internet?",
                a: "Yes! Magpie works fully offline and syncs when you're back online.",
              },
              {
                q: "What if my friends don't have Magpie?",
                a: "No problem! Add them as guests and split with them anyway.",
              },
              {
                q: "Is my banking data safe?",
                a: "Absolutely. We use FCA-regulated open banking with bank-grade encryption.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
              >
                <h3 className="mb-2 font-semibold text-white">{faq.q}</h3>
                <p className="text-sm text-white/80">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="/faq"
              className="font-semibold text-yellow-400 hover:text-yellow-300"
            >
              See all FAQs →
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to get started?
          </h2>
          <p className="mb-8 text-xl text-white/90">
            Download Magpie now and start splitting bills in seconds.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-105"
              onClick={() => track("how_it_works_google_play")}
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
              onClick={() => track("how_it_works_app_store")}
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
          <a href="/features" className="transition-colors hover:text-white">
            Features
          </a>
          <a href="/pricing" className="transition-colors hover:text-white">
            Pricing
          </a>
          <a href="/faq" className="transition-colors hover:text-white">
            FAQ
          </a>
          <a href="/" className="transition-colors hover:text-white">
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
}
