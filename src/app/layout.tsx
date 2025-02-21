import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ParticlesComponent from "@/components/Partickles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Mykola Nedilko portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >     
        <div className="grid min-h-screen grid-rows-[1fr_auto] relative">
        <ParticlesComponent />
        <Navbar />
        <SideBar/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
