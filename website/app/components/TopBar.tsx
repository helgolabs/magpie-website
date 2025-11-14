import Image from "next/image";
import Link from "next/link";
import DownloadButton from "./DownloadButton";

export default function TopBar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 backdrop-blur-md" style={{ backgroundColor: '#0B5A9F' }}>
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80 sm:gap-3">
          <Image
            src="/magpie-no-background.png"
            alt="magpie.money"
            width={40}
            height={40}
            className="h-8 w-8 sm:h-10 sm:w-10"
          />
          <span className="text-lg font-bold text-white sm:text-xl">
            magpie.money
          </span>
        </Link>
        <DownloadButton />
      </div>
    </header>
  );
}
