import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./Provider";
import "react-photo-view/dist/react-photo-view.css";
import { Toaster } from "@/components/ui/sonner";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yangkoo | Travel to Bhutan",
  description: "Discover the best hotels in Bhutan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
