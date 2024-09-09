import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header, Sidebar } from "@/components/Layout";
import Layout from "@/components/Layout/Layout";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Estoque de Produtos",
  description: "Projeto desenvolvido para estudos de Front-End",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Layout>
          <div className="w-full bg-blue-500">{children}</div>
        </Layout>
        <Toaster />
      </body>
    </html>
  );
}
