// ===== app/layout.tsx =====
// Layout racine – SEO global, navigation et footer

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Amadou Faye Diagne – Data Analyst | DBA | Cloud Engineer",
    template: "%s | Amadou Faye Diagne",
  },
  description:
    "Portfolio professionnel d'Amadou Faye Diagne, spécialiste en Data Analytics, Administration de Bases de Données et Cloud Engineering (AWS). Projets en Python, PostgreSQL, YOLOv8, Tableau et Power BI.",
  keywords: [
    "Data Analyst",
    "DBA",
    "Cloud Engineer",
    "AWS",
    "PostgreSQL",
    "Python",
    "Machine Learning",
    "YOLOv8",
    "Power BI",
    "Tableau",
    "Dakar",
    "Sénégal",
    "Amadou Faye Diagne",
  ],
  authors: [{ name: "Amadou Faye Diagne", url: "https://tinyurl.ee/RJeIW" }],
  creator: "Amadou Faye Diagne",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://amadou-faye-diagne.vercel.app",
    title: "Amadou Faye Diagne – Data Analyst | DBA | Cloud Engineer",
    description:
      "Portfolio professionnel spécialisé en Data Engineering, Cloud Computing et Intelligence Artificielle.",
    siteName: "Amadou Faye Diagne Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amadou Faye Diagne – Data Analyst | DBA | Cloud Engineer",
    description: "Portfolio spécialisé Data Engineering, Cloud AWS, Machine Learning.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="bg-gray-950 text-gray-100 antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
