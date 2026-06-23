import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mohamad-umar-portfolio.vercel.app'),
  title: "Mohamad Umar | Premium Software Engineer & Web Developer",
  description: "Portfolio of Mohamad Umar, a passionate Full-Stack Web Developer and UI/UX Designer specializing in React, Next.js, and modern scalable architectures.",
  keywords: ["Mohamad Umar", "Software Engineer", "Web Developer", "React", "Next.js", "Full Stack", "UI/UX", "Portfolio"],
  authors: [{ name: "Mohamad Umar" }],
  creator: "Mohamad Umar",
  openGraph: {
    title: "Mohamad Umar | Software Engineer",
    description: "Crafting premium, high-performance web applications.",
    url: "https://mohamad-umar-portfolio.vercel.app",
    siteName: "Mohamad Umar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamad Umar | Software Engineer",
    description: "Crafting premium, high-performance web applications.",
  },
};

import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth dark`}
    >
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
