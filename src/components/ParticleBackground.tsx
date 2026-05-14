import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function ParticleBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10 pointer-events-none"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: { value: 70, density: { enable: true } },
          color: { value: ["#7c3aed", "#6366f1", "#0ea5e9"] },
          shape: { type: "circle" },
          opacity: { value: { min: 0.2, max: 0.5 } },
          size: { value: { min: 1, max: 2.5 } },
          links: {
            enable: true,
            distance: 150,
            color: "#1e1b4b",
            opacity: 0.5,
            width: 1.2,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            grab: { distance: 180, links: { opacity: 0.95, color: "#0f172a" } },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
