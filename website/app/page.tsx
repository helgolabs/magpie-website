import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-zinc-50 to-zinc-100 font-sans dark:from-zinc-950 dark:to-black">
      <main className="flex w-full max-w-5xl flex-col items-center justify-center gap-16 px-6 py-20">
        {/* Logo */}
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/logo.png"
            alt="Magpie Money logo"
            width={120}
            height={120}
            priority
            className="h-auto w-32"
          />
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Magpie Money
          </h1>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            Your smart companion for managing money and tracking finances
          </p>
          <p className="max-w-xl text-lg leading-8 text-zinc-500 dark:text-zinc-500">
            Take control of your financial future with intuitive tools designed to help you save, budget, and grow your wealth.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-14 items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 text-white transition-all hover:scale-105 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download on Google Play
          </a>
          <a
            className="flex h-14 items-center justify-center gap-2 rounded-full border-2 border-zinc-900 px-8 text-zinc-900 transition-all hover:scale-105 hover:bg-zinc-900 hover:text-white dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download on App Store
          </a>
        </div>

        {/* Features */}
        <div className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-900">
            <div className="text-4xl">📊</div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Track Expenses
            </h3>
            <p className="text-center text-zinc-600 dark:text-zinc-400">
              Keep tabs on where your money goes with easy expense tracking
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-900">
            <div className="text-4xl">💰</div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Smart Budgets
            </h3>
            <p className="text-center text-zinc-600 dark:text-zinc-400">
              Set and manage budgets that adapt to your spending habits
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-900">
            <div className="text-4xl">📈</div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Insights
            </h3>
            <p className="text-center text-zinc-600 dark:text-zinc-400">
              Get personalized insights to improve your financial health
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 flex gap-6 text-sm text-zinc-500">
          <a href="/privacy" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Terms of Service
          </a>
        </div>
      </main>
    </div>
  );
}
