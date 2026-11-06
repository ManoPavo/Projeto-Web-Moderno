"use client";

import { ParticlesProvider, Particles } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const opcoesParticulas: ISourceOptions = {
  fullScreen: { enable: false },
  particles: {
    color: { value: ["#b79cff", "#8b5cf6", "#ffffff"] },
    links: {
      enable: true,
      distance: 110,
      color: "#8b5cf6",
      opacity: 0.22,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      outModes: { default: "bounce" },
    },
    number: { value: 65 },
    opacity: {
      value: { min: 0.25, max: 0.95 },
      animation: { enable: true, speed: 1.5, sync: false },
    },
    size: { value: { min: 1, max: 2.8 } },
  },
  interactivity: {
    detectsOn: "window",
    events: { onHover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 95, duration: 0.4 } },
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
            "radial-gradient(circle at center, #16102d 0%, #080812 70%)",
        }}
      />
    </ParticlesProvider>
  );
}
