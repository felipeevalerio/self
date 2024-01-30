import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

const inter = Poppins({ subsets: ["latin"], weight: ['400', '600'] });

export const metadata: Metadata = {
  title: "self",
  description: "Your journey to greatness starts here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
      <div className="flex min-h-screen flex-col">
        <Sidebar />
        {children}
      </div>
    </body>
    </html>
  );
}
