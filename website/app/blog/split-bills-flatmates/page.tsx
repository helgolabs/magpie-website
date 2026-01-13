"use client";

import Image from "next/image";
import Link from "next/link";
import { PLAY_STORE_URL } from "../../lib/constants";

export default function SplitBillsFlatmates() {
  return (
    <div
      className="min-h-screen overflow-x-hidden pt-16 font-sans"
      style={{
        background:
          "linear-gradient(to bottom, #0B5A9F 0%, #0F80E1 50%, #3A9AE8 100%)",
      }}
    >
      <main className="flex w-full max-w-full flex-col items-center gap-8 overflow-x-hidden px-4 py-12 sm:px-6 sm:py-16">
        {/* Breadcrumb */}
        <div className="w-full max-w-3xl">
          <Link href="/blog" className="text-sm text-white/80 hover:text-yellow-400">
            ← Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="w-full max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-sm text-white/80">
            <span className="rounded-full bg-yellow-400 px-3 py-1 font-semibold text-black">
              Flatmate Tips
            </span>
            <span>January 9, 2026</span>
            <span>•</span>
            <span>5 min read</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            How to Split Bills Fairly with Flatmates
          </h1>

          <p className="mb-8 text-xl text-white/90">
            Moving in with flatmates for the first time? Worried about money causing tension?
            This guide will help you set up a fair bill-splitting system that keeps everyone happy.
          </p>

          {/* Featured Image */}
          <div className="mb-8 overflow-hidden rounded-3xl">
            <Image
              src="/group-details.png"
              alt="Group expense tracking"
              width={800}
              height={600}
              className="h-auto w-full"
            />
          </div>

          {/* Article Content */}
          <div className="space-y-8 rounded-3xl bg-white p-8 text-gray-900 shadow-2xl sm:p-12">
            <section>
              <h2 className="mb-4 text-2xl font-bold">Why Bill Splitting Matters</h2>
              <p className="mb-4 leading-relaxed">
                Money is one of the most common sources of friction in shared housing. According to
                surveys, over 60% of flatmate disagreements involve money. The good news? Most of
                these arguments are completely avoidable with the right system.
              </p>
              <p className="leading-relaxed">
                The key is setting clear expectations from day one and using tools that make
                tracking expenses effortless.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">The 5 Golden Rules of Flatmate Bills</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-xl font-semibold">1. Discuss Everything Upfront</h3>
                  <p className="leading-relaxed">
                    Before anyone moves in, have a house meeting to discuss how you'll split:
                  </p>
                  <ul className="ml-6 mt-2 list-disc space-y-1">
                    <li>Rent (equal split or proportional to room size?)</li>
                    <li>Utilities (electricity, gas, water, internet)</li>
                    <li>Shared supplies (toilet paper, cleaning products, bin bags)</li>
                    <li>Food (individual or shared groceries?)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold">2. Choose One Payment System</h3>
                  <p className="leading-relaxed">
                    Don't use multiple methods. Pick one system and stick to it. Options include:
                  </p>
                  <ul className="ml-6 mt-2 list-disc space-y-1">
                    <li><strong>Bill-splitting apps</strong> (like Magpie) - Best for automatic tracking</li>
                    <li><strong>Joint account</strong> - Works but requires trust and admin</li>
                    <li><strong>Rotating payer</strong> - Simple but easy to lose track</li>
                  </ul>
                  <p className="mt-2 leading-relaxed">
                    We obviously recommend Magpie because it automatically imports transactions
                    from your bank, making tracking effortless.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold">3. Track Everything Immediately</h3>
                  <p className="leading-relaxed">
                    The biggest mistake? Saying "I'll add it later" and forgetting. When someone
                    buys something for the house, add it to your system immediately. This is where
                    automatic bank connections are a game-changer - the expense appears without
                    anyone having to remember.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold">4. Settle Up Monthly</h3>
                  <p className="leading-relaxed">
                    Set a regular settlement day (e.g., the 1st of each month). Everyone checks
                    the balance, and people who owe money transfer it via bank transfer. Don't let
                    debts pile up for months - it makes settling more painful.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold">5. Be Flexible and Fair</h3>
                  <p className="leading-relaxed">
                    Life happens. Someone might be tight on cash one month. Have open conversations
                    and be willing to adjust. The goal is fairness over the long term, not penny-perfect
                    every week.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Common Scenarios and How to Handle Them</h2>

              <div className="space-y-6">
                <div className="rounded-xl border-2 border-blue-100 bg-blue-50 p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    Scenario: Different-Sized Rooms
                  </h3>
                  <p className="text-gray-700">
                    <strong>Solution:</strong> Split rent proportionally, not equally. If one room
                    is significantly larger or has an ensuite, they should pay more. Calculate by
                    square footage or agree on percentages (e.g., 40/30/30 for three people).
                  </p>
                </div>

                <div className="rounded-xl border-2 border-blue-100 bg-blue-50 p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    Scenario: One Person Uses Way More Heating
                  </h3>
                  <p className="text-gray-700">
                    <strong>Solution:</strong> Set a house policy on heating/AC. Either split utilities
                    equally and accept some people use more, or track individual usage with smart
                    meters if it becomes a real issue.
                  </p>
                </div>

                <div className="rounded-xl border-2 border-blue-100 bg-blue-50 p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    Scenario: Guest Stays Over Frequently
                  </h3>
                  <p className="text-gray-700">
                    <strong>Solution:</strong> If someone's partner essentially lives there, they
                    should contribute. Have an honest conversation and add them as a temporary
                    flatmate in your expense tracker.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">How Magpie Makes This Easier</h2>
              <p className="mb-4 leading-relaxed">
                Traditional methods (spreadsheets, IOUs, mental tallies) fail because they rely on
                people remembering to log expenses. Magpie solves this by:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>Automatically importing transactions</strong> from your bank via secure
                  open banking
                </li>
                <li>
                  <strong>Showing real-time balances</strong> so everyone knows who owes what
                </li>
                <li>
                  <strong>Supporting recurring bills</strong> like rent and utilities
                </li>
                <li>
                  <strong>Working for guest accounts</strong> so even flatmates without the app can
                  be included
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Final Tips for Flatmate Harmony</h2>
              <ul className="ml-6 list-disc space-y-2">
                <li>Don't let money issues fester - address them immediately</li>
                <li>Be transparent about your financial situation</li>
                <li>Remember: you're living together, not keeping score</li>
                <li>Review your system every few months and adjust if needed</li>
                <li>Celebrate when everyone's paid up - it's worth acknowledging!</li>
              </ul>
            </section>

            <div className="rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-8 text-center">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Ready to Try Magpie with Your Flatmates?
              </h3>
              <p className="mb-6 text-gray-700">
                Stop chasing people for rent. Start tracking expenses automatically.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="{PLAY_STORE_URL}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:scale-105"
                >
                  <Image
                    src="/GetItOnGooglePlay_Badge_Web_color_English.svg"
                    alt="Get it on Google Play"
                    width={200}
                    height={60}
                    className="h-auto w-40"
                  />
                </a>
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:scale-105"
                >
                  <Image
                    src="/Pre-order_on_the_App_Store_Badge_US-UK_RGB_blk_121217.svg"
                    alt="Pre-order on the App Store"
                    width={200}
                    height={60}
                    className="h-auto w-36"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold text-white">Related Articles</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Link
                href="/blog/what-is-open-banking"
                className="group rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-yellow-400">
                  What is Open Banking? A Simple Guide
                </h3>
                <p className="text-white/80">
                  Learn how open banking works and why it's safe to use with apps like Magpie.
                </p>
              </Link>
              <Link
                href="/blog/money-mistakes-friendships"
                className="group rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-yellow-400">
                  5 Money Mistakes That Ruin Friendships
                </h3>
                <p className="text-white/80">
                  Avoid these common pitfalls when managing money with friends and flatmates.
                </p>
              </Link>
            </div>
          </div>
        </article>

        {/* Footer Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/60">
          <a href="/blog" className="transition-colors hover:text-white">
            All Posts
          </a>
          <a href="/use-cases/flatmates" className="transition-colors hover:text-white">
            For Flatmates
          </a>
          <a href="/pricing" className="transition-colors hover:text-white">
            Pricing
          </a>
          <a href="/" className="transition-colors hover:text-white">
            Home
          </a>
        </div>
      </main>
    </div>
  );
}
