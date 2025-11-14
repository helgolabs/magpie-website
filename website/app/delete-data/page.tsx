import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Your Data - magpie.money",
  description: "Request deletion of specific data from your Magpie account.",
};

export default function DeleteDataPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col gap-8 py-16 px-8 bg-white dark:bg-zinc-900">
        <div>
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">
            Delete Your Data
          </h1>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            You have the right to request deletion of specific data associated with your Magpie account.
          </p>
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            What Data Can Be Deleted?
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            You can request deletion of various types of data, including:
          </p>
          <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400 space-y-2">
            <li>
              <strong>Personal Information:</strong> Your name, email address, profile picture
            </li>
            <li>
              <strong>Transaction Data:</strong> Individual transactions from your connected bank accounts (subject to group expense limitations)
            </li>
            <li>
              <strong>Bank Connections:</strong> Authorization to access your bank accounts via GoCardless
            </li>
            <li>
              <strong>Group Data:</strong> Your participation in specific expense groups (only if all expenses are settled)
            </li>
            <li>
              <strong>Device Data:</strong> Locally stored transaction caches on your device
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Important Limitations
          </h2>
          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <strong className="text-amber-900 dark:text-amber-200">Please Note:</strong> We cannot delete data that is essential for maintaining accurate expense records for other users in your groups. If you have unsettled balances with other users, we can only anonymize your personal information while retaining minimal financial data.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            How to Request Data Deletion
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            To request deletion of specific data, please send us an email with the following information:
          </p>
          <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400 space-y-2">
            <li>The email address associated with your Magpie account</li>
            <li>A detailed description of what data you want deleted</li>
            <li>The reason for your request (optional but helpful)</li>
          </ul>

          <div className="mt-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-base font-semibold text-black dark:text-zinc-50 mb-3">
              Send your data deletion request to:
            </p>
            <a
              href="mailto:support@magpie.money?subject=Data%20Deletion%20Request&body=Please%20delete%20the%20following%20data%20from%20my%20account%3A%0A%0AEmail%20Address%3A%20%5BYour%20email%5D%0A%0AData%20to%20Delete%3A%0A%5BPlease%20specify%20what%20data%20you%20want%20deleted%5D%0A%0AReason%20(optional)%3A%0A%5BYour%20reason%5D"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email Data Deletion Request
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
            <li>We will review your account and the data you want deleted</li>
            <li>We will assess whether the data can be deleted or needs to be retained for group expense accuracy</li>
            <li>We will complete the deletion process within 30 days</li>
            <li>We will notify you of the outcome and explain any data that could not be deleted</li>
          </ol>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Alternative: Delete Your Entire Account
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            If you want to delete all your data and close your account entirely, please visit our{" "}
            <Link href="/delete-account" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">
              Account Deletion page
            </Link>
            .
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Need Help?
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            If you have questions about data deletion or your privacy rights, please contact us at{" "}
            <a href="mailto:support@magpie.money" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">
              support@magpie.money
            </a>{" "}
            or review our{" "}
            <Link href="/privacy" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">
              Privacy Policy
            </Link>
            .
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
