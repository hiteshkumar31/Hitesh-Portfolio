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
    title: "Whatsapp Chat Analyzer",
    description: "Designed and developed a web application that analyzes WhatsApp chat data, providing users with insights into their messaging habits, including word clouds, activity timelines, and sentiment analysis.",
    tags: ["Streamlit", "Pandas", "matplotlib", "wordcloud"],
    category: "AI / ML",
    github: "https://github.com/hiteshkumar31/whatsapp-chat-analyzer",
    demo: "https://whatsapp-chat-analysis-10.onrender.com/",
    accent: "/WhatsappChatAnalyser.png",
  },
  {
    title: "LeetCode Clone",
    description: "A web application that allows users to practice coding problems similar to LeetCode.",
    tags: ["React", "Node", "MongoDB", "Tailwind"],
    category: "Full-Stack",
    github: "https://github.com/hiteshkumar31/LeetCode-Project",
    demo: "https://example.com",
    accent: "/Leetcode.png",
  },
  {
    title: "Social Media Dashboard",
    description: "A real-time social media project which mainly focuses on CRUD operations and data visualization using Recharts. It allows users to manage their social media accounts, schedule posts, and analyze engagement metrics through interactive charts.",
    tags: ["Django", "Pillow", "Python"],
    category: "Full-Stack",
    github: "https://github.com/hiteshkumar31/Social-Media",
    demo: "https://social-media-3-49m7.onrender.com/",
    accent: "/SocialMedia.png",
  },
  {
    title: "Swiggy Clone",
    description: "A web application that mimics the functionality of Swiggy, allowing users to browse restaurants, view menus, and place orders.",
    tags: ["React", "Redux", "Axios", "Tailwind"],
    category: "Frontend",
    github: "https://github.com/hiteshkumar31/Swiggy-Clone",
    demo: "https://swiggy-clone-me2u.vercel.app/",
    accent: "/Swiggy.png",
  },
  {
    title: "Founder Mental Coach",
    description: "An AI-powered mental wellness application designed specifically for startup founders, offering personalized coaching, stress management techniques, and mindfulness exercises to help navigate the unique challenges of entrepreneurship.",
    tags: ["Streamlit", "Python", "MongoDB"],
    category: "AI / ML",
    github: "https://github.com/hiteshkumar31/Founder-Mental-Coach",
    demo: "https://example.com",
    accent: "/FounderMentalCoach.png",
  },
  {
    title: "Student Study Portal",
    description: "A web application designed to help students manage their study schedules, track progress, and collaborate with peers.",
    tags: ["Django", "Python", "SQLite"],
    category: "Full-Stack",
    github: "https://github.com/hiteshkumar31/Student-Study-Portal",
    demo: "https://example.com",
    accent: "/StudentStudyPortal.png",
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
<div className="relative h-44 overflow-hidden">
  {project.accent.startsWith("/") ? (
    <img
      src={project.accent}
      alt={project.title}
      className="w-full h-full object-cover"
    />
  ) : (
    <div className={`w-full h-full bg-gradient-to-br ${project.accent}`} />
  )}

  <div
    className="absolute inset-0 opacity-30"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)",
      backgroundSize: "24px 24px",
    }}
  />

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
