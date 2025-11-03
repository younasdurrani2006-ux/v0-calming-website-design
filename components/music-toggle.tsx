"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from "lucide-react"

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null!)

  useEffect(() => {
    // Create audio element for ambient music
    audioRef.current = new Audio("/ambient-sleep.mp3")
    audioRef.current.loop = true
    audioRef.current.volume = 0.3

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ""
        audioRef.current = null!
      }
    }
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          console.log("Audio playback requires user interaction")
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={`fixed top-4 right-4 z-50 rounded-full shadow-glow bg-transparent hover:scale-105 transition-all duration-300 ${
        isPlaying ? "opacity-100" : "opacity-70"
      }`}
      onClick={toggleMusic}
      aria-label={isPlaying ? "Mute ambient music" : "Play ambient music"}
      aria-pressed={isPlaying}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5" aria-hidden="true" />
      ) : (
        <VolumeX className="w-5 h-5" aria-hidden="true" />
      )}
    </Button>
  )
}
