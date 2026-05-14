export function Orbs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute top-[8%] left-[12%] w-[520px] h-[520px] rounded-full blur-3xl opacity-[0.18]"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.16 285), transparent 70%)", animation: "orb-drift 24s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-[12%] right-[8%] w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.14]"
        style={{ background: "radial-gradient(circle, oklch(0.5 0.14 240), transparent 70%)", animation: "orb-drift 30s ease-in-out infinite reverse" }}
      />
    </div>
  );
}
