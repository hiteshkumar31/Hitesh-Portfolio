export function Orbs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute top-[10%] left-[15%] w-[420px] h-[420px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.24 300), transparent 70%)", animation: "orb-drift 18s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.18 200), transparent 70%)", animation: "orb-drift 22s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute top-[50%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(ellipse, oklch(0.7 0.22 260), transparent 70%)", animation: "orb-drift 26s ease-in-out infinite" }}
      />
    </div>
  );
}
