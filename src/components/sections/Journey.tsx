import { motion } from "framer-motion";
import { HiAcademicCap, HiBriefcase, HiSparkles, HiBadgeCheck } from "react-icons/hi";
import type { IconType } from "react-icons";
import { SectionHeader } from "./Skills";

type Item = {
  year: string;
  title: string;
  org: string;
  description: string;
  icon: IconType;
  type: "education" | "work" | "achievement" | "cert";
};

const items: Item[] = [
  { year: "2024 — Now", title: "Senior Full-Stack Engineer", org: "Freelance", description: "Building AI-powered SaaS products and design systems for early-stage startups.", icon: HiBriefcase, type: "work" },
  { year: "2023", title: "AWS Certified Solutions Architect", org: "Amazon Web Services", description: "Validated cloud architecture skills across compute, storage, and networking.", icon: HiBadgeCheck, type: "cert" },
  { year: "2022 — 2024", title: "Software Engineer II", org: "TechCorp", description: "Led migration to a micro-frontend architecture, cutting bundle size by 38%.", icon: HiBriefcase, type: "work" },
  { year: "2022", title: "Hackathon Winner — AI Track", org: "DevConf", description: "Built a real-time meeting summarizer; placed 1st of 220 teams.", icon: HiSparkles, type: "achievement" },
  { year: "2020 — 2022", title: "B.Sc. Computer Science", org: "University", description: "Graduated with honors. Specialized in distributed systems and ML.", icon: HiAcademicCap, type: "education" },
];

const colorMap = {
  work: "var(--neon-purple)",
  education: "var(--neon-cyan)",
  achievement: "var(--neon-pink)",
  cert: "var(--neon-blue)",
};

export function Journey() {
  return (
    <section id="journey" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="// 04 — Timeline" title="My Journey" subtitle="Education, work, and the milestones that shaped how I build." />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--neon-purple)]/40 to-transparent" />

          <div className="space-y-12">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="hidden md:block md:w-1/2" />

                <div
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-background neon-border z-10"
                  style={{ boxShadow: `0 0 24px -4px ${colorMap[item.type]}` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: colorMap[item.type] }} />
                </div>

                <div className="ml-20 md:ml-0 md:w-1/2 md:px-8">
                  <div className="rounded-2xl p-6 glass neon-border">
                    <p className="font-mono text-xs mb-2" style={{ color: colorMap[item.type] }}>{item.year}</p>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.org}</p>
                    <p className="text-sm text-muted-foreground/90 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
