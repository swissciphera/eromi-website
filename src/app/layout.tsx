import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eromi.ch"),
  title: "Eromi Rénovations Sàrl | Rénovation & Carrelage haut de gamme à Genève",
  description:
    "Depuis plus de 30 ans, Eromi Rénovations Sàrl transforme les espaces de vie à Genève. Maçonnerie, carrelage, démolition et peinture. L'excellence au sol, l'esthétique à chaque détail.",
  keywords: [
    "rénovation Genève",
    "carrelage Genève",
    "maçonnerie",
    "rénovation haut de gamme",
    "Eromi",
  ],
  openGraph: {
    title: "Eromi Rénovations Sàrl, Rénovation & Carrelage à Genève",
    description:
      "L'excellence au sol, l'esthétique à chaque détail. Plus de 1000 projets réalisés à Genève.",
    locale: "fr_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${sans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
