import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Portfólio de ManoPavo",
  description: "Projetos e estatísticas do GitHub de ManoPavo.",
};

export default function LayoutRaiz({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fonteSemSerifa.variable} ${fonteMonoespacada.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TelaInicializacao />
        <FundoEspacialPixelado />
        {children}
      </body>
    </html>
  );
}
