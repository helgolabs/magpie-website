import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "magpie.money - Split Bills with Friends",
  description: "Connect your bank accounts and split expenses automatically. The only bill-splitting app with open banking integration. Perfect for flatmates, couples, and group travel.",
  icons: {
    icon: "/magpie-no-background.png",
    apple: "/magpie-no-background.png",
  },
  openGraph: {
    title: "magpie.money - Split Bills with Friends",
    description: "Connect your bank accounts and split expenses automatically.",
    url: "https://magpie.money",
    siteName: "magpie.money",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "magpie.money - Split Bills with Friends",
    description: "Connect your bank accounts and split expenses automatically.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://magpie.money"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${plusJakartaSans.variable} overflow-x-hidden antialiased`}
        style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
      >
        <TopBar />
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-QVCQTC0TDV" />
      </body>
    </html>
  );
}
