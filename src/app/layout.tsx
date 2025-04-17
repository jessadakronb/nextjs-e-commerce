import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import "./globals.css";

// Define Prompt font (Thai)
const prompt = Prompt({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-prompt",
});

// Keep Geist fonts as well
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO metadata
export const metadata: Metadata = {
  title: {
    template: "%s | DoHome E-commerce",
    default: "DoHome E-commerce - Your One-Stop Shop for Home Solutions",
  },
  description:
    "Find the best home improvement products, furniture, and more at DoHome. Quality products, great prices, and fast delivery.",
  keywords: [
    "dohome",
    "e-commerce",
    "home improvement",
    "furniture",
    "home decor",
    "building materials",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: "DoHome E-commerce",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DoHome E-commerce",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${prompt.variable} ${geistSans.variable} ${geistMono.variable} font-prompt antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
