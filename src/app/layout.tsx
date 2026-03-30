import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// TODO: replace with real metadata
export const metadata: Metadata = {
  title: {
    default: "Lung Flute ECO: TB Treatment Innovation",
    template: "%s | Lung Flute ECO",
  },
  description:
    "Lung Flute ECO is a medical device company based in Tokyo, Japan, developing acoustic airway clearance technology to improve tuberculosis diagnosis and treatment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#0A1628]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
