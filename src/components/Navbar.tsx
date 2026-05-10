import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-[var(--neon-cyan)] glow-cyan" />
          <span className="text-gradient font-bold tracking-tight">{"<dev/>"}</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute inset-x-4 bottom-1 h-px bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-purple)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium neon-border hover:glow-purple transition-all"
        >
          Hire me
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-2xl text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-strong mx-6 mt-3 rounded-xl p-4"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
