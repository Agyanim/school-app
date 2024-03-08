import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Providers } from "@/providers/Providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { UploadProfileImageContextProvider } from "@/context/UploadImageContext";

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
        <UploadProfileImageContextProvider>
          <Providers>
            {children}
            <Toaster richColors position="top-right" />
          </Providers>
        </UploadProfileImageContextProvider>
      </body>
    </html>
  );
}
