const projects = [
  {
    title: "ETL Superstore Sales Analysis",
    description:
      "Designed and implemented ETL pipeline using Pentaho to process and transform retail sales data, with interactive Power BI dashboards for sales performance insights.",
    tech: ["Pentaho", "Power BI", "ETL", "SQL"],
    status: "Completed",
    link: "https://github.com/phoeurnkimhor/etl-superstore",
  },
  {
    title: "Employee Attrition Analysis",
    description:
      "Analyzed employee attrition patterns and trends using Power BI, identifying key factors contributing to turnover and providing actionable insights for HR.",
    tech: ["Power BI", "Data Analysis", "HR Analytics"],
    status: "Completed",
    link: "https://github.com/phoeurnkimhor/employee-attrition-analysis-pbi",
  },
  {
    title: "Khmer Text Summarization",
    description:
      "Fine-tuning pre-trained transformer models for automatic summarization of Khmer language text, addressing the unique challenges of low-resource languages.",
    tech: ["Python", "Transformers", "NLP", "Fine-tuning"],
    status: "Active",
    link: "https://github.com/phoeurnkimhor/khmer-text-summarization",
  },
  {
    title: "Cambodia Inflation Rate Forecasting",
    description:
      "Time series analysis and forecasting of Cambodia's inflation rate using multiple statistical models including ARMA, ARIMA, AR, and MA for economic prediction.",
    tech: ["Python", "ARIMA", "Time Series", "Statistical Modeling"],
    status: "Active",
    link: "https://github.com/phoeurnkimhor/cambodia-inflation-rate-forecasting",
  },
  {
    title: "Khmer Style Transfer (Royal Text)",
    description:
      "Training an LSTM neural network to translate standard Khmer text into formal royal Khmer style, preserving linguistic nuances and cultural context.",
    tech: ["Python", "LSTM", "NLP", "Seq2Seq"],
    status: "Active",
    link: "https://github.com/phoeurnkimhor/khmer-style-transfer",
  },
]

export function ProjectsSection() {
  return (
    <div className="border border-primary/50 rounded-sm p-6 bg-card/30 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4 text-accent">
        <span>{">"}</span>
        <span className="text-lg font-semibold">PROJECTS.JSON</span>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-border rounded-sm p-4 bg-secondary/50 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-foreground font-semibold">
                [{index + 1}] {project.title}
              </h3>
              <span
                className={`text-xs px-2 py-1 rounded-sm ${
                  project.status === "Completed"
                    ? "bg-primary/20 text-primary"
                    : project.status === "Active"
                      ? "bg-accent/20 text-accent"
                      : "bg-muted/20 text-muted-foreground"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-3">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-muted rounded-sm text-primary border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
              >
                <span>→</span>
                <span>View on GitHub</span>
              </a>
            )}
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
