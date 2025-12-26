import { TerminalHeader } from "@/components/terminal-header"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Scanline effect overlay */}
      <div className="scanline-effect fixed inset-0 pointer-events-none z-50" />

      {/* Grid pattern background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(var(--terminal-green) 1px, transparent 1px),
                           linear-gradient(90deg, var(--terminal-green) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 space-y-8">
        <TerminalHeader />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  )
}
