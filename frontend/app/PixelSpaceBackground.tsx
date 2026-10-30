
"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let animationId = 0;

    const mouse = { x: -999, y: -999 };

    function createParticle(x: number, y: number): Particle {
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius: 1 + Math.random() * 1.8,
        phase: Math.random() * Math.PI * 2,
      };
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = Array.from({ length: 65 }, () =>
        createParticle(
          Math.random() * width,
          Math.random() * height
        )
      );
    }

    function onMouseMove(event: MouseEvent) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    }

    function onMouseLeave() {
      mouse.x = -999;
      mouse.y = -999;
    }

    function onClick(event: MouseEvent) {
      for (let i = 0; i < 4; i++) {
        const particle = createParticle(
          event.clientX,
          event.clientY
        );

        particle.vx = (Math.random() - 0.5) * 1.5;
        particle.vy = (Math.random() - 0.5) * 1.5;

        particles.push(particle);
      }
    }

    function animate(time: number) {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Interação com o mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distance = Math.hypot(dx, dy);

        if (distance < 95 && distance > 1) {
          p.x += (dx / distance) * 1.5;
          p.y += (dy / distance) * 1.5;
        }

        // Linhas entre partículas
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];

          const dist = Math.hypot(
            p.x - q.x,
            p.y - q.y
          );

          if (dist < 110) {
            ctx.strokeStyle = `rgba(139,92,246,${
              0.22 * (1 - dist / 110)
            })`;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        // Efeito de piscar
        const opacity =
          0.25 +
          0.7 *
            (0.5 +
              0.5 * Math.sin(time * 0.0015 + p.phase));

        ctx.fillStyle = `rgba(183,156,255,${opacity})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    }

    resize();
    animationId = requestAnimationFrame(animate);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseLeave);
    window.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseLeave);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-screen w-screen bg-[#080812]"
      aria-hidden="true"
    />
  );
}
