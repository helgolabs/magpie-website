import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for our application",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-8 py-16 px-8 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
          Terms of Service
        </h1>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Agreement to Terms
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Use License
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Permission is granted to temporarily access the materials on our service for personal, non-commercial transitory viewing only.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Prohibited Content and Conduct
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            You agree not to upload, post, share, or otherwise transmit any content through the Magpie app that contains or depicts:
          </p>
          <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400 space-y-2">
            <li><strong>Nudity or Sexual Content:</strong> Nude, pornographic, sexually explicit, or sexually suggestive images or materials</li>
            <li><strong>Violence or Gore:</strong> Graphic violence, gore, death, severe injury, or content promoting violence</li>
            <li><strong>Hate Speech:</strong> Content that promotes hatred, discrimination, or violence against individuals or groups based on race, ethnicity, religion, gender, sexual orientation, disability, or any other protected characteristic</li>
            <li><strong>Harassment or Bullying:</strong> Content intended to harass, intimidate, threaten, or bully others</li>
            <li><strong>Illegal Activities:</strong> Content that promotes, facilitates, or depicts illegal activities, including drug use, weapons trafficking, or other criminal conduct</li>
            <li><strong>Child Exploitation:</strong> Any content involving minors in inappropriate, exploitative, or harmful situations</li>
            <li><strong>Terrorism or Extremism:</strong> Content that promotes, supports, or glorifies terrorist organizations or extremist ideologies</li>
            <li><strong>Self-Harm:</strong> Content that promotes, encourages, or glorifies self-harm, suicide, or eating disorders</li>
            <li><strong>Spam or Malware:</strong> Unsolicited commercial content, spam, viruses, malware, or malicious code</li>
            <li><strong>Impersonation:</strong> Content that impersonates others or misrepresents your identity or affiliation</li>
            <li><strong>Copyright Infringement:</strong> Content that violates intellectual property rights or other proprietary rights of others</li>
            <li><strong>Private Information:</strong> Sharing of others' personal information without their consent (doxxing)</li>
          </ul>

          <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <p className="text-base leading-7 text-zinc-800 dark:text-zinc-200 font-semibold mb-2">
              Consequences of Violations:
            </p>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Violation of these content policies may result in:
            </p>
            <ul className="list-disc list-inside ml-4 text-base leading-7 text-zinc-600 dark:text-zinc-400 mt-2 space-y-1">
              <li>Immediate removal of the prohibited content</li>
              <li>Temporary suspension of your account</li>
              <li>Permanent termination of your account</li>
              <li>Reporting to law enforcement authorities when appropriate</li>
            </ul>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 mt-3">
              We reserve the right to determine, in our sole discretion, what constitutes a violation of these policies and to take appropriate action, including account termination without prior notice.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Disclaimer
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The materials on our service are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Limitations
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            In no event shall we or our suppliers be liable for any damages arising out of the use or inability to use the materials on our service.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Modifications
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            We may revise these terms of service at any time without notice. By using this service you are agreeing to be bound by the current version of these terms.
          </p>
        </section>
      </main>
    </div>
  );
}
