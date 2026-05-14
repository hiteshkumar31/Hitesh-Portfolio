import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SectionHeader } from "./Skills";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Valid email required";
    if (form.message.trim().length < 10) return "Message must be at least 10 characters";
    return "";
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }
    setError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setError("Couldn't send your message. Please try again.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader eyebrow="// 05 — Contact" title="Let's build something" subtitle="Have a project in mind or just want to say hi? My inbox is open." />

        <div className="grid md:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-4"
          >
            <div className="rounded-2xl glass neon-border p-6">
              <h3 className="font-bold mb-4 text-gradient">Get in touch</h3>
              <div className="flex items-center gap-3 mb-3 text-sm">
                <HiMail className="text-[var(--neon-cyan)] text-lg" />
                <span className="text-muted-foreground">khitesh07ml@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <HiLocationMarker className="text-[var(--neon-purple)] text-lg" />
                <span className="text-muted-foreground">Remote · Worldwide</span>
              </div>
            </div>

            <div className="rounded-2xl glass neon-border p-6">
              <p className="text-xs font-mono text-muted-foreground mb-3">// follow</p>
              <div className="flex gap-2">
                {[
                  { Icon: FaGithub, href: "https://github.com/hiteshkumar31" },
                  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/hitesh-kumar-7o7o" },
                  { Icon: SiLeetcode, href: "https://leetcode.com/u/HiteshDSA/" },
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg flex items-center justify-center glass hover:glow-purple hover:text-[var(--neon-purple)] transition-all">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="md:col-span-3 rounded-2xl glass neon-border p-6 space-y-4"
          >
            <Field label="Name">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--neon-cyan)] focus:glow-cyan transition-all"
                placeholder="Ada Lovelace"
                maxLength={100}
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--neon-cyan)] focus:glow-cyan transition-all"
                placeholder="ada@example.com"
                maxLength={255}
              />
            </Field>
            <Field label="Message">
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--neon-cyan)] focus:glow-cyan transition-all min-h-32 resize-y"
                placeholder="Tell me about your project..."
                maxLength={2000}
              />
            </Field>

            {error && <p className="text-xs text-destructive">{error}</p>}
            {status === "sent" && <p className="text-xs text-[var(--neon-cyan)]">✓ Message sent — I'll be in touch soon.</p>}

            <button
              type="submit"
              disabled={status === "sending"}
              className="relative w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium overflow-hidden disabled:opacity-60"
              style={{ background: "var(--gradient-hero)" }}
            >
              {status === "sending" ? (
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Sending...
                </span>
              ) : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-mono text-muted-foreground mb-1.5">{label}</span>
      {children}
    </label>
  );
}
