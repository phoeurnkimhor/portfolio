export function AboutSection() {
  return (
    <div className="border border-primary/50 rounded-sm p-6 bg-card/30 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4 text-accent">
        <span>{">"}</span>
        <span className="text-lg font-semibold">ABOUT.MD</span>
      </div>

      <div className="space-y-4 text-foreground leading-relaxed">
        <p>
          <span className="text-primary">#!/usr/bin/env python3</span>
        </p>
        <p className="text-muted-foreground"># Data Science Professional</p>
        <p>
          Passionate data scientist specializing in machine learning, artificial intelligence, and statistical analysis.
          I transform complex data into actionable insights using cutting-edge algorithms and predictive models.
        </p>
        <p>
          <span className="text-accent">Experience:</span> Hands-on experience through academic projects and personal initiatives,
          including building ML models, performing statistical analysis, and creating data-driven solutions.
        </p>
        <p>
          <span className="text-accent">Focus Areas:</span> Machine Learning, Data Visualization, Statistical Analysis, Big Data Technologies.  
        </p>
      </div>
    </div>
  )
}
