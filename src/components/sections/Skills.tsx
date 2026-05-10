import { motion } from "framer-motion";
import {
  SiReact, SiTypescript, SiTailwindcss, SiNextdotjs,
  SiNodedotjs, SiPython, SiPostgresql, SiMongodb,
  SiTensorflow, SiOpenai, SiDocker, SiGit,
  SiFigma, SiVercel,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = {
  name: string;
  category: string;
  icon: IconType;
  color: string;
  description: string;
};

const skills: Skill[] = [
  { name: "React", category: "Frontend", icon: SiReact, color: "#22d3ee", description: "Component-driven UIs with hooks & suspense." },
  { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "#3b82f6", description: "Type-safe code at scale." },
  { name: "Tailwind", category: "Frontend", icon: SiTailwindcss, color: "#06b6d4", description: "Design-system-first styling." },
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs, color: "#ffffff", description: "Production React framework." },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#22c55e", description: "Scalable server runtimes." },
  { name: "Python", category: "Backend", icon: SiPython, color: "#facc15", description: "APIs, scripts & automation." },
  { name: "PostgreSQL", category: "Databases", icon: SiPostgresql, color: "#60a5fa", description: "Relational data done right." },
  { name: "MongoDB", category: "Databases", icon: SiMongodb, color: "#22c55e", description: "Flexible document stores." },
  { name: "TensorFlow", category: "AI / ML", icon: SiTensorflow, color: "#fb923c", description: "Deep learning at scale." },
  { name: "OpenAI", category: "AI / ML", icon: SiOpenai, color: "#a78bfa", description: "LLM-powered product features." },
  { name: "Docker", category: "Tools", icon: SiDocker, color: "#38bdf8", description: "Reproducible containers." },
  { name: "Git", category: "Tools", icon: SiGit, color: "#f97316", description: "Disciplined version control." },
  { name: "Figma", category: "Tools", icon: SiFigma, color: "#f472b6", description: "Design collaboration." },
  { name: "Vercel", category: "Tools", icon: SiVercel, color: "#ffffff", description: "Edge-ready deployments." },
];

const categories = ["All", "Frontend", "Backend", "AI / ML", "Databases", "Tools"];

import { useState } from "react";

export function Skills() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? skills : skills.filter((s) => s.category === filter);

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="// 02 — Toolkit" title="Skills & Stack" subtitle="The technologies I reach for to ship reliable, delightful products." />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                filter === c
                  ? "neon-border text-foreground glow-purple"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((s, i) => (
            <motion.div
              key={s.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative rounded-2xl p-6 glass neon-border overflow-hidden"
            >
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity"
                style={{ background: s.color }}
              />
              <s.icon className="text-4xl mb-4 transition-transform group-hover:scale-110" style={{ color: s.color }} />
              <h3 className="font-bold text-lg mb-1">{s.name}</h3>
              <p className="text-xs font-mono text-[var(--neon-cyan)] mb-2">{s.category}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <p className="font-mono text-xs sm:text-sm text-[var(--neon-cyan)] mb-3">{eyebrow}</p>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="max-w-xl mx-auto text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
