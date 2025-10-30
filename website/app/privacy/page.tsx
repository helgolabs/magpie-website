import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Magpie Money",
  description: "Privacy Policy for Magpie - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-4xl flex-col gap-8 py-16 px-8 bg-white dark:bg-zinc-900">
        <div>
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">
            Privacy Policy for Magpie
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            <strong>Effective Date:</strong> 15th July 2025<br />
            <strong>Last Updated:</strong> 15th July 2025
          </p>
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            1. Introduction
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            This Privacy Policy explains how Helgolabs ("we," "us," or "our") collects, uses, and protects your personal information when you use the Magpie mobile application ("App"). Magpie is an expense sharing app that helps users track and split expenses with groups.
          </p>
          <div className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            <strong>Contact Information:</strong>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Developer: Helgolabs</li>
              <li>Email: support@magpie.money</li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            2. Information We Collect
          </h2>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              2.1 Personal Information
            </h3>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 mb-2">
              We collect the following personal information from you:
            </p>
            <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <li>Email address</li>
              <li>Username (which may or may not be your real name)</li>
              <li>Name and profile picture (if you sign in with Google)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              2.2 Financial Information
            </h3>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 mb-2">
              Through our integration with GoCardless, we collect and store the following transaction data from your connected bank accounts and credit cards:
            </p>
            <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <li>Transaction ID</li>
              <li>Institution ID</li>
              <li>Payment amount</li>
              <li>Transaction date</li>
              <li>Currency</li>
              <li>Transaction description</li>
              <li>Creditor name and account information</li>
              <li>Debtor name</li>
              <li>Proprietary Bank Transaction Code</li>
              <li>Internal Transaction ID</li>
              <li>Account ID</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              2.3 Group and Sharing Information
            </h3>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 mb-2">
              When you use the expense sharing features:
            </p>
            <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <li>Information about group members (email addresses and usernames)</li>
              <li>Details of shared expenses and payment splits</li>
              <li>Group membership information</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              2.4 Device Permissions
            </h3>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 mb-2">
              We may request the following optional permissions:
            </p>
            <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <li>Camera access (for capturing receipts or profile pictures)</li>
              <li>Notification permissions (to send you app-related notifications)</li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            3. How We Use Your Information
          </h2>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              3.1 Core App Functionality
            </h3>
            <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <li>Providing expense tracking and splitting services</li>
              <li>Connecting to your bank accounts and credit cards through GoCardless</li>
              <li>Displaying transaction history and expense splits</li>
              <li>Managing group memberships and shared expenses</li>
              <li>Converting currencies using the ECB exchange rate API</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              3.2 Communication and Support
            </h3>
            <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <li>Providing customer support and responding to your inquiries</li>
              <li>Sending you service-related notifications</li>
              <li>Marketing communications (including email marketing)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              3.3 Analytics and Improvement
            </h3>
            <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <li>Analyzing app usage through Google Analytics, Firebase Analytics, and Railway Analytics</li>
              <li>Improving our services and developing new features</li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            4. Data Storage and Security
          </h2>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              4.1 Data Storage
            </h3>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 mb-2">
              Your data is stored in two locations:
            </p>
            <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <li><strong>Local Storage:</strong> Transaction data is cached locally on your device using Room database</li>
              <li><strong>Remote Storage:</strong> Your data is stored on our PostgreSQL database hosted on Railway servers in the Netherlands</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              4.2 Security Measures
            </h3>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 mb-2">
              We implement appropriate security measures to protect your data:
            </p>
            <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <li>All communications use HTTPS encryption</li>
              <li>Passwords are stored as hashes, not in plain text</li>
              <li>Rate limiting on transaction requests</li>
              <li>Regular security updates and monitoring</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              4.3 Bank Account Connection
            </h3>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Your bank account connection through GoCardless is authorized for 3 months, after which you must reauthorize the connection.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            5. Data Sharing
          </h2>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              5.1 Third-Party Services
            </h3>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 mb-2">
              We share data with the following third-party services:
            </p>
            <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <li><strong>GoCardless:</strong> For bank account and credit card connections (only data necessary for the service)</li>
              <li><strong>Google:</strong> If you sign in with Google, we share authentication data</li>
              <li><strong>ECB Exchange Rate API:</strong> We access exchange rates but do not share any user data</li>
              <li><strong>Analytics Services:</strong> Google Analytics, Firebase Analytics, and Railway Analytics for app improvement</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              5.2 Group Members
            </h3>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 mb-2">
              When you participate in expense sharing groups, other group members can see:
            </p>
            <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <li>Your username and email address</li>
              <li>Payment amounts for shared expenses</li>
              <li>Transaction booking dates</li>
              <li>Bank or credit card company names</li>
              <li>Transaction descriptions for expenses you've shared</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              5.3 Legal Requirements
            </h3>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
              We may disclose your information if required by law or to protect our rights and the safety of our users.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            6. Data Retention
          </h2>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              6.1 Active Users
            </h3>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
              We retain your personal data for as long as your account is active and you continue to use our services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              6.2 Account Closure
            </h3>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 mb-2">
              After you close your account, we retain your data for 5 years to:
            </p>
            <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <li>Resolve any disputes</li>
              <li>Comply with legal obligations</li>
              <li>Maintain accurate records for other users in shared groups</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              6.3 Data Deletion Requests
            </h3>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 mb-2">
              When you request data deletion:
            </p>
            <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <li>We cannot fully delete your data if it's part of shared expenses with other users</li>
              <li>We will anonymize your personal information while retaining necessary transaction data</li>
              <li>We remove personal identifiers such as your name, email address, transaction IDs, and account numbers</li>
              <li>We retain payment amounts, dates, and involvement in payments for group accuracy</li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            7. Your Rights Under GDPR
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            As a user in the UK, you have the following rights:
          </p>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              7.1 Access and Portability
            </h3>
            <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <li>Request access to your personal data</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              7.2 Rectification
            </h3>
            <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <li>Request correction of inaccurate personal data</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              7.3 Erasure
            </h3>
            <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <li>Request deletion of your personal data (subject to limitations for shared expenses)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              7.4 Restriction and Objection
            </h3>
            <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <li>Request restriction of processing</li>
              <li>Object to processing for direct marketing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              7.5 Exercising Your Rights
            </h3>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
              To exercise these rights, contact us at support@magpie.money.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            8. International Data Transfers
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Your data may be transferred to and processed in the Netherlands where our servers are located. We ensure appropriate safeguards are in place for such transfers.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            9. Changes to This Policy
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            We may update this Privacy Policy from time to time. We will notify you of significant changes through the App or via email. Your continued use of the App after changes constitutes acceptance of the new policy.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            10. Children's Privacy
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Our App is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            11. Contact Us
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            If you have questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            <strong>Email:</strong> support@magpie.money<br />
            <strong>Developer:</strong> Helgolabs
          </div>
        </section>

        <div className="border-t border-zinc-200 dark:border-zinc-700 pt-6">
          <p className="text-sm italic text-zinc-500 dark:text-zinc-400">
            This privacy policy was last updated on 15th July 2025. Please review it regularly for any changes.
          </p>
        </div>
      </main>
    </div>
  );
}
