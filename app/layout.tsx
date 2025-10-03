import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LayoutClient from '@/components/LayoutClient';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Docs Template - Next.js + TypeScript + Shadcn/ui',
  description: 'Base template untuk dokumentasi project Next.js dengan TypeScript, TailwindCSS, dan Shadcn/ui',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
