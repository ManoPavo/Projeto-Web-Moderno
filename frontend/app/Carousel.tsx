"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Children, useCallback, useEffect, useState, type ReactNode } from "react";

export default function Carousel({ children }: { children: ReactNode }) {

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const [selected, setSelected] = useState(0);
  const slides = Children.toArray(children);

  
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Passo 4: a cada 1s, pergunta ao Embla quais slides estão visíveis (slidesInView)
  // e sorteia um deles para dar o pulinho.
  const [bouncing, setBouncing] = useState<number | null>(null);
  useEffect(() => {
    if (!emblaApi) return;
    let clear: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      const visible = emblaApi.slidesInView();
      if (!visible.length) return;
      setBouncing(visible[Math.floor(Math.random() * visible.length)]);
      //Pulinhos do card sorteado
      clear = setTimeout(() => setBouncing(null), 650);
    }, 3000);
    return () => {
      clearInterval(id);
      clearTimeout(clear);
    };
  }, [emblaApi]);

  return (
    <div className="w-full max-w-5xl">
      <div className="relative">
        {/* pt-8: espaço para o card "pular" sem ser cortado pelo overflow-hidden */}
        <div className="overflow-hidden pt-8" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, i) => (
              
              <div key={i} className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_50%]">
                <div className={`h-full ${i === bouncing ? "animate-card-bounce" : ""}`}>{slide}</div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-white hover:bg-black"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Próximo"
          className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-white hover:bg-black"
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Ir para o slide ${i + 1}`}
            className={`h-2 w-2 rounded-full ${i === selected ? "bg-white" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
