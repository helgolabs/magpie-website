'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { PLAY_STORE_URL } from '../../lib/constants';

export default function InvitePage() {
  const params = useParams();
  const inviteCode = params.code as string;
  const playStoreLink = PLAY_STORE_URL;

  useEffect(() => {
    // Try to open the app first
    const appDeepLink = `magpie://invite?code=${inviteCode}`;

    // Attempt to open the app
    window.location.href = appDeepLink;

    // If app doesn't open, redirect to Play Store after 2 seconds
    const timeout = setTimeout(() => {
      window.location.href = playStoreLink;
    }, 2000);

    return () => clearTimeout(timeout);
  }, [inviteCode, playStoreLink]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <div className="mb-6">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Opening Magpie...</h1>
        <p className="text-gray-600 mb-4">You&apos;re being invited to join a group!</p>
        <p className="text-sm text-gray-500">
          If the app doesn&apos;t open automatically, you&apos;ll be redirected to the Play Store.
        </p>
        <div className="mt-6">
          <a
            href={playStoreLink}
            className="text-blue-600 hover:text-blue-800 underline text-sm"
          >
            Or click here to go to the Play Store
          </a>
        </div>
      </div>
    </div>
  );
}
