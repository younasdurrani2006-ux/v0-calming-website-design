"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Cloud, Moon, Zap, Star, Play, RotateCcw } from "lucide-react"

const stages = [
  {
    id: 1,
    name: "Stage 1: Light Sleep",
    description: "You drift into light sleep. Your muscles begin to relax and brain waves slow down.",
    icon: Cloud,
    color: "from-blue-500/20 to-cyan-500/20",
    duration: "5-10 minutes",
  },
  {
    id: 2,
    name: "Stage 2: Deeper Rest",
    description: "Your body relaxes further. Heart rate slows and body temperature drops.",
    icon: Moon,
    color: "from-indigo-500/20 to-blue-500/20",
    duration: "20 minutes",
  },
  {
    id: 3,
    name: "Stage 3: Deep Sleep",
    description: "Deep sleep restores energy. Your body repairs tissues and strengthens immunity.",
    icon: Zap,
    color: "from-purple-500/20 to-indigo-500/20",
    duration: "30 minutes",
  },
  {
    id: 4,
    name: "REM: Dream State",
    description: "You dream vividly as memories consolidate. Brain activity increases dramatically.",
    icon: Star,
    color: "from-pink-500/20 to-purple-500/20",
    duration: "20-25 minutes",
  },
]

export default function SleepCycleSimulator() {
  const [currentStage, setCurrentStage] = useState<number>(-1)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const startCycle = () => {
    setIsRunning(true)
    setCurrentStage(0)

    let stage = 0
    intervalRef.current = setInterval(() => {
      stage++
      if (stage < stages.length) {
        setCurrentStage(stage)
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
        setIsRunning(false)
      }
    }, 2500)
  }

  const reset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setCurrentStage(-1)
    setIsRunning(false)
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-center gap-4">
        <Button
          size="lg"
          onClick={startCycle}
          disabled={isRunning}
          className="rounded-full px-8 shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300"
          aria-label={isRunning ? "Sleep cycle is running" : "Start sleep cycle simulation"}
        >
          <Play className="mr-2 w-5 h-5" aria-hidden="true" />
          {isRunning ? "Cycle Running..." : "Start Sleep Cycle"}
        </Button>

        {currentStage >= 0 && (
          <Button
            size="lg"
            variant="outline"
            onClick={reset}
            className="rounded-full px-8 bg-transparent hover:scale-105 transition-all duration-300"
            aria-label="Reset sleep cycle simulation"
          >
            <RotateCcw className="mr-2 w-5 h-5" aria-hidden="true" />
            Reset
          </Button>
        )}
      </div>

      <div className="grid gap-6">
        {stages.map((stage, index) => {
          const Icon = stage.icon
          const isActive = index <= currentStage
          const isCurrent = index === currentStage

          return (
            <Card
              key={stage.id}
              className={`p-6 rounded-3xl transition-all duration-700 ${
                isActive
                  ? `bg-gradient-to-r ${stage.color} border-accent/50 scale-100 opacity-100`
                  : "bg-card/30 border-primary/10 scale-95 opacity-40"
              } ${isCurrent ? "shadow-glow ring-2 ring-accent/50" : ""}`}
              role="article"
              aria-label={`${stage.name} - ${isActive ? "Active" : "Inactive"}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isActive ? "bg-accent/20 scale-110" : "bg-primary/10"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 transition-all duration-500 ${
                      isActive ? "text-accent" : "text-muted-foreground"
                    }`}
                    aria-hidden="true"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className={`text-xl font-semibold transition-colors duration-500 ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {stage.name}
                    </h3>
                    <span
                      className={`text-sm transition-colors duration-500 ${
                        isActive ? "text-accent" : "text-muted-foreground"
                      }`}
                    >
                      {stage.duration}
                    </span>
                  </div>
                  <p
                    className={`leading-relaxed transition-colors duration-500 ${
                      isActive ? "text-muted-foreground" : "text-muted-foreground/50"
                    }`}
                  >
                    {stage.description}
                  </p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {currentStage === stages.length - 1 && !isRunning && (
        <Card className="p-6 bg-gradient-to-r from-accent/20 to-primary/20 border-accent/50 rounded-3xl text-center">
          <Star className="w-12 h-12 text-accent mx-auto mb-4" aria-hidden="true" />
          <h3 className="text-2xl font-semibold mb-2">Cycle Complete!</h3>
          <p className="text-muted-foreground leading-relaxed">
            You've experienced a full 90-minute sleep cycle. Your brain has processed emotions, consolidated memories,
            and prepared you for a new day.
          </p>
        </Card>
      )}
    </div>
  )
}
