import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ascent'24 | E-Cell Karunya",
  description: `Welcome to Ascent 2024, where the future of
  entrepreneurship converges. Hosted by E-Cell Karunya
  at the prestigious Karunya Institute of Technology and
  Sciences, Coimbatore, this summit is a celebration of
  innovative minds and transformative ideas.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
