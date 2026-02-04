import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "SMOVR",
  description: "SMOVR is a revenue recovery solution for healthcare practices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Hide default footer when A2P page is active (it has its own footer)
  const showA2P = process.env.NEXT_PUBLIC_HOME_PAGE_A2P === 'true'

  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        {!showA2P && <Footer />}
      </body>
    </html>
  );
}
