import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sai Teja's Vidyanikethan High School",
  description: "Official website of Sai Teja's Vidyanikethan High School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col selection:bg-brand-indigo selection:text-white bg-surface-cloud text-sys-body font-sans`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />

        {/* Floating Admissions CTA */}
        <Link
          href="/admissions"
          className="fixed bottom-6 right-6 z-50 bg-brand-amber text-white font-bold text-sm px-5 py-3 rounded-lg shadow-lg hover:bg-[#D97706] transition-colors animate-pulse-cta"
        >
          Admissions Open
        </Link>
      </body>
    </html>
  );
}
