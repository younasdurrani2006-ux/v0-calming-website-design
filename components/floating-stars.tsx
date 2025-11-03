"use client"

import { useEffect, useState } from "react"

export default function FloatingStars() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-accent/30 animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
