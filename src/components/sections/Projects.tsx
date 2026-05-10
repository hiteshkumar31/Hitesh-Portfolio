import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SectionHeader } from "./Skills";

type Project = {
  title: string;
  description: string;
  tags: string[];
  category: string;
  github: string;
  demo: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "Neural Canvas",
    description: "AI-powered design tool that turns prompts into editable vector compositions in real time.",
    tags: ["Next.js", "OpenAI", "Postgres", "Framer Motion"],
    category: "AI / ML",
    github: "https://github.com",
    demo: "https://example.com",
    accent: "from-fuchsia-500 to-violet-500",
  },
  {
    title: "OrbitCRM",
    description: "Lightweight CRM with realtime pipelines, smart segmentation, and a focus-first inbox.",
    tags: ["React", "Node", "Supabase", "Tailwind"],
    category: "Full-Stack",
    github: "https://github.com",
    demo: "https://example.com",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    title: "PulseDash",
    description: "Realtime analytics dashboard for product teams — query, chart, and alert in one place.",
    tags: ["TypeScript", "ClickHouse", "Recharts"],
    category: "Full-Stack",
    github: "https://github.com",
    demo: "https://example.com",
    accent: "from-emerald-400 to-cyan-500",
  },
  {
    title: "VoxelFolio",
    description: "Interactive 3D portfolio template with WebGL scenes and accessibility-first interactions.",
    tags: ["Three.js", "React", "GLSL"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://example.com",
    accent: "from-pink-500 to-orange-400",
  },
  {
    title: "PromptLab",
    description: "Self-hosted prompt engineering workspace with versioning, evals, and team sharing.",
    tags: ["Next.js", "OpenAI", "Drizzle"],
    category: "AI / ML",
    github: "https://github.com",
    demo: "https://example.com",
    accent: "from-violet-500 to-blue-500",
  },
  {
    title: "ShipKit UI",
    description: "Open-source component library with theming, motion presets, and DX-first APIs.",
    tags: ["React", "Tailwind", "Radix"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://example.com",
    accent: "from-cyan-400 to-fuchsia-500",
  },
];

const filters = ["All", "Frontend", "Full-Stack", "AI / ML"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="// 03 — Selected Work" title="Projects" subtitle="A curated set of products I've designed, built, or led." />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                filter === c ? "neon-border text-foreground glow-cyan" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl glass neon-border overflow-hidden flex flex-col"
    >
      <div className={`relative h-44 bg-gradient-to-br ${project.accent} overflow-hidden`}>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)",
          backgroundSize: "24px 24px",
        }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/40 backdrop-blur text-white/90">
          {project.category}
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-white/5">
          <a href={project.github} target="_blank" rel="noreferrer"
             className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-[var(--neon-cyan)] transition-colors">
            <FaGithub /> Code
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer"
             className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-[var(--neon-purple)] transition-colors">
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>
    </motion.article>
  );
}
