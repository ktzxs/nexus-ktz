import type { Metadata } from "next";
import { Unbounded } from 'next/font/google';
import './globals.css';
import NavBar from "@/components/NavBar/NavBar";

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  weight: '400',
  style: 'normal',
})

export const metadata: Metadata = {
  title: "nexus-ktz",
  description: "Loja de roupas masculinas e femininas focada no streetwear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${unbounded.variable}`}
      >
        <NavBar />
        {children}  
      </body>
    </html>
  );
}
