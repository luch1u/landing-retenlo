import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Retenlo | Analiza reuniones de CS y detecta riesgo en tus cuentas",
  description: "Retenlo analiza tus reuniones y correos de Customer Success y te entrega un resumen con señales claras: riesgo, fricción, oportunidades y seguimiento recomendado.",
  keywords: ["Customer Success", "churn detection", "análisis de reuniones", "señales de riesgo", "B2B SaaS", "retención de clientes"],
  authors: [{ name: "Retenlo" }],
  openGraph: {
    title: "Retenlo | Analiza reuniones de CS y detecta riesgo en tus cuentas",
    description: "Analiza tus reuniones y correos de CS. Recibe un resumen con estado de la cuenta, señales detectadas y próximos pasos sugeridos.",
    url: "https://retenlo.com",
    siteName: "Retenlo",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retenlo | Analiza reuniones de CS y detecta riesgo en tus cuentas",
    description: "Analiza tus reuniones y correos de CS. Recibe un resumen con estado de la cuenta, señales detectadas y próximos pasos.",
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
