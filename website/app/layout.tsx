import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "magpie.money - Smart Personal Finance App",
  description: "Take control of your financial future with magpie.money. Track expenses, manage budgets, and get personalized insights to improve your financial health.",
  icons: {
    icon: "/magpie-no-background.png",
    apple: "/magpie-no-background.png",
  },
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
      </body>
    </html>
  );
}
