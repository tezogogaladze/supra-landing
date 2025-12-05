import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supra - Your Table is Waiting | Restaurant Reservations in Georgia",
  description: "Discover and book the best restaurants in Georgia. Instant reservations, real-time availability, and exclusive deals. Your perfect dining experience starts with Supra.",
  keywords: ["restaurant reservation", "book table", "Georgia restaurants", "dining", "Supra"],
  authors: [{ name: "Supra" }],
  openGraph: {
    title: "Supra - Your Table is Waiting",
    description: "Discover and book the best restaurants in Georgia",
    url: "https://supra-booking.com",
    siteName: "Supra",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supra - Your Table is Waiting",
    description: "Discover and book the best restaurants in Georgia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Satoshi', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
