'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import DeepLinkRedirect, { LoadingScreen } from '../../components/DeepLinkRedirect';

function UserInviteContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const groupCode = searchParams.get('groupCode');

  let deepLink: string | null = null;
  if (token) {
    // Build the app deep link with the same query params
    deepLink = `magpie://users/invite?token=${encodeURIComponent(token)}`;
    if (groupCode) {
      deepLink += `&groupCode=${encodeURIComponent(groupCode)}`;
    }
  }

  return (
    <DeepLinkRedirect
      deepLink={deepLink}
      message="You've been invited to take over an account!"
    />
  );
}

export default function UserInvitePage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <UserInviteContent />
    </Suspense>
  );
}
