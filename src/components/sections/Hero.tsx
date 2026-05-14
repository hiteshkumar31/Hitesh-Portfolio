import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiArrowDown, HiDownload } from "react-icons/hi";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-5xl w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-xs sm:text-sm text-[var(--neon-cyan)] mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)] animate-pulse" />
          Available for opportunities
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          <span className="block">Hello, I'm</span>
          <span className="block text-gradient">Hitesh Kumar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg sm:text-2xl text-muted-foreground font-mono h-8 mb-8"
        >
          <span className="text-foreground">{">"} </span>
          <Typewriter
            words={[
              "Full-Stack Developer",
              "AI / ML Engineer",
              "Crafting digital experiences",
              "Building the future, one commit at a time",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1800}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground mb-10"
        >
          I design and build production-grade web apps with a focus on performance,
          accessibility, and beautiful interactions. Currently shipping with React,
          TypeScript, and a love for thoughtful UX.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="/resume.pdf"
            download
            className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-full font-medium overflow-hidden"
            style={{ background: "var(--gradient-hero)" }}
          >
            <HiDownload className="text-lg" />
            Download Resume
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-medium neon-border hover:glow-cyan transition-all"
          >
            View Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-3"
        >
          {[
            { icon: FaGithub, href: "https://github.com/hiteshkumar31" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/hitesh-kumar-7o7o" },
            { icon: SiLeetcode, href: "https://leetcode.com/u/HiteshDSA/" },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-lg text-muted-foreground hover:text-[var(--neon-cyan)] hover:glow-cyan transition-all hover:scale-110"
            >
              <Icon />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.4, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-label="Scroll down"
      >
        <HiArrowDown className="text-2xl" />
      </motion.a>
    </section>
  );
}
