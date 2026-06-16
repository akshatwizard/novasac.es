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
import Script from "next/script";

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
            <Footer />
          </Providers>
        </GoogleOAuthProvider>
        <Toaster />
        {/* <Script id="crisp" strategy="afterInteractive">
          {`window.$crisp=[];window.CRISP_WEBSITE_ID="bf4c7f16-6457-40f8-af4e-82a2961672f1";(function(){var d = document;var s = d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s)})()`}
        </Script> */}
      </body>
    </html>
  );
}
