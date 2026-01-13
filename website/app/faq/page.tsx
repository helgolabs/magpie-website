"use client";

import { useState } from "react";
import Image from "next/image";
import { PLAY_STORE_URL } from "../lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "What is Magpie?",
          a: "Magpie is a bill-splitting app that connects to your bank accounts via open banking. Instead of manually entering every expense, Magpie automatically imports your transactions so you can split bills in just 3 taps.",
        },
        {
          q: "How is Magpie different from Splitwise?",
          a: "The key difference is automatic transaction import. Splitwise requires you to manually enter every expense. Magpie connects to your bank accounts and pulls in transactions automatically, saving you time and ensuring you never forget to log an expense.",
        },
        {
          q: "Do my friends need to have Magpie?",
          a: "No! Magpie supports guest accounts, so you can add anyone to a group and split expenses with them even if they don't have the app installed.",
        },
        {
          q: "Is Magpie free?",
          a: "Yes, Magpie is free to use for basic expense splitting. You only need to upgrade if you want to connect your bank accounts for automatic transaction import. Plans start at just £1.99/month.",
        },
      ],
    },
    {
      category: "Open Banking & Security",
      questions: [
        {
          q: "What is open banking?",
          a: "Open banking is a secure way to connect apps to your bank account. It's regulated by the FCA (Financial Conduct Authority) in the UK. Magpie uses GoCardless, a leading FCA-authorized open banking provider, to securely connect to your bank. When you connect via open banking, we can read your transactions but we never have access to move your money or see your banking credentials.",
        },
        {
          q: "Is open banking safe?",
          a: "Yes, extremely safe. Open banking is regulated by financial authorities and uses bank-grade encryption. We partner with GoCardless, a leading open banking provider. We never store your banking username or password, and we can only read transaction data - we cannot move money or make payments.",
        },
        {
          q: "What data does Magpie access?",
          a: "When you connect a bank account, we only access your transaction history (merchant name, amount, date). We don't see your balance, we can't move money, and we don't store your banking credentials. You can disconnect at any time.",
        },
        {
          q: "Is my personal data secure?",
          a: "Absolutely. We're GDPR compliant, use end-to-end encryption, and store all data securely. We never sell your data to third parties. You can read our full privacy policy for details.",
        },
        {
          q: "Can Magpie access my money?",
          a: "No. Open banking only gives us read access to your transactions. We cannot move money, make payments, or access your banking credentials. Think of it like viewing a bank statement - we can see what you spent, but we can't touch your money.",
        },
      ],
    },
    {
      category: "Features & Usage",
      questions: [
        {
          q: "How many bank accounts can I connect?",
          a: "It depends on your plan: Starter (1 connection), Premium (5 connections), Ultimate (10 connections). Most users find 5 connections is plenty for their cards and bank accounts.",
        },
        {
          q: "Does Magpie work offline?",
          a: "Yes! You can add expenses, create groups, and manage splits even without internet. Everything syncs automatically when you're back online.",
        },
        {
          q: "Can I use Magpie for group holidays?",
          a: "Absolutely! Magpie is perfect for group travel. Create a group, add your travel companions (even if they don't have the app), and start splitting expenses. Magpie supports multi-currency, so it works great for international trips.",
        },
        {
          q: "How do I settle up with someone?",
          a: "Magpie shows you exactly who owes what. When it's time to settle, you can mark debts as paid within the app. Magpie tracks balances but doesn't process payments - you settle up however you prefer (bank transfer, cash, PayPal, etc.).",
        },
        {
          q: "Can I split bills unequally?",
          a: "Yes! While Magpie makes equal splitting super quick, you can also split expenses by custom amounts or percentages for situations where someone paid more or consumed more.",
        },
        {
          q: "What currencies does Magpie support?",
          a: "Magpie supports multiple currencies, making it perfect for international travel. You can add expenses in any currency and Magpie will track them correctly.",
        },
      ],
    },
    {
      category: "Pricing & Subscriptions",
      questions: [
        {
          q: "What's included in the free plan?",
          a: "The free plan includes unlimited expenses, unlimited groups, guest accounts, offline mode, and all core bill-splitting features. The only limitation is that you can't connect bank accounts for automatic transaction import.",
        },
        {
          q: "Can I try before I buy?",
          a: "Yes! All paid plans include a 7-day free trial. You can connect your bank, test automatic transaction import, and see if it works for you before committing.",
        },
        {
          q: "Can I cancel anytime?",
          a: "Absolutely. You can cancel your subscription at any time through the app. If you cancel, you'll keep access to premium features until the end of your billing period, then automatically drop to the free plan.",
        },
        {
          q: "What happens if I cancel my subscription?",
          a: "Your existing data stays safe. You'll just lose access to bank connections and automatic transaction import. You can still use all free features (manual expense entry, groups, splits, etc.).",
        },
        {
          q: "Do you offer student discounts?",
          a: "Not currently, but we're considering this! Our pricing is already very affordable at £1.99/month for the Starter plan. Follow us on social media for updates on future promotions.",
        },
      ],
    },
    {
      category: "Technical",
      questions: [
        {
          q: "Which banks does Magpie support?",
          a: "Magpie supports thousands of UK banks and credit cards through open banking, including all major banks like HSBC, Barclays, Lloyds, NatWest, Santander, and more. If your bank supports open banking in the UK, it will work with Magpie.",
        },
        {
          q: "Is Magpie available on iOS?",
          a: "Not yet, but it's coming soon! We're currently focused on perfecting the Android experience. You can join our iOS waitlist on the website to be notified when it launches.",
        },
        {
          q: "Does Magpie work outside the UK?",
          a: "Currently, bank connections only work with UK banks that support open banking. However, you can still use all of Magpie's manual features anywhere in the world, including multi-currency support for international trips.",
        },
        {
          q: "How do I delete my account?",
          a: "You can request account deletion at any time through our website. All your data will be permanently deleted within 30 days as per GDPR requirements.",
        },
      ],
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
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 sm:text-2xl">
            Everything you need to know about Magpie
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="w-full max-w-4xl space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={category.category}>
              <h2 className="mb-4 text-2xl font-bold text-white">
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = faqs
                    .slice(0, categoryIndex)
                    .reduce((acc, cat) => acc + cat.questions.length, 0) + questionIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={questionIndex}
                      className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm transition-all"
                    >
                      <button
                        onClick={() =>
                          setOpenIndex(isOpen ? null : globalIndex)
                        }
                        className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
                      >
                        <h3 className="pr-8 text-lg font-semibold text-white">
                          {faq.q}
                        </h3>
                        <svg
                          className={`h-6 w-6 flex-shrink-0 text-white transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="border-t border-white/20 px-6 pb-6 pt-4">
                          <p className="text-white/90">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="w-full max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Still have questions?
          </h2>
          <p className="mb-6 text-lg text-white/90">
            Can't find the answer you're looking for? Download the app and check
            out our in-app help center, or reach out to our support team.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={PLAY_STORE_URL}
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
        <div className="mt-8 flex gap-6 text-sm text-white/60">
          <a href="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="transition-colors hover:text-white">
            Terms of Service
          </a>
          <a href="/pricing" className="transition-colors hover:text-white">
            Pricing
          </a>
          <a href="/" className="transition-colors hover:text-white">
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
}
