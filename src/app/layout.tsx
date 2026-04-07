import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.laur.com.br'),
  title: {
    template: '%s | Blog Laur',
    default: 'Blog Laur — Butantã, São Paulo',
  },
  description: 'Notícias, dicas e novidades sobre moradia, transporte, custo de vida e tudo sobre o Butantã, perto da USP, São Paulo.',
  keywords: ['butantã', 'kitnet', 'moradia estudantil', 'USP', 'república', 'vida universitária', 'São Paulo'],
  authors: [{ name: 'Blog Laur' }],
  openGraph: {
    type: 'website',
    siteName: 'Blog Laur',
    locale: 'pt_BR',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Blog Laur — Butantã, São Paulo' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'HDh0C-sLFbEJ0jEdqVzdd_Ca41Jls25JInk5HSTpIQ8',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let locale = "pt";
  try {
    const { getLocale } = await import("next-intl/server");
    locale = await getLocale();
  } catch {
    // fallback for pages without locale context (e.g. /_not-found)
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
