"use client"

import { useState } from "react"
import { Check, Code2, Database, Brain, Wrench } from "lucide-react"
import { SiScikitlearn, SiPandas, SiTensorflow, SiLibreofficemath, SiR, SiGit, SiDocker, SiMysql, SiPython, SiPlotly } from "react-icons/si"
import { TbBrain, TbMessageCode } from "react-icons/tb"
import { AiTwotoneSliders } from "react-icons/ai";

const skills = [
  { name: "Python", level: 90, category: "languages", icon: SiPython },
  { name: "SQL", level: 70, category: "languages", icon: SiMysql },
  { name: "R", level: 60, category: "languages", icon: SiR },
  { name: "Machine Learning", level: 80, category: "ml", icon: TbBrain },
  { name: "Natural Language Processing", level: 60, category: "ml", icon: TbMessageCode },
  { name: "Time Series Analysis", level: 70, category: "ml", icon: AiTwotoneSliders },
  { name: "Mathematics / Statistics", level: 80, category: "ml", icon: SiLibreofficemath},
  { name: "TensorFlow / PyTorch", level: 70, category: "frameworks", icon: SiTensorflow },
  { name: "Scikit-learn", level: 85, category: "frameworks", icon: SiScikitlearn },
  { name: "Pandas / NumPy", level: 80, category: "frameworks", icon: SiPandas },
  { name: "Data Visualization (Matplotlib / Seaborn / Plotly)", level: 70, category: "frameworks", icon: SiPlotly },
  { name: "Docker", level: 50, category: "tools", icon: SiDocker },
  { name: "Git", level: 70, category: "tools", icon: SiGit },
];

const categories = [
  { id: "all", label: "all", icon: Code2 },
  { id: "languages", label: "languages", icon: Code2 },
  { id: "ml", label: "ml_ai", icon: Brain },
  { id: "frameworks", label: "frameworks", icon: Database },
  { id: "tools", label: "tools", icon: Wrench },
]


export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter((skill) => skill.category === activeCategory)

  // Sort by percentage (descending)
  const sortedSkills = [...filteredSkills].sort((a, b) => b.level - a.level)

  return (
    <div className="border border-primary/50 rounded-sm p-6 bg-card/30 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4 text-accent">
        <span>{">"}</span>
        <span className="text-lg font-semibold">SKILLS.PY</span>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => {
          const IconComponent = cat.icon
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1 text-sm border rounded transition-colors flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-primary/30 text-muted-foreground hover:text-primary hover:border-primary/50"
              }`}
            >
              <span>--{cat.label}</span>
              <IconComponent size={20} className="shrink-0" />
            </button> 
          )
        })}
      </div>

      <div className="space-y-4">
        {sortedSkills.map((skill) => {
          const SkillIcon = skill.icon
          return (
            <div key={skill.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{skill.name}</span>
                  {SkillIcon && <SkillIcon size={22} className="text-foreground" />}
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
          )
        })}
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
