/**
 * @file layout.tsx
 * @description アプリケーション全体のルートレイアウト。
 * メタデータの設定、フォントの適用、共通のナビゲーションバーとフッターの配置、
 * および全体を包む背景コンポーネントを定義します。
 */

import type { Metadata } from "next"
  ;
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-personality",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-logic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ichiro Miyamoto ",
  description: "Portfolio of Ichiro Miyamoto - Mathematician, Engineer, and Creator.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${syne.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[var(--bg-deep)] text-[var(--text-white)] antialiased overflow-x-hidden font-human">
        {children}
      </body>
    </html>
  );
}
