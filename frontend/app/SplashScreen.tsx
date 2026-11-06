"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import pavis from "./elemt/Pavis.png";

const TEMPO_VISIVEL = 1000;
const TEMPO_TRANSICAO = 600;

export default function TelaInicializacao() {
  const [estaDesaparecendo, setEstaDesaparecendo] = useState(false);
  const [estaOculta, setEstaOculta] = useState(false);

  useEffect(() => {
    const temporizadorTransicao = setTimeout(
      () => setEstaDesaparecendo(true),
      TEMPO_VISIVEL,
    );
    const temporizadorOcultar = setTimeout(
      () => setEstaOculta(true),
      TEMPO_VISIVEL + TEMPO_TRANSICAO,
    );

    return () => {
      clearTimeout(temporizadorTransicao);
      clearTimeout(temporizadorOcultar);
    };
  }, []);

  if (estaOculta) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(circle,#1a1236_0%,#080812_70%)] transition-opacity"
      style={{
        opacity: estaDesaparecendo ? 0 : 1,
        transitionDuration: `${TEMPO_TRANSICAO}ms`,
      }}
    >
      <Image
        src={pavis}
        alt="Pavis"
        priority
        width={200}
        height={200}
        className="animate-pulse [image-rendering:pixelated]"
      />
    </div>
  );
}
