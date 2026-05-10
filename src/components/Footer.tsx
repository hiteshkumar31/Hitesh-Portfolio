export function Footer() {
  return (
    <footer className="relative py-10 px-6 border-t border-white/5 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Your Name — Crafted with <span className="text-[var(--neon-pink)]">♥</span>
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Designed & built from scratch
        </p>
      </div>
    </footer>
  );
}
