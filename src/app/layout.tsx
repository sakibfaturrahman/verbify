import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google"; // Import font Google
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Konfigurasi Montserrat untuk Heading
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat", // Nama variabel CSS
});

// Konfigurasi Poppins untuk Body
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins", // Nama variabel CSS
});

export const metadata: Metadata = {
  title: "Verbify - Boost Your English Skills",
  description: "Learn English like a pro with expert guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
