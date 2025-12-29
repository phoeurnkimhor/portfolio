import { ExternalLink } from "lucide-react"
import { DiGithubBadge } from "react-icons/di";
import Image from "next/image"

const projects = [
  {
    title: "ETL Superstore Sales Analysis",
    description:
      "Designed and implemented ETL pipeline using Pentaho to process and transform retail sales data, with interactive Power BI dashboards for sales performance insights.",
    tech: ["Pentaho", "Power BI", "ETL", "SQL"],
    status: "Completed",
    link: "https://github.com/phoeurnkimhor/etl-superstore",
    image: '/superstore-cover.png',
  },
  {
    title: "Employee Attrition Analysis",
    description:
      "Analyzed employee attrition patterns and trends using Power BI, identifying key factors contributing to turnover and providing actionable insights for HR.",
    tech: ["Power BI", "Data Analysis", "HR Analytics"],
    status: "Completed",
    link: "https://github.com/phoeurnkimhor/employee-attrition-analysis-pbi",
    image: '/employee-cover.png',
  },
  {
    title: "Khmer Text Style Transfer (normal-to-royal)",
    description:
      "Training an LSTM neural network to translate standard Khmer text into formal royal Khmer style, preserving linguistic nuances and cultural context.",
    tech: ["Python", "LSTM", "NLP", "Seq2Seq"],
    status: "Active",
    link: "https://github.com/phoeurnkimhor/khmer-style-transfer",
    image: 'https://i.ytimg.com/vi/vbjnM6HLk2E/sddefault.jpg',
  },
  {
    title: "Khmer Text Summarization",
    description:
      "Fine-tuning pre-trained transformer models for automatic summarization of Khmer language text, addressing the unique challenges of low-resource languages.",
    tech: ["Python", "Transformers", "NLP", "Fine-tuning"],
    status: "Active",
    link: "https://github.com/phoeurnkimhor/khmer-text-summarization",
    image: 'https://media.sbbic.org/1/download_all_khmer_fonts_a96b6a71d7.jpg',
  },
  {
    title: "Cambodia Inflation Rate Forecasting",
    description:
      "Time series analysis and forecasting of Cambodia's inflation rate using multiple statistical models including ARMA, ARIMA, AR, and MA for economic prediction.",
    tech: ["Python", "ARIMA", "Time Series", "Statistical Modeling"],
    status: "Active",
    link: "https://github.com/phoeurnkimhor/cambodia-inflation-rate-forecasting",
    image: '',
  },

]

export function ProjectsSection() {
  return (
    <div className="border border-primary/50 rounded-sm p-6 bg-card/30 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4 text-accent">
        <span>{">"}</span>
        <span className="text-lg font-semibold">PROJECTS.JSON</span>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-border rounded-sm overflow-hidden bg-secondary/50 hover:border-primary/50 transition-colors group"
          >
            <div className="relative h-48 bg-muted overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
              <div className="absolute top-2 right-2">
                <span
                  className={`text-xs px-2 py-1 rounded-sm backdrop-blur-sm font-medium ${
                    project.status === "Production"
                      ? "bg-primary/80 text-primary-foreground border border-primary"
                      : project.status === "Research"
                        ? "bg-accent/80 text-accent-foreground border border-accent"
                        : "bg-black/60 text-white border border-white/30"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-foreground font-semibold">
                    [{index + 1}] {project.title}
                  </h3>
                </a>
                <div className="flex gap-2">                  
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="text-muted-foreground hover:text-primary transition-colors hover:cursor-pointer">
                    <DiGithubBadge className="w-8 h-8" />
                  </button>
                </a>

                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-muted rounded-sm text-primary border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <span className="text-primary">$</span>
          <span>git log --oneline</span>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {">"} {projects.length} projects found in repository...
        </p>
      </div>
    </div>
  )
}
