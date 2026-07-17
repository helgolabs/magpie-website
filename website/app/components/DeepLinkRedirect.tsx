"use client";

import { useEffect } from "react";
import { PLAY_STORE_URL } from "../lib/constants";

interface DeepLinkRedirectProps {
  deepLink: string | null;
  message: string;
}

export function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>
  );
}

export default function DeepLinkRedirect({ deepLink, message }: DeepLinkRedirectProps) {
  useEffect(() => {
    if (!deepLink) return;

    // Attempt to open the app
    window.location.href = deepLink;

    // Fall back to the Play Store, but only if this tab is still in the
    // foreground — if the app opened, the tab is hidden and redirecting
    // would leave the browser stranded on the store page.
    const timeout = setTimeout(() => {
      if (document.visibilityState === "visible") {
        window.location.href = PLAY_STORE_URL;
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [deepLink]);

  if (!deepLink) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4 text-gray-900">Invalid invite link</h1>
          <p className="text-gray-600 mb-4">
            This invite link is incomplete. Ask the sender for a new one, or get Magpie from the Play Store.
          </p>
          <div className="mt-6">
            <a
              href={PLAY_STORE_URL}
              className="text-blue-600 hover:text-blue-800 underline text-sm"
            >
              Go to the Play Store
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <div className="mb-6">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Opening Magpie...</h1>
        <p className="text-gray-600 mb-4">{message}</p>
        <p className="text-sm text-gray-500">
          If the app doesn&apos;t open automatically, you&apos;ll be redirected to the Play Store.
        </p>
        <div className="mt-6">
          <a
            href={PLAY_STORE_URL}
            className="text-blue-600 hover:text-blue-800 underline text-sm"
          >
            Or click here to go to the Play Store
          </a>
        </div>
      </div>
    </div>
  );
}
