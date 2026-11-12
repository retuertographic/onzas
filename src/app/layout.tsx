import type { Metadata } from "next";
import "./globals.css";

// Tipografía corporativa (manual de Ocho Onzas): Helvetica Neue Light; se define en globals.css.

export const metadata: Metadata = {
  title: "Ocho Onzas · Tu aliado en la mesa",
  description:
    "Carnicería, congelados, conservas y bebidas en Los Realejos, y reparto a empresas por el norte de Tenerife. Calidad de mercado, precio de barrio y trato de amigos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
