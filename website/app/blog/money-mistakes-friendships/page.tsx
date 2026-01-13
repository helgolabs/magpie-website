"use client";

import Image from "next/image";
import Link from "next/link";
import { PLAY_STORE_URL } from "../../lib/constants";

export default function MoneyMistakesFriendships() {
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
              Money & Relationships
            </span>
            <span>January 9, 2026</span>
            <span>•</span>
            <span>4 min read</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            5 Money Mistakes That Ruin Friendships
          </h1>

          <p className="mb-8 text-xl text-white/90">
            We've all been there: an awkward moment when money comes up with friends. But some
            mistakes can genuinely damage relationships. Here's how to avoid them.
          </p>

          {/* Featured Image */}
          <div className="mb-8 overflow-hidden rounded-3xl">
            <Image
              src="/restaurant.jpg"
              alt="Friends dining together"
              width={800}
              height={600}
              className="h-auto w-full"
            />
          </div>

          {/* Article Content */}
          <div className="space-y-8 rounded-3xl bg-white p-8 text-gray-900 shadow-2xl sm:p-12">
            <section>
              <p className="mb-6 text-lg leading-relaxed">
                Money is the #1 source of stress in friendships and flatmate relationships.
                Not because people are greedy, but because small misunderstandings compound
                over time. The good news? Most money drama is completely preventable.
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold">The 5 Friendship-Killing Money Mistakes</h2>

              <div className="space-y-8">
                {/* Mistake 1 */}
                <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
                  <div className="mb-3 flex items-start gap-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-lg font-bold text-white">
                      1
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Saying "I'll Pay You Back" and Never Doing It
                    </h3>
                  </div>
                  <p className="mb-4 text-gray-700">
                    This is the classic. Someone covers dinner, you say you'll transfer them later,
                    and then... you forget. They feel awkward asking. Weeks pass. Resentment builds.
                  </p>
                  <div className="rounded-lg bg-white p-4">
                    <p className="mb-2 font-semibold text-green-700">The Fix:</p>
                    <p className="text-gray-700">
                      Pay people back <strong>immediately</strong>. As in, right there at the table.
                      Open your banking app and transfer the money while they can see you doing it.
                      Or better yet, use an app like Magpie that tracks debts automatically so
                      nothing is forgotten.
                    </p>
                  </div>
                </div>

                {/* Mistake 2 */}
                <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
                  <div className="mb-3 flex items-start gap-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-lg font-bold text-white">
                      2
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Avoiding the Conversation Entirely
                    </h3>
                  </div>
                  <p className="mb-4 text-gray-700">
                    Your flatmate owes you £200 from three months ago. You're too polite to bring
                    it up. They've genuinely forgotten. You start resenting them for "taking advantage"
                    when really, they just have no idea.
                  </p>
                  <div className="rounded-lg bg-white p-4">
                    <p className="mb-2 font-semibold text-green-700">The Fix:</p>
                    <p className="text-gray-700">
                      Address money issues <strong>immediately</strong> before resentment builds.
                      Make it casual: "Hey, just checking - did you want to transfer me for last
                      night's Uber?" Most people will be grateful for the reminder. Using a
                      shared expense tracker eliminates this awkwardness entirely.
                    </p>
                  </div>
                </div>

                {/* Mistake 3 */}
                <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
                  <div className="mb-3 flex items-start gap-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-lg font-bold text-white">
                      3
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Being Inconsistent About What "Counts"
                    </h3>
                  </div>
                  <p className="mb-4 text-gray-700">
                    You split the big dinner bill equally. But then you "forget" to mention the
                    £3 coffee you bought someone, or the £8 Uber you covered. These small,
                    untracked expenses pile up and create an imbalance neither person realizes.
                  </p>
                  <div className="rounded-lg bg-white p-4">
                    <p className="mb-2 font-semibold text-green-700">The Fix:</p>
                    <p className="text-gray-700">
                      Either track <strong>everything</strong> or track <strong>nothing</strong>.
                      Don't pick and choose. If you're using a proper expense tracker, add every
                      shared expense no matter how small. If you're doing "rough estimates", accept
                      that things will balance out over time and don't keep score.
                    </p>
                  </div>
                </div>

                {/* Mistake 4 */}
                <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
                  <div className="mb-3 flex items-start gap-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-lg font-bold text-white">
                      4
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Making Assumptions About Money
                    </h3>
                  </div>
                  <p className="mb-4 text-gray-700">
                    Scenario: You suggest an expensive restaurant. Everyone agrees. The bill comes.
                    One friend gets sticker shock - they'd assumed drinks would be separate, or
                    didn't realize mains were £30 each. Now they're stressed about money and
                    embarrassed.
                  </p>
                  <div className="rounded-lg bg-white p-4">
                    <p className="mb-2 font-semibold text-green-700">The Fix:</p>
                    <p className="text-gray-700">
                      Discuss costs upfront, especially for bigger expenses. "The place I'm thinking
                      is about £40 per person, is that cool with everyone?" Give people an out
                      before money is spent. Remember: not everyone has the same financial situation,
                      and that's okay.
                    </p>
                  </div>
                </div>

                {/* Mistake 5 */}
                <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
                  <div className="mb-3 flex items-start gap-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-lg font-bold text-white">
                      5
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Using Complicated Mental Math
                    </h3>
                  </div>
                  <p className="mb-4 text-gray-700">
                    "I paid for the Airbnb, but you covered groceries, except I also bought
                    breakfast twice, and you got the Uber from the airport, but I drove us to
                    the beach..." Three days later, no one has any idea who owes what.
                  </p>
                  <div className="rounded-lg bg-white p-4">
                    <p className="mb-2 font-semibold text-green-700">The Fix:</p>
                    <p className="text-gray-700">
                      Use a tracking system from day one. Don't try to remember who paid for what.
                      Apps like Magpie automatically track everything and calculate balances.
                      At the end of the trip, you see one clear number: "You owe Tom £67.50."
                      No arguments, no confusion.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">The Golden Rule</h2>
              <div className="rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-6">
                <p className="mb-4 text-xl font-semibold text-gray-900">
                  Treat money with friends like a business transaction - clear, documented, and
                  settled promptly - so the friendship can remain personal.
                </p>
                <p className="text-gray-700">
                  The irony is that being "business-like" about money (tracking expenses, settling
                  debts quickly, being transparent) actually <strong>strengthens</strong> friendships
                  by removing all the awkwardness and resentment that comes from ambiguity.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Real-Life Friendship Killers</h2>
              <p className="mb-4 leading-relaxed">Here are actual scenarios that have ended friendships:</p>
              <ul className="ml-6 list-disc space-y-3">
                <li>
                  <strong>The Holiday Debt:</strong> After a group trip to Barcelona, Sarah was owed
                  £400 total. Two friends paid back immediately. One ghosted her for 6 months. The
                  friendship never recovered.
                </li>
                <li>
                  <strong>The Flatmate Dispute:</strong> Mike paid for utilities for 8 months,
                  assuming his flatmate was splitting them. He wasn't. £900 of resentment exploded
                  into a massive argument because there was no clear agreement upfront.
                </li>
                <li>
                  <strong>The Birthday Dinner:</strong> Emma organized a surprise birthday dinner
                  and said "we'll split the bill." She ordered expensive wine for the table without
                  asking. Three friends felt ambushed by the £80 per person bill for food they
                  didn't order.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">How to Keep Money From Ruining Friendships</h2>
              <ol className="ml-6 list-decimal space-y-3">
                <li>
                  <strong>Set clear expectations upfront</strong> - Discuss how you'll split costs
                  before money changes hands
                </li>
                <li>
                  <strong>Use technology</strong> - Apps remove human error and awkward reminders
                </li>
                <li>
                  <strong>Settle debts quickly</strong> - The longer a debt sits, the weirder it gets
                </li>
                <li>
                  <strong>Be transparent</strong> - If you can't afford something, say so early
                </li>
                <li>
                  <strong>Track everything or nothing</strong> - Be consistent in your approach
                </li>
                <li>
                  <strong>Assume good intent</strong> - Most people aren't trying to screw you over,
                  they just forgot
                </li>
              </ol>
            </section>

            <div className="rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-8 text-center">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Never Let Money Come Between You and Your Friends
              </h3>
              <p className="mb-6 text-gray-700">
                Magpie tracks expenses automatically so there's never confusion about who owes what.
                Keep the friendship, ditch the awkwardness.
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
                  Set up a system that prevents money arguments before they start.
                </p>
              </Link>
              <Link
                href="/blog/what-is-open-banking"
                className="group rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-yellow-400">
                  What is Open Banking? A Simple Guide
                </h3>
                <p className="text-white/80">
                  Learn how automatic expense tracking works and why it's safe.
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
