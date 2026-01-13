"use client";

import Image from "next/image";
import Link from "next/link";
import { PLAY_STORE_URL } from "../../lib/constants";

export default function MagpieVsSplitwis() {
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
        <article className="w-full max-w-4xl">
          <div className="mb-6 flex items-center gap-3 text-sm text-white/80">
            <span className="rounded-full bg-yellow-400 px-3 py-1 font-semibold text-black">
              Comparisons
            </span>
            <span>January 9, 2026</span>
            <span>•</span>
            <span>7 min read</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            Magpie vs Splitwise: Which Bill-Splitting App is Better?
          </h1>

          <p className="mb-8 text-xl text-white/90">
            Both apps help you split expenses with friends. But there's one major difference that
            changes everything: automatic vs manual expense tracking. Here's an honest comparison.
          </p>

          {/* Featured Image */}
          <div className="mb-8 overflow-hidden rounded-3xl">
            <Image
              src="/add-expense.png"
              alt="Magpie expense tracking"
              width={800}
              height={600}
              className="h-auto w-full"
            />
          </div>

          {/* Article Content */}
          <div className="space-y-8 rounded-3xl bg-white p-8 text-gray-900 shadow-2xl sm:p-12">
            <section>
              <h2 className="mb-4 text-2xl font-bold">The Key Difference</h2>
              <p className="mb-6 text-lg leading-relaxed">
                Let's cut to the chase: <strong>Splitwise requires manual entry for every expense.
                Magpie automatically imports transactions from your bank.</strong>
              </p>
              <p className="leading-relaxed">
                Everything else flows from this fundamental difference. Let's explore what that means
                in practice.
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold">Quick Comparison Table</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300 bg-gray-50">
                      <th className="p-4 text-left font-semibold text-gray-900">Feature</th>
                      <th className="p-4 text-center font-semibold text-blue-700">Magpie</th>
                      <th className="p-4 text-center font-semibold text-gray-700">Splitwise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-medium">Automatic transaction import</td>
                      <td className="p-4 text-center text-2xl text-green-600">✓</td>
                      <td className="p-4 text-center text-2xl text-gray-400">✗</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Open banking integration</td>
                      <td className="p-4 text-center text-2xl text-green-600">✓</td>
                      <td className="p-4 text-center text-2xl text-gray-400">✗</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Manual expense entry</td>
                      <td className="p-4 text-center text-2xl text-green-600">✓</td>
                      <td className="p-4 text-center text-2xl text-green-600">✓</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Guest accounts</td>
                      <td className="p-4 text-center text-2xl text-green-600">✓</td>
                      <td className="p-4 text-center text-2xl text-green-600">✓</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Works offline</td>
                      <td className="p-4 text-center text-2xl text-green-600">✓</td>
                      <td className="p-4 text-center text-gray-600">Partial</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Multi-currency support</td>
                      <td className="p-4 text-center text-2xl text-green-600">✓</td>
                      <td className="p-4 text-center text-2xl text-green-600">✓</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">iOS availability</td>
                      <td className="p-4 text-center text-sm text-gray-600">Coming Soon</td>
                      <td className="p-4 text-center text-2xl text-green-600">✓</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Android availability</td>
                      <td className="p-4 text-center text-2xl text-green-600">✓</td>
                      <td className="p-4 text-center text-2xl text-green-600">✓</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Free tier</td>
                      <td className="p-4 text-center text-2xl text-green-600">✓</td>
                      <td className="p-4 text-center text-2xl text-green-600">✓</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Premium pricing</td>
                      <td className="p-4 text-center text-sm text-gray-900">From £1.99/mo</td>
                      <td className="p-4 text-center text-sm text-gray-900">From £2.99/mo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Deep Dive: Magpie</h2>

              <div className="mb-6 space-y-4">
                <h3 className="text-xl font-semibold text-blue-700">What Magpie Does Best</h3>

                <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6">
                  <h4 className="mb-2 font-semibold text-gray-900">1. Automatic Transaction Import</h4>
                  <p className="mb-2 text-gray-700">
                    Connect your bank accounts and credit cards via secure open banking. When you buy
                    something, it appears in Magpie automatically. No typing, no forgetting, no manual entry.
                  </p>
                  <p className="text-sm italic text-gray-600">
                    Example: You pay for dinner with your card. 2 hours later, it's in Magpie. You tap
                    it, select who to split with, done. 5 seconds total.
                  </p>
                </div>

                <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6">
                  <h4 className="mb-2 font-semibold text-gray-900">2. Works Fully Offline</h4>
                  <p className="mb-2 text-gray-700">
                    Add expenses anywhere, even without WiFi. Everything syncs when you're back online.
                    Perfect for holidays abroad or road trips.
                  </p>
                </div>

                <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6">
                  <h4 className="mb-2 font-semibold text-gray-900">3. UK-Focused with FCA Regulation</h4>
                  <p className="mb-2 text-gray-700">
                    Built specifically for the UK market with open banking at its core. Regulated by the
                    Financial Conduct Authority for security and compliance.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">Where Magpie Falls Short</h3>
                <ul className="ml-6 list-disc space-y-2 text-gray-700">
                  <li>
                    <strong>iOS not available yet</strong> - Currently Android-only, iOS coming soon
                  </li>
                  <li>
                    <strong>Smaller user base</strong> - As a newer app, fewer people have heard of it
                  </li>
                  <li>
                    <strong>Requires paid tier for bank connections</strong> - The main feature costs
                    £1.99/month minimum
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Deep Dive: Splitwise</h2>

              <div className="mb-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">What Splitwise Does Best</h3>

                <div className="rounded-xl border-l-4 border-gray-500 bg-gray-50 p-6">
                  <h4 className="mb-2 font-semibold text-gray-900">1. Established and Trusted</h4>
                  <p className="text-gray-700">
                    Been around since 2011. Millions of users worldwide. Chances are your friends
                    already have it installed.
                  </p>
                </div>

                <div className="rounded-xl border-l-4 border-gray-500 bg-gray-50 p-6">
                  <h4 className="mb-2 font-semibold text-gray-900">2. Both iOS and Android</h4>
                  <p className="text-gray-700">
                    Available on both platforms, plus a web version. Works everywhere.
                  </p>
                </div>

                <div className="rounded-xl border-l-4 border-gray-500 bg-gray-50 p-6">
                  <h4 className="mb-2 font-semibold text-gray-900">3. Free for Most Features</h4>
                  <p className="text-gray-700">
                    You can use Splitwise indefinitely without paying. Premium features exist but
                    aren't necessary for basic expense splitting.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-red-700">Where Splitwise Falls Short</h3>
                <ul className="ml-6 list-disc space-y-2 text-gray-700">
                  <li>
                    <strong>Every expense must be manually entered</strong> - You type in the amount,
                    merchant, date, and who to split with. Every. Single. Time.
                  </li>
                  <li>
                    <strong>Easy to forget expenses</strong> - Without automatic import, you'll forget
                    to log things. Then someone owes you money and you can't prove it.
                  </li>
                  <li>
                    <strong>Slower workflow</strong> - Manual entry takes 30-60 seconds per expense.
                    Magpie's automatic import takes 5 seconds.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Who Should Use Which App?</h2>

              <div className="space-y-6">
                <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">
                  <h3 className="mb-3 text-xl font-bold text-blue-900">Choose Magpie if:</h3>
                  <ul className="ml-6 list-disc space-y-2 text-gray-800">
                    <li>You hate manually entering expenses</li>
                    <li>You frequently forget to log purchases</li>
                    <li>You're willing to pay £1.99/month for automatic tracking</li>
                    <li>You're on Android (or can wait for iOS)</li>
                    <li>You primarily use bank cards (vs cash)</li>
                    <li>You want the fastest possible workflow</li>
                    <li>You're based in the UK with UK bank accounts</li>
                  </ul>
                </div>

                <div className="rounded-2xl border-2 border-gray-200 bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900">Choose Splitwise if:</h3>
                  <ul className="ml-6 list-disc space-y-2 text-gray-800">
                    <li>You don't mind manual entry</li>
                    <li>You need iOS support right now</li>
                    <li>Your friends already use Splitwise</li>
                    <li>You want a completely free solution</li>
                    <li>You frequently split cash expenses</li>
                    <li>You're outside the UK or use non-UK banks</li>
                    <li>You're good at remembering to log expenses</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Real-World Usage Examples</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-lg font-semibold">Scenario: Weekend Trip with Friends</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                      <p className="mb-2 font-semibold text-blue-900">With Magpie:</p>
                      <ol className="ml-5 list-decimal space-y-1 text-sm text-gray-800">
                        <li>Create group before trip</li>
                        <li>Connect your bank</li>
                        <li>Purchases appear automatically</li>
                        <li>Tap each one to split</li>
                        <li>At trip end: clear balances visible</li>
                      </ol>
                      <p className="mt-2 text-xs font-semibold text-green-700">Time: ~2 min total</p>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">With Splitwise:</p>
                      <ol className="ml-5 list-decimal space-y-1 text-sm text-gray-800">
                        <li>Create group before trip</li>
                        <li>After each expense, open app</li>
                        <li>Type in amount, merchant, date</li>
                        <li>Select who to split with</li>
                        <li>Repeat for every purchase</li>
                      </ol>
                      <p className="mt-2 text-xs font-semibold text-orange-700">Time: ~30 min total (if 20 expenses)</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold">Scenario: Flatmate Utilities</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                      <p className="mb-2 font-semibold text-blue-900">With Magpie:</p>
                      <p className="text-sm text-gray-800">
                        Set up recurring £100/month utility split. It auto-creates every month.
                        Each person's purchases appear automatically. Monthly settlement takes 2 minutes.
                      </p>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                      <p className="mb-2 font-semibold text-gray-900">With Splitwise:</p>
                      <p className="text-sm text-gray-800">
                        Manually add utility bill each month. Manually add every shared expense
                        (groceries, cleaning supplies, etc.). Easy to forget things.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">The Bottom Line</h2>
              <div className="rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-8">
                <p className="mb-4 text-lg font-semibold text-gray-900">
                  Splitwise is a solid, established app that works well if you're willing to manually
                  enter every expense.
                </p>
                <p className="mb-4 text-lg font-semibold text-gray-900">
                  Magpie is the modern alternative for people who want automatic tracking and are
                  willing to pay a small monthly fee for the convenience.
                </p>
                <p className="text-gray-800">
                  Neither is objectively "better" - it depends on whether you value automation
                  (Magpie) or free forever + wider platform support (Splitwise). For most people who
                  primarily use cards, Magpie's automatic import is worth the £1.99/month.
                </p>
              </div>
            </section>

            <div className="rounded-2xl border-2 border-blue-400 bg-blue-50 p-8 text-center">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Ready to Try Automatic Expense Tracking?
              </h3>
              <p className="mb-6 text-gray-700">
                Stop typing. Start splitting. Download Magpie and connect your bank in 2 minutes.
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
                  Learn how Magpie's automatic import works and why it's safe.
                </p>
              </Link>
              <Link
                href="/blog/split-bills-flatmates"
                className="group rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-yellow-400">
                  How to Split Bills Fairly with Flatmates
                </h3>
                <p className="text-white/80">
                  Best practices for managing shared expenses with roommates.
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
          <a href="/features" className="transition-colors hover:text-white">
            Features
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
