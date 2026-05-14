import { motion } from "framer-motion";
import { HiAcademicCap, HiCode, HiCube, HiSparkles, HiRocketLaunch } from "react-icons/hi2";
import type { IconType } from "react-icons";
import { SectionHeader } from "./Skills";

type Item = {
  year: string;
  title: string;
  org: string;
  bullets: string[];
  icon: IconType;
  type: "education" | "work" | "achievement" | "cert";
};

const items: Item[] = [
  {
    year: "2022",
    title: "Started B.Tech — AI & ML",
    org: "Uttarakhand Technical University",
    bullets: [
      "Began B.Tech in Artificial Intelligence & Machine Learning",
      "Started learning C++ and programming fundamentals",
      "Explored web development basics (HTML, CSS, JavaScript)",
    ],
    icon: HiAcademicCap,
    type: "education",
  },
  {
    year: "2023",
    title: "Backend & Problem Solving",
    org: "Django · DSA · Databases",
    bullets: [
      "Learned Django and backend development",
      "Built academic and management-based web applications",
      "Started solving DSA problems and sharpening problem-solving",
      "Worked on database integration and authentication systems",
    ],
    icon: HiCode,
    type: "work",
  },
  {
    year: "2024",
    title: "Full-Stack with MERN",
    org: "React · Node · Express · MongoDB",
    bullets: [
      "Transitioned into full-stack development with the MERN stack",
      "Built multiple real-world projects end-to-end",
      "Explored machine learning and data analysis projects",
      "Shipped AI-powered and analytics-based applications",
    ],
    icon: HiCube,
    type: "cert",
  },
  {
    year: "2025",
    title: "Scalable AI + Full-Stack Products",
    org: "Production Apps · Play Console",
    bullets: [
      "Built scalable projects: AI-powered coding platform & ride-booking app",
      "Worked with APIs, Redux Toolkit, auth and deployment workflows",
      "Started Android app deployment and Google Play Console publishing",
      "Focused on combining AI with full-stack apps for real-world use",
    ],
    icon: HiSparkles,
    type: "achievement",
  },
  {
    year: "2026 — Expected",
    title: "B.Tech Graduation & Beyond",
    org: "AI · Scalable Systems · Startups",
    bullets: [
      "Completing B.Tech in AI & ML",
      "Expanding skills in scalable systems, AI integration & startup-focused dev",
      "Preparing for professional software engineering and AI-focused roles",
    ],
    icon: HiRocketLaunch,
    type: "work",
  },
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
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="// 04 — Timeline"
          title="My Journey"
          subtitle="From first lines of C++ to scalable AI-powered full-stack products."
        />

        {/* Desktop: zig-zag horizontal timeline */}
        <div className="hidden md:block relative pt-10">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[var(--neon-purple)]/50 to-transparent" />

          <div className="grid grid-cols-5 gap-4 relative">
            {items.map((item, i) => {
              const isUp = i % 2 === 0;
              const color = colorMap[item.type];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: isUp ? -20 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Card on top */}
                  {isUp && (
                    <div className="mb-6 w-full">
                      <Card item={item} color={color} />
                      <Connector color={color} side="bottom" />
                    </div>
                  )}

                  {/* Dot on the line */}
                  <div
                    className="relative w-12 h-12 rounded-full flex items-center justify-center bg-background neon-border z-10"
                    style={{ boxShadow: `0 0 24px -4px ${color}` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color }} />
                  </div>

                  {/* Card on bottom */}
                  {!isUp && (
                    <div className="mt-6 w-full">
                      <Connector color={color} side="top" />
                      <Card item={item} color={color} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--neon-purple)]/40 to-transparent" />
          <div className="space-y-10">
            {items.map((item, i) => {
              const color = colorMap[item.type];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className="relative pl-16"
                >
                  <div
                    className="absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center bg-background neon-border z-10"
                    style={{ boxShadow: `0 0 24px -4px ${color}` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <Card item={item} color={color} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Connector({ color, side }: { color: string; side: "top" | "bottom" }) {
  return (
    <div
      className="mx-auto w-px h-6"
      style={{
        background:
          side === "bottom"
            ? `linear-gradient(to bottom, ${color}, transparent)`
            : `linear-gradient(to top, ${color}, transparent)`,
      }}
    />
  );
}

function Card({ item, color }: { item: Item; color: string }) {
  return (
    <div className="rounded-2xl p-5 glass neon-border">
      <p className="font-mono text-xs mb-2" style={{ color }}>
        {item.year}
      </p>
      <h3 className="font-bold text-base mb-1 leading-tight">{item.title}</h3>
      <p className="text-xs text-muted-foreground mb-3">{item.org}</p>
      <ul className="space-y-1.5">
        {item.bullets.map((b, idx) => (
          <li
            key={idx}
            className="text-xs text-muted-foreground/90 leading-relaxed pl-3 relative"
          >
            <span
              className="absolute left-0 top-1.5 w-1 h-1 rounded-full"
              style={{ background: color }}
            />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
