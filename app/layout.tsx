import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Providers from "@/Components/Providers";
import Header from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CCL",
  description: "Cycle Renting Website",
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
          <Header />
          {children}
          <ToastContainer/>
        </Providers>
      </body>
    </html>
  );
}
