import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteBackground from "@/app/_components/SiteBackground"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Full-stack Developer",
  description: "Portfolio showcasing my projects.",
  keywords: [
    "Portfolio",
    "Full-stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
  ],
  authors: [{ name: "Tsetsen" }],
  openGraph: {
    title: "Tsetsen | Full-stack Developer",
    description: "My portfolio showcasing web projects.",
    url: "https://your-portfolio.vercel.app",
    siteName: "Tsetsen Portfolio",
    images: "/og-image.png",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#0a0a0b] text-white antialiased`}
      >
        {/* 🟢 Супер background */}
        <SiteBackground />

        {/* 🟣 Үндсэн контент */}
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
