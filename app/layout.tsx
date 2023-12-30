import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./(components)/header";
import Footer from "./(components)/footer";
import Head from "next/head";

// const inter = Inter({ subsets: ['latin'] })
const grotesk = Space_Grotesk({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Blogga",
  description: "Content management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <link rel="icon" href="/favicon.svg" sizes="any" />
      <body className={grotesk.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
