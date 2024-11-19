import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teng Teng - Lead of AI/ML Development & Research",
  description: "Personal portfolio of Teng Teng, Lead of AI/ML Development & Research at SAP",
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
      <body className="font-sans">{children}</body>
    </html>
  );
}
