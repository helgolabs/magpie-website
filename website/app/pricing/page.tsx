"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";
import { PLAY_STORE_URL } from "../lib/constants";

export default function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "£0",
      period: "forever",
      yearlyPrice: null,
      bankConnections: "0",
      features: [
        "Unlimited expenses",
        "Unlimited groups",
        "Guest accounts",
        "Offline mode",
        "Multi-currency support",
        "Basic expense splitting",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Starter",
      price: "£1.99",
      period: "per month",
      yearlyPrice: "£21.99/year",
      bankConnections: "1",
      features: [
        "Everything in Free",
        "1 bank connection",
        "Automatic transaction import",
        "Open banking integration",
        "Real-time sync",
        "Bank-grade security",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Premium",
      price: "£2.99",
      period: "per month",
      yearlyPrice: "£32.99/year",
      bankConnections: "5",
      features: [
        "Everything in Starter",
        "5 bank connections",
        "Multiple cards & accounts",
        "Priority support",
        "Advanced insights",
        "Export data",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Ultimate",
      price: "£3.99",
      period: "per month",
      yearlyPrice: "£34.99/year",
      bankConnections: "10",
      features: [
        "Everything in Premium",
        "10 bank connections",
        "Unlimited integrations",
        "Early access to features",
        "Dedicated support",
        "Custom branding",
      ],
      cta: "Start Free Trial",
      popular: false,
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
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-white/90 sm:text-2xl">
            Start free. Upgrade when you need automatic bank connections.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl border-2 bg-white p-6 shadow-xl ${
                tier.popular
                  ? "border-yellow-400 ring-4 ring-yellow-400/20"
                  : "border-white/20"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-black">
                  Most Popular
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {tier.name}
                </h3>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">
                    {tier.price}
                  </span>
                  <span className="ml-2 text-gray-600">/{tier.period}</span>
                </div>
                {tier.yearlyPrice && (
                  <p className="mt-1 text-sm text-gray-600">
                    or {tier.yearlyPrice} (save 17%)
                  </p>
                )}
              </div>
              <div className="mb-6">
                <div className="rounded-lg bg-blue-50 p-3">
                  <p className="text-center text-sm font-semibold text-blue-900">
                    {tier.bankConnections} Bank Connection
                    {tier.bankConnections !== "1" ? "s" : ""}
                  </p>
                </div>
              </div>
              <ul className="mb-8 flex-grow space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-green-500"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="{PLAY_STORE_URL}"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl px-6 py-3 text-center font-semibold transition-all hover:scale-105 ${
                  tier.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
                onClick={() => track(`pricing_cta_${tier.name.toLowerCase()}`)}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="w-full max-w-7xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Compare Features
          </h2>
          <div className="overflow-x-auto rounded-3xl bg-white p-6 shadow-xl">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="pb-4 pr-4 text-left font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="px-4 pb-4 text-center font-semibold text-gray-900">
                    Free
                  </th>
                  <th className="px-4 pb-4 text-center font-semibold text-gray-900">
                    Starter
                  </th>
                  <th className="px-4 pb-4 text-center font-semibold text-gray-900">
                    Premium
                  </th>
                  <th className="px-4 pb-4 text-center font-semibold text-gray-900">
                    Ultimate
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: "Unlimited expenses", free: true, starter: true, premium: true, ultimate: true },
                  { name: "Unlimited groups", free: true, starter: true, premium: true, ultimate: true },
                  { name: "Guest accounts", free: true, starter: true, premium: true, ultimate: true },
                  { name: "Offline mode", free: true, starter: true, premium: true, ultimate: true },
                  { name: "Multi-currency", free: true, starter: true, premium: true, ultimate: true },
                  { name: "Bank connections", free: "0", starter: "1", premium: "5", ultimate: "10" },
                  { name: "Auto transaction import", free: false, starter: true, premium: true, ultimate: true },
                  { name: "Open banking", free: false, starter: true, premium: true, ultimate: true },
                  { name: "Priority support", free: false, starter: false, premium: true, ultimate: true },
                  { name: "Advanced insights", free: false, starter: false, premium: true, ultimate: true },
                  { name: "Export data", free: false, starter: false, premium: true, ultimate: true },
                  { name: "Early access", free: false, starter: false, premium: false, ultimate: true },
                ].map((feature) => (
                  <tr key={feature.name}>
                    <td className="py-4 pr-4 text-gray-900">{feature.name}</td>
                    <td className="px-4 py-4 text-center">
                      {typeof feature.free === "boolean" ? (
                        feature.free ? (
                          <span className="text-green-500">✓</span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )
                      ) : (
                        <span className="text-gray-900">{feature.free}</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {typeof feature.starter === "boolean" ? (
                        feature.starter ? (
                          <span className="text-green-500">✓</span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )
                      ) : (
                        <span className="text-gray-900">{feature.starter}</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {typeof feature.premium === "boolean" ? (
                        feature.premium ? (
                          <span className="text-green-500">✓</span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )
                      ) : (
                        <span className="text-gray-900">{feature.premium}</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {typeof feature.ultimate === "boolean" ? (
                        feature.ultimate ? (
                          <span className="text-green-500">✓</span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )
                      ) : (
                        <span className="text-gray-900">{feature.ultimate}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Pricing FAQs
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I try before I buy?",
                a: "Yes! All paid plans include a 7-day free trial. You can connect your bank and see automatic transaction import before committing.",
              },
              {
                q: "What's a bank connection?",
                a: "A bank connection is a link to one of your credit cards or bank accounts via open banking. This allows Magpie to automatically import your transactions.",
              },
              {
                q: "Can I change plans anytime?",
                a: "Absolutely! You can upgrade, downgrade, or cancel your subscription at any time through the app.",
              },
              {
                q: "Is my data secure?",
                a: "Yes. We use bank-grade encryption and are regulated under open banking standards. We're GDPR compliant and never store your banking credentials.",
              },
              {
                q: "What if I need more connections?",
                a: "You can upgrade to Premium (5 connections) or Ultimate (10 connections) at any time. Most users find 5 connections is plenty.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
              >
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {faq.q}
                </h3>
                <p className="text-white/90">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to split bills effortlessly?
          </h2>
          <p className="mb-8 text-xl text-white/90">
            Download Magpie and start managing shared expenses today.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="{PLAY_STORE_URL}"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-105"
              onClick={() => track("pricing_page_google_play")}
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
              onClick={() => track("pricing_page_app_store")}
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
          <a href="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="transition-colors hover:text-white">
            Terms of Service
          </a>
          <a href="/" className="transition-colors hover:text-white">
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
}
