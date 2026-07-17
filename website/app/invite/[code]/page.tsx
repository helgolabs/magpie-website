'use client';

import { useParams } from 'next/navigation';
import DeepLinkRedirect from '../../components/DeepLinkRedirect';

export default function InvitePage() {
  const params = useParams();
  const inviteCode = params.code as string;

  const deepLink = inviteCode
    ? `magpie://invite?code=${encodeURIComponent(inviteCode)}`
    : null;

  return (
    <DeepLinkRedirect
      deepLink={deepLink}
      message="You're being invited to join a group!"
    />
  );
}
