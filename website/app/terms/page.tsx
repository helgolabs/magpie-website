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
