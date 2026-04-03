import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clique Studio - Dance Studio & Creative Space",
  description: "Clique Studio - Your premier dance studio and creative space in Baguio City. Join our classes, rent our studio, and discover your passion for dance.",
  keywords: ["Clique Studio", "Dance Studio", "Baguio", "Philippines", "Dance Classes", "Studio Rental", "Creative Space"],
  authors: [{ name: "Clique Studio" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Clique Studio - Dance Studio & Creative Space",
    description: "Your premier dance studio and creative space in Baguio City",
    url: "https://cliquestudio.ph",
    siteName: "Clique Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clique Studio - Dance Studio & Creative Space",
    description: "Your premier dance studio and creative space in Baguio City",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
