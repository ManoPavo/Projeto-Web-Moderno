"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import pavis from "./elemt/Pavis.png";

const SHOW_MS = 1000; // tempo com a splash visível
const FADE_MS = 600; // duração do fade-out

export default function SplashScreen() {
 
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
  
    const t1 = setTimeout(() => setFading(true), SHOW_MS);
    const t2 = setTimeout(() => setGone(true), SHOW_MS + FADE_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

 
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(circle,#1a1236_0%,#080812_70%)] transition-opacity"
      style={{ opacity: fading ? 0 : 1, transitionDuration: `${FADE_MS}ms` }}
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
