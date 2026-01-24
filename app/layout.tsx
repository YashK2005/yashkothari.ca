import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yash Kothari",
  description: "CDN Infrastructure at Vercel. Previously SeatGeek, Shopify, Nest Wallet. CS at University of Waterloo.",
  metadataBase: new URL("https://yashkothari.ca"),
  openGraph: {
    title: "Yash Kothari",
    description: "CDN Infrastructure at Vercel. Previously SeatGeek, Shopify, Nest Wallet.",
    url: "https://yashkothari.ca",
    siteName: "Yash Kothari",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Yash Kothari",
    description: "CDN Infrastructure at Vercel. Previously SeatGeek, Shopify, Nest Wallet.",
    creator: "@YashK_7",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
