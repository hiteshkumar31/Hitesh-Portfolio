import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Orbs } from "@/components/Orbs";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Name — Full-Stack Developer & AI Engineer" },
      { name: "description", content: "Premium portfolio of a full-stack developer building AI-powered, production-grade web experiences." },
      { property: "og:title", content: "Your Name — Full-Stack Developer & AI Engineer" },
      { property: "og:description", content: "Premium portfolio. React, TypeScript, AI/ML, and beautiful interactions." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Orbs />
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
