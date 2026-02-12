import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Retenlo | Guarda lo que los CSM saben, pero nunca registran",
  description: "Retenlo captura y organiza automáticamente el conocimiento de tus Customer Success Managers. Centraliza conversaciones, notas y contexto de clientes en un solo lugar.",
  keywords: ["CSM", "Customer Success", "CRM", "Knowledge Management", "Gmail Integration", "Customer Intelligence"],
  authors: [{ name: "Retenlo" }],
  openGraph: {
    title: "Retenlo | Guarda lo que los CSM saben, pero nunca registran",
    description: "Captura y organiza automáticamente el conocimiento de tus Customer Success Managers. Centraliza conversaciones, notas y contexto de clientes.",
    url: "https://retenlo.com",
    siteName: "Retenlo",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retenlo | Guarda lo que los CSM saben, pero nunca registran",
    description: "Captura y organiza automáticamente el conocimiento de tus Customer Success Managers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
