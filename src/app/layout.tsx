import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { Toaster } from "react-hot-toast";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Siddharth Badal",
  description: "I am a freelacer developer. work with python, javascript and sql. these are my projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white/50 min-h-screen`}  
      >
        <Container>
            <Header />
                {children}
                <Toaster position="top-right" />
            <Footer />
        </Container>

      </body>
    </html>
  );
}
