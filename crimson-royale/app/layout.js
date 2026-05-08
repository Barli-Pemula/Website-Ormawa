import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Crimson Royale — Ormawa",
  description:
    "Landing page resmi Crimson Royale — organisasi mahasiswa dengan semangat keberanian dan kehormatan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${cinzel.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
