"use client";

import { ParticlesProvider, Particles } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const opcoesParticulas: ISourceOptions = {
  fullScreen: { enable: false },
  particles: {
    color: { value: ["#ffffff", "#d4d4d4", "#737373"] },
    move: {
      enable: true,
      speed: 0.35,
      direction: "top",
      outModes: { default: "out" },
    },
    number: { value: 36 },
    opacity: {
      value: { min: 0.12, max: 0.55 },
      animation: { enable: true, speed: 0.8, sync: false },
    },
    size: { value: { min: 1, max: 2.2 } },
  },
  detectRetina: true,
};

export default function FundoEspacialPixelado() {
  return (
    <ParticlesProvider init={loadSlim}>
      <Particles
        id="space-background"
        options={opcoesParticulas}
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          width: "100vw",
          height: "100vh",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.08) 0%, transparent 58%)",
        }}
      />
    </ParticlesProvider>
  );
}
