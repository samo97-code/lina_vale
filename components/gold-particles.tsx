"use client"

import { useEffect, useRef } from "react"

export function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Array<{
      x: number
      y: number
      size: number
      speedY: number
      speedX: number
      opacity: number
      flickerSpeed: number
      flickerOffset: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 40000)
      particles = Array.from({ length: Math.min(count, 35) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedY: -(Math.random() * 0.15 + 0.05),
        speedX: (Math.random() - 0.5) * 0.1,
        opacity: Math.random() * 0.3 + 0.05,
        flickerSpeed: Math.random() * 0.002 + 0.001,
        flickerOffset: Math.random() * Math.PI * 2,
      }))
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const time = Date.now()

      for (const p of particles) {
        p.y += p.speedY
        p.x += p.speedX

        if (p.y < -10) {
          p.y = canvas.height + 10
          p.x = Math.random() * canvas.width
        }

        const flicker = Math.sin(time * p.flickerSpeed + p.flickerOffset) * 0.5 + 0.5
        const alpha = p.opacity * flicker

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201, 163, 90, ${alpha})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    createParticles()
    animate()

    window.addEventListener("resize", () => {
      resize()
      createParticles()
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[48]"
      aria-hidden="true"
    />
  )
}
