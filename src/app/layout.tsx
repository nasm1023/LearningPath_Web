import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: any) {
  return (
    <html className={inter.className}>
      <body className="min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
