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
          number: { value: 60, density: { enable: true } },
          color: { value: ["#22d3ee", "#a855f7", "#3b82f6"] },
          shape: { type: "circle" },
          opacity: { value: { min: 0.1, max: 0.6 } },
          size: { value: { min: 1, max: 3 } },
          links: {
            enable: true,
            distance: 140,
            color: "#a855f7",
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            grab: { distance: 160, links: { opacity: 0.4 } },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
