import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Your Account - magpie.money",
  description: "Request deletion of your Magpie account and associated data.",
};

export default function DeleteAccountPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col gap-8 py-16 px-8 bg-white dark:bg-zinc-900">
        <div>
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">
            Delete Your Account
          </h1>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            We're sorry to see you go. If you'd like to delete your Magpie account, please read the information below carefully.
          </p>
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Before You Delete Your Account
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Please note the following important information:
          </p>
          <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400 space-y-2">
            <li>
              <strong>Unsettled Groups:</strong> If you're involved in groups with unsettled balances, we cannot completely delete your account. We will anonymize your personal information (name, email, profile picture) but retain minimal financial data to keep other users' expense records accurate.
            </li>
            <li>
              <strong>Settled Groups:</strong> If all your groups are settled, we can perform a complete account deletion.
            </li>
            <li>
              <strong>Timeline:</strong> We will process your request within 30 days and notify you when it's complete.
            </li>
            <li>
              <strong>Irreversible:</strong> Once your account is deleted, this action cannot be undone.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            How to Request Account Deletion
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            To request deletion of your account, please send us an email with the following information:
          </p>
          <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400 space-y-2">
            <li>The email address associated with your Magpie account</li>
            <li>Your username (if different from your email)</li>
            <li>Confirmation that you want to delete your account</li>
          </ul>

          <div className="mt-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-base font-semibold text-black dark:text-zinc-50 mb-3">
              Send your deletion request to:
            </p>
            <a
              href="mailto:support@magpie.money?subject=Account%20Deletion%20Request&body=Please%20delete%20my%20account.%0A%0AEmail%20Address%3A%20%5BYour%20email%5D%0AUsername%3A%20%5BYour%20username%5D%0A%0AI%20confirm%20that%20I%20want%20to%20permanently%20delete%20my%20Magpie%20account."
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email Account Deletion Request
            </a>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">
              Or manually email: <span className="font-mono">support@magpie.money</span>
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            What Happens Next?
          </h2>
          <ol className="list-decimal list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400 space-y-2">
            <li>We will acknowledge your request within 5 business days</li>
            <li>We will review your account to check for unsettled group balances</li>
            <li>We will complete the deletion process within 30 days</li>
            <li>We will notify you when the deletion is complete and provide details about what data was deleted</li>
          </ol>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Need Help?
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            If you have questions about the deletion process or want to discuss alternatives, please contact us at{" "}
            <a href="mailto:support@magpie.money" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">
              support@magpie.money
            </a>
          </p>
        </section>

        <div className="border-t border-zinc-200 dark:border-zinc-700 pt-6">
          <Link href="/privacy" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">
            ← Back to Privacy Policy
          </Link>
        </div>
      </main>
    </div>
  );
}
