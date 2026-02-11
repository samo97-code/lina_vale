"use client"

import { SectionReveal, StaggerChild } from "./section-reveal"
import { Heart, Sparkles, MessageCircle } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Intimacy",
    text: "Private photos & videos designed to feel close warm, personal, and alive.",
  },
  {
    icon: Sparkles,
    title: "Luxury",
    text: "Cinematic light, polished aesthetics, and tasteful sensuality always classy.",
  },
  {
    icon: MessageCircle,
    title: "Connection",
    text: "Real attention, playful energy, and VIP moments for those who step inside.",
  },
]

export function Benefits() {
  return (
    <SectionReveal className="py-24 px-6 lg:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-serif text-3xl font-bold text-[#FFF3E8] lg:text-4xl">
          What you receive
        </h2>
        <p className="mt-3 text-sm text-[#A7A7B3] lg:text-base">
          {"More than content an experience."}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, i) => (
            <StaggerChild key={benefit.title} index={i}>
              <div className="shine-sweep group flex flex-col items-center rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[#111118] px-8 py-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A35A]/20 hover:shadow-[0_8px_40px_rgba(201,163,90,0.06)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9A35A]/10">
                  <benefit.icon className="h-6 w-6 text-[#C9A35A]" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-[#FFF3E8]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A7A7B3]">
                  {benefit.text}
                </p>
              </div>
            </StaggerChild>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
