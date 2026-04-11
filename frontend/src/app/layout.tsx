import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const mono = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "João Rei dos Bugs | Painel SaaS",
  description: "Plataforma avançada de gerenciamento de dados e estatísticas.",
  icons: {
    icon: "/favicon.ico",
  },
};

import React from "react";
import { DashboardProvider } from "../components/layout/DashboardContext";
import AnnouncementPopup  from "../components/dashboard/AnnouncementPopup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${mono.variable} dark`}>
      <body className="font-sans text-slate-200 antialiased overflow-hidden">
        <DashboardProvider>
          <div id="root" className="h-full">
            {children}
          </div>
          <AnnouncementPopup />
        </DashboardProvider>
      </body>
    </html>
  );
}
