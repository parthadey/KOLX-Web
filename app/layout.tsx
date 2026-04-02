import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KOLX — The KOL Engagement Platform for Pharma",
  description:
    "Manage every KOL relationship with the governance, compliance, and visibility your organization demands. One platform for profiles, engagements, approvals, and audit.",
  keywords: [
    "KOL management",
    "key opinion leader",
    "pharma compliance",
    "medical affairs",
    "engagement platform",
    "healthcare CRM",
  ],
  openGraph: {
    title: "KOLX — The KOL Engagement Platform for Pharma",
    description:
      "Governed KOL engagement from first contact to closed engagement. Built for compliance-first medical organizations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
