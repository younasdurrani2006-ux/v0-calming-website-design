"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Moon, Brain, Sparkles, Heart, Zap, Cloud, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
const SleepCycleSimulator = dynamic(() => import("@/components/sleep-cycle-simulator"), {
  loading: () => (
    <div className="flex items-center justify-center p-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent" />
    </div>
  ),
})
import FloatingStars from "@/components/floating-stars"
import MusicToggle from "@/components/music-toggle"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main role="main" className="min-h-screen bg-background text-foreground transition-colors duration-400">
      <FloatingStars />
      <MusicToggle />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-3 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />

        <div
          className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-6 flex justify-center">
            <Moon className="w-16 h-16 text-accent animate-pulse" aria-hidden="true" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            The Mind at Rest: Why Sleep Shapes Who We Are
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Exploring how sleep impacts our emotions, memories, and mental well-being.
          </p>
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-lg shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById("why-sleep")?.scrollIntoView({ behavior: "smooth" })}
            aria-label="Scroll to Why Sleep Matters section"
          >
            Begin Your Journey
            <Sparkles className="ml-2 w-5 h-5" aria-hidden="true" />
          </Button>
        </div>
      </section>

      {/* Why Sleep Matters Section */}
      <section id="why-sleep" className="py-16 sm:py-24 px-3 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Why Sleep Matters</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 rounded-3xl hover:shadow-glow hover:scale-105 transition-all duration-300">
              <Brain className="w-12 h-12 text-accent mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-4">The Hippocampus</h3>
              <p className="text-muted-foreground leading-relaxed">
                During sleep, the hippocampus consolidates short-term memories into long-term storage, helping you
                retain what you learned during the day.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 rounded-3xl hover:shadow-glow hover:scale-105 transition-all duration-300">
              <Heart className="w-12 h-12 text-accent mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-4">The Amygdala</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sleep regulates the amygdala, your emotional center. Without adequate rest, emotional reactivity
                increases and mood regulation becomes difficult.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 rounded-3xl hover:shadow-glow hover:scale-105 transition-all duration-300">
              <Zap className="w-12 h-12 text-accent mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-4">The Prefrontal Cortex</h3>
              <p className="text-muted-foreground leading-relaxed">
                This executive control center relies on sleep for decision-making, impulse control, and complex
                problem-solving abilities.
              </p>
            </Card>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sleep is not just rest—it's when your brain processes emotions, consolidates memories, and prepares you
              for the challenges ahead. The intricate dance between these brain regions during sleep shapes your mental
              health, cognitive performance, and emotional resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Sleep Stages Section */}
      <section className="py-16 sm:py-24 px-3 sm:px-6 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">The Stages of Sleep</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 rounded-3xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <Cloud className="w-8 h-8 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Stage 1: Light Sleep</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The transition between wakefulness and sleep. Your muscles relax, and brain waves begin to slow down.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 rounded-3xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <Moon className="w-8 h-8 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Stage 2: Deeper Rest</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Body temperature drops, heart rate slows. This stage prepares you for the restorative deep sleep ahead.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 rounded-3xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <Zap className="w-8 h-8 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Stage 3: Deep Sleep</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The most restorative phase. Your body repairs tissues, builds muscle, and strengthens the immune system.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 rounded-3xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <Star className="w-8 h-8 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">REM: Dream State</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Vivid dreams occur as memories consolidate. Brain activity increases to near-waking levels while muscles
                remain paralyzed.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Sleep Cycle Section */}
      <section className="py-16 sm:py-24 px-3 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-balance">Build Your Sleep Cycle</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg leading-relaxed">
            Experience a 90-minute sleep cycle and see how your brain progresses through each stage.
          </p>

          <SleepCycleSimulator />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-3 sm:px-6 border-t border-primary/20 bg-card/30 backdrop-blur">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Created by <span className="text-accent font-semibold">Younas Durrani</span> | PSYC Semester Project |
            George Mason University
          </p>
          <div className="flex justify-center gap-4 text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="hover:text-accent transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-accent transition-colors" aria-label="Dribbble">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
