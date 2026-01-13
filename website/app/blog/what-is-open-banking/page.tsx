"use client";

import Image from "next/image";
import Link from "next/link";
import { PLAY_STORE_URL } from "../../lib/constants";

export default function WhatIsOpenBanking() {
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
              Education
            </span>
            <span>January 9, 2026</span>
            <span>•</span>
            <span>6 min read</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            What is Open Banking? A Simple Guide
          </h1>

          <p className="mb-8 text-xl text-white/90">
            Confused about open banking? You're not alone. This guide explains what it is,
            how it works, why it's safe, and how apps like Magpie use it to make your life easier.
          </p>

          {/* Featured Image */}
          <div className="mb-8 overflow-hidden rounded-3xl">
            <Image
              src="/add-expense.png"
              alt="Open banking integration"
              width={800}
              height={600}
              className="h-auto w-full"
            />
          </div>

          {/* Article Content */}
          <div className="space-y-8 rounded-3xl bg-white p-8 text-gray-900 shadow-2xl sm:p-12">
            <section>
              <h2 className="mb-4 text-2xl font-bold">Open Banking in Plain English</h2>
              <p className="mb-4 leading-relaxed">
                Open banking is a way for you to share your financial data with trusted third-party
                apps securely. Think of it like this: instead of giving an app your banking
                username and password (which would be insane), open banking creates a secure,
                regulated connection that lets apps read your transaction history.
              </p>
              <p className="leading-relaxed">
                The key word here is <strong>read</strong>. Apps using open banking can only see
                your transactions. They cannot move your money, access your balance, or do anything
                else with your account.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">How Does Open Banking Work?</h2>
              <p className="mb-4 leading-relaxed">Here's the step-by-step process:</p>

              <div className="space-y-4">
                <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4">
                  <h3 className="mb-2 font-semibold text-gray-900">Step 1: You Choose to Connect</h3>
                  <p className="text-gray-700">
                    In an app like Magpie, you tap "Connect Bank Account". You're in control from
                    the start.
                  </p>
                </div>

                <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4">
                  <h3 className="mb-2 font-semibold text-gray-900">Step 2: You Pick Your Bank</h3>
                  <p className="text-gray-700">
                    Select your bank from a list. The app doesn't handle this - you're redirected
                    to your bank's official website or app.
                  </p>
                </div>

                <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4">
                  <h3 className="mb-2 font-semibold text-gray-900">Step 3: You Log In Securely</h3>
                  <p className="text-gray-700">
                    You log into your actual bank (not a third-party page). Use your normal
                    banking credentials, Face ID, or whatever security your bank requires.
                  </p>
                </div>

                <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4">
                  <h3 className="mb-2 font-semibold text-gray-900">Step 4: You Grant Permission</h3>
                  <p className="text-gray-700">
                    Your bank asks: "Do you want to let [App Name] see your transactions?" You say
                    yes, and specify for how long (usually 90 days, renewable).
                  </p>
                </div>

                <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4">
                  <h3 className="mb-2 font-semibold text-gray-900">Step 5: Connection Established</h3>
                  <p className="text-gray-700">
                    The app can now securely read your transaction history. That's it. No passwords
                    shared, no access to move money.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Is Open Banking Safe?</h2>
              <p className="mb-4 font-semibold text-green-700">Short answer: Yes, extremely safe.</p>
              <p className="mb-4 leading-relaxed">Long answer:</p>

              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">It's Regulated</h3>
                  <p className="leading-relaxed">
                    In the UK, open banking is regulated by the FCA (Financial Conduct Authority).
                    Apps must be authorized and follow strict security standards. This isn't the
                    Wild West - it's a government-backed system.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">Your Bank Controls Access</h3>
                  <p className="leading-relaxed">
                    Your bank is the gatekeeper. They decide what data to share and can revoke access
                    instantly if anything suspicious happens. Apps never get your login credentials.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">Read-Only Access</h3>
                  <p className="leading-relaxed">
                    Apps using open banking can only read transaction data. They cannot:
                  </p>
                  <ul className="ml-6 mt-2 list-disc space-y-1">
                    <li>Move money from your account</li>
                    <li>Make payments</li>
                    <li>Change account settings</li>
                    <li>Access your full balance (only transaction history)</li>
                    <li>See sensitive information like PINs or passwords</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">Bank-Grade Encryption</h3>
                  <p className="leading-relaxed">
                    All data transferred through open banking uses the same encryption standards as
                    online banking. It's as secure as checking your balance on your bank's website.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Open Banking vs Traditional Methods</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="p-3 text-left font-semibold"></th>
                      <th className="p-3 text-center font-semibold text-green-700">Open Banking</th>
                      <th className="p-3 text-center font-semibold text-gray-600">Old Way</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-3 font-medium">Share passwords?</td>
                      <td className="p-3 text-center text-green-600">✗ Never</td>
                      <td className="p-3 text-center text-red-600">✓ Yes</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Regulated by FCA?</td>
                      <td className="p-3 text-center text-green-600">✓ Yes</td>
                      <td className="p-3 text-center text-red-600">✗ No</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Automatic transaction import?</td>
                      <td className="p-3 text-center text-green-600">✓ Yes</td>
                      <td className="p-3 text-center text-red-600">✗ Manual entry</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Can app move money?</td>
                      <td className="p-3 text-center text-green-600">✗ Never</td>
                      <td className="p-3 text-center text-red-600">✓ Potentially</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Revoke access instantly?</td>
                      <td className="p-3 text-center text-green-600">✓ Yes</td>
                      <td className="p-3 text-center text-red-600">✗ Must change password</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Common Questions About Open Banking</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Can the app see how much money I have?</h3>
                  <p className="leading-relaxed">
                    No. Open banking gives access to transaction history (what you spent and where),
                    not your account balance. Some apps might calculate a rough balance based on
                    transactions, but they don't see your actual bank balance.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">What if the app gets hacked?</h3>
                  <p className="leading-relaxed">
                    Even if an app's servers were compromised, the hacker couldn't access your
                    money. They'd only see transaction history (merchant names, amounts, dates).
                    No passwords, no ability to move funds. Your bank account itself remains secure.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">How do I disconnect?</h3>
                  <p className="leading-relaxed">
                    You can revoke access anytime through the app or through your bank's website.
                    Once revoked, the app can no longer see any new transactions.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">Does open banking work with all banks?</h3>
                  <p className="leading-relaxed">
                    In the UK, all major banks (HSBC, Barclays, Lloyds, NatWest, Santander, etc.)
                    support open banking. It's been mandatory since 2018. Most smaller banks and
                    credit unions have joined too.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">Does it cost money?</h3>
                  <p className="leading-relaxed">
                    No. Banks cannot charge you for using open banking. Apps might charge for their
                    service (like Magpie's premium tiers), but the open banking connection itself
                    is free.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">How Magpie Uses Open Banking</h2>
              <p className="mb-4 leading-relaxed">
                Magpie partners with{" "}
                <a
                  href="https://gocardless.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 underline hover:text-blue-800"
                >
                  GoCardless
                </a>
                , a leading open banking provider, to automatically import your transactions.
                GoCardless is FCA-authorized and trusted by thousands of businesses worldwide.
                Here's what happens:
              </p>
              <ol className="ml-6 list-decimal space-y-2">
                <li>You buy dinner for £45 on your connected credit card</li>
                <li>Your bank processes the transaction</li>
                <li>Via GoCardless's secure open banking connection, Magpie sees: "Restaurant ABC, £45, 8th Jan"</li>
                <li>The transaction appears in your Magpie app</li>
                <li>You tap it and split with your friends in 2 taps</li>
                <li>Magpie updates balances instantly</li>
              </ol>
              <p className="mt-4 leading-relaxed">
                No manual entry, no forgotten expenses, no spreadsheets. Just automatic tracking.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Why Magpie Uses GoCardless</h2>
              <p className="mb-4 leading-relaxed">
                Rather than building our own open banking infrastructure from scratch, we partnered
                with GoCardless to ensure maximum security and reliability. GoCardless is:
              </p>
              <ul className="ml-6 list-disc space-y-3">
                <li>
                  <strong>FCA-authorized</strong> - Fully regulated as an Account Information Service
                  Provider (AISP) by the UK's Financial Conduct Authority
                </li>
                <li>
                  <strong>Battle-tested</strong> - Processes billions in transactions and serves
                  thousands of businesses including major UK companies
                </li>
                <li>
                  <strong>Security-first</strong> - Uses bank-grade encryption and follows the highest
                  industry security standards
                </li>
                <li>
                  <strong>Always up-to-date</strong> - Maintains connections with all UK banks and
                  handles any technical changes automatically
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                When you connect your bank to Magpie, you're protected by both GoCardless's security
                infrastructure and your bank's security measures. Learn more about{" "}
                <a
                  href="https://gocardless.com/guides/posts/open-banking-security/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 underline hover:text-blue-800"
                >
                  how GoCardless keeps your data safe
                </a>
                .
              </p>
            </section>

            <div className="rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-8 text-center">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Ready to Try Automatic Expense Tracking?
              </h3>
              <p className="mb-6 text-gray-700">
                Experience the magic of open banking with Magpie. Safe, secure, and FCA-regulated.
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
                href="/blog/split-bills-flatmates"
                className="group rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-yellow-400">
                  How to Split Bills Fairly with Flatmates
                </h3>
                <p className="text-white/80">
                  Set up a fair bill-splitting system that keeps everyone happy.
                </p>
              </Link>
              <Link
                href="/blog/magpie-vs-splitwise"
                className="group rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-yellow-400">
                  Magpie vs Splitwise: Which is Better?
                </h3>
                <p className="text-white/80">
                  Compare automatic vs manual expense tracking.
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
          <a href="/faq" className="transition-colors hover:text-white">
            FAQ
          </a>
          <a href="/features" className="transition-colors hover:text-white">
            Features
          </a>
          <a href="/" className="transition-colors hover:text-white">
            Home
          </a>
        </div>
      </main>
    </div>
  );
}
