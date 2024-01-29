import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className=" bg-zinc-900">
        <Sidebar />
        <div className=" ml-80 relative h-screen">
          <Header />
          <div className=" py-24 max-w-4xl px-8 mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
