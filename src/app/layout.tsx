import type { Metadata } from "next";
import "./globals.css";
import { ThreeBackground } from "@/components/ui/three-background";

export const metadata: Metadata = {
  title: "Ichiro's Portfolio | The Duel",
  description: "Mathematically gifted engineer from Waseda. Explore my legend through a card game experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <ThreeBackground />
        {children}
      </body>
    </html>
  );
}
