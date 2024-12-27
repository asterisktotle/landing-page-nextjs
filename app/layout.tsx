import { Metadata } from "next";
import './globals.css';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title:'Travel',
  description:'TRAVEL UI/UX App for Camper'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="relative overflow-hidden">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

