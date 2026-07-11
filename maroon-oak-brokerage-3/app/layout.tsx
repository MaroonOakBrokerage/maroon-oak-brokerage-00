import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import { siteConfig } from "@/lib/data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Independent Insurance Brokerage in Austin, Texas`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Maroon Oak Brokerage is an independent personal and commercial insurance brokerage in Austin, Texas. Understanding First. Insurance Second.",
  keywords: [
    "Austin insurance broker",
    "Texas independent insurance agency",
    "personal insurance Austin",
    "business insurance Texas",
    "Maroon Oak Brokerage",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | Independent Insurance Brokerage`,
    description: "Understanding First. Insurance Second.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: ["/logo-primary.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: "Understanding First. Insurance Second.",
    images: ["/logo-primary.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col pb-16 font-sans lg:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
