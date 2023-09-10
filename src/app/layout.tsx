import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AxiomWebVitals } from "next-axiom";
import { ClerkProvider } from "@clerk/nextjs";
import { NavBar } from "@/components/layouts/Navbar";
import { Footer } from "@/components/molecules/Footer";
import { Toaster } from "../components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "E-commerce  App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <AxiomWebVitals />
        <body className={inter.className}>
          <NavBar />
          <main className="container">
            <div className="mt-20 mb-20">{children}</div>
            <Toaster />
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
