"use client"

import { useState, useEffect } from "react"

export function TerminalHeader() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "PHOEURN KIMHOR"

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 80)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="border border-primary rounded-sm p-6 bg-card/50 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-destructive" />
        <div className="w-3 h-3 rounded-full bg-accent" />
        <div className="w-3 h-3 rounded-full bg-primary" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-primary">root@kimclyde</span>
          <span className="text-muted-foreground">~</span>
          <span className="text-accent">$</span>
          <span className="text-foreground">sudo rm outlier</span>
          <span className="terminal-cursor text-primary">_</span>
        </div>

        <div className="text-2xl md:text-4xl font-bold text-primary tracking-wider">{displayedText}</div>

        <div className="flex items-center gap-2 mt-4">
          <span className="text-primary">root@kimclyde</span>
          <span className="text-muted-foreground">~</span>
          <span className="text-accent">$</span>
          <span className="text-muted-foreground">pip install ai</span>
        </div>
      </div>
    </div>
  )
}
