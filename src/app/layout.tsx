import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider  } from "react-query";

const inter = Inter({ subsets: ["latin"] });
const client=new QueryClient
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
        <QueryClientProvider client={client}>
        {children}
        </QueryClientProvider>
        <Toaster richColors position="top-right"/>
      </body>
    </html>
  );
}
