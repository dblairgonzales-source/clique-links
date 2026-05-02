import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Overused Grotesk for headings
const overusedGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/OverusedGrotesk-Roman-BF64eeac18184a5.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/OverusedGrotesk-Medium-BF64eeac18163be.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/OverusedGrotesk-Bold-BF64eeac17f1b7f.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-overused",
  display: "swap",
});

// Creato Display for body text
const creatoDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/CreatoDisplay-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/CreatoDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CreatoDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/CreatoDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-creato",
  display: "swap",
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
        className={`${overusedGrotesk.variable} ${creatoDisplay.variable} font-body antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
