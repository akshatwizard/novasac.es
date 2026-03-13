import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/lib/smooth_scroll";

const montserrat = Montserrat({
  variable: "--font-montserrate",
  preload: true
});

const open_sans = Open_Sans({
  variable: "--font-open-sans",
  preload: true
});

export const metadata: Metadata = {
  title: "Novasec",
  description: "Novasec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${open_sans.variable} antialiased`}
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
