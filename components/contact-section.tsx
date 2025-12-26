import { Mail, Github, Linkedin, FileText } from "lucide-react"

const contactMethods = [
  { icon: Mail, label: "Email", value: "phoeurnkimhor@gmail.com", href: "mailto:phoeurnkimhor@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/phoeurnkimhor", href: "https://github.com/phoeurnkimhor" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/kimhor-phoeurn", href: "https://www.linkedin.com/in/kimhor-phoeurn" },
  { icon: FileText, label: "Resume", value: "Download CV", href: "#" },
]

export function ContactSection() {
  return (
    <div className="border border-primary/50 rounded-sm p-6 bg-card/30 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4 text-accent">
        <span>{">"}</span>
        <span className="text-lg font-semibold">CONTACT.SH</span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <span className="text-primary">$</span>
          <span className="text-sm">./init_contact.sh</span>
        </div>

        {contactMethods.map((method) => {
          const Icon = method.icon
          return (
            <a
              key={method.label}
              href={method.href}
              className="flex items-center gap-3 p-3 border border-border rounded-sm hover:border-primary/50 hover:bg-secondary/50 transition-all group"
            >
              <Icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
              <div className="flex-1">
                <div className="text-xs text-muted-foreground">{method.label}</div>
                <div className="text-foreground group-hover:text-primary transition-colors">{method.value}</div>
              </div>
              <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          )
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <span className="text-primary">$</span>
          <span>echo &quot;Ready to collaborate on data-driven solutions&quot;</span>
        </div>
        <p className="text-xs text-primary mt-2">{">"} Connection established. Awaiting your message...</p>
      </div>
    </div>
  )
}
