import type { Metadata } from "next";
import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import FundoEspacialPixelado from "./PixelSpaceBackground";
import TelaInicializacao from "./SplashScreen";

const fonteSemSerifa = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fonteMonoespacada = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fontePixel = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Pavão | Portfólio",
  description:
    "Portfólio profissional de Pedro Pavão, estudante de Técnico em Programação de Jogos.",
};

export default function LayoutRaiz({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fonteSemSerifa.variable} ${fonteMonoespacada.variable} ${fontePixel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TelaInicializacao />
        <FundoEspacialPixelado />
        {children}
      </body>
    </html>
  );
}
