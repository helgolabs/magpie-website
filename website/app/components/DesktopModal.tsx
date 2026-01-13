"use client";

import { useEffect, useState } from "react";
import { PLAY_STORE_URL } from "../lib/constants";

interface DesktopModalProps {
  playStoreUrl?: string;
  waitlistUrl?: string;
}

export default function DesktopModal({
  playStoreUrl = PLAY_STORE_URL,
  waitlistUrl = "#waitlist"
}: DesktopModalProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    // Generate QR code using a free QR code API
    const encodedUrl = encodeURIComponent(playStoreUrl);
    setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedUrl}`);
  }, [playStoreUrl]);

  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        Download magpie.money
      </h2>

      <div className="flex flex-col items-center gap-3">
        <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          Scan to Download on Android
        </p>
        {qrCodeUrl && (
          <div className="rounded-xl bg-white p-4 shadow-md">
            <img src={qrCodeUrl} alt="QR Code for Play Store" className="h-48 w-48" />
          </div>
        )}
        <p className="text-xs text-zinc-500">
          Scan with your Android device to download from Google Play
        </p>
      </div>

      <div className="w-full border-t border-zinc-200 pt-4 dark:border-zinc-700">
        <div className="flex items-center justify-center gap-2 text-zinc-600 dark:text-zinc-400">
          <span className="text-2xl">🍎</span>
          <p className="text-sm">
            Coming soon to the App Store
          </p>
        </div>
        <a
          href={waitlistUrl}
          className="mt-3 inline-block text-sm text-primary transition-colors hover:text-primary-dark"
        >
          Join the iOS waiting list
        </a>
      </div>
    </div>
  );
}
