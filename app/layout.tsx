import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supra — Discover and Book Restaurants",
  description: "Discover and book the best restaurants in Georgia. Instant reservations, real-time availability, and exclusive deals.",
  keywords: ["restaurant reservation", "book table", "Georgia restaurants", "dining", "Supra"],
  authors: [{ name: "Supra" }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Supra — Discover and Book Restaurants",
    description: "Discover and book the best restaurants in Georgia. Instant reservations, real-time availability, and exclusive deals.",
    url: "https://supra-booking.com",
    siteName: "Supra",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supra — Discover and Book Restaurants",
    description: "Discover and book the best restaurants in Georgia. Instant reservations, real-time availability, and exclusive deals.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
