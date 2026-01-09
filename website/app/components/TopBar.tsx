"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DownloadButton from "./DownloadButton";

export default function TopBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/how-it-works", label: "How it Works" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
  ];

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

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white transition-colors hover:text-yellow-400"
            >
              {link.label}
            </Link>
          ))}
          <DownloadButton />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <DownloadButton />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/20 bg-[#0B5A9F] lg:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-base font-medium text-white transition-colors hover:text-yellow-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
