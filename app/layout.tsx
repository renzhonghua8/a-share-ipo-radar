import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3001'),
  title: '新股雷达｜A股打新决策助手',
  description: '结合历史数据，分析新股热度、盈利空间与中签难度。',
  openGraph: {
    title: '新股雷达｜A股打新决策助手',
    description: '让历史数据给答案：分析新股热度、盈利空间与中签难度。',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '新股雷达｜A股打新决策助手',
    description: '让历史数据给答案：分析新股热度、盈利空间与中签难度。',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
