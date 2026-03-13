import type { Metadata } from "next";
import { Montserrat, Open_Sans, Inter, Geist } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/lib/smooth_scroll";
import TopBar from "@/components/top_bar";
import Header from "@/components/header/header";
import DesktopHeader from "@/components/header/desktop.header";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${montserrat.variable} ${open_sans.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <TopBar />
          <Header />
          <DesktopHeader />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
