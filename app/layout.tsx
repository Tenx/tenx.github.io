import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teng Teng - AI/ML Developer",
  description: "Personal portfolio of Teng Teng, AI/ML Developer Lead and Co-founder of XXXAI",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" style={{ scrollPaddingTop: '100px' }}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
