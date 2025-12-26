"use client"

import { useState } from "react"
import { Check } from "lucide-react"

const skills = [
  { name: "Python", level: 90, category: "languages" },
  { name: "SQL", level: 70, category: "languages" },
  { name: "R", level: 60, category: "languages" },
  { name: "Machine Learning", level: 80, category: "ml" },
  { name: "Natural Language Processing", level: 60, category: "ml" },
  { name: "Time Series Analysis", level: 70, category: "ml" },
  { name: "Mathematics / Statistics", level: 80, category: "ml" },
  { name: "TensorFlow / PyTorch", level: 70, category: "frameworks" },
  { name: "Scikit-learn", level: 85, category: "frameworks" },
  { name: "Pandas / NumPy", level: 80, category: "frameworks" },
  { name: "Data Visualization (Matplotlib / Seaborn / Plotly)", level: 70, category: "frameworks" },
  { name: "Docker", level: 50, category: "tools" },
  { name: "Git", level: 70, category: "tools" },
];

const categories = [
  { id: "all", label: "all" },
  { id: "languages", label: "languages" },
  { id: "ml", label: "ml_ai" },
  { id: "frameworks", label: "frameworks" },
  { id: "tools", label: "tools" },
];


export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredSkills = activeCategory === "all" ? skills : skills.filter((skill) => skill.category === activeCategory)

  return (
    <div className="border border-primary/50 rounded-sm p-6 bg-card/30 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4 text-accent">
        <span>{">"}</span>
        <span className="text-lg font-semibold">SKILLS.PY</span>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1 text-sm border rounded transition-colors ${
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground border-primary"
                : "border-primary/30 text-muted-foreground hover:text-primary hover:border-primary/50"
            }`}
          >
            --{cat.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredSkills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span className="text-foreground">{skill.name}</span>
              </div>
              <span className="text-accent text-sm font-mono">{skill.level}%</span>
            </div>

            {/* Progress bar */}
            <div className="h-2 bg-secondary rounded-sm overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <span className="text-primary">$</span>
          <span>python skills.py --export</span>
        </div>
        <p className="text-xs text-muted-foreground mt-2">{">"} Skills successfully loaded from database...</p>
      </div>
    </div>
  )
}
