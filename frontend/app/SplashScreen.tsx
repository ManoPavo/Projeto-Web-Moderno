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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(circle,#202020_0%,#080808_70%)] transition-opacity"
      style={{
        opacity: estaDesaparecendo ? 0 : 1,
        transitionDuration: `${TEMPO_TRANSICAO}ms`,
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="crest-mark flex h-32 w-32 items-center justify-center">
          <Image
            src={pavis}
            alt="Símbolo de Pedro Pavão"
            priority
            width={96}
            height={96}
            className="animate-pulse [image-rendering:pixelated]"
          />
        </div>
        <p className="medieval-title text-sm tracking-[0.2em] text-white/80">
          Pedro Pavão
        </p>
      </div>
    </div>
  );
}
