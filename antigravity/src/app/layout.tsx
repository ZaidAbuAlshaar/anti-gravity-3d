import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Anti-Gravity | Freedom Model',
  description: 'A futuristic interactive product experience built around motion, precision, and freedom.',
  keywords: ['Anti-Gravity', 'Freedom Model', 'futuristic', '3D', 'product'],
  openGraph: {
    title: 'Anti-Gravity | Freedom Model',
    description: 'Break the limits of control.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
