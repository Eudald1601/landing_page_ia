import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TasklessAI — Consultoria IA a Lleida",
  description:
    "Consultoria d'IA a Lleida per a freelancers i petites empreses. Automatitzacions de tasques repetitives, resums d'informes i assistents interns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ca"
      className={`${fraunces.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
