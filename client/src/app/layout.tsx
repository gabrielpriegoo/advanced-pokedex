import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";

import React from "react";
import "./globals.css";

const MontserratFont = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advanced Pokemon",
  description: "Painel de controle de pokemons",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className={MontserratFont.className}>
        <body>{children}</body>
      </html>
    </>
  );
}
