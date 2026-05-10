import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AosInit } from "@/_components/Aosinit/aos-init";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deivid Pinturas & Acabamentos",
  description: "Qualidade em pintura com foco em acabamento e detalhe.",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">

        <AosInit />
        {children}

      </body>
    </html>
  );
}
