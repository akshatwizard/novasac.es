import type { Metadata } from "next";
import { Montserrat, Open_Sans, Inter, Geist } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/lib/smooth_scroll";
import TopBar from "@/components/top_bar";
import Header from "@/components/header/header";
import DesktopHeader from "@/components/header/desktop.header";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import Providers from "@/lib/providers";
import { AuthProvider } from "@/context/auth_context";
import Script from "next/script";
import { GoogleOAuthProvider } from '@react-oauth/google';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

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
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
          <SmoothScrollProvider>
            <Providers>
              <AuthProvider>
                <TopBar />
                <Header />
                <DesktopHeader />
                {children}
                <Footer />
              </AuthProvider>
            </Providers>
          </SmoothScrollProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
