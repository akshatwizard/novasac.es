import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/lib/smooth_scroll";
import TopBar from "@/components/top_bar";
import Header from "@/components/header/header";
import DesktopHeader from "@/components/header/desktop.header";
import Footer from "@/components/footer";
import Providers from "@/lib/providers";
import { AuthProvider } from "@/context/auth_context";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  variable: "--font-montserrate",
  subsets: ["latin"],
  display: "swap",
});

const open_sans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Novasac",
  description: "Novasac",
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
        <TopBar />
        <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID!}>
          <Providers>
            <AuthProvider>
              <Header />
              <DesktopHeader />
              <SmoothScrollProvider>
                {children}
              </SmoothScrollProvider>
            </AuthProvider>
          </Providers>
        </GoogleOAuthProvider>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
