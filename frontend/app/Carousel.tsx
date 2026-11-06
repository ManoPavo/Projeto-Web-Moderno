"use client";

import useEmblaCarousel from "embla-carousel-react";
import {
  Children,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export default function Carrossel({ children }: { children: ReactNode }) {
  const [referenciaCarrossel, carrossel] = useEmblaCarousel({
    align: "start",
    loop: true,
  });
  const [slideSelecionado, setSlideSelecionado] = useState(0);
  const itensCarrossel = Children.toArray(children);
  const [slideAnimado, setSlideAnimado] = useState<number | null>(null);

  useEffect(() => {
    if (!carrossel) return;

    const atualizarSlideSelecionado = () => {
      setSlideSelecionado(carrossel.selectedScrollSnap());
    };

    carrossel.on("select", atualizarSlideSelecionado);
    carrossel.on("reInit", atualizarSlideSelecionado);
    atualizarSlideSelecionado();

    return () => {
      carrossel.off("select", atualizarSlideSelecionado);
      carrossel.off("reInit", atualizarSlideSelecionado);
    };
  }, [carrossel]);

  const irParaAnterior = useCallback(() => carrossel?.scrollPrev(), [carrossel]);
  const irParaProximo = useCallback(() => carrossel?.scrollNext(), [carrossel]);

  useEffect(() => {
    if (!carrossel) return;

    let temporizadorAnimacao: ReturnType<typeof setTimeout>;
    const intervalo = setInterval(() => {
      const slidesVisiveis = carrossel.slidesInView();

      if (slidesVisiveis.length === 0) return;

      const indiceAleatorio = Math.floor(Math.random() * slidesVisiveis.length);
      setSlideAnimado(slidesVisiveis[indiceAleatorio]);
      temporizadorAnimacao = setTimeout(() => setSlideAnimado(null), 650);
    }, 3000);

    return () => {
      clearInterval(intervalo);
      clearTimeout(temporizadorAnimacao);
    };
  }, [carrossel]);

  return (
    <div className="w-full max-w-5xl">
      <div className="relative">
        <div className="overflow-hidden pt-8" ref={referenciaCarrossel}>
          <div className="flex">
            {itensCarrossel.map((slide, indice) => (
              <div
                key={indice}
                className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_50%]"
              >
                <div
                  className={`h-full ${indice === slideAnimado ? "animate-pulo-card" : ""}`}
                >
                  {slide}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={irParaAnterior}
          aria-label="Anterior"
          className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-white hover:bg-black"
        >
          ‹
        </button>
        <button
          onClick={irParaProximo}
          aria-label="Próximo"
          className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-white hover:bg-black"
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {itensCarrossel.map((_, indice) => (
          <button
            key={indice}
            onClick={() => carrossel?.scrollTo(indice)}
            aria-label={`Ir para o slide ${indice + 1}`}
            className={`h-2 w-2 rounded-full ${indice === slideSelecionado ? "bg-white" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
