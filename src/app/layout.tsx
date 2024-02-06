import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Providers } from "@/providers/Providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NavigationBar } from "@/components/client";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "School Management App",
  description: "School management app created by Gideon Okai Boateng",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavigationBar></NavigationBar>
          {children}
          <Toaster richColors position="top-right" />
          <ReactQueryDevtools/>
        </Providers>
      </body>
    </html>
  );
}
