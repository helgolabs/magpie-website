"use client";

import Image from "next/image";
import Link from "next/link";
import { PLAY_STORE_URL } from "../lib/constants";

export default function Blog() {
  const blogPosts = [
    {
      slug: "split-bills-flatmates",
      title: "How to Split Bills Fairly with Flatmates",
      excerpt: "Moving in with flatmates? Learn the best strategies for splitting rent, utilities, and shared expenses without causing arguments.",
      date: "January 9, 2026",
      category: "Flatmate Tips",
      readTime: "5 min read",
      image: "/group-details.png",
    },
    {
      slug: "what-is-open-banking",
      title: "What is Open Banking? A Simple Guide",
      excerpt: "Confused about open banking? This beginner-friendly guide explains what it is, how it works, and why it's safe.",
      date: "January 9, 2026",
      category: "Education",
      readTime: "6 min read",
      image: "/add-expense.png",
    },
    {
      slug: "money-mistakes-friendships",
      title: "5 Money Mistakes That Ruin Friendships",
      excerpt: "Don't let money come between you and your friends. Avoid these common mistakes when splitting expenses.",
      date: "January 9, 2026",
      category: "Money & Relationships",
      readTime: "4 min read",
      image: "/restaurant.jpg",
    },
    {
      slug: "magpie-vs-splitwise",
      title: "Magpie vs Splitwise: Which is Better?",
      excerpt: "A detailed comparison of Magpie and Splitwise. See which bill-splitting app is right for you.",
      date: "January 9, 2026",
      category: "Comparisons",
      readTime: "7 min read",
      image: "/add-expense.png",
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
            Magpie Blog
          </h1>
          <p className="text-xl text-white/90 sm:text-2xl">
            Tips, guides, and insights on splitting bills and managing shared expenses
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts[0] && (
          <Link
            href={`/blog/${blogPosts[0].slug}`}
            className="group w-full max-w-5xl"
          >
            <div className="overflow-hidden rounded-3xl bg-white shadow-2xl transition-all hover:scale-[1.02]">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-sm font-semibold text-black">
                    Featured
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8">
                  <div className="mb-2 flex items-center gap-3 text-sm text-gray-600">
                    <span className="font-semibold text-blue-600">
                      {blogPosts[0].category}
                    </span>
                    <span>•</span>
                    <span>{blogPosts[0].date}</span>
                    <span>•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="mb-3 text-3xl font-bold text-gray-900 group-hover:text-blue-600">
                    {blogPosts[0].title}
                  </h2>
                  <p className="mb-4 text-lg text-gray-700">
                    {blogPosts[0].excerpt}
                  </p>
                  <span className="inline-flex items-center font-semibold text-blue-600">
                    Read More
                    <svg
                      className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* All Posts Grid */}
        <div className="w-full max-w-6xl">
          <h2 className="mb-8 text-2xl font-bold text-white">All Posts</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-xl transition-all hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex items-center gap-2 text-xs text-gray-600">
                    <span className="font-semibold text-blue-600">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600">
                    {post.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-gray-700">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <span className="font-semibold text-blue-600">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full max-w-4xl rounded-3xl bg-white p-8 text-center shadow-2xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Ready to try Magpie?
          </h2>
          <p className="mb-6 text-lg text-gray-700">
            Stop manually tracking expenses. Download Magpie and split bills automatically.
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
          <a href="/" className="transition-colors hover:text-white">
            Home
          </a>
        </div>
      </main>
    </div>
  );
}
