import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { CursorTrail } from '@/components/CursorTrail';

import { PageTransition } from '@/components/PageTransition';
import { BackgroundParticles } from '@/components/BackgroundParticles';

export const metadata: Metadata = {
  title: 'Servestack | Websites for Cafes & Hotels',
  description:
    'Professional websites, online ordering, and booking systems for cafe, restaurant, and hotel owners in India.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className="font-sans antialiased relative">
        <BackgroundParticles />
        <CursorTrail />
        <PageTransition>{children}</PageTransition>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
