"use client";

import { useState, useEffect } from "react";
import { track } from "@vercel/analytics";
import Modal from "./Modal";
import IOSModal from "./IOSModal";
import DesktopModal from "./DesktopModal";
import { PLAY_STORE_URL } from "../lib/constants";

interface DownloadButtonProps {
  playStoreUrl?: string;
  waitlistUrl?: string;
}

type Platform = "android" | "ios" | "desktop";

export default function DownloadButton({
  playStoreUrl = PLAY_STORE_URL,
  waitlistUrl = "#waitlist"
}: DownloadButtonProps) {
  const [platform, setPlatform] = useState<Platform | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Detect platform on client side
    const userAgent = navigator.userAgent.toLowerCase();

    if (/android/.test(userAgent)) {
      setPlatform("android");
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      setPlatform("ios");
    } else {
      setPlatform("desktop");
    }
  }, []);

  const handleClick = () => {
    // Track download button click
    track("download_button_click", { platform });

    if (platform === "android") {
      // Track Play Store redirect
      track("play_store_redirect");
      // Redirect to Play Store
      window.location.href = playStoreUrl;
    } else if (platform === "ios" || platform === "desktop") {
      // Track modal open
      track("download_modal_open", { platform });
      // Show modal
      setIsModalOpen(true);
    }
  };

  // Don't render until we know the platform (prevent hydration mismatch)
  if (platform === null) {
    return (
      <button className="flex h-10 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black opacity-50">
        Download
      </button>
    );
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="flex h-10 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition-all hover:bg-gray-100 hover:scale-105"
      >
        Download
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {platform === "ios" && <IOSModal waitlistUrl={waitlistUrl} />}
        {platform === "desktop" && (
          <DesktopModal playStoreUrl={playStoreUrl} waitlistUrl={waitlistUrl} />
        )}
      </Modal>
    </>
  );
}
