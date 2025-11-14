interface IOSModalProps {
  waitlistUrl?: string;
}

export default function IOSModal({ waitlistUrl = "#waitlist" }: IOSModalProps) {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <div className="text-6xl">🍎</div>
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        Coming Soon to the App Store
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400">
        We're working hard to bring magpie.money to iOS. Join our waiting list to be notified when we launch!
      </p>
      <a
        href={waitlistUrl}
        className="flex h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-white transition-all hover:bg-primary-dark"
      >
        Join the Waiting List
      </a>
    </div>
  );
}
